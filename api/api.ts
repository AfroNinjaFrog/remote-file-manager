import e, {Request, Response} from "express";
import {FileBl} from "../business-logic/file-bl";

export class Api{
    static init(app: e.Application) {
        app.post('/api/directory', Api.getFilesByDirectory);
    }
    static getFilesByDirectory(request:Request, res:Response) {
        const directory: string = request.body.directory
        try {
            let filesInDir = FileBl.readDirectory(directory);
            res.send(filesInDir);
        } catch (e) {
            res.status(500).send(e);
            console.error(e);
        }
    }

}