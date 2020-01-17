import React, { Component } from 'react'
import myImg from './me.jpg'
import { findRenderedComponentWithType } from 'react-dom/test-utils'
export class Left extends Component {

Base = () => {
    return{
        position: 'relative',
        width : '100%',
        background: 'blue',
        height:  '100%',
    }
}

helloText = () =>{
    return{
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top : '50%',
        alignSelf : 'center',
        color: 'white',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '10px 10px 10px 28px',
    
    }
}
    render() {
        return (
            <div style={this.Base()}>
                <img src={myImg} alt="myIg"></img>
                <div style={this.helloText()}>
                    <h2>Hi, I am Zahimi!</h2>
                    <p>Information Technology Student @  Universiti Teknologi Petronas</p>
                    <p>Looking for Intership oppurtunities (May 2020 - December 2020)</p>
                                    
                </div>
            </div>
        )
    }
}

export default Left
