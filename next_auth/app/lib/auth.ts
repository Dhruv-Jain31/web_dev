import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const NEXT_AUTH = {
    providers: [
        CredentialsProvider({
            name: 'Credentials', // Label shown on the sign-in page
            credentials: {
                username: { label: 'Email', type: 'text', placeholder: 'example@example.com' },
                password: { label: 'Password', type: 'password', placeholder: 'Password' },
            },
            async authorize(credentials: any) {
                const username = credentials.username;
                const password = credentials.password;
                console.log(credentials); // Log input to debug in development

                /* Example real implementation with Prisma + bcrypt for real user validation
                const user = await prisma.user.findUnique({
                    where: {
                        email: username,
                    },
                });

                if (!user) {
                    return null; // No user found
                }

                const isValid = await bcrypt.compare(password, user.password);
                if (!isValid) {
                    return null; // Password doesn't match
                }
                */

                // Return a fake user for testing purposes
                return {
                    id: 1,
                    name: "Dhruv Jain",
                    email: "dj@gmail.com"
                };
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID || "",
            clientSecret: process.env.GOOGLE_SECRET || ""
        }),

        GitHubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || ""
        })
    ],

    // Secret used to sign and encrypt JWT tokens
    secret: process.env.NEXTAUTH_SECRET,

    // 🔁 CALLBACKS: Customize how data flows through NextAuth
    callbacks: {
        // Called whenever a JWT token is created or updated
        jwt: ({ token, user }) => {
            // Attach user ID from token subject to token object (sub is standard JWT user identifier)
            token.userId = token.sub; // Store it in a custom field (we’ll use this later in session)
            //console.log(token);
            return token;
        },

        // SESSION callback: Customize what’s included in the session object sent to the client
        session: ({ session, token, user }: any) => {
            console.log(session); // Log session for debugging

            // If session exists and has a user, attach the userId from the token to the session
            if (session && session.user) {
                session.user.id = token.userId;
            }
            return session; // Return the final session object that the client will receive
        }
    }
};


/*
 Summary of Endpoints:
- GET /api/auth/signin → Used to show the login form
- POST /api/auth/callback/credentials → Used to handle form submission and login
*/
