import React from "react";
import { Spin } from "antd";

export function Loader(){
    return(
        <div>
            <Spin className="loader" size='large'/>
        </div>
    )
}