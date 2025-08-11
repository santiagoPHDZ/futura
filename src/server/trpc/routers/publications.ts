
import { getPublications, getPublicationById } from "@/server/services/publications";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";

export const publicationsRouter = createTRPCRouter({

  list: publicProcedure.query(async () => {
    const publications = await getPublications();
    return publications;
  }),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const publication = await getPublicationById(input.id);
      if (!publication) throw new Error("Publication not found");
      return publication;
    }),
});
