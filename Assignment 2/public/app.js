async function loadProducts() {
    const res = await fetch('/api/products');
    const products = await res.json();
    
    const container = document.getElementById('products');
    products.forEach(p => {
        const div = document.createElement('div');
        div.innerHTML = `
            <h3>${p.name}</h3>
            <p>Price: $${p.price}</p>
            <p>${p.description}</p>
            <hr>
        `;
        container.appendChild(div);
    });
}

loadProducts();
