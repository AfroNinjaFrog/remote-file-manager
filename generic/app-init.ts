import e from "express";

export class AppInit {
    static appInit(app: e.Application) {
        app.use(e.json());
    }
    static appListen(app: e.Application) {
        app.listen(3000, () => console.log('server is listening on port 3000!!!'));
    }
}