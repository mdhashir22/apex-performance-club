import { useEffect, useRef, useState } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import marcusKane from '../../assets/coaches/marcus-kane.png';
import mayaStone from '../../assets/coaches/maya-stone.png';
import alexRivera from '../../assets/coaches/alex-rivera.png';
import elenaVolkova from '../../assets/coaches/elena-volkova.png';

import './Coaches.scss';

gsap.registerPlugin(ScrollTrigger);

type Coach = {
  id: number;
  number: string;
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  speciality: string;
  experience: string;
  certification: string;
  focus: string;
  bio: string;
  image: string;
};

const coaches: Coach[] = [
  {
    id: 1,
    number: '01',
    name: 'Marcus Kane',
    firstName: 'MARCUS',
    lastName: 'KANE',
    role: 'HEAD COACH',
    speciality: 'STRENGTH & POWER',
    experience: '8+ YEARS',
    certification: 'CERTIFIED STRENGTH COACH',
    focus: '1-ON-1 PERSONAL TRAINING',
    bio:
      'Marcus specialises in raw strength, power development and disciplined progression. His coaching is built around strong fundamentals, intelligent programming and pushing every athlete beyond their previous limits.',
    image: marcusKane
  },
  {
    id: 2,
    number: '02',
    name: 'Maya Stone',
    firstName: 'MAYA',
    lastName: 'STONE',
    role: 'COMBAT COACH',
    speciality: 'COMBAT & BOXING',
    experience: '5+ YEARS',
    certification: 'CERTIFIED BOXING COACH',
    focus: '1-ON-1 PERSONAL TRAINING',
    bio:
      'Maya combines technical boxing, conditioning and controlled aggression to build sharper, faster and more confident athletes. Her sessions focus on movement, precision, endurance and fight-ready discipline.',
    image: mayaStone
  },
  {
    id: 3,
    number: '03',
    name: 'Alex Rivera',
    firstName: 'ALEX',
    lastName: 'RIVERA',
    role: 'PERFORMANCE COACH',
    speciality: 'PERFORMANCE & CONDITIONING',
    experience: '6+ YEARS',
    certification: 'CERTIFIED CONDITIONING COACH',
    focus: 'ATHLETE DEVELOPMENT',
    bio:
      'Alex focuses on speed, athletic performance and high-level conditioning. His training methods combine explosive movement, endurance and performance-based programming for athletes who want to move better and perform harder.',
    image: alexRivera
  },
  {
    id: 4,
    number: '04',
    name: 'Elena Volkova',
    firstName: 'ELENA',
    lastName: 'VOLKOVA',
    role: 'NUTRITION COACH',
    speciality: 'NUTRITION & WELLNESS',
    experience: '4+ YEARS',
    certification: 'CERTIFIED NUTRITION COACH',
    focus: 'PERSONALISED WELLNESS PLANS',
    bio:
      'Elena helps members support their training with sustainable nutrition and wellness strategies. Her approach focuses on realistic habits, recovery and personalised plans designed around individual performance goals.',
    image: elenaVolkova
  }
];

