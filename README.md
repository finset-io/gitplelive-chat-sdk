# gitplelive-chat-sdk
Gitple Live Chat SDK

## Table of Contents
  1. [Install](#Install)
  1. [Import and Init](#import-and-init)
  1. [Use](#use)
     - [Init](#init)
     - [Connect](#connect)
     - [Disconnect](#disconnect)
     - [Event Listener](#event-listener)
     - [Group Channel](#group-channel)
     - [User](#user)
  1. [Error Code](#error-code)


## Install
```bash
# npm
$ npm i gitplelive-chat-sdk

# yarn
$ yarn add gitplelive-chat-sdk
```
___

## Import and Init
### es6
```javascript
import { ChatClient } from 'gitplelive-chat-sdk';

const config = {
  host, // gitplelive api host (ex. live.example.com ), Without http:// or https:// or url path
  app_id,
};

const gitpleLiveChatClient = new ChatClient(config);
```

### browser
```javascript
<script src="./node_modules/gitplelive-chat-sdk/dist/chat.min.js"></script>

const config = {
  host,
  app_id,
};

const gitpleLiveChatClient = new GitpleLiveChat.ChatClient(config);
```
___

## Use
### Get User Session Token
- api (https://guide-guest.gitplelive.io/api/users/token/)
  - POST https://{Gitple Live API Host}/v1/users/{USER_ID}/token
  - header
    ```javascript
    {
      APP_API_KEY: 'APP API KEY',
      APP_ID: 'APP ID'
    }
  - body
    ```javascript
    {
      "expires_at": 1698987914000 // unix timestamp in milliseconds
    }
    ```
  - response
    ```javascript
    {
      token: 'TOKEN'
      expires_at: 1698987914000
    }
    ```

### Init
- Initialize the SDK.
```javascript
try {
  const config = {
    host,
    app_id,
  };
  // es6
  const gitpleLiveChatClient = new ChatClient(config);

  // browser
  const gitpleLiveChatClient = new GitpleLiveChat.ChatClient(config);
} catch (error) {
  // handle error
}
```
### Connect
```javascript
try {
  const userInfo = { user_id, session_token };
  await gitpleLiveChatClient.connectUser(userInfo);
} catch (error) {
  // handle error
}
```
### Disconnect
- Use to terminate a chat service connection.
```javascript
try {
  await gitpleLiveChatClient.disconnectUser();
} catch (error) {
  // handle error
}
```
### Event Listener
#### General Event
```javascript
// error
gitpleLiveChatClient.on('error', () => {
  // handle event
});
```
#### Connect Event
```javascript
// connect success
gitpleLiveChatClient.connection.on('connected', () => {
  // handle event
});
// reconnect start
gitpleLiveChatClient.connection.on('reconnect_start', () => {
  // handle event
});
// reconnect success
gitpleLiveChatClient.connection.on('reconnect_success', () => {
  // handle event
});
// reconnect fail
gitpleLiveChatClient.connection.on('reconnect_failed', () => {
  // handle event
});
// disconnect
gitpleLiveChatClient.connection.on('disconnected', () => {
  // handle event
});
```
#### Group Channel Event
- payload
  - channel
    ```javascript
      channel: BaseChannel {
        channel_id: string;
        type: 'group' | 'open';
        name: string;
        freeze: boolean;
        profile_url?: string;
        meta?: {};
        total_message_count: number;
        total_file_count: number;
        created_at: number;
        updated_at: number;
      }
    ```
  - user
    ```javascript
      user: BaseUser {
        user_id: string;
        name: string;
        profile_url?: string;
        meta?: {};
        created_at: number;
        updated_at: number;
        joined_at?: number;
      }
    ```
  - message
    ```javascript
      message: BaseMessage {
        type: 'text' | 'file';
        message_id: number;
        channel_id: string;
        created_at: number;
        updated_at: number;
        user: BaseUser;
        content?: string;
        file?: FileData;
        meta?: {};
      }
    ```
```javascript
// update channel
gitpleLiveChatClient.groupChannel.on('group:channel_update', (channel) => {

  // handle event
});
// delete channel
gitpleLiveChatClient.groupChannel.on('group:channel_delete', (channel) => {

  // handle event
});
// join channel
gitpleLiveChatClient.groupChannel.on('group:channel_join', (channel, user) => {

  // handle event
});
// leave channel
gitpleLiveChatClient.groupChannel.on('group:channel_leave', (channel, user) => {

  // handle event
});
// create manager
gitpleLiveChatClient.groupChannel.on('group:channel_manager_create', (channel) => {

  // handle event
});
// delete manager
gitpleLiveChatClient.groupChannel.on('group:channel_manager_delete', (channel) => {

  // handle event
});
// freeze channel
gitpleLiveChatClient.groupChannel.on('group:channel_freeze', (channel) => {

  // handle event
});
// unfreeze channel
gitpleLiveChatClient.groupChannel.on('group:channel_unfreeze', (channel) => {

  // handle event
});
// user ban
gitpleLiveChatClient.groupChannel.on('group:channel_ban', (channel) => {

  // handle event
});
// user unban
gitpleLiveChatClient.groupChannel.on('group:channel_unban', (channel) => {

  // handle event
});
// new message
gitpleLiveChatClient.groupChannel.on('group:message_send', (channel) => {

  // handle event
});
// update message
gitpleLiveChatClient.groupChannel.on('group:message_update', (channel) => {

  // handle event
});
// delete message
gitpleLiveChatClient.groupChannel.on('group:message_delete', (channel) => {

  // handle event
});
// read receipt message
gitpleLiveChatClient.groupChannel.on('group:channel_message_read_event', (channel) => {

  // handle event
});
// delivered receipt message
gitpleLiveChatClient.groupChannel.on('group:channel_message_delivered_event', (channel) => {

  // handle event
});
```
#### User Event
- payload
  - user
    ```javascript
      user: BaseUser {
        user_id: string;
        name: string;
        profile_url?: string;
        meta?: {};
        created_at: number;
        updated_at: number;
        joined_at?: number;
      }
    ```
```javascript
// update me
gitpleLiveChatClient.user.on('user_update', (user) => {

  // handle event
});
// delete me
gitpleLiveChatClient.user.on('user_delete', (user) => {

  // handle event
});
```
### User
- payload
  - user
    ```javascript
      user: BaseUser {
        user_id: string;
        name: string;
        profile_url?: string;
        meta?: {};
        created_at: number;
        updated_at: number;
        joined_at?: number;
      }
    ```
```javascript
// get me
try {
  const user = await gitpleLiveChatClient.user.me();
} catch (error) {
  // handle error
}
// update
try {
  const params: UserUpdateParams {
    name?: string;
    profile_url?: string;
  }
  const user = await gitpleLiveChatClient.user.updateUser(params);
} catch (error) {
  // handle error
}
// update meta
try {
  const params = {key1: 'value1', key2: 'value2', ...};
  const user = await gitpleLiveChatClient.user.updateMeta(params);
} catch (error) {
  // handle error
}
// delete meta
try {
  const params = ['key1', 'key2', ...];
  const user = await gitpleLiveChatClient.user.updateMeta(deleteMeta);
} catch (error) {
  // handle error
}
```
### Group Channel
- payload
  - channel
    ```javascript
      channel: GroupChannel {
        channel_id: string;
        type: 'group' | 'open';
        name: string;
        freeze: boolean;
        profile_url?: string;
        meta?: {};
        total_message_count: number;
        total_file_count: number;
        members?: BaseUser[];   // only channel list
        managers?: BaseUser[];   // only channel list
        unread?: {};   // only channel list
        read_receipt?: {};   // only channel list
        delivery_receipt?: {};   // only channel list
        last_message?: {};   // only channel list
        created_at: number;
        updated_at: number;
      }
    ```
```javascript
// get channel
try {
  const channel_id = 'Group Channel ID';
  const channel = await gitpleLiveChatClient.groupChannel.getChannel(channel_id);
} catch (error) {
  // handle error
}
// get channel list
try {
  const params: GroupChannelFindParams {
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
  const channels = await gitpleLiveChatClient.groupChannel.getChannelList(params);
} catch (error) {
  // handle error
}
// get joined channel list
try {
  const params: GroupChannelFindParams {
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
  const channels = await gitpleLiveChatClient.groupChannel.getJoinedChannelList(params);
} catch (error) {
  // handle error
}
// get channel members
try {
  const channel_id = 'Group Channel ID';
  const channel = await gitpleLiveChatClient.groupChannel.getMemberList(channel_id);
} catch (error) {
  // handle error
}
// get channel managers - only manager
try {
  const channel_id = 'Group Channel ID';
  const channel = await gitpleLiveChatClient.groupChannel.getManagerList(channel_id);
} catch (error) {
  // handle error
}
// create channel
try {
  const params: GroupChannelCreateParams {
    channel_id: string;
    name: string;
    profile_url?: string;
    members?: string[];
    reuse?: boolean;
    meta?: {};
  }
  const channels = await gitpleLiveChatClient.groupChannel.createChannel(params);
} catch (error) {
  // handle error
}
// update channel - only manager
try {
  const params: GroupChannelUpdateParams {
    name?: string;
    profile_url?: string;
  }
  const channels = await gitpleLiveChatClient.groupChannel.updateChannel(params);
} catch (error) {
  // handle error
}
// delete channel - only manager
try {
  const params: GroupChannelUpdateParams {
    name?: string;
    profile_url?: string;
  }
  const channels = await gitpleLiveChatClient.groupChannel.updateChannel(params);
} catch (error) {
  // handle error
}
// join channel
try {
  const channel_id = 'Group Channel ID';
  const channels = await gitpleLiveChatClient.groupChannel.joinChannel(channel_id);
} catch (error) {
  // handle error
}
// leave channel
try {
  const channel_id = 'Group Channel ID';
  const channels = await gitpleLiveChatClient.groupChannel.leaveChannel(channel_id);
} catch (error) {
  // handle error
}
// register manager
try {
  const channel_id = 'Group Channel ID';
  const user_id = 'User ID;
  const channels = await gitpleLiveChatClient.groupChannel.registerManager(channel_id, user_id);
} catch (error) {
  // handle error
}
// register manager
try {
  const channel_id = 'Group Channel ID';
  const user_id = 'User ID;
  const channels = await gitpleLiveChatClient.groupChannel.deleteManager(channel_id, user_id);
} catch (error) {
  // handle error
}
// freeze channel
try {
  const channel_id = 'Group Channel ID';
  const channels = await gitpleLiveChatClient.groupChannel.freezeChannel(channel_id, true);
} catch (error) {
  // handle error
}
// unfreeze channel
try {
  const channel_id = 'Group Channel ID';
  const channels = await gitpleLiveChatClient.groupChannel.freezeChannel(channel_id, false);
} catch (error) {
  // handle error
}
// update channel meta
try {
  const channel_id = 'Group Channel ID';
  const params = {key1: 'value1', key2: 'value2', ...};
  const channels = await gitpleLiveChatClient.groupChannel.updateMeta(channel_id, params);
} catch (error) {
  // handle error
}
// delete channel meta
try {
  const channel_id = 'Group Channel ID';
  const params = ['key1', 'key2', ...];
  const channels = await gitpleLiveChatClient.groupChannel.updateMeta(channel_id, params);
} catch (error) {
  // handle error
}
// read message
try {
  // if single channel
  const channel_id = 'Group Channel ID';
  const channels = await gitpleLiveChatClient.groupChannel.readMessage(channel_id);

  // if multiple channels
  const channel_ids = ['Group Channel ID', 'Group Channel ID', ...];
  const channels = await gitpleLiveChatClient.groupChannel.readMessage(channel_ids);
} catch (error) {
  // handle error
}
// delivered message
try {
  const channel_id = 'Group Channel ID';
  const channels = await gitpleLiveChatClient.groupChannel.deliveredMessage(channel_id);
} catch (error) {
  // handle error
}
// user ban
try {
  const channel_id = 'Group Channel ID';
  const params: GroupChannelBanParams {
    user_id: string;
    seconds: number;
    reason?: string;
  }
  const channels = await gitpleLiveChatClient.groupChannel.ban(channel_id, params);
} catch (error) {
  // handle error
}
// user unban
try {
  const channel_id = 'Group Channel ID';
  const user_id = 'User ID';
  const channels = await gitpleLiveChatClient.groupChannel.unban(channel_id, user_id);
} catch (error) {
  // handle error
}
// get banned list - only manager
try {
  const channel_id = 'Group Channel ID';
  const channels = await gitpleLiveChatClient.groupChannel.getBannedList(channel_id);
} catch (error) {
  // handle error
}
// get online member in channel
try {
  const channel_id = 'Group Channel ID';
  const channels = await gitpleLiveChatClient.groupChannel.getOnlineMemberList(channel_id);
} catch (error) {
  // handle error
}
// send message
try {
  const channel_id = 'Group Channel ID';

  // if text
  const params: GroupChannelMessageParams {
    type: 'text';
    content: string;
    meta?: {};
  }
  // if file
  const params: GroupChannelMessageParams {
    type: 'file';
    file: FILE;
    meta?: {};
  }

  const channels = await gitpleLiveChatClient.groupChannel.sendMessage(channel_id, params);
} catch (error) {
  // handle error
}
// get message list
try {
  const channel_id = 'Group Channel ID';

  const params: GroupChannelMessageFindParams {
    limit?: number;
    mode?: 'prev' | 'next';
    type?: 'text' | 'file';
    content?: string;
    base_message_id?: number;
  }

  const channels = await gitpleLiveChatClient.groupChannel.getMessageList(channel_id, params);
} catch (error) {
  // handle error
}
// delete list
try {
  const channel_id = 'Group Channel ID';
  const message_id = MESSAGE_ID // number;

  const channels = await gitpleLiveChatClient.groupChannel.deleteMessage(channel_id, message_id);
} catch (error) {
  // handle error
}
// update message meta
try {
  const channel_id = 'Group Channel ID';
  const message_id = MESSAGE_ID // number;
  const params = {key1: 'value1', key2: 'value2', ...};
  const channels = await gitpleLiveChatClient.groupChannel.updateMessageMeta(channel_id, message_id, params);
} catch (error) {
  // handle error
}
// delete message meta
try {
  const channel_id = 'Group Channel ID';
  const message_id = MESSAGE_ID // number;
  const params = ['key1', 'key2', ...];
  const channels = await gitpleLiveChatClient.groupChannel.deleteMessageMeta(channel_id, params);
} catch (error) {
  // handle error
}
```
#### Error Code
- Server
  - https://guide-guest.gitplelive.io/code/error/
- SDK
|code|name|Desc|
|:---|:---|:---|
|4001|unauthorized|Unauthorized.
|60101|invalid_parameters|Check the sdk initialization init parameters.
|60102|invalid_token|invalid session token.
|60103|expired_token|Generate token again.
|60901|server_not_responding|The server is not responding.
|60902|unable_to_connect|Unable to connect to the server.
|60903|unable_to_subscribe_event|Unable to subscribe to the event.
|60904|not_connected|The device is not connected to the server.
|60999|unknown_error|Check the message on the console.
