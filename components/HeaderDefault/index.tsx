'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaMapMarkerAlt, FaTicketAlt } from 'react-icons/fa';
import ImgLogo from '../../public/assests/images/header/logo.svg';
import ImgHero from '../../public/assests/images/hero/hero-bg.jpg';

export const HeaderDefault = () => {
  const [open, setOpen] = useState(false);
  const styling = {
    backgroundImage: `url('${ImgHero.src}')`
  };

  function handleOpenNav() {
    setOpen(!open);
  }

  return (
    <header className='header content sd flex-col' style={styling}>
      <nav className='header__nav'>
        <Link href={'/'} className='header__nav--logo'>
          <Image src={ImgLogo} alt='Logo' />
        </Link>

        <div onClick={handleOpenNav} className='header__nav--hamburger'>
          <div className={`line-1 ${open ? 'line-1-toggled' : ''}`}></div>
          <div className={`line-2 ${open ? 'line-2-toggled' : ''}`}></div>
        </div>

        <ul className={`header__nav--links ${open ? 'display-nav' : ''}`}>
          <Link href={'/'} className='header__nav--links__link'>
            Home
          </Link>
          <Link href={'/pricing'} className='header__nav--links__link'>
            Pricing
          </Link>
          <Link href={'/schedule'} className='header__nav--links__link'>
            Schedule
          </Link>
          <Link href={'/speakers'} className='header__nav--links__link'>
            Speakers
          </Link>
          <Link href={'/blog'} className='header__nav--links__link'>
            Blog
          </Link>
          <Link href={'/contact'} className='header__nav--links__link'>
            Contact
          </Link>
        </ul>

        <Link href={'/pricing'} className='header__nav--cta link'>
          Get tickets
          <FaTicketAlt className='svg' />
        </Link>
      </nav>
      <section className='header__hero'>
        <p className='header__hero--location'>
          <FaMapMarkerAlt />
          WaterFront Hotel, London
        </p>
        <h1 className='header__hero--title title'>
          The Largest Conference In <span>Europe</span>
        </h1>
        <p className='header__hero--para text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          nulla facilis atque ab. Laborum maiores illo delectus sapiente
          molestias ut soluta nostrum dignissimos, enim incidunt eius harum
          rerum repudiandae vero?
        </p>
        <Link href={'/pricing'} className='header__hero--tickets-link link'>
          Buy ticket Now
        </Link>
      </section>
    </header>
  );
};
