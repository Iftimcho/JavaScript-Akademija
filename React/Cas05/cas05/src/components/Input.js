import React from 'react';
import PropTypes from 'prop-types';

export function Input(props) {
    // console.log(props);
    return(
        <div id="input">
            {props.showComment && props.showComment===true ? <textarea rows={8} col={20}>
                </textarea>
                : <input 
                type={props.type}
                placeholder={props.placeholder}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            />}
            {
                props.name === "password" ? <button type="button" className="eye-button" onClick={props.toggle}>
                    <i className={"fa " + (props.type === "password" ? "fa-eye-slash" : "fa-eye")}></i>
                </button> : null
            }
            {
                props.name === "password" ? <button type="button" onClick={props.toggleComment}>
                    {props.showComment === true ? "Show Password" : "Show Comment" }
                </button>
                : null
            }
        </div>
    )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    toggle: PropTypes.func, // ne e required oti e samo za fieldot password,
    showComment: PropTypes.bool,
    toggleComment: PropTypes.func

}