import React from 'react';

export function DefaultLayout(props) {
    return (
        <div>
            <div className="header bs1">
                
                <div className="d-flex justify-content-between">
                <img height="100px" width="auto" className="" 
                src="https://images.cdn.centreforaviation.com/stories/companies/airlines/etihad/etihad_partners.jpg"/> 
                <img height="100px" width="auto" className="" 
                src="https://static.vecteezy.com/system/resources/thumbnails/008/461/390/small/car-rental-logo-on-white-background-luxury-car-illustration-modern-business-concept-car-rental-company-transportation-service-business-vector.jpg"/> 
                
                </div>
            </div>
            <div className="content">
                {props.children}
            </div>
        </div>
    );
}
