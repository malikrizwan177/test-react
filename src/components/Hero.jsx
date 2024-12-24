import { images } from "../assets"

const Hero = () => {
  return (
    <div className="relative h-lvh">
        <img src={images.hero_img} alt="hero_img" loading="lazy" className="object-cover h-lvh w-full"/>
        <div className="absolute top-40 right-20 px-10 pt-12 pb-10 mx-5 max-w-[740px] bg-[#FFF3E3] flex flex-col gap-3">
            <h3 className="font-semibold text-sm md:text-base">New Arrival</h3>
            <h1 className="font-bold text-2xl md:text-[52px] text-[#b88e2f] leading-tight">Discover Our <br /> New Collection</h1>
            <h3 className="font-medium text-lg md:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</h3>
            <button className="px-10 py-5 mt-5 max-w-[222px] text-sm md:text-base text-white bg-[#b88e2f]">BUY NOW</button>
        </div>
    </div>
  )
}

export default Hero