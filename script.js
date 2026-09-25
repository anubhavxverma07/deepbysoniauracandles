/* PRODUCTS DATA — img field mein photo ka naam daal */
const products = [
  { name:"Golden & Silver Bloom Candle", cat:"jar", price:349, combo:"Combo ₹599", scent:"Rose · Queen of Flowers · First Spring", desc:"Dual-layer metallic gel wax with shimmering gold & silver flakes. A luxurious centerpiece.", badge:"Bestseller", img:"golden-silver-bloom.jpg" },
  { name:"Luxury Dual Layer Jar Candle", cat:"jar", price:599, combo:"Golden + Silver ₹1199", scent:"Lemongrass · Rose · Vanilla", desc:"Soy wax top, gel wax bottom with golden & silver foil flakes. Pure luxury.", badge:"Premium", img:"luxury-dual-layer.jpg" },
  { name:"Aura Protector Evil Eye Jar", cat:"jar", price:299, combo:"", scent:"Rose · Lavender · Jasmine", desc:"Crystal-clear gel wax with dried florals & evil-eye charm. Protection in beauty.", img:"aura-protector.jpg" },
  { name:"Aqua Aura Floral Jar Candle", cat:"jar", price:179, combo:"Set of 2 ₹299", scent:"Aqua Breeze", desc:"Dual-layered — gel wax with dried rose petals, topped with creamy soy wax.", img:"aqua-aura-floral.jpg" },
  { name:"He or She Rose Aura (Tiny)", cat:"jar", price:179, combo:"Set of 2 ₹299", scent:"Rose", desc:"Soy heart shapes under a gel wax layer, topped with a 3D daisy flower.", img:"he-she-rose-aura.jpg" },
  { name:"Royal Pomegranate Luxe", cat:"jar", price:499, combo:"Set of 2 ₹899", scent:"Sweet Fresh Fruit Blend", desc:"Layered candle — creamy soy, clear gel with chunks, realistic pomegranate seeds.", badge:"New", img:"royal-pomegranate.jpg" },
  { name:"Tiny-Tiny Cute Jar Candle", cat:"jar", price:199, combo:"", scent:"Strawberry · Vanilla", desc:"Minimalist single-layer soy wax in clear jar, topped with dried flowers.", img:"tiny-tiny-jar.jpg" },
  { name:"Indian Sweet Laddu Delight Jar", cat:"jar", price:149, combo:"Set of 2 ₹249", scent:"Vanilla · Marigold", desc:"Laddu candle floating in elegant soy wax. Perfect for return gifting.", img:"laddu-delight-jar.jpg" },

  { name:"Coffee Ice Shot Candle", cat:"gourmet", price:349, combo:"Set ₹499", scent:"Vanilla · Soothing Sandalwood", desc:"Realistic gel wax ice cubes with layered wax — for coffee lovers.", badge:"Loved", img:"coffee-ice-shot.jpg" },
  { name:"Strawberry Cheesecake", cat:"gourmet", price:349, combo:"Gourmet Duo ₹599", scent:"Strawberry · Vanilla", desc:"Three realistic layers with handcrafted strawberry topper.", img:"strawberry-cheesecake.jpg" },
  { name:"Samosa Delight Candle", cat:"gourmet", price:349, combo:"", scent:"Cardamom & Ginger Spice", desc:"Ultimate realistic samosa — unique Indian foodie gifting.", img:"samosa-delight.jpg" },
  { name:"Chai Wala Sukoon", cat:"gourmet", price:349, combo:"Chai + Coffee ₹549", scent:"Cardamom & Ginger", desc:"Topped with real cardamom, cinnamon & black pepper — authentic chai aroma.", badge:"Signature", img:"chai-wala-sukoon.jpg" },
  { name:"Rasmalai Treat Candle", cat:"gourmet", price:349, combo:"Set of 2 ₹599", scent:"Vanilla", desc:"Soft, puffy texture like real rasmalai. Decorative & memorable.", img:"rasmalai-treat.jpg" },
  { name:"Pick Your Favourite Scoop", cat:"gourmet", price:499, combo:"Set of 2 ₹899", scent:"Rose · Vanilla", desc:"Molded wax scoops with authentic textures & delicious toppings.", img:"favourite-scoop.jpg" },
  { name:"2-in-1 Forever Berry Bowl", cat:"gourmet", price:699, combo:"", scent:"Fruit Basket · Strawberry", desc:"Wax berries in a reusable wooden bowl — light it, love it, reuse it.", badge:"Eco", img:"forever-berry-bowl.jpg" },
  { name:"Indian Sweet Classic Laddu", cat:"gourmet", price:59, combo:"Set of 4 ₹199", scent:"Vanilla · Marigold", desc:"Realistic laddu with silver warq. Budget + travel friendly.", img:"classic-laddu.jpg" },

  { name:"Lohri Bonfire Candle", cat:"festive", price:499, combo:"Festive Pack ₹849", scent:"Soothing Sandalwood", desc:"Miniature bonfire with real peanut, popcorn & wooden sticks embedded.", badge:"Festive", img:"lohri-bonfire.jpg" },
  { name:"Christmas Tree Pillar", cat:"festive", price:299, combo:"Festive Pack ₹500", scent:"Vanilla", desc:"Detailed hand-poured Christmas tree — perfect holiday centerpiece.", img:"christmas-tree-pillar.jpg" },
  { name:"Snowflake Votive", cat:"festive", price:125, combo:"Set of 4 ₹449", scent:"Aqua Breeze", desc:"Delicate snowflake shape. Use individually or float in water.", img:"snowflake-votive.jpg" },
  { name:"Festive Bubble Duo", cat:"festive", price:169, combo:"Set of 2 ₹199", scent:"Sandalwood · Fruit Basket", desc:"Dual-coloured bubble shapes — Christmas themed. Customizable.", img:"festive-bubble-duo.jpg" },
  { name:"Celebration Red Wine", cat:"festive", price:499, combo:"", scent:"Green Apple · Fruit Basket", desc:"Premium long-stemmed glass with shimmering gold glitter wax.", img:"celebration-red-wine.jpg" },
  { name:"Celebration Champagne", cat:"festive", price:499, combo:"Set of 2 ₹899", scent:"Aqua Breeze · Fresh Lime", desc:"Champagne glass with realistic foam top & gold glitter wax.", badge:"Gifting", img:"celebration-champagne.jpg" },
  { name:"Whiskey on the Rock", cat:"festive", price:499, combo:"", scent:"Soothing Sandalwood", desc:"Realistic whiskey glass candle — perfect for the connoisseur.", img:"whiskey-rock.jpg" },

  { name:"Royal Rose Bouquet Candle", cat:"sculptural", price:549, combo:"Set of 2 ₹899", scent:"French Rose", desc:"Floral masterpiece in customized colours. A royal centerpiece.", badge:"Signature", img:"royal-rose-bouquet.jpg" },
  { name:"3D Flower Tower Pillar", cat:"sculptural", price:499, combo:"", scent:"First Spring", desc:"Stacked 3D floral design blending heritage with modern decor.", img:"flower-tower-pillar.jpg" },
  { name:"Princess Dress Sculptural", cat:"sculptural", price:249, combo:"Set of 4 ₹899", scent:"Queen of Flowers · Rose", desc:"Princess gown shaped candles in soft pastels. Bridal & décor favorite.", img:"princess-dress.jpg" },
  { name:"The Heritage Floral Pillar", cat:"sculptural", price:179, combo:"", scent:"Mogra · White Jasmine", desc:"High-detail 3D floral texture — a luxury centerpiece.", img:"heritage-floral.jpg" },
  { name:"Rose Teddy Bear Candle", cat:"sculptural", price:249, combo:"Bear + Heart ₹449", scent:"Rose · Lavender", desc:"Teddy bear with rose texture. Cuteness meets elegance.", img:"rose-teddy-bear.jpg" },
  { name:"Modern Round Spiral Spire", cat:"sculptural", price:129, combo:"", scent:"Soothing Sandalwood", desc:"Sculptural twist design — minimal, modern, decorative.", img:"round-spiral-spire.jpg" },
  { name:"Modern Spiral Cone Shape", cat:"sculptural", price:149, combo:"", scent:"Soothing Sandalwood", desc:"Upward-flowing spiral — contemporary high-end décor.", img:"spiral-cone.jpg" },
  { name:"Daisy Flower with Floating Feature", cat:"sculptural", price:59, combo:"Set of 4 ₹200", scent:"Aqua Breeze", desc:"Floats gracefully on water. Custom colours available.", img:"daisy-floating.jpg" },

  { name:"Secret Message Candle", cat:"gifting", price:249, combo:"Set of 2 ₹449", scent:"Lavender · Vanilla", desc:"As wax melts, hidden message reveals — 'Will U Marry', 'I Love You'.", badge:"Viral", img:"secret-message.jpg" },
  { name:"Mystery Message Heart", cat:"gifting", price:549, combo:"", scent:"French Rose", desc:"Reusable wooden heart with hidden personalized message. Fully customizable.", img:"mystery-message-heart.jpg" },
  { name:"Flat Heart Bloom Memorable", cat:"gifting", price:99, combo:"Set of 4 ₹349", scent:"Rose", desc:"Flat design with rose texture. Perfect romantic gifting.", img:"flat-heart-bloom.jpg" },

  { name:"Baby Themed Mini Candles", cat:"baby", price:149, combo:"Set of 6 ₹599", scent:"Vanilla", desc:"6 shapes — teddy, bottle, pacifier, stroller & footprints. Baby shower favorite.", img:"baby-themed-mini.jpg" },
  { name:"Tiny Steps Footprint Votive", cat:"baby", price:299, combo:"Set of 2 ₹449", scent:"French Lavender", desc:"Blue & pink footprints — symbolic gender-reveal memory.", img:"tiny-steps-footprint.jpg" },
  { name:"Authentic Indian Masala Aroma", cat:"baby", price:199, combo:"", scent:"Cinnamon & Indian Spices", desc:"Topped with real clove, cardamom, cinnamon & black pepper.", img:"masala-aroma.jpg" },
  { name:"The Mandala Soul", cat:"baby", price:499, combo:"Set of 2 ₹799", scent:"Lemongrass · Sandalwood · Jasmine", desc:"Decorative tin, reusable as jewelry box. Artistic + sustainable.", badge:"Eco", img:"mandala-soul.jpg" },
];

