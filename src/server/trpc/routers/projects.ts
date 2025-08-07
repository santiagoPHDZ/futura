
import { getProjects, getProjectById } from "@/server/services/projects";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";

export const projectsRouter = createTRPCRouter({

    list: publicProcedure.query(async () => {
        const projects = await getProjects();
        return projects;
    }),

    getById: publicProcedure
        .input((id: unknown) => {
            if (typeof id !== 'string') throw new Error('Invalid id');
            return id;
        })
        .query(async ({ input }) => {
            const project = await getProjectById(input);
            if (!project) throw new Error('Project not found');
            return project;
        }),
})
