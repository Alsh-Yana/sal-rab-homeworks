function renderCartItem(item) {
    const product = item;
    let id;
    let title;
    let count;
    let price;
    let itemCountText = ``;
    itemCountText = itemCountText + product.count;
    itemCountText = `${itemCountText} × `;
    itemCountText = itemCountText + product.price;
    itemCountText = `${itemCountText} ₽ = `;
    let sum = product.count * product.price;
    itemCountText = itemCountText + sum;
    itemCountText = `${itemCountText} ₽`;
    //let itemCountText = `${count} x ${price} ₽ = ${(count * price)} ₽` хотелось бы записать так, но не по заданию
    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}
