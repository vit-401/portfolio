import React from "react";
import './style.scss'
import v1 from 'uuid';
import {CardComponent} from "./CardComponent";

export const Portfolio = React.memo((props) => {
    const [activeFilter, setActiveFilter] = React.useState('All')
    const obj = [
        {value: 'All', id: 1, handler: props.handleFilterAll},
        {value: 'Veges', id: 2, handler: props.handleFilterVege},
        {value: 'Fruits', id: 3, handler: props.handleFilterFruit},
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
                    <CardComponent name={'Potato'} filterName={'vege'}/>
                    <CardComponent name={'Apple'} filterName={'fruit'}/>
                    <CardComponent name={'BANA'} filterName={'fruit'}/>
                    <CardComponent name={'Orange'} filterName={'fruit'}/>
                    <CardComponent name={'Tomato'} filterName={'vege'}/>
                    <CardComponent name={'Ananas'} filterName={'fruit'}/>
                    <CardComponent name={'grape'} filterName={'fruit'}/>
                </div>
            </div>

        </div>
    </section>;
})