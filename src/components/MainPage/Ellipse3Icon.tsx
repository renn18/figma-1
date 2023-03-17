import { memo, SVGProps } from 'react';

const Ellipse3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={9} cy={9} r={9} fill='#6EAE5E' />
  </svg>
);
const Memo = memo(Ellipse3Icon);
export { Memo as Ellipse3Icon };
