const submit = document.querySelector('input[type=submit]');


const messages = submit.addEventListener('click', () => {
    // const inputText = document.querySelectorAll('input[type=text]');
    const inputPass = document.querySelector('input[type=password]');
    if (inputPass === '') {
        const img = document.createElement('img');
        img.src = 'alert.png'
        inputPass.appendChild(img);
    }
    return img
});

