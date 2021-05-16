let amount = document.querySelector('.cart__amountdva'),
    cost = document.querySelector('.cart__costdva span');
     amount.addEventListener('input', () => {
           cost.innerHTML = amount.value * (100 / 500);
});
      