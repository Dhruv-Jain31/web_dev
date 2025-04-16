import { NextResponse } from "next/server"

export function GET() {
    //doing validation here
    //hitting database
    return NextResponse.json({
        email: "dj333@gmail.com",
        name:"Dhruv Jain"
    })
}

/** app.get("/api/user",(req,res) => {
 * res.json({
 * email: "",
 * name
 * })
}) */