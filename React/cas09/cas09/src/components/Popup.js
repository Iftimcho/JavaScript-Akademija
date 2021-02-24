import React from 'react';

export function Popup(props) {
    return(
        <div className="popup" id="popup">
            <button className="closePopup" onClick={props.zatvoriSlika}>&times;</button>
            <div className="popup-container">
                <img src={props.selektiranaSlika} alt={""}/>
            </div>
        </div>
    )
}