import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
//import { PrismaClient } from "@prisma/client";
//import bcrypt from "bcryptjs";

//const prisma = new PrismaClient();

//login with password, google etc
const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'Email', type: 'text', placeholder: 'example@example.com' },
                password: { label: 'Password', type: 'password', placeholder: 'Password' },
            },
            async authorize(credentials: any) {
                const username = credentials.username;
                const password = credentials.password;
                console.log(credentials);

                /*const user = await prisma.user.findUnique({
                    where: {
                        email: username,
                    },
                });

                if (!user) {
                    return null;
                }

                const isValid = await bcrypt.compare(password, user.password);
                if (!isValid) {
                    return null;
                }*/

                return {
                    id: "user1",
                    name: "Dhruv Jain",
                    email: "dj@gmail.com"
                };
            },
        })
    ],
    secret : process.env.NEXTAUTH_SECRET //When you are encoding or decoding using jwt use this secret
});

export { handler as GET, handler as POST };

/*Here’s what’s happening:

When the user visits /api/auth/signin, NextAuth makes a GET request to render the sign-in page → so GET is needed.

When a user logs in via CredentialsProvider, it makes a POST request → so POST is needed.*/