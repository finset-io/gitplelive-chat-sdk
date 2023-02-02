export declare const ErrorType: {
    readonly AUTHORIZATION_ERROR: {
        readonly code: 4001;
        readonly name: "unauthorized";
        readonly message: "Unauthorized.";
    };
    readonly INVALID_PARAMETERS: {
        readonly code: 60101;
        readonly name: "invalid_parameters";
        readonly message: "Check the sdk initialization init parameters.";
    };
    readonly INVALID_TOKEN: {
        readonly code: 60102;
        readonly name: "invalid_token";
        readonly message: "invalid session token.";
    };
    readonly EXPIRED_TOKEN: {
        readonly code: 60103;
        readonly name: "expired_token";
        readonly message: "Generate token again.";
    };
    readonly INVALID_CHANNEL_ID: {
        readonly code: 60104;
        readonly name: "invalid_channel_id";
        readonly message: "Invalid channel ID.";
    };
    readonly SERVER_NOT_RESPONDING: {
        readonly code: 60901;
        readonly name: "server_not_responding";
        readonly message: "The server is not responding.";
    };
    readonly UNABLE_CONNECT_ERROR: {
        readonly code: 60902;
        readonly name: "unable_to_connect";
        readonly message: "Unable to connect to the server.";
    };
    readonly UNABLE_SUBSCRIBE_ERROR: {
        readonly code: 60903;
        readonly name: "unable_to_subscribe_event";
        readonly message: "Unable to subscribe to the event.";
    };
    readonly NOT_CONNECTED: {
        readonly code: 60904;
        readonly name: "not_connected";
        readonly message: "The device is not connected to the server.";
    };
    readonly UNKNOWN_ERROR: {
        readonly code: 60999;
        readonly name: "unknown_error";
        readonly message: "Check the message on the console.";
    };
};
export type ErrorType = (typeof ErrorType)[keyof typeof ErrorType];
export declare class GitpleLiveError extends Error {
    code: number;
    meta: {};
    constructor(error: ErrorType);
    toString(): string;
}