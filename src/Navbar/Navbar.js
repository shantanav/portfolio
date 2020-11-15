import React from 'react'
import './Navbar.css'

class Navbar extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <nav>
                <div class="links">
                    <div class="link-container"><a class = "link" href="#about">About Me</a></div>
                    <div class="link-container"><a class = "link" href="#education">Education</a></div>
                    <div class="link-container"><a class = "link" href="#skills">Skills</a></div>
                    <div class="link-container"><a class = "link" href="#experience">Experience</a></div>
                    <div class="link-container"><a class = "link" href="#projects">Projects</a></div>
                </div>
            </nav>
        )
    }
}

export default Navbar;
