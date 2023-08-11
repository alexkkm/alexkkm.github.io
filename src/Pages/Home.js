import React from 'react';
import Link from "@material-ui/core/Link";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GmailIcon from "@material-ui/icons/Mail";
import CodeIcon from '@material-ui/icons/Code';

import propic from "../Assets/propic.jpg";
import "../Styles/Home.css";
import {motion} from "framer-motion";
import SkillsBar from '../Components/SkillsBar';
import Contact from '../Components/Contact';


function Home() {
  return (
    <motion.div 
      className="home"
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      exit={{opacity: 0}}
    >
      <div className="about">
        <div className="propic">
          <img src={propic} alt="Profile Picture" />
        </div>
        <h2> Alex KONG </h2>
        <div className="prompt"> 
          <p>
            Bsc. Computer Science, Graduate at CUHK
          </p> 
          <Link href="https://www.instagram.com/_car.dog_/" target="_blank" rel="noopener noreferrer"> <InstagramIcon /> </Link>
          <Link href="https://github.com/alexkkm" target="_blank" rel="noopener noreferrer"> <GitHubIcon /> </Link>
          <Link href="https://www.linkedin.com/in/%E8%B2%B4%E6%B0%91-%E6%B1%9F-11524b209/" target="_blank" rel="noopener noreferrer"> <LinkedInIcon /> </Link>
          <Link href={`mailto:${"kwaiman.kong@gmail.com"}?subject=${encodeURIComponent("") || ''}&body=${encodeURIComponent("body") || ''}`} target="_blank" rel="noopener noreferrer"> <GmailIcon /> </Link>
          <Link href="https://alexkkm.github.io/react-yarn/" target="_blank" rel="noopener noreferrer"> <CodeIcon /> </Link>
        </div>
      </div>
      <div className='skills'>
        <h1>Technical Skills</h1>
        <ol className="list">
          <li className="item">
          <li className="item">
            <h2> Programming Languages </h2>
            <SkillsBar/>
          </li>
            <h2> Full-Stack Development </h2>
            <span>
              React, Node, Oracle, SpringBoot, SQL
            </span>
          </li> 
          <li className="item">
          <li className="item">
            <h2> Mobile Application Development </h2>
            <span>
              React Native, Flutter, Android Studio, Swift
            </span>
          </li>
          </li>
        </ol>
      </div>
      <hr class="roundedDivLine" />
      <div className="hobbies">
        <h1>Hobbies</h1>
        <ol className="list">
        <li className="item">
            <h2> Sports </h2>
            <span>
              Table Tennis Registered Player in HKTTA, with 1 year coaching Experience
            </span>
            <p></p>
            <span>
              Football Player, ex-player for Kwun Tong District U-16
            </span>
          </li>
          <li className="item">
            <h2> Music </h2>
            <span>
              Learnt: Violin
            </span>
            <p></p>
            <span>
              Learning: Guitar, Piano
            </span>
          </li>
          <li className="item">
            <h2> Games </h2>
            <span>
              GTA V, Cyberpunk, Minecraft, FIFA
            </span>
          </li>
        </ol>
      </div>
      <hr class="roundedDivLine" />
      <div className="contact">
        <Contact/>
      </div>
    </motion.div>
  );
}

export default Home;
