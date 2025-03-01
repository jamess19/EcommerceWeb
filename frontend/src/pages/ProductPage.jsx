import React, { useEffect } from 'react'
import { useProductStore } from '../store/useProductStore'
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Trash2Icon, SaveIcon } from 'lucide-react';
import toast from 'react-hot-toast';

function ProductPage() {
  const {
    currentProduct, 
    formData, 
    setFormData, 
    loading, 
    error, 
    fetchProduct, 
    updateProduct, 
    deleteProduct} = useProductStore();
    const navigate = useNavigate();
    const {id} = useParams();
    const handleDelete = async () => {
      if(window.confirm("Are you sure you want to delete this product"))
      {
        await deleteProduct(id);
        navigate("/");
    }
    }
    useEffect(() => {
      fetchProduct(id);
    }, [fetchProduct, id])

    if(loading) {
      return (
        <div className='flex justify-center items-center min-h-screen'>
          <div className='loading loading-spinner loading-lg'></div>
        </div>
      )
    }
    if(error){
      return (
        <div className='container mx-auto'>
          <div className='alert alert-error'>{error}</div>
        </div>
      )
    }
  return (
    <div className='container mx-auto px-4 py-8 max-w-4xl'>
        <button onClick={() => {navigate("/")}} className='btn btn-ghost mb-3 rounded-md'> 
        <ArrowLeft className='size-5' />
        Back to Products
        </button>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* PRODUCT IMAGE */}
          <div className='rounded-lg overflow-hidden shadow-lgbg-base-100'>
            <img src={currentProduct?.image} 
            alt={currentProduct?.name}
            className='size-full object-cover'/>
          </div>
          {/* PRODUCT FORM */}
          <div className='card bg-base-100 shadow-lg'>
            <div className='card-body'>
              <h2 className='card-title text-2xl mb-6'> Edit Product </h2>

              <form onSubmit={(e) => {
                e.preventDefault();
                updateProduct(id);
              }}
              className='space-y-6'>
                {/* PRODUCT NAME */}
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text text-base font-medium'> Product Name </span>
                  </label>
                  <input type="text"
                  placeholder='Enter Product Name'
                  className='input input-bordered w-full'
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                {/* PRODUCT PRICE */}
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text text-base font-medium'> Product Price </span>
                  </label>
                  <input type="Number"
                  placeholder='00.0'
                  className='input input-bordered w-full'
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                  />
                </div>

                {/* PRODUCT IMAGE */}
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text text-base font-medium'> Product Image </span>
                  </label>
                  <input type="text"
                  placeholder='https://example.com/image.jpg'
                  className='input input-bordered w-full'
                  value={formData.image}
                  onChange={(e) => setFormData({...formData, image: e.target.value})}
                  />
                </div>
                {/* FORM ACTION */}
                <div className='flex justify-between items-center mt-8'>
                  <button type='button' onClick={handleDelete} className='btn btn-error rounded-md'>
                    <Trash2Icon className='size-5'/>
                    Delete Product
                  </button>

                  <button type='submit' className='btn btn-primary rounded-md'
                  disabled={loading || !formData.name || !formData.price || !formData.image}>
                    {loading ? (
                      <span className='loading loading-spinner loading-sm'></span>
                    ):(
                      <>
                      <SaveIcon className='size-5'/>
                      Save Changes
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
    </div>

    )
}

export default ProductPage