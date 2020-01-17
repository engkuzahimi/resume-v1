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
                        <li>Language: HTML, CSS, JavaScript, Java</li>
                        <li>Framework & Libraries: React</li>
                        <li>Tools: git, npm</li>
                        <li>Design: Adobe Illustrator</li>
                        <li>Experienced in building and maintaining computers</li>
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
                        <div>
                            <p><b>Resume</b></p>
                            <a className="details" >https://github.com/engkuzahimi/resume-v1</a></div>
                            <p>A web version of my resume build using React.</p>
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
