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

    cardAdder(cardArray, container){
        cardArray.forEach(o => {
            this.AddHTML(o, container)
        });
    }

    AddHTML(o, container){
        container.innerHTML += this.GenerateInnerHTML(o);
    }
}