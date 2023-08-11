import React from "react";
import Link from "@material-ui/core/Link";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GmailIcon from "@material-ui/icons/Mail";
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
          <Link href="https://www.instagram.com/_car.dog_/" target="_blank" rel="noopener noreferrer"> <InstagramIcon /> </Link>
          <Link href="https://github.com/alexkkm" target="_blank" rel="noopener noreferrer"> <GitHubIcon /> </Link>
          <Link href="https://www.linkedin.com/in/%E8%B2%B4%E6%B0%91-%E6%B1%9F-11524b209/" target="_blank" rel="noopener noreferrer"> <LinkedInIcon /> </Link>
          <Link href={`mailto:${"kwaiman.kong@gmail.com"}?subject=${encodeURIComponent("") || ''}&body=${encodeURIComponent("body") || ''}`} target="_blank" rel="noopener noreferrer"> <GmailIcon /> </Link>
        </div>
        <p> Contact: kwaiman.kong@gmail.com | Location: Hong Kong</p>
        <p> &copy; 2023 alexkkm.github.io</p>
    </div>
  );
}

export default Footer;