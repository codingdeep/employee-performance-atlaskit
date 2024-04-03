import React from 'react';
import Icon, { CustomGlyphProps } from '@atlaskit/icon';

const ScoreCardGlyph = ({ fill, ...rest }: CustomGlyphProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C12.5523 19 13 19.4477 13 20C13 20.5523 12.5523 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 12.5523 20.5523 13 20 13C19.4477 13 19 12.5523 19 12C19 8.13401 15.866 5 12 5ZM15.7071 9.2929C16.0976 9.68342 16.0976 10.3166 15.7071 10.7071L11.7071 14.7071C11.5196 14.8946 11.2652 15 11 15C10.7348 15 10.4804 14.8946 10.2929 14.7071L8.29289 12.7071C7.90236 12.3166 7.90236 11.6834 8.29289 11.2929C8.68341 10.9024 9.31657 10.9024 9.7071 11.2929L11 12.5858L14.2929 9.2929C14.6834 8.90237 15.3166 8.90237 15.7071 9.2929ZM19.7939 14.0723C20.3059 14.2794 20.5529 14.8624 20.3458 15.3744C19.4335 17.6286 17.636 19.4278 15.3829 20.3423C14.8712 20.55 14.288 20.3035 14.0803 19.7918C13.8726 19.28 14.119 18.6968 14.6308 18.4891C16.3826 17.7781 17.7826 16.3768 18.4918 14.6241C18.699 14.1122 19.282 13.8651 19.7939 14.0723Z"
      fill={fill}
    />
  </svg>
);

const ScoreCardIcon = (props: CustomGlyphProps) => {
  return <Icon glyph={() => ScoreCardGlyph(props)} label="Task completed" />;
};

export default ScoreCardIcon;
