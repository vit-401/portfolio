import React from "react";

export function SkillsItem(props) {
    return <div className="skillsItem">
        <div className="skillsItemWrap">
            <div className="skillsItemIcon"
                 style={{backgroundImage: `url(${props.urlImg})`}}/>
        </div>

        <div className="skillsItemTitle">{props.title}</div>
        <div className="skillsItemtext">{props.text}</div>
    </div>;
}