export function request (url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        console.log(xhr);
        xhr.addEventListener("load", (e) => {
            if (xhr.readyState == 4) {
                if(xhr.status == 200){
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject(xhr.statusText);
                }
            } 
        });
    
        xhr.addEventListener('error', (e) => reject(xhr.statusText));
    
        xhr.open('GET', url);
        xhr.send();
    });
}