/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export interface Env {
  DATABASE_URL: string;
}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    const prisma = new PrismaClient({
      datasources: {
        db: {
          url: env.DATABASE_URL,
        },
      },
    }).$extends(withAccelerate()); //tells prisma client that we are using prisma accelerate

    try {
      // Sample data to create a user (replace this with actual data)
      const userData = {
        name: "John Doe",
        email: "johndoe@example.com",
        password: "securepassword123",
      };

      const newUser = await prisma.user.create({
        data: userData,
      });

      return new Response(JSON.stringify({ message: "User created", user: newUser }), {
        headers: { "Content-Type": "application/json" },
        status: 201,
      });
    } catch (error) {
      console.error("Error creating user:", error);
      return new Response(JSON.stringify({ error: "Internal Server Error" }), {
        headers: { "Content-Type": "application/json" },
        status: 500,
      });
    } finally {
      await prisma.$disconnect();
    }
  },
};
