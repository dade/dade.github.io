// Landing page content. Files in folders starting with "_" are not turned into
// routes, so this folder only holds pieces imported by src/pages/index.tsx.
//
// To add a section: create a new .mdx preamble here, import it, and add an
// entry to `sections`. They render in the order listed.

import type {ComponentType} from 'react';
import type {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {faBluesky, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';

import ProfessionalPreamble from './professional.mdx';
import ProjectsPreamble from './projects.mdx';
import WritingPreamble from './writing.mdx';
import CreativePreamble from './creative.mdx';

export type ProfileLink = {
  label: string;
  href: string;
  icon: IconDefinition;
  // Matches a colour rule in index.module.css (.pill[data-brand=...]).
  brand: 'site' | 'linkedin' | 'github' | 'bluesky';
};

export const profile = {
  // The "Me, Myself, and ..." subheading types out each of these, then
  // settles on i = 0. Leave the list empty to show i = 0 without animating.
  mottoWords: ['games', 'community', 'coffee', 'tabletop RPGs', 'Neovim'],
  intro:
    'Musings, personal projects, and trying to sustain work as an independent contractor!',
  headline: [
    'Team Leadership',
    'Community',
    'Comms',
    'Player Experience',
    'Project Management',
  ],
  // Shown as a monogram unless an image path (e.g. '/img/me.jpg') is set.
  initials: 'DE',
  photo: '/img/me.jpg' as string | undefined,
  links: [
    {label: 'View experience', href: '/professional', icon: faBriefcase, brand: 'site'},
    {label: 'LinkedIn', href: 'https://linkedin.com/in/demasiri', icon: faLinkedin, brand: 'linkedin'},
    {label: 'GitHub', href: 'https://github.com/dade', icon: faGithub, brand: 'github'},
    {label: 'Bluesky', href: 'https://bsky.app/profile/demasiri.com', icon: faBluesky, brand: 'bluesky'},
  ] satisfies ProfileLink[],
};

export type Section = {
  id: string;
  title: string;
  to: string;
  linkLabel: string;
  Preamble: ComponentType;
};

export const sections: Section[] = [
  {
    id: 'professional',
    title: 'Professional',
    to: '/professional',
    linkLabel: 'View experience',
    Preamble: ProfessionalPreamble,
  },
  {
    id: 'projects',
    title: 'Projects',
    to: '/projects',
    linkLabel: 'Browse projects',
    Preamble: ProjectsPreamble,
  },
  {
    id: 'writing',
    title: 'Writing',
    to: '/writing',
    linkLabel: 'Read the writing',
    Preamble: WritingPreamble,
  },
  {
    id: 'creative',
    title: 'Creative',
    to: '/creative',
    linkLabel: 'See creative work',
    Preamble: CreativePreamble,
  },
];
