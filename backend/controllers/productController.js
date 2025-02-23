import { sql } from "../config/db.js";
export const GetAllProducts = async (req, res) => {
    try {
        const products = await sql`
        select * from products
        order by created_at desc
        `;  
        console.log("fetch all products", products);
        return res.status(200).json({success: true, data: products});
    } catch (error) {
        console.log("error get all products", error);
    }
}
export const CreateNewProduct = async (req, res) => {
    try {
        const {name, image, price} = req.body;
        if(!name || !image || !price){
            return res.status(400).json({success: false, message: "Missing required fields"});
        }

        const newProduct = await sql`
        insert into products (name, image, price)
        values (${name}, ${image}, ${price})
        returning *
        `
        console.log("create new product successfully");
        return res.status(201).json({success: true, data: newProduct[0]});
    } catch (error) {
        console.log("error create new product", error);
        res.status(500).json({success: false, message: "Internal server error"});
    }
}
export const GetProduct = async (req, res) => {
    const {id} = req.params

    try {
        const product = await sql`
        select * from products where id = ${id}
        `
        if(product.length === 0){
            console.log('product not found')
            res.status(404).json({
                success: false,
                message: "product not found"
            })
        }
        res.status(200).json({success: true, data: product[0]})
    } catch (error) {
        console.log("error in get product function", error);
        res.status(500).json({success: false, message: "Internal server error"})
    }
}
export const UpdateProduct = async (req, res) => {
    const {id} = req.params;
    const {name, price, image} = req.body;

    try {
        const updatedProduct = await sql`
        update products 
        set name = ${name},
        price = ${price},
        image = ${image},
        updated_at = current_timestamp
        where id = ${id}
        returning *
        `

        if(updatedProduct.length === 0){
            res.status(404).json({
                success: false,
                message: "product was not found in database"
            })
        }

        console.log(`update product with id ${id} successfully`)
        res.status(200).json({
            success: true,
            data: updatedProduct[0]
        })
    } catch (error) {
        console.log("error in update products", error);
        res.status(500).json({
            success: false,
            message: "internal server error"
        })
    }
}
export const DeleteProduct = async (req, res) => {
    const {id} = req.params;

    try {
    const deletedProduct = await sql`
    delete from products where id = ${id}
    returning * `

    if(deletedProduct === 0) {
        return res.status(404).json({
            success: false,
            message: "product not found"
        })
    }

    res.status(200).json({
        success: true,
        data: deletedProduct[0]
    })
    } catch (error) {
        console.log("error delete product",error);
        res.status(500).json({
            success: false,
            message: "internal server error"
        })
    }

}