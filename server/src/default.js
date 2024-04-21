import { products } from "./constants/data.js";
import Product from "./models/productSchema.js";

export const defaultData= async()=>{

    try{
        
        const data=  await Product.insertMany(products);
        console.log("Data inserted successfully");


    }catch(error){
        console.log("Data inserting failed",error.message);

    }


}

export default defaultData;