import { intervalToDuration, formatDuration } from 'date-fns';
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

export const getCheese = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('cheese');
    }, 2000);
  });
};

export const getString = (): string => {
  const isActive = false;
  if (isActive) {
    return 'Status is active';
  } else {
    return 'Status is not active';
  }
};

export const makeDough = (cheese: any) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Dough is made with ${cheese}`);
    }, 2000);
  });
};

export const makePizza = (dough: any) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${dough}. Now pizza is ready`);
    }, 2000);
  });
};

//resolved by callback

const getBanana = (cb: (banana: string) => void) => {
  setTimeout(() => {
    cb('banana');
  }, 3000);
};

const blendarIt = (banana: string, cb: (blendaredBanana: string) => void) => {
  setTimeout(() => {
    cb('banana is blendared');
  }, 3000);
};

const mixedWithMilk = (blendaredBanna: string, cb: (milkShake: string) => void) => {
  setTimeout(() => {
    cb('Finally milk shake is prepared');
  }, 3000);
};
export { getBanana, blendarIt, mixedWithMilk };
