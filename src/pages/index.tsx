import { type NextPage } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from 'next/image'
import { api } from "~/utils/api";

import Footer from "@/layout/Footer.component";
import MainHeader from "@/layout/Header.component";

import { ssLogoImg, adidasLogoImg, heroBgImg, iphone14Img, groupIntroImg, features1Img, features2Img, features3Img,
        rpiLogo, crnaLogo, okeeneaLogo, ncbiLogo, pixelspaceLogo, iaLabsLogo, nvibeLogo  } from "~/assets/images/media";

import ReactPlayer from 'react-player'

import React from 'react';


import toast, { Toaster } from 'react-hot-toast';

import Marquee from "react-fast-marquee";

const notifyPageMissing = () => toast('This page is coming soon!');
const notifyFuncMissing = () => toast('This functionaility is coming soon!');


/*interface MyLink {
  route: string
  link: string
} test*/

const Home: NextPage = () => {
  //const hello = api.example.hello.useQuery({ text: "from tRPC" });


  //const HeaderLinks: Array<MyLink> = [ { route: 'Privacy Policy', link: "https://ialabs.ie/privacy-policy/" }, { route: 'Home', link: "/" }, { route: 'Features', link: "/" } , { route: 'About', link: "/" } , { route: 'Support', link: "/" } , { route: 'People', link: "/" } , { route: 'News & Features', link: "/" } ];

  const HeaderLinks = [ 'Privacy Policy', /*'How to Contribute' /*'Home', 'Features', 'About', 'Support', 'People', 'News & Features'*/];
  const HeaderHrefs = [ 'https://ialabs.ie/privacy-policy/', '/how-to-contribute' ]
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);
  const [showNavDropdown, setShowNavDropdown] = useState(false);

  useEffect(() => {
   setInitialRenderComplete(true);
  }, []);

  function handleDonationClick(){
    window.open( "https://www.flipcause.com/secure/cause_pdetails/MTc5NDQ1",'_blank')
  }
  
  function handleDropdownClick(value: boolean) {
    setShowNavDropdown(value)
  }

  return (
    <>
      <Head>
        <title>Soundscape for Everyone</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/Soundscape_Logo.svg" />
      </Head>
      <main className="flex min-h-screen w-full flex-col bg-grey-bg mt-header-gap font-poppins overflow-x-hidden">
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
      <MainHeader headerLinks={HeaderLinks} headerHrefs={HeaderHrefs} showNavDropdown = {showNavDropdown} ssLogoImg = {ssLogoImg} handleDropdownClick={handleDropdownClick} notifyPageMissing = {notifyPageMissing}/>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
        <div className='flex flex-col h-main-hero w-full relative justify-between'>
          <Image className="absolute h-full object-cover z-10
                            tv:object-hero-big-screen desktop:object-hero-big-screen  laptop:object-hero-big-screen  s-laptop:object-left-top tablet:object-left-top  mobile:object-left-top" src={heroBgImg.src} height={0} width={0} alt={heroBgImg.alt}/>
          <div className="flex flex-col z-30 gap-6 mx-20
                          tv:mx-20  desktop:mx-20 laptop:mx-20   s-laptop:mx-16  tablet:mx-8  mobile:mx-6
                          tv:items-start  desktop:items-start laptop:items-start   s-laptop:items-center  tablet:items:center  mobile:items-center
                          tv:mt-36 desktop:mt-36  laptop:mt-24  s-laptop:mt-24  tablet:mt-24  mobile:mt-24
                          tv:w-[45vw]  desktop:w-[45vw]  laptop:w-[35vw]  s-laptop:w-fill-available  tablet:w-fill-available  mobile:w-fill-available ">
              <h2 className="w-full  text-white text-hero-title font-bold leading-none
                            tv:text-left desktop:text-left laptop:text-center s-laptop:text-center tablet:text-center mobile:text-center">
                Soundscape&nbsp; 
                <br className="tv:hidden desktop:hidden laptop:flex s-laptop:flex tablet:flex mobile:flex"/>
                <span  className="tv:text-hero-title desktop:text-hero-title laptop:text-hero-title-sub s-laptop:text-hero-title-sub tablet:text-hero-title-sub mobile:text-hero-title-sub">for Everyone</span> 
              
              </h2>
              <p className="font-work-sans font-normal w-full text-left text-white 
                            tv:text-3xl desktop:text-3xl laptop:text-2xl  s-laptop:text-2xl  tablet:text-2xl  mobile:text-2xl">
                Explore, discover, and have fun with your own 3D sound map of the word!
              </p>
              <button className="h-auto w-fit bg-orange rounded-primary-btn px-16 py-4 text-white text-lg font-semibold" onClick={handleDonationClick} >Donate</button>
          </div>
        </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
      <div className={`flex flex-col h-auto w-fill-available bg-navy-blue pb-8`} style={{ boxShadow: 'inset 0 0px 10px #000' }}>
          <h1 className="w-full text-white font-bold text-3xl text-center my-8 leading-8" >Meet the Soundscape Consortium</h1>
          <Marquee gradient={false} style={{ background: 'transparent !important' }}>
              <Image className="h-24 mx-12 w-auto" src={rpiLogo.src} height={0} width={0} alt={rpiLogo.alt} />
              <Image className="h-24 mx-12 w-auto" src={crnaLogo.src} height={0} width={0} alt={crnaLogo.alt}/>
              <Image className="h-24 mx-12 w-auto" src={okeeneaLogo.src} height={0} width={0} alt={okeeneaLogo.alt} />
              <Image className="h-24 mx-12 w-auto" src={ncbiLogo.src} height={0} width={0} alt={ncbiLogo.alt} />
              <Image className="h-24 mx-12 w-auto" src={pixelspaceLogo.src} height={0} width={0} alt={pixelspaceLogo.alt} />
              <Image className="h-24 mx-12 w-auto" src={iaLabsLogo.src} height={0} width={0} alt={iaLabsLogo.alt} />
              <Image className="h-24 mx-12 w-auto" src={nvibeLogo.src} height={0} width={0} alt={nvibeLogo.alt} />
  
         
          </Marquee>
        </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}  
        <div className="flex flex-col w-full h-auto bg-light-grey-bg py-28 
                        tv:px-20 desktop:px-20 laptop:px-20 s-laptop:px-20 tablet:px-10 mobile:px-10">
          <h2 className="section-title-blue w-fit bg-transparent py-2 font-bold text-navy-blue text-3xl ">What is Soundscape</h2>
          <div className="flex flex-row flex-wrap w-full h-auto
                          tv:px-20 desktop:px-20 laptop:px-20 s-laptop:px-20 tablet:px-10 mobile:px-0">
            <div className="flex h-auto py-12
                            tv:items-start desktop:items-start laptop:items-start s-laptop:items-center tablet:items-center mobile:items-center
                            tv:flex-row desktop:flex-row laptop:flex-row s-laptop:flex-col tablet:flex-col mobile:flex-col
                            tv:basis-1/2 desktop:basis-1/2 laptop:basis-full s-laptop:basis-full tablet-basis:full mobile:basis-full ">
              <Image className="h-phone w-fit" src={iphone14Img.src} height={0} width={0} alt={iphone14Img.alt}/>
              <div className="flex flex-col pl-8 pr-2 py-8 gap-6">
                <h4 className="w-fit bg-transparent py-2 font-semibold text-orange text-xl" >Spatial Audio Technology</h4>
                {/** mr-8 seemed to flow better */}
                <p className="mr-6 font-work-sans text-navy-blue font-medium">Soundscape uses 3D or spatial audio technology to enable people to build a richer awareness of their surroundings, thus becoming more confident and empowered to get around. </p>
              </div>
            </div>
            <div className="flex h-auto py-12
                            tv:items-start desktop:items-start laptop:items-start s-laptop:items-center tablet:items-center mobile:items-center
                            tv:flex-row desktop:flex-row laptop:flex-row s-laptop:flex-col tablet:flex-col mobile:flex-col
                            tv:basis-1/2 desktop:basis-1/2 laptop:basis-full s-laptop:basis-full tablet-basis:full mobile:basis-full ">
            <Image className="h-phone w-auto" src={iphone14Img.src} height={0} width={0} alt={iphone14Img.alt}/>
              <div className="flex flex-col pl-8 pr-2 py-8 gap-6">
                <h4 className="w-fit bg-transparent py-2 font-semibold text-orange text-xl" >Intuitive way to works</h4>
                {/** mr-8 seemed to flow better */}
                <p className="mr-6 font-work-sans text-navy-blue font-medium">Hence, Soundscape makes familiar places richer with the information it provides; and it makes unfamiliar places become familiar because of the intuitive way it works. </p>
              </div>
            </div>
          </div>
        </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
        <div className="flex flex-col w-full h-auto bg-white py-28
                        tv:px-20 desktop:px-20 laptop:px-20 s-laptop:px-20 tablet:px-10 mobile:px-10">
          <div className="flex flex-row flex-wrap w-full h-auto">
            <div className="flex justify-center desktop:basis-1/2 laptop:basis-full s-laptop:basis-full tablet-basis:full  laptop:pb-6 s-laptop:pb-6 tablet:pb-6 mobile:pb-6">
              <Image className="h-section-img w-auto rounded-section-image" src={groupIntroImg.src} height={0} width={0} alt={groupIntroImg.alt}/>
            </div>
            <div className="flex flex-col desktop:basis-1/2 laptop:basis-full s-laptop:basis-full tablet-basis:full desktop:pl-10 py-4 gap-6">
              <h2 className="section-title-orange w-fit bg-transparent py-2 font-bold text-orange text-3xl ">Intro to Consortium</h2>
              <p className="font-work-sans text-navy-blue font-medium  mr-16">Following Microsoft’s decision to close down Soundscape, we are delighted to announce that a group of organizations and people, including the co-founders of Soundscape, have come together to not only make it available to existing users, but eventually make it available for everyone! </p>
              <button className="h-auto w-fit bg-navy-blue rounded-primary-btn px-16 py-3 text-white text-laptop font-semibold" onClick={notifyPageMissing}>Learn More</button> 
            </div>
          </div>
        </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
        <div className="flex flex-col w-full h-auto bg-navy-blue py-28 
                         tv:px-20 desktop:px-20 laptop:px-20 s-laptop:px-20 tablet:px-10 mobile:px-10">
          <div className="flex flex-row-reverse flex-wrap  w-full h-auto"> {/* Just Have To Reverse here */}
          {/* change all screens like xl to more understandable version in tailwind.config*/}
          <div className="desktop:basis-7/12 laptop:basis-full laptop:w-full mb-8 s-laptop:basis-full s-laptop:w-full tablet:basis-full tablet:w-full desktop:pl-10 mobile:basis-full">
              <div className='player-wrapper laptop:flex laptop:justify-center'>
                { !initialRenderComplete ? <></> : <ReactPlayer url='https://youtu.be/QR_2eF0YjM0' height='100%' width='100%' className='react-player' /> }
              </div>
              {/*<Image className="h-section-img w-auto rounded-section-image" src={GROUP_INTRO as ( HTMLElement & SVGElement )} height={0} width={0} alt=''/>*/}
            </div>
            <div className="flex flex-col desktop:basis-5/12 laptop:basis-full s-laptop:basis-full tablet-basis:full   py-4 gap-6">
              <h2 className="section-title-white w-fit bg-transparent py-2 font-bold text-white text-3xl ">How Soundscape works</h2>
              <p className="font-work-sans text-white font-medium mr-16">
                Soundscape provides information about your surroundings with synthesized binaural audio, creating the effect of 3D sound. It runs in the background in conjunction with navigation or other applications to provide you with additional context about the environment.
                <br/><br/>
                Your phone, in hand or in pocket, is used to track movement using location and activity sensors, and let you move toward a self-set audio beacon.
              </p>
            </div>
          </div>
        </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
        <div className="flex flex-col w-full h-auto bg-white py-28 
                        tv:px-20 desktop:px-20 laptop:px-20 s-laptop:px-20 tablet:px-10 mobile:px-10">
          <div className="flex flex-row  flex-wrap justify-around w-full h-auto">
            <div className="flex flex-col basis-96 h-auto pb-4"> 
              {/* <Image className="" src={} alt="" /> */}
              <Image className="w-10/12" src={features1Img.src} alt={features1Img.alt}/>
              <h4 className="w-fit bg-transparent py-2 font-semibold text-orange text-xl" >Getting started with Soundscape</h4>
              <p className="mr-2 font-work-sans text-navy-blue font-medium pr-8">After you install Soundscape, connect a stereo headset or earbuds. Follow the introductions and when prompted, allow the app to access your location. Then, explore a familiar route to get used to how Soundscape delivers spatial information.</p>
            </div>
            <div className="flex flex-col basis-96 h-auto pb-4"> 
              {/* <Image className="" src={} alt="" /> */}
              <Image className="w-10/12" src={features2Img.src} alt={features2Img.alt} />
              <h4 className="w-fit bg-transparent py-2 font-semibold text-orange text-xl" >Device compatibility</h4>
              <p className="mr-2 font-work-sans text-navy-blue font-medium pr-8">Soundscape is an application designed to operate on iPhone SE, iPhone 6S, and newer models. It is engineered to be compatible with both wired and Bluetooth stereo headsets, providing users with a seamless audio experience.</p>
            </div>
            <div className="flex flex-col basis-96 h-auto pb-4"> 
              {/* <Image className="" src={} alt="" /> */}
              <Image className="w-10/12" src={features3Img.src} alt={features3Img.alt} />
              <h4 className="w-fit bg-transparent py-2 font-semibold text-orange text-xl" >Explore, discover, and have fun!</h4>
              <p className="mr-2 font-work-sans text-navy-blue font-medium pr-8">You can use Soundscape in a number of different ways, whether on a well-known route, out about with a friend or using it to discover new places.​</p>
            </div>
          </div>
        </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
        <div className="flex flex-col w-full h-auto bg-navy-blue py-28
                        tv:px-20 desktop:px-20 laptop:px-20 s-laptop:px-20 tablet:px-10 mobile:px-10">
          <div className="flex flex-row flex-wrap w-full h-auto gap-8">
            <div className="flex flex-col w-1/2 h-auto basis-eList-1">
              <h3 className="w-fit bg-transparent py-2 font-semibold text-white text-2xl ">Stay up to date on <span className="text-cyan-blue">Soundscape for everyone.</span></h3>
              <p className="font-work-sans text-white font-medium">Sign up to get the latest updates and news about Soundscape for Everyone.</p>
            </div>
            <div className="flex gap-8 basis-eList-2  
                            tv:basis-eList-2  desktop:basis-eList-2  laptop:basis-eList-2  s-laptop:basis-eList-2  tablet:basis-full mobile:basis-full
                            tv:flex-row desktop:flex-row laptop:flex-row s-laptop:flex-row tablet:flex-col mobile:flex-col" >
              <div className="flex flex-col gap-2">
                <input type="text" placeholder="Email Address" style={{'borderColor': 'lightgrey', 'color': 'lightgrey'}} 
                        className="flex px-4 py-3 w-96 text-laptop rounded-primary-input bg-pale-bg border-2 border-gray-200 outline-0 text-gray-300
                                   tv:w-96 desktop:w-96 laptop:w-96 s-laptop:w-96 tablet:w-full mobile:w-full" /> 
                <p className="font-work-sans text-white font-tabletall text-tablet" >We will only sporadically send you availability updates.</p>
              </div>
              <div>
                <button className="h-auto w-fit bg-orange rounded-primary-btn px-10 py-3 text-white text-laptop font-semibold" onClick={notifyFuncMissing} >Get Updates</button>
              </div>
            </div>
          </div>
        </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
        <div className="flex flex-col w-full h-auto bg-white py-28
                        tv:px-20 desktop:px-20 laptop:px-20 s-laptop:px-20 tablet:px-10 mobile:px-10">
          <h3 className="w-fit bg-transparent py-2 mb- font-semibold text-dark-grey text-2xl">Disclaimer</h3>
          <div className="flex w-full gap-16
                          tv:flex-row desktop:flex-row laptop:flex-row s-laptop:flex-row tablet:flex-col mobile:flex-col">  
            <div className="flex tv:w-1/2 desktop:w-1/2 laptop:w-1/2 s-laptop:w-1/2 tablet:w-full mobile:w-full ">
              <p>Microsoft Soundscape is not designed, intended or made available for diagnosis, treatment, or prevention of diseases and for use as a mobility aid or medical device; and is not designed or intended to be a substitute for professional medical advice, diagnosis, treatment, or judgement and should not be used to replace or as a substitute for professional </p>
            </div>
            <div className="flex tv:w-1/2 desktop:w-1/2 laptop:w-1/2 s-laptop:w-1/2 tablet:w-full mobile:w-full ">
              <p>medical advice, diagnosis, treatment, or judgement. The mapping data incorporated into the Microsoft Soundscape program is captured from a third-party program, and therefore, there may be limitations with the accuracy of the information presented and the user is responsible for their actions and their own safety and well-being.</p>
            </div>
          </div>

        </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
        <Footer headerLinks={HeaderLinks} notifyPageMissing={notifyPageMissing}/>
      </main>
    </>
  );
};

export default Home;
