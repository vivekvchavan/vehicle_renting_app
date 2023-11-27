import React from 'react';

export function DefaultLayout(props) {
    return (
        <div>
            <div className="header bs1">
                <div className="d-flex justify-content-between">
                    <h2>EY Vehicle Rental</h2>
               
                </div>
            </div>
            <div className="content">
                {props.children}
            </div>
        </div>
    );
}
