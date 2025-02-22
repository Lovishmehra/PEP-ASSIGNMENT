import {SiOpenaigym} from 'react-icons/si'



export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Gallery",
        path: '/gallery'
    },
    {
        name: "Plans",
        path: '/plans'
    },
    {
        name: "Trainers",
        path: '/trainers'
    },
    {
        name: "Contact",
        path: '/contact'
    },
    {
        name: "Bmi Calculator",
        path: '/Bmi'
    }
    // {
    //     name: "Login",
    //     path: '/Login'
    // }
]







export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Foundation Fitness",
        info: "Start your fitness journey with our beginner-friendly program designed to build strength, stamina, and confidence. Perfect for those new to exercise or looking to establish a consistent routine.",
        path: "/programs/111"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Strength Mastery",
        info: "Push your limits with this advanced strength-building program. Tailored for intermediate to advanced athletes aiming to enhance power and endurance.",
        path: "/programs/222"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "HIIT Transformation",
        info: "Burn calories and boost energy with our High-Intensity Interval Training program. Short bursts of intense workouts for maximum results in less time.",
        path: "/programs/333"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Flex & Flow",
        info: "Achieve a balance of strength and flexibility with our dynamic yoga and pilates fusion program. Ideal for reducing stress and enhancing mobility.",
        path: "/programs/444"
    }
]








export const values = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Tailored Excellence",
        desc: "We prioritize your growth by providing personalized fitness plans tailored to your goals."
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Relentless Commitment",
        desc: "Dedication and consistency are the cornerstones of success, and we’re here to support you every step of the way."
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Future Fitness",
        desc: "Innovation drives us forward—we utilize cutting-edge techniques and equipment for optimal results."
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Thrive Together",
        desc: "Building a supportive and inclusive community where everyone thrives is at the heart of what we do."
    }
]









export const faqs = [
    {
        id: 1,
        question: "How often should I exercise?",
        answer: "For beginners, start with 3-4 days a week to allow your body to adapt. Once you build a routine, aim for 5-6 days of exercise, alternating between strength and cardio to maximize results."
    },
    {
        id: 2,
        question: "What time of day is best to work out?",
        answer: "The best time to work out is when you feel most energized. For some, it's early morning; for others, it's after work. The key is consistency—find a time that fits your lifestyle."
    },
    {
        id: 3,
        question: "How long should my workouts be?",
        answer: "A typical workout session should last 45 minutes to an hour. This includes a warm-up, main workout, and cool-down. Short on time? A 20-minute high-intensity session can also be effective!"
    },
    {
        id: 4,
        question: "Do I need to warm up before my workouts?",
        answer: "Absolutely! Warming up increases blood flow, loosens muscles, and reduces the risk of injury. Spend 5-10 minutes doing light cardio and dynamic stretches before every session."
    },
    {
        id: 5,
        question: "Should I do strength training, cardio or both?",
        answer: "A mix of both is ideal. Cardio improves heart health and endurance, while strength training builds muscle and boosts metabolism. Combine them to achieve a balanced fitness routine."
    },
    {
        id: 6,
        question: "Should I lift weights for strength training?",
        answer: "Yes! Weightlifting helps build muscle and improves overall strength. Start with light weights to focus on form, and gradually increase as your strength improves."
    }
]








export const testimonials = [
    {
        id: 1,
        name: "Diana Ayi",
        quote: "This gym has everything I need to crush my fitness goals! The atmosphere is so motivating! 💪",
        job: "Student",
        avatar: require("./images/avatar1.jpg")
    },
    {
        id: 2,
        name: "Daniel Vinyo",
        quote: "Absolutely love this gym! The equipment is top-notch and the staff is incredibly supportive! 🌟",
        job: "Software Egineer",
        avatar: require("./images/avatar2.jpg")
    },
    {
        id: 3,
        name: "Edem Quist",
        quote: "Such a great environment to work out in! The trainers are knowledgeable and truly care about your progress! 🙌",
        job: "University Lecturer",
        avatar: require("./images/avatar3.jpg")
    },
    {
        id: 4,
        name: "Grace Lavoe",
        quote: "I can’t believe the difference this gym has made in my fitness journey! So grateful for this place! ❤️",
        job: "Talking Parrot",
        avatar: require("./images/avatar4.jpg")
    },
    {
        id: 5,
        name: "Nana Yaa Dankwa",
        quote: "Joining this fitness program has been a life-changing experience! The personalized training plans, supportive community, and expert guidance have helped me achieve my goals faster than I imagined. I feel stronger, healthier, and more confident every day. Highly recommended!",
        job: "Pharmacist",
        avatar: require("./images/avatar5.jpg")
    }
]







