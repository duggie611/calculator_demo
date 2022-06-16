function display(num){
    document.getElementById('result').value += num;
    if(num === 'AC'){
        document.getElementById('result').value = '';
    }
}
