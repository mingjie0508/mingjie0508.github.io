const modalTriggerButtons = document.querySelectorAll("[data-modal-target]");
const modals = document.querySelectorAll(".modal");
const modalCloseButtons = document.querySelectorAll(".modal-close");

modalTriggerButtons.forEach(elem => {
    elem.addEventListener("click", event => toggleModal(event.currentTarget.getAttribute("data-modal-target")));
});

modalCloseButtons.forEach(elem => {
    elem.addEventListener("click", event => toggleModal(event.currentTarget.closest(".modal").id));
});

modals.forEach(elem => {
    elem.addEventListener("click", event => {
        if (event.currentTarget===event.target) toggleModal(event.currentTarget.id);
    });
});

function toggleModal(modalId) {
    const modal = document.getElementById(modalId);

    if (getComputedStyle(modal).display==="flex") {
        modal.style.display = "none";
        document.body.style.overflow = "initial";
    } else {
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
    }
}
