const nameInput = document.querySelector("#name-input");
let nameOutput = document.querySelector("#name-output");

const nameReplace = () => {
    const inputVal = nameInput.value.trim();
    if (inputVal) {
        nameOutput.textContent = inputVal;
    } else {
        nameOutput.textContent = "Anonymous"
    }
    
};

nameInput.addEventListener("input", nameReplace)

