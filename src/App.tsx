import React from 'react';
import styles from './App.module.css';
import { Project } from './components';
import { ProjectProps } from './components/project/Project';
import clearcallLogo from './assets/images/clearcall.png';
import dcodeLogo from './assets/images/dcode.png';
import pointnetLogo from './assets/images/pointnet.png';

const projects: ProjectProps[] = [
    {
        title: 'ClearCall',
        type: 'Software as a Service',
        tags: ['React', 'TypeScript', 'GraphQL'],
        description: `With my good friends Justin Glibert and Jay Yeung, I'm currently working on a NLP solution for customer service via phone. The elevator pitch: "We replace your low converting voicemail with a conversational form, that your customers will love"`,
        url: 'https://clearcall.app',
        category: 'spotlight',
        image: clearcallLogo,
    },
    {
        title: 'Dcode',
        type: 'Shopify App',
        tags: ['React', 'Node.js', 'JavaScript'],
        description: `Dcode adds a simple but desired feature to Shopify stores - cart level discount codes. I wrote the app in winter 2018 and currently manage one employee. More than 800 stores are actively using the app.`,
        url: 'https://apps.shopify.com/discountcode-in-cart',
        linktext: 'Shopify App Store',
        category: 'spotlight',
        image: dcodeLogo,
    },
    {
        title: 'PointNet for Autonomous Driving',
        type: 'Research Project',
        tags: ['React'],
        description: `In this project I trained a Deep Learning model based on the PointNet architecture on dense point clouds to predict the correct steering of a car in the CARLA driving simulator. Results can be found on GitHub.`,
        url: 'https://github.com/flomllr/PointNet_CARLA',
        linktext: 'Github',
        category: 'spotlight',
        image: pointnetLogo,
    },
    {
        title: 'Context',
        type: 'Hack.Zurich 2019',
        tags: ['Electron', 'Node.js', 'AppleScript'],
        description: `Context is a macOS app that radically simplifies window management for context changes. We built it at Hack.Zurich 2019, reached the final and won the 2nd prize in the productivity category.`,
        url: 'https://devpost.com/software/context-49dob3',
        linktext: 'Devpost',
        category: 'hackathon',
    },
    {
        title: 'Deeplify',
        type: 'Y Combinator Hackathon 2019',
        tags: ['React', 'Firebase'],
        description: `Deeplify provides a convenient way for researchers to serve their trained deep learning models via an API and a central platform for developers to discover and use them.`,
        url: 'https://devpost.com/software/deephub',
        linktext: 'Devpost',
        category: 'hackathon',
    },
    {
        title: 'Pheel',
        type: 'START Hack St. Gallen 2019',
        tags: ['React', 'Node.js'],
        description: `Our contribution to the Microsoft Challenge 'AI for Good': Providing audio feedback on the expressions and reactions of the people in front of you.`,
        url: 'https://devpost.com/software/start-hack',
        linktext: 'Devpost',
        category: 'hackathon',
    },
    {
        title: '4four',
        type: 'iNTUition Hackathon 2018',
        tags: ['React', 'Node.js'],
        description: `Mobile app that matches exchange students with local students and suggests social activities in line with their interests.`,
        url: 'https://devpost.com/software/forfour',
        linktext: 'Devpost',
        category: 'hackathon',
    },
    {
        title: 'flomllr.com',
        type: 'Website implementation 2019',
        tags: ['Design', 'React', 'TypeScript'],
        description: `I designed and implemented the website you're looking at right now. It's done with React (TypeScript), my favorite frontend library.`,
        url: 'https://appliedai.de/',
        category: 'webdesign',
    },
    {
        title: 'Bube Concept',
        type: 'Website implementation 2018',
        tags: ['Design', 'HTML', 'CSS', 'PHP'],
        description: `In a team of three we redesigned and implemented the website for a B2B print company in Cologne, Germany.`,
        url: 'http://bube-concept.de/',
        category: 'webdesign',
    },
    {
        title: 'Academy Consult',
        type: 'Website implementation 2018',
        tags: ['Design', 'HTML', 'CSS', 'PHP'],
        description: `As leader of the web team, I redesigned and reimplemented the website of the student-run business consultancy Academy Consult.`,
        url: 'http://academyconsult.de/',
        category: 'webdesign',
    },
    {
        title: 'appliedAI',
        type: 'Website implementation 2017',
        tags: ['Design', 'HTML', 'CSS', 'PHP'],
        description: `During a part-time employmemnt at appliedAI, I redesigned and reimplemented their the corporate website.`,
        url: 'https://appliedai.de/',
        category: 'webdesign',
    },
    {
        title: '5AM',
        type: 'Telegram Bot',
        tags: ['Python'],
        description: `5AM is a telegram bot built for people who want to break their habit of waking up late. Participants in a Telegram group commit to sending an update before 6am on more than 2 days per week. The bot keeps track of it.`,
        url: 'https://github.com/flomllr/5am-bot',
        linktext: 'Github',
        category: 'other',
    },
    {
        title: 'Fancymerch',
        type: 'Online Store',
        tags: ['Design'],
        description: `Fancymerch is an online store, selling tshits I designed. It gained a lot of traction after (the) Robert Downey Jr. shared it in a post on his Facebook page. I sold the shop at some point, but the website and products haven't changed since then.`,
        url: 'https://fancymerch.com/',
        category: 'other',
    },
];

const App: React.FC = () => {
    const likeThings: string[] = [
        'running before 6AM',
        'hackathons',
        'green tea',
        'reading',
        'the metric system',
        'clean design',
        'dogs',
        'computer vision',
    ];
    const shuffleLike: () => void = () => {
        console.log(likeThings);
        likeThings.sort(() => Math.random() - 0.5);
    };
    shuffleLike();
    return (
        <div className={styles.main}>
            <div className={styles.intro}>
                <h1>Hello, world.</h1>
                <p>
                    My name is <b>Florian Müller</b> and I&apos;m a third year computer science student from Munich,
                    Germany. Here are some of the projects I&apos;m working on.
                </p>
            </div>
            <div className={styles.spotlight}>
                <h2>Spotlight</h2>
                <div className={styles.spotlightProjects}>
                    {projects
                        .filter(p => p.category === 'spotlight')
                        .map((p, index) => (
                            <Project {...p} key={index} spotlight />
                        ))}
                </div>
            </div>
            <div className={styles.other}>
                <h2>Hackathon projects</h2>
                <div className={styles.otherProjects}>
                    {projects
                        .filter(p => p.category === 'hackathon')
                        .map((p, index) => (
                            <Project {...p} key={index} />
                        ))}
                </div>
            </div>
            <div className={styles.other}>
                <h2>Webdesign projects</h2>
                <div className={styles.otherProjects}>
                    {projects
                        .filter(p => p.category === 'webdesign')
                        .map((p, index) => (
                            <Project {...p} key={index} />
                        ))}
                </div>
            </div>
            <div className={styles.other}>
                <h2>Other projects</h2>
                <div className={styles.otherProjects}>
                    {projects
                        .filter(p => p.category === 'other')
                        .map((p, index) => (
                            <Project {...p} key={index} />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default App;
