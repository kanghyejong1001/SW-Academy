import { request } from "./api.js"
import { getItem, setItem } from "./storage.js"
import debounce from "./debounce.js"
import Header from "./Header.js"
import SuggestKeywords from "./SuggestKeywords.js"
import SearchResults from "./SearchResults.js"

export default function App({ $target }) {
    this.state = {
        keyword: '',
        keywords: [],
        catImages: []
    }

    this.cashe = getItem('keywords_cashe', {})

    this.setState = nextState => {
        this.state = nextState
        
        header.setState({
            ...this.state,
            skeyword: this.state.keyword
        })
        

        suggestKeywords.setState({
            keywords: this.state.keywords
        })

        if (this.state.catImages.length > 0) {
            searchResults.setState(this.state.catImages)
        }
    }

    const header = new Header({ 
        $target,
        initialState: {
            keyword: this.state.keyword
        },
        onKeywordInput: debounce(async (keyword) => {
            if (keyword.trim().length > 0) {                
                let keywords = null
                if (this.cashe[keyword]) {
                    keywords = this.cashe[keyword]
                } else {
                    keywords = await request(`/keywords?q=${keyword}`)
                    this.cashe[keyword] = keywords
                    setItem('keywords_cashe', this.cashe)
                }

                this.setState({
                    ...this.state,
                    keyword,
                    keywords
                })
            }
        }, 500),
        onEnter: () => {
            fetchCatsImage()
        }
    })

    const suggestKeywords = new SuggestKeywords({
        $target,
        initialState: {
            keywords: this.state.keywords,
            cursor: -1
        },
        onKeywordSelect: (keyword) => {
            this.setState({
                ...this.state,
                keyword,
                keywords: []
            })
            fetchCatsImage()
        }
    })

    const searchResults = new SearchResults({
        $target,
        initialState: this.state.catImages
    })

    const fetchCatsImage = async () => {
        const { data } = await request(`/search?q=${this.state.keyword}`)
        console.log(data)
        this.setState({
            ...this.state,
            catImages: data,
            keywords: []
        })
    }
}