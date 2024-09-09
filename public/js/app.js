const weatherForm = document.querySelector("form")
const search = document.querySelector('input')
const messageOne = document.querySelector('#message1')
const messagetwo = document.querySelector('#message2')
const messageThree = document.querySelector('#message3')

weatherForm.addEventListener('submit',(e) =>{
    e.preventDefault()

    const location = search.value
    messageOne.textContent = 'Loading...'
    messagetwo.textContent = ' '
    messageThree.textContent = ' '

    fetch('http://localhost:3001/weather?address='+location).then((response) => {
        response.json().then((data) =>{
            if(data.error) {
                messageOne.textContent = data.error
            }else{
                messageOne.textContent = 'Your searched location is '+data.location
                messagetwo.textContent = data.forecast
                messageThree.textContent = 'Thank You'
            }
        })
    })
})