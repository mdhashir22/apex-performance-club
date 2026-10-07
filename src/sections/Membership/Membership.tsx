import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import membershipVisual from '../../assets/membership/membership-visual.png';

import './Membership.scss';

gsap.registerPlugin(ScrollTrigger);


type MembershipPlan = {
  number: string;
  name: string;
  label: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  featured?: boolean;
};


const plans: MembershipPlan[] = [
  {
    number: '01',
    name: 'BASE',
    label: 'ESSENTIAL ACCESS',
    price: '$39',
    period: '/ MONTH',

    description:
      'Everything you need to train independently inside the APEX environment.',

    features: [
      '24/7 Club Access',
      'Strength Floor Access',
      'Cardio Lab Access',
      'Locker Room Access'
    ]
  },

  {
    number: '02',
    name: 'PERFORMANCE',
    label: 'BUILT FOR PROGRESS',
    price: '$69',
    period: '/ MONTH',

    description:
      'For members who want complete training access and structured performance support.',

    features: [
      'Everything in Base',
      'All Training Zones',
      'Group Performance Sessions',
      'Monthly Progress Review',
      'Priority Class Booking'
    ],

    featured: true
  },

  {
    number: '03',
    name: 'ELITE',
    label: 'THE FULL EXPERIENCE',
    price: '$119',
    period: '/ MONTH',

    description:
      'The highest APEX standard with coaching, recovery and personalised support.',

    features: [
      'Everything in Performance',
      'Personal Coaching Sessions',
      'Nutrition Guidance',
      'Recovery Zone Access',
      'Priority Coach Booking'
    ]
  }
];


function Membership() {

  const sectionRef =
    useRef<HTMLElement | null>(null);


  useEffect(() => {

    const section = sectionRef.current;

    if (!section) return;


    const reducedMotion =
      window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;


    if (reducedMotion) return;


    const ctx = gsap.context(() => {

      /* HEADER */

      const timeline =
        gsap.timeline({
          scrollTrigger: {
            trigger: '.membership__header',
            start: 'top 85%',
            once: true,
            invalidateOnRefresh: true
          }
        });


      timeline

        .fromTo(
          '.membership__eyebrow',
          {
            opacity: 0,
            x: -25
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: 'power3.out',
            clearProps: 'transform,opacity'
          }
        )

        .fromTo(
          '.membership__title-line > span',
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
          '-=0.35'
        )

        .fromTo(
          '.membership__intro',
          {
            opacity: 0,
            y: 25
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            clearProps: 'transform,opacity'
          },
          '-=0.5'
        );


      /* VISUAL */

      gsap.fromTo(
        '.membership__visual',
        {
          opacity: 0,
          x: -60
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power4.out',
          clearProps: 'transform,opacity',

          scrollTrigger: {
            trigger: '.membership__body',
            start: 'top 82%',
            once: true,
            invalidateOnRefresh: true
          }
        }
      );


      /* PLANS */

      gsap.fromTo(
        '.membership-plan',
        {
          opacity: 0,
          x: 60
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power4.out',
          clearProps: 'transform,opacity',

          scrollTrigger: {
            trigger: '.membership__plans',
            start: 'top 82%',
            once: true,
            invalidateOnRefresh: true
          }
        }
      );

    }, section);


    const frame =
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });


    return () => {

      cancelAnimationFrame(frame);

      ctx.revert();

    };

  }, []);


  return (

    <section
      ref={sectionRef}
      className="membership"
      id="membership"
    >

      {/* BACKGROUND */}

      <div className="membership__grid-bg" />

      <div className="membership__red-glow" />


      <div className="membership__container">


        {/* =================================
            HEADER
        ================================= */}

        <header className="membership__header">


          <div className="membership__eyebrow">

            <span>
              05
            </span>

            <i />

            <p>
              MEMBERSHIP
            </p>

          </div>


          <div className="membership__heading-grid">


            <h2 className="membership__title">

              <span className="membership__title-line">

                <span>
                  CHOOSE YOUR
                </span>

              </span>


              <span
                className="
                  membership__title-line
                  membership__title-line--red
                "
              >

                <span>
                  STANDARD.
                </span>

              </span>

            </h2>


            <div className="membership__intro">

              <span>
                NO SHORTCUTS. JUST ACCESS.
              </span>

              <p>
                Choose the level of support that matches
                your ambition. Every membership gives you
                access to an environment built for progress.
              </p>

            </div>

          </div>

        </header>


        {/* =================================
            MAIN BODY
        ================================= */}

        <div className="membership__body">


          {/* =================================
              LEFT IMAGE
          ================================= */}

          <div className="membership__visual">


            <img
              src={membershipVisual}
              alt="APEX Performance Club membership"
            />


            <div className="membership__visual-shade" />


            <div className="membership__visual-top">

              <span>
                APEX
              </span>

              <p>
                PERFORMANCE CLUB
              </p>

            </div>


            <div className="membership__visual-content">

              <span>
                BUILT DIFFERENT
              </span>

              <h3>
                YOUR CLUB.
                <strong>
                  YOUR STANDARD.
                </strong>
              </h3>

              <p>
                Train without compromise.
              </p>

            </div>


            <div className="membership__visual-edge" />

          </div>


          {/* =================================
              RIGHT PLANS
          ================================= */}

          <div className="membership__plans">


            {plans.map((plan) => (

              <article
                key={plan.name}

                className={[
                  'membership-plan',

                  plan.featured
                    ? 'membership-plan--featured'
                    : ''

                ].join(' ')}
              >


                {/* NUMBER */}

                <div className="membership-plan__number">

                  {plan.number}

                </div>


                {/* MAIN INFO */}

                <div className="membership-plan__main">


                  <div className="membership-plan__heading">

                    <span>
                      {plan.label}
                    </span>

                    <h3>
                      {plan.name}
                    </h3>

                  </div>


                  <p className="membership-plan__description">

                    {plan.description}

                  </p>


                  <ul className="membership-plan__features">

                    {plan.features.map(
                      (feature) => (

                        <li key={feature}>

                          <span>
                            +
                          </span>

                          {feature}

                        </li>

                      )
                    )}

                  </ul>

                </div>


                {/* PRICE / CTA */}

                <div className="membership-plan__action">


                  {plan.featured && (

                    <span className="membership-plan__popular">

                      MOST POPULAR

                    </span>

                  )}


                  <div className="membership-plan__price">

                    <strong>
                      {plan.price}
                    </strong>

                    <span>
                      {plan.period}
                    </span>

                  </div>


                  <button
                    type="button"
                    className="membership-plan__button"
                  >

                    <span>
                      JOIN APEX
                    </span>

                    <i>
                      ↗
                    </i>

                  </button>

                </div>


                <div className="membership-plan__line" />

              </article>

            ))}

          </div>

        </div>


        {/* =================================
            BOTTOM
        ================================= */}

        <div className="membership__footer">


          <div>

            <span>
              NO LONG-TERM COMMITMENT
            </span>

            <i />

            <span>
              CANCEL ANYTIME
            </span>

          </div>


          <p>
            TERMS APPLY / APEX PERFORMANCE CLUB
          </p>

        </div>

      </div>

    </section>

  );

}


export default Membership;