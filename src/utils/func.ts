import dayjs from 'dayjs';

export const displayDateString = (date: any, format: string = 'YYYY-MM-DD HH:mm', utc: boolean = false) => {
    if (!date) return '-';

    if (utc) {
        return (dayjs(date).format(format) + ' (UTC' + dayjs(date).format('Z')?.split(':')?.[0] + ')').toUpperCase();
    } else {
        return dayjs(date).format(format);
    }
};
