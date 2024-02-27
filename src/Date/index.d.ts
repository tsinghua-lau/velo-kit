export interface DateToChineseOptions {
    dateString: string | Date;
    format?: string;
    chinese?: boolean;
    symbol?: string;
    add0?: boolean;
}
/**
 * 日期转换
 * @param {*} dateString
 * @returns
 */
export declare function dateToChinese(options: DateToChineseOptions): string;
