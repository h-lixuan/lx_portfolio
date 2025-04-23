const { createApp } = Vue
const { createRouter, createWebHashHistory } = VueRouter

// Function to fetch template content
async function fetchTemplate(path) {
    const response = await fetch(path)
    return await response.text()
}

// Create components
const Home = {
    template: await fetchTemplate('js/templates/Home.html'),
    data() {
        return {
            projects: [
                {
                    id: 1,
                    title: "E-commerce Platform",
                    description: "A full-stack e-commerce platform built with Vue.js and Node.js, featuring product management, shopping cart, and payment integration.",
                    demo: "https://example.com/ecommerce",
                    github: "https://github.com/example/ecommerce"
                },
                {
                    id: 2,
                    title: "Task Management App",
                    description: "A responsive task management application with real-time updates, built using Vue.js and Firebase.",
                    demo: "https://example.com/tasks",
                    github: "https://github.com/example/tasks"
                },
                {
                    id: 3,
                    title: "Weather Dashboard",
                    description: "A weather dashboard that displays current and forecasted weather data using the OpenWeather API.",
                    demo: "https://example.com/weather",
                    github: "https://github.com/example/weather"
                }
            ]
        }
    }
}

const About = {
    template: await fetchTemplate('js/templates/About.html'),
    data() {
        return {
            skills: [
                'Vue.js', 'JavaScript', 'HTML5', 'CSS3', 'Node.js',
                'Express', 'MongoDB', 'Git', 'RESTful APIs', 'Responsive Design'
            ],
            experience: [
                {
                    id: 1,
                    position: 'Senior Frontend Developer',
                    company: 'Tech Solutions Inc.',
                    duration: '2020 - Present',
                    description: 'Leading the frontend development team, implementing Vue.js applications, and mentoring junior developers.'
                },
                {
                    id: 2,
                    position: 'Full Stack Developer',
                    company: 'Web Innovations Ltd.',
                    duration: '2018 - 2020',
                    description: 'Developed and maintained web applications using Vue.js and Node.js, implemented RESTful APIs.'
                }
            ],
            education: [
                {
                    id: 1,
                    degree: 'Bachelor of Science in Computer Science',
                    institution: 'University of Technology',
                    duration: '2014 - 2018'
                }
            ]
        }
    }
}

// Create router
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About }
    ]
})

// Create and mount the app
const app = createApp({})
app.use(router)
app.mount('#app') 