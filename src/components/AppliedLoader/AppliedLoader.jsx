import { getShoppingCart } from "../../utilities/fakedb";

const AppliedLoader = async () => {
    
   const loadedProducts = await fetch('/featuredjobs.json');
   const products = await loadedProducts.json();
   

    const storedCart = getShoppingCart();
    const savedCart = [];

    for(const id in storedCart)
    {
        const addedProduct = products.find(pd=> JSON.stringify(pd.id) === id);
        
        if(addedProduct)
        {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
            // console.log(savedCart)
        }
    }
   return savedCart;
};

export default AppliedLoader;