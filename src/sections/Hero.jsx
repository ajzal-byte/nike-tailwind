import Button from '../components/Button';
import {arrowRight} from '../assets/icons';
import {shoes, statistics} from '../constants'
import { bigShoe1 } from '../assets/images';
const Hero = () => {
  return (
    <section id="home" className="flex flex-col justify-center w-full min-h-screen gap-10 p-2 border-2 border-red-500 xl:flex-row max-container">

      <div className="relative flex flex-col items-start justify-center w-full xl:w-2/5 max-xl:padding-x pt-28">

        <p className='text-xl font-montserrat text-coral-red'>Our Summer Collections</p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='relative z-10 pr-10 xl:bg-white xl:whitespace-nowrap'>
          The New Arrival
          </span>
          <br />
          <span className='inline-block mt-3 text-coral-red'>
          Nike
          </span> Shoes
          </h1>
          <p className='mt-6 text-lg leading-8 font-montserrat text-slate-gray mb-14 sm:max-w-sm'>
          Step into style and comfort with our latest shoe arrivals!
          </p>
          <Button label="Shop Now!" iconURL={arrowRight} />
          <div className='flex flex-wrap items-start justify-start w-full gap-16 mt-20'>
            {statistics.map(stat=>(
              <div>
                <p className='text-4xl font-bold font-palanquin'>{stat.value}</p>
                <p className='leading-7 font-montserrat text-slate-gray'>{stat.label}</p>
              </div>
            ))}
          </div>
      </div>

      <div className='relative justify-center flex-1 flex bg-center bg-cover items-center flex-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero'>
        <img src={bigShoe1} alt="shoe collection" width={610} height={500} className='relative z-10 object-contain' />
        
      </div>


    </section>

    
  )
}

export default Hero