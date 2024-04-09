/////////////////Nav button Animation

const button = document.querySelector(".nav-button") as HTMLButtonElement;
const list = document.querySelector(".nav-list") as HTMLUListElement;
const logo = document.querySelector(".logo-link") as HTMLLinkElement;

const animationButton = () => {
    button.classList.add("button-animation");
    list.classList.add("ul-ani");
    setTimeout(() => {
        button.classList.add("button-end");
    }, 950);
};

button.addEventListener("click", () => {
    if (window.matchMedia("(max-width: 576px)").matches) {
        logo.classList.add("hide");
        animationButton();
    } else {
        animationButton();
    }
});

///////////////MODALWINDOW

const buttonShowForm = document.querySelector(
    ".coloboration-button"
) as HTMLButtonElement;
const form = document.querySelector(".form") as HTMLFormElement;
const popup = document.querySelector(".popup") as HTMLElement;
const body = document.querySelector("body") as HTMLBodyElement;
const buttonCloseForm = document.querySelector(".form-close") as HTMLElement;
const sendMessage = document.querySelector(".send-form") as HTMLElement;

// import { createFocusTrap } from "focus-trap";
// const trap = createFocusTrap(".form");

function existVerticalScroll() {
    return document.body.offsetHeight > window.innerHeight;
}
function getBodyScrollTop(): number {
    return (
        self.pageYOffset ||
        (document.documentElement && document.documentElement.scrollTop) ||
        (document.body && document.body.scrollTop)
    );
}
const openModal = () => {
    form.style.visibility = "visible";
    popup.style.display = "block";
    // trap.activate();
    const bum = `${getBodyScrollTop()}`;
    if (existVerticalScroll()) {
        body.classList.add("body-lock");
        body.style.top = `-${bum}px`;
    }
};

const closeModal = () => {
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

buttonShowForm.addEventListener("click", () => {
    openModal();
});
buttonCloseForm.addEventListener("click", () => {
    closeModal();
});
popup.addEventListener("click", () => {
    closeModal();
});
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e.target);
    form.style.visibility = "hidden";
    sendMessage.style.visibility = "visible";
    setTimeout(() => {
        closeModal();
    }, 2000);
});

///////////////////PortfolioBlock Animation

const portfolioItems = document.querySelectorAll(
    ".portfolio-item"
) as NodeListOf<HTMLElement>;
const fadeItems = document.querySelectorAll(
    ".item-fade-in"
) as NodeListOf<HTMLElement>;
const portfolioImg = document.querySelectorAll(
    ".portfolio-img"
) as NodeListOf<HTMLElement>;

portfolioItems.forEach((item, index) => {
    item.addEventListener("mouseenter", () => {
        let i = index;
        portfolioImg[i].classList.add("img-transform-in");
    });
});

portfolioItems.forEach((item, index) => {
    item.addEventListener("mouseleave", () => {
        let i = index;
        portfolioImg[i].classList.remove("img-transform-in");
    });
});
