import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/solid'
import '../../Pages/App/App.css';
import { ShoppingCartContext } from '../../Context'
import { totalPrice } from '../../utils'
import OrderCard from '../../Components/OrderCard';

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
      }

    const handleCheckout = () => {
        const orderToAdd = {
          date: '01.02.23',
          products: context.cartProducts,
          totalProducts: context.cartProducts.length,
          totalPrice: totalPrice(context.cartProducts)
        }
    
        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.setCount(0);
        context.closeCheckoutSideMenu()
      }  

    return  (
        <aside 
        className={`${context.isCheckoutSideMenuOpen? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='negro flex justify-between item-center p-6 color-black'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XMarkIcon  
                    className= "h-6 w-6 text-black-500 cursor-pointer"
                    onClick={() => context.closeCheckoutSideMenu()}></XMarkIcon>
                </div>
            </div> 
            <div className='negro px-6 overflow-y-scroll hide-scrollbar flex-1'>
                {
                context.cartProducts.map(product => (
                    <OrderCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    imageUrl={product.images}
                    price={product.price}
                    handleDelete={handleDelete}
                    />
                ))
                }
            </div>
            <div className='negro px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                <span className='font-medium text-xl'>Total:</span>
                <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>
               <Link to='/my-orders/last'> 
               <button className='bg-cyan-950 py-3 text-white w-full rounded-lg' onClick={() => handleCheckout()}>Checkout</button>
               </Link>
                
            </div>
        </aside>
    )
}

export default CheckoutSideMenu