import React from 'react';
import { Box, Inline, Stack } from '@atlaskit/primitives';
import Timeline from '~src/components/common/Timeline/Timeline';
import TimelineData from '~src/components/common/Timeline/timelineMock';
import Tooltip from '@atlaskit/tooltip';
import CalendarIcon from '@atlaskit/icon/glyph/calendar';
import { formatInElevateTimezone } from '~src/utils/date-utils';
import { isWithinInterval } from 'date-fns';

const TOOLTIP_DATE_FORMAT = 'MMM dm h:mm a';
const READ_VIEW_DATE_FORMAT = 'MMM d';

const ElevateTimeline: React.FC = () => {
  const timeline = TimelineData.map(timeline => {
    return {
      what: timeline.stageLabel,
      when: (
        <Tooltip
          position="top"
          content={`
          ${formatInElevateTimezone(new Date(timeline.softEndDate), TOOLTIP_DATE_FORMAT)} 
          - 
          ${formatInElevateTimezone(new Date(timeline.softEndDate), TOOLTIP_DATE_FORMAT)} `}
        >
          <Inline>
            <CalendarIcon label="" />
            <Box>
              {`${formatInElevateTimezone(new Date(timeline.softEndDate), READ_VIEW_DATE_FORMAT)}
                -
                ${formatInElevateTimezone(new Date(timeline.softEndDate), READ_VIEW_DATE_FORMAT)} `}
            </Box>
          </Inline>
        </Tooltip>
      ),
      who: timeline.applicableFor,
      active: isWithinInterval(new Date(), {
        start: new Date(timeline.startDate),
        end: new Date(timeline.softEndDate),
      }),
    };
  });
  return (
    <Stack space="space.200">
      <Box>Timeline base on Pacific Time (PT)</Box>
      <Timeline timeline={timeline} />
    </Stack>
  );
};

export default ElevateTimeline;
