import { FileData, FilterType, MessageData } from './Interfaces';
import { BaseUser } from './BaseUser';
export declare class BaseMessage {
    type: 'text' | 'file';
    message_id: number;
    channel_id: string;
    created_at: number;
    updated_at: number;
    user: BaseUser;
    content?: string;
    filter?: {
        origin_content: string;
        type: FilterType[];
    };
    file?: FileData;
    meta?: Record<string, string>;
    constructor(message: MessageData);
}