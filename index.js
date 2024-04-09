/////////////////Nav button Animation
var button = document.querySelector(".nav-button");
var list = document.querySelector(".nav-list");
var logo = document.querySelector(".logo-link");
var animationButton = function () {
    button.classList.add("button-animation");
    list.classList.add("ul-ani");
    setTimeout(function () {
        button.classList.add("button-end");
    }, 950);
};
button.addEventListener("click", function () {
    if (window.matchMedia("(max-width: 576px)").matches) {
        logo.classList.add("hide");
        animationButton();
    }
    else {
        animationButton();
    }
});
///////////////MODALWINDOW
var buttonShowForm = document.querySelector(".coloboration-button");
var form = document.querySelector(".form");
var popup = document.querySelector(".popup");
var body = document.querySelector("body");
var buttonCloseForm = document.querySelector(".form-close");
var sendMessage = document.querySelector(".send-form");
// import { createFocusTrap } from "focus-trap";
// const trap = createFocusTrap(".form");
function existVerticalScroll() {
    return document.body.offsetHeight > window.innerHeight;
}
function getBodyScrollTop() {
    return (self.pageYOffset ||
        (document.documentElement && document.documentElement.scrollTop) ||
        (document.body && document.body.scrollTop));
}
var openModal = function () {
    form.style.visibility = "visible";
    popup.style.display = "block";
    // trap.activate();
    var bum = "".concat(getBodyScrollTop());
    if (existVerticalScroll()) {
        body.classList.add("body-lock");
        body.style.top = "-".concat(bum, "px");
    }
};
var closeModal = function () {
    form.style.visibility = "hidden";
    popup.style.display = "none";
    sendMessage.style.visibility = "hidden";
    form.reset();
    // trap.deactivate();
    if (existVerticalScroll()) {
        body.classList.remove("body-lock");
        window.scrollTo(0, parseFloat(body.style.top) * -1);
    }
};
buttonShowForm.addEventListener("click", function () {
    openModal();
});
buttonCloseForm.addEventListener("click", function () {
    closeModal();
});
popup.addEventListener("click", function () {
    closeModal();
});
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(e.target);
    form.style.visibility = "hidden";
    sendMessage.style.visibility = "visible";
    setTimeout(function () {
        closeModal();
    }, 2000);
});
///////////////////PortfolioBlock Animation
var portfolioItems = document.querySelectorAll(".portfolio-item");
var fadeItems = document.querySelectorAll(".item-fade-in");
var portfolioImg = document.querySelectorAll(".portfolio-img");
portfolioItems.forEach(function (item, index) {
    item.addEventListener("mouseenter", function () {
        var i = index;
        portfolioImg[i].classList.add("img-transform-in");
    });
});
portfolioItems.forEach(function (item, index) {
    item.addEventListener("mouseleave", function () {
        var i = index;
        portfolioImg[i].classList.remove("img-transform-in");
    });
});
