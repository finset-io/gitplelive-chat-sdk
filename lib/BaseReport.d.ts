import { BaseChannel } from './BaseChannel';
import { BaseMessage } from './BaseMessage';
import { BaseUser } from './BaseUser';
import { ReportData } from './Interfaces';
export declare class BaseReport {
    report_id: string;
    report_type: 'user' | 'channel' | 'message';
    report_category: 'general' | 'spam' | 'profanity' | 'etc' | 'custom';
    reporting_user: BaseUser;
    created_at: number;
    updated_at: number;
    reason?: string;
    user?: BaseUser;
    channel?: BaseChannel;
    message?: BaseMessage;
    constructor(report: ReportData);
}