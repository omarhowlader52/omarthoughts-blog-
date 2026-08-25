// ১. আপনার সমস্ত প্রফেশনাল কন্টেন্ট ডেটা (বাংলা ও ইংরেজি)
const aboutData = {
    bn: `
        <div class="about-card-section">
            <div class="about-center-header">
                <!-- আপনার লোগো ইমেজ -->
                <img src="omar52hub.png" alt="Omar 52Hub Logo" class="about-site-logo" />
                
                <!-- আপনার লাইভ প্রোফাইল ছবি (এখানে আপনার ছবির আসল লিংক বসাবেন) -->
                <img src="https://placeholder.com" alt="মো: ওমর হাওলাদার" class="about-live-photo" />
                
                <h1>হ্যালো, আমি মো: ওমর হাওলাদার 👋</h1>
                <div class="about-tagline-text">আপনার ব্যবসার ডিজিটাল গ্রোথ এবং অল-ইন-ওয়ান অনলাইন পার্টনার</div>
            </div>
            
            <p class="about-para">আমি একজন প্রফেশনাল <span class="about-highlight">ওয়েব ডেভেলপার</span>, <span class="about-highlight">ডিজিটাল মার্কেটার</span> এবং <span class="about-highlight">মাল্টিপারপাস অনলাইন সリューション এক্সপার্ট</span>। গত কয়েক বছর ধরে আমি বিভিন্ন ব্যবসাকে অনলাইনে সফল করার পাশাপাশি সাধারণ মানুষকে জটিল সব অনলাইন ও আইটি সেবা খুব সহজে প্রদান করে আসছি।</p>
            <p class="about-para">একটি সাধারণ আইডিয়াকে ডিজিটাল ব্র্যান্ডে রূপান্তর করা থেকে শুরু করে যেকোনো জরুরি অনলাইন অ্যাপ্লিকেশন—প্রতিটি ধাপে আমি আপনাকে শতভাগ নির্ভুল ও প্রফেশনাল সাপোর্ট দিতে প্রস্তুত।</p>

            <div class="about-inner-box">
                <div class="about-box-title">💡 আমি আপনাকে যেভাবে সাহায্য করতে পারি:</div>
                <ul>
                    <li><strong>আধুনিক ওয়েব ডেভেলপমেন্ট:</strong> ব্যবসার ধরন অনুযায়ী দৃষ্টিনন্দন, দ্রুতগতির এবং শতভাগ <span class="about-highlight">মোবাইল-ফ্রেন্ডলি</span> ওয়েবসাইট তৈরি।</li>
                    <li><strong>স্মার্ট ডিজিটাল মার্কেটিং:</strong> ফেসবুক ও সোশ্যাল মিডিয়া পেজ ম্যানেজমেন্ট এবং সঠিক কাস্টমার টার্геটিংয়ের মাধ্যমে <span class="about-highlight">পেজ বুস্টিং</span>।</li>
                    <li><strong>স্মার্ট অনলাইন অ্যাপ্লিকেশন ও আইটি সেবা:</strong> পাসপোর্ট, ড্রাইভিং লাইসেন্স, টিন (TIN) সার্টিফিকেট, ভিসা এবং যেকোনো সরকারি-বেসরকারি অনলাইন আবেদন নিখুঁতভাবে সম্পন্নকরণ।</li>
                    <li><strong>অনলাইন ও পেমেন্ট সリューション:</strong> ফ্রিল্যান্সিং বা গ্লোবাল বিজনেসের জন্য ইন্টারন্যাশনাল কারেন্সি কনভার্সন সংক্রান্ত জটিলতার সহজ সমাধান।</li>
                </ul>
            </div>

            <div class="about-inner-box">
                <div class="about-box-title">🎯 কেন আমাকে আপনার প্রজেক্টের জন্য বেছে নেবেন?</div>
                <ul>
                    <li><strong>শতভাগ নির্ভুলতা:</strong> অনলাইন অ্যাপ্লিকেশনের প্রতিটি কাজ অত্যন্ত সতর্কতার সাথে নিখুঁতভাবে সম্পন্ন করি।</li>
                    <li><strong>কাস্টমাইজড সリューション:</strong> আপনার প্রয়োজন ও বাজেট বুঝে একদম সঠিক এবং লাভজনক প্ল্যান তৈরি করি।</li>
                    <li><strong>লাইফ-টাইম সাপোর্ট:</strong> কাজ শেষ হওয়ার পরেও যেকোনো প্রয়োজনে প্রফেশনাল গাইডলাইন ও সাপোর্ট প্রদান করি।</li>
                </ul>
            </div>

            <div class="about-inner-box">
                <div class="about-box-title">⚙️ আমার কাজের প্রক্রিয়া:</div>
                <ol>
                    <li><strong>প্রয়োজনীয়তা বোঝা:</strong> প্রথমে আপনার রিকোয়ারমেন্ট এবং প্রয়োজনীয় ডকুমেন্টস ভালোভাবে যাচাই করি।</li>
                    <li><strong>সহজ বাস্তবায়ন:</strong> আধুনিক ডিজাইন, মার্কেটিং স্ট্র্যাটেজি বা নির্ভুল অ্যাপ্লিকেশনের মাধ্যমে কাজটি সম্পন্ন করি।</li>
                    <li><strong>ফাইনাল ডেলিভারি:</strong> সম্পূর্ণ নিখুঁতভাবে কাজটি বুঝিয়ে দিয়ে আপনার অনলাইন যাত্রা সহজ করি।</li>
                </ol>
            </div>

            <div class="about-inner-box">
                <div class="about-box-title">🎯 কাজের দর্শন (My Work Philosophy):</div>
                <p class="about-para" style="margin-bottom: 0;">আমি শুধু কাজ ডেলিভারি করায় বিশ্বাসী নই; আমি ক্লায়েন্টের দীর্ঘমেয়াদী উন্নতি এবং সততার সাথে সঠিক সমাধান দিতে পছন্দ করি।</p>
            </div>

            <div class="about-cta-container">
                <a href="#contact" class="about-action-cta">💬 চলুন আপনার প্রজেক্ট নিয়ে আলোচনা করি</a>
            </div>
        </div>
    `,
    en: `
        <div class="about-card-section">
            <div class="about-center-header">
                <img src="omar52hub.png" alt="Omar 52Hub Logo" class="about-site-logo" />
                <img src="https://placeholder.com" alt="Md. Omar Howlader" class="about-live-photo" />
                <h1>Hello, I am Md. Omar Howlader 👋</h1>
                <div class="about-tagline-text">Your Digital Growth & All-in-One Online Partner</div>
            </div>
            
            <p class="about-para">I am a professional <span class="about-highlight">Web Developer</span>, <span class="about-highlight">Digital Marketer</span>, and <span class="about-highlight">Multipurpose Online Solutions Expert</span>. For the past few years, I have been helping businesses scale their online presence while providing seamless IT and essential online application services to individuals.</p>
            <p class="about-para">From transforming a simple idea into a digital brand to handling complex online documentation—I provide end-to-end professional support with 100% accuracy.</p>

            <div class="about-inner-box">
                <div class="about-box-title">💡 How I Can Help You:</div>
                <ul>
                    <li><strong>Modern Web Development:</strong> Crafting visually stunning, lightning-fast, and 100% <span class="about-highlight">mobile-friendly</span> websites.</li>
                    <li><strong>Smart Digital Marketing:</strong> Managing social media handles and launching targeted campaigns for <span class="about-highlight">page boosting</span>.</li>
                    <li><strong>Smart Online Applications & IT Services:</strong> Error-free processing of Passport, Driving License, TIN Certificate, Visa, and all types of online applications.</li>
                    <li><strong>Online & Payment Solutions:</strong> Seamless troubleshooting for global currency conversion and international payment gateway setups.</li>
                </ul>
            </div>

            <div class="about-inner-box">
                <div class="about-box-title">🎯 Why Choose Me For Your Project?</div>
                <ul>
                    <li><strong>100% Accuracy:</strong> I double-check every detail to ensure absolute precision and flawless submission.</li>
                    <li><strong>Tailored Strategies:</strong> Delivering optimized solutions matching your specific business goals and budget.</li>
                    <li><strong>Dedicated Support:</strong> Always available for post-delivery technical assistance and strategic guidance.</li>
                </ul>
            </div>

            <div class="about-inner-box">
                <div class="about-box-title">⚙️ My Workflow:</div>
                <ol>
                    <li><strong>Understand Requirements:</strong> Thoroughly reviewing your project goals or necessary documents.</li>
                    <li><strong>Flawless Execution:</strong> Implementing professional frameworks, campaigns, or precise inputs.</li>
                    <li><strong>Final Launch:</strong> Swiftly delivering a perfected product or successful application confirmation.</li>
                </ol>
            </div>

            <div class="about-inner-box">
                <div class="about-box-title">🎯 My Work Philosophy:</div>
                <p class="about-para" style="margin-bottom: 0;">I don't just focus on task delivery; I value the long-term progress of my clients and prefer providing authentic solutions with maximum dedication.</p>
            </div>

            <div class="about-cta-container">
                <a href="#contact" class="about-action-cta">💬 Let's Discuss Your Project</a>
            </div>
        </div>
    `
};

