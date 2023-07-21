import React from 'react';
import Link from "next/link";

interface FooterProps {
  headerLinks: string[];
  notifyPageMissing: () => void;
}

const Footer: React.FC <FooterProps> = ({headerLinks,notifyPageMissing}) => {
  return (
    <footer className="flex flex-row justify-between py-8 bg-soundscape-dark-grey text-white
                          2xl:px-16 xl:px-16 lg:px-16 md:px-16 sm:px-8 xs:px-8">
          <div className="flex flex-row">©{new Date().getFullYear()} Soundscape for Everyone</div>
          <div className="2xl:flex xl:flex lg:hidden m:hidden sm:hidden xs:hidden"> 
            { headerLinks.map((link, index) => {
              return (
                <Link className="flex h-10 w-auto text-white text-center items-center text-base px-4 mx-3 cursor-pointer rounded-header-btn hover:bg-dark-blue " href="/" key={index} onClick={notifyPageMissing}>
                  {link}
                </Link>
              )
            })}
          </div>
        </footer>

  )
}

export default Footer;