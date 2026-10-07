import { useEffect, useState } from 'react';

import './Navbar.scss';

import apexLogo from '../../assets/apex-logo.png';


function Navbar() {

  const [menuOpen, setMenuOpen] =
    useState(false);


  const closeMenu = () => {
    setMenuOpen(false);
  };


  const toggleMenu = () => {
    setMenuOpen((current) => !current);
  };


  useEffect(() => {

    if (!menuOpen) {
      document.body.style.overflow = '';
      return;
    }


    document.body.style.overflow = 'hidden';


    const handleEscape = (
      event: KeyboardEvent
    ) => {

      if (event.key === 'Escape') {
        setMenuOpen(false);
      }

    };


    window.addEventListener(
      'keydown',
      handleEscape
    );


    return () => {

      document.body.style.overflow = '';

      window.removeEventListener(
        'keydown',
        handleEscape
      );

    };

  }, [menuOpen]);


  useEffect(() => {

    const handleResize = () => {

      if (window.innerWidth > 1000) {
        setMenuOpen(false);
      }

    };


    window.addEventListener(
      'resize',
      handleResize
    );


    return () => {

      window.removeEventListener(
        'resize',
        handleResize
      );

    };

  }, []);


  return (

    <>

      <header
        className={[
          'navbar',
          menuOpen
            ? 'navbar--menu-open'
            : ''
        ].join(' ')}
      >

        {/* =========================
            LOGO
        ========================= */}

        <a
          href="#home"
          className="navbar__brand"
          aria-label="APEX Performance Club home"
          onClick={closeMenu}
        >

          <img
            src={apexLogo}
            alt="APEX Performance Club"
            className="navbar__logo"
          />

        </a>


        {/* =========================
            DESKTOP NAVIGATION
        ========================= */}

        <nav
          className="navbar__links"
          aria-label="Main navigation"
        >

          <a href="#programs">
            Programs
          </a>

          <a href="#coaches">
            Coaches
          </a>

          <a href="#club">
            The Club
          </a>

          <a href="#membership">
            Membership
          </a>

        </nav>


        {/* =========================
            ACTIONS
        ========================= */}

        <div className="navbar__actions">

          <a
            href="#membership"
            className="navbar__join"
          >

            <span>
              Join APEX
            </span>

            <i>
              ↗
            </i>

          </a>


          <button
            className={[
              'navbar__menu',
              menuOpen
                ? 'navbar__menu--active'
                : ''
            ].join(' ')}
            type="button"
            aria-label={
              menuOpen
                ? 'Close menu'
                : 'Open menu'
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={toggleMenu}
          >

            <span />
            <span />

          </button>

        </div>

      </header>


      {/* =========================
          MOBILE BACKDROP
      ========================= */}

      <button
        type="button"
        className={[
          'mobile-nav__backdrop',
          menuOpen
            ? 'mobile-nav__backdrop--active'
            : ''
        ].join(' ')}
        aria-label="Close navigation"
        tabIndex={menuOpen ? 0 : -1}
        onClick={closeMenu}
      />


      {/* =========================
          MOBILE MENU
      ========================= */}

      <div
        id="mobile-navigation"
        className={[
          'mobile-nav',
          menuOpen
            ? 'mobile-nav--active'
            : ''
        ].join(' ')}
        aria-hidden={!menuOpen}
      >

        <div className="mobile-nav__inner">


          {/* TOP LABEL */}

          <div className="mobile-nav__top">

            <span>
              NAVIGATION
            </span>

            <span>
              APEX / 01
            </span>

          </div>


          {/* LINKS */}

          <nav
            className="mobile-nav__links"
            aria-label="Mobile navigation"
          >

            <a
              href="#programs"
              onClick={closeMenu}
            >

              <span className="mobile-nav__number">
                01
              </span>

              <strong>
                PROGRAMS
              </strong>

              <i>
                ↗
              </i>

            </a>


            <a
              href="#coaches"
              onClick={closeMenu}
            >

              <span className="mobile-nav__number">
                02
              </span>

              <strong>
                COACHES
              </strong>

              <i>
                ↗
              </i>

            </a>


            <a
              href="#club"
              onClick={closeMenu}
            >

              <span className="mobile-nav__number">
                03
              </span>

              <strong>
                THE CLUB
              </strong>

              <i>
                ↗
              </i>

            </a>


            <a
              href="#membership"
              onClick={closeMenu}
            >

              <span className="mobile-nav__number">
                04
              </span>

              <strong>
                MEMBERSHIP
              </strong>

              <i>
                ↗
              </i>

            </a>

          </nav>


          {/* BOTTOM */}

          <div className="mobile-nav__bottom">

            <p>
              BUILT FOR THOSE WHO
              <br />
              REFUSE AVERAGE.
            </p>


            <a
              href="#membership"
              className="mobile-nav__join"
              onClick={closeMenu}
            >

              <span>
                JOIN APEX
              </span>

              <i>
                ↗
              </i>

            </a>

          </div>


          <div className="mobile-nav__meta">

            <span>
              PERFORMANCE CLUB
            </span>

            <span>
              24 / 7 ACCESS
            </span>

          </div>

        </div>

      </div>

    </>

  );

}


export default Navbar;