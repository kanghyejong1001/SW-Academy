import { getTime, getDate } from "./Current.js";

export default function Time ({ $target }) {
    const $date = document.createElement('h2')
    const $time = document.createElement('h3')
    console.log($target)
    $target.appendChild($date)
    $target.appendChild($time)
    
    let time = getTime()
    let date = getDate()
    console.log(time)
    console.log(date)

    
    this.init = () => {
        $date.innerHTML = `${date.year}/${date.month}/${date.day}`
        $time.innerHTML = `
                ${time.hours < 10 ? "0"+time.hours : time.hours}:
                ${time.minutes < 10 ? "0"+time.minutes : time.minutes}:
                ${time.seconds < 10 ? "0"+time.seconds : time.seconds}`
        setInterval(() => {
            time = getTime()
            $time.innerHTML = `
                ${time.hours < 10 ? "0"+time.hours : time.hours}:
                ${time.minutes < 10 ? "0"+time.minutes : time.minutes}:
                ${time.seconds < 10 ? "0"+time.seconds : time.seconds}`
            
            if (getDate().day !== date.day) {
                date = getDate()
                $date.innerHTML = `${date.year}/${date.month}/${date.day}`
            }
        }, 1000);
    }

    this.init()
}