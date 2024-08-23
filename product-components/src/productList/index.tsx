import './style.scss';
import { Product } from '../types'

type Props = {
    data: Product[]
}

export default function ProductList({data}:Props) {
  return (
    <div>
        {data?.map(item=>(
        <article key={item.id}>
            <img src={item.thumbnail} alt="product image"/>
            <div>
            <span>{item.title}</span>
            <p>{item.description}</p>
            <footer>
                <strong>${item.price}</strong>
                <button>View details</button>
            </footer>
            </div>
        </article>
        ))}
    </div>
  )
}
