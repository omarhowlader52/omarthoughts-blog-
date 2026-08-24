// profile-component.js 
const profileHTML = `
<section class="profile-section" id="profileSection">
    <!-- ডার্ক মোড বাটন -->
    <div class="theme-toggle-area">
        <button id="themeToggleBtn" class="theme-btn">🌙 ডার্ক মোড</button>
    </div>

    <div class="profile-container">
        <!-- অ্যানিমেশনের জন্য class="animate-fade-in" যোগ করা হয়েছে -->
        <div class="profile-image-area animate-fade-in">
            <img src="image_SQlyF7.png" alt="ওমর হাওলাদার" class="profile-img">
        </div>
        
        <div class="profile-content animate-slide-up">
            <h1>হ্যালো, আমি <span class="highlight">ওমর হাওলাদার</span> 👋</h1>
            <p class="subtitle">আপনার ব্যবসার ডিজিটাল গ্রোথ এবং টেকনিক্যাল পার্টনার</p>
            <p class="description">আমি একজন প্রফেশনাল <strong>ওয়েব ডেভেলপার</strong>, <strong>ডিজিটাল মার্কেটার</strong> এবং <strong>অনলাইন সলিউশন এক্সপার্ট</strong>। গত কয়েক বছর ধরে আমি বিভিন্ন ব্যবসাকে অনলাইনে সফলভাবে প্রতিষ্ঠিত ও পরিচালনা করতে সাহায্য করে আসছি।</p>
            <p class="description">একটি সাধারণ আইডিয়াকে একটি পূর্ণাঙ্গ ডিজিটাল ব্র্যান্ডে রূপান্তর করাই আমার মূল কাজ। ওয়েবসাইট তৈরি করা থেকে শুরু করে সেটি সঠিক অডিয়েন্সের কাছে পৌঁছে দেওয়া পর্যন্ত প্রতিটি ধাপে আমি আপনাকে প্রফেশনাল সাপোর্ট দিতে প্রস্তুত।</p>
            
            <div class="services-block animate-slide-up">
                <h2>💡 আমি আপনাকে যেভাবে সাহায্য করতে পারি:</h2>
                <ul>
                    <li><strong>আধুনিক ওয়েব ডেভেলপমেন্ট:</strong> আপনার ব্যবসার জন্য দৃষ্টিনন্দন, দ্রুতগতির এবং মোবাইল-ফ্রেন্ডলি ওয়েবসাইট তৈরি।</li>
                    <li><strong>স্মার্ট ডিজিটাল মার্কেটিং:</strong> ফেসবুক ও অন্যান্য সোশ্যাল মিডিয়া পেজ ফুল-টাইম দেখাশোনা এবং নিখুঁত অডিয়েন্স টার্গেটিংয়ের মাধ্যমে <strong>পেজ বুস্টিং</strong>।</li>
                    <li><strong>অনলাইন ও পেমেন্ট সলিউশন:</strong> ফ্রিল্যান্সিং বা বিজনেস পেমেন্টের জন্য ইন্টারন্যাশনাল কারেন্সি কনভার্সন সংক্রান্ত জটিলতার সহজ সমাধান।</li>
                </ul>
            </div>
            
            <div class="philosophy-block animate-slide-up">
                <h2>🎯 কাজের দর্শন (My Work Philosophy):</h2>
                <p>আমি শুধু কাজ ডেলিভারি করায় বিশ্বাসী নই; আমি ক্লায়েন্টের ব্যবসার দীর্ঘমেয়াদী উন্নতি এবং সততার সাথে সঠিক সমাধান দিতে পছন্দ করি।</p>
            </div>
            
            <div class="cta-block animate-slide-up">
                <p class="cta-text">🚀 চলুন একসাথে কাজ শুরু করি!</p>
                <div class="cta-buttons">
                    <a href="#services" class="btn btn-secondary">সেবাসমূহ</a>
                    <a href="#contact" class="btn btn-primary">যোগাযোগ করুন</a>
                </div>
            </div>
        </div>
    </div>
</section>
`;

// মূল HTML ফাইলে লোড করার লজিক
document.addEventListener("DOMContentLoaded", function() {
    const targetElement = document.getElementById("my-profile-section");
    if(targetElement) {
        targetElement.innerHTML = profileHTML;
        
        // ডার্ক মোড ফাংশনালিটি
        const themeBtn = document.getElementById("themeToggleBtn");
        const profileSection = document.getElementById("profileSection");
        
        // আগে থেকে ইউজারের ডার্ক মোড চয়েস সেভ করা আছে কিনা চেক করা
        if (localStorage.getItem("profile-theme") === "dark") {
            profileSection.classList.add("dark-theme");
            themeBtn.innerHTML = "☀️ লাইট মোড";
        }

        themeBtn.addEventListener("click", function() {
            profileSection.classList.toggle("dark-theme");
            
            if (profileSection.classList.contains("dark-theme")) {
                localStorage.setItem("profile-theme", "dark");
                themeBtn.innerHTML = "☀️ লাইট মোড";
            } else {
                localStorage.setItem("profile-theme", "light");
                themeBtn.innerHTML = "🌙 ডার্ক মোড";
            }
        });
    }
});
