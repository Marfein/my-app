import preloader from "../../../assets/images/Ellipsis-0.3s-217px.svg";
import React from "react";

let Preloader = (props) => {
       return <div style={{backgroundColor: 'white'}}>
            <img src={preloader} />
        </div>
}
export default Preloader;