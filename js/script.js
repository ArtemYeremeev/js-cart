window.addEventListener('DOMContentLoaded', function() {
    let products = document.querySelectorAll('.product'),
        buttons = document.querySelectorAll('button'),
        openButton = document.querySelector('.open');

    // Init cart;
    function createCart() {
        let cart = document.createElement('div'),
            field = document.createElement('div'),
            heading = document.createElement('h2'),
            closeButton = document.createElement('button');
        
        cart.classList.add('cart');
        field.classList.add('cart-field');
        closeButton.classList.add('close');

        heading.textContent = 'Items in cart:';
        closeButton.textContent = 'Close';

        document.body.appendChild(cart);
        cart.appendChild(heading);
        cart.appendChild(field);
        cart.appendChild(closeButton);
    }
    createCart();

    let field = document.querySelector('.cart-field'),
        cart = document.querySelector('.cart'),
        close = document.querySelector('.close');

    function openCart() {
        cart.style.display = 'block';
    }
    function closeCart() {
        cart.style.display = 'none';
    }

    openButton.addEventListener('click', openCart);
    close.addEventListener('click', closeCart);

    buttons.forEach(function(item, i){
        item.addEventListener('click', function() {
            let item = products[i].cloneNode(true),
                addButton = item.querySelector('button'),
                deleteButton = document.createElement('button');
            
            // Handling add to cart
            addButton.remove();
            item.appendChild(deleteButton);
            field.appendChild(item);
            buttons[i].disabled = true;
            buttons[i].textContent = 'Out of stock!';

            // Handling delete from cart
            deleteButton.textContent = 'Remove';
            deleteButton.addEventListener('click', function() {
                item.remove();
                buttons[i].disabled = false;
                buttons[i].textContent = 'Buy!';
            });
        });
    });
});
