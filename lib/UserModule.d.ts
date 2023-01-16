import { BaseUser } from './BaseUser';
import { UserUpdateParams } from './Interfaces';
import { LiveEventEmitter } from './LiveEventEmitter';
export declare class UserModule extends LiveEventEmitter {
    #private;
    constructor(appSubId: string, userSubId: string, token: string, apiUrl: string, debug?: boolean);
    private getAuth;
    set(data: Record<string, any>): void;
    me(): Promise<BaseUser>;
    updateUser(updateItem: UserUpdateParams): Promise<BaseUser>;
    updateMeta(meta: Record<string, string>): Promise<BaseUser>;
    deleteMeta(keys: string[]): Promise<BaseUser>;
}
//# sourceMappingURL=UserModule.d.ts.map