export const plans = [
    {
        id: 1,
        name: 'Silver Package',
        desc: 'This package is perfect for beginners who need constant help',
        price: 499,
        features: [
            {feature: 'Basic access to gym equipment.', available: true},
            {feature: 'Group fitness classes (limited to twice a week)', available: true},
            {feature: 'Access during non-peak hours only.', available: true},
            {feature: 'No access to personal trainers.', available: true},
            {feature: 'General diet plan suggestions (non-customized)', available: true}
        ]
    },
    {
        id: 2,
        name: 'Gold Package',
        desc: 'This is the perfect package for beginners who know what their doing',
        price: 899,
        features: [
            {feature: 'Full access to gym equipment and facilities.', available: true},
            {feature: 'Unlimited group fitness classes.', available: true},
            {feature: 'Access during all operating hours.', available: true},
            {feature: 'One personal training session per month.', available: true},
            {feature: 'Customizable diet plan designed by a professional.', available: true}
        ]
    },
    {
        id: 3,
        name: 'Platinum Package',
        desc: 'This package is perfect for busy people who need home service',
        price: 1299,
        features: [
            {feature: 'Premium access to gym equipment and facilities', available: true},
            {feature: 'Unlimited group fitness and yoga classes.', available: true},
            {feature: 'Priority booking for personal trainers (up to 4 sessions/month).', available: true},
            {feature: 'At-home virtual training sessions.', available: true},
            {feature: 'Fully customized diet plan with weekly reviews by a dietician.', available: true}
        ]
    }
]









const Trainer1 = require('./images/trainer1.jpg')
const Trainer2 = require('./images/trainer2.jpg')
const Trainer3 = require('./images/trainer3.jpg')
const Trainer4 = require('./images/trainer4.jpg')
const Trainer5 = require('./images/trainer5.jpg')
const Trainer6 = require('./images/trainer6.jpg')


export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'Devansh',
        job: 'Aerobic Trainer',
        socials: ['https://www.instagram.com/devansh._.sharmma?igsh=MWZ1Nmtqd2hmYmxleA==', 'https://x.com/devanshsharrma?t=w68PqWx6wdPVx4ydeef3dg&s=08', 'https://www.facebook.com/profile.php?id=100090515016646&mibextid=ZbWKwL']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Dilbagh',
        job: 'Speed Trainer',
        socials: ['https://www.instagram.com/devansh._.sharmma?igsh=MWZ1Nmtqd2hmYmxleA==', 'https://x.com/devanshsharrma?t=w68PqWx6wdPVx4ydeef3dg&s=08', 'https://www.facebook.com/profile.php?id=100090515016646&mibextid=ZbWKwL']
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Khushi',
        job: 'Flexibility Trainer',
        socials: ['https://www.instagram.com/devansh._.sharmma?igsh=MWZ1Nmtqd2hmYmxleA==', 'https://x.com/devanshsharrma?t=w68PqWx6wdPVx4ydeef3dg&s=08', 'https://www.facebook.com/profile.php?id=100090515016646&mibextid=ZbWKwL']
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Priya',
        job: 'Body Composition Trainer',
        socials: ['https://www.instagram.com/devansh._.sharmma?igsh=MWZ1Nmtqd2hmYmxleA==', 'https://x.com/devanshsharrma?t=w68PqWx6wdPVx4ydeef3dg&s=08', 'https://www.facebook.com/profile.php?id=100090515016646&mibextid=ZbWKwL']
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Divya',
        job: 'Circuit Trainer',
        socials: ['https://www.instagram.com/devansh._.sharmma?igsh=MWZ1Nmtqd2hmYmxleA==', 'https://x.com/devanshsharrma?t=w68PqWx6wdPVx4ydeef3dg&s=08', 'https://www.facebook.com/profile.php?id=100090515016646&mibextid=ZbWKwL']
    },
    {
        id: 6,
        image: Trainer6,
        name: 'Aditi',
        job: 'Physical Intelligence Trainer',
        socials: ['https://www.instagram.com/devansh._.sharmma?igsh=MWZ1Nmtqd2hmYmxleA==', 'https://x.com/devanshsharrma?t=w68PqWx6wdPVx4ydeef3dg&s=08', 'https://www.facebook.com/profile.php?id=100090515016646&mibextid=ZbWKwL']
    }
]