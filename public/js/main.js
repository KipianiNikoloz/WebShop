AOS.init();

import { ModelViewController } from './modelcontrol.js';
import { cardArray } from './card.js'

const Controller = new ModelViewController();

const container = document.querySelector(".project-container");

const headerOuterContainer = document.querySelector(".header-container-outer");
const activeHeader = document.querySelector(".firstScroll");
const headerFirst = document.querySelector("#headerFirst");

const activeClassHeader = document.querySelector(".active");
const firstScroll = document.querySelectorAll(".firstScroll");
const secondScroll = document.querySelectorAll(".secondScroll");
const thirdScroll = document.querySelectorAll(".thirdScroll");

const SubmitBtn = document.querySelector(".login100-form-btn");
const NameInput = document.querySelector("#fullname");
const EmailInput = document.querySelector("#email");
const TextInput = document.querySelector("#textholder")
const NumberInput = document.querySelector("#mobilenumber")

function changeCss() {
    if (this.scrollY >= 454) {
        headerOuterContainer.style.background = "rgb(32, 29, 29)"
        headerOuterContainer.style.borderBottom = "3px solid #04BBBB"
        headerFirst.style.color = "#04BBBB"
        activeHeader.style.color = "#04BBBB"

    } else {
        headerOuterContainer.style.background = "rgb(4, 187, 187)"
        headerOuterContainer.style.borderBottom = "none"
        headerFirst.style.color = "rgb(12, 83, 83)"
        firstScroll[0].style.color = "#fff"
        firstScroll[0].style.fontWeight = "500"
        secondScroll[0].style.color = "#fff"
        secondScroll[0].style.fontWeight = "500"
        thirdScroll[0].style.color = "#fff"
        thirdScroll[0].style.fontWeight = "500"
    }

    if (this.scrollY >= 454 && this.scrollY < 2396.5) {
        firstScroll[0].style.fontWeight = "500"
        firstScroll[0].style.color = "rgb(4, 187, 187)"
        secondScroll[0].style.color = "#fff"
        secondScroll[0].style.fontWeight = "500"
        thirdScroll[0].style.color = "#fff"
        thirdScroll[0].style.fontWeight = "500"
    }

    if (this.scrollY >= 2396.5) {
        firstScroll[0].style.color = "#fff"
        firstScroll[0].style.fontWeight = "500"
        secondScroll[0].style.fontWeight = "500"
        secondScroll[0].style.color = "rgb(4, 187, 187)"
        thirdScroll[0].style.color = "#fff"
        thirdScroll[0].style.fontWeight = "500"
    }

    if (this.scrollY >= 3218.9) {
        thirdScroll[0].style.fontWeight = "500"
        thirdScroll[0].style.color = "rgb(4, 187, 187)"
        firstScroll[0].style.color = "#fff"
        firstScroll[0].style.fontWeight = "500"
        secondScroll[0].style.color = "#fff"
        secondScroll[0].style.fontWeight = "500"
    }
}

(function() {
    firstScroll.forEach(e => {
        e.addEventListener("click", function() {
            document.querySelector("header").scrollIntoView({
                behavior: 'smooth'
            })
        })
    });

    secondScroll.forEach(e => {
        e.addEventListener("click", function() {
            document.querySelector(".offers-section").scrollIntoView({
                behavior: 'smooth'
            })
        })
    });

    thirdScroll.forEach(e => {
        e.addEventListener("click", function() {
            document.querySelector(".contact").scrollIntoView({
                behavior: 'smooth'
            })
        })
    });

    Controller.cardAdder(cardArray, container);

    window.addEventListener("scroll", changeCss, false);

    activeClassHeader.addEventListener("click", function() {
        bodyElement.scrollY = 500
    });
})();

