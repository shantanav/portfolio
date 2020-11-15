import React from 'react'
import './Education.css'

class Education extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <section id="education">
                <div>
                    <img id="logo" 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Rochester_Institute_of_Technology_seal.svg/1024px-Rochester_Institute_of_Technology_seal.svg.png" 
                        alt="RIT Logo"/>
                    <h1>Rochester Institute of Technology</h1>
                    <h4>Bachelor of Science in Software Engineering</h4>
                </div>
            </section>
        )
    }
}

export default Education;
