'use client';
import Link from 'next/link';
import { cn } from '@/lib/utils/helpers';
import SearchNav from './search-nav';
import AsideCart from './aside-cart';
import UserLocation from './user-location';
import { Fragment, useEffect, useState } from 'react';
import UserDropdownMenu from './user-dropdown';
import CategoryDropdown from './category-dropdown';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Session } from 'next-auth';

interface Props {
  session: Session | null;
}

const Navbar = ({ session }: Props) => {
  const [isSticky, setIsSticky] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [isLocationSearchOn, setIsLocationSearchOn] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 300;
      if (pathname === '/') {
        if (window.scrollY > threshold) {
          setIsSticky(true);
        } else {
          if (!isLocationSearchOn) {
            setIsSticky(false);
          }
        }
      } else {
        setIsSticky(true);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLocationSearchOn, pathname]);

  function toggleMobileNav(nav: any) {
    setShowMobileNav((preState: boolean) => !preState);
    if (nav) nav;
  }

  return (
    <>
      <header
        className={cn(
          'fixed py-3 top-0 bg-white flex w-full items-start z-20 justify-center gap-5 px-5',
          isSticky || isLocationSearchOn
            ? 'border-b lg:shadow-md'
            : 'text-black'
        )}
      >
        <nav className='w-full relative flex items-center justify-between'>
          <div className='flex flex-1 items-center gap-4 md:mr-4 justify-between lg:justify-start'>
            <Link className='cursor-pointer' href='/'>
              {/* <Logo /> */}
              <h2 className='text-2xl lg:text-2xl font-medium mr-1 lg:mr-5'>
                Sakyi
              </h2>
            </Link>

            {!showMobileNav && (
              <Fragment>
                {pathname !== '/' ? (
                  <Fragment>
                    <CategoryDropdown className='hidden mr-0 lg:flex' />
                    {/* <div className="bg-gray-200 self-center flex flex-0 w-[1px] h-8 flex-col grow shrink-0 basis-auto " /> */}
                    <UserLocation
                      isSticky={true}
                      setIsSticky={setIsLocationSearchOn}
                      className='hidden lg:flex'
                    />
                    {isSticky && <SearchNav />}
                  </Fragment>
                ) : (
                  <UserLocation
                    isSticky={true}
                    setIsSticky={setIsLocationSearchOn}
                    className='hidden lg:flex'
                  />
                )}
                <div className='block lg:hidden'>
                  <AsideCart isSticky={true} />
                </div>
              </Fragment>
            )}

            {session ? (
              <div className='flex lg:hidden'>
                <UserDropdownMenu />
              </div>
            ) : (
              <button
                onClick={toggleMobileNav}
                className='block lg:hidden w-10 h-10 flex flex-0 justify-center rounded-md items-center text-center text-xs self-center bg-white hover:bg-zinc-100 text-black'
              >
                {showMobileNav ? (
                  <X className='w-8 h-8 p-1' strokeWidth={1} />
                ) : (
                  <Menu className='w-8 h-8 p-1' strokeWidth={1} />
                )}
              </button>
            )}
          </div>
          <div className='flex items-center justify-between gap-4 hidden lg:flex'>
            <div
              className={cn(
                'flex items-center justify-between gap-8 text-gray-800 text-sm font-regular',
                'text-black'
              )}
            >
              {pathname === '/' && (
                <Link className='cursor-pointer' href='/products'>
                  Store
                </Link>
              )}
              <Link className='cursor-pointer' href='/offers'>
                Offers
              </Link>
              <Link className='cursor-pointer' href='/help'>
                FAQ
              </Link>
              <Link className='cursor-pointer' href='/contact-us'>
                Contact
              </Link>
            </div>
            <AsideCart isSticky={true} />
            {session ? (
              <UserDropdownMenu />
            ) : (
              <Link
                href='/auth/register'
                className='cursor-pointer text-white text-center text-sm font-regular items-center bg-teal-600 p-3 rounded-md'
              >
                Sign in
              </Link>
            )}
          </div>
        </nav>
      </header>
      {showMobileNav && (
        <div className='fixed top-[66px] right-0 left-0 bottom-0 flex flex-col border-e bg-white px-5 py-4 pt-8 border-t lg:hidden z-50'>
          <div
            className={cn(
              'flex flex-col items-start justify-between gap-8 text-gray-800 text-sm font-semibold'
            )}
          >
            {pathname === '/' && (
              <Link
                onClick={toggleMobileNav}
                className='cursor-pointer'
                href='/products'
              >
                Store
              </Link>
            )}
            <Link
              className='cursor-pointer'
              onClick={toggleMobileNav}
              href='/offers'
            >
              Offers
            </Link>
            <Link
              className='cursor-pointer'
              onClick={toggleMobileNav}
              href='/help'
            >
              FAQ
            </Link>
            <Link
              className='cursor-pointer'
              onClick={toggleMobileNav}
              href='/contact-us'
            >
              Contact
            </Link>
          </div>
          {session ? null : (
            <Link
              onClick={toggleMobileNav}
              href='/auth/register'
              className='cursor-pointer mt-10 text-white text-center text-sm font-semibold items-center bg-teal-600 p-3 rounded-md'
            >
              Sign in
            </Link>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
