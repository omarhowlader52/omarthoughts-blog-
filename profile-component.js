<!DOCTYPE html>
<html lang="bn">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Omar 52Hub Shop | Premium Store</title>
<script src="https://cdn.tailwindcss.com"></script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Hind+Siliguri:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
  body { font-family: 'Poppins', 'Hind Siliguri', sans-serif; }
  .bn { font-family: 'Hind Siliguri', sans-serif; }
  .card-hover { transition: transform .25s ease, box-shadow .25s ease; }
  .card-hover:hover { transform: translateY(-6px); box-shadow: 0 20px 35px -12px rgba(0,0,0,.25); }
  .no-scrollbar::-webkit-scrollbar { display: none; }
  .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  .slide { position:absolute; inset:0; opacity:0; transition:opacity 1s ease-in-out; }
  .slide.active { opacity:1; }
  @keyframes cartPulse { 0%{transform:scale(1)} 40%{transform:scale(1.35)} 100%{transform:scale(1)} }
  .cart-pulse { animation: cartPulse .5s ease; }
  .cat-btn.active { background:#4f46e5; color:#fff; border-color:#4f46e5; }
</style>
</head>
<body class="bg-slate-50 text-slate-800">

<!-- NAVBAR -->
<header class="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
  <div class="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
    <div class="flex items-center gap-2">
      <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-fuchsia-600 flex items-center justify-center text-white font-bold">O</div>
      <span class="text-lg font-bold tracking-tight">Omar <span class="text-indigo-600">52Hub</span> Shop</span>
    </div>
    <nav class="hidden md:flex gap-8 text-sm font-medium text-slate-600">
      <a href="#home" class="hover:text-indigo-600">Home</a>
      <a href="#featured" class="hover:text-indigo-600">Featured</a>
      <a href="#categories" class="hover:text-indigo-600">Categories</a>
      <a href="#contact" class="hover:text-indigo-600">Contact</a>
    </nav>
    <button class="relative flex items-center gap-2 bg-slate-900 text-white text-sm font-semibold px-4 py-2.5 rounded-full hover:bg-indigo-600 transition-colors">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
      </svg>
      <span class="hidden sm:inline">Cart</span>
      <span id="cartBadge" class="absolute -top-2 -right-2 flex items-center justify-center min-w-[22px] h-[22px] px-1 rounded-full text-[11px] font-bold bg-gradient-to-br from-rose-500 to-fuchsia-500 text-white shadow-md">0</span>
    </button>
  </div>
</header>

<!-- HERO SLIDER -->
<section id="home" class="relative h-[480px] md:h-[560px] overflow-hidden text-white">
  <div id="heroSlides" class="absolute inset-0"></div>

  <div class="relative z-10 max-w-6xl mx-auto px-5 h-full flex flex-col justify-center">
    <span class="inline-flex w-fit items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
      🔥 <span class="bn">সীমিত সময়ের জন্য বিশেষ ছাড়</span>
    </span>
    <h1 class="text-4xl md:text-6xl font-extrabold leading-[1.1] mb-5 max-w-xl drop-shadow-lg">
      Shop Smart.<br/>
      <span class="bg-gradient-to-r from-fuchsia-300 via-indigo-200 to-white bg-clip-text text-transparent">Save More.</span>
    </h1>
    <p class="bn text-slate-200 max-w-md mb-8 text-base md:text-lg">প্রিমিয়াম কোয়ালিটি প্রোডাক্ট, সাশ্রয়ী দামে — জুতা থেকে মোবাইল, সবকিছু এক জায়গায়।</p>
    <div class="flex flex-wrap gap-3">
      <a href="#products" class="inline-block bg-white text-indigo-700 font-bold px-8 py-3.5 rounded-full hover:bg-indigo-50 hover:scale-105 transition-all shadow-xl">Shop Now</a>
      <a href="#categories" class="inline-block bg-white/10 backdrop-blur border border-white/30 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/20 transition-all">Browse Categories</a>
    </div>
    <div id="heroMini" class="hidden md:flex items-center gap-3 mt-10 bg-white/10 backdrop-blur border border-white/20 rounded-2xl px-4 py-3 w-fit"></div>
  </div>

  <div id="heroDots" class="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2"></div>
</section>

<!-- FEATURED -->
<section id="featured" class="max-w-6xl mx-auto px-5 pt-16">
  <div class="text-center mb-10">
    <span class="text-xs font-bold text-indigo-500 uppercase tracking-widest">Handpicked for you</span>
    <h2 class="text-2xl md:text-3xl font-extrabold mt-2">Featured Products</h2>
    <p class="bn text-slate-500 mt-2">প্রতিটি প্রোডাক্টে বিশেষ ডিসকাউন্ট প্রাইস</p>
  </div>
  <div id="featuredGrid" class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"></div>
</section>

<!-- CATEGORY TABS -->
<section id="categories" class="max-w-6xl mx-auto px-5 pt-20">
  <div class="text-center mb-8">
    <h2 class="text-2xl md:text-3xl font-extrabold">Shop by Category</h2>
    <p class="bn text-slate-500 mt-2">আপনার পছন্দের ক্যাটাগরি বেছে নিন</p>
  </div>
  <div id="categoryTabs" class="flex gap-2 overflow-x-auto pb-3 no-scrollbar"></div>
</section>

<!-- FULL CATALOG -->
<section id="products" class="max-w-6xl mx-auto px-5 py-10">
  <p class="text-sm text-slate-500 mb-4">Showing <span id="resultCount" class="font-semibold text-slate-700">0</span> products</p>
  <div id="productGrid" class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"></div>
</section>

<!-- FOOTER -->
<footer id="contact" class="bg-slate-900 text-slate-300 mt-10">
  <div class="max-w-6xl mx-auto px-5 py-12 grid md:grid-cols-3 gap-8 text-sm">
    <div>
      <div class="flex items-center gap-2 mb-3">
        <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-sm">O</div>
        <span class="text-white font-bold">Omar 52Hub Shop</span>
      </div>
      <p class="bn text-slate-400">সেরা কোয়ালিটির প্রোডাক্ট আপনার দোরগোড়ায় পৌঁছে দিতে আমরা প্রতিশ্রুতিবদ্ধ।</p>
    </div>
    <div>
      <h4 class="text-white font-semibold mb-3">Quick Links</h4>
      <ul class="space-y-2 text-slate-400">
        <li><a href="#home" class="hover:text-white">Home</a></li>
        <li><a href="#products" class="hover:text-white">Shop</a></li>
        <li><a href="#categories" class="hover:text-white">Categories</a></li>
        <li><a href="#contact" class="hover:text-white">Contact</a></li>
      </ul>
    </div>
    <div>
      <h4 class="text-white font-semibold mb-3">Contact</h4>
      <p class="text-slate-400">Email: hello@omarshop.com</p>
      <p class="bn text-slate-400 mt-1">ঢাকা, বাংলাদেশ</p>
    </div>
  </div>
  <div class="border-t border-slate-800 text-center text-xs text-slate-500 py-5">
    © 2026 Omar 52Hub Shop. Demo project — built for portfolio showcase.
  </div>
</footer>

<script>
/* ================== DATA ================== */
const CATEGORIES = [{"id": "all", "en": "All", "bn": "সব"}, {"id": "shoes", "en": "Shoes", "bn": "জুতা"}, {"id": "caps", "en": "Caps", "bn": "টুপি"}, {"id": "perfumes", "en": "Attar & Perfumes", "bn": "আতর, পারফিউম"}, {"id": "tshirts", "en": "T-Shirts", "bn": "টি-শার্ট"}, {"id": "mobile", "en": "Mobile", "bn": "মোবাইল"}, {"id": "headphones", "en": "Headphones", "bn": "হেডফোন"}, {"id": "cosmetics", "en": "Cosmetics", "bn": "কসমেটিকস"}, {"id": "watches", "en": "Watches", "bn": "ঘড়ি"}, {"id": "bags", "en": "Bags", "bn": "ব্যাগ"}, {"id": "sunglasses", "en": "Sunglasses", "bn": "সানগ্লাস"}, {"id": "speakers", "en": "Speakers", "bn": "স্পিকার"}, {"id": "accessories", "en": "Accessories", "bn": "এক্সেসরিজ"}];

const PRODUCTS = [{"id": 1, "name": "Running Shoes", "cat": "shoes", "catEn": "Shoes", "catBn": "জুতা", "orig": 66.56, "price": 56.58, "disc": 15, "img": "https://picsum.photos/seed/shoes1/500/500", "feat": true}, {"id": 2, "name": "Casual Shoes", "cat": "shoes", "catEn": "Shoes", "catBn": "জুতা", "orig": 73.2, "price": 57.1, "disc": 22, "img": "https://picsum.photos/seed/shoes2/500/500", "feat": true}, {"id": 3, "name": "Leather Shoes", "cat": "shoes", "catEn": "Shoes", "catBn": "জুতা", "orig": 39.51, "price": 22.92, "disc": 42, "img": "https://picsum.photos/seed/shoes3/500/500", "feat": false}, {"id": 4, "name": "Sports Shoes", "cat": "shoes", "catEn": "Shoes", "catBn": "জুতা", "orig": 31.66, "price": 18.36, "disc": 42, "img": "https://picsum.photos/seed/shoes4/500/500", "feat": false}, {"id": 5, "name": "Canvas Shoes", "cat": "shoes", "catEn": "Shoes", "catBn": "জুতা", "orig": 82.99, "price": 68.05, "disc": 18, "img": "https://picsum.photos/seed/shoes5/500/500", "feat": false}, {"id": 6, "name": "Formal Shoes", "cat": "shoes", "catEn": "Shoes", "catBn": "জুতা", "orig": 63.38, "price": 53.87, "disc": 15, "img": "https://picsum.photos/seed/shoes6/500/500", "feat": false}, {"id": 7, "name": "Hiking Shoes", "cat": "shoes", "catEn": "Shoes", "catBn": "জুতা", "orig": 26.94, "price": 21.01, "disc": 22, "img": "https://picsum.photos/seed/shoes7/500/500", "feat": false}, {"id": 8, "name": "Slip-On Shoes", "cat": "shoes", "catEn": "Shoes", "catBn": "জুতা", "orig": 40.12, "price": 24.87, "disc": 38, "img": "https://picsum.photos/seed/shoes8/500/500", "feat": false}, {"id": 9, "name": "Classic Shoes", "cat": "shoes", "catEn": "Shoes", "catBn": "জুতা", "orig": 26.72, "price": 20.84, "disc": 22, "img": "https://picsum.photos/seed/shoes9/500/500", "feat": false}, {"id": 10, "name": "Baseball Cap", "cat": "caps", "catEn": "Caps", "catBn": "টুপি", "orig": 20.17, "price": 11.7, "disc": 42, "img": "https://picsum.photos/seed/caps10/500/500", "feat": true}, {"id": 11, "name": "Snapback Cap", "cat": "caps", "catEn": "Caps", "catBn": "টুপি", "orig": 17.26, "price": 13.46, "disc": 22, "img": "https://picsum.photos/seed/caps11/500/500", "feat": true}, {"id": 12, "name": "Denim Cap", "cat": "caps", "catEn": "Caps", "catBn": "টুপি", "orig": 15.64, "price": 11.73, "disc": 25, "img": "https://picsum.photos/seed/caps12/500/500", "feat": false}, {"id": 13, "name": "Cotton Cap", "cat": "caps", "catEn": "Caps", "catBn": "টুপি", "orig": 21.76, "price": 18.5, "disc": 15, "img": "https://picsum.photos/seed/caps13/500/500", "feat": false}, {"id": 14, "name": "Sports Cap", "cat": "caps", "catEn": "Caps", "catBn": "টুপি", "orig": 20.9, "price": 16.72, "disc": 20, "img": "https://picsum.photos/seed/caps14/500/500", "feat": false}, {"id": 15, "name": "Winter Cap", "cat": "caps", "catEn": "Caps", "catBn": "টুপি", "orig": 19.87, "price": 14.31, "disc": 28, "img": "https://picsum.photos/seed/caps15/500/500", "feat": false}, {"id": 16, "name": "Classic Cap", "cat": "caps", "catEn": "Caps", "catBn": "টুপি", "orig": 12.72, "price": 9.92, "disc": 22, "img": "https://picsum.photos/seed/caps16/500/500", "feat": false}, {"id": 17, "name": "Trucker Cap", "cat": "caps", "catEn": "Caps", "catBn": "টুপি", "orig": 24.27, "price": 17.47, "disc": 28, "img": "https://picsum.photos/seed/caps17/500/500", "feat": false}, {"id": 18, "name": "Knit Cap", "cat": "caps", "catEn": "Caps", "catBn": "টুপি", "orig": 9.74, "price": 6.82, "disc": 30, "img": "https://picsum.photos/seed/caps18/500/500", "feat": false}, {"id": 19, "name": "Musk Attar", "cat": "perfumes", "catEn": "Attar & Perfumes", "catBn": "আতর, পারফিউম", "orig": 16.64, "price": 11.98, "disc": 28, "img": "https://picsum.photos/seed/perfumes19/500/500", "feat": true}, {"id": 20, "name": "Oud Attar", "cat": "perfumes", "catEn": "Attar & Perfumes", "catBn": "আতর, পারফিউম", "orig": 40.98, "price": 22.54, "disc": 45, "img": "https://picsum.photos/seed/perfumes20/500/500", "feat": true}, {"id": 21, "name": "Rose Attar", "cat": "perfumes", "catEn": "Attar & Perfumes", "catBn": "আতর, পারফিউম", "orig": 14.09, "price": 9.44, "disc": 33, "img": "https://picsum.photos/seed/perfumes21/500/500", "feat": false}, {"id": 22, "name": "Amber Attar", "cat": "perfumes", "catEn": "Attar & Perfumes", "catBn": "আতর, পারফিউম", "orig": 37.74, "price": 26.42, "disc": 30, "img": "https://picsum.photos/seed/perfumes22/500/500", "feat": false}, {"id": 23, "name": "Sandalwood Attar", "cat": "perfumes", "catEn": "Attar & Perfumes", "catBn": "আতর, পারফিউম", "orig": 15.78, "price": 11.83, "disc": 25, "img": "https://picsum.photos/seed/perfumes23/500/500", "feat": false}, {"id": 24, "name": "Jasmine Attar", "cat": "perfumes", "catEn": "Attar & Perfumes", "catBn": "আতর, পারফিউম", "orig": 51.81, "price": 32.12, "disc": 38, "img": "https://picsum.photos/seed/perfumes24/500/500", "feat": false}, {"id": 25, "name": "Vanilla Attar", "cat": "perfumes", "catEn": "Attar & Perfumes", "catBn": "আতর, পারফিউম", "orig": 54.5, "price": 39.24, "disc": 28, "img": "https://picsum.photos/seed/perfumes25/500/500", "feat": false}, {"id": 26, "name": "Citrus Attar", "cat": "perfumes", "catEn": "Attar & Perfumes", "catBn": "আতর, পারফিউম", "orig": 39.71, "price": 23.03, "disc": 42, "img": "https://picsum.photos/seed/perfumes26/500/500", "feat": false}, {"id": 27, "name": "Royal Attar", "cat": "perfumes", "catEn": "Attar & Perfumes", "catBn": "আতর, পারফিউম", "orig": 15.34, "price": 9.2, "disc": 40, "img": "https://picsum.photos/seed/perfumes27/500/500", "feat": false}, {"id": 28, "name": "Cotton T-Shirt", "cat": "tshirts", "catEn": "T-Shirts", "catBn": "টি-শার্ট", "orig": 15.7, "price": 11.77, "disc": 25, "img": "https://picsum.photos/seed/tshirts28/500/500", "feat": true}, {"id": 29, "name": "Graphic T-Shirt", "cat": "tshirts", "catEn": "T-Shirts", "catBn": "টি-শার্ট", "orig": 34.63, "price": 27.01, "disc": 22, "img": "https://picsum.photos/seed/tshirts29/500/500", "feat": true}, {"id": 30, "name": "Polo T-Shirt", "cat": "tshirts", "catEn": "T-Shirts", "catBn": "টি-শার্ট", "orig": 31.66, "price": 22.16, "disc": 30, "img": "https://picsum.photos/seed/tshirts30/500/500", "feat": false}, {"id": 31, "name": "V-Neck T-Shirt", "cat": "tshirts", "catEn": "T-Shirts", "catBn": "টি-শার্ট", "orig": 16.95, "price": 10.17, "disc": 40, "img": "https://picsum.photos/seed/tshirts31/500/500", "feat": false}, {"id": 32, "name": "Oversized T-Shirt", "cat": "tshirts", "catEn": "T-Shirts", "catBn": "টি-শার্ট", "orig": 30.85, "price": 24.68, "disc": 20, "img": "https://picsum.photos/seed/tshirts32/500/500", "feat": false}, {"id": 33, "name": "Slim Fit T-Shirt", "cat": "tshirts", "catEn": "T-Shirts", "catBn": "টি-শার্ট", "orig": 19.25, "price": 15.02, "disc": 22, "img": "https://picsum.photos/seed/tshirts33/500/500", "feat": false}, {"id": 34, "name": "Striped T-Shirt", "cat": "tshirts", "catEn": "T-Shirts", "catBn": "টি-শার্ট", "orig": 26.75, "price": 15.52, "disc": 42, "img": "https://picsum.photos/seed/tshirts34/500/500", "feat": false}, {"id": 35, "name": "Plain T-Shirt", "cat": "tshirts", "catEn": "T-Shirts", "catBn": "টি-শার্ট", "orig": 33.42, "price": 20.05, "disc": 40, "img": "https://picsum.photos/seed/tshirts35/500/500", "feat": false}, {"id": 36, "name": "Printed T-Shirt", "cat": "tshirts", "catEn": "T-Shirts", "catBn": "টি-শার্ট", "orig": 11.79, "price": 7.07, "disc": 40, "img": "https://picsum.photos/seed/tshirts36/500/500", "feat": false}, {"id": 37, "name": "Ultra Smartphone", "cat": "mobile", "catEn": "Mobile", "catBn": "মোবাইল", "orig": 219.09, "price": 127.07, "disc": 42, "img": "https://picsum.photos/seed/mobile37/500/500", "feat": true}, {"id": 38, "name": "Pro Smartphone", "cat": "mobile", "catEn": "Mobile", "catBn": "মোবাইল", "orig": 261.75, "price": 175.37, "disc": 33, "img": "https://picsum.photos/seed/mobile38/500/500", "feat": true}, {"id": 39, "name": "Lite Smartphone", "cat": "mobile", "catEn": "Mobile", "catBn": "মোবাইল", "orig": 339.7, "price": 203.82, "disc": 40, "img": "https://picsum.photos/seed/mobile39/500/500", "feat": false}, {"id": 40, "name": "Max Smartphone", "cat": "mobile", "catEn": "Mobile", "catBn": "মোবাইল", "orig": 518.45, "price": 404.39, "disc": 22, "img": "https://picsum.photos/seed/mobile40/500/500", "feat": false}, {"id": 41, "name": "Plus Smartphone", "cat": "mobile", "catEn": "Mobile", "catBn": "মোবাইল", "orig": 516.39, "price": 284.01, "disc": 45, "img": "https://picsum.photos/seed/mobile41/500/500", "feat": false}, {"id": 42, "name": "Note Smartphone", "cat": "mobile", "catEn": "Mobile", "catBn": "মোবাইল", "orig": 569.3, "price": 444.05, "disc": 22, "img": "https://picsum.photos/seed/mobile42/500/500", "feat": false}, {"id": 43, "name": "Edge Smartphone", "cat": "mobile", "catEn": "Mobile", "catBn": "মোবাইল", "orig": 595.82, "price": 327.7, "disc": 45, "img": "https://picsum.photos/seed/mobile43/500/500", "feat": false}, {"id": 44, "name": "Prime Smartphone", "cat": "mobile", "catEn": "Mobile", "catBn": "মোবাইল", "orig": 302.65, "price": 226.99, "disc": 25, "img": "https://picsum.photos/seed/mobile44/500/500", "feat": false}, {"id": 45, "name": "Air Smartphone", "cat": "mobile", "catEn": "Mobile", "catBn": "মোবাইল", "orig": 158.32, "price": 98.16, "disc": 38, "img": "https://picsum.photos/seed/mobile45/500/500", "feat": false}, {"id": 46, "name": "Wireless Headphones", "cat": "headphones", "catEn": "Headphones", "catBn": "হেডফোন", "orig": 133.68, "price": 96.25, "disc": 28, "img": "https://picsum.photos/seed/headphones46/500/500", "feat": true}, {"id": 47, "name": "Noise-Cancelling Headphones", "cat": "headphones", "catEn": "Headphones", "catBn": "হেডফোন", "orig": 46.07, "price": 30.87, "disc": 33, "img": "https://picsum.photos/seed/headphones47/500/500", "feat": true}, {"id": 48, "name": "Bass Boost Headphones", "cat": "headphones", "catEn": "Headphones", "catBn": "হেডফোন", "orig": 70.22, "price": 42.13, "disc": 40, "img": "https://picsum.photos/seed/headphones48/500/500", "feat": false}, {"id": 49, "name": "Gaming Headphones", "cat": "headphones", "catEn": "Headphones", "catBn": "হেডফোন", "orig": 78.57, "price": 58.93, "disc": 25, "img": "https://picsum.photos/seed/headphones49/500/500", "feat": false}, {"id": 50, "name": "Studio Headphones", "cat": "headphones", "catEn": "Headphones", "catBn": "হেডফোন", "orig": 36.43, "price": 21.13, "disc": 42, "img": "https://picsum.photos/seed/headphones50/500/500", "feat": false}, {"id": 51, "name": "On-Ear Headphones", "cat": "headphones", "catEn": "Headphones", "catBn": "হেডফোন", "orig": 92.1, "price": 69.07, "disc": 25, "img": "https://picsum.photos/seed/headphones51/500/500", "feat": false}, {"id": 52, "name": "In-Ear Headphones", "cat": "headphones", "catEn": "Headphones", "catBn": "হেডফোন", "orig": 116.61, "price": 81.63, "disc": 30, "img": "https://picsum.photos/seed/headphones52/500/500", "feat": false}, {"id": 53, "name": "Foldable Headphones", "cat": "headphones", "catEn": "Headphones", "catBn": "হেডফোন", "orig": 136.51, "price": 95.56, "disc": 30, "img": "https://picsum.photos/seed/headphones53/500/500", "feat": false}, {"id": 54, "name": "Sport Headphones", "cat": "headphones", "catEn": "Headphones", "catBn": "হেডফোন", "orig": 65.78, "price": 52.62, "disc": 20, "img": "https://picsum.photos/seed/headphones54/500/500", "feat": false}, {"id": 55, "name": "Matte Beauty Set", "cat": "cosmetics", "catEn": "Cosmetics", "catBn": "কসমেটিকস", "orig": 27.34, "price": 22.42, "disc": 18, "img": "https://picsum.photos/seed/cosmetics55/500/500", "feat": true}, {"id": 56, "name": "Glow Beauty Set", "cat": "cosmetics", "catEn": "Cosmetics", "catBn": "কসমেটিকস", "orig": 36.21, "price": 29.69, "disc": 18, "img": "https://picsum.photos/seed/cosmetics56/500/500", "feat": true}, {"id": 57, "name": "Hydrating Beauty Set", "cat": "cosmetics", "catEn": "Cosmetics", "catBn": "কসমেটিকস", "orig": 14.5, "price": 11.6, "disc": 20, "img": "https://picsum.photos/seed/cosmetics57/500/500", "feat": false}, {"id": 58, "name": "Waterproof Beauty Set", "cat": "cosmetics", "catEn": "Cosmetics", "catBn": "কসমেটিকস", "orig": 37.51, "price": 26.26, "disc": 30, "img": "https://picsum.photos/seed/cosmetics58/500/500", "feat": false}, {"id": 59, "name": "Organic Beauty Set", "cat": "cosmetics", "catEn": "Cosmetics", "catBn": "কসমেটিকস", "orig": 30.47, "price": 21.33, "disc": 30, "img": "https://picsum.photos/seed/cosmetics59/500/500", "feat": false}, {"id": 60, "name": "Vitamin C Beauty Set", "cat": "cosmetics", "catEn": "Cosmetics", "catBn": "কসমেটিকস", "orig": 22.74, "price": 15.24, "disc": 33, "img": "https://picsum.photos/seed/cosmetics60/500/500", "feat": false}, {"id": 61, "name": "Anti-Aging Beauty Set", "cat": "cosmetics", "catEn": "Cosmetics", "catBn": "কসমেটিকস", "orig": 28.05, "price": 18.23, "disc": 35, "img": "https://picsum.photos/seed/cosmetics61/500/500", "feat": false}, {"id": 62, "name": "Whitening Beauty Set", "cat": "cosmetics", "catEn": "Cosmetics", "catBn": "কসমেটিকস", "orig": 39.99, "price": 33.99, "disc": 15, "img": "https://picsum.photos/seed/cosmetics62/500/500", "feat": false}, {"id": 63, "name": "Herbal Beauty Set", "cat": "cosmetics", "catEn": "Cosmetics", "catBn": "কসমেটিকস", "orig": 33.49, "price": 27.46, "disc": 18, "img": "https://picsum.photos/seed/cosmetics63/500/500", "feat": false}, {"id": 64, "name": "Smart Watch", "cat": "watches", "catEn": "Watches", "catBn": "ঘড়ি", "orig": 129.07, "price": 83.9, "disc": 35, "img": "https://picsum.photos/seed/watches64/500/500", "feat": true}, {"id": 65, "name": "Analog Watch", "cat": "watches", "catEn": "Watches", "catBn": "ঘড়ি", "orig": 140.14, "price": 77.08, "disc": 45, "img": "https://picsum.photos/seed/watches65/500/500", "feat": true}, {"id": 66, "name": "Chronograph Watch", "cat": "watches", "catEn": "Watches", "catBn": "ঘড়ি", "orig": 122.55, "price": 100.49, "disc": 18, "img": "https://picsum.photos/seed/watches66/500/500", "feat": false}, {"id": 67, "name": "Leather Strap Watch", "cat": "watches", "catEn": "Watches", "catBn": "ঘড়ি", "orig": 66.96, "price": 53.57, "disc": 20, "img": "https://picsum.photos/seed/watches67/500/500", "feat": false}, {"id": 68, "name": "Steel Watch", "cat": "watches", "catEn": "Watches", "catBn": "ঘড়ি", "orig": 92.6, "price": 53.71, "disc": 42, "img": "https://picsum.photos/seed/watches68/500/500", "feat": false}, {"id": 69, "name": "Digital Watch", "cat": "watches", "catEn": "Watches", "catBn": "ঘড়ি", "orig": 160.14, "price": 120.1, "disc": 25, "img": "https://picsum.photos/seed/watches69/500/500", "feat": false}, {"id": 70, "name": "Sport Watch", "cat": "watches", "catEn": "Watches", "catBn": "ঘড়ি", "orig": 175.5, "price": 96.53, "disc": 45, "img": "https://picsum.photos/seed/watches70/500/500", "feat": false}, {"id": 71, "name": "Classic Watch", "cat": "watches", "catEn": "Watches", "catBn": "ঘড়ি", "orig": 48.58, "price": 39.84, "disc": 18, "img": "https://picsum.photos/seed/watches71/500/500", "feat": false}, {"id": 72, "name": "Minimalist Watch", "cat": "watches", "catEn": "Watches", "catBn": "ঘড়ি", "orig": 159.28, "price": 119.46, "disc": 25, "img": "https://picsum.photos/seed/watches72/500/500", "feat": false}, {"id": 73, "name": "Travel Bag", "cat": "bags", "catEn": "Bags", "catBn": "ব্যাগ", "orig": 65.5, "price": 42.58, "disc": 35, "img": "https://picsum.photos/seed/bags73/500/500", "feat": true}, {"id": 74, "name": "Laptop Bag", "cat": "bags", "catEn": "Bags", "catBn": "ব্যাগ", "orig": 51.54, "price": 41.23, "disc": 20, "img": "https://picsum.photos/seed/bags74/500/500", "feat": true}, {"id": 75, "name": "Canvas Bag", "cat": "bags", "catEn": "Bags", "catBn": "ব্যাগ", "orig": 37.43, "price": 29.94, "disc": 20, "img": "https://picsum.photos/seed/bags75/500/500", "feat": false}, {"id": 76, "name": "Leather Bag", "cat": "bags", "catEn": "Bags", "catBn": "ব্যাগ", "orig": 47.36, "price": 26.05, "disc": 45, "img": "https://picsum.photos/seed/bags76/500/500", "feat": false}, {"id": 77, "name": "Sling Bag", "cat": "bags", "catEn": "Bags", "catBn": "ব্যাগ", "orig": 70.35, "price": 59.8, "disc": 15, "img": "https://picsum.photos/seed/bags77/500/500", "feat": false}, {"id": 78, "name": "Backpack Bag", "cat": "bags", "catEn": "Bags", "catBn": "ব্যাগ", "orig": 50.94, "price": 34.13, "disc": 33, "img": "https://picsum.photos/seed/bags78/500/500", "feat": false}, {"id": 79, "name": "Tote Bag", "cat": "bags", "catEn": "Bags", "catBn": "ব্যাগ", "orig": 16.17, "price": 11.64, "disc": 28, "img": "https://picsum.photos/seed/bags79/500/500", "feat": false}, {"id": 80, "name": "Duffel Bag", "cat": "bags", "catEn": "Bags", "catBn": "ব্যাগ", "orig": 67.72, "price": 37.25, "disc": 45, "img": "https://picsum.photos/seed/bags80/500/500", "feat": false}, {"id": 81, "name": "Mini Bag", "cat": "bags", "catEn": "Bags", "catBn": "ব্যাগ", "orig": 33.45, "price": 28.43, "disc": 15, "img": "https://picsum.photos/seed/bags81/500/500", "feat": false}, {"id": 82, "name": "Aviator Sunglasses", "cat": "sunglasses", "catEn": "Sunglasses", "catBn": "সানগ্লাস", "orig": 17.23, "price": 10.68, "disc": 38, "img": "https://picsum.photos/seed/sunglasses82/500/500", "feat": true}, {"id": 83, "name": "Round Sunglasses", "cat": "sunglasses", "catEn": "Sunglasses", "catBn": "সানগ্লাস", "orig": 38.41, "price": 31.5, "disc": 18, "img": "https://picsum.photos/seed/sunglasses83/500/500", "feat": true}, {"id": 84, "name": "Polarized Sunglasses", "cat": "sunglasses", "catEn": "Sunglasses", "catBn": "সানগ্লাস", "orig": 31.96, "price": 26.21, "disc": 18, "img": "https://picsum.photos/seed/sunglasses84/500/500", "feat": false}, {"id": 85, "name": "Retro Sunglasses", "cat": "sunglasses", "catEn": "Sunglasses", "catBn": "সানগ্লাস", "orig": 39.34, "price": 25.57, "disc": 35, "img": "https://picsum.photos/seed/sunglasses85/500/500", "feat": false}, {"id": 86, "name": "Classic Sunglasses", "cat": "sunglasses", "catEn": "Sunglasses", "catBn": "সানগ্লাস", "orig": 32.98, "price": 26.38, "disc": 20, "img": "https://picsum.photos/seed/sunglasses86/500/500", "feat": false}, {"id": 87, "name": "Sport Sunglasses", "cat": "sunglasses", "catEn": "Sunglasses", "catBn": "সানগ্লাস", "orig": 29.79, "price": 19.36, "disc": 35, "img": "https://picsum.photos/seed/sunglasses87/500/500", "feat": false}, {"id": 88, "name": "Cat-Eye Sunglasses", "cat": "sunglasses", "catEn": "Sunglasses", "catBn": "সানগ্লাস", "orig": 14.95, "price": 9.72, "disc": 35, "img": "https://picsum.photos/seed/sunglasses88/500/500", "feat": false}, {"id": 89, "name": "Wayfarer Sunglasses", "cat": "sunglasses", "catEn": "Sunglasses", "catBn": "সানগ্লাস", "orig": 36.17, "price": 25.32, "disc": 30, "img": "https://picsum.photos/seed/sunglasses89/500/500", "feat": false}, {"id": 90, "name": "Mirror Sunglasses", "cat": "sunglasses", "catEn": "Sunglasses", "catBn": "সানগ্লাস", "orig": 38.93, "price": 25.3, "disc": 35, "img": "https://picsum.photos/seed/sunglasses90/500/500", "feat": false}, {"id": 91, "name": "Bluetooth Speaker", "cat": "speakers", "catEn": "Speakers", "catBn": "স্পিকার", "orig": 75.67, "price": 43.89, "disc": 42, "img": "https://picsum.photos/seed/speakers91/500/500", "feat": true}, {"id": 92, "name": "Portable Speaker", "cat": "speakers", "catEn": "Speakers", "catBn": "স্পিকার", "orig": 31.89, "price": 23.92, "disc": 25, "img": "https://picsum.photos/seed/speakers92/500/500", "feat": true}, {"id": 93, "name": "Waterproof Speaker", "cat": "speakers", "catEn": "Speakers", "catBn": "স্পিকার", "orig": 47.52, "price": 28.51, "disc": 40, "img": "https://picsum.photos/seed/speakers93/500/500", "feat": false}, {"id": 94, "name": "Mini Speaker", "cat": "speakers", "catEn": "Speakers", "catBn": "স্পিকার", "orig": 67.34, "price": 45.12, "disc": 33, "img": "https://picsum.photos/seed/speakers94/500/500", "feat": false}, {"id": 95, "name": "Party Speaker", "cat": "speakers", "catEn": "Speakers", "catBn": "স্পিকার", "orig": 87.07, "price": 58.34, "disc": 33, "img": "https://picsum.photos/seed/speakers95/500/500", "feat": false}, {"id": 96, "name": "Bass Speaker", "cat": "speakers", "catEn": "Speakers", "catBn": "স্পিকার", "orig": 25.56, "price": 19.94, "disc": 22, "img": "https://picsum.photos/seed/speakers96/500/500", "feat": false}, {"id": 97, "name": "Smart Speaker", "cat": "speakers", "catEn": "Speakers", "catBn": "স্পিকার", "orig": 21.06, "price": 17.9, "disc": 15, "img": "https://picsum.photos/seed/speakers97/500/500", "feat": false}, {"id": 98, "name": "Outdoor Speaker", "cat": "speakers", "catEn": "Speakers", "catBn": "স্পিকার", "orig": 62.48, "price": 48.73, "disc": 22, "img": "https://picsum.photos/seed/speakers98/500/500", "feat": false}, {"id": 99, "name": "Studio Speaker", "cat": "speakers", "catEn": "Speakers", "catBn": "স্পিকার", "orig": 62.49, "price": 53.12, "disc": 15, "img": "https://picsum.photos/seed/speakers99/500/500", "feat": false}, {"id": 100, "name": "Leather Wallet", "cat": "accessories", "catEn": "Accessories", "catBn": "এক্সেসরিজ", "orig": 9.56, "price": 5.74, "disc": 40, "img": "https://picsum.photos/seed/accessories100/500/500", "feat": true}, {"id": 101, "name": "Braided Wallet", "cat": "accessories", "catEn": "Accessories", "catBn": "এক্সেসরিজ", "orig": 9.3, "price": 7.63, "disc": 18, "img": "https://picsum.photos/seed/accessories101/500/500", "feat": true}, {"id": 102, "name": "Metal Wallet", "cat": "accessories", "catEn": "Accessories", "catBn": "এক্সেসরিজ", "orig": 27.92, "price": 20.1, "disc": 28, "img": "https://picsum.photos/seed/accessories102/500/500", "feat": false}, {"id": 103, "name": "Minimal Wallet", "cat": "accessories", "catEn": "Accessories", "catBn": "এক্সেসরিজ", "orig": 9.56, "price": 7.46, "disc": 22, "img": "https://picsum.photos/seed/accessories103/500/500", "feat": false}, {"id": 104, "name": "Premium Wallet", "cat": "accessories", "catEn": "Accessories", "catBn": "এক্সেসরিজ", "orig": 14.13, "price": 9.47, "disc": 33, "img": "https://picsum.photos/seed/accessories104/500/500", "feat": false}, {"id": 105, "name": "Classic Wallet", "cat": "accessories", "catEn": "Accessories", "catBn": "এক্সেসরিজ", "orig": 12.71, "price": 10.17, "disc": 20, "img": "https://picsum.photos/seed/accessories105/500/500", "feat": false}, {"id": 106, "name": "Sport Wallet", "cat": "accessories", "catEn": "Accessories", "catBn": "এক্সেসরিজ", "orig": 23.91, "price": 14.82, "disc": 38, "img": "https://picsum.photos/seed/accessories106/500/500", "feat": false}, {"id": 107, "name": "Woven Wallet", "cat": "accessories", "catEn": "Accessories", "catBn": "এক্সেসরিজ", "orig": 20.68, "price": 16.13, "disc": 22, "img": "https://picsum.photos/seed/accessories107/500/500", "feat": false}, {"id": 108, "name": "Charm Wallet", "cat": "accessories", "catEn": "Accessories", "catBn": "এক্সেসরিজ", "orig": 25.26, "price": 13.89, "disc": 45, "img": "https://picsum.photos/seed/accessories108/500/500", "feat": false}];


/* ================== STATE ================== */
let cartCount = 0;
let activeCategory = "all";
let heroIndex = 0;
const heroProducts = PRODUCTS.filter(p => p.feat).slice(0, 5);

/* ================== CART ================== */
function addToCart(btn, product) {
  cartCount++;
  const badge = document.getElementById('cartBadge');
  badge.textContent = cartCount;
  badge.classList.remove('cart-pulse');
  void badge.offsetWidth; // restart animation
  badge.classList.add('cart-pulse');

  btn.textContent = "Added ✓";
  btn.classList.add('bg-emerald-600');
  btn.classList.remove('bg-slate-900');
  setTimeout(() => {
    btn.textContent = "Add to Cart";
    btn.classList.remove('bg-emerald-600');
    btn.classList.add('bg-slate-900');
  }, 1200);
}

/* ================== PRODUCT CARD ================== */
function productCard(p) {
  const div = document.createElement('div');
  div.className = "group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm card-hover";
  div.innerHTML = `
    <div class="relative overflow-hidden">
      <img src="${p.img}" alt="${p.name}" loading="lazy" class="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
      <span class="absolute top-2 left-2 bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow">-${p.disc}%</span>
      <span class="absolute top-2 right-2 bg-white/90 backdrop-blur text-slate-600 text-[10px] font-semibold px-2 py-1 rounded-full">${p.catBn}</span>
    </div>
    <div class="p-4">
      <p class="text-[11px] uppercase tracking-wide text-indigo-500 font-semibold mb-1">${p.catEn}</p>
      <h3 class="font-semibold text-sm md:text-base mb-2 line-clamp-1">${p.name}</h3>
      <div class="flex items-baseline gap-2 mb-3">
        <span class="text-indigo-600 font-bold text-lg">$${p.price.toFixed(2)}</span>
        <span class="text-slate-400 line-through text-sm">$${p.orig.toFixed(2)}</span>
      </div>
      <button class="addBtn w-full bg-slate-900 text-white text-sm font-semibold py-2.5 rounded-full hover:bg-indigo-600 transition-all duration-300">Add to Cart</button>
    </div>
  `;
  div.querySelector('.addBtn').addEventListener('click', (e) => addToCart(e.target, p));
  return div;
}

/* ================== RENDER FEATURED ================== */
function renderFeatured() {
  const grid = document.getElementById('featuredGrid');
  grid.innerHTML = "";
  PRODUCTS.filter(p => p.feat).forEach(p => grid.appendChild(productCard(p)));
}

/* ================== RENDER CATEGORY TABS ================== */
function renderTabs() {
  const wrap = document.getElementById('categoryTabs');
  wrap.innerHTML = "";
  CATEGORIES.forEach(c => {
    const btn = document.createElement('button');
    btn.className = `cat-btn whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold border transition-colors duration-200 bg-white text-slate-600 border-slate-200 hover:border-indigo-400 ${c.id === activeCategory ? 'active' : ''}`;
    btn.innerHTML = `${c.en} <span class="${c.id === activeCategory ? 'text-indigo-100' : 'text-slate-400'}">${c.bn}</span>`;
    btn.addEventListener('click', () => {
      activeCategory = c.id;
      renderTabs();
      renderCatalog();
      document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    });
    wrap.appendChild(btn);
  });
}

/* ================== RENDER FULL CATALOG ================== */
function renderCatalog() {
  const grid = document.getElementById('productGrid');
  grid.innerHTML = "";
  const list = activeCategory === "all" ? PRODUCTS : PRODUCTS.filter(p => p.cat === activeCategory);
  document.getElementById('resultCount').textContent = list.length;
  list.forEach(p => grid.appendChild(productCard(p)));
}

/* ================== HERO SLIDER ================== */
function renderHero() {
  const slidesWrap = document.getElementById('heroSlides');
  const dotsWrap = document.getElementById('heroDots');
  slidesWrap.innerHTML = "";
  dotsWrap.innerHTML = "";

  heroProducts.forEach((p, i) => {
    const slide = document.createElement('div');
    slide.className = `slide ${i === 0 ? 'active' : ''}`;
    slide.innerHTML = `
      <img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover scale-105" />
      <div class="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/55 to-transparent"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
    `;
    slidesWrap.appendChild(slide);

    const dot = document.createElement('button');
    dot.className = `h-2 rounded-full transition-all duration-300 ${i === 0 ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'}`;
    dot.addEventListener('click', () => setHero(i));
    dotsWrap.appendChild(dot);
  });

  updateHeroMini();
}

function setHero(i) {
  heroIndex = i;
  document.querySelectorAll('#heroSlides .slide').forEach((s, idx) => s.classList.toggle('active', idx === i));
  document.querySelectorAll('#heroDots button').forEach((d, idx) => {
    d.className = `h-2 rounded-full transition-all duration-300 ${idx === i ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'}`;
  });
  updateHeroMini();
}

function updateHeroMini() {
  const p = heroProducts[heroIndex];
  document.getElementById('heroMini').innerHTML = `
    <img src="${p.img}" class="w-12 h-12 rounded-lg object-cover" alt="${p.name}" />
    <div>
      <p class="text-sm font-semibold">${p.name}</p>
      <p class="text-xs text-slate-300">
        <span class="line-through mr-1">$${p.orig.toFixed(2)}</span>
        <span class="text-fuchsia-300 font-bold">$${p.price.toFixed(2)}</span>
      </p>
    </div>
  `;
}

setInterval(() => {
  heroIndex = (heroIndex + 1) % heroProducts.length;
  setHero(heroIndex);
}, 4000);

/* ================== INIT ================== */
renderHero();
renderFeatured();
renderTabs();
renderCatalog();
</script>
</body>
</html>