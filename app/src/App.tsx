import { useEffect, useState } from 'react';
import './App.scss';
import { Product } from './types';
import ProductList from 'react-components/list';
//import AppFooter from 'vue-components';

function App() {
  const [products,setProducts] = useState<Product[]>([]);
  const [search,setSearch] = useState(""); 

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value); 

  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(result => setProducts(result.products));
  },[])

  return (
    <main className='app'>
      <header>
        <h2>Products APP</h2>
        <p>Here i will render the products list and others things like "Products"</p>
      </header>
      <section>
        <header>
          <span>Total: {products?.length}</span>
          <input onChange={onSearch} placeholder='Search...'/>
        </header>
        <div>
          <ProductList data={products?.filter(item=>JSON.stringify(item)?.match(search))}/>
          {/** ProductList Components */}
        </div>
      </section>
      {/*<AppFooter/>*/}
    </main>
  )
}

export default App