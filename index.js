console.log('JS Connected!')


let counter = document.querySelector('h1')

// Step 1: Grab HTML element

// Step 2: Write a function

// Step 3: Combine steps 1 and 2 using an event listener

let plusBtn = document.querySelector('#plus-btn')

console.log(plusBtn)

let count = 0
const increase = () => {
    // count = count + 1 these are all the same
    // count += 1
    count++
    console.log(count)
    counter.textContent = count
}

plusBtn.addEventListener('click', increase)





let minusBtn = document.querySelector('#minus-btn')

const decrease = () => {
    count--
    console.log(count)
    counter.textContent = count
}

minusBtn.addEventListener('click', decrease)





let resetBtn = document.querySelector('#reset-btn')

const reset = (evt) => {
    count = 0
    console.log(count)
    counter.textContent = count
    console.log(evt)
}

resetBtn.addEventListener('click', reset)

// Find a way to get the text content from the item we click on,
//and add it as a class to our body and main elements

const themeButtons = document.querySelectorAll('.theme-buttons')

console.log(themeButtons)


// wont be on friday assessment 


const selectTheme = (evt) => {

    document.querySelector('body').classList = evt.target.textContent
    document.querySelector('main').classList = evt.target.textContent

    // const buttons = document.querySelectorAll('button')

    // for(let i = 0; i < buttons.length; i++){
    //     buttons[i].classList = evt.target.textContent
    // }
}

for (let i = 0; i < themeButtons.length; i++){
    // console.log(themeButtons[i])
    themeButtons[i].addEventListener('click', selectTheme)
}