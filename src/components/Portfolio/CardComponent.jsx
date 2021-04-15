import React from "react";

export const CardComponent = React.memo((props) => {
    return <div className={`filter-item ${props.filterName}`}>
        <div className={"card"}>

            <div className={'cardImg'}>
                <div className={'cardContent'}>
                    <div className={'cardInner'}>
                        <div className={'cardDescriptioniTitle'}>
                            {props.name}
                        </div>
                        <div className={'cardDescription'}>
                            {props.description}
                        </div>
                        <div className={'cardDescriptionLinks'}>
                            gitHub: <a href="#">{props.code}</a>
                            demo: <a href="#">{props.demo}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
})





// _______________


