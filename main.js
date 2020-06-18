body = document.querySelector('body')

//main removal button
const mainButton = document.createElement('button')
mainButton.append('Remove main')
mainButton.id = 'mainButton'


//remove button
const button2 = document.createElement('button')
button2.append('remove')
//create button
const button3 = document.createElement('button')
button3.append('create')
//input for remove
const input = document.createElement('input')
input.type = 'text'
input.name = 'remove'
input.id = 'remove'
input.placeholder = 'remove selector here...'
//input for create
const input2 = document.createElement('input')
input2.type = 'text'
input2.name = 'create'
input2.id = 'create'
input2.placeholder = 'enter new text here...'
// main appends
const main = document.createElement('main')
body.append(button2, ' ', button3, ' ', mainButton, main, input, ' ', input2)
//anchor tag 
const anchor = document.createElement('a')
anchor.className = 'link'
anchor.href = 'https://www.facebook.com/photo/?fbid=10157599456014005&set=a.10150981369904005'
anchor.target = '_blank'
anchor.append('My Mazda 2 and my Facebook')
//image tag
const image = document.createElement('img')
image.className = 'image'
image.src = 'Mazda.jpg'
//main appends
main.append(image, anchor)
// main button event listner
mainButton.addEventListener('click', function () {

    main.remove()
})
//remove button event listner
button2.addEventListener('click', function () {
    let selector = document.querySelector(input.value)
    selector.remove()
})

//create button event listner
button3.addEventListener('click', function () {
    let addition = input2.value
    newDiv = document.createElement('div')
    newDiv.id = 'addition'
    body.append(newDiv)
    newDiv.append(addition)
    console.log(addition)
})