import { Router, Request, Response, NextFunction } from "express";

import User = require('../models/user');

const userRouter: Router = Router();


userRouter.get('/', function (req: Request, res: Response, next: NextFunction) {
    console.log('got "/" route');
    let user = new User({
        firstName: 'Alex',
        lastName: 'Borisov',
        password: 'pass',
        email: 'email@mail.mail'
    });
    user.save();
    res.redirect('/');

});

export {userRouter}