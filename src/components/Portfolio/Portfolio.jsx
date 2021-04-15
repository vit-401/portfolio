import React from "react";
import './style.scss'
import v1 from 'uuid';
import {CardComponent} from "./CardComponent";

export const Portfolio = React.memo((props) => {
    const [activeFilter, setActiveFilter] = React.useState('All')
    const obj = [
        {value: 'All', id: 1, handler: props.handleFilterAll},
        {value: 'React', id: 2, handler: props.handleFilterReact},
        {value: 'NodeJs', id: 3, handler: props.handleFilterNode},
        {value: 'Markup', id: 4, handler: props.handleFilterHTML},
    ]

    const works = [
        {
            title: 'TriMSocial',
            code: 'https://github.com/vit-401/SocialNetwork',
            demo: 'https://vit-401.github.io/SocialNetwork',
            filterName: 'react',
            description: 'React, Redux, Redux-Form, Typescript, RestAPI, CSS-Modules/SCSS, functional and' +
                ' classes components, hooks.',
            photoURL: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_533229588_288361.jpg',
            id: v1()
        },
        {
            title: 'NodeApp',
            code: 'https://github.com/vit-401/NodeJSapp',
            demo: '',
            filterName: 'node',
            description: 'Node Back-end JavaScript runtime environment',
            photoURL: 'https://www.norma.uz/img/d5/e0/25e9fed55a221815aa4404edb3c9.jpg',
            id: v1()
        },
        {
            title: 'TodoList',
            code: 'https://github.com/vit-401/todolist-ts',
            demo: 'https://vit-401.github.io/todolist-ts',
            filterName: 'react',
            description: 'React, Redux, JavaScript, RestAPI, HTML/CSS, functional and classes components, hooks, connect, HOC',
            photoURL: 'https://s.mind.ua/img/forall/a/201947/8.jpg?1553245746',
            id: v1()
        },
        {
            title: 'Mazepinska',
            code: 'https://github.com/vit-401/mazepinska',
            demo: 'https://vit-401.github.io/mazepinska',
            filterName: 'html',
            description: 'PHP, Gulp, JavaScript, HTML, SCSS. Sending data from the form to the telegram',
            photoURL: 'https://rostec.ru/upload/iblock/836/8361948222bf21379605716cfa63cbb9.jpg',
            id: v1()
        },
    ]

    return <section className="work">
        <div className="container">
            <div className={'titleSection'}>My Works</div>
            <div className={'moduleLine'}/>
            <ul className={"workFilters"}>
                {
                    obj.map((f) => {
                        return <li key={v1()} className={activeFilter === f.value ? 'active' : ''} onClick={() => {
                            f.handler()
                            setActiveFilter(f.value)
                        }}>{f.value}</li>
                    })
                }
                {/*<li className={'active'} onClick={props.handleFilterAll}>ALL</li>*/}
                {/*<li className={''} onClick={props.handleFilterVege}>Show Veges</li>*/}
                {/*<li className={''} onClick={props.handleFilterFruit}>Show Fruits</li>*/}
            </ul>
            <div className={"filterWrap"}>
                <div className="filter-container">
                    {works.map((i, index) => <CardComponent
                        key={index}
                        name={i.title}
                        filterName={i.filterName}
                        description={i.description}
                        demo={i.demo}
                        code={i.code}
                        photoURL={i.photoURL ? i.photoURL : 'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg'}
                    />)}

                </div>
            </div>

        </div>
    </section>;
})