import React from "react";

export const CardComponent = React.memo((props) => {
    const str1= 'https://vit-401.github.io//'
    const str2= 'https://github.com/vit-401'
    return <div className={`filter-item ${props.filterName}`}>
        <div className={"card"}>

            <div className={'cardImg'} style={{backgroundImage: `url(${props.photoURL})`}}>
                <div className={'cardContent'}>
                    <div className={'cardInner'}>
                        <div className={'cardDescriptioniTitle'}>
                            {props.name}
                        </div>
                        <div className={'cardDescription'}>
                            {props.description}
                        </div>
                        <div className={'cardDescriptionLinks'}>
                            {
                                props.code ? <span>gitHub: <a href={props.code}>https://{props.code.slice(str1.length)}</a></span> : null
                            }
                            {
                                props.demo ? <span>demo: <a href={props.demo}>https://{props.demo.slice(str2.length)}</a></span> : null
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
})


// _______________


