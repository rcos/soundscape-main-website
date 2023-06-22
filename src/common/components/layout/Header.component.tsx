import React from 'react';
import { HiMenu, HiOutlineX } from "react-icons/hi";
import Link from "next/link";
import Image from 'next/image'
import { altImage } from '~/utils/type';

interface FooterProps {
  headerLinks: string[];
  headerHrefs: string[];
  showNavDropdown: boolean;
  ssLogoImg: altImage;
  handleDropdownClick: (value:boolean) => void;
  notifyPageMissing: () => void;
}

const MainHeader: React.FC <FooterProps> = ({headerLinks, headerHrefs, showNavDropdown,ssLogoImg,handleDropdownClick,notifyPageMissing}) => {
  return (
    <>
    <header className="flex h-header w-full fixed top-0 left-0 z-50 py-4 items-center justify-between bg-soundscape-blue-bg 
                           2xl:px-16 xl:px-16 lg:px-16 md:px-16 sm:px-8 xs:px-8"  style={{ boxShadow: '0 0px 15px #000' }}> 
          <div className="flex h-full w-auto">
            <Image className="h-full w-auto" src={ssLogoImg.src} height={0} width={0} alt={ssLogoImg.alt}/>
            <div className="flex-col w-auto px-4
                            2xl:flex xl:flex lg:flex md:flex sm:flex xs:hidden">
              <h1 className="w-full text-center text-soundscape-white text-2xl">Soundscape</h1>
              <h5 className="w-full text-center text-soundscape-white text-sm">for Everyone</h5>
            </div>
          </div>
          <div className="2xl:flex xl:flex lg:hidden m:hidden sm:hidden xs:hidden"> 
            { headerLinks.map((element, index) => {
              return (
                <Link className="flex h-10 w-auto text-soundscape-white text-center items-center text-base px-4 mx-3 cursor-pointer rounded-header-btn hover:bg-soundscape-white hover:text-soundscape-dark-blue " href={headerHrefs[index] as string} onClick={notifyPageMissing} key={index}>
                  {element}
                </Link>
              )
            })}
          </div>
          {!showNavDropdown && <HiMenu className="2xl:hidden xl:hidden lg:flex md:flex sm:flex xs:flex" style={{ 'cursor': 'pointer'}} color="white" size={"2.5rem"} onClick={() => { handleDropdownClick(true)}} /> }
          {!!showNavDropdown && <HiOutlineX className="2xl:hidden xl:hidden lg:flex md:flex sm:flex xs:flex" style={{ 'cursor': 'pointer'}} color="white" size={"2.5rem"}  onClick={() => { handleDropdownClick(false)}} /> }
      
        </header>
        { !!showNavDropdown && <div className="flex flex-col h-auto w-full fixed top-h-header left-0 z-50 py-4 items-center justify-between bg-soundscape-white
                           2xl:px-8 xl:px-8 lg:px-8 md:px-8 sm:px-4 xs:px-4 2xl:hidden xl:hidden lg:flex m:flex sm:flex xs:flex"  style={{ boxShadow: '0 15px 25px #222' }}> 
            { headerLinks.map((element, index) => {
              return (
                <Link className={`flex h-10 w-fill-available text-stone-200 text-left text-xl font-bold items-center py-12 px-8 mx-3 cursor-pointer hover:text-soundscape-orange 
                                  ${ index === 0 ? '' : 'border-t-2 border-t-stone-200' }`} href={headerHrefs[index] as string} onClick={notifyPageMissing} key={index}>
                  {element}
                </Link>
              )
            })}
        </div> }
     </>
  )
}

export default MainHeader;