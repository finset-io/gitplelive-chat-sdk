import { BaseUser } from './BaseUser';
export interface Config {
    host: string;
    app_id: string;
    debug?: Record<string, any>;
}
export interface UserConnectParams {
    user_id: string;
    session_token?: string;
}
export interface UserData {
    user_id: string;
    name: string;
    profile_url?: string;
    meta?: Record<string, string>;
    joined_at?: number;
    created_at: number;
    updated_at: number;
}
export interface ReportData {
    report_id: string;
    report_type: 'user' | 'channel' | 'message';
    report_category: 'general' | 'spam' | 'profanity' | 'etc' | 'custom';
    reason?: string;
    reporting_user: UserData;
    user?: UserData;
    channel?: ChannelData;
    message?: MessageData;
    created_at: number;
    updated_at: number;
}
export interface BannedUserData {
    user: UserData;
    reason: string;
    start_at: number;
    end_at: number;
}
export interface ChannelData {
    channel_id: string;
    name: string;
    type: 'group' | 'open';
    profile_url: string;
    freeze: boolean;
    total_message_count: number;
    total_file_count: number;
    created_at: number;
    updated_at: number;
    meta?: Record<string, string>;
    members?: Record<string, BaseUser>[];
    managers?: Record<string, BaseUser>[];
    unread?: Record<string, number>;
    read_receipt?: Record<string, number>;
    delivery_receipt?: Record<string, number>;
    last_message?: any;
}
export interface FileData {
    type: string;
    name: string;
    url: string;
    size: number;
}
export interface MessageData {
    message_id: number;
    channel_id: string;
    type: 'text' | 'file';
    user: UserData;
    meta?: Record<string, string>;
    file?: FileData;
    content?: string;
    created_at: number;
    updated_at: number;
}
export declare enum ConnectionEvent {
    connected = "connected",
    reconnectStart = "reconnect_start",
    reconnectSuccess = "reconnect_success",
    reconnectFailed = "reconnect_failed",
    disconnected = "disconnected"
}
export declare enum UserEvent {
    userUpdate = "user_update",
    userDelete = "user_delete"
}
export declare enum InternalUserEvent {
    userJoinedChannel = "user_joined_channel",
    userBecomeManager = "user_become_manager"
}
export declare enum GroupChannelEvent {
    channelUpdated = "group:channel_update",
    channelDeleted = "group:channel_delete",
    channelJoined = "group:channel_join",
    channelLeft = "group:channel_leave",
    managerCreated = "group:channel_manager_create",
    managerDeleted = "group:channel_manager_delete",
    channelFrozen = "group:channel_freeze",
    channelUnfrozen = "group:channel_unfreeze",
    channelBan = "group:channel_ban",
    channelUnBan = "group:channel_unban",
    messageCreate = "group:message_send",
    messageUpdated = "group:message_update",
    messageDeleted = "group:message_delete",
    messageRead = "group:channel_message_read_event",
    messageDelivered = "group:channel_message_delivered_event"
}
export declare enum OpenChannelEvent {
    channelUpdated = "open:channel_update",
    channelDeleted = "open:channel_delete",
    managerCreated = "open:channel_manager_create",
    managerDeleted = "open:channel_manager_delete",
    channelFrozen = "open:channel_freeze",
    channelUnfrozen = "open:channel_unfreeze",
    channelBan = "open:channel_ban",
    channelUnBan = "open:channel_unban",
    messageReceived = "open:message_send",
    messageUpdated = "open:message_update",
    messageDeleted = "open:message_delete"
}
export interface UserUpdateParams {
    name?: string;
    profile_url?: string;
}
export interface GroupChannelCreateParams {
    channel_id: string;
    name: string;
    profile_url?: string;
    members?: string[];
    reuse?: boolean;
    meta?: Record<string, string>;
}
export interface GroupChannelUpdateParams {
    name?: string;
    profile_url?: string;
}
export interface GroupChannelFindParams {
    limit?: number;
    show_members?: boolean;
    show_managers?: boolean;
    show_read_receipt?: boolean;
    show_delivery_receipt?: boolean;
    show_unread?: boolean;
    show_last_message?: boolean;
    name?: string;
    include_members?: string;
    next?: string;
}
export interface GroupChannelBanParams {
    user_id: string;
    seconds: number;
    reason?: string;
}
export interface GroupChannelMessageParams {
    type: 'text' | 'file';
    content?: string;
    file?: File;
    meta?: Record<string, string>;
}
export interface GroupChannelMessageFindParams {
    limit?: number;
    mode?: 'prev' | 'next';
    type?: 'text' | 'file';
    content?: string;
    base_message_id?: number;
}
export interface ReportCreateParams {
    report_type: 'user' | 'channel' | 'message';
    reason?: string;
    user_id?: string;
    channel_type?: 'group' | 'open';
    channel_id?: string;
    message_id?: number;
}
export interface ReportFindParams {
    limit?: number;
    report_type?: 'user' | 'channel' | 'message';
    next?: string;
}