import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";
const BASE_URL = import.meta.env.NODE_ENV === "development" ? "http://localhost:3000" : ""
export const useProductStore = create((set, get) => ({
    // set up product state
    products: [],
    loading: false,
    error: null,
    currentProduct: null,
    formData: {
        name: "",
        price: "",
        image: "",
    },

    setFormData: (formData) => set({formData}),
    resetForm: () => set({
        formData: {name: "", price: "", image: "" }}),
    addProduct: async (e) => {
        e.preventDefault();
        set({loading: true});
        try {
            const {formData} = get();
            console.log("form data", formData);
            await axios.post(`${BASE_URL}/api/products`, formData);
            await get().fetchProducts();
            await get().resetForm();
            toast.success("Add product successfully");
            // close the modal
            document.getElementById("add_product_modal").close();
        } catch (error) {
            console.log("error in add product function", error);
        }
        finally {
            set({loading: false})
        }
    },
    fetchProducts: async () => {
        set({loading: true});
        try {
            const res = await axios.get(`${BASE_URL}/api/products`);
            set({
                products: res.data.data, 
                error: null
            })

        } catch (error) {
            if(error.status == 429) {
                set({error: "rate limit exceeded"});
            }
            else {
                set({error: "something went wrong!"})
            }
        } finally {
            set({loading: false})
        }
    },
    deleteProduct: async (id) => {
        set({loading: true})
        try {
            await axios.delete(`${BASE_URL}/api/products/${id}`);
            get().fetchProducts()
            toast.success("delete product successfully")
        } catch (error) {
            console.log("error in delete Product", error);
            toast.error("something went wrong")
        }
        finally {
            set({loading: false})
        }
        
    },

    fetchProduct: async(id) => {
        set({loading:true});
        try {
            const response = await axios.get(`${BASE_URL}/api/products/${id}`)
            set({
                currentProduct: response.data.data,
                formData: response.data.data,
                error: null,
            })
        } catch (error) {
            console.log("error in get pproduct", error)
            set({error: "something went wrong", currentProduct: null});
        } finally {
            set({loading: false})
        }
    },
    updateProduct: async (id) => {
        set({loading: true});
        try {
            const {formData} = get();
            const res = await axios.put(`${BASE_URL}/api/products/${id}`, formData);
            set({currentProduct: res.data.data})
            toast.success("update product successfully")
        } catch (error) {
            console.log("error in update function", error);
            toast.error("something went wrong")
        }
        finally {
            set({loading: false})
        }

    }
}))