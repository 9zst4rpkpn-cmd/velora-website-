// Add product to basket
function addToBasket(name, price, image){

    let basket = JSON.parse(localStorage.getItem("basket")) || [];

    let existing = basket.find(item => item.name === name);

    if(existing){
        existing.quantity++;
    }else{
        basket.push({
            name: name,
            price: parseFloat(price.replace("£","")),
            image: image,
            quantity: 1
        });
    }

    localStorage.setItem("basket", JSON.stringify(basket));

    // Go straight to the basket page
    window.location.href = "basket.html";
}

// Display basket

if(document.getElementById("basket-items")){

    displayBasket();

}

function displayBasket(){

    let basket = JSON.parse(localStorage.getItem("basket")) || [];

    let html="";

    let total=0;

    basket.forEach((item,index)=>{

        total += item.price * item.quantity;

        html += `

        <div class="basket-product">

            <img src="${item.image}">

            <div class="basket-details">

                <h2>${item.name}</h2>

                <p>£${item.price.toFixed(2)}</p>

                <div class="quantity">

                    <button onclick="decrease(${index})">−</button>

                    <span>${item.quantity}</span>

                    <button onclick="increase(${index})">+</button>

                </div>

                <button class="remove-btn" onclick="removeItem(${index})">
                    Remove
                </button>

            </div>

        </div>

        `;

    });

    html += `

        <div class="basket-total">

            <h2>Total: £${total.toFixed(2)}</h2>

            <button class="checkout-btn">
                Proceed to Checkout
            </button>

        </div>

    `;

    document.getElementById("basket-items").innerHTML=html;

}

function increase(index){

    let basket=JSON.parse(localStorage.getItem("basket"));

    basket[index].quantity++;

    localStorage.setItem("basket",JSON.stringify(basket));

    displayBasket();

}

function decrease(index){

    let basket=JSON.parse(localStorage.getItem("basket"));

    if(basket[index].quantity>1){

        basket[index].quantity--;

    }else{

        basket.splice(index,1);

    }

    localStorage.setItem("basket",JSON.stringify(basket));

    displayBasket();

}

function removeItem(index){

    let basket=JSON.parse(localStorage.getItem("basket"));

    basket.splice(index,1);

    localStorage.setItem("basket",JSON.stringify(basket));

    displayBasket();

}