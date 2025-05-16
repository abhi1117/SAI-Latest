import type { Navigation } from '@/interfaces/navigation';

export const navigations: Navigation[] = [
  {
    label: 'Home',
    path: 'home', // this should match id="home" section
  },
  {
    label: 'Who We Are',
    path: 'who-we-are',
    children: [
      { label: 'Our Vision', path: 'about' },
      // { label: 'Partners', path: 'partners' },
      { label: 'Message From Founder', path: 'MessageFromFounder' },
      { label: 'Knowledge Partners', path: 'knowledgepartners' },
     
    ],
  },
  {
    label: 'What We Do',
    path: 'what-we-do',
    children: [
      { label: 'Our Work', path: 'ourwork' },
      // { label: 'Gallery', path: 'gallery' },
      { label: 'Publications', path: 'publications' }
     
    ],
  },
  {
    label: 'Join Us',
    path: 'joinus',
  },
];
