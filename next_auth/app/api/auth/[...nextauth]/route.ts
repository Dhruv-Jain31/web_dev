import NextAuth from "next-auth";
import { NEXT_AUTH } from "@/app/lib/auth";
// import { PrismaClient } from "@prisma/client";
// import bcrypt from "bcryptjs";

// const prisma = new PrismaClient();

// Main auth configuration for login with password (or future providers like Google)
const handler = NextAuth(NEXT_AUTH)
// Export handlers for GET (sign-in page) and POST (login form submission)
export { handler as GET, handler as POST };

/*
 Summary of Endpoints:
- GET /api/auth/signin → Used to show the login form
- POST /api/auth/callback/credentials → Used to handle form submission and login
*/
