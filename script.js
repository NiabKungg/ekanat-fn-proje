let cart = document.querySelector('.cart');
let cartField = document.querySelector('.cart-field');
let add = document.getElementsByClassName('add');

var plus_price = 0;

function addToCartItem_1() {
    plus_price += 590;
    console.log(plus_price);
    document.getElementById('all_plus_price').innerHTML = "รวม " + plus_price.toLocaleString() + " บาท";
}

function addToCartItem_2() {
    plus_price += 890;
    console.log(plus_price);
    document.getElementById('all_plus_price').innerHTML = "รวม " + plus_price.toLocaleString() + " บาท";
}

function addToCartItem_3() {
    plus_price += 790;
    console.log(plus_price);
    document.getElementById('all_plus_price').innerHTML = "รวม " + plus_price.toLocaleString() + " บาท";
}

function addToCartItem_4() {
    plus_price += 490;
    console.log(plus_price);
    document.getElementById('all_plus_price').innerHTML = "รวม " + plus_price.toLocaleString() + " บาท";
}

document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById('add_price1');
    addButton.addEventListener('click', addToCartItem_1);
});

document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById('add_price2');
    addButton.addEventListener('click', addToCartItem_2);
});

document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById('add_price3');
    addButton.addEventListener('click', addToCartItem_3);
});

document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById('add_price4');
    addButton.addEventListener('click', addToCartItem_4);
});

for(let but of add) {
    but.onclick = e => {
        let item = Number(cart.getAttribute('data-count') || 0);
        cart.setAttribute('data-count', item + 1);
        cart.classList.add('on');

        let parent = e.target.parentNode.parentNode;
        let image = parent.querySelector('img');
        let span = document.createElement('span');
        span.className = 'image-animate';
        parent.insertBefore(span, parent.lastElementChild);

        let s_image = image.cloneNode(false);
        span.appendChild(s_image);
        span.classList.add('active');
        setTimeout(() => {
            span.classList.remove('active');
            span.removeChild(s_image);
        }, 500);

        let clone = parent.cloneNode(true);
        clone.querySelector('.add').style.display = "none";
        clone.querySelector('.add').removeAttribute('class');
        cartField.appendChild(clone);

        if (clone) {
            cart.onclick = () => {
                cartField.classList.toggle('display');
            }
        }
    }
}