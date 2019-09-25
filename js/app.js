function showHamburgerMenu() {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");

    const handleClick = () => {
        hamburger.classList.toggle("hamburger-active");
        menu.classList.toggle("menu-active");
    }

    hamburger.addEventListener("click", handleClick);
}

function changeTitle() {
    const message = "Wróć na Leże Kojota";
    let original;

    window.addEventListener("focus", function() {
        if (original) {
            document.title = original;
        }
    })

    window.addEventListener("blur", function() {
        const title = document.title;
        if (title != message) {
            original = title;
        }
        document.title = message;
    })
}

function readMore() {
     const readMoreLessBtn = document.querySelectorAll(".read-more-less-btn");

     function showHideText() {
        const siblingText = this.previousElementSibling;

       if (siblingText.style.display === "none" || siblingText.style.display === "") {
            siblingText.style.display = "block";
            this.textContent = "Czytaj mniej";
        } else {
            siblingText.style.display = "none";
            this.textContent = "Czytaj więcej";
        }
    }

    for (let i = 0; i < readMoreLessBtn.length; i++) {
        readMoreLessBtn[i].addEventListener("click", showHideText);
    }

}

const init = () => {
    showHamburgerMenu();
    changeTitle();
    readMore();
}

document.addEventListener("DOMContentLoaded", init);
