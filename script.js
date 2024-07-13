let output=document.getElementById("display")
let val = document.getElementById("val")

//  Display the number

function display(num){
    output.value += num;
}

// Clear the Display

function allclear(){
    output.value = '';
}

// Erase the last number

function erase(){
    output.value = output.value.slice(0,-1);
}

// Square of Given Number

function square(){
    output.value = Math.pow(output.value,2);
}

// Squareroot of last Number

function sqrt(){
    output.value = Math.sqrt(output.value,2)
}

// For the result Equal value

function result(){
    try{
        output.value = eval(output.value)
    }catch(err){
        output.value='MATHERROR'
    }
}
