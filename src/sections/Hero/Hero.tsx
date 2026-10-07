import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import heroImage from '../../assets/hero.png';

import './Hero.scss';


function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);


  useEffect(() => {
    const hero = heroRef.current;
    const image = imageRef.current;

    if (!hero || !image) return;


    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const finePointer = window.matchMedia(
      '(hover: hover) and (pointer: fine)'
    ).matches;


    if (reducedMotion) {
      return;
    }


    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: 'power4.out'
        }
      });


      timeline
        .from('.hero__eyebrow', {
          opacity: 0,
          y: 18,
          duration: 0.7
        })

        .from(
          '.hero__title-line span',
          {
            yPercent: 115,
            rotate: 3,
            duration: 1.05,
            stagger: 0.11
          },
          '-=0.35'
        )

        .from(
          '.hero__description',
          {
            opacity: 0,
            y: 22,
            duration: 0.75
          },
          '-=0.55'
        )

        .from(
          '.hero__actions',
          {
            opacity: 0,
            y: 22,
            duration: 0.75
          },
          '-=0.52'
        )

        .from(
          '.hero__stats',
          {
            opacity: 0,
            y: 20,
            duration: 0.75
          },
          '-=0.42'
        )

        .from(
          '.hero__visual',
          {
            opacity: 0,
            scale: 1.055,
            duration: 1.55,
            ease: 'power3.out'
          },
          0.12
        )

        .from(
          '.hero__side-label',
          {
            opacity: 0,
            x: 15,
            duration: 0.7
          },
          '-=0.7'
        )

        .from(
          '.hero__scroll',
          {
            opacity: 0,
            y: 12,
            duration: 0.6
          },
          '-=0.5'
        );


      gsap.to(image, {
        scale: 1.035,
        duration: 9,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1
      });

    }, hero);


    const handleMouseMove = (event: MouseEvent) => {
      if (!finePointer) return;

      const rect = hero.getBoundingClientRect();

      const x =
        (event.clientX - rect.left) / rect.width - 0.5;

      const y =
        (event.clientY - rect.top) / rect.height - 0.5;


      gsap.to(image, {
        x: x * 9,
        y: y * 6,
        duration: 1.25,
        ease: 'power3.out',
        overwrite: 'auto'
      });


      gsap.to('.hero__glow', {
        x: x * -16,
        y: y * -10,
        duration: 1.5,
        ease: 'power3.out',
        overwrite: 'auto'
      });
    };


    if (finePointer) {
      hero.addEventListener(
        'mousemove',
        handleMouseMove
      );
    }


    return () => {
      hero.removeEventListener(
        'mousemove',
        handleMouseMove
      );

      ctx.revert();
    };

  }, []);


  return (
    <section
      ref={heroRef}
      className="hero"
      id="home"
    >

      <div className="hero__visual">
        <img
          ref={imageRef}
          src={heroImage}
          alt="Athletes training inside APEX Performance Club"
          className="hero__image"
        />
      </div>


      <div className="hero__overlay"></div>
      <div className="hero__glow"></div>
      <div className="hero__grid"></div>


      <div className="hero__red-line">
        <span></span>
      </div>


      <div className="hero__content">

        <div className="hero__eyebrow">
          <span className="hero__eyebrow-line"></span>

          <span>
            APEX / PERFORMANCE CLUB
          </span>

          <span className="hero__edition">
            EST. 2026
          </span>
        </div>


        <h1 className="hero__title">

          <span className="hero__title-line">
            <span>EARN</span>
          </span>

          <span className="hero__title-line">
            <span>YOUR</span>
          </span>

          <span className="hero__title-line hero__title-line--accent">
            <span>PEAK.</span>
          </span>

        </h1>


        <div className="hero__lower">

          <p className="hero__description">
            Elite training. Relentless progress.
            A performance club built for those
            who refuse to settle.
          </p>


          <div className="hero__actions">

            <a
              href="#membership"
              className="hero__primary"
            >
              <span>Start Your Journey</span>

              <span className="hero__button-arrow">
                ↗
              </span>
            </a>


            <a
              href="#club"
              className="hero__secondary"
            >
              <span className="hero__play">
                <span>▶</span>
              </span>

              <span>Explore The Club</span>
            </a>

          </div>

        </div>

      </div>


      <div className="hero__side-label">

        <span>01</span>

        <div></div>

        <p>
          STRENGTH<br />
          PERFORMANCE<br />
          DISCIPLINE
        </p>

      </div>


      <div className="hero__stats">

        <div className="hero__stat">
          <strong>24/7</strong>
          <span>Club Access</span>
        </div>

        <div className="hero__stat">
          <strong>15+</strong>
          <span>Elite Coaches</span>
        </div>

        <div className="hero__stat">
          <strong>40+</strong>
          <span>Training Zones</span>
        </div>

      </div>


      <a
        href="#programs"
        className="hero__scroll"
        aria-label="Scroll to programs"
      >
        <span>Scroll to train</span>

        <div className="hero__scroll-line">
          <i></i>
        </div>
      </a>

    </section>
  );
}


export default Hero;