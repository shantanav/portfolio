import React from 'react'
import './Projects.css'

class Projects extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <section id="projects">
                <ul>
                    <li className="project" id="project1">
                        <article>
                            <h3>Project 1</h3>
                            <p>Project 1 Description</p>
                        </article>
                        <aside><p>Maybe an image</p></aside>
                    </li>
                    <li className="project" id="project2">
                        <article>
                            <h3>Project 2</h3>
                            <p>Project 2 Description</p>
                        </article>
                        <aside><p>Maybe an image</p></aside>
                    </li>
                    <li className="project" id="project3">
                        <article>
                            <h3>Project 3</h3>
                            <p>Project 3 Description</p>
                        </article>
                        <aside>Maybe an image</aside>
                    </li>
                    <li className="project" id="project4">
                        <article>
                            <h3>Project 4</h3>
                            <p>Project 4 Description</p>
                        </article>
                        <aside><p>Maybe an image</p></aside>
                    </li>
                    <li className="project" id="project5">
                        <article>
                            <h3>Project 5</h3>
                            <p>Project 5 Description</p>
                        </article>
                        <aside><p>Maybe an image</p></aside>
                    </li>
                </ul>
            </section>
        )
    }
}

export default Projects;
