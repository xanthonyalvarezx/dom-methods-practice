body = document.querySelector('body')


const button = document.createElement('button')
button.append('Remove')
//button2
const button2 = document.createElement('button')
button2.append('Create')
//input
const input = document.createElement('input')
input.type = 'text'
input.name = 'remove'
input.id = 'remove'
input.placeholder = 'remove selector here...'
//input2
const input2 = document.createElement('input')
input2.type = 'text'
input2.name = 'create'
input2.id = 'create'
input2.placeholder = 'enter new text here...'
const main = document.createElement('main')
body.append(button,' ',button2, main, input, ' ', input2)

const anchor = document.createElement('a')
anchor.className = 'link'
anchor.href = 'https://www.facebook.com/photo/?fbid=10157599456014005&set=a.10150981369904005'
anchor.append('My Mazda 2 and my Facebook')
const image = document.createElement('img')
image.className = 'image'
image.src = 'Mazda.jpg'
main.append(image, anchor)

button.addEventListener('click', function () {
let selector = document.querySelector(input.value) 
selector.remove()
})

button2.addEventListener('click', function () {
let addition = input2.value
newDiv = document.createElement('div')
body.append(newDiv)
newDiv.append(addition)
console.log(addition)
})