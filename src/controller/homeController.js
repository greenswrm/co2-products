import AccessModel from '../models/accessModel.js';

export default class homeController{
    async createAccess(req, res, next){
        const {accessToken, domain, email} = req.body;
        const token = await AccessModel.findOne({domain, email});

        if(token)
            return res.status(200).json({success: false});

        if(!accessToken || !domain || !email)
            return res.status(200).json({success: false});

        await AccessModel.create({email, domain, accessToken});

        res.status(200).json({success: true});
    }


    async getAccess(req, res, next){
        const {domain} = req.body;
        const data = await AccessModel.findOne({domain});

        if(!data)
           res.status(200).json({success: false});

        res.status(200).json({success: true, data});
    }
}