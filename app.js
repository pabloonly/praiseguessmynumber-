// const heading2 = document.querySelector('h2')
// const btn = document.querySelector('.check')

// function nameChanger (){
//     let sth = heading2.innerText === 'Guess My Number'
//     if(sth){
//         heading2.innerText = 'jasper'
//     }else{
//         heading2.innerText = 'Guess My Number'
//     }
// }

// btn.addEventListener('click',nameChanger)
// let inputField = document.querySelector('.guess')
// inputField.value = 20
// console.log(typeof Number(inputField.value));

const heading2 = document.querySelector('h2')
const btn = document.querySelector('.check')


function logic (){
    let guessedNumber = Math.ceil(Math.random()*6)
    const message = document.querySelector('.message')
    const number = document.querySelector('.number')
    const score = document.querySelector('.score')
    let body = document.body.style
    number.textContent = guessedNumber
    let guess = Number(document.querySelector('.guess').value)
    if(!guess){
        message.textContent = 'no number'
    }else if(guess === guessedNumber){
        message.textContent = 'Winner❤'
        body.backgroundColor = 'green'
    }else {
        message.textContent = 'Loser😂'
        body.backgroundColor = 'red'
        if(score.textContent == 0){
            score.textContent = 0 
        }else{
            score.textContent--
        }
    }
    if(score.textContent == 0){
        heading2.textContent = 'Trials exceed, please click on play again button to restart'
    }
}
btn.addEventListener('click',logic)

const again = document.querySelector('.again')

function ant(){
    let refreshBtn = 'Ctrl + R'
    
}
