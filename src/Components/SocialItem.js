/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function SocialItem (props) {
    return (
        <div className='form-check list-group-item'>
            <input class="form-check-input" type="checkbox" id={props.p.id} />
            <label class="form-check-label" htmlFor={props.p.id}>
                <i className={props.p.icon}></i>
                {props.p.media}
            </label>
        </div>
    );
};

export default SocialItem;