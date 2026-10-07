import { useEffect, useRef, useState } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import trainingFloor from '../../assets/zones/training-floor.png';

import strengthZone from '../../assets/zones/strength-zone.png';
import performanceZone from '../../assets/zones/performance-zone.png';
import cardioZone from '../../assets/zones/cardio-zone.png';
import combatZone from '../../assets/zones/combat-zone.png';

import './TrainingZones.scss';

gsap.registerPlugin(ScrollTrigger);

type Zone = {
  id: number;
  number: string;
  shortName: string;
  title: string;
  eyebrow: string;
  description: string;
  image: string;

  statOne: string;
  statOneLabel: string;

  statTwo: string;
  statTwoLabel: string;

  statThree: string;
  statThreeLabel: string;
};

const zones: Zone[] = [
  {
    id: 0,

    number: '01',
    shortName: 'Strength',

    title: 'STRENGTH FLOOR',

    eyebrow: 'BUILT FOR HEAVY WORK',

    description:
      'A dedicated strength environment engineered for serious progression. Premium racks, lifting platforms, free weights and equipment built for controlled power.',

    image: strengthZone,

    statOne: '12',
    statOneLabel: 'POWER RACKS',

    statTwo: '06',
    statTwoLabel: 'LIFTING PLATFORMS',

    statThree: '24/7',
    statThreeLabel: 'ACCESS'
  },

  {
    id: 1,

    number: '02',
    shortName: 'Performance',

    title: 'PERFORMANCE TURF',

    eyebrow: 'MOVE WITH PURPOSE',

    description:
      'An open athletic training zone for sled work, acceleration, agility and explosive movement. Built to turn raw strength into usable performance.',

    image: performanceZone,

    statOne: '30M',
    statOneLabel: 'TURF TRACK',

    statTwo: '08',
    statTwoLabel: 'SLED STATIONS',

    statThree: '15+',
    statThreeLabel: 'TOOLS'
  },

  {
    id: 2,

    number: '03',
    shortName: 'Cardio',

    title: 'CARDIO LAB',

    eyebrow: 'BUILD YOUR ENGINE',

    description:
      'Premium conditioning equipment meets performance-focused cardio. Train endurance, speed and work capacity without settling for ordinary cardio.',

    image: cardioZone,

    statOne: '20+',
    statOneLabel: 'MACHINES',

    statTwo: '04',
    statTwoLabel: 'CARDIO TYPES',

    statThree: '24/7',
    statThreeLabel: 'ACCESS'
  },

  {
    id: 3,

    number: '04',
    shortName: 'Combat',

    title: 'COMBAT ZONE',

    eyebrow: 'CONTROL THE CHAOS',

    description:
      'A focused combat environment for boxing, bag work and high-intensity conditioning. Develop speed, precision and composure under pressure.',

    image: combatZone,

    statOne: '08',
    statOneLabel: 'HEAVY BAGS',

    statTwo: '01',
    statTwoLabel: 'BOXING RING',

    statThree: '360°',
    statThreeLabel: 'TRAINING'
  }
];

