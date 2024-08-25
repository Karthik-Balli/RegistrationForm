// Welcome to javascript page
const formInput = document.getElementById('form');

formInput.addEventListener('submit', (event) => {
    event.preventDefault();
    let formData = {
        firstName: "",
        lastName: "",
        gender: "",
        email: "",
        password: ""
    };

    formData.firstName = document.getElementById('firstname').value;
    formData.lastName = document.getElementById('lastname').value;

    let ele = document.getElementsByName('inlineRadioOptions');
    for(let i = 0; i < ele.length; i++) {
        if(ele[i].type == 'radio') {
            if(ele[i].checked) {
                formData.gender = ele[i].value;
            }
        }
    }

    formData.email = document.getElementById('email').value;
    formData.password = document.getElementById('password').value;

    console.log(formData);

    // let outputText = document.getElementById('output-container');

    // let entries = Object.entries(formData);
    // entries.forEach(([key, value]) => {
    //     let paragraph = document.createElement('p');
    //     paragraph.textContent = `${key}: ${value}`;
    //     outputText.appendChild(paragraph);
    // })
})