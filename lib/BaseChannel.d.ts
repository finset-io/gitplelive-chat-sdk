import { ChannelData } from './Interfaces';
export declare class BaseChannel {
    channel_id: string;
    type: 'group' | 'open';
    name: string;
    freeze: boolean;
    profile_url?: string;
    meta?: Record<string, string>;
    total_message_count: number;
    total_file_count: number;
    created_at: number;
    updated_at: number;
    constructor(channel: ChannelData);
}