function TrainingZones() {
  const sectionRef =
    useRef<HTMLElement | null>(null);

  const panelRef =
    useRef<HTMLDivElement | null>(null);

  const zoneImageRef =
    useRef<HTMLDivElement | null>(null);

  const [activeZone, setActiveZone] =
    useState(0);

  const zone =
    zones[activeZone];

  const selectZone = (
    index: number
  ) => {
    if (index === activeZone) {
      return;
    }

    const reducedMotion =
      window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

    if (
      reducedMotion ||
      !panelRef.current ||
      !zoneImageRef.current
    ) {
      setActiveZone(index);
      return;
    }

    gsap.killTweensOf([
      panelRef.current,
      zoneImageRef.current
    ]);

    const timeline =
      gsap.timeline();

    timeline.to(
      [
        zoneImageRef.current,
        panelRef.current
      ],
      {
        opacity: 0,
        y: 16,

        duration: 0.2,

        ease: 'power2.in',

        stagger: 0.03,

        onComplete: () => {
          setActiveZone(index);
        }
      }
    );

    timeline.fromTo(
      zoneImageRef.current,
      {
        opacity: 0,
        y: 22,
        scale: 1.035
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,

        duration: 0.7,

        ease: 'power4.out'
      }
    );

    timeline.fromTo(
      panelRef.current,
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,

        duration: 0.58,

        ease: 'power4.out'
      },
      '-=0.5'
    );
  };

  useEffect(() => {
    const section =
      sectionRef.current;

    if (!section) {
      return;
    }

    const reducedMotion =
      window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

    if (reducedMotion) {
      return;
    }

    const ctx =
      gsap.context(
        () => {
          const timeline =
            gsap.timeline({
              scrollTrigger: {
                trigger: section,

                start: 'top 72%',

                once: true
              }
            });

          timeline
            .from(
              '.zones__eyebrow',
              {
                opacity: 0,

                x: -30,

                duration: 0.7,

                ease: 'power3.out'
              }
            )

            .from(
              '.zones__title-line > span',
              {
                yPercent: 115,

                duration: 1,

                stagger: 0.08,

                ease: 'power4.out'
              },

              '-=0.35'
            )

            .from(
              '.zones__header-copy',
              {
                opacity: 0,

                y: 25,

                duration: 0.7,

                ease: 'power3.out'
              },

              '-=0.55'
            )

            .from(
              '.zones__explorer',
              {
                opacity: 0,

                y: 65,

                scale: 0.985,

                duration: 1,

                ease: 'power4.out'
              },

              '-=0.3'
            )

            .from(
              '.zones__map-marker',
              {
                opacity: 0,

                scale: 0.25,

                duration: 0.65,

                stagger: 0.1,

                ease: 'back.out(1.8)'
              },

              '-=0.45'
            );
        },

        section
      );

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="zones"
      id="club"
    >
      <div
        className="zones__grid-bg"
      />

      <div
        className="zones__container"
      >
        {/* =========================
            HEADER
        ========================= */}

        <header
          className="zones__header"
        >
          <div
            className="zones__eyebrow"
          >
            <span>
              03
            </span>

            <i />

            <p>
              THE CLUB
            </p>
          </div>

          <div
            className="zones__heading-grid"
          >
            <h2
              className="zones__title"
            >
              <span
                className="zones__title-line"
              >
                <span>
                  ENTER THE
                </span>
              </span>

              <span
                className="
                  zones__title-line
                  zones__title-line--red
                "
              >
                <span>
                  FLOOR.
                </span>
              </span>
            </h2>

            <div
              className="zones__header-copy"
            >
              <span>
                EXPLORE APEX
              </span>

              <p>
                One club. Four purpose-built environments.
                Explore the floor and find the space built
                for the way you train.
              </p>
            </div>
          </div>
        </header>

        {/* =========================
            EXPLORER
        ========================= */}

        <div
          className="zones__explorer"
        >
          {/* =========================
              LEFT FLOOR PLAN
          ========================= */}

          <div
            className="zones__visual"
          >
            <div
              className="zones__floor-image"
            >
              <img
                src={trainingFloor}
                alt="APEX Performance Club floor plan"
              />
            </div>

            <div
              className="zones__image-shade"
            />

            <div
              className="zones__scan"
            />

            {/* =========================
                MAP MARKERS
            ========================= */}

            <button
              type="button"
              className={`
                zones__map-marker
                zones__map-marker--strength
                ${
                  activeZone === 0
                    ? 'zones__map-marker--active'
                    : ''
                }
              `}
              aria-label="Select Strength Floor"
              onClick={() =>
                selectZone(0)
              }
            >
              <span
                className="zones__map-marker-pulse"
              />

              <span
                className="zones__map-marker-core"
              />
            </button>

            <button
              type="button"
              className={`
                zones__map-marker
                zones__map-marker--performance
                ${
                  activeZone === 1
                    ? 'zones__map-marker--active'
                    : ''
                }
              `}
              aria-label="Select Performance Turf"
              onClick={() =>
                selectZone(1)
              }
            >
              <span
                className="zones__map-marker-pulse"
              />

              <span
                className="zones__map-marker-core"
              />
            </button>

            <button
              type="button"
              className={`
                zones__map-marker
                zones__map-marker--cardio
                ${
                  activeZone === 2
                    ? 'zones__map-marker--active'
                    : ''
                }
              `}
              aria-label="Select Cardio Lab"
              onClick={() =>
                selectZone(2)
              }
            >
              <span
                className="zones__map-marker-pulse"
              />

              <span
                className="zones__map-marker-core"
              />
            </button>

            <button
              type="button"
              className={`
                zones__map-marker
                zones__map-marker--combat
                ${
                  activeZone === 3
                    ? 'zones__map-marker--active'
                    : ''
                }
              `}
              aria-label="Select Combat Zone"
              onClick={() =>
                selectZone(3)
              }
            >
              <span
                className="zones__map-marker-pulse"
              />

              <span
                className="zones__map-marker-core"
              />
            </button>

            <div
              className="zones__visual-label"
            >
              <span>
                APEX FLOOR PLAN
              </span>

              <i />

              <p>
                SELECT A ZONE
              </p>
            </div>
          </div>

          {/* =========================
              RIGHT PANEL
          ========================= */}

          <aside
            className="zones__panel"
          >
            {/* =========================
                SELECTOR
            ========================= */}

            <div
              className="zones__selector"
            >
              {zones.map(
                (
                  item,
                  index
                ) => (
                  <button
                    type="button"
                    key={item.id}
                    className={
                      activeZone === index
                        ? 'zones__selector-item zones__selector-item--active'
                        : 'zones__selector-item'
                    }
                    onClick={() =>
                      selectZone(index)
                    }
                  >
                    <span>
                      {item.number}
                    </span>

                    <p>
                      {item.shortName}
                    </p>
                  </button>
                )
              )}
            </div>

            {/* =========================
                SELECTED ZONE IMAGE
            ========================= */}

            <div
              ref={zoneImageRef}
              className="zones__zone-image"
            >
              <img
                src={zone.image}
                alt={`${zone.title} at APEX Performance Club`}
              />

              <div
                className="zones__zone-image-overlay"
              />

              <div
                className="zones__zone-image-tag"
              >
                <span>
                  {zone.number}
                </span>

                <p>
                  {zone.shortName}
                </p>
              </div>
            </div>

            {/* =========================
                SELECTED ZONE CONTENT
            ========================= */}

            <div
              ref={panelRef}
              className="zones__panel-content"
            >
              <div
                className="zones__active-number"
              >
                {zone.number}
              </div>

              <span
                className="zones__panel-eyebrow"
              >
                {zone.eyebrow}
              </span>

              <h3>
                {zone.title}
              </h3>

              <p
                className="zones__description"
              >
                {zone.description}
              </p>

              {/* =========================
                  STATS
              ========================= */}

              <div
                className="zones__stats"
              >
                <div>
                  <strong>
                    {zone.statOne}
                  </strong>

                  <span>
                    {zone.statOneLabel}
                  </span>
                </div>

                <div>
                  <strong>
                    {zone.statTwo}
                  </strong>

                  <span>
                    {zone.statTwoLabel}
                  </span>
                </div>

                <div>
                  <strong>
                    {zone.statThree}
                  </strong>

                  <span>
                    {zone.statThreeLabel}
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="zones__cta"
              >
                <span>
                  Explore Zone
                </span>

                <i>
                  ↗
                </i>
              </button>
            </div>

            {/* =========================
                PANEL FOOTER
            ========================= */}

            <div
              className="zones__panel-footer"
            >
              <span>
                APEX / 03
              </span>

              <p>
                TRAIN WITHOUT LIMITS
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default TrainingZones;