/* RENDER */
const grid = document.getElementById('prodGrid');

function renderProducts(cat='all') {
  const list = cat === 'all' ? products : products.filter(p => p.cat === cat);
  grid.innerHTML = list.map((p) => `
    <div class="prod-card">
      ${p.badge ? `<div class="prod-badge">${p.badge}</div>` : ''}
      <div class="prod-image">
        <img src="images/${p.img}" alt="${p.name}" loading="lazy"
             onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=\\'prod-image-placeholder\\'>${p.name.charAt(0)}</div>';">
      </div>
      <div class="prod-body">
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

/* ============ PREMIUM LOADER SEQUENCE ============ */
window.addEventListener('load', () => {
  // Generate particles
  const pContainer = document.getElementById('particles');
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('span');
    p.style.left = Math.random() * 100 + '%';
    p.style.top = (60 + Math.random() * 40) + '%';
    p.style.animationDelay = (Math.random() * 4) + 's';
    p.style.animationDuration = (3 + Math.random() * 3) + 's';
    p.style.animation = `particleFloat ${3 + Math.random() * 3}s ease-out ${Math.random() * 4}s infinite`;
    pContainer.appendChild(p);
  }

  const tl = gsap.timeline();

  // 1. Jar fades in
  tl.to('.jar', { opacity: 1, y: 0, duration: 1.6, ease: 'power3.out' }, 0.3)
    .to('.wax', { opacity: 1, duration: 1, ease: 'power2.out' }, 0.8)
    .to('.lid-reflection', { opacity: 1, duration: 1 }, 1)

    // 2. Wick grows
    .to('.wick', { height: 14, duration: 0.7, ease: 'power2.out' }, 1.8)

    // 3. Flame ignites
    .to('.flame', { scale: 1, duration: 1, ease: 'power2.out' }, 2.4)
    .to('.flame-outer', { animation: 'flicker 0.2s ease-in-out infinite alternate' }, 3.2)

    // 4. Glow blooms
    .to('.glow', { opacity: 1, scale: 1, duration: 2, ease: 'power2.out' }, 2.8)

    // 5. Smoke wisps
    .to('.smoke', { opacity: 1, duration: 0.5 }, 3)
    .to('.smoke', { animation: 'smokeRise 3s ease-out infinite' }, 3.2)

    // 6. Brand reveal
    .to('.loader-brand', { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1.4, ease: 'power2.out' }, 3.8)
    .to('.loader-line', { width: 220, duration: 1.2, ease: 'power2.out' }, 4.4)

    // 7. Fade out loader → website reveal
    .to('#loader', { opacity: 0, duration: 1.2, ease: 'power2.inOut' }, 6)
    .set('#loader', { display: 'none' })
    .to('.hero-el', { opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: 'power3.out' }, 6.3);
});

/* ============ GSAP SCROLL REVEALS ============ */
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