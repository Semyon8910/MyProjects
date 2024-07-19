import dal_mysql from "../DAL/dal_mysql";

//SELECT EXAMPLES
const getAllCustomers = async()=>{
    //SQL statement
    const sql = "SELECT * FROM customers";
    //execute the sql command
    const allCustomers = await dal_mysql.execute(sql);
    //return the result
    return allCustomers;
}

const getCategoriesWithO = async()=>{
    const sql = "select * from categories where CategoryName like '%o%'";
    const categoriesWithO = await dal_mysql.execute(sql);
    return categoriesWithO;
}

//INSERT EXAMPLES


export default {
    getAllCustomers,
    getCategoriesWithO,
}