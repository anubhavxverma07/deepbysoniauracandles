/* PRODUCTS DATA */
const products = [
  // Jar & Gel
  { name:"Golden & Silver Bloom Candle", cat:"jar", price:349, combo:"Combo ₹599", scent:"Rose · Queen of Flowers · First Spring", desc:"Dual-layer metallic gel wax with shimmering gold & silver flakes. A luxurious centerpiece.", badge:"Bestseller" },
  { name:"Luxury Dual Layer Jar Candle", cat:"jar", price:599, combo:"Golden + Silver ₹1199", scent:"Lemongrass · Rose · Vanilla", desc:"Soy wax top, gel wax bottom with golden & silver foil flakes. Pure luxury.", badge:"Premium" },
  { name:"Aura Protector Evil Eye Jar", cat:"jar", price:299, combo:"", scent:"Rose · Lavender · Jasmine", desc:"Crystal-clear gel wax with dried florals & evil-eye charm. Protection in beauty." },
  { name:"Aqua Aura Floral Jar Candle", cat:"jar", price:179, combo:"Set of 2 ₹299", scent:"Aqua Breeze", desc:"Dual-layered — gel wax with dried rose petals, topped with creamy soy wax." },
  { name:"He or She Rose Aura (Tiny)", cat:"jar", price:179, combo:"Set of 2 ₹299", scent:"Rose", desc:"Soy heart shapes under a gel wax layer, topped with a 3D daisy flower." },
  { name:"Royal Pomegranate Luxe", cat:"jar", price:499, combo:"Set of 2 ₹899", scent:"Sweet Fresh Fruit Blend", desc:"Layered candle — creamy soy, clear gel with chunks, realistic pomegranate seeds.", badge:"New" },
  { name:"Tiny-Tiny Cute Jar Candle", cat:"jar", price:199, combo:"", scent:"Strawberry · Vanilla", desc:"Minimalist single-layer soy wax in clear jar, topped with dried flowers." },
  { name:"Indian Sweet Laddu Delight Jar", cat:"jar", price:149, combo:"Set of 2 ₹249", scent:"Vanilla · Marigold", desc:"Laddu candle floating in elegant soy wax. Perfect for return gifting." },

  // Gourmet
  { name:"Coffee Ice Shot Candle", cat:"gourmet", price:349, combo:"Set ₹499", scent:"Vanilla · Soothing Sandalwood", desc:"Realistic gel wax ice cubes with layered wax — for coffee lovers.", badge:"Loved" },
  { name:"Strawberry Cheesecake", cat:"gourmet", price:349, combo:"Gourmet Duo ₹599", scent:"Strawberry · Vanilla", desc:"Three realistic layers with handcrafted strawberry topper." },
  { name:"Samosa Delight Candle", cat:"gourmet", price:349, combo:"", scent:"Cardamom & Ginger Spice", desc:"Ultimate realistic samosa — unique Indian foodie gifting." },
  { name:"Chai Wala Sukoon", cat:"gourmet", price:349, combo:"Chai + Coffee ₹549", scent:"Cardamom & Ginger", desc:"Topped with real cardamom, cinnamon & black pepper — authentic chai aroma.", badge:"Signature" },
  { name:"Rasmalai Treat Candle", cat:"gourmet", price:349, combo:"Set of 2 ₹599", scent:"Vanilla", desc:"Soft, puffy texture like real rasmalai. Decorative & memorable." },
  { name:"Pick Your Favourite Scoop", cat:"gourmet", price:499, combo:"Set of 2 ₹899", scent:"Rose · Vanilla", desc:"Molded wax scoops with authentic textures & delicious toppings." },
  { name:"2-in-1 Forever Berry Bowl", cat:"gourmet", price:699, combo:"", scent:"Fruit Basket · Strawberry", desc:"Wax berries in a reusable wooden bowl — light it, love it, reuse it.", badge:"Eco" },
  { name:"Indian Sweet Classic Laddu", cat:"gourmet", price:59, combo:"Set of 4 ₹199", scent:"Vanilla · Marigold", desc:"Realistic laddu with silver warq. Budget + travel friendly." },

  // Festive
  { name:"Lohri Bonfire Candle", cat:"festive", price:499, combo:"Festive Pack ₹849", scent:"Soothing Sandalwood", desc:"Miniature bonfire with real peanut, popcorn & wooden sticks embedded.", badge:"Festive" },
  { name:"Christmas Tree Pillar", cat:"festive", price:299, combo:"Festive Pack ₹500", scent:"Vanilla", desc:"Detailed hand-poured Christmas tree — perfect holiday centerpiece." },
  { name:"Snowflake Votive", cat:"festive", price:125, combo:"Set of 4 ₹449", scent:"Aqua Breeze", desc:"Delicate snowflake shape. Use individually or float in water." },
  { name:"Festive Bubble Duo", cat:"festive", price:169, combo:"Set of 2 ₹199", scent:"Sandalwood · Fruit Basket", desc:"Dual-coloured bubble shapes — Christmas themed. Customizable." },
  { name:"Celebration Red Wine", cat:"festive", price:499, combo:"", scent:"Green Apple · Fruit Basket", desc:"Premium long-stemmed glass with shimmering gold glitter wax." },
  { name:"Celebration Champagne", cat:"festive", price:499, combo:"Set of 2 ₹899", scent:"Aqua Breeze · Fresh Lime", desc:"Champagne glass with realistic foam top & gold glitter wax.", badge:"Gifting" },
  { name:"Whiskey on the Rock", cat:"festive", price:499, combo:"", scent:"Soothing Sandalwood", desc:"Realistic whiskey glass candle — perfect for the connoisseur." },

  // Sculptural
  { name:"Royal Rose Bouquet Candle", cat:"sculptural", price:549, combo:"Set of 2 ₹899", scent:"French Rose", desc:"Floral masterpiece in customized colours. A royal centerpiece.", badge:"Signature" },
  { name:"3D Flower Tower Pillar", cat:"sculptural", price:499, combo:"", scent:"First Spring", desc:"Stacked 3D floral design blending heritage with modern decor." },
  { name:"Princess Dress Sculptural", cat:"sculptural", price:249, combo:"Set of 4 ₹899", scent:"Queen of Flowers · Rose", desc:"Princess gown shaped candles in soft pastels. Bridal & décor favorite." },
  { name:"The Heritage Floral Pillar", cat:"sculptural", price:179, combo:"", scent:"Mogra · White Jasmine", desc:"High-detail 3D floral texture — a luxury centerpiece." },
  { name:"Rose Teddy Bear Candle", cat:"sculptural", price:249, combo:"Bear + Heart ₹449", scent:"Rose · Lavender", desc:"Teddy bear with rose texture. Cuteness meets elegance." },
  { name:"Modern Round Spiral Spire", cat:"sculptural", price:129, combo:"", scent:"Soothing Sandalwood", desc:"Sculptural twist design — minimal, modern, decorative." },
  { name:"Modern Spiral Cone Shape", cat:"sculptural", price:149, combo:"", scent:"Soothing Sandalwood", desc:"Upward-flowing spiral — contemporary high-end décor." },
  { name:"Daisy Flower with Floating Feature", cat:"sculptural", price:59, combo:"Set of 4 ₹200", scent:"Aqua Breeze", desc:"Floats gracefully on water. Custom colours available." },

  // Gifting
  { name:"Secret Message Candle", cat:"gifting", price:249, combo:"Set of 2 ₹449", scent:"Lavender · Vanilla", desc:"As wax melts, hidden message reveals — 'Will U Marry', 'I Love You'.", badge:"Viral" },
  { name:"Mystery Message Heart", cat:"gifting", price:549, combo:"", scent:"French Rose", desc:"Reusable wooden heart with hidden personalized message. Fully customizable." },
  { name:"Flat Heart Bloom Memorable", cat:"gifting", price:99, combo:"Set of 4 ₹349", scent:"Rose", desc:"Flat design with rose texture. Perfect romantic gifting." },

  // Baby & Aura
  { name:"Baby Themed Mini Candles", cat:"baby", price:149, combo:"Set of 6 ₹599", scent:"Vanilla", desc:"6 shapes — teddy, bottle, pacifier, stroller & footprints. Baby shower favorite." },
  { name:"Tiny Steps Footprint Votive", cat:"baby", price:299, combo:"Set of 2 ₹449", scent:"French Lavender", desc:"Blue & pink footprints — symbolic gender-reveal memory." },
  { name:"Authentic Indian Masala Aroma", cat:"baby", price:199, combo:"", scent:"Cinnamon & Indian Spices", desc:"Topped with real clove, cardamom, cinnamon & black pepper." },
  { name:"The Mandala Soul", cat:"baby", price:499, combo:"Set of 2 ₹799", scent:"Lemongrass · Sandalwood · Jasmine", desc:"Decorative tin, reusable as jewelry box. Artistic + sustainable.", badge:"Eco" },
];

