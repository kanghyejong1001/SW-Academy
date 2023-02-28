import { request } from "./api.js"
import Nodes from "./Nodes.js"
import ImageViewer from "./ImageViewer.js"
import Loading from "./Loading.js"
import Breadcrumb from "./Breadcrumb.js"

const DUMMY_DATA = [
    {
        "id": "1",
        "name": "노란고양이",
        "type": "DIRECTORY",
        "filePath": null,
        "parent": null
    },
    {
        "id": "3",
        "name": "까만고양이",
        "type": "DIRECTORY",
        "filePath": null,
        "parent": null
    },
    {
        "id": "10",
        "name": "고등어무늬 고양이",
        "type": "DIRECTORY",
        "filePath": null,
        "parent": null
    },
    {
        "id": "13",
        "name": "삼색이 고양이",
        "type": "DIRECTORY",
        "filePath": null,
        "parent": null
    },
    {
        "id": "14",
        "name": "회색고양이",
        "type": "DIRECTORY",
        "filePath": null,
        "parent": null
    },
    {
        "id": "20",
        "name": "하얀고양이",
        "type": "DIRECTORY",
        "filePath": null,
        "parent": null
    }
]

const DUMMY_DATA_2 = [
    {
        "id": "5",
        "name": "2021/04",
        "type": "DIRECTORY",
        "filePath": null,
        "parent": {
            "id": "1"
        }
    },
    {
        "id": "19",
        "name": "물 마시는 사진",
        "type": "FILE",
        "filePath": "/images/a2i.jpg",
        "parent": {
            "id": "1"
        }
    }
]

export default function App({ $target }) {  
    this.state = {
        isRoot: true,
        isLoading: false,
        nodes: [],
        paths: []
    }

    const loading = new Loading({
        $target
    })

    const breadcrumb = new Breadcrumb({
        $target,
        initialState: this.state.paths,
        onClick: async (id) => {
            
            if (id) {
                const nextPaths = [...this.state.paths]
                const pathIndex = nextPaths.findIndex(path => path.id === id)
                this.setState({
                    ...this.state,
                    paths: nextPaths.slice(0, pathIndex + 1)
                })
            } else {
                this.setState({
                    ...this.state,
                    paths: []
                })
            }
            
            await fetchNodes(id)
        }
    })

    const nodes = new Nodes({
        $target,
        initialState: {
            isRoot: this.state.isRoot,
            nodes: this.state.nodes,
            selectedImageUrl: null
        },
        // onPrevClick: () => {},
        onClick: async (node) => {
            if (node.type === 'DIRECTORY') {
                await fetchNodes(node.id)
                
                this.setState({
                    ...this.state,
                    paths: [...this.state.paths, node]
                })
            }

            if (node.type === 'FILE') {
                this.setState({
                    ...this.state,
                    selectedImageUrl: `https://cat-photos-dev-serverlessdeploymentbucket-fdpz0swy5qxq.s3.ap-northeast-2.amazonaws.com/public${node.filePath}`
                })
            }
        },

        onPrevClick: async () => {
            const nextPaths = [...this.state.paths]
            nextPaths.pop()
            this.setState({
                ...this.state,
                paths: nextPaths
            })
            if (nextPaths.length === 0) {
                await fetchNodes()
            } else {
                await fetchNodes(nextPaths[nextPaths.length - 1].id)
            }
        }
    })

    const imageViewer = new ImageViewer({ 
        $target,
        onClose: () => {
            this.setState({
                ...this.state,
                selectedImageUrl: null
            })
        } 
    })

    this.setState = nextState => {
        this.state = nextState

        nodes.setState({
            isRoot: this.state.isRoot,
            nodes: this.state.nodes
        })

        imageViewer.setState({
            selectedImageUrl: this.state.selectedImageUrl
        })

        loading.setState(this.state.isLoading)

        breadcrumb.setState(this.state.paths)
    }

    const fetchNodes = async (id) => {
        this.setState({
            ...this.state,
            isLoading: true
        })
        const nodes = await request(id ? `/${id}` : `/`)
        this.setState({
            ...this.state,
            nodes,
            isRoot: id ? false : true,
            isLoading: false
        })
    }

    fetchNodes()
}
