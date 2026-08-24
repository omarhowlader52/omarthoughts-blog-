// profile-component.js - রেসপন্সিভ লেআউট এবং লিংক ফিক্সড কোড
const profilePopupHTML = `
<div id="customProfileModal" class="profile-modal">
    <div class="profile-modal-content animate-zoom-in">
        <span class="close-profile-modal">&times;</span>
        
        <div class="theme-toggle-area">
            <button id="themeToggleBtn" class="theme-btn">🌙 ডার্ক মোড</button>
        </div>

        <div class="profile-container">
            <!-- ছবিটি মোবাইলে উপরে এবং ডেক্সটপে বামে সুন্দরভাবে বসবে -->
            <div class="profile-image-area">
                <img src="omar52hub.png" alt="ওমর হাওলাদার" class="profile-img">
            </div>
            
            <!-- লেখার অংশটি যাতে ভেঙে না যায় তার জন্য প্রফেশনাল ব্লক -->
            <div class="profile-content">
                <h1>হ্যালো, আমি <span class="highlight">ওমর হাওলাদার</span> 👋</h1>
                <p class="subtitle">আপনার ব্যবসার ডিজিটাল গ্রোথ এবং টেকনিক্যাল পার্টনার</p>
                <p class="description">আমি একজন প্রফেশনাল <strong>ওয়েব ডেভেলপার</strong>, <strong>ডিজিটাল মার্কেটার</strong> এবং <strong>অনলাইন সリューション এক্সপার্ট</strong>। গত কয়েক বছর ধরে আমি বিভিন্ন ব্যবসাকে অনলাইনে সফলভাবে প্রতিষ্ঠিত ও পরিচালনা করতে সাহায্য করে আসছি।</p>
                <p class="description">একটি সাধারণ আইডিয়াকে একটি পূর্ণাঙ্গ ডিজিটাল ব্র্যান্ডে রূপান্তর করাই আমার মূল কাজ। ওয়েবসাইট তৈরি করা থেকে শুরু করে সেটি সঠিক অডিয়েন্সের কাছে পৌঁছে দেওয়া পর্যন্ত প্রতিটি ধাপে আমি আপনাকে প্রফেশনাল সাপোর্ট দিতে প্রস্তুত।</p>
                
                <div class="services-block">
                    <h2>💡 আমি আপনাকে যেভাবে সাহায্য করতে পারি:</h2>
                    <ul>
                        <li><strong>আধুনিক ওয়েব ডেভেলপমেন্ট:</strong> আপনার ব্যবসার জন্য দৃষ্টিনন্দন, দ্রুতগতির এবং mobile-friendly ওয়েবসাইট তৈরি।</li>
                        <li><strong>স্মার্ট ডিজিটাল মার্কেটিং:</strong> ফেসবুক ও অন্যান্য সোশ্যাল মিডিয়া পেজ ফুল-টাইম দেখাশোনা এবং নিখুঁত অডিয়েন্স টার্গেটিংয়ের মাধ্যমে <strong>পেজ বুস্টিং</strong>।</li>
                        <li><strong>অনলাইন ও পেমেন্ট সリューション:</strong> ফ্রিল্যান্সিং বা বিজনেস পেমেন্টের জন্য ইন্টারন্যাশনাল কারেন্সি কনভার্সন সংক্রান্ত জটিলতার সহজ সমাধান।</li>
                    </ul>
                </div>
                
                <div class="philosophy-block">
                    <h2>🎯 কাজের দর্শন (My Work Philosophy):</h2>
                    <p>আমি শুধু কাজ ডেলিভারি করায় বিশ্বাসী নই; আমি ক্লায়েন্টের ব্যবসার দীর্ঘমেয়াদী উন্নতি এবং সততার সাথে সঠিক সমাধান দিতে পছন্দ করি।</p>
                </div>
                
                <div class="cta-block">
                    <p class="cta-text">🚀 চলুন একসাথে কাজ শুরু করি!</p>
                    <div class="cta-buttons">
                        <!-- সরাসরি আপনার মেইন সাইটের সেবাসমূহ এবং কন্টাক্ট লিংক -->
                        <a href="https://vercel.app" id="modalServicesBtn" class="btn btn-secondary">সেবাসমূহ</a>
                        <a href="https://vercel.app" id="modalContactBtn" class="btn btn-primary">যোগাযোগ করুন</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

document.addEventListener("DOMContentLoaded", function() {
    const targetElement = document.getElementById("my-profile-section");
    if(targetElement) {
        targetElement.innerHTML = profilePopupHTML;
    }

    const modal = document.getElementById("customProfileModal");
    const closeBtn = document.querySelector(".close-profile-modal");
    const themeBtn = document.getElementById("themeToggleBtn");
    const profileModalContent = document.querySelector(".profile-modal-content");

    // "আমার সম্পর্কে" লিংকে ক্লিক করলে পপআপ খোলা
    const aboutLinks = document.querySelectorAll('a[href*="about"], a[href*="সম্পর্কে"]');
    aboutLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
        });
    });

    function closeModal() {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }

    if(closeBtn) {
        closeBtn.addEventListener("click", closeModal);
    }

    // বাটনে ক্লিক করলে আগে পপআপ বন্ধ হবে, তারপর লিংকে নিয়ে যাবে
    document.getElementById("modalServicesBtn").addEventListener("click", closeModal);
    document.getElementById("modalContactBtn").addEventListener("click", closeModal);

    // ডার্ক মোড লজিক
    if (localStorage.getItem("profile-theme") === "dark") {
        profileModalContent.classList.add("dark-theme");
        themeBtn.innerHTML = "☀️ লাইট মোড";
    }

    if(themeBtn) {
        themeBtn.addEventListener("click", function() {
            profileModalContent.classList.toggle("dark-theme");
            if (profileModalContent.classList.contains("dark-theme")) {
                localStorage.setItem("profile-theme", "dark");
                themeBtn.innerHTML = "☀️ লাইট মোড";
            } else {
                localStorage.setItem("profile-theme", "light");
                themeBtn.innerHTML = "🌙 ডার্ক মোড";
            }
        });
    }
});
