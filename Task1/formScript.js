const submit = document.getElementById("submit");
const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    submit.click();
});
