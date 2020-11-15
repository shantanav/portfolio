import React from 'react'
import './Navbar.css'

class Navbar extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <nav>
                <div className="links">
                    <a className="link" href="#about">About Me</a>
                    <a className="link" href="#education">Education</a>
                    <a className="link" href="#skills">Skills</a>
                    <a className="link" href="#experience">Experience</a>
                    <a className="link" href="#projects">Projects</a>
                </div>
            </nav>
        )
    }
}

export default Navbar
