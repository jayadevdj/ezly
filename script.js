// Product Data in Rupees
const productData = {
  Food: [
    { name: "Biryani", price: 250 },
    { name: "Paneer Butter Masala", price: 200 },
    { name: "Masala Dosa", price: 100 },
    { name: "Chole Bhature", price: 150 },
    { name: "Pani Puri", price: 50 },
    { name: "Gulab Jamun", price: 80 },
    { name: "Samosa", price: 30 },
    { name: "Rajma Chawal", price: 180 },
    { name: "Tandoori Chicken", price: 300 },
    { name: "Butter Naan", price: 40 },
  ],
  Stationery: [
    { name: "Notebook", price: 50 },
    { name: "Pen", price: 10 },
    { name: "Pencil", price: 5 },
    { name: "Eraser", price: 3 },
    { name: "Marker", price: 20 },
    { name: "Glue", price: 25 },
    { name: "Ruler", price: 15 },
    { name: "Scissors", price: 50 },
    { name: "Tape", price: 30 },
    { name: "Stapler", price: 100 },
  ],
  Medicine: [
    { name: "Paracetamol", price: 20 },
    { name: "Aspirin", price: 30 },
    { name: "Vitamin C", price: 50 },
    { name: "Cough Syrup", price: 100 },
    { name: "Bandages", price: 40 },
    { name: "Antibiotic Cream", price: 70 },
    { name: "Pain Relief Spray", price: 120 },
    { name: "Eye Drops", price: 80 },
    { name: "Thermometer", price: 300 },
    { name: "First Aid Kit", price: 500 },
  ],
};

// Render Products
const renderProducts = () => {
  Object.entries(productData).forEach(([category, products]) => {
    const categoryElement = document.getElementById(`${category.toLowerCase()}-products`);
    products.forEach(({ name, price }) => {
      const productHTML = `
        <div class="product">
          <h4>${name}</h4>
          <p>Price: ₹${price}</p>
          <button class="add-to-cart" data-name="${name}" data-price="${price}">Add to Cart</button>
        </div>
      `;
      categoryElement.innerHTML += productHTML;
    });
  });
};

// Add to Cart Functionality
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-cart")) {
    const name = e.target.dataset.name;
    const price = e.target.dataset.price;
    alert(`Added ${name} (₹${price}) to cart!`);
  }
});

// Booking Functionality
document.getElementById("book-service").addEventListener("click", () => {
  const serviceType = document.getElementById("service-type").value;
  const serviceDate = document.getElementById("service-date").value;

  if (!serviceDate) {
    alert("Please select a date!");
    return;
  }

  document.getElementById("booking-status").textContent = `You have booked a ${serviceType} on ${serviceDate}.`;
});

// Initialize Products
renderProducts();
