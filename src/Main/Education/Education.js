import React from 'react'
import './Education.css'
import rit_logo from './images/RIT_seal.png'

class Education extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <section id="education">
                <div>
                    <h1 id="header">Education</h1>
                    <img id="logo" src={rit_logo} alt="RIT Logo" />
                    <h1 id="degree">Bachelor of Science in Software Engineering</h1>
                </div>
            </section>
        )
    }
}

export default Education;
