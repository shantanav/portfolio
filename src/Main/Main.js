import React from 'react'
import './Main.css'
import About from './About/About'
import Education from './Education/Education'
import Skills from './Skills/Skills'
import Experience from './Experience/Experience'
import Projects from './Projects/Projects'

class Main extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <main>
                <About />
                <Education />
                <Skills />
                <Experience />
                <Projects />
            </main>
        )
    }
}

export default Main