/* RENDER */
const grid = document.getElementById('prodGrid');

function renderProducts(cat='all') {
  const list = cat === 'all' ? products : products.filter(p => p.cat === cat);
  grid.innerHTML = list.map((p) => `
    <div class="prod-card">
      <div class="prod-glow"></div>
      ${p.badge ? `<div class="prod-badge">${p.badge}</div>` : ''}
      <h3 class="prod-name">${p.name}</h3>
      <p class="prod-scent">${p.scent}</p>
      <p class="prod-desc">${p.desc}</p>
      <div class="prod-foot">
        <div>
          <div class="prod-price">₹${p.price}</div>
          ${p.combo ? `<div class="prod-combo">${p.combo}</div>` : ''}
        </div>
        <a class="prod-cta" href="https://wa.me/918750577905?text=Hi%2C%20I%20want%20to%20order%20${encodeURIComponent(p.name)}" target="_blank">Order →</a>
      </div>
    </div>
  `).join('');
}

renderProducts();

/* TABS */
document.querySelectorAll('.tab').forEach(t => {
  t.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
    t.classList.add('active');
    renderProducts(t.dataset.cat);
    gsap.from('#prodGrid .prod-card', { y: 20, opacity: 0, duration: .5, stagger: .04, ease:'power2.out' });
  });
});

/* NAV SCROLL */
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 60);
});

/* LOADER OUT */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hide');
    gsap.to('.hero-el', {
      opacity: 1, y: 0, duration: 1.2, stagger: 0.18, ease: 'power3.out', delay: 0.2
    });
  }, 5200);
});

/* GSAP SCROLL REVEALS */
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.reveal').forEach(el => {
  gsap.from(el, {
    scrollTrigger: { trigger: el, start: 'top 88%' },
    opacity: 0, y: 50, duration: 1.1, ease: 'power3.out'
  });
});

gsap.utils.toArray('.prod-card').forEach((el, i) => {
  gsap.from(el, {
    scrollTrigger: { trigger: el, start: 'top 92%' },
    opacity: 0, y: 40, duration: .8, ease: 'power2.out', delay: (i % 4) * .08
  });
});

gsap.set('.hero-el', { y: 30, opacity: 0 });