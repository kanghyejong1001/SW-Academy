const data = [
    {
        text: 'js 공부하기'
    },
    {
        text: 'js 복습하기'
    },
    {
        text: 'js'
    }
];

const $app = document.querySelector(".app");

function Header({$target, text}) {
    const $header = document.createElement('h1');
    $target.appendChild($header);

    this.render = () => {
        $header.textContent = text;
    }

    this.render();
}

new Header({$target: $app, text: "b"});

function TodoList({$target, data}) {
    const $todoList = document.createElement('div');
    $target.appendChild($todoList);

    this.render = () => {
        data.map((item) => {
            $todoList.innerHTML += `<br>` + item.text;
        });
    }

    this.render();
}

new TodoList({$target: $app, data: data});


function TodoForm({$target, onSubmit}) {
    const $form = document.createElement('div');
    $target.appendChild($form);

    this.render = () => {
        $form.innerHTML = 
        `<input type= "text" name= "todo" />
        <button name="button">확인</button>`;
        isInit = true;
    }
    
    $form.addEventListener('submit', e => {
        e.preventDefault(); // 이벤트 초기화

        const $input = $form.querySelector('input[name="todo"]');
        const text = $input.value;
        onSubmit(text);
    });
    
    this.render();
}

new TodoForm({
    $target: $app, 
    onSubmit: (text) => {
        console.log(text);
}});

localStorage.setItem('data', JSON.stringify(data))
localStorage.setItem('a', JSON.stringify("a"))
console.log(JSON.parse(localStorage.getItem('a')));