import e from "express";
import {Api} from "./api/api";
import {AppInit} from "./generic/app-init";

export class RemoteFileManager {
    public static init() {
        const app: e.Application = e();

        AppInit.appInit(app);
        Api.init(app);
        AppInit.appListen(app);
    }
}

RemoteFileManager.init();