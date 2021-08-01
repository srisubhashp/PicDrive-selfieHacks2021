import { checkPropTypes } from 'prop-types';
import React,{Fragment} from 'react';
import classes from './Header.module.css';
const Header = () => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>PicDrive</h1>
            </header>
            <div>
                
            </div>
        </Fragment>
    )
}
export default Header;