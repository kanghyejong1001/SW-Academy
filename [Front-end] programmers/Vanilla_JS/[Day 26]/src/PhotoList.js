/* 
    initialState : [
        {
            id: 1,
            imagePath: ''
        }
    ]

*/
export default function PhotoList({ $target, initialState, onScrollEnded }) {
    let isInitialize = false
    
    const $photoList = document.createElement('div')
    $target.appendChild($photoList)
    this.state = initialState

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !this.state.isLoading) {
                if (this.state.totalCount > this.state.photos.length) {
                    console.log('끝' + entry)
                    observer.unobserve(entry.target)
                    onScrollEnded()
                }
            }
        })
    }, {
        threshold: 0.5
    })

    this.setState = nextState => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        if (!isInitialize) {
            $photoList.innerHTML = `
            <ul class="PhotoList_photos"></ul>
            `
            // <button class="PhotoList_loadMore" style="width:100%; height:200px; font-size: 20px;">Load More</button>

            isInitialize = true
        }

        const { photos } = this.state
        const $photos = $photoList.querySelector('.PhotoList_photos')
        photos.forEach(photo => {
            if ($photos.querySelector(`li[data-id="${photo.id}"]`) === null) {
                const $li = document.createElement('li')
                $li.setAttribute('data-id', photo.id)
                $li.style = 'list-style: none; min-height: 500px'
                $li.innerHTML = `<img width="100%" src="${photo.imagePath}" />`
                
                $photos.appendChild($li)
            }  
        })   
        const $lastLi = $photos.querySelector('li:last-child')
    
        if ($lastLi !== null) {
            observer.observe($lastLi)
        }
    }

    this.render()

    // 버튼으로 더보기
    // $photoList.addEventListener('click', e => {
    //     if (e.target.className = 'PhotoList_loadMore' && !this.state.isLoading) {
    //         onScrollEnded()
    //     }
    // })

    // 스크롤 움직임 계속 감지해서 사진 개수와 <li> 태그 개수 확인
    // window.addEventListener('scroll', () => {
    //     const { isLoading, totalCount, photos } = this.state
    //     const isScollEnded = (window.innerHeight + window.scrollY) + 100 >= document.body.offsetHeight
        
    //     if (isScollEnded && !isLoading && photos.length < totalCount) {
    //         onScrollEnded()
    //     }
    // })
}