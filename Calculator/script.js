let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((buttons) => {
    buttons.addEventListener('click', (e) => {
        console.log(e.target);
        if (e.target.innerHTML == 'AC'){
            string = "";
            document.querySelector('.output').value = string;
        } else if (e.target.innerHTML == 'C'){
            string = string.substring(0, string.length-1);
        } else if (e.target.innerHTML == '00'){
            string = string + '00';
        } else if (e.target.innerHTML != '='){
            string = string + e.target.innerHTML;
        }
        document.querySelector('input').value = string;
        
        if (e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('.output').value = string;
        }
    })
})