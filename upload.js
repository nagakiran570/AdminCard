const UserImage = document.querySelector('.image');
const userTitle = document.querySelector('#prod-title');
const userDescription = document.querySelector('#prod-description');
const userPrice = document.querySelector('#price');
const userDiscount = document.querySelector('#discount');
const upload = document.querySelector('button');
const cards = document.querySelector('.cards');

upload.addEventListener('click', function () {
    const file = UserImage.files[0];

    if (!file) {
        alert("Please select an image.");
        return;
    }

    // Create card elements
    const card = document.createElement('div');
    card.classList.add('card');

    const image = document.createElement('img');
    const title = document.createElement('p');
    const description = document.createElement('p');
    const price = document.createElement('p');
    const discount = document.createElement('p');

    // Set content for title, description, price, and discount
    title.innerText = userTitle.value;
    description.innerText = userDescription.value;
    
    // Calculate the discounted price
    const originalPrice = parseFloat(userPrice.value);
    const discountPercentage = parseFloat(userDiscount.value);
    const discountedPrice = originalPrice - (originalPrice * (discountPercentage / 100));

    // Set price and discount text
    price.innerText = `Original Price: $${originalPrice.toFixed(2)}`;
    discount.innerText = `Discounted Price: $${discountedPrice.toFixed(2)}`;

    // Apply line-through style to the original price
    price.style.textDecoration = 'line-through';
    price.style.color = 'red'; // Optional: Make it more noticeable
    discount.style.color = 'green'; // Optional: Highlight the discounted price

    // Use FileReader to set the image source
    const reader = new FileReader();
    reader.onload = function (e) {
        image.src = e.target.result;
        // Append elements to the card
        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(price);
        card.appendChild(discount);
        cards.appendChild(card);

        // Clear input fields
        userTitle.value = '';
        userDescription.value = '';
        userPrice.value = '';
        userDiscount.value = '';
        UserImage.value = '';
    };

    reader.readAsDataURL(file);
});
