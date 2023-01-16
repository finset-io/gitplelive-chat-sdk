import { BaseChannel } from './BaseChannel';
import { BaseUser } from './BaseUser';
import { ChannelData } from './Interfaces';
export declare class GroupChannel extends BaseChannel {
    members?: BaseUser[];
    managers?: BaseUser[];
    unread?: Record<string, number>;
    read_receipt?: Record<string, number>;
    delivery_receipt?: Record<string, number>;
    last_message?: Record<string, number>;
    constructor(channel: ChannelData);
}