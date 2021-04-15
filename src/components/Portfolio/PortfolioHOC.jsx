import React from "react";
import {Portfolio} from "./Portfolio";
import Isotope from 'isotope-layout'

export const PortfolioHOC = React.memo(() => {

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
    return <Portfolio
        handleFilterAll={handleFilterKeyChange('*')}
        handleFilterVege={handleFilterKeyChange('react')}
        handleFilterFruit={handleFilterKeyChange('node')}
    />;
})