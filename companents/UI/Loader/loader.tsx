import React from 'react';
import classes from "./Loader.module.css";

const Loader = () => {
    return (
        <div className={classes.loader}>
            <div className={classes.ldsEllipsis}>
                <div className={classes.children1}></div>
                <div className={classes.children2}></div>
                <div className={classes.children3}></div>
                <div className={classes.children4}></div>
            </div>
        </div>

    );
};

export default Loader;