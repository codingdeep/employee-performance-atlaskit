import React from 'react';
import { Box, Flex, xcss } from '@atlaskit/primitives';
import { token } from '@atlaskit/tokens';

interface Props {
  timeline: {
    what?: React.ReactNode;
    who?: React.ReactNode;
    when?: React.ReactNode;
    active?: boolean;
  }[];
}
const Timeline: React.FC<Props> = ({ timeline }) => {
  console.log(timeline);
  return (
    <Flex direction="column" gap="space.100">
      <Flex justifyContent="space-around">
        {timeline.map(({ what, when, who, active = false }, index) => (
          <Flex
            key={`${who}-${index}`}
            direction="column"
            gap="space.100"
            alignItems="center"
            justifyContent="end"
            xcss={[flex1Style, timelineStyle]}
          >
            {index % 2 === 0 ? (
              <>
                <Box>{who}</Box>
                <Box>{what}</Box>
              </>
            ) : (
              <Box>{when}</Box>
            )}
            <Box xcss={verticalLineStyle} />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

const verticalLineStyle = xcss({
  height: 'size.500',
  width: '1px',
  //eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  backgroundColor: token('color.icon.subtle'),
  '::after': {
    content: '""',
    position: 'absolute',
    width: `${token('space.075')}`,
    height: `${token('space.075')}`,
    borderRadius: 'border.radius.circle',
    transform: 'translate(-50%, -50%)',
  },
});

export const flex1Style = xcss({
  flex: 1,
});
const timelineStyle = xcss({
  textAlign: 'center',
  position: 'absolute',
});

export default Timeline;
