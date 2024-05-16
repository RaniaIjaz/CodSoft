
//Dom Elements
document.addEventListener("DOMContentLoaded", function() {
    const result = document.getElementById("display");
    const buttons = document.querySelectorAll("button");

    //Event Listener
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            const button_val = buttons[i].textContent;

            if (button_val === "=") {
                try {
                    result.value = eval(result.value);
                } catch (error) {
                    result.value = "Error";
                }
            } else if (button_val === "C") {
                result.value = "";
            } else {
                result.value += button_val;
            }
        });
    }
});




