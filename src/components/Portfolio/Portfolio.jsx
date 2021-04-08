import React, {useEffect, useState} from "react";
import './style.module.scss'
import Isotope from 'isotope-layout'

export function Portfolio() {
    var iso = new Isotope('.grid', {
        itemSelector: '.element-item',
        layoutMode: 'fitRows',
        getSortData: {
            name: '.name',
            symbol: '.symbol',
            number: '.number parseInt',
            category: '[data-category]',
            weight: function (itemElem) {
                var weight = itemElem.querySelector('.weight').textContent;
                return parseFloat(weight.replace(/[\(\)]/g, ''));
            }
        }
    });

    let sortByGroup
    // debugger
    useEffect(() => {
        sortByGroup = document.getElementsByClassName('sort-by-button-group')[0]
    })
    useEffect(() => {
        sortByGroup.addEventListener('click', ev => {
            var sortValue = ev.target.getAttribute('data-sort-value');
            debugger
            iso.arrange({sortBy: sortValue});
        })
    },)

    console.dir(sortByGroup)
    // addEventListener('click', function (event) {
    //
    //     var sortValue = event.target.getAttribute('data-sort-value');
    //     iso.arrange({sortBy: sortValue});
    // });

    const filtersDefault = [
        {label: "all", isChecked: true},
        {label: "test", isChecked: false},
        {label: "test1", isChecked: false},
        {label: "chart", isChecked: false},
        {label: "tile", isChecked: false}
    ];
    const cardsLayout = [
        {
            id: "a",
            row: 0,
            col: 0,
            w: 1,
            h: 1,
            filter: ["test", "chart"]
        },
        {
            id: "b",
            row: 0,
            col: 1,
            w: 1,
            h: 1,
            filter: ["test1", "tile"]
        },
        {
            id: "c",
            row: 0,
            col: 3,
            w: 1,
            h: 1,
            filter: ["test", "chart"]
        },
        {
            id: "d",
            row: 1,
            col: 0,
            w: 1,
            h: 1,
            filter: ["test1", "tile"]
        },
        {
            id: "e",
            row: 1,
            col: 1,
            w: 1,
            h: 1,
            filter: ["test", "tile"]
        },
        {
            id: "f",
            row: 1,
            col: 2,
            w: 1,
            h: 1,
            filter: ["test1", "chart"]
        },
        {
            id: "h",
            row: 2,
            col: 0,
            w: 1,
            h: 1,
            filter: ["test1", "chart"]
        }
    ];


    const [filters, updateFilters] = useState(filtersDefault);

    // Filter change handler
    const onFilter = (event) => {
        const {
            target: {value, checked}
        } = event;
        updateFilters((state) =>
            state.map((f) => {
                if (f.isChecked === true) {
                    return {...f, isChecked: !checked}
                } else if (f.label === value) {
                    return {...f, isChecked: checked}
                } else {
                    return {...f, isChecked: false}
                }
            }))
    }


    return <section className="work">
        <div className="container">
            <div>My Works</div>
            {/*<div className={s.filterWrap}>*/}
            {/*    {filters.map((f) => (*/}
            {/*        <div className="filter" key={`${f.label}_key`}>*/}
            {/*            <label className={s.switch} htmlFor={f.label}>*/}
            {/*                /!*<input type="checkbox">*!/*/}
            {/*                <input*/}
            {/*                    className={s.input}*/}
            {/*                    id={f.label}*/}
            {/*                    type="checkbox"*/}
            {/*                    value={f.label}*/}
            {/*                    onChange={onFilter}*/}
            {/*                    checked={f.isChecked}*/}
            {/*                />*/}
            {/*                <span className={`${s.slider} ${s.round}`}>{f.label}</span>*/}
            {/*            </label>*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}

            {/*<IsoTopeGrid*/}
            {/*    gridLayout={cardsLayout} // gridlayout of cards*/}
            {/*    noOfCols={5} // number of columns show in one row*/}
            {/*    unitWidth={200} // card width of 1 unit*/}
            {/*    unitHeight={100} // card height of 1 unit*/}
            {/*    filters={filters} // list of selected filters*/}
            {/*>*/}
            {/*    {cardsLayout.map((card) => (*/}
            {/*            <div key={card.id} className={` ${s.cards}`}>*/}
            {/*    <div>s</div>*/}
            {/*                {card.id}*/}
            {/*            </div>*/}
            {/*    ))}*/}
            {/*</IsoTopeGrid>*/}

            <h1>Isotope - sorting, vanilla JS</h1>

            <div className="button-group sort-by-button-group">
                <button className="button is-checked" data-sort-value="original-order">original order</button>
                <button className="button" data-sort-value="name">name</button>
                <button className="button" data-sort-value="symbol">symbol</button>
                <button className="button" data-sort-value="number">number</button>
                <button className="button" data-sort-value="weight">weight</button>
                <button className="button" data-sort-value="category">category</button>
            </div>

            <div className="grid">
                <div className="element-item transition metal " data-category="transition">
                    <h3 className="name">Mercury</h3>
                    <p className="symbol">Hg</p>
                    <p className="number">80</p>
                    <p className="weight">200.59</p>
                </div>
                <div className="element-item metalloid " data-category="metalloid">
                    <h3 className="name">Tellurium</h3>
                    <p className="symbol">Te</p>
                    <p className="number">52</p>
                    <p className="weight">127.6</p>
                </div>
                <div className="element-item post-transition metal " data-category="post-transition">
                    <h3 className="name">Bismuth</h3>
                    <p className="symbol">Bi</p>
                    <p className="number">83</p>
                    <p className="weight">208.980</p>
                </div>
                <div className="element-item post-transition metal " data-category="post-transition">
                    <h3 className="name">Lead</h3>
                    <p className="symbol">Pb</p>
                    <p className="number">82</p>
                    <p className="weight">207.2</p>
                </div>
                <div className="element-item transition metal " data-category="transition">
                    <h3 className="name">Gold</h3>
                    <p className="symbol">Au</p>
                    <p className="number">79</p>
                    <p className="weight">196.967</p>
                </div>
                <div className="element-item alkali metal " data-category="alkali">
                    <h3 className="name">Potassium</h3>
                    <p className="symbol">K</p>
                    <p className="number">19</p>
                    <p className="weight">39.0983</p>
                </div>
                <div className="element-item alkali metal " data-category="alkali">
                    <h3 className="name">Sodium</h3>
                    <p className="symbol">Na</p>
                    <p className="number">11</p>
                    <p className="weight">22.99</p>
                </div>
                <div className="element-item transition metal " data-category="transition">
                    <h3 className="name">Cadmium</h3>
                    <p className="symbol">Cd</p>
                    <p className="number">48</p>
                    <p className="weight">112.411</p>
                </div>
                <div className="element-item alkaline-earth metal " data-category="alkaline-earth">
                    <h3 className="name">Calcium</h3>
                    <p className="symbol">Ca</p>
                    <p className="number">20</p>
                    <p className="weight">40.078</p>
                </div>
                <div className="element-item transition metal " data-category="transition">
                    <h3 className="name">Rhenium</h3>
                    <p className="symbol">Re</p>
                    <p className="number">75</p>
                    <p className="weight">186.207</p>
                </div>
                <div className="element-item post-transition metal " data-category="post-transition">
                    <h3 className="name">Thallium</h3>
                    <p className="symbol">Tl</p>
                    <p className="number">81</p>
                    <p className="weight">204.383</p>
                </div>
                <div className="element-item metalloid " data-category="metalloid">
                    <h3 className="name">Antimony</h3>
                    <p className="symbol">Sb</p>
                    <p className="number">51</p>
                    <p className="weight">121.76</p>
                </div>
                <div className="element-item transition metal " data-category="transition">
                    <h3 className="name">Cobalt</h3>
                    <p className="symbol">Co</p>
                    <p className="number">27</p>
                    <p className="weight">58.933</p>
                </div>
                <div className="element-item lanthanoid metal inner-transition " data-category="lanthanoid">
                    <h3 className="name">Ytterbium</h3>
                    <p className="symbol">Yb</p>
                    <p className="number">70</p>
                    <p className="weight">173.054</p>
                </div>
                <div className="element-item noble-gas nonmetal " data-category="noble-gas">
                    <h3 className="name">Argon</h3>
                    <p className="symbol">Ar</p>
                    <p className="number">18</p>
                    <p className="weight">39.948</p>
                </div>
                <div className="element-item diatomic nonmetal " data-category="diatomic">
                    <h3 className="name">Nitrogen</h3>
                    <p className="symbol">N</p>
                    <p className="number">7</p>
                    <p className="weight">14.007</p>
                </div>
                <div className="element-item actinoid metal inner-transition " data-category="actinoid">
                    <h3 className="name">Uranium</h3>
                    <p className="symbol">U</p>
                    <p className="number">92</p>
                    <p className="weight">238.029</p>
                </div>
                <div className="element-item actinoid metal inner-transition " data-category="actinoid">
                    <h3 className="name">Plutonium</h3>
                    <p className="symbol">Pu</p>
                    <p className="number">94</p>
                    <p className="weight">(244)</p>
                </div>
            </div>

        </div>
    </section>;
}



















