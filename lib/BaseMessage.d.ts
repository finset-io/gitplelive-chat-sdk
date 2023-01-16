import { FileData, MessageData } from './Interfaces';
import { BaseUser } from './BaseUser';
export declare class BaseMessage {
    type: 'text' | 'file';
    message_id: number;
    channel_id: string;
    created_at: number;
    updated_at: number;
    user: BaseUser;
    content?: string;
    file?: FileData;
    meta?: Record<string, string>;
    constructor(message: MessageData);
}