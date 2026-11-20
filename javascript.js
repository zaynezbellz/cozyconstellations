//get serious pls

//AUDIOS
const btnsfx = new Audio("button.mp3");
const glittersfx = new Audio("glitter.mp3");
const bgsfx = new Audio("stargazingbg.mp3");
const possfx = new Audio("posshow.mp3");

document.addEventListener("DOMContentLoaded", () => {

    bgsfx.currentTime = 0;
    bgsfx.play();

    const cursor = document.getElementById("cursor");

    window.addEventListener('mousemove', e => {
        cursor.style.top = e.pageY + 'px';
        cursor.style.left = e.pageX + 'px';
    });

    window.addEventListener('mousedown', () => {
        cursor.style.backgroundImage = "url('maincursor.png')";
    });

    window.addEventListener('mouseup', () => {
        cursor.style.backgroundImage = "url('clickcursor.png')";
    });

});

let allText = document.getElementById("all");

let username = "";

// SHOW LOGIN
function showLogin() {

    document.getElementById("startScreen").style.display = "none";
    document.getElementById("loginScreen").style.display = "flex";

}

// LOGIN USER
function loginUser() {

    let input = document.getElementById("usernameInput").value;

    if (input.trim() === "") {
        alert("Please enter your name!");
        return;
    }

    username = input;

    document.getElementById("welcomeText").innerText =
        "Welcome, " + username + "!";

    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("posSystem").style.display = "block";

}

// GO BACK TO LOGIN
function goToLogin() {

    document.getElementById("posSystem").style.display = "none";
    document.getElementById("loginScreen").style.display = "flex";

}

window.addEventListener("load", () => {

    let products = document.querySelectorAll(".product");

    products.forEach((product, index) => {

        setTimeout(() => {
            product.classList.add("show");
        }, index * 300); // delay so they appear one by one

    });

});


//products array
let products = [
    //MILK TEAS
    { name: "ARCTURUS RED", subname: "Red Velvet Milk Tea", price: 120, image: "redvelvet.png", category: "beverages", sub: "Milk Tea" },
    { name: "CYGNUS SWAN", subname: "Salted Caramel Milk Tea", price: 130, image: "salted.png", category: "beverages", sub: "Milk Tea" },
    { name: "BIG DIPPER", subname: "Blueberry Milk Tea", price: 135, image: "blueberry.png", category: "beverages", sub: "Milk Tea" },
    { name: "LYNX PEPPER", subname: "Peppermint Milk Tea", price: 135, image: "peppermint.png", category: "beverages", sub: "Milk Tea" },
    { name: "ANTLIA DEW", subname: "Honeydew Milk Tea", price: 135, image:"honeydew.png", category: "beverages", sub: "Milk Tea" },
    { name: "CELESTE WHITE", subname: "Bunny Milk Tea", price: 135, image: "whitebunny.png", category: "beverages", sub: "Milk Tea" },
    { name: "MOON-BEAM", subname: "Coconut Milk Tea", price: 135, image: "coconut.png", category: "beverages", sub: "Milk Tea" },
    //COFEE
    { name: "STARDUST LATTE", subname:"Iced Latte", price: 110, image: "icedlatte.png", category: "beverages", sub: "Coffee" },
    { name: "COSMIC MOCHA", subname: "Iced Mocha", price: 120, image: "icedmocha.png", category: "beverages", sub: "Coffee" },
    { name: "SUNBEAM MACCHIATO", subname: "Caramel Macchiato", price: 120, image: "caramel.png", category: "beverages", sub: "Coffee" },
    { name: "METEOR EXPRESS", subname: "Expresso", price: 120, image: "expresso.png", category: "beverages", sub: "Coffee" },
    //CAKE
    { name: "COSMIC DREAM", subname: "Astrology-Themed Blubbery Cake", price: 150, image: "star.png", category: "dessert", sub: "Cakes" },
    { name: "LUNAR CREAM", subname: "Cheesecake", price: 160, image: "cheese.png", category: "dessert", sub: "Cakes" },
    { name: "PRISM NEBULA", subname: "Rainbow Cake", price: 160, image: "rainbow.png", category: "dessert", sub: "Cakes" },
    { name: "STARLIGHT MACARONS", subname: "Constellation Macarons", price: 160, image: "conss.png", category: "dessert", sub: "Cakes" },
    { name: "ECLIPSE", subname: "Moon-and-Sun Cupcakes", price: 160, image: "sunmoon.png", category: "dessert", sub: "Cakes" },
    //ICE CREAM
    { name: "BLUE MOON", subname: "Blueberry", price: 160, image: "blueberryic.png", category: "dessert", sub: "Ice Cream" },
    { name: "ASTEROID", subname: "Rocky Road", price: 160, image: "rockyroad.png", category: "dessert", sub: "Ice Cream" },
    { name: "GALAXY COCOA", subname: "Chocolate", price: 160, image: "chocolateic.png", category: "dessert", sub: "Ice Cream" },
    { name: "STARLIGHT VANILLA", subname: "Vanilla", price: 160, image: "vanilla.png", category: "dessert", sub: "Ice Cream" },
    { name: "COMET MINT", subname: "Mint Choco", price: 160, image: "mintchoco.png", category: "dessert", sub: "Ice Cream" }
];



