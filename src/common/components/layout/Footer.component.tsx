import React from 'react';
import Link from "next/link";

interface FooterProps {
  headerLinks: string[];
  notifyPageMissing: () => void;
}

const Footer: React.FC <FooterProps> = ({headerLinks,notifyPageMissing}) => {
  return (
    <footer className="flex flex-row justify-between py-8 bg-dark-grey text-white
                          tv:px-16 desktop:px-16 laptop:px-16 s-laptop:px-16 tablet:px-8 mobile:px-8">
          <div className="flex flex-row">©{new Date().getFullYear()} Soundscape for Everyone</div>
          <div className="tv:flex desktop:flex laptop:hidden m:hidden tablet:hidden mobile:hidden"> 
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