import { db } from "@/lib/prisma";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";

export const contactRouter = createTRPCRouter({

    create: publicProcedure.input(z.object({
        name: z.string().optional(),
        email: z.string(),
        message: z.string().optional(),
    })).mutation(async ({ ctx, input }) => {

        await db.messages.create({
            data: {
                name: input.name,
                email: input.email,
                message: input.message,
            }
        })

        return;
    }),
})
