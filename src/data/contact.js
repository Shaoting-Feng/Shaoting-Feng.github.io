import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
// import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faGoogleScholar } from '@fortawesome/free-brands-svg-icons/faGoogleScholar';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons/faFilePdf';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/Shaoting-Feng',
    label: 'Github',
    icon: faGithub,
  },
  // {
  //   link: 'https://facebook.com/d',
  //   label: 'Facebook',
  //   icon: faFacebookF,
  // },
  // {
  //   link: 'https://www.instagram.com/dangelosaurus/',
  //   label: 'Instagram',
  //   icon: faInstagram,
  // },
  {
    link: 'https://www.linkedin.com/in/shaoting-feng/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  // {
  //   link: 'https://angel.co/michael-d-angelo',
  //   label: 'Angel List',
  //   icon: faAngellist,
  // },
  {
    link: 'https://x.com/shaoting_feng',
    label: 'XTwitter',
    icon: faXTwitter,
  },
  {
    link: 'https://scholar.google.com/citations?user=HJ3InCAAAAAJ&hl=en',
    label: 'GoogleScholar',
    icon: faGoogleScholar,
  },
  {
    link: 'https://drive.google.com/file/d/1_rbhX9lqvwUEGqX6wAN0k1IS9euuay0n/view?usp=sharing',
    label: 'CV',
    icon: faFilePdf,
  },
  {
    link: 'mailto:shaotingf@uchicago.edu',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
