import React from 'react'
import './About.css'

let TITLE = `Hi. I'm Shantanav.`
let SUBTEXT = `I'm a software engineer. I engineer software.`
let DESCRIPTION = `I'm a passionate and driven person with an enjoyment for building things that 
work. I'm primarily a third year student at Rochester Institute of Technology, but in my free time 
I balance myself out as a radio DJ and Assistant Programming Director for WITR 89.7FM, and as a 
mentor and the Head of Technology for RIT's Society of Software Engineers.`

class About extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <section id="about">
                <article>
                    <h1>{TITLE}</h1>
                    <p id="subtext">{SUBTEXT}</p>
                    <p id="description">{DESCRIPTION}</p>
                </article>
            </section>
        )
    }
}

export default About;
