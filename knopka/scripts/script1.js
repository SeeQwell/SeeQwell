let amount = document.querySelector('.cart__amount'),
    cost = document.querySelector('.cart__cost span');
    amount.addEventListener('input', () => {
         cost.innerHTML = amount.value * (100/500);
});
  