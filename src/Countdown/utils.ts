const DAY_MILLISECONDS = 24 * 60 * 60 * 1000; // 一天毫秒数
const HOURS_MILLISECONDS = 60 * 60 * 1000; // 小时毫秒
const MINUTES_MILLISECONDS = 60 * 1000; // 分钟毫秒

const formatTime = (val: number): string => {
  if (val <= 0) return '00';
  return val < 10 ? `0${val}` : `${val}`;
};

const getTime = (format: string, timeNum: number) => {
  let d = timeNum;

  // d在全局，所以一个循环下来，每次循环d的值都是上一次循环改变的，比如传进来108002108——>108002->1800->30
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let [_, s, m, h] = [1000, 60, 60, 24].map((i) => {
    let num = d % i;

    d = Math.floor(d / i);

    return num;
  });
  // [1毫秒，3秒，0, 0]

  if (timeNum > DAY_MILLISECONDS && format.indexOf('d') === -1) {
    // h += d * 24;
    h = h + d * 24;
  }

  if (timeNum > HOURS_MILLISECONDS && format.indexOf('h') === -1) {
    m += h * 60;
  }

  if (timeNum > MINUTES_MILLISECONDS && format.indexOf('m') === -1) {
    s += m * 60;
  }

  return {
    dd: formatTime(d),
    hh: formatTime(h),
    mm: formatTime(m),
    ss: formatTime(s),
    d,
    h,
    m,
    s,
  };
};

type TimeType = 'dd' | 'hh' | 'mm' | 'ss';

export const getTimeItems = (format: string, timeNum: number) => {
  // 匹配format
  const timeArr: Array<string> = format!.match(/[a-zA-Z]{1,3}/g) || []; //['hh', 'mm', 'ss']
  // 匹配字符
  let symbolArr = format.match(/[\u4e00-\u9fa5]+|[^a-zA-Z]/g) || []; // [':', ':']

  const time = getTime(format, timeNum);

  return timeArr.map((item, index) => {
    return {
      num: time[item.toLowerCase() as TimeType],
      symbol: symbolArr[index],
    };
  });
};
