import { memo, SVGProps } from 'react';

const Ellipse2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={9} cy={9} r={9} fill='#6E43A5' />
  </svg>
);
const Memo = memo(Ellipse2Icon);
export { Memo as Ellipse2Icon };
