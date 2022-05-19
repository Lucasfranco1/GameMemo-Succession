let sequence=[];
let newNumber, i, intervalId;

let screenBegin = document.getElementById('screen-begin');
let screenGame= document.getElementById('screen-game');
let screenEnd= document.getElementById('screen-end');

let text= document.getElementById('text');
let result= document.getElementById('result');
let position= document.getElementsByClassName('number');
let countDigits= document.getElementById('digits');

function play(){
    screenBegin.style.display='none';
    screenGame.style.display='block';
    screenEnd.style.display='none';

    sequence=[];

    beginning();
}

function beginning(){
    /* Numbers random and saved in sequence */
    newNumber = Math.round(Math.random()*9);
    sequence.push(newNumber);

    text.innerHTML= "¡Memorize the sequence!"
    result.innerHTML="";

    //Show the sequence the numbers in array
    i=0;

    //In 1 seg new number the sequence
    intervalId= setInterval(showSequence, 1300);
}

function showSequence(){
    //Add animation for number
    position[sequence[i]].classList.add('show');

    //Then .7s call cleanShow.
    setTimeout(cleanShow, 700);

    //check if is finish the sequence
    if(i==(sequence.length-1)){
        clearInterval(intervalId);
        i=0;
        setInterval(messageTurn, 1500);
    }else{
        i++;
    }
}

function cleanShow(){
    for(j=0; j<=9;j++){
        position[j].classList.remove('show');
    }
}

function messageTurn(){
    text.innerHTML= 'Your turn';
}

/* Function compare the number held down with the number the sequence */
function compare(numberSelect){
    if(sequence[i]== numberSelect.innerHTML){
        i++;
    }else{
        result.innerHTML='Incorrect!'
        result.style.color='#ffca35';

        //then 2.5s and show in screen-end with the result
        setTimeout(showScreenEnd, 2500);
    }
    if(i==sequence.length){
        result.innerHTML='Correct!';
        result.style.color='#ffca35';

        cleanShow();

        //return to begin for insert one new number
        setTimeout(beginning, 1000);
    }
}

function showScreenEnd(){
    screenBegin.style.display='none';
    screenGame.style.display='none';
    countDigits.innerHTML= sequence.length - 1;
    screenEnd.style.display='block';
}