import apexLogo from '../../assets/apex-logo.png';

import './Footer.scss';


function Footer() {

  const currentYear =
    new Date().getFullYear();


  return (

    <footer
      className="footer"
      id="contact"
    >

      {/* BACKGROUND EFFECTS */}

      <div className="footer__grid" />
      <div className="footer__glow footer__glow--left" />
      <div className="footer__glow footer__glow--right" />


      <div className="footer__container">


        {/* =================================
            MAIN CTA
        ================================= */}

        <section className="footer__cta">

          <div className="footer__cta-top">

            <div className="footer__eyebrow">

              <span>
                06
              </span>

              <i />

              <p>
                YOUR MOVE
              </p>

            </div>


            <span className="footer__cta-code">
              APEX / PERFORMANCE CLUB
            </span>

          </div>


          <div className="footer__cta-main">

            <h2>

              <span>
                READY TO REACH
              </span>

              <strong>
                YOUR PEAK?
              </strong>

            </h2>


            <div className="footer__cta-action">

              <p>
                Stop waiting for the perfect time.
                Step inside, put in the work and
                become harder to beat.
              </p>


              <a
                href="#membership"
                className="footer__join"
              >

                <span>
                  JOIN APEX
                </span>

                <i>
                  ↗
                </i>

              </a>

            </div>

          </div>

        </section>


        {/* =================================
            INFORMATION
        ================================= */}

        <div className="footer__main">


          {/* BRAND */}

          <div className="footer__brand">

            <a
              href="#"
              className="footer__logo"
              aria-label="APEX Performance Club home"
            >

              <img
                src={apexLogo}
                alt="APEX Performance Club"
              />

            </a>


            <p>
              Built for those who refuse average.
              Train harder, move better and earn
              your peak.
            </p>


            <div className="footer__status">

              <span />

              24/7 MEMBER ACCESS

            </div>

          </div>


          {/* NAVIGATION */}

          <div className="footer__column">

            <span className="footer__column-title">
              EXPLORE
            </span>


            <nav
              className="footer__links"
              aria-label="Footer navigation"
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

          </div>


          {/* CONTACT */}

          <div className="footer__column">

            <span className="footer__column-title">
              CONTACT
            </span>


            <div className="footer__contact">

              <a href="tel:+923001234567">

                <span>
                  PHONE
                </span>

                +92 300 1234567

              </a>


              <a href="mailto:hello@apexperformance.com">

                <span>
                  EMAIL
                </span>

                hello@apexperformance.com

              </a>


              <div>

                <span>
                  CLUB
                </span>

                Karachi, Pakistan

              </div>

            </div>

          </div>


          {/* SOCIAL / HOURS */}

          <div className="footer__column">

            <span className="footer__column-title">
              FOLLOW / HOURS
            </span>


            <div className="footer__socials">

              <a
                href="#"
                aria-label="APEX Instagram"
              >
                INSTAGRAM
                <span>↗</span>
              </a>


              <a
                href="#"
                aria-label="APEX YouTube"
              >
                YOUTUBE
                <span>↗</span>
              </a>


              <a
                href="#"
                aria-label="APEX Facebook"
              >
                FACEBOOK
                <span>↗</span>
              </a>

            </div>


            <div className="footer__hours">

              <span>
                CLUB ACCESS
              </span>

              <strong>
                OPEN 24 / 7
              </strong>

            </div>

          </div>

        </div>


        {/* =================================
            BOTTOM
        ================================= */}

        <div className="footer__bottom">

          <p>
            © {currentYear} APEX PERFORMANCE CLUB.
            ALL RIGHTS RESERVED.
          </p>


          <div className="footer__bottom-center">

            <span>
              NO EXCUSES
            </span>

            <i />

            <span>
              NO LIMITS
            </span>

          </div>


          <div className="footer__legal">

            <a href="#">
              PRIVACY
            </a>

            <a href="#">
              TERMS
            </a>

          </div>

        </div>

      </div>


      {/* HUGE BACKGROUND WORD */}

      <div
        className="footer__word"
        aria-hidden="true"
      >
        APEX
      </div>

    </footer>

  );

}


export default Footer;