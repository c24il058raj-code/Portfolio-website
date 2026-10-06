// English text for the JA / EN switch.
// Japanese is the default and lives in index.html; each element marked data-i18n="key" is swapped with EN_TEXT[key].
// Attributes (aria-label, alt) use data-i18n-attr="attribute:key".

const EN_TEXT = {
    /* Browser tab title */
    'page.title': 'SATYA RAJ B K | Portfolio',

    /* Home */
    'home.greeting': 'Welcome! Nice to meet you',
    'home.name': 'SATYA RAJ B K',
    'home.title': 'Aspiring Web Designer / Full-Stack Developer',
    'home.intro': 'I\'m from Nepal and I\'m <span id="age">25</span> years old. I\'m currently studying IT at Nara Computer College, learning HTML, CSS, JavaScript, PHP, C and more, and working hard every day toward becoming a full-stack web developer.',
    'home.contact': 'Contact Me',
    'home.about': 'About Me',
    'home.resume': '<i class="fas fa-file-arrow-down"></i> Resume',
    'home.mailLabel': 'Send an email',
    'home.photoAlt': 'Profile photo of SATYA RAJ B K',

    /* About */
    'about.lead': 'Hi, I\'m SATYA RAJ B K. I\'m a student studying IT at Nara Computer College in Japan, and my goal is to become a full-stack engineer.',
    'about.journey': 'My Journey',
    'tl.1.title': 'Graduated from Technical High School <small>Nepal</small>',
    'tl.1.text': 'Studied IT at Don Bosco Institute Techo Lalitpur. Led a three-person team to build a lighting controller.',
    'tl.2.title': 'Moved to Japan · Entered Japanese Language School',
    'tl.2.text': 'Studied Japanese at Yamato Kyoiku Gakuin Japanese Language School (graduated March 2024).',
    'tl.3.title': 'Entered Nara Computer College',
    'tl.3.text': 'Learning HTML, CSS, JavaScript, PHP and C in the IT Literacy course.',
    'tl.4.title': 'Certifications',
    'tl.4.text': 'Passed JLPT N3 (Dec 2024), JLPT N2 (Jul 2025) and the Basic CAD Certification Exam (Jul 2026).',
    'tl.5.title': 'Portfolio Site Completed · Building a Finance App',
    'tl.5.text': 'Alongside my classes, I keep learning on my own with online courses and YouTube.',
    'tl.6.title': 'Expected Graduation',
    'tl.6.text': 'Aiming to work as an engineer in web and system development.',

    'card.it.title': 'How I Got Into IT',
    'card.it.text': 'My interest in IT began when I first studied programming in Nepal. Back then, I built a small project to control lighting. Beyond just writing code, I became curious about how programs work and the thinking behind them — why they behave the way they do. I also found it exciting to see my own ideas turn into something that actually works. This experience made me want to study IT more seriously.',
    'card.japan.title': 'Why I Came to Japan',
    'card.japan.text': 'I came to Japan because I wanted to study IT abroad, experience a different culture, and challenge myself. Learning a new language, adapting to a new environment, and meeting people from many different countries have all helped me grow. Living on my own has also taught me to be independent.',
    'card.now.title': 'What I\'m Working On',
    'card.now.text': 'Recently, I\'ve been challenging myself to turn ideas into working prototypes with the help of AI. One of my current projects is a personal finance app for tracking income and expenses. It reads purchase information from emails and records it automatically, and users can also enter data manually. I\'d like to publish this app on the App Store in the future, and I want to learn the whole process of actually releasing an app.',

    'card.hobby.title': 'Hobbies',
    'hobby.music.title': '🎵 Music &amp; Singing',
    'hobby.music.text': 'Besides IT, I enjoy listening to music and singing. I usually listen to English, Nepali, and Hindi songs, and my favorite genres are Indie Acoustic, Indie Pop, and Pop. Music is one of the things I enjoy most in my free time, whether I\'m listening to my favorite songs or singing along. 🎶',
    'hobby.movies.title': '🎬 Movies',
    'hobby.movies.text1': 'I enjoy watching movies, especially movies with a good and engaging story. My favorite genres are Horror, Action, and Adventure.',
    'hobby.movies.text2': 'One of the most memorable movie experiences I\'ve had was watching <strong>Avatar</strong>. 🌌 The visuals amazed me because it was the first time I had experienced such incredible movie visuals. The world, environments, and visual effects left a strong impression on me.',
    'hobby.travel.title': '🥾 Traveling &amp; Hiking',
    'hobby.travel.text1': 'I love traveling and hiking, especially exploring new places and experiencing nature. 🌿🏔️',
    'hobby.travel.text2': '<strong>One of my biggest fears is growing old without seeing the whole world.</strong> 🌏',
    'hobby.travel.text3': 'Since coming to Japan, I\'ve had the opportunity to explore several beautiful places. I\'ve hiked <strong>Mt. Horai in Shiga Prefecture and Mt. Katsuragi</strong>, and I\'ve also visited Awajishima, Wakayama, Shiga, Kyoto, Nara, and Mie.',
    'hobby.travel.text4': 'There are still many places I want to explore, both in Japan and around the world. 🌏✈️',

    'more.open': 'See more',
    'more.close': 'Close',

    'motto': 'Every day, I value taking on things that interest me and learning something new. I believe failure isn\'t the end, but an experience that brings me one step closer to success. I\'ll keep taking on new challenges without fear of failure, building meaningful things, and growing a little every day.',

    /* Projects */
    'status.dev': 'In Development',
    'status.live': 'Live',
    'status.done': 'Completed',

    'finance.title': 'Finance Tracker',
    'finance.text': 'An app for managing income and expenses. It reads purchase details from emails and records them automatically, and also supports manual entry. I\'m aiming to release it on the App Store. I also built a website for the app with the help of AI and published it on Netlify.',
    'finance.f1': '<i class="fas fa-chart-pie"></i> View income, expenses and savings by day, month, quarter and year',
    'finance.f2': '<i class="fas fa-list"></i> Search transaction history and filter by income / expenses',
    'finance.f3': '<i class="fas fa-bullseye"></i> Set budgets per category and track how much is used',
    'finance.f4': '<i class="fas fa-envelope-open-text"></i> Connects with Gmail to record purchases from receipt emails automatically',
    'shot.home.label': 'Enlarge the Home screen',
    'shot.home.alt': 'Finance app Home screen showing monthly savings, income and expenses',
    'shot.home.caption': 'Home',
    'shot.history.label': 'Enlarge the History screen',
    'shot.history.alt': 'Transaction history screen with daily expenses, search and filters',
    'shot.history.caption': 'History',
    'shot.budget.label': 'Enlarge the Budget screen',
    'shot.budget.alt': 'Budget screen with bars showing budget and spending per category',
    'shot.budget.caption': 'Budget',
    'shot.receipts.label': 'Enlarge the Receipt Sync screen',
    'shot.receipts.alt': 'Gmail sync screen reading and registering receipt emails',
    'shot.receipts.caption': 'Receipt Sync',
    'finance.site': '<i class="fas fa-arrow-up-right-from-square"></i> Visit the App Website',

    'portfolio.title': 'Portfolio Website',
    'portfolio.text': 'This website. Built with HTML, CSS and JavaScript, with a responsive design that also works on smartphones.',
    'portfolio.code': '<i class="fab fa-github"></i> View Code',

    'light.title': 'Lighting Controller',
    'light.text': 'In high school, I led a three-person team to build an Arduino-based controller that adjusts lighting brightness. I was in charge of programming in C.',
    'light.tagC': 'C',
    'light.tagLeader': 'Team Leader',
    'light.more1': 'In high school, I led a group of three on a project to build a controller that adjusts the brightness of lighting. We used Arduino and combined electronic components such as lamps and converters to build the system. I was responsible for programming in C, while the other members handled assembling and wiring the components.',
    'light.more2': 'During the project, we ran into several problems, such as program errors and components that didn\'t work correctly. We researched programs and circuits online and tried different approaches until we solved them. We failed many times, but by working together and continuing to improve, we finally completed the project and submitted the finished device to our teacher.',
    'light.more3': 'Through this experience, I gained not only the ability to solve programming and electronics problems, but also the leadership to bring a team together and see a project through to the end.',

    /* Skills */
    'skills.tech': 'Technical Skills',
    'skills.frontend': '<i class="fas fa-display"></i> Frontend',
    'skills.backend': '<i class="fas fa-server"></i> Backend &amp; Other',
    'skills.c': 'C',
    'skills.tools': '<i class="fas fa-toolbox"></i> Tools',
    'skills.ai': 'AI Tools',
    'skills.languages': 'Languages',
    'lang.ne': 'Nepali',
    'lang.native': 'Native',
    'lang.ja': 'Japanese',
    'lang.en': 'English',
    'lang.hi': 'Hindi',
    'lang.upperInt': 'Upper-Intermediate',

    /* Contact */
    'contact.title': 'I look forward to working with you',
    'contact.text': 'Thank you for your interest. Please feel free to get in touch.',
    'contact.send': '<i class="fas fa-envelope"></i> Send Email',
    'contact.copyLabel': 'Copy email address',
    'contact.location': '<i class="fas fa-map-marker-alt"></i> Osaka, Japan',

    /* Lightbox & footer */
    'lightbox.label': 'Screenshot',
    'lightbox.close': 'Close',
    'lightbox.prev': 'Previous image',
    'lightbox.next': 'Next image',
    'footer.name': 'SATYA RAJ B K',
    'footer.top': 'Back to top'
};

// Text that script.js sets at runtime, in both languages
const UI_STRINGS = {
    ja: {
        menuOpen: 'メニューを開く',
        menuClose: 'メニューを閉じる',
        copied: 'メールアドレスをコピーしました',
        copyFailed: 'コピーできませんでした'
    },
    en: {
        menuOpen: 'Open menu',
        menuClose: 'Close menu',
        copied: 'Email address copied',
        copyFailed: 'Couldn\'t copy the address'
    }
};
