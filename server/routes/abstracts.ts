import { Router, Request, Response, NextFunction } from "express";

import Abstract from '../models/abstract';

const abstractsRouter: Router = Router();


abstractsRouter.get('/', function (req: Request, res: Response, next: NextFunction) {
    console.log('get request "/" to abstractsRoute ');

    Abstract.find(function (err, docs) {
        if (err) {
            return res.status(404).json({
                title: 'An error occurred',
                error: err
            });
        }

        if (!docs[0]) {
            console.log('No entries found. Adding starter entry');
            let abstract = new Abstract({
                author: "Dummy Author",
                title: "This is a Titile of abstract",
                content: "This is a content of Abstract",
                createdAt: new Date(),
                createdBy: 'Dummy User'
            });            
            abstract.save(function (err, result) {
                if (err) {
                    return res.status(404).json({
                        title: 'An error occurred',
                        error: err
                    });
                }
                res.status(201).json({
                    message: 'Saved message',
                    obj: [result]
                });                
            });
        } else {
            console.log('Entries found');
            res.status(201).json({
                    message: 'Documents found',
                    obj: docs
                });

     }
    });
});

export {abstractsRouter}