import { images } from "../assets"

const Categories = () => {
  return (
    <div className="px-5 sm:px-10 md:px-14 lg:px-20 py-10 md:py-20 text-center">
        <h1 className="font-bold text-[32px]">Browse the Range</h1>
        <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="flex flex-row flex-wrap md:flex-nowrap gap-10 justify-center mt-10">
            <div className="max-w-[380px]">
                <img src={images.cat_1} alt="cat1" className="w-full object-contain rounded-md"/>
                <p className="font-semibold text-lg md:text-2xl mt-10">Dining</p>
            </div>
            <div className="max-w-[380px]">
                <img src={images.cat_2} alt="cat2" className="w-full object-contain rounded-md"/>
                <p className="font-semibold text-lg md:text-2xl mt-10">Living</p>
            </div>
            <div className="max-w-[380px]">
                <img src={images.cat_3} alt="cat3" className="w-full object-contain rounded-md"/>
                <p className="font-semibold text-lg md:text-2xl mt-10">Bedroom</p>
            </div>
        </div>
    </div>
  )
}

export default Categories