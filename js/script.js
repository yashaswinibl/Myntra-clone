
function openMenu(){
    document.getElementById("menu").style.left='0';
}
function closeMenu(){
    document.getElementById("menu").style.left='-280px'
}
const mobileNumberInput = document.getElementById("mobileNumberInput");
const mobileNumberSpan = document.querySelector(".mobile-number");
const star=document.querySelector(".star");
const continueButton = document.getElementById("continueButton");

mobileNumberInput.addEventListener("click", () => {
    mobileNumberSpan.style.display = "none";
     star.style.display="none";
});
mobileNumberInput.addEventListener("input", () => {
    const inputValue = mobileNumberInput.value;
    if (/[a-zA-Z]/.test(inputValue)) {
        alert("Please enter only numeric characters in the mobile number.");
    }

});
continueButton.addEventListener("click", () => {
    const inputValue = mobileNumberInput.value.trim();
    if (inputValue === "") {
        alert("Please enter a mobile number.");
    }
    
});
continueButton.addEventListener("click", () => {
    const inputValue = mobileNumberInput.value.trim();
if (!isValidMobileNumber(inputValue)) {
    alert("Please enter a valid 10-digit mobile number.");
}
else
      alert("Succesfull");
});

function isValidMobileNumber(number) {
    const numericRegex = /^[0-9]+$/;
    return numericRegex.test(number) && number.length === 10;
}