import { BannedUserData, UserData } from './Interfaces';
export declare class BaseUser {
    user_id: string;
    name: string;
    profile_url?: string;
    meta?: Record<string, string>;
    created_at: number;
    updated_at: number;
    joined_at?: number;
    constructor(user: UserData);
}
export declare class BannedUser {
    user: BaseUser;
    start_at: number;
    end_at: number;
    constructor(bannedUser: BannedUserData);
}