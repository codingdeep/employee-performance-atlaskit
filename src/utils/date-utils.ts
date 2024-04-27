//import { intervalToDuration, formatDuration } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';

export const elevateTimezone = 'America/Los_Angeles';
export const elevateDateFormatString = 'MMM d, yyyy';
export const daysThresholdForRelativeTime = 30;

/*
 * Use this function if you have a date string with timezone information in it
 * For an example - 2023-01023T15:00:00
 * date object is the mandatory argument to pass to this function
 * If the date string doesn't contain TZ info - then use format function from date-fns directly instead
 * */

export const formatInElevateTimezone = (date: Date, formatStr: string): string => {
  return formatInTimeZone(date, elevateTimezone, formatStr || elevateDateFormatString);
};
