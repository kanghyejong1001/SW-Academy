// function ToggleButton({
//     $target,
//     text
// }){
//     const $button = document.createElement('button');
//     let isInit = false;
    
//     this.toggle = () => {
//         if ($button.style.textDecoration == ''){
//             $button.style.textDecoration = `line-through`;
//         }else{
//             $button.style.textDecoration = '';
//         }
//     }

//     this.render = () => {
//         $button.textContent = text;    
        
//         if (!isInit) {
//             $target.appendChild($button);
//             $button.addEventListener('click', () => {
//                 this.toggle();
//             });

//             isInit = true;
//         }
//     }

//     this.render();
// }

function TimerButton({
    $target,
    text,
    timer = 3000,
}){
    const button = new ToggleButton({ 
        $target, text, onClick: () => {
            setTimeout(() => {
                button.setState({
                    ...button.state,
                    toggled: !button.state.toggled
                })
            }, timer);
        }});
}

function ToggleButton({
    $target,
    text,
    onClick
}){
    const $button = document.createElement('button');
    $target.appendChild($button);
    this.state = {
        clickCount: 0,
        toggled: false
    }
    
    this.setState = (nextState) => {
        this.state = nextState;
        this.render()
    }

    this.render = () => {
        $button.textContent = text;
        
        $button.style.textDecoration =
            this.state.toggled ? 'line-through' : 'none';
    }
    
    $button.addEventListener('click', () => {
        this.setState({
            clickCount: this.state.clickCount + 1,
            toggled: !this.state.toggled
        })

        if (onClick) {
            onClick(this.state.clickCount);
        }

        
    });


    this.render();
}

function ButtonGroup({
    $target,
    buttons
}) {
    const $group = document.createElement('div');
    let isInit = false;

    this.render = () => {
        if (!isInit) {
            buttons.forEach(({type, ...props}) => {
                console.log(type, props);
                if(type == 'toggle'){
                    new ToggleButton({ $target: $group, ...props})
                }else if (type == 'timer') {
                    new TimerButton({ $target: $group, ...props})
                }
            });

            $target.appendChild($group);
            isInit = true;
        }
    }

    this.render();
}


const $app = document.querySelector('main')

// new ToggleButton({
//     $target: $app,
//     text: "Button",
//     onClick: (clickCount) => {
//         if (clickCount % 3 == 0) {
//             alert('3?????? ??????!');
//         }
//     }
// });

// new TimerButton({
//     $target: $app,
//     text: '3??? ?????? ????????????!'
// });

// new TimerButton({
//     $target: $app,
//     text: '5??? ?????? ????????????!',
//     timer: 1000 * 5
// });

new ButtonGroup({
    $target: $app,
    buttons: [
        {
            type: 'toggle',
            text: '?????? ??????',
            onClick: (clickCount) => {
                        if (clickCount % 3 == 0) {
                            alert('3?????? ??????!');
                        }
                    }
        },
        {
            type: 'toggle',
            text: '?????? ??????'
        },
        {
            type: 'timer',
            text: '????????? ??????',
            timer: 1000
        }
    ]
});