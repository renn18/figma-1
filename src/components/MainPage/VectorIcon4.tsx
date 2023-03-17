import { memo, SVGProps } from 'react';

const VectorIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 15' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 13.9721V1.02792C0 0.57868 0.268169 0.182741 0.662535 0L8.43155 7.5L0.662535 15C0.268169 14.8096 0 14.4213 0 13.9721ZM10.8924 9.87563L2.40563 14.6117L9.10197 8.14721L10.8924 9.87563ZM13.5346 6.59391C13.8028 6.79949 14 7.11929 14 7.5C14 7.88071 13.8265 8.18528 13.5504 8.39848L11.7442 9.40355L9.77239 7.5L11.7442 5.59645L13.5346 6.59391ZM2.40563 0.388325L10.8924 5.12437L9.10197 6.85279L2.40563 0.388325Z'
      fill='#0B0A0A'
    />
  </svg>
);
const Memo = memo(VectorIcon4);
export { Memo as VectorIcon4 };
