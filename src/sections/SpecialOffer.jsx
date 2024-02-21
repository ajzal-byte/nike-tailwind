import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="" width={773} height={687} className="object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          <span className='text-coral-red'> Special
          </span> Offer 
          </h2>
          <p className='mt-4 lg:max-w-lg info-text'>
          Let your shoes do the talking as you walk tall in our exclusive range that promises to elevate your look and elevate your confidence.
          </p>
          <p className="mt-6 lg:max-w-lg info-text">From casual cool to formal finesse, our shoes are designed to complement your individuality and add a touch of sophistication to every step you take.</p>
          <div className="mt-11 flex flex-wrap gap-4">
            <Button label="Shop Now" iconURL={arrowRight}/>
            <Button label="Learn More"
            backgroundColor="bg-white"
            borderColor=" border-slate-gray"
            textColor="text-slate-gray" />
          </div>
      </div>
    </section>
  )
}

export default SpecialOffer