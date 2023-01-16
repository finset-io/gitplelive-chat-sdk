import { ErrorType, GitpleLiveError } from './lib/error';
import { GroupChannelModule } from './lib/GroupChannelModule';
import { Config, UserConnectParams, ConnectionEvent, GroupChannelEvent, UserEvent, UserUpdateParams, GroupChannelUpdateParams, GroupChannelCreateParams, GroupChannelFindParams, GroupChannelBanParams, GroupChannelMessageParams, GroupChannelMessageFindParams } from './lib/Interfaces';
import { LiveEventEmitter } from './lib/LiveEventEmitter';
import { ConnectionModule } from './lib/ConnectionModule';
import { BaseMessage } from './lib/BaseMessage';
import { BaseChannel } from './lib/BaseChannel';
import { BaseUser } from './lib/BaseUser';
import { GroupChannel } from './lib/GroupChannel';
import { UserModule } from './lib/UserModule';
import { GroupChannelMessage } from './lib/GroupChannelMessage';
export { Config, UserConnectParams, ErrorType, GitpleLiveError, ConnectionEvent, UserEvent, GroupChannelEvent, BaseUser, BaseChannel, BaseMessage, GroupChannel, GroupChannelMessage, UserUpdateParams, GroupChannelCreateParams, GroupChannelUpdateParams, GroupChannelFindParams, GroupChannelBanParams, GroupChannelMessageParams, GroupChannelMessageFindParams, };
export declare class ChatClient extends LiveEventEmitter {
    connection: ConnectionModule;
    groupChannel: GroupChannelModule;
    user: UserModule;
    constructor(config: Config);
    connectUser(info: UserConnectParams): Promise<void>;
    disconnectUser(): void;
}