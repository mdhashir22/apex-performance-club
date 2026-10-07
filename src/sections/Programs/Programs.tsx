import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import strengthImage from '../../assets/Programs/strenght.jpg';
import performanceImage from '../../assets/Programs/performance.jpg';
import conditioningImage from '../../assets/Programs/conditioning.jpg';
import combatImage from '../../assets/Programs/combat.jpg';

import './Programs.scss';

gsap.registerPlugin(ScrollTrigger);


type Program = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;

  modalDescription: string;
  focus: string[];
  level: string;
  duration: string;
  coach: string;
};


const programs: Program[] = [
  {
    number: '01',
    title: 'STRENGTH',
    subtitle: 'BUILD POWER',

    description:
      'Progressive strength training built around compound movement, controlled intensity and measurable progression.',

    image: strengthImage,

    tag: 'POWER / STRENGTH',

    modalDescription:
      'Build real, measurable strength through structured programming, compound movement and progressive overload. Every session is designed to improve power, technique and total-body strength without wasted work.',

    focus: [
      'Compound Lifting',
      'Progressive Overload',
      'Power Development',
      'Strength Technique'
    ],

    level: 'ALL LEVELS',
    duration: '60-75 MIN',
    coach: 'MARCUS KANE'
  },

  {
    number: '02',
    title: 'PERFORMANCE',
    subtitle: 'MOVE EXPLOSIVE',

    description:
      'Athletic training designed to sharpen speed, explosiveness, coordination and total-body performance.',

    image: performanceImage,

    tag: 'SPEED / POWER',

    modalDescription:
      'Train like an athlete with sessions engineered around speed, explosive power, agility and movement quality. Performance training develops the physical tools needed to move faster, react quicker and perform harder.',

    focus: [
      'Speed Development',
      'Explosive Power',
      'Agility Training',
      'Athletic Movement'
    ],

    level: 'INTERMEDIATE+',
    duration: '50-70 MIN',
    coach: 'ALEX RIVERA'
  },

  {
    number: '03',
    title: 'CONDITIONING',
    subtitle: 'OUTLAST LIMITS',

    description:
      'High-output conditioning that develops endurance, work capacity and the ability to keep moving under pressure.',

    image: conditioningImage,

    tag: 'ENGINE / ENDURANCE',

    modalDescription:
      'Push your engine beyond its current limits through high-output conditioning, endurance work and intelligently structured intensity. Build the capacity to work harder, recover faster and keep moving when fatigue hits.',

    focus: [
      'Endurance',
      'Work Capacity',
      'Cardio Performance',
      'Recovery Efficiency'
    ],

    level: 'ALL LEVELS',
    duration: '45-60 MIN',
    coach: 'ELENA VOLKOVA'
  },

  {
    number: '04',
    title: 'COMBAT',
    subtitle: 'TRAIN TO FIGHT',

    description:
      'Boxing-inspired training combining technique, conditioning, speed and controlled aggression.',

    image: combatImage,

    tag: 'BOXING / CONDITIONING',

    modalDescription:
      'Develop sharp technique, speed, conditioning and controlled aggression through boxing-inspired training. Combat sessions challenge both physical endurance and mental discipline while building confidence under pressure.',

    focus: [
      'Boxing Technique',
      'Footwork',
      'Combat Conditioning',
      'Speed & Reactions'
    ],

    level: 'ALL LEVELS',
    duration: '50-65 MIN',
    coach: 'MAYA STONE'
  }
];


