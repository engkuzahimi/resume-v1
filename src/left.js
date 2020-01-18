import React, { Component } from 'react'
import myImg from './me.jpg'
import { findRenderedComponentWithType } from 'react-dom/test-utils'
export class Left extends Component {

    render() {
        return (
                <div className="left-content">
                    <h2>Hi, I am Zahimi!</h2>
                    <p>Information Technology Student @ <br /> Universiti Teknologi Petronas</p>
                    <p>Looking for Internship oppurtunities (May 2020 - December 2020)</p>
                    <div className="icon">
                    <a href="tel:[+60174730061]"><i class=" white fas fa-mobile-alt"></i></a>
                    <a href="mailto:[engku_16003930@utp.edu.my"><i class="far fa-envelope white"></i></a>
                    <a href="https://github.com/engkuzahimi" target="_blank"><i class="white fab fa-github"></i></a></div>
                    <a href="https://google.com" className="pdfButton">Get my resume in PDF!</a>
                    </div>
        )
    }
}

export default Left
