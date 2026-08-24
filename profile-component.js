// profile-component.js - মোবাইল ফ্রেন্ডলি ও ফিক্সড বাটন লিংক কোড
const profilePopupHTML = `
<div id="customProfileModal" class="profile-modal">
    <div class="profile-modal-content animate-zoom-in">
        <!-- বন্ধ করার ক্রস বাটন -->
        <span class="close-profile-modal">&times;</span>
        
        <!-- ডার্ক মোড বাটন -->
        <div class="theme-toggle-area">
            <button id="themeToggleBtn" class="theme-btn">🌙 ডার্ক মোড</button>
        </div>

        <div class="profile-container">
            <!-- ছবিকে সব ডিভাইসের জন্য উপরে ও সেন্টারে রাখা হলো -->
            <div class="profile-image-area">
                <img src="omar52hub.png" alt="ওমর হাওলাদার" class="profile-img">
            </div>
            
            <div class="profile-content">
                <h1>হ্যালো, আমি <span class="highlight">ওমর হাওলাদার</span> 👋</h1>
                <p class="subtitle">আপনার ব্যবসার ডিজিটাল গ্রোথ এবং টেকনিক্যাল পার্টনার</p>
                <p class="description">আমি একজন প্রফেশনাল <strong>ওয়েব ডেভেলপার</strong>, <strong>ডিজিটাল মার্কেটার</strong> এবং <strong>অনলাইন সলিউশন এক্সপার্ট</strong>। গত কয়েক বছর ধরে আমি বিভিন্ন ব্যবসাকে অনলাইনে সফলভাবে প্রতিষ্ঠিত ও পরিচালনা করতে সাহায্য করে আসছি।</p>
                <p class="description">একটি সাধারণ আইডিয়াকে একটি পূর্ণাঙ্গ ডিজিটাল ব্র্যান্ডে রূপান্তর করাই আমার মূল কাজ। ওয়েবসাইট তৈরি করা থেকে শুরু করে সেটি সঠিক অডিয়েন্সের কাছে পৌঁছে দেওয়া পর্যন্ত প্রতিটি ধাপে আমি আপনাকে প্রফেশনাল সাপোর্ট দিতে প্রস্তুত।</p>
                
                <div class="services-block">
                    <h2>💡 আমি আপনাকে যেভাবে সাহায্য করতে পারি:</h2>
                    <ul>
                        <li><strong>আধুনিক ওয়েব ডেভেলপমেন্ট:</strong> আপনার ব্যবসার জন্য দৃষ্টিনন্দন, দ্রুতগতির এবং মোবাইল-ফ্রেন্ডলি ওয়েবসাইট তৈরি।</li>
                        <li><strong>স্মার্ট ডিজিটাল মার্কেটিং:</strong> ফেসবুক ও অন্যান্য সোশ্যাল মিডিয়া পেজ ফুল-টাইম দেখাশোনা এবং নিখুঁত অডিয়েন্স টার্গেটিংয়ের মাধ্যমে <strong>পেজ বুস্টিং</strong>।</li>
                        <li><strong>অনলাইন ও পেমেন্ট সলিউশন:</strong> ফ্রিল্যান্সিং বা বিজনেস পেমেন্টের জন্য ইন্টারন্যাশনাল কারেন্সি কনভার্সন সংক্রান্ত জটিলতার সহজ সমাধান।</li>
                    </ul>
                </div>
                
                <div class="philosophy-block">
                    <h2>🎯 কাজের দর্শন (My Work Philosophy):</h2>
                    <p>আমি শুধু কাজ ডেলিভারি করায় বিশ্বাসী নই; আমি ক্লায়েন্টের ব্যবসার দীর্ঘমেয়াদী উন্নতি এবং সততার সাথে সঠিক সমাধান দিতে পছন্দ করি।</p>
                </div>
                
                <div class="cta-block">
                    <p class="cta-text">🚀 চলুন একসাথে কাজ শুরু করি!</p>
                    <div class="cta-buttons">
                        <!-- ২ নং ছবির লিংক (সেবাসমূহ) -->
                        <button id="modalServicesBtn" class="btn btn-secondary">সেবাসমূহ</button>
                        <!-- ৩ নং ছবির লিংক (যোগাযোগ করুন) -->
                        <button id="modalContactBtn" class="btn btn-primary">যোগাযোগ করুন</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

document.addEventListener("DOMContentLoaded", function() {
    // বডিতে পপআপের কোড যুক্ত করা
    const targetElement = document.getElementById("my-profile-section");
    if(targetElement) {
        targetElement.innerHTML = profilePopupHTML;
    }

    const modal = document.getElementById("customProfileModal");
    const closeBtn = document.querySelector(".close-profile-modal");
    const themeBtn = document.getElementById("themeToggleBtn");
    const profileModalContent = document.querySelector(".profile-modal-content");

    // মেনুর "আমার সম্পর্কে" বাটনে ক্লিক করলে পপআপ খুলবে
    const aboutLinks = document.querySelectorAll('a[href*="about"], a[href*="সম্পর্কে"]');
    aboutLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            modal.style.display = "block";
            document.body.style.overflow = "hidden"; // ব্যাকগ্রাউন্ড স্ক্রল বন্ধ রাখবে
        });
    });

    // পপআপ বন্ধ করার ফাংশন
    function closeModal() {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }

    if(closeBtn) {
        closeBtn.addEventListener("click", closeModal);
    }

    // ২ নং ছবির সমাধান: সেবাসমূহ বাটনে ক্লিক করলে স্ক্রল করে মেইন পেজের সেবাসমূহে নিয়ে যাবে
    document.getElementById("modalServicesBtn").addEventListener("click", function() {
        closeModal();
        setTimeout(() => {
            // স্ক্রিনশটে আপনার সেবাসমূহ সেকশনের আইডি খোঁজ করে এটি স্ক্রল করবে
            const servicesSection = document.getElementById("services") || document.querySelector('[id*="service"]');
            if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: "smooth" });
            } else {
                window.location.hash = "#services";
            }
        }, 300);
    });

    // ৩ নং ছবির সমাধান: যোগাযোগ করুন বাটনে ক্লিক করলে মেইন পেজের যোগাযোগে নিয়ে যাবে
    document.getElementById("modalContactBtn").addEventListener("click", function() {
        closeModal();
        setTimeout(() => {
            // স্ক্রিনশট ও ইউআরএল দেখে নিশ্চিত যে আপনার কন্টাক্ট আইডি '#contact'
            const contactSection = document.getElementById("contact") || document.querySelector('[id*="contact"]');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
            } else {
                window.location.hash = "#contact";
            }
        }, 300);
    });

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
