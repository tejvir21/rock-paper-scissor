let num = Math.round(Math.random()*2)

const choices = ['rock', 'paper', 'scissor']

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissor = document.getElementById('scissor');

let user = document.getElementById('user');
let computer = document.getElementById('computer');
let resBtn = document.getElementById('res-btn');
 
let user_choice = null
let user_score = 0
let computer_choice = null
let computer_score = 0

let res = "Let's Play"

rock.addEventListener('click', () => {
    user_choice = rock.getAttribute('id')
    comp_choose()
})

paper.addEventListener('click', () => {
    user_choice = paper.getAttribute('id')
    comp_choose()
})

scissor.addEventListener('click', () => {
    user_choice = scissor.getAttribute('id')
    comp_choose()
})

resBtn.addEventListener('click', () => {
    
    user_score = 0
    computer_score = 0
    res = "Let's Play"
    update_data()
})

comp_choose = () => {
    if(user_choice !== null) {
    computer_choice = choices[num]

    num = Math.round(Math.random()*2)

    checkWinner();
    update_data();
}
}

update_data = () => {
    user.innerText = user_score
    computer.innerText = computer_score

    if(res === 'You Won!') {
        resBtn.innerText = res + ", " + user_choice + " beats " + computer_choice
        resBtn.style.backgroundColor = 'green'
    }
    else if(res === 'You Lost!') {
        resBtn.innerText = res + ", " + computer_choice + " beats " + user_choice
        resBtn.style.backgroundColor = 'red'
    }
    else {
        resBtn.innerText = res
        resBtn.style.backgroundColor = 'black'
    }
}

const checkWinner = () => {
    if(user_choice === 'rock' && computer_choice === 'scissor') {
        res = 'You Won!'
        user_score++;
    }
    else if(user_choice === 'paper' && computer_choice === 'rock') {
        res = 'You Won!'
        user_score++;
    }
    else if(user_choice === 'scissor' && computer_choice === 'paper') {
        res = 'You Won!'
        user_score++;
    }
    else if(user_choice === computer_choice) {
        res = "It's a Draw!"
    }
    else {
        res = "You Lost!"
        computer_score++;
    }
}
