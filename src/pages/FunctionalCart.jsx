import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { images } from "../assets";
import { removeItem } from "../../redux/actions";

const Cart = () => {

    const cart = useSelector((state) => state.cart.cartData);
    const dispatch = useDispatch()
  
    const removeFromCart = (id) => {
      dispatch(removeItem(id))
    };

    useEffect(() => {
      console.log("Cart Array:", cart);
      
      return () => {
      }
    }, [cart])
    
    

  return (
    <div className="flex flex-col gap-5 px-5 sm:px-10 md:px-14 lg:px-20 py-10 md:py-20">
        {cart.map((item, index) => (
            <div key={index} className="grid grid-cols-6 justify-between items-center w-full">
                <img src={item.image} alt="product_image" className="max-w-[108px] rounded-lg"/>
                <p className="text-gray-400">{item.name}</p>
                <p className="text-gray-400">{item.discounted_price}</p>
                <p>1</p>
                <p>{item.discounted_price}</p>
                <img src={images.delete_icon} alt="delete_icon" className="w-5 h-5" onClick={() => removeFromCart(item.id)}/>
            </div>
        ))}
    </div>
  )
}

export default Cart