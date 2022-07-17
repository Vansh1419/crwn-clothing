import './navigation.component.style.scss'
import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'

const NavigationBar = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className='nav__link__container' to='/'>
                    <CrwnLogo className='logo__container'/>                    
                </Link>
                <div className="nav__links__container">
                    <Link className='nav__link' to='/shop'>
                        SHOP
                    </Link>
                    <Link className='nav__link' to='/sign-in'>
                        SIGN-IN
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}
export default NavigationBar