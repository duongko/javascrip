const Router = require("express").Router();

const {
    createProduct,
    readAllProduct,
    updateProduct,
    deleteProduct
} = require("../controller/productcontrol");
Router.get("/create-product", async (req, res) => {
    let products =
    {
        title: "ao dai",
        img: "/img/anh4.jpg",
        price: 1200,
        size: ['xl', 's'],
    },



    await createProduct(products);
    res.render("managePage");
});
// Router.get("/read-product", async (req, res) => {
//     let data = await readAllProduct();
//     let htmlContent = "";
//     data.forEach(element => {
//         htmlContent = htmlContent +

//     })
// })
            module.exports= Router