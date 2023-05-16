import Image from 'next/image';

export default function Home() {
  const styles = {
    backgroundImage: `url("/Reefer_plugs_filling_1.png")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };
  return (
    <>
      <nav className='bg-black w-full text-gray-400  flex items-center justify-between  px-4 lg:px-10 xl:px-20'>
        <div className='flex items-center gap-5 text-lg'>
          <Image
            src='/Untitled-1.png'
            width={50}
            height={50}
            alt='logo_transparent.png'
          />
          <ul className='flex items-center gap-5 text-lg'>
            <li>Home</li>
            <li>Company</li>
            <li>Services</li>
          </ul>
        </div>
        <button>Reach now</button>
      </nav>
      <div className='bg-gray-600 bt-20 text-white' style={styles}>
        <div className='w-full h-full bg-black bg-opacity-70 py-10'>
          <div className='w-full h-full text-neutral-content flex flex-col justify-center text-left'>
            <div className='w-full flex flex-col px-4 gap-4 md:gap-10 md:px-16'>
              <p>
                <span className='bg-white px-4 py-2 text-black font-extrabold'>
                  CCTV
                </span>
                <span className='bg-rose-800 px-4 py-2 font-bold'>
                  SURVEILLANCE
                </span>
              </p>

              <p className='w-full text-gray-300 md:text-start font-bold  text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl'>
                Reefer Bliss Awaits: <br />
                Discover Unparalleled Quality
              </p>

              <p className='md:text-2xl md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-4xl'>
                Prepare to embark on a transformative journey into the realm of
                reefer bliss, where unparalleled quality intertwines with
                sensory delight, unveiling a world of exquisite flavors and
                unrivaled satisfaction.
              </p>

              <div className='flex flex-wrap gap-4'>
                <button className='btn btn-primary rounded-none bg-rose-800 border-rose-800 active:bg-transparent hover:bg-rose-900 hover:border-rose-800'>
                  Contact us now!
                </button>
                <button className='btn btn-outline rounded-none border-rose-800 text-gray-300 active:bg-rose-800 hover:bg-rose-900'>
                  More About Us!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
