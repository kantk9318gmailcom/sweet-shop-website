// Handle form submission
const orderForm = document.getElementById('order-form');
orderForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  
  // Prepare order details
  const orderDetails = {
    name: name,
    phone: phone,
    address: address,
    items: []
  };

  // Get items from the menu
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach(item => {
    const itemName = item.querySelector('h3').textContent;
    const quantity = parseInt(item.querySelector('input[type="number"]').value);
    if (quantity > 0) {
      orderDetails.items.push({ name: itemName, quantity: quantity });
    }
  });

  // Send order details (you can replace this with your backend logic)
  console.log(orderDetails);

  // Display confirmation message
  alert('Your order has been successfully placed! Thank you for choosing Sri Nivasa Sweets.');

  // Clear the form after submission
  orderForm.reset();
});

// Handle order cancellation
const cancelOrderButton = document.getElementById('cancel-order');
cancelOrderButton.addEventListener('click', function() {
  if (confirm('Are you sure you want to cancel your order?')) {
    // Clear the form
    orderForm.reset();
    alert('Your order has been cancelled.');
  }
});
