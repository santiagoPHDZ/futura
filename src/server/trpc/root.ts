
import { projectsRouter } from './routers/projects';
import { publicationsRouter } from './routers/publications';
import { createTRPCRouter } from './trpc';

// - Client API definition

// This is where we'll define our tRPC routers. 
export const appRouter = createTRPCRouter({
    projects: projectsRouter,
    publications: publicationsRouter,
})

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;