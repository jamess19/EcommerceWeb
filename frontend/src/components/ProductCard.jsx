import { Pencil, Trash2 } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../store/useProductStore'

function ProductCard({product}) {
    const {deleteProduct} = useProductStore();
  return (
    <div className='card bg-base-100 mr-5 mb-5 shadow-xl hover:shadow-2xl transition-shadow duration-300'>
    {/* CARD-IMAGE */}
    <figure className='relative pt-[56.25%]'>
        <img className='absolute top-0 left-0 w-full h-full object-cover' 
        src={product.image} alt={product.name}/>
    </figure>

    {/* CARD-INFO */}
    <div className='card-body'>
        <h2 className='card-title font-semibold text-lg'>{product.name}</h2>
        <p className='text-2xl font-bold text-primary'>${Number(product.price).toFixed(2)}</p>
    </div>

    {/* CARD-ACTION */}
    <div className='card-actions justify-end m-4'>
        <Link to={`/product/${product.id}`} className='btn btn-sm btn-info btn-outline'>
            <Pencil className='size-4'/>
        </Link>

        <button className='btn btn-sm btn-error btn-outline' onClick={() => deleteProduct(product.id)}>
            <Trash2 className="size-4" />
        </button>
    </div>
</div>
  )
}

export default ProductCard