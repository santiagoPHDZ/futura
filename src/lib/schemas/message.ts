
import { z } from "zod";

// Create
export const messageSchema = z.object({
    name: z.string().optional(),
    email: z.string(),
    message: z.string().optional(),
})