import "../Styles/Contact.css";
import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GmailIcon from "@material-ui/icons/Mail";
import LocationPic from "../Assets/location.jpg"


function Contact() {
    const [locationHover, setLocationHover] = React.useState(false);
    return (
        <div className="contact" id="contact">
            <h1>Contact</h1>
            <div className="info">
                <div className="left">
                    <div className="contactInfo">
                        <a href="https://www.instagram.com/_car.dog_/" target="_blank" rel="noopener noreferrer"> 
                            <InstagramIcon />
                            <div className="contactInfoText">
                                <h3>Instagram</h3>
                                <p>@_car.dog_</p>
                            </div>
                        </a>
                    </div>
                    <div className="contactInfo">
                        <a href="https://www.linkedin.com/in/%E8%B2%B4%E6%B0%91-%E6%B1%9F-11524b209/" target="_blank" rel="noopener noreferrer"> 
                            <LinkedInIcon /> 
                            <div className="contactInfoText">
                                <h3>LinkedIn</h3>
                                <p>https://www.linkedin.com/in/%E8%B2%B4%E6%B0%91-%E6%B1%9F-11524b209/</p>
                            </div>
                        </a>
                    </div>
                    <div className="contactInfo">
                        <a href={`mailto:${"kwaiman.kong@gmail.com"}?subject=${encodeURIComponent("") || ''}&body=${encodeURIComponent("body") || ''}`} target="_blank" rel="noopener noreferrer"> 
                            <GmailIcon /> 
                            <div className="contactInfoText">
                                <h3>Mail</h3>
                                <p>kwaiman.kong@gmail.com</p>
                            </div>
                        </a>
                    </div>
                
                </div>
                <div className="right">
                    <a href="https://www.google.com.hk/maps/place/%E5%BE%97%E5%AE%9D%E8%8A%B1%E5%9B%ADC%E5%BA%A7/@22.3266462,114.2140722,19.08z/data=!4m6!3m5!1s0x340407900d87e1f3:0x6318c738b07c4cf0!8m2!3d22.3271499!4d114.2141834!16s%2Fg%2F11kqb53nwp?hl=zh-TW&entry=ttu" target="_blank" rel="noopener noreferrer"
                    onMouseEnter={() => setLocationHover(true)}
                    onMouseLeave={() => setLocationHover(false)}
                    >
                        <img src={LocationPic}/>
                    </a>   
                     
                </div>
            </div>
        </div>
    );
}
  export default Contact;