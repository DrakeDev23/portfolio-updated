(function () {
    emailjs.init("WBkZ-T-_iaw3o2_FA"); 
})();

const { createApp } = Vue;

createApp({
    data() {
        return {
            darkMode: false,
            isSending: false,
            showSuccess: false,

            contactForm: {
                name: '',
                email: '',
                subject: '',
                message: ''
            },

            techStack: [
                { name: 'Python', icon: 'fab fa-python', color: '#3776ab' },
                { name: 'PHP', icon: 'fab fa-php', color: '#777bb4' },
                { name: 'C', icon: 'fas fa-code', color: '#00599c' },
                { name: 'C++', icon: 'fas fa-code', color: '#00599c' },
                { name: 'C#', icon: 'fab fa-microsoft', color: '#68217a' },
                { name: 'JavaScript', icon: 'fab fa-js', color: '#f7df1e' },
                { name: 'HTML', icon: 'fab fa-html5', color: '#e34c26' },
                { name: 'CSS', icon: 'fab fa-css3-alt', color: '#1572b6' },
                { name: 'Tailwind', icon: 'fas fa-wind', color: '#06b6d4' },
                { name: 'React', icon: 'fab fa-react', color: '#61dafb' },
                { name: 'Vue.js', icon: 'fab fa-vuejs', color: '#4fc08d' },
                { name: 'FastAPI', icon: 'fas fa-bolt', color: '#009688' },
                { name: 'MySQL', icon: 'fas fa-database', color: '#00758f' },
                { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#7952b3' },
                { name: '.NET', icon: 'fas fa-code', color: '#512BD4' },      // ✅ new
                { name: 'Laravel', icon: 'fas fa-fire', color: '#FF2D20' }    // ✅ new
            ],

            projects: [
                {
                    id: 1,
                    title: 'E-Commerce Platform',
                    description: 'Full-stack e-commerce solution with PHP, TailwindCSS, and JavaScript',
                    image: 'images/commerce.jfif',
                    tags: [
                        { name: 'Tailwind', color: 'cyan' },
                        { name: 'PHP', color: 'green' },
                        { name: 'MySQL', color: 'purple' },
                        { name: 'JavaScript', color: 'purple' }
                    ],
                },
                {
                    id: 2,
                    title: 'Community Assistant & E-Service',
                    description: 'Service the community online through this platform',
                    image: 'images/publika.png',
                    tags: [
                        { name: 'HTML', color: 'green' },
                        { name: 'CSS', color: 'yellow' },
                        { name: 'JavaScript', color: 'cyan' }
                    ],
                },
                {
                    id: 3,
                    title: 'Nike Landing Page',
                    description: 'Recreated the Nike landing page using modern web tech',
                    image: 'images/nikeeeeeee.jfif',
                    tags: [
                        { name: 'HTML', color: 'blue' },
                        { name: 'CSS', color: 'orange' },
                    ],
                },
                {
                    id: 4,
                    title: 'Jeepney Finder',
                    description: 'Helps commuters locate jeeps more easily and quickly',
                    image: 'images/jeepner.jfif',
                    tags: [
                        { name: 'TailwindCSS', color: 'purple' },
                        { name: 'JavaScript', color: 'blue' },
                        { name: 'TailwindCSS', color: 'green' }
                    ],
                },
                {
                    id: 5,
                    title: 'Portfolio Website',
                    description: 'Personal portfolio built with Vue and Bootstrap',
                    image: 'images/port.png',
                    tags: [
                        { name: 'Vue.js', color: 'green' },
                        { name: 'Bootstrap', color: 'purple' }
                    ],
                },
                {
                    id: 6,
                    title: 'Beauty Care',
                    description: 'A beauty care website helping users find skincare and self-care products',
                    image: 'images/web1.png',
                    tags: [
                        { name: 'PHP', color: 'green' },
                        { name: 'TailwindCSS', color: 'orange' },
                        { name: 'MySQL', color: 'cyan' },
                        { name: 'JavaScript', color: 'purple' }
                    ],
                }
            ],

            events: [
                {
                    title: 'Launch 2025',
                    date: 'November, 29, 2025',
                    description: 'Using AWS AMPLIFY',
                    image: 'images/launch3.jfif'
                },
                {
                    title: 'AWAKENING THE LIGHT, Building your first Gemini Agent',
                    date: 'December, 7, 2025',
                    description: 'Built a Gemini AI',
                    image: 'images/google.jpg'
                },
                {
                    title: 'Network Security',
                    date: 'November, 15, 2025',
                    description: 'Securing networks effectively',
                    image: 'images/aws3.jfif'
                },
                {
                    title: 'IT DAYS WEB DESIGN CONTEST 2026',
                    date: 'February 7, 2026',
                    description: '1st runner up in the web design contest',
                    image: 'images/webdev.jfif'
                },
                {
                    title: 'IT DAYS CAPTURE THE FLAG',
                    date: 'February 7, 2026',
                    description: 'Champion in the capture the flag event',
                    image: 'images/ctf.jfif'
                }
            ]
        };
    },

    computed: {
        projectGroups() {
            const groups = [];
            for (let i = 0; i < this.projects.length; i += 3) {
                groups.push(this.projects.slice(i, i + 3));
            }
            return groups;
        }
    },

    methods: {
        toggleDarkMode() {
            this.darkMode = !this.darkMode;
            document.body.classList.toggle('dark-mode', this.darkMode);
            localStorage.setItem('darkMode', this.darkMode);
        },

        closeNav() {
            const nav = document.querySelector('.navbar-collapse');
            if (nav && nav.classList.contains('show')) {
                nav.classList.remove('show');
            }
        },

        async sendEmail() {
            if (!this.contactForm.name ||
                !this.contactForm.email ||
                !this.contactForm.subject ||
                !this.contactForm.message) return;

            this.isSending = true;
            this.showSuccess = false;

            try {
                await emailjs.send(
                    "service_4zsliaj",
                    "template_0wmspie",
                    {
                        from_name: this.contactForm.name,
                        from_email: this.contactForm.email,
                        subject: this.contactForm.subject,
                        message: this.contactForm.message
                    }
                );

                this.showSuccess = true;
                this.contactForm = { name: '', email: '', subject: '', message: '' };

                setTimeout(() => this.showSuccess = false, 5000);

            } catch (err) {
                console.error(err);
                alert("Failed to send message");
            } finally {
                this.isSending = false;
            }
        }
    },

    mounted() {
        const saved = localStorage.getItem('darkMode') === 'true';
        if (saved) {
            this.darkMode = true;
            document.body.classList.add('dark-mode');
        }
    }
}).mount('#app');