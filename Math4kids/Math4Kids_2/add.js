const option1 = document.querySelector('#option1')
const option2 = document.querySelector('#option2')
const option3 = document.querySelector('#option3')
const audio = document.querySelector('.myAudio')

var answer = 0;

function generate_equation(){
    var num1 = Math.floor(Math.random() * 13);
    var num2 = Math.floor(Math.random() * 13);
    var dumyAnswer1 = Math.floor(Math.random() * 13);
    var dumyAnswer2 = Math.floor(Math.random() * 13);
    var allAnswers  = [];
    var switchAnswer = [];

    answer = num1 + num2;
    
    document.querySelector('#num1').innerHTML = num1;
    document.querySelector('#num2').innerHTML = num2;

    allAnswers = [answer, dumyAnswer1, dumyAnswer2];

    for(i = allAnswers.length; i--;){
        switchAnswer.push(allAnswers.splice(Math.floor(Math.random() * (i+1)),1)[0]);
    }

    option1.innerHTML = switchAnswer[0];
    option2.innerHTML = switchAnswer[1];
    option3.innerHTML = switchAnswer[2];
}

option1.addEventListener('click', function(){
    if(option1.innerHTML == answer){
        generate_equation()
    }else{
        audio.play()
    }
})
option2.addEventListener('click', function(){
    if(option2.innerHTML == answer){
        generate_equation()
    }else{
        audio.play()
    }
})
option3.addEventListener('click', function(){
    if(option3.innerHTML == answer){
        generate_equation()
    }else{
        audio.play()
    }
})
generate_equation();

