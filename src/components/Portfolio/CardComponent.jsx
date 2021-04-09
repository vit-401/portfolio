import React from "react";

export const CardComponent = React.memo((props) => {
    return <div className={`filter-item ${props.filterName}`}>
        <div className={"card"}>

            <div className={'cardImg'}>
                <div className={'cardContent'}>
                    <div className={'cardInner'}>
                        <div className={'cardDescriptioniTitle'}>
                            TriMSocial
                        </div>
                        <div className={'cardDescription'}>
                            React, Redux, JavaScript, RestAPI, HTML/CSS, functional and classes components, hooks, connect, HOC
                        </div>
                        <div className={'cardDescriptionLinks'}>
                            gitHub: <a href="#">https://djinni.co/my/dashboard/</a>
                            demo: <a href="#">https://djinni.co/my/dashboard/</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
})