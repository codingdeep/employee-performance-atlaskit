import React from 'react';
import Icon, { CustomGlyphProps } from '@atlaskit/icon';

const CustomGlyph = (_props: CustomGlyphProps) => (
  <svg width="24" height="24" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_1729_140)">
      <path
        d="M93 3C93 1.34315 91.6569 0 90 0H3C1.34315 0 0 1.34315 0 3V90C0 91.6569 1.34315 93 3 93H90C91.6569 93 93 91.6569 93 90V3Z"
        fill="none"
      />
      <path
        d="M18.7869 59.9495C18.979 58.1201 20.0239 56.4888 21.6054 55.5494L51.4194 37.8404C54.1854 36.1974 57.7596 37.1078 59.4026 39.8738C61.0456 42.6398 60.1352 46.2141 57.3692 47.857L27.5552 65.5661C23.4348 68.0136 18.2865 64.7158 18.7869 59.9495Z"
        fill="url(#paint0_linear_1729_140)"
      />
      <path
        d="M37.1232 71.0575C37.2125 69.0146 38.3044 67.1474 40.0411 66.0678L76.2893 43.536C76.8933 43.1605 77.6852 43.5179 77.8033 44.2193L78.6652 49.3395C79.3386 53.3399 77.5285 57.3508 74.0831 59.4924L46.5804 76.5881C42.351 79.2171 36.9057 76.0327 37.1232 71.0575Z"
        fill="url(#paint1_linear_1729_140)"
      />
      <path
        d="M22.0286 44.5616C23.8619 45.4662 26.0234 45.4078 27.8052 44.4057L65.0302 23.4693C65.6502 23.1206 65.7182 22.2543 65.1601 21.8132L61.0849 18.5921C57.903 16.077 53.5169 15.733 49.9818 17.7213L21.733 33.6091C17.3918 36.0507 17.562 42.3577 22.0286 44.5616Z"
        fill="url(#paint2_linear_1729_140)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_1729_140"
        x1="34.0264"
        y1="48.1716"
        x2="39.9761"
        y2="58.1882"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0052CC" />
        <stop offset="0.895833" stopColor="#2380FB" />
        <stop offset="1" stopColor="#2684FF" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_1729_140"
        x1="53.8135"
        y1="57.5069"
        x2="60.3528"
        y2="68.0271"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0052CC" />
        <stop offset="0.895833" stopColor="#2380FB" />
        <stop offset="1" stopColor="#2684FF" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_1729_140"
        x1="41.9502"
        y1="36.4502"
        x2="35.8779"
        y2="25.6536"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0052CC" />
        <stop offset="0.895833" stopColor="#2380FB" />
        <stop offset="1" stopColor="#2684FF" />
      </linearGradient>
      <clipPath id="clip0_1729_140">
        <rect width="93" height="93" fill="none" />
      </clipPath>
    </defs>
  </svg>
);

const ElevateIcon = (props: CustomGlyphProps) => {
  return <Icon glyph={() => CustomGlyph(props)} primaryColor="#1973ed" label="Elevate icon" />;
};

export default ElevateIcon;
