const calculateTemp = () => {
    const temp = document.getElementById('temp').value;
    const temp_selected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[temp_selected.selectedIndex].value;
    
    const celToFah = (inputTemp) => {
        const result = Math.round((inputTemp*9/5) + 32) ;
        return result;
    }
    const fahToCel = (inputTemp) => {
        const result = Math.round((inputTemp -32)*5/9) ;
        return result;
    }

    if(valueTemp == 'cel'){
        const result = celToFah(temp);
        document.getElementById('result').innerHTML = `= ${result}°Fahrenheit`;
    } else{
        const result = fahToCel(temp);
        document.getElementById('result').innerHTML = `= ${result}°Celcius`;
    }

}