function Coaches() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const [selectedCoach, setSelectedCoach] =
    useState<Coach | null>(null);


  /* ========================================
     SECTION ANIMATION
  ======================================== */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 72%',
          once: true
        }
      });

      timeline
        .from('.coaches__eyebrow', {
          opacity: 0,
          x: -30,
          duration: 0.7,
          ease: 'power3.out'
        })

        .from(
          '.coaches__title-line > span',
          {
            yPercent: 115,
            duration: 1,
            stagger: 0.08,
            ease: 'power4.out'
          },
          '-=0.35'
        )

        .from(
          '.coaches__intro',
          {
            opacity: 0,
            y: 25,
            duration: 0.7,
            ease: 'power3.out'
          },
          '-=0.55'
        )

        .from(
          '.coach-card',
          {
            opacity: 0,
            y: 70,
            scale: 0.97,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power4.out'
          },
          '-=0.25'
        );
    }, section);

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
    };
  }, []);


  /* ========================================
     MODAL CONTROLS
  ======================================== */

  useEffect(() => {
    if (!selectedCoach) return;

    document.body.style.overflow = 'hidden';

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedCoach(null);
      }
    };

    window.addEventListener('keydown', handleEscape);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.coach-modal__backdrop',
        {
          opacity: 0
        },
        {
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out'
        }
      );

      gsap.fromTo(
        '.coach-modal__panel',
        {
          opacity: 0,
          y: 35,
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
      window.removeEventListener('keydown', handleEscape);
      ctx.revert();
    };
  }, [selectedCoach]);


  const openCoach = (coach: Coach) => {
    setSelectedCoach(coach);
  };


  const closeCoach = () => {
    setSelectedCoach(null);
  };


  return (
    <>
      <section
        ref={sectionRef}
        className="coaches"
        id="coaches"
      >
        <div className="coaches__grid-bg" />

        <div className="coaches__container">

          {/* HEADER */}
          <header className="coaches__header">

            <div className="coaches__eyebrow">
              <span>04</span>
              <i />
              <p>ELITE COACHES</p>
            </div>


            <div className="coaches__heading-grid">

              <h2 className="coaches__title">

                <span className="coaches__title-line">
                  <span>BUILT BY</span>
                </span>

                <span className="coaches__title-line coaches__title-line--red">
                  <span>THE BEST.</span>
                </span>

              </h2>


              <div className="coaches__intro">

                <span>MEET THE TEAM</span>

                <p>
                  Train with specialists who know what it takes
                  to build strength, sharpen performance and
                  push beyond limits.
                </p>

              </div>

            </div>

          </header>


          {/* COACH CARDS */}
          <div className="coaches__grid">

            {coaches.map((coach) => (

              <article
                className="coach-card"
                key={coach.id}
                onClick={() => openCoach(coach)}
                tabIndex={0}
                role="button"
                aria-label={`View ${coach.name} profile`}
                onKeyDown={(event) => {
                  if (
                    event.key === 'Enter' ||
                    event.key === ' '
                  ) {
                    event.preventDefault();
                    openCoach(coach);
                  }
                }}
              >

                <div className="coach-card__image">

                  <img
                    src={coach.image}
                    alt={`${coach.name} - ${coach.speciality} coach at APEX`}
                  />

                  <div className="coach-card__shade" />

                </div>


                <div className="coach-card__top">

                  <span>{coach.number}</span>

                  <p>{coach.role}</p>

                </div>


                <div className="coach-card__content">

                  <span className="coach-card__speciality">
                    {coach.speciality}
                  </span>

                  <h3>
                    <span>{coach.firstName}</span>
                    <strong>{coach.lastName}</strong>
                  </h3>

                  <div className="coach-card__meta">

                    <span>{coach.experience}</span>

                    <i />

                    <span>APEX COACH</span>

                  </div>

                </div>


                <div className="coach-card__hover">

                  <span>VIEW PROFILE</span>

                  <i>↗</i>

                </div>


                <div className="coach-card__line" />

              </article>

            ))}

          </div>


          {/* BOTTOM STRIP */}
          <div className="coaches__footer">

            <div className="coaches__footer-left">

              <span>APEX / COACHING TEAM</span>

              <i />

              <p>TRAIN WITH PURPOSE</p>

            </div>

            <p className="coaches__footer-copy">
              Different disciplines. One standard.
            </p>

          </div>

        </div>
      </section>


      {/* ====================================
          COACH PROFILE MODAL
      ==================================== */}

      {selectedCoach && (

        <div
          ref={modalRef}
          className="coach-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedCoach.name} profile`}
        >

          <div
            className="coach-modal__backdrop"
            onClick={closeCoach}
          />


          <div className="coach-modal__panel">

            {/* CLOSE */}
            <button
              className="coach-modal__close"
              onClick={closeCoach}
              aria-label="Close coach profile"
              type="button"
            >
              <span />
              <span />
            </button>


            {/* NUMBER */}
            <span className="coach-modal__number">
              {selectedCoach.number}
            </span>


            {/* IMAGE */}
            <div className="coach-modal__visual">

              <img
                src={selectedCoach.image}
                alt={selectedCoach.name}
              />

              <div className="coach-modal__visual-shade" />

              <div className="coach-modal__visual-label">
                APEX / ELITE COACH
              </div>

            </div>


            {/* INFORMATION */}
            <div className="coach-modal__content">

              <div className="coach-modal__eyebrow">

                <span>{selectedCoach.role}</span>

                <i />

                <p>{selectedCoach.speciality}</p>

              </div>


              <h2>
                <span>{selectedCoach.firstName}</span>
                <strong>{selectedCoach.lastName}</strong>
              </h2>


              <p className="coach-modal__bio">
                {selectedCoach.bio}
              </p>


              <div className="coach-modal__stats">

                <div className="coach-modal__stat">
                  <span>EXPERIENCE</span>
                  <strong>
                    {selectedCoach.experience}
                  </strong>
                </div>


                <div className="coach-modal__stat">
                  <span>CERTIFICATION</span>
                  <strong>
                    {selectedCoach.certification}
                  </strong>
                </div>


                <div className="coach-modal__stat">
                  <span>COACHING FOCUS</span>
                  <strong>
                    {selectedCoach.focus}
                  </strong>
                </div>

              </div>


              <div className="coach-modal__bottom">

                <div>
                  <span>APEX PERFORMANCE CLUB</span>
                  <p>TRAIN BEYOND LIMITS.</p>
                </div>

                <button
                  type="button"
                  className="coach-modal__cta"
                  onClick={closeCoach}
                >
                  <span>START TRAINING</span>
                  <i>↗</i>
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </>
  );
}

export default Coaches;