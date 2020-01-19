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
                       Currently, I'm looking for an internship oppurtunity on the <b>Information Technology / Software Engineering</b> sector for <b>May 2020 until December 2020</b> to
                       enhance my skills and contribute to the industry. I am proficient in several latest technologies and would like
                       to take a step further in the field.</p>
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
                            <p>This website, which is web version of my resume. It is build fully using React.js .</p></div>
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
                    <p className="emphasizeTitle">TRAINING & COURSES</p>
                    <div className="trueContent">
                    <div >
                    <p style={{flex: '1'}}><b>Data Analytics For Begineers</b></p>
                    <p className="details">November 2019</p>
                    </div>
                    <p><b><i>Department of Computer Sciences, UTP</i></b></p>
                    <ul>
                        <li> Learnt the basics of how to utilize Microsoft Power BI to make real-time data visualizations and how it will be useful for data analytics.</li>
                        <li>Exposed to spreadsheets with 10,000+ rows and made a dashboard to present data using real-time dashboard using Power BI.</li>
                    </ul>
                 </div>   
                </div>


                <div className="cont-container">
                    <p className="emphasizeTitle">EXPERIENCE</p>
                    <div className="trueContent">
                    <div >
                    <p style={{flex: '1'}}><b>Head of Department, Media and Promotion</b></p>
                    <p className="details">June 2019</p>
                    </div>
                    <p><b><i>UTP Super Sports 2019</i></b></p>
                    <ul>
                        <li>Established a team to take control over the media relations of the event.</li>
                        <li>Initiated the event’s theme that is used in all media assets of the event and assisted as photographer and designer.</li>
                        <li> Achieved high turnout due to unexceptional promotion which leads to a big success for the event during its first year of execution.</li>
                    </ul>
                    <div >
                    <p style={{flex: '1'}}><b>Volunteer</b></p>
                    <p className="details">March 2019</p>
                    </div>
                    <p><b><i>XPAX Kejohanan E-Sukan Kampus Semester 1 2019</i></b></p>
                    <ul>
                        <li>Joined Technical department which consists of experienced technicians from Media Prima Group.</li>
                        <li>Experienced handling professional-grade cameras and helped to live-stream the event.</li>
                    </ul>
                    <div >
                    <p style={{flex: '1'}}><b>Exco 1, Media Department</b></p>
                    <p className="details">May 2018 - January 2019</p>
                    </div>
                    <p><b><i>Global Network Club</i></b></p>
                    <ul>
                        <li>Managed the media and promotion affairs of the club.</li>
                        <li>Led and assisted the team to produce high quality promotional content of the club.</li>
                        <li>Designed several media-related assets such as official t-shirts, banners and poster which some of them are still being beneficial to club until now</li>
                    </ul>
                    </div>
                    
                </div>
                

            </div>
        )
    }
}
