import React, { Component } from 'react';

export default class Right extends Component {

    textComments = () =>{
        return {
            textDecoration: 'italic',
            alignSelf : 'flex-end'
        }
    }

    render() {
        return (
            <div className="right-container">
                <div className="cont-container">
                    <p className="emphasizeTitle">INTRO</p>
                    <div>
                    <p>I'm currently in my second year studying Information Technology at <b>Universiti Teknologi PETRONAS, Malaysia</b>.
                       Currently, I'm looking for an internship oppurtunity on the IT sector.
                       in developing and designing products for the web, from simple landing pages to full-fledged web apps.</p>
                </div>
                </div>
                <div className="cont-container">
                    <p className="emphasizeTitle" >SKILLS</p>
                    <div className="trueContent">
                    <ul>
                        <li><b>Languages:</b> JavaScript (ES6), HTML, CSS, Java, C++, PHP, SQL</li>
                        <li><b>Framework & Libraries:</b> React.js</li>
                        <li><b>Tools:</b> git, npm, Microsoft Power BI</li>
                        <li><b>Design:</b> Adobe Illustrator, Adobe XD</li>
                        <li><b>Experienced in building and maintaining computers</b></li>
                    </ul>
                    </div>
                
                </div>
                <div className="cont-container">
                    <p className="emphasizeTitle">EDUCATION</p>
                    <div className="trueContent">
                    <div >
                    <p style={{flex: '1'}}><b>Universiti Teknologi PETRONAS</b></p>
                    <p className="details">September 2018 - January 2022</p>
                    </div>
                    <p><b><i>Bachelor in Information Technology (Hons.)</i></b></p>
                    <p>Minor: Corporate Management</p>
                    <p>CGPA: 3.51/4.00</p>
                    <p>Achieved 2 Dean's List Awards</p>
                    </div>
                </div>
                <div className="cont-container">
                    <p className="emphasizeTitle">RELATED COURSES</p>
                    <div className="trueContent">
                    <p>Structured Programming</p>
                    <p>Object-Oriented Programming</p>
                    <p>Web Application & Integrative Programming</p>
                    <p>Computer Systems</p>
                    <p>Discrete Mathematics</p>
                    <p>Wireless Technology</p>
                    <p>Data Communication Network</p>
                    </div>
                </div>
                <div className="cont-container">
                    <p className="emphasizeTitle">PERSONAL PROJECTS</p>
                    <div className="trueContent">
                        <div className="manySections">
                            <div className="manySectionTitle">
                            <p><b>Resume</b></p>
                            <a href="https://github.com/engkuzahimi/resume-v1" className="details"><i>https://github.com/engkuzahimi/resume-v1</i></a></div>
                            <p>A web version of my resume build using React.</p></div>
                    <div className="manySections">
                        <div className="manySectionTitle">
                            <p><b>itnerarygroup</b></p>
                            <a href="https://engkuzahimi.github.io/itnerary-website" className="details"><i>https://engkuzahimi.github.io/itnerary-website</i></a></div>
                            <p>A website that originally a team project from my Web Development class, it is website  of image gallery of popular tourists destinations all over Southeast Asia.</p> 
                           <p>Build using HTML, CSS, PHP and vanilla JavaScript (ES6). Also utilized Unsplash.com API for fetching high quality images from their website.</p>
                    </div>
                    </div>
                    </div>
                
                <div className="cont-container">
                    <p className="emphasizeTitle">EXPERIENCE</p>
                    <div className="trueContent">
                    <p>
                    </p>
                    </div>
                </div>
            </div>
        )
    }
}
