import React from "react";
import './style.scss'
import v1 from 'uuid';
import {CardComponent} from "./CardComponent";
import {Fade} from "react-reveal";

export const Portfolio = React.memo((props) => {
    const [activeFilter, setActiveFilter] = React.useState('All')
    const obj = [
        {value: 'All', id: 1, handler: props.handleFilterAll},
        {value: 'React', id: 2, handler: props.handleFilterReact},
        {value: 'NodeJs', id: 3, handler: props.handleFilterNode},
        {value: 'Markup', id: 4, handler: props.handleFilterHTML},
    ]

    const s ={
        asset_type: [], //select
        address:"",
        policy_type: [], //select
        policy_number:  "",
        policy_period:"", // 2 date
        policy_cost:"",
        policy_coverage:"",
        incurance_agency:"",
        agency_phone:"",
        incurance_agent:"",
        agent_phone:"",
        agent_email:"",
        carrier_name:"",
        carrier_email:"",
        carrier_phone:"",
    }

    const works = [
        {
            title: 'KeyStroy',
            code: '',
            demo: 'https://www.key-stroy.com',
            filterName: 'html',
            description: 'GULP, PHP, HTML/SCSS, Website business card. Implemented Sent to telegrams via telegram bot.',
            photoURL: 'https://i.pinimg.com/originals/23/d0/2f/23d02f8aae2ee1c959b270e8043a1e47.jpg',
            id: v1()
        },
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
            title: 'Coffeyka',
            code: 'https://github.com/vit-401/coffeyka',
            demo: 'https://vit-401.github.io/coffeyka/',
            filterName: 'html',
            description: 'PHP, Gulp, JavaScript, HTML, SCSS. Еhe site of the store`s cafe with the implementation' +
                ' of an adaptive for a mobile device',
            photoURL: 'http://novostiliteratury.ru/wp-content/uploads/2019/02/%D0%9A%D0%BD%D0%B8%D0%B6%D0%BD%D0%BE%D0%B5-%D0%BA%D0%B0%D1%84%D0%B52.jpg',
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

    return <section id={"work"} className="work">
        <div className="container">
            <Fade bottom>

                <div className={'titleSection'}>My Works</div>
                <div className={'moduleLine'}/>
            </Fade>
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


                    {works.map((i, index) =>  <CardComponent
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
    </section>
        ;
})