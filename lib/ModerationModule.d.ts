import { BaseReport } from './BaseReport';
import { ReportCreateParams } from './Interfaces';
import { LiveEventEmitter } from './LiveEventEmitter';
export declare class ModerationModule extends LiveEventEmitter {
    constructor(appSubId: string, userSubId: string, token: string, apiUrl: string, debug?: boolean);
    createReport(createItem: ReportCreateParams): Promise<BaseReport>;
}