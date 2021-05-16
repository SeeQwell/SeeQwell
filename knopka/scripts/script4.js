let amount = document.querySelector('.cart__amountchet'),
    cost = document.querySelector('.cart__costchet span');
        amount.addEventListener('input', () => {
            cost.innerHTML = amount.value * (100 / 13);
});
                