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
    var switchAnswers = [];

    answer = num1 + num2;
    
    document.querySelector('#num1').innerHTML = num1;
    document.querySelector('#num2').innerHTML = num2;

    allAnswers = [answer, dumyAnswer1, dumyAnswer2];

    for(i = allAnswers.length; i--;){
        switchAnswers.push(allAnswers.slice(Math.floor(Math.random() * (i+1)),1)[0]);
    }

    option1.innerHTML = switchAnswers[0];
    option2.innerHTML = switchAnswers[1];
    option3.innerHTML = switchAnswers[2];
    // option1.innerHTML = answer;
    // option2.innerHTML = dumyAnswer1;
    // option3.innerHTML = dumyAnswer2;
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

