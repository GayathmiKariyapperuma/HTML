var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/*document.addEventListener("click", function(event) {
    if (event.target.matches(".close") || !event.target.closest(".modal-class-animate")) {
        closeModal()
    }
},
false
)

function closeModal() {
    document.querySelector(".modal-class-animate").getElementsByClassName.display= "none"
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
*/