let allProducts = [];

async function init() {
    try {
        const res = await fetch('/api/products');
        allProducts = await res.json();
        renderProducts(allProducts);
    } catch (err) {
        document.getElementById('productGrid').innerHTML = '<div class="loader">Error loading products.</div>';
    }
}

function renderProducts(products) {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = '';
    
    if (products.length === 0) {
        grid.innerHTML = '<div class="loader">No products found.</div>';
        return;
    }

    products.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="category-tag">${p.category || 'General'}</div>
            <h2 class="product-name">${p.name}</h2>
            <div class="product-price">$${p.price.toLocaleString()}</div>
            <p class="product-desc">${p.description}</p>
            <div class="product-footer">
                <span class="stock-indicator">${p.stock} in stock</span>
                <span class="rating">★ ${p.rating}</span>
            </div>
        `;
        grid.appendChild(card);
    });
}

document.getElementById('searchInput').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = allProducts.filter(p => 
        p.name.toLowerCase().includes(term) || 
        (p.category && p.category.toLowerCase().includes(term)) ||
        (p.description && p.description.toLowerCase().includes(term))
    );
    renderProducts(filtered);
});

init();
