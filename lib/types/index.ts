export type SendData = {
    sendToAddress: string;
    sendToAmount: string;
}

export enum FormStatus {
    ERROR = "Error",
    LOADING = "Loading",
    READY = "Ready",
    SUCCESS = "Success"
}