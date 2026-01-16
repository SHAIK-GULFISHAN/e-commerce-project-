let cart = [];
let allProducts = [];

const productData = [
    // ELECTRONICS
    { name: "iPhone 15 Pro Max - Blue Titanium", price: 144900, cat: "tech", img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500" },
    { name: "Samsung Galaxy S24 Ultra", price: 129999, cat: "tech", img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500" },
    { name: "MacBook Pro M3 Max 16-inch", price: 349900, cat: "tech", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500" },
    { name: "Sony WH-1000XM5 Noise Cancelling", price: 29990, cat: "tech", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
    { name: "Dell XPS 13 Thin Laptop", price: 115000, cat: "tech", img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500" },
    { name: "iPad Air M2 - Space Gray", price: 59900, cat: "tech", img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500" },
    { name: "Canon EOS R5 Professional", price: 330000, cat: "tech", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500" },
    { name: "Nintendo Switch OLED Edition", price: 32000, cat: "tech", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSvG2LYIliltkfRwFf_9d5sREJIyR841NOSq8Ap7bnIKRIsY1ts21fghDhlSu0kXqf-lvHFFsvQxpz2R4QXDwrds6LahNtNHneONUChAfX1" },
    { name: "Logitech MX Master 3S Mouse", price: 9995, cat: "tech", img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500" },
    { name: "GoPro HERO12 Black Action", price: 38000, cat: "tech", img: "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?w=500" },
    { name: "PlayStation 5 Console", price: 54990, cat: "tech", img: "https://m.media-amazon.com/images/I/51afJC92cgL.jpg" },
    { name: "Apple Watch Ultra 2", price: 89900, cat: "tech", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR88Wd9qmb0vDYIAfJBfYKiV9gvAryEkujLsxz5FaxZc5L7z72dWR4S53WlQpJ86CQSE1jWQlj3cwoWpjtzVgFZyqiw8LojxcWBtuN_PkTcIA6-IyCcnLFKJXE1uQQ5l6e29DsC43E&usqp=CAc" }, 
    { name: "Marshall Kilburn II Portable", price: 24999, cat: "tech", img: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500" },
    { name: "Amazon Echo Studio Speaker", price: 22999, cat: "tech", img: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=500" },

    // FASHION
    { name: "Nike Air Jordan 1 Retro", price: 16995, cat: "fashion", img: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=500" },
    { name: "Levi's Classic Trucker Jacket", price: 4999, cat: "fashion", img: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=500" },
    { name: "Rolex Submariner Watch", price: 950000, cat: "fashion", img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500" },
    { name: "Ray-Ban Aviator Classic Sunglasses", price: 10990, cat: "fashion", img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500" },
    { name: "North Face Puffer Jacket", price: 22000, cat: "fashion", img: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=500" },
    { name: "Adidas Ultraboost Light", price: 18999, cat: "fashion", img: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=500" },
    { name: "Louis Vuitton Leather Wallet", price: 45000, cat: "fashion", img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500" },
    { name: "Puma Suede Classic Sneakers", price: 6999, cat: "fashion", img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500" },
    { name: "Casio G-Shock Rugged Watch", price: 8500, cat: "fashion", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ54SUJcq3QzMvZ2_iPL2XyZ_lqYPcwZ_jTQ5PU3cCzV9BLKnUZWYR0Ob9og6DhQsOTO1fm9JBPnSPF6LgX2p9jypiEwKsyB8zgo45Dd2dp40hKUNq43v7UeWj8igJRg-XWONar_A&usqp=CAc" },
    { name: "Tommy Hilfiger Polo Shirt", price: 3999, cat: "fashion", img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500" },
    { name: "Fossil Heritage Leather Bag", price: 12500, cat: "fashion", img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500" },
    { name: "Lacoste White Tennis Shoes", price: 9500, cat: "fashion", img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500" },
    { name: "Zara Overcoat Grey", price: 8990, cat: "fashion", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500" },
    { name: "Vans Old Skool Black", price: 5499, cat: "fashion", img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500" },
    { name: "Timberland 6-Inch Boot", price: 18500, cat: "fashion", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAuEKb2xTIKHzv_BixaNc3sMejq9ujsrOiRQ&s" },

    // HOME & KITCHEN
    { name: "Dyson V15 Vacuum Cleaner", price: 65900, cat: "home", img: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=500" },
    { name: "Nespresso Lattissima Coffee", price: 32500, cat: "home", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTf0uFELL8cXR1G0LymJLDzVGuWAPzKZE192IykevNF2NUHFtUsbuwye3O6laUCzTY10ItMpHA6fBsKf_aRHnvvu8YnPM0sZTZcQ_tAXalrllgApgkhES1ojvbR0jlovx-kbbwfi4EdIf0&usqp=CAc" },
    { name: "Philips Air Fryer XXL", price: 16999, cat: "home", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSnmdtB0wXZUhoU2QZ4MvTBnxgMHsDDl-jCGSGYf-rpkvkt3OocVY-UsagacqnCi1IufTG3HLcDf8o72B_0O50iMmdVveiVO8e9Zh46WXEDRv_k0AdgirmSNHkS4BmDFSC1PFx4GA&usqp=CAc" },
    { name: "Herman Miller Aeron Chair", price: 145000, cat: "home", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSFieKvSDIN76bd5O-H2yUVB1erlmW0yXj3eIYlQlzmvdCwfhbFFid4YmVe7q31kju5Kz0sKVCpWOuahA_ZuGPppePGmRqraH6ojhE4VdnzKWQ9sEwFv1D0vk1qzSCiZJ5-kTL2pAk&usqp=CAc" },
    { name: "KitchenAid Artisan Mixer", price: 48000, cat: "home", img: "https://www.applianceretailer.com.au/wp-content/uploads/KitchenAid-limited-edition-black-tie-mixer-small.jpg?w=770" },
    { name: "Le Creuset Dutch Oven", price: 28000, cat: "home", img: "https://www.lecreuset.ca/dw/image/v2/BDRT_PRD/on/demandware.static/-/Sites-le-creuset-ca-master/default/dw51e41f47/images/canada_images_541/cookware%20sets/Set_2_Round_Dutch_Ovens.jpg?sw=650&sh=650&sm=fit" },
    { name: "Xiaomi Mi Air Purifier 4", price: 14999, cat: "home", img: "https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-smart-air-purifier-4/m/04f7bd08f2269853abb5c69cb2df79c9.jpg" },
    { name: "Eufy RoboVac G30 Robot", price: 19999, cat: "home", img: "https://m.media-amazon.com/images/I/81jrFSfZpNL._AC_UF894,1000_QL80_.jpg" },
    { name: "Instant Pot Duo 7-in-1", price: 10500, cat: "home", img: "https://m.media-amazon.com/images/I/71+Z01Rb7WL.jpg" },
    { name: "Sennheiser Soundbar Plus", price: 89990, cat: "home", img: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500" },
    { name: "Nutribullet Blender 900", price: 8999, cat: "home", img: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=500" },
    { name: "Yeti Rambler Tumbler", price: 3500, cat: "home", img: "https://m.media-amazon.com/images/I/61m2Tu98DtL._AC_UF894,1000_QL80_.jpg" },
    { name: "Bose SoundLink Flex", price: 15900, cat: "home", img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500" },
    { name: "Weber Kettle Charcoal Grill", price: 18500, cat: "home", img: "https://product-images.weber.com/Grill-Images/Charcoal/Lifestyles/1501278_006_STEALTHKETTLE_FY25_AMER_1x1-1800x1800-a82feed.png?w=800&h=800&auto=compress%2Cformat" },
    { name: "Ring Video Doorbell", price: 9999, cat: "home", img: "https://images.unsplash.com/photo-1558002038-1055907df827?w=500" },
    { name: "Samsung 65' OLED TV", price: 185000, cat: "tech", img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500" },
    { name: "Google Nest Thermostat", price: 12500, cat: "home", img: "https://m.media-amazon.com/images/I/51sZEp8CBML._QL92_SH45_SS200_.jpg" },
    { name: "Tefal Non-Stick Pan", price: 2100, cat: "home", img: "https://m.media-amazon.com/images/I/61hzYsxWEjL._AC_UF894,1000_QL80_.jpg" },
    { name: "Yoga Mat Pro", price: 1500, cat: "home", img: "https://cdn.media.amplience.net/i/frasersdev/76199502_o_a2?fmt=auto&upscale=true&w=992&h=992&sm=scaleFit&$h-ttl$" },
    { name: "Camping Tent 4P", price: 12000, cat: "home", img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500" }
];

// Initialize and generate IDs + Ratings
function initProducts() {
    allProducts = productData.map((p, index) => ({
        id: index,
        ...p,
        rating: (Math.random() * (5 - 3.8) + 3.8).toFixed(1),
        reviews: Math.floor(Math.random() * 5000)
    }));
    renderProducts(allProducts);
}

// Global render function
function renderProducts(productsToDisplay) {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = "";
    
    productsToDisplay.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            ${product.price > 100000 ? '<span class="deal-tag">Premium</span>' : ''}
            <img src="${product.img}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="rating">⭐ ${product.rating} (${product.reviews})</div>
                <p class="price">₹${product.price.toLocaleString()}</p>
                <button class="add-btn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Search & Category Logic
function filterProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const cat = document.getElementById('categoryFilter').value;

    const filtered = allProducts.filter(p => {
        const matchesQuery = p.name.toLowerCase().includes(query);
        const matchesCat = (cat === 'all' || p.cat === cat);
        return matchesQuery && matchesCat;
    });
    renderProducts(filtered);
}

// Sort Logic
function sortProducts() {
    const sortVal = document.getElementById('sortFilter').value;
    let sorted = [...allProducts];

    if (sortVal === 'low') sorted.sort((a, b) => a.price - b.price);
    if (sortVal === 'high') sorted.sort((a, b) => b.price - a.price);

    renderProducts(sorted);
}

// Cart Logic
function addToCart(productId) {
    const product = allProducts.find(p => p.id === productId);
    cart.push({ ...product, cartId: Date.now() }); // Unique cartId for removal
    updateCartUI();
}

function removeFromCart(cartId) {
    cart = cart.filter(item => item.cartId !== cartId);
    updateCartUI();
}

function updateCartUI() {
    document.getElementById('cartCount').innerText = cart.length;
    const container = document.getElementById('cartItems');
    let total = 0;
    container.innerHTML = "";

    cart.forEach(item => {
        total += item.price;
        container.innerHTML += `
            <div class="cart-item">
                <div>
                    <strong>${item.name}</strong><br>
                    <span>₹${item.price.toLocaleString()}</span>
                </div>
                <button onclick="removeFromCart(${item.cartId})" style="color:red; border:none; background:none; cursor:pointer;">Remove</button>
            </div>
        `;
    });
    document.getElementById('totalAmount').innerText = "₹" + total.toLocaleString();
    document.getElementById('payTotal').innerText = "₹" + total.toLocaleString();
}

// Modal System
function openModal(id) { document.getElementById(id).style.display = 'flex'; }
function closeModal(id) { document.getElementById(id).style.display = 'none'; }

function startCheckout() {
    if (cart.length === 0) return alert("Your cart is empty!");
    closeModal('cartModal');
    openModal('paymentModal');
}

function handlePayment(e) {
    e.preventDefault();
    const btn = document.getElementById('payButton');
    btn.innerText = "Processing Transaction...";
    btn.disabled = true;

    setTimeout(() => {
        alert("Transaction Successful! Your order has been placed.");
        cart = [];
        updateCartUI();
        closeModal('paymentModal');
        btn.innerText = "Confirm Payment";
        btn.disabled = false;
    }, 2500);
}

// Start Application
initProducts();