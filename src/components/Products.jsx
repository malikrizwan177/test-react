import { products } from ".."
import { useSelector, useDispatch } from 'react-redux'
import { addItems } from "../../redux/actions"
import { useEffect } from "react";

const Products = () => {

    const cart = useSelector((state) => state.cart.cartData);
    const dispatch = useDispatch()

    useEffect(() => {
      console.log(cart);
    }, [cart])
    

  return (
    <div className="px-5 sm:px-10 md:px-14 lg:px-20 py-10 md:py-20 text-center">
        <h1 className="font-bold text-[32px]">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-y-10 gap-x-10 w-full">
            {products.map((item, index) => (
                <div key={index} className="max-w-[285px]  bg-[#F4F5F7] text-start" onClick={() => dispatch(addItems(item))}>
                    <img src={item.image} alt="image" className="w-full object-contain"/>
                    <div className="flex flex-col gap-3 p-5">
                        <h3 className="font-semibold text-2xl">{item.name}</h3>
                        <p className="font-medium text-base text-gray-600">{item.type}</p>
                        <div className="flex justify-between">
                            <p className="text-xl font-semibold">Rp{` `}{item.discounted_price}</p>
                            <p className="text-base text-gray-400">Rp{` `}{item.price}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Products