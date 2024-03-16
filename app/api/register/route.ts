import {connectDB} from '@/dbConfig/db'
connectDB();
import { NextRequest,NextResponse } from 'next/server';
import Email from '@/models/emailModel'
import sendMail from '@/helpers/mailer'


export async function POST(request:NextRequest){
    try{
        const reqBody = await request.json();
        const {email} = reqBody;
        console.log(reqBody);
        if(!email.length || email.length < 5){
            return NextResponse.json({error:'Invalid Email'},{status:400})
        }

        let emale: any =  await Email.find({email});
        console.log(emale)
        if(emale.length >= 1){
            const res = await sendMail(email);
            return NextResponse.json({
                message: "All good!",
                success: true
            })
        }

        emale = await Email.create({
            email
        });

        const res = await sendMail(email);

        return NextResponse.json({
            message: "All good!",
            success: true
        })
    }
    catch(err:any){
        console.log(err)
        return NextResponse.json({error: err.message},{status:500})
    }
}