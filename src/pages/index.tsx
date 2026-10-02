import {useEffect, useState, type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {config} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';

import {profile, sections, type Section} from './_home/content';
import styles from './index.module.css';

// Font Awesome's CSS is imported above, so it is in the page before the
// icons render (avoids a flash of oversized icons on first load).
config.autoAddCss = false;

// The motto's resting state, coloured like code tokens.
const MOTTO_FINAL = [
  {text: 'i', className: styles.mottoVar},
  {text: ' = ', className: styles.mottoOp},
  {text: '0', className: styles.mottoNum},
];
const MOTTO_FINAL_TEXT = MOTTO_FINAL.map((segment) => segment.text).join('');
// Starts on the final text (what renders before JS loads), deletes it, types
// each word in turn, and ends back on the final text.
const MOTTO_SEQUENCE = profile.mottoWords.length
  ? [MOTTO_FINAL_TEXT, ...profile.mottoWords, MOTTO_FINAL_TEXT]
  : [MOTTO_FINAL_TEXT];

const TYPE_MS = 95;
const DELETE_MS = 45;
const HOLD_MS = 1300;
const START_DELAY_MS = 1500;

function useTypewriter(sequence: string[]) {
  const [state, setState] = useState({index: 0, length: sequence[0].length, typing: false});

  useEffect(() => {
    if (sequence.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }
    let index = 0;
    let length = sequence[0].length;
    let deleting = true;
    let timer: number;

    const tick = () => {
      let delay = TYPE_MS;
      if (deleting) {
        if (length > 0) {
          length -= 1;
          delay = DELETE_MS;
        } else {
          deleting = false;
          index += 1;
        }
      } else {
        length += 1;
      }

      const wordDone = !deleting && length === sequence[index].length;
      if (wordDone && index === sequence.length - 1) {
        setState({index, length, typing: false});
        return;
      }
      if (wordDone) {
        deleting = true;
        delay = HOLD_MS;
      }
      setState({index, length, typing: !wordDone});
      timer = window.setTimeout(tick, delay);
    };

    timer = window.setTimeout(tick, START_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [sequence]);

  return {text: sequence[state.index].slice(0, state.length), typing: state.typing};
}

function TypedText({text}: {text: string}) {
  if (!MOTTO_FINAL_TEXT.startsWith(text)) {
    return <span className={styles.mottoWord}>{text}</span>;
  }
  // A prefix of the final text: keep each token's colour as it is typed.
  let remaining = text.length;
  return (
    <>
      {MOTTO_FINAL.map(({text: segment, className}) => {
        const shown = segment.slice(0, Math.max(0, remaining));
        remaining -= segment.length;
        return shown ? (
          <span key={segment} className={className}>
            {shown}
          </span>
        ) : null;
      })}
    </>
  );
}

function Motto() {
  const {text, typing} = useTypewriter(MOTTO_SEQUENCE);
  return (
    <p className={styles.motto} aria-label={`Me, Myself, and ${MOTTO_FINAL_TEXT}`}>
      <span aria-hidden="true">Me, Myself, and </span>
      <code className={styles.mottoCode} aria-hidden="true">
        <span>
          <TypedText text={text} />
        </span>
        <span className={clsx(styles.caret, typing && styles.caretTyping)} />
      </code>
    </p>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const photoUrl = useBaseUrl(profile.photo ?? '');
  return (
    <header className={styles.hero}>
      <div className={clsx('container', styles.heroInner)}>
        <div className={styles.heroText}>
          <Heading as="h1" className={styles.name}>
            {siteConfig.title}
          </Heading>
          <Motto />
          <ul className={styles.headline}>
            {profile.headline.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className={styles.intro}>{profile.intro}</p>
          <div className={styles.actions}>
            {profile.links.map(({label, href, icon, brand}) => (
              <Link key={label} className={styles.pill} data-brand={brand} to={href}>
                <FontAwesomeIcon icon={icon} className={styles.pillIcon} />
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.portrait} aria-hidden="true">
          {profile.photo ? <img src={photoUrl} alt="" /> : <span>{profile.initials}</span>}
        </div>
      </div>
    </header>
  );
}

function HomepageSection({section, index}: {section: Section; index: number}) {
  const {id, title, to, linkLabel, Preamble} = section;
  return (
    <section id={id} className={styles.section}>
      <div className={styles.sectionLabel}>
        {/* Zero-indexed, in keeping with i = 0. */}
        <span className={styles.sectionIndex}>{String(index).padStart(2, '0')}</span>
        <Heading as="h2" className={styles.sectionTitle}>
          {title}
        </Heading>
      </div>
      <div className={styles.sectionBody}>
        <div className={styles.preamble}>
          <Preamble />
        </div>
        <Link className={styles.sectionLink} to={to}>
          {linkLabel} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout description="Me, Myself, and i = 0">
      <HomepageHeader />
      <main className={clsx('container', styles.sections)}>
        {sections.map((section, index) => (
          <HomepageSection key={section.id} section={section} index={index} />
        ))}
      </main>
    </Layout>
  );
}
