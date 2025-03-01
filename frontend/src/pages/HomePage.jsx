import React, { useEffect } from 'react'
import { useProductStore } from '../store/useProductStore'
import { CirclePlus, RefreshCcw} from 'lucide-react';
import ProductCard from '../components/ProductCard';
import AddProductModal from '../components/AddProductModal';
function HomePage() {
    const {products, loading, error, fetchProducts, deleteProduct} = useProductStore();
    useEffect(()=> {
        fetchProducts()
    }, [fetchProducts])

    console.log("product",products)
  return (
    <main className='max-w-6xl mx-auto px-4 py-8'>
        <div className='flex justify-between items-center'>
            <button className='btn btn-primary rounded-lg' 
          onClick={() => document.getElementById("add_product_modal").showModal()}>
            <CirclePlus className='size-5'/>
            Add products
            </button>
            <button className='btn btn-primary' onClick={fetchProducts}>
            <RefreshCcw className='size-5'/>
            </button>
        </div>  
        <AddProductModal/>
        {error && <div className='alert alert-error'>{error}</div>}

        {loading ? (
            <div className='flex justify-center items-center h-64' >
                <div className='loading loading-spinner loading-lg'></div>
            </div>
        ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3'>
                {products.map((product) => (
                    <ProductCard key={product.id} product = {product} > </ProductCard>
                ))}
            </div>
        )}

    </main>
)
}

export default HomePage