function Programs() {

  const sectionRef =
    useRef<HTMLElement | null>(null);

  const modalRef =
    useRef<HTMLDivElement | null>(null);


  const [activeProgram, setActiveProgram] =
    useState<number | null>(null);

  const [selectedProgram, setSelectedProgram] =
    useState<Program | null>(null);


  /* ========================================
     SECTION ANIMATIONS
  ======================================== */

  useEffect(() => {

    const section = sectionRef.current;

    if (!section) return;


    const reducedMotion =
      window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;


    /*
      IMPORTANT:
      If reduced motion is enabled,
      make sure everything stays visible.
    */

    if (reducedMotion) {

      gsap.set(
        [
          '.programs__eyebrow',
          '.programs__title-line span',
          '.programs__intro',
          '.program-card',
          '.programs__footer'
        ],
        {
          clearProps: 'all'
        }
      );

      return;
    }


    const ctx = gsap.context(() => {

      /* ====================================
         HEADER
      ==================================== */

      const headingTimeline =
        gsap.timeline({
          scrollTrigger: {
            trigger: '.programs__header',

            start: 'top 88%',

            once: true,

            invalidateOnRefresh: true
          }
        });


      headingTimeline

        .fromTo(
          '.programs__eyebrow',

          {
            opacity: 0,
            y: 20
          },

          {
            opacity: 1,
            y: 0,

            duration: 0.7,

            ease: 'power3.out',

            clearProps: 'transform,opacity'
          }
        )


        .fromTo(
          '.programs__title-line span',

          {
            yPercent: 115
          },

          {
            yPercent: 0,

            duration: 1,

            stagger: 0.08,

            ease: 'power4.out',

            clearProps: 'transform'
          },

          '-=0.4'
        )


        .fromTo(
          '.programs__intro',

          {
            opacity: 0,
            y: 25
          },

          {
            opacity: 1,
            y: 0,

            duration: 0.8,

            ease: 'power3.out',

            clearProps: 'transform,opacity'
          },

          '-=0.55'
        );


      /* ====================================
         PROGRAM CARDS
      ==================================== */

      gsap.fromTo(

        '.program-card',

        {
          opacity: 0,
          y: 90,
          scale: 0.97
        },

        {
          opacity: 1,
          y: 0,
          scale: 1,

          duration: 1.05,

          stagger: 0.11,

          ease: 'power4.out',

          clearProps: 'transform,opacity',

          scrollTrigger: {

            trigger: '.programs__grid',

            start: 'top 92%',

            once: true,

            invalidateOnRefresh: true
          }
        }
      );


      /* ====================================
         FOOTER
      ==================================== */

      gsap.fromTo(

        '.programs__footer',

        {
          opacity: 0,
          y: 25
        },

        {
          opacity: 1,
          y: 0,

          duration: 0.8,

          ease: 'power3.out',

          clearProps: 'transform,opacity',

          scrollTrigger: {

            trigger: '.programs__footer',

            start: 'top 95%',

            once: true,

            invalidateOnRefresh: true
          }
        }
      );

    }, section);


    /*
      Wait until browser has painted
      everything before recalculating
      ScrollTrigger positions.
    */

    const refreshFrame =
      requestAnimationFrame(() => {

        ScrollTrigger.refresh();

      });


    /*
      Images can affect section height.

      When they finish loading,
      refresh ScrollTrigger again.
    */

    const images =
      Array.from(
        section.querySelectorAll('img')
      );


    const handleImageLoad = () => {

      ScrollTrigger.refresh();

    };


    images.forEach((image) => {

      if (!image.complete) {

        image.addEventListener(
          'load',
          handleImageLoad
        );

      }

    });


    return () => {

      cancelAnimationFrame(
        refreshFrame
      );


      images.forEach((image) => {

        image.removeEventListener(
          'load',
          handleImageLoad
        );

      });


      ctx.revert();

    };

  }, []);


  /* ========================================
     MODAL
  ======================================== */

  useEffect(() => {

    if (!selectedProgram) return;


    document.body.style.overflow =
      'hidden';


    const handleEscape = (
      event: KeyboardEvent
    ) => {

      if (event.key === 'Escape') {

        setSelectedProgram(null);

      }

    };


    window.addEventListener(
      'keydown',
      handleEscape
    );


    const ctx = gsap.context(() => {

      /* BACKDROP */

      gsap.fromTo(

        '.program-modal__backdrop',

        {
          opacity: 0
        },

        {
          opacity: 1,

          duration: 0.3,

          ease: 'power2.out'
        }
      );


      /* PANEL */

      gsap.fromTo(

        '.program-modal__panel',

        {
          opacity: 0,

          y: 40,

          scale: 0.96
        },

        {
          opacity: 1,

          y: 0,

          scale: 1,

          duration: 0.55,

          ease: 'power4.out'
        }
      );

    }, modalRef);


    return () => {

      document.body.style.overflow = '';

      window.removeEventListener(
        'keydown',
        handleEscape
      );

      ctx.revert();

    };

  }, [selectedProgram]);


  /* ========================================
     OPEN PROGRAM
  ======================================== */

  const openProgram = (
    program: Program
  ) => {

    setSelectedProgram(program);

  };


  /* ========================================
     CLOSE PROGRAM
  ======================================== */

  const closeProgram = () => {

    setSelectedProgram(null);

  };


  /* ========================================
     JSX
  ======================================== */

  return (
    <>

      <section
        ref={sectionRef}
        className="programs"
        id="programs"
      >

        <div className="programs__noise" />


        <div className="programs__container">


          {/* =================================
              HEADER
          ================================= */}

          <header className="programs__header">

            <div className="programs__eyebrow">

              <span className="programs__number">
                02
              </span>

              <span className="programs__eyebrow-line" />

              <span>
                TRAINING PROGRAMS
              </span>

            </div>


            <div className="programs__heading-grid">


              <h2 className="programs__title">

                <span className="programs__title-line">

                  <span>
                    CHOOSE YOUR
                  </span>

                </span>


                <span
                  className="
                    programs__title-line
                    programs__title-line--accent
                  "
                >

                  <span>
                    ARENA.
                  </span>

                </span>

              </h2>


              <div className="programs__intro">

                <span>
                  BUILT FOR PROGRESS
                </span>

                <p>
                  Different goals demand different
                  environments. Choose the arena that
                  pushes you beyond where you are now.
                </p>

              </div>

            </div>

          </header>


          {/* =================================
              PROGRAM CARDS
          ================================= */}

          <div
            className={
              `programs__grid ${
                activeProgram !== null
                  ? 'programs__grid--active'
                  : ''
              }`
            }
          >

            {programs.map(
              (program, index) => {


                const isActive =
                  activeProgram === index;


                const isInactive =
                  activeProgram !== null &&
                  activeProgram !== index;


                return (

                  <article
                    key={program.title}

                    className={[
                      'program-card',

                      isActive
                        ? 'program-card--active'
                        : '',

                      isInactive
                        ? 'program-card--inactive'
                        : ''

                    ].join(' ')}

                    onMouseEnter={() =>
                      setActiveProgram(index)
                    }

                    onMouseLeave={() =>
                      setActiveProgram(null)
                    }
                  >


                    {/* IMAGE */}

                    <div className="program-card__visual">

                      <img
                        src={program.image}

                        alt={
                          `${program.title} training at APEX Performance Club`
                        }
                      />

                    </div>


                    {/* EFFECTS */}

                    <div className="program-card__shade" />

                    <div className="program-card__red-glow" />

                    <div className="program-card__sweep" />


                    {/* TOP */}

                    <div className="program-card__top">

                      <span className="program-card__number">
                        {program.number}
                      </span>

                      <span className="program-card__tag">
                        {program.tag}
                      </span>

                    </div>


                    {/* CONTENT */}

                    <div className="program-card__content">

                      <span className="program-card__subtitle">
                        {program.subtitle}
                      </span>


                      <h3>
                        {program.title}
                      </h3>


                      <div className="program-card__details">

                        <p>
                          {program.description}
                        </p>


                        <button
                          type="button"

                          className="program-card__explore"

                          onClick={() =>
                            openProgram(program)
                          }
                        >

                          <span>
                            Explore Program
                          </span>

                          <i>
                            ↗
                          </i>

                        </button>

                      </div>

                    </div>


                    <div className="program-card__edge" />

                  </article>

                );

              }
            )}

          </div>


          {/* =================================
              FOOTER
          ================================= */}

          <div className="programs__footer">

            <span>
              04 DISCIPLINES
            </span>

            <div />

            <p>
              ONE STANDARD. YOUR HIGHEST.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================
          PROGRAM MODAL
      ===================================== */}

      {selectedProgram && (

        <div
          ref={modalRef}

          className="program-modal"

          role="dialog"

          aria-modal="true"

          aria-label={
            `${selectedProgram.title} program`
          }
        >


          {/* BACKDROP */}

          <div
            className="program-modal__backdrop"

            onClick={closeProgram}
          />


          {/* PANEL */}

          <div className="program-modal__panel">


            {/* CLOSE */}

            <button
              type="button"

              className="program-modal__close"

              onClick={closeProgram}

              aria-label="Close program"
            >

              <span />

              <span />

            </button>


            {/* NUMBER */}

            <span className="program-modal__number">
              {selectedProgram.number}
            </span>


            {/* =================================
                IMAGE SIDE
            ================================= */}

            <div className="program-modal__visual">

              <img
                src={selectedProgram.image}

                alt={
                  `${selectedProgram.title} training`
                }
              />


              <div className="program-modal__visual-shade" />


              <div className="program-modal__visual-bottom">

                <span>
                  APEX / TRAINING PROGRAM
                </span>

                <strong>
                  {selectedProgram.tag}
                </strong>

              </div>

            </div>


            {/* =================================
                CONTENT SIDE
            ================================= */}

            <div className="program-modal__content">


              {/* EYEBROW */}

              <div className="program-modal__eyebrow">

                <span>
                  {selectedProgram.subtitle}
                </span>

                <i />

                <p>
                  {selectedProgram.tag}
                </p>

              </div>


              {/* TITLE */}

              <h2>

                {selectedProgram.title}

                <strong>
                  .
                </strong>

              </h2>


              {/* DESCRIPTION */}

              <p className="program-modal__description">

                {selectedProgram.modalDescription}

              </p>


              {/* =================================
                  PROGRAM INFO
              ================================= */}

              <div className="program-modal__info">


                <div>

                  <span>
                    LEVEL
                  </span>

                  <strong>
                    {selectedProgram.level}
                  </strong>

                </div>


                <div>

                  <span>
                    DURATION
                  </span>

                  <strong>
                    {selectedProgram.duration}
                  </strong>

                </div>


                <div>

                  <span>
                    LEAD COACH
                  </span>

                  <strong>
                    {selectedProgram.coach}
                  </strong>

                </div>

              </div>


              {/* =================================
                  TRAINING FOCUS
              ================================= */}

              <div className="program-modal__focus">

                <span className="program-modal__focus-title">

                  TRAINING FOCUS

                </span>


                <div className="program-modal__focus-grid">

                  {selectedProgram.focus.map(
                    (item, index) => (

                      <div
                        key={item}

                        className="program-modal__focus-item"
                      >

                        <span>
                          0{index + 1}
                        </span>

                        <p>
                          {item}
                        </p>

                      </div>

                    )
                  )}

                </div>

              </div>


              {/* =================================
                  BOTTOM CTA
              ================================= */}

              <div className="program-modal__bottom">

                <div>

                  <span>
                    READY TO BEGIN?
                  </span>

                  <p>
                    YOUR NEXT LEVEL STARTS HERE.
                  </p>

                </div>


                <button
                  type="button"

                  className="program-modal__cta"

                  onClick={closeProgram}
                >

                  <span>
                    START TRAINING
                  </span>

                  <i>
                    ↗
                  </i>

                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </>
  );
}


export default Programs;