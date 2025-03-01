import React from 'react'
import { useProductStore } from '../store/useProductStore'
import { CirclePlus, Package } from 'lucide-react';

function AddProductModal() {
    const { loading, formData, addProduct, setFormData } = useProductStore();
    return (
        <dialog id="add_product_modal" className='modal'>
            <div className='modal-box'>
                {/* CLOSE BUTTON */}
                <form method='dialog'>
                    <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>X</button>
                </form>
                {/* MODAL HEADER */}
                <h2 className='text-lg font-bold'> Add New Product</h2>

                <form onSubmit={addProduct} className='space-y-6'>
                    <div className='grid gap-6'>
                        {/* PRODUCT NAME INPUT */}
                        <div className='form-control w-full'>
                            <label className='label'>
                                <span className='label-text text-base font-medium'>Product Name</span>
                            </label>
                            <div className='relative'>
                                <div className='absolute left-0 pl-3 inset-y-0 
                                    flex items-center pointer-events-none text-base-content/50'>
                                    <Package className='size-5' />
                                </div>
                                <input
                                    className='input input-bordered w-full pl-10 py-3 focus: input-primary transition-colors'
                                    type="text"
                                    placeholder='type your product name'
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                            </div>
                        </div>
                        {/* PRODUCT PRICE */}
                        <div className='form-control'>
                            <label className='label'>
                                <span className='label-text text-base font-medium'>Product Price</span>
                            </label>
                            <div className='relative'>
                                <div className='absolute left-0 pl-3 inset-y-0 
                                    flex items-center pointer-events-none text-base-content/50'>
                                    <Package className='size-5' />
                                </div>
                                <input
                                    className='input input-bordered w-full pl-10 py-3 focus: input-primary transition-colors'
                                    type="number"
                                    step="0.01"
                                    min="0"
                                    placeholder='0.00'
                                    value={formData.price}
                                    onChange={(e) => setFormData({ ...formData, price: e.target.value })} />
                            </div>
                        </div>
                        {/* PRODUCT IMAGE */}
                        <div className='form-control'>
                            <label className='label'>
                                <span className='label-text text-base font-medium'>Product Image</span>
                            </label>
                            <div className='relative'>
                                <div className='absolute left-0 pl-3 inset-y-0 
                                    flex items-center pointer-events-none text-base-content/50'>
                                    <Package className='size-5' />
                                </div>
                                <input
                                    className='input input-bordered w-full pl-10 py-3 focus: input-primary transition-colors'
                                    type="text"
                                    placeholder='https://example.com/image.jpg'
                                    value={formData.image}
                                    onChange={(e) => setFormData({ ...formData, image: e.target.value })} />
                            </div>
                        </div>
                    </div>
                    {/* MODAL ACTIONS */}
                    <div className='modal-action'>
                        <button className='btn btn-ghost'
                        onClick={() => document.getElementById("add_product_modal").close()}
                        > Cancel </button>
                        <button type='submit'
                        className='btn btn-primary min-w-[120px]'
                        disabled={!formData.name || !formData.price || !formData.image || loading}
                        >
                            {loading ? (
                                <span className='loading loading-spinner loading-sm'></span>
                            ): (
                                <>
                                <CirclePlus className='size-5 mr-2'></CirclePlus> 
                                Add Product
                                </>

                            )}
                        </button>
                    </div>
                </form>
            </div>
            {/* Backdrop */}
            <div className='modal-backdrop' onClick={() => document.getElementById('add_product_modal').close()}></div>
        </dialog>
    )
}

export default AddProductModal