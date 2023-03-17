import { memo, SVGProps } from 'react';

const IconParkSolidLikeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <mask
      id='mask0_8_40'
      style={{
        maskType: 'luminance',
      }}
      maskUnits='userSpaceOnUse'
      x={-1}
      y={1}
      width={24}
      height={21}
    >
      <path
        d='M6.87501 3.66666C4.09064 3.66666 1.83334 5.92395 1.83334 8.70832C1.83334 13.75 7.79168 18.3333 11 19.3994C14.2083 18.3333 20.1667 13.75 20.1667 8.70832C20.1667 5.92395 17.9094 3.66666 15.125 3.66666C13.42 3.66666 11.9121 4.5132 11 5.80891C10.5351 5.14671 9.9175 4.60628 9.19946 4.23338C8.48142 3.86048 7.6841 3.66609 6.87501 3.66666Z'
        fill='white'
        stroke='white'
        strokeWidth={4}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </mask>
    <g mask='url(#mask0_8_40)'>
      <path d='M0 0H22V22H0V0Z' fill='#CB2424' />
    </g>
  </svg>
);
const Memo = memo(IconParkSolidLikeIcon);
export { Memo as IconParkSolidLikeIcon };
