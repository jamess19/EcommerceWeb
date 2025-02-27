import { create } from "zustand";
import axios from "axios";

const BASE_URL = "http://localhost:3000"
export const useProductStore = create((set, get) => ({
    // set up product state
    products: [],
    loading: false,
    error: null,

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
    }

}))