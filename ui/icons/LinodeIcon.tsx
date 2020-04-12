import React from 'react';

interface IconProps {
  size?: 24 | 40;
}

export const LinodeIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M37.1667 17.8C37.1739 17.7515 37.1667 17.7019 37.1459 17.6574C37.1252 17.613 37.0918 17.5756 37.05 17.55L31.6167 14.5167C31.5812 14.4962 31.541 14.4854 31.5 14.4854C31.459 14.4854 31.4188 14.4962 31.3833 14.5167L26.7667 17.3333C26.7322 17.3584 26.7038 17.3908 26.6836 17.4283C26.6634 17.4659 26.6519 17.5074 26.65 17.55V19.9667L24.7667 18.7333C24.7293 18.7096 24.6859 18.697 24.6417 18.697C24.5974 18.697 24.554 18.7096 24.5167 18.7333L21.8167 20.4L21.7 17.6667C21.6878 17.5877 21.6461 17.5162 21.5833 17.4667L18.8333 15.65L21.35 14.35C21.3909 14.3264 21.4248 14.2924 21.4482 14.2514C21.4716 14.2104 21.4838 14.1639 21.4833 14.1167L21.0333 3.66667C21.0309 3.6223 21.0175 3.57925 20.9942 3.54141C20.9709 3.50357 20.9385 3.47215 20.9 3.45L13.8333 0H13.6667L3.96667 3.01667C3.91069 3.04526 3.8666 3.09272 3.84221 3.15066C3.81781 3.2086 3.81467 3.2733 3.83334 3.33333L5.95001 13.7167C5.94186 13.7607 5.94186 13.8059 5.95001 13.85L9.00001 16.15L6.90001 17.15C6.85074 17.1771 6.81132 17.2191 6.78737 17.27C6.76342 17.3209 6.75618 17.3781 6.76667 17.4333L8.43334 25.2667C8.4257 25.3052 8.4257 25.3448 8.43334 25.3833L10.5 27.2833L9.16667 28.1C9.12484 28.129 9.09286 28.17 9.07499 28.2177C9.05712 28.2654 9.05422 28.3173 9.06667 28.3667L10.3167 34.4333C10.304 34.4712 10.304 34.5121 10.3167 34.55L15.3167 39.9167C15.3384 39.9388 15.3643 39.9565 15.3929 39.9685C15.4216 39.9805 15.4523 39.9867 15.4833 39.9867C15.5144 39.9867 15.5451 39.9805 15.5737 39.9685C15.6023 39.9565 15.6283 39.9388 15.65 39.9167L22.1833 34.7167C22.2135 34.6926 22.238 34.6622 22.2553 34.6277C22.2726 34.5931 22.2821 34.5553 22.2833 34.5167L22.1667 30.9833L24.3667 32.8167C24.4087 32.8519 24.4618 32.8713 24.5167 32.8713C24.5715 32.8713 24.6246 32.8519 24.6667 32.8167L29.9 28.6333C29.949 28.5822 29.9835 28.5189 30 28.45L30.15 25.8333L31.8167 26.95C31.8574 26.9811 31.9071 26.9979 31.9583 26.9979C32.0095 26.9979 32.0593 26.9811 32.1 26.95L36.3833 23.6167C36.4079 23.5961 36.428 23.5707 36.4424 23.542C36.4567 23.5133 36.465 23.482 36.4667 23.45L37.1667 17.8ZM21.1333 18.05L21.25 20.6667L21.45 25.3L14.4 30.0833L13.3 22.5333L21.1333 18.05ZM20.55 4.01667L20.9667 13.8667L12.6333 18.1833L11.1333 7.65L20.55 4.01667ZM6.40001 13.5333L4.38334 3.76667L10.6167 7.63333L12.1667 17.9667L9.53334 15.9667L6.40001 13.5333ZM8.83334 25.0833L7.36667 17.9833L12.8333 22.55L13.8333 29.85L11.0333 27.15L8.83334 25.0833ZM10.7333 34.2667L9.65 29.0333L14.4667 33.7833L15.25 39.05L10.7333 34.2667ZM15.7333 39.2667L14.9167 33.7167L21.5833 28.9333L21.8167 34.4L15.7333 39.2667ZM22.1667 30.3333V28.5333C22.1639 28.4637 22.134 28.3979 22.0833 28.35L20.2 26.8167L21.8667 25.65C21.8988 25.6277 21.9247 25.5977 21.9422 25.5628C21.9597 25.5278 21.9681 25.489 21.9667 25.45V25.0167L24.2833 26.7833V32.1333L22.1667 30.3333ZM29.5667 28.3333L24.8 32.1333V26.7667L29.9167 23.1L29.5667 28.3333ZM31.7167 26.3167L30.2167 25.2667L30.3667 22.6167C30.3759 22.584 30.3759 22.5494 30.3667 22.5167C30.3737 22.4893 30.3737 22.4607 30.3667 22.4333L27.15 20.3167V18L32.15 21.15L31.7167 26.3167ZM35.9667 23.2167L32.1667 26.2333L32.6 21.1333L36.65 18.3333L35.9667 23.2167Z"
      fill="currentColor"
    />
  </svg>
);
