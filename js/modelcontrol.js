export class ModelViewController {
    
    GenerateInnerHTML(o) {
        return `<div data-aos="zoom-in" class="card jschange" style="width: 18rem;">
                   <div class="card-body">
                        <p class="card-text">${o.Title}</p>
                   </div>
                    <a href=${o.Link} target="_blank">
                        <img class="card-img-top" src=${o.Image} alt="Card image cap">
                    </a>
               </div>`;
    }

    changeCss(firstScroll, secondScroll, thirdScroll,headerOuterContainer, activeHeader, headerFirst) {
        const bodyElement = document.querySelector("body");
        
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

    smoothAdd(elem, distinctSection){
        elem.forEach(o => {
            o.forEach(e =>{
                e.addEventListener("click", function() {
                    distinctSection.scrollIntoView({
                        behavior: 'smooth'
                    })
                })
            })
        });
    }

    cardAdder(cardArray, container){
        cardArray.forEach(o => {
            this.AddHTML(o, container)
        });
    }

    scrollAdd(activeClassHeader){
        activeClassHeader.addEventListener("click", function() {
            bodyElement.scrollY = 500
        });
    }

    AddHTML(o, container){
        container.innerHTML += this.GenerateInnerHTML(o);
    }
}