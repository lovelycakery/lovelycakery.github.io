
const products = [
    { name: "Vegan Brownie", price: "$5", description: "Delicious and healthy brownie.", image: "images/brownie.jpg" },
    { name: "Chia Pudding", price: "$4", description: "Nutritious chia seed pudding.", image: "images/chia.jpg" },
    { name: "Fruit Tart", price: "$6", description: "Fresh fruit on a buttery crust.", image: "images/tart.jpg" },
];

const productList = document.getElementById("product-list");

productList.innerHTML = products
    .map(
        (product) => `
        <div class="product">
            <img src="${product.image}" alt="${product.name}" width="150">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>${product.price}</strong></p>
        </div>
    `
    )
    .join("");
