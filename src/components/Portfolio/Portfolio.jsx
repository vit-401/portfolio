import React from "react";
import './style.scss'
import v1 from 'uuid';
import {CardComponent} from "./CardComponent";

export const Portfolio = React.memo((props) => {
    const [activeFilter, setActiveFilter] = React.useState('All')
    const obj = [
        {value: 'All', id: 1, handler: props.handleFilterAll},
        {value: 'React', id: 2, handler: props.handleFilterVege},
        {value: 'NodeJs', id: 3, handler: props.handleFilterFruit},
    ]

    const works = [
        {
            title: 'TriMSocial',
            code: 'https://djinni.co/my/dashboard/',
            demo: 'https://djinni.co/my/dashboard/',
            filterName: 'react',
            description: 'React, Redux, JavaScript, RestAPI, HTML/CSS, functional and classes components, hooks, connect, HOC',
            id: v1()
        },
        {
            title: 'TriMSocial',
            code: 'https://djinni.co/my/dashboard/',
            demo: 'https://djinni.co/my/dashboard/',
            filterName: 'react',
            description: 'React, Redux, JavaScript, RestAPI, HTML/CSS, functional and classes components, hooks, connect, HOC',
            id: v1()
        },
        {
            title: 'TriMSocial',
            code: 'https://djinni.co/my/dashboard/',
            demo: 'https://djinni.co/my/dashboard/',
            filterName: 'node',
            description: 'React, Redux, JavaScript, RestAPI, HTML/CSS, functional and classes components, hooks, connect, HOC',
            id: v1()
        },
        {
            title: 'TriMSocial',
            code: 'https://github.com/vit-401/code',
            demo: 'https://github.com/vit-401/demo',
            filterName: 'node',
            description: 'React, Redux, JavaScript, RestAPI, HTML/CSS, functional and classes components, hooks, connect, HOC',
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
                    />)}

                </div>
            </div>

        </div>
    </section>;
})