import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 15 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M13.5 3L7.5 6.75L1.5 3V1.5L7.5 5.25L13.5 1.5M13.5 0H1.5C0.6675 0 0 0.6675 0 1.5V10.5C0 10.8978 0.158035 11.2794 0.43934 11.5607C0.720644 11.842 1.10218 12 1.5 12H13.5C13.8978 12 14.2794 11.842 14.5607 11.5607C14.842 11.2794 15 10.8978 15 10.5V1.5C15 1.10218 14.842 0.720644 14.5607 0.43934C14.2794 0.158035 13.8978 0 13.5 0Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };
