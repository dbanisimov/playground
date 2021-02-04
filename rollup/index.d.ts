export declare function helloWorld(from: string): void;

/**
 * @deprecated
 */
export declare function byeMars(): string;

export declare const SDK_VERSION: string;

/**
 * Welcome to Venus
 */
export declare class Venus {
    state: State;

    start(): void;
    end(): void;
}

export interface State {
    temp: number;
    isPretty: boolean;
}

export declare class Earth implements Planet {

}

export declare interface Planet {
    name: string;
    weight: number;
}