const input = document.getElementById("input");
const submit = document.getElementById("submit");
const form = document.getElementById("form");

input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        submit.click();
    }
});

form.addEventListener("submit", function(event) {
    event.preventDefault();
    submit.click();
});
