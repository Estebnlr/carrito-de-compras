import {useContext} from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import '../../Pages/App/App.css';
import ProductDetail from '../../Components/ProductDetail';
import { ShoppingCartContext } from '../../Context'

function Home() {
  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
        return context.filteredItems?.map(item => (
          <Card key={item.id} data={item} />
        ))
    } else {
      return <div>We don't have anything :(</div>;
    }
  };

    return (
      <Layout>
        <div className='oscuro flex flex-col fixed z-10 items-center justify-center bg-white w-full'>
          <h1 className='font-medium text-xl'>Exclusive Products</h1>
          <input
            type="text"
            placeholder='Search a product'
            className='negro rounded-lg border border-black w-80 p-4 m-12  focus:outline-none'
            onChange={(event) => context.setSearchByTitle(event.target.value)} />
        </div>
        
          <div className='grid  gap-4 grid-cols-4 w-full max-w-screen-lg mt-60  contenedor'>
            {renderView()}
          </div>
          <ProductDetail />
        </Layout>
    )
  }

  export default Home