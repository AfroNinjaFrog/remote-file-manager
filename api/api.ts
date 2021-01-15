import e, {Request, Response} from "express";
import {FileBl} from "../business-logic/file-bl";

export class Api{
    static init(app: e.Application) {
        app.get('/', Api.getFilesByDirectory);
    }
    static getFilesByDirectory(request:Request, res:Response) {
        const directory: string = (request.query.directory ?? '') as string;
        try {
            let filesInDir = FileBl.readDirectory(directory);
            res.send(filesInDir);
        }catch (e) {
            console.error(e);
        }
    }

}