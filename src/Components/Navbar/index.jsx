import { useContext } from 'react'
import {NavLink} from 'react-router-dom'
import { ShoppingBagIcon} from '@heroicons/react/24/solid'
import DarkModeToggle from '../../Components/DarkModeToggle';
import '../../Pages/App/App.css';
import { ShoppingCartContext } from '../../Context'

const Navbar = () =>{
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'

    return (
        <div className='flex flex-col items-center'>
        <nav className='navbar flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-normal'>
            <ul className='navbar-menu flex desktop:items-center gap-3'>
                <li className='font-bold text-sm'>
                    <NavLink
                    to='/'>
                        Shopi
                    </NavLink>    
                </li>
                <li>
                <NavLink
                    to='/'
                    onClick={() => context.setSearchByCategory()}
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }>
                    All
                </NavLink>
                </li>
                <li>
                <NavLink
                    to='/clothes'
                    onClick={() => context.setSearchByCategory('clothes')}
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }>
                    Clothes
                </NavLink>
                </li>
                <li>
                <NavLink
                    to='/electronics'
                    onClick={() => context.setSearchByCategory('electronics')}
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }>
                    Electronics
                </NavLink>
                </li>
                <li>
                <NavLink
                    to='/furnitures'
                    onClick={() => context.setSearchByCategory('furnitures')}
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }>
                    Furnitures
                </NavLink>
                </li>
                <li>
                <NavLink
                    to='/toys'
                    onClick={() => context.setSearchByCategory('toys')}
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }>
                    Toys
                </NavLink>
                </li>
                <li>
                <NavLink
                    to='/others'
                    onClick={() => context.setSearchByCategory('others')}
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }>
                    Others
                </NavLink>
                </li>
            </ul>
            <ul className='navbar-menu-2 flex desktop:items-center gap-3'>
                <li className='gmail text-black/60'>
                    melr@gmail.com   
                </li>
                <li>
                    <NavLink
                    to='/my-orders'
                    className={({isActive})=>
                        isActive ? activeStyle : undefined
                    }>
                        My Orders
                    </NavLink>    
                </li>
                <li>
                    <NavLink
                    to='/my-account'
                    className={({isActive})=>
                        isActive ? activeStyle : undefined
                    }>
                        My Account
                    </NavLink>    
                </li>
                <li>
                    <NavLink
                    to='/signin'
                    className={({isActive})=>
                        isActive ? activeStyle : undefined
                    }>
                        Sign In
                    </NavLink>    
                </li>
                <li className='flex'>
                    <ShoppingBagIcon className="h-6 w-6 text-black-500"></ShoppingBagIcon>
                    <div>{context.cartProducts.length}</div>
                </li>
                <li>
                <DarkModeToggle />
                </li>
            </ul>
        </nav>            
        </div>
    )
}

export default Navbar