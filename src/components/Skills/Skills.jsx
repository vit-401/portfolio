import React from "react";
import {SkillsItem} from "./SkillsItem";
import './style.scss'


export function Skills() {
    const dataItems = [
        {
            urlImg: 'https://sergey-lang.github.io/Portfolio/static/media/icons8-react.3b599a68.svg',
            title: 'React',
            text: 'JavaScript library for building user interfaces or UI components.'
        },
        {
            urlImg: 'https://sergey-lang.github.io/Portfolio/static/media/icons8-redux.a248a991.svg',
            title: 'Redux',
            text: 'JavaScript library for managing application state.'
        },
        {
            urlImg: 'https://sergey-lang.github.io/Portfolio/static/media/icons8-typescript.265f3327.svg',
            title: 'TypeScript',
            text: 'JavaScript library for managing application state.'
        },
        {
            urlImg: 'https://sergey-lang.github.io/Portfolio/static/media/icons8-material-ui.d4a8ef06.svg',
            title: 'Material UI',
            text: 'One of the most popular react component libraries!'
        },
        {
            urlImg: 'https://sergey-lang.github.io/Portfolio/static/media/icons8-javascript.f6967c81.svg',
            title: 'Java Script',
            text: 'Programming language that conforms to the ECMAScript specification.'
        },
        {
            urlImg: 'https://sergey-lang.github.io/Portfolio/static/media/story.2c0ef392.svg',
            title: 'Story Book',
            text: 'Tool for UI development!'
        },
        {
            urlImg: 'https://sergey-lang.github.io/Portfolio/static/media/icons8-nodejs.0811c32d.svg',
            title: 'NodeJS',
            text: 'Back-end JavaScript runtime environment'
        },
        {
            urlImg: 'https://sergey-lang.github.io/Portfolio/static/media/graphql.e4356db9.svg',
            title: 'GraphQl',
            text: 'Query language for your API, and a server-side runtime for executing queries by using a type system you define for your data.'
        },
        {
            urlImg: 'https://sergey-lang.github.io/Portfolio/static/media/mongodb.a869cddd.svg',
            title: 'MongoDB',
            text: 'Document database, which means it stores data in JSON-like documents.'
        },
    ]
    return <section className="skills">
        <div className="comtainer">
            <div className="skillsTitle">Skills</div>
            <div className="skillsInner">
                {
                    dataItems.map(i => <SkillsItem urlImg={i.urlImg} title={i.title} text={i.text}/>)
                }
            </div>
        </div>
    </section>;
}