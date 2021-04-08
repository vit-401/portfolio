import React from "react";
import './style.scss'
import Isotope from 'isotope-layout'

export function Portfolio() {

    const isotope = React.useRef()
    // store the filter keyword in a state
    const [filterKey, setFilterKey] = React.useState('*')

    // initialize an Isotope object with configs
    React.useEffect(() => {
        isotope.current = new Isotope('.filter-container', {
            itemSelector: '.filter-item',
            layoutMode: 'fitRows',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-sizer'
            }
        })
        // cleanup
        return () => isotope.current.destroy()
    }, [])

    // handling filter key change
    React.useEffect(() => {
        filterKey === '*'
            ? isotope.current.arrange({filter: `*`})
            : isotope.current.arrange({filter: `.${filterKey}`})
    }, [filterKey])

    const handleFilterKeyChange = key => () => setFilterKey(key)


    return <section className="work">
        <div className="container">
            <div>My Works</div>
            <ul className={'btn'}>
                <li onClick={handleFilterKeyChange('*')}>ALL</li>
                <li onClick={handleFilterKeyChange('vege')}>Show Veges</li>
                <li onClick={handleFilterKeyChange('fruit')}>Show Fruits</li>
            </ul>
            <hr/>
            <div className={'wrap'}>
                <div className="filter-container">
                    <div className="filter-item vege">
                        <div className={'card'}>Cucumber</div>
                    </div>
                    <div className="filter-item fruit">
                        <div className={'card'}>Apple</div>
                    </div>
                    <div className="filter-item fruit">
                        <div className={'card'}>BANA</div>
                    </div>
                    <div className="filter-item fruit">
                        <div className={'card'}>Orange</div>
                    </div>
                    <div className="filter-item fruit vege">
                        <div className={'card'}>Tomato</div>
                    </div>
                </div>
            </div>

        </div>
    </section>;
}