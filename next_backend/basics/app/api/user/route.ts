import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from "next/server"


const client = new PrismaClient();

export async function GET() {
    //doing validation here
    //hitting database
    /*return NextResponse.json({
        email: "dj333@gmail.com",
        name:"Dhruv Jain"
    })*/

    const user = await client.user.findFirst()

    return NextResponse.json({
        username: user?.username,
        password: user?.password,
    })
}


export async function POST(req:NextRequest){
    //parse body
    try{
        const body = await req.json();
    const { username, password } = body;
    await client.user.create({
        data:{username: username, password: password},
    })

    //extracting headers
    const authHeader = req.headers.get("authorization");
    console.log("Authorization Header:", authHeader);

    //extracting query params
    const { searchParams} = new URL(req.url);
    const nameParam = searchParams.get("name");
    console.log("Query param (name):", nameParam);

    //4 db logic
    //await db.users.insert({username, password});

    //5. send response
    return NextResponse.json({
        message: "You are signed up",
        username,
        password,
        queryName: nameParam,
    })
    }
    catch(err){
        console.error("POST ERROR:", err);
        return NextResponse.json({
            error : "Internal server error"
        },
        {
            status: 500
        }
        );
    }
}

/** app.get("/api/user",(req,res) => {
 * res.json({
 * email: "",
 * name
 * })
}) */