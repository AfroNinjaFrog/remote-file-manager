import e from "express";
import {Api} from "./api/api";

export class RemoteFileManager {
    public static init() {
        const app: e.Application = e();
        Api.init(app);
        app.listen(3000, () => console.log('server is listening on port 3000!!!'));
    }
}
RemoteFileManager.init();