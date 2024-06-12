const result = document.getElementById('result');


const clear1 = ()  => {
    result.value = '';
}

const display = (val) => {
    result.value = result.value + val;
}

const calc = () => {
    let num1 = result.value;

    for(i=0; i <num1.length; i++)
    {
        if((num1[i] == '+' || num1[i] === '-' || num1[i] === '*' || num1[i] === '/') && (num1[i+1] === '+' || num1[i+1] === '-' || num1[i+1] === '*' || num1[i+1] === '/'))
        {
            alert("Invalid Expression");
            clear1();
            return;
        }

        if(num1[i] == '/' && num1[i+1] == '0')
        {
            alert("Cannot divide by zero");
            clear1();
            return;
        }
        
    }
    let num2 = eval(num1);
    result.value = num2;

    setTimeout(clear1, 3000);
}

const back = () => {
    result.value = result.value.slice(0, -1);
}