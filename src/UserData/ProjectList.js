import MyWeb from "../Assets/Project/MyWeb.jpg";
import MusicPlayerImg from "../Assets/Project/MusicPlayerImg.png";

export const ProjectList = [
    {
        name: "Music Player Web",
        date: "2023",
        image: MusicPlayerImg,
        description: "a music player web app that allow users to play music",
        link: "https://github.com/alexkkm/CSCI3280Project",
        hasReadme: true,
        markdown: '/Markdown/MusicPlayerWeb.md',
        details: "The music player can play music from the local storage. It can display lyrics in .txt or .lrc format. It also has a music visualizer.",
    },
    {
        name: "Portfolio Website",
        date: "2023 - present",
        image: MyWeb,
        description: "my portfolio website that is created using React",
        hasReadme: false,
        link: "https://github.com/alexkkm/alexkkm.github.io",
        details: "This is my current working portfolio website. My skills, experience and everything about me is listed here. I am currently working on this website to make it more interactive and more user-frendly. The website is responsive and can be viewed on any device. The website is still under development and will be updated regularly. In the future more features could be added",
    },
]
