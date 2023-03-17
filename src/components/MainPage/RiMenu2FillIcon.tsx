import { memo, SVGProps } from 'react';

const RiMenu2FillIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M3.75 5H26.25V7.5H3.75V5ZM3.75 13.75H18.75V16.25H3.75V13.75ZM3.75 22.5H26.25V25H3.75V22.5Z'
      fill='#303030'
    />
  </svg>
);
const Memo = memo(RiMenu2FillIcon);
export { Memo as RiMenu2FillIcon };
