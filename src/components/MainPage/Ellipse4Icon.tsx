import { memo, SVGProps } from 'react';

const Ellipse4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 38 38' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={19} cy={19} r={19} fill='black' fillOpacity={0.31} />
  </svg>
);
const Memo = memo(Ellipse4Icon);
export { Memo as Ellipse4Icon };
