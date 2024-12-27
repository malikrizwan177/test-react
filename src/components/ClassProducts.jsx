import React, { Component } from 'react'
import { products } from '..'
import { addItems } from "../../redux/actions"
import { connect } from 'react-redux'

export class ClassProducts extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.cart !== this.props.cart) {
      console.log(this.props.cart)
    }
  }

  addToCart = (item) => {
    this.props.dispatch(addItems(item));
  }

  render() {
    const { cart } = this.props;
    return (
      <div className="px-5 sm:px-10 md:px-14 lg:px-20 py-10 md:py-20 text-center">
        <h1 className="font-bold text-[40px]">Our Products "Class Based"</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-y-10 gap-x-10 w-full mt-10">
            {products.map((item, index) => (
                <div key={index} className="max-w-[285px] bg-[#F4F5F7] text-start relative hover:bg-slate-500/50">
                    <img src={item.image} alt="image" className="w-full object-contain"/>
                    <div className="flex flex-col gap-3 p-5">
                        <h3 className="font-semibold text-2xl">{item.name}</h3>
                        <p className="font-medium text-base text-gray-600">{item.type}</p>
                        <div className="flex justify-between flex-wrap xl:flex-nowrap">
                            <p className="text-xl font-semibold">Rp{` `}{item.discounted_price === "" ? item.price : item.discounted_price}</p>
                            <p className="text-base text-gray-400">{item.discounted_price === "" ? "" : "Rp " + item.price}</p>
                        </div>
                    </div>
                        <button onClick={() => this.addToCart(item)} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white max-w-[200px] w-full py-2 px-5 text-[#B88E2F] font-semibold text-base">Add to Cart</button>
                </div>
            ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart.cartData
});


export default connect(mapStateToProps)(ClassProducts);