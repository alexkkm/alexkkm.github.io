import SchoolIcon from '@material-ui/icons/School';
import GamesIcon from '@material-ui/icons/Games';
import ComputerIcon from '@material-ui/icons/Computer';
import BookIcon from '@material-ui/icons/MenuBook';

export const ExperienceList = [
    
    {   nature: "internship",
        icon: <ComputerIcon />,
        orgName: "SavvyApp Limited",
        orgLink: "https://www.savvyapp.cc/",
        date: "Jun 2021 - Aug 2021",
        position: "Software Engineer (Internship)",
        descriptions: [ "- Develop the mobile application version for a productivity tool for saving learning resources and discover new reads.", 
                        "- Provided maintenance of the mobile application",
                        "- Embed trackers and other related big data collection methods into app version.", 
                        "- Collaborate with other developers to develop an recommendation algorithm for the application",]
    },
    {   nature: "internship",
        icon: <ComputerIcon />,
        orgName: "Dah Chong Hong Holdings Limited",
        orgLink: "https://www.dch.com.hk/",
        date: "Jun 2022 - Aug 2022",
        position: "Business Analytics (Part Time)",
        descriptions: [ "- Perform business analysis and user requirement studies and assist stakeholders of a project called DPA",
                        "- Translate business requirements into functional design and business workflow specification of the project",
                        "- Communicate with stakeholders, prepare documents and technical information in line with agreed processes and procedures",
                        "- Prepare test scenario and test plans for user acceptance test execution for the project",]
    },
    {
        nature: "education",
        icon: <SchoolIcon />,
        orgName: "The Chinese University of Hong Kong",
        orgLink: "https://www.cuhk.edu.hk/",
        date: "Sep 2018 - Jul 2023",
        position: "Bachelor of Science in Computer Science",
        descriptions: ["- Major in Computer Science",]
    },
    {
        nature: "job",
        icon: <ComputerIcon />,
        orgName: "C3 Construction Robotics",
        orgLink: "",
        date: "Jul 2023 - Present",
        position: "Software Engineer",
        descriptions: ["- Develop and Maintain the robot",]
    }
        
]