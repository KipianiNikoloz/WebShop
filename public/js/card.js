export let cardArray = new Array();

class Card {
    Title;
    Image;
    Link;

    constructor(title, img, link) {
        this.Title = title;
        this.Image = img;
        this.Link = link;

        cardArray.push(this)
    }
}

let Card1 = new Card("Travel Georgia", "https://res.cloudinary.com/nikolozkipiani/image/upload/v1612607214/project-step_xs1vi6.png", "https://nktptravel.netlify.app/");
let Card2 = new Card("TeenShop", "https://res.cloudinary.com/nikolozkipiani/image/upload/v1612607209/teen-shop_c6dory.png", "https://teenshop.ge");
let Card3 = new Card("Tech Shop", "https://res.cloudinary.com/nikolozkipiani/image/upload/v1612607209/teen-shop_c6dory.png", "#")
let Card4 = new Card("Nature", "https://res.cloudinary.com/nikolozkipiani/image/upload/v1612607209/template2_ltcg3v.jpg", "#")

