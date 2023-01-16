import EventEmitter from 'events';
export declare class LiveEventEmitter {
    protected emitter: EventEmitter;
    on: (event: string, cb: any) => EventEmitter;
}