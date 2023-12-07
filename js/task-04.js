const logForm = document.querySelector(".login-form");


const obj = {};

logForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputs = document.querySelector("input");
    if (!inputs.value.trim()) {
        alert('All form fields must be filled in')
    }
 
    const data = new FormData(e.target);
    data.forEach((value, key) => {
        console.log(`${key} : ${value}`);

        obj[key] = value;
    })
    console.log(obj);

    e.target.reset();
})