// ২. ডাইনামিক স্টাইল শিট ইনজেকশন (মেইন CSS ফাইল এডিট করা লাগবে না)
const aboutStyle = document.createElement('style');
aboutStyle.innerHTML = `
    .about-main-wrapper {
        max-width: 480px;
        width: 100%;
        margin: 20px auto;
        padding: 15px;
        box-sizing: border-box;
    }
    .about-card-section {
        background-color: #151c26;
        border: 1px solid #243242;
        border-radius: 16px;
        padding: 24px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.4);
    }
    body[data-theme="light"] .about-card-section {
        background-color: #ffffff;
        border-color: #e2e8f0;
    }
    .about-btn-bar {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }
    .about-ctrl-btn {
        background-color: #1a2332;
        color: #3b82f6;
        border: 1px solid #243242;
        padding: 8px 16px;
        border-radius: 30px;
        cursor: pointer;
        font-size: 13px;
        font-weight: 600;
    }
    body[data-theme="light"] .about-ctrl-btn {
        background-color: #f1f5f9;
        border-color: #e2e8f0;
    }
    .about-center-header {
        text-align: center;
        margin-bottom: 25px;
    }
    .about-site-logo {
        max-width: 140px;
        height: auto;
        display: block;
        margin: 0 auto 15px auto;
    }
    .about-live-photo {
        width: 110px;
        height: 110px;
        border-radius: 50%;
        border: 3px solid #3b82f6;
        object-fit: cover;
        margin: 10px auto;
        display: block;
    }
    .about-card-section h1 {
        font-size: 24px;
        color: #3b82f6;
        font-weight: 700;
        margin: 12px 0 6px 0;
    }
    .about-tagline-text {
        font-size: 14px;
        color: #94a3b8;
        line-height: 1.4;
        margin-bottom: 15px;
    }
    body[data-theme="light"] .about-tagline-text {
        color: #475569;
    }
    .about-para {
        font-size: 14.5px;
        line-height: 1.75 !important;
        color: #cbd5e1;
        margin-bottom: 16px;
        text-align: justify;
    }
    body[data-theme="light"] .about-para {
        color: #334155;
    }