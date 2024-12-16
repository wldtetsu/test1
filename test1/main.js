// TASK 1

const regExp = /^\d+$/;

const containsOnlyDigits = (str) => {
    return regExp.test(str);
};

console.log(containsOnlyDigits("12345"));
console.log(containsOnlyDigits("12a45"));
console.log(containsOnlyDigits(""));
console.log(containsOnlyDigits("000123"));

// TASK 2

const logEverySecond = () => {
    let secondsPassed = 0;
    setInterval(() => {
        secondsPassed++;
        console.log(`Прошла секунда`);
    }, 1000);
};

logEverySecond();


// TASK 3

const count = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i);
        i++;
        if (i > 10) {
            clearInterval(interval);
        }
    }, 1000);
};

count();

// TASK 4

const div = document.querySelector('div')
    div.onclick= () =>{
        if(div.classList.contains('pink')) {
            div.classList.remove('pink')
        }else {
            div .classList.add('pink')
        }
    }

// TASK 5

const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json');

    xhr.onload = () => {
        const data = JSON.parse(xhr.response);
        console.log('Данные :', data);

    };

xhr.send();
