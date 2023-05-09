import React from "react";
import cl from './Loader.module.css';
import { observer } from 'mobx-react-lite'
const Loader = observer(() => {

    return(
        <div className= {cl.loader_block}>
            <div className={cl.loader}></div>
        </div>
    );

});


export default Loader;