//PRODUCTS CONTAINER
let productList = document.getElementById("productList");

products.forEach((product, index) => {

    productList.innerHTML += `

    <div class="product">
    <h3>${product.name}</h3>
    <p>₱${product.price}</p>
    <button onclick="addToCart(${index})">Add</button>
    </div>
    `;
});


//ADD TO CART BUTTON
let cart = {};
let total = 0;

function addToCart(index) {

    let product = products[index];

    if (cart[index]) {
        cart[index.qty++];
    } else {
        cart[index] = {
            name: product.name,
            price: product.price,
            qty: 1
        };
    }

    displayCart();
}


//DISPLAY IN CART 
function displayCart() {

    let cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";

    let total = 0;

    for (let index in cart) {

        let item = cart[index];

        total += item.price * item.qty;

        cartItems.innerHTML += `

        <div class="itemzzz">
        <li>
        ${item.name} - ₱${item.price}
        <br>
        <button class="decreasebtn" onclick="decreaseQty(${index})">-</button>

        ${item.qty}

        <button class="increasebtn" onclick="increaseQty(${index})">+</button>

        </li>
        </div>

        `;
    }

    document.getElementById("total").innerText = total;
}

//QUANTITY BUTTONS
function increaseQty(index) {

    cart[index].qty++;

    displayCart();
}

function decreaseQty(index) {

    cart[index].qty--;

    if (cart[index].qty <= 0) {
        delete cart[index];
    }

    displayCart();
}


//REMOVE ITEM
function removeItem(index) {

    total -= cart[index].price;

    cart.splice(index, 1);
    displayCart();
}





//PRODUCT LIST
function displayProducts(productArray) {

    let productList = document.getElementById("productList");

    productList.innerHTML = "";

    let groups = {};

    productArray.forEach(product => {

        if (!groups[product.sub]) {
            groups[product.sub] = [];
        }

        groups[product.sub].push(product);

    });


    for (let sub in groups) {

        productList.innerHTML += `
<h3 class="subTitle">${sub}</h3>
<div class="product-grid"></div>
`;

        let grids = productList.querySelectorAll(".product-grid");
        let currentGrid = grids[grids.length - 1];

        groups[sub].forEach((product, index) => {

            currentGrid.innerHTML += `
<div id="productzzzz">
<div class="product">
<h4 class="productNAME">${product.name}</h4>
<p class="productDef">${product.subname}</p>
<img src="${product.image}" class="product-img">
<p class="productPrice">₱${product.price}</p>

<button class="addbtnnn" onclick="addToCart(${products.indexOf(product)}), starToCart(this)">
Add
</button>

</div>
</div>

`;

        });

    }

}


//CATEGORIES
function openCategory(category) {

    let filtered = products.filter(p => p.category === category);

    displayProducts(filtered);
}

displayProducts(products);


//SUBCATEGORIES
function filterProducts(category){

    if (category === "all") {
        allText.innerHTML = "ALL";
        displayProducts(products);
        return;
    }

    if (category === "beverages") {
        allText.innerHTML = "BEVERAGES";
    } 

    if (category === "dessert") {
        allText.innerHTML = "DESSERTS";
    }

    let filtered = products.filter(product => product.category === category);

    displayProducts(filtered);


}

function showCategory(category) {

    let products = document.querySelectorAll(".product");

    products.forEach((product, index) => {

        product.classList.remove("show");

        setTimeout(() => {
            product.classList.add("show");
        }, index * 80); // delay so they appear one by one

    });

}




function starToCart(button) {
    const cart = document.getElementById("cartIcon");
    const cartRect = cart.getBoundingClientRect();
    const btnRect = button.getBoundingClientRect();

    const starCount = 6; // number of stars
    const starDelay = 80; // delay between stars

    for (let i = 0; i < starCount; i++) {

        const star = document.createElement("div");
        star.innerHTML = "⭐";
        star.classList.add("flying-star");

        // random starting position around the button
        star.style.left = btnRect.left + (Math.random() * 20) + "px";
        star.style.top = btnRect.top + (Math.random() * 20) + "px";

        document.body.appendChild(star);

        setTimeout(() => {
            star.style.left = cartRect.left + "px";
            star.style.top = cartRect.top + "px";
            star.style.transform = "scale(0.5)";
            star.style.opacity = "0.3";
        }, i * starDelay);

        setTimeout(() => {
            star.remove();
        }, 900 + i * starDelay); // make sure stars are removed after flying
    }

    // trigger cart bounce after the last star reaches it
    setTimeout(() => {
        cart.classList.add("bounce");
        setTimeout(() => cart.classList.remove("bounce"), 400);
    }, starCount * starDelay + 400); // delay slightly after last star
}