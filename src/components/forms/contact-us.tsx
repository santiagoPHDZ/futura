
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import Image from "next/image";
import { motion } from 'framer-motion';
import { AspectRatio } from "../ui/aspect-ratio";
import { Button } from "../ui/button";
import Link from "next/link";
import { useToast } from "../ui/use-toast";
import { messageSchema } from "@/lib/schemas/message";
import { Textarea } from "../ui/textarea";
import { apiClient } from "@/trpc/trpc-provider";
import { ArrowUpRight } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const ContactUsForm = () => {

    const { toast } = useToast()

    const form = useForm<z.infer<typeof messageSchema>>({
        resolver: zodResolver(messageSchema)
    })

    async function onSubmit(data: z.infer<typeof messageSchema>) {
        mutate(data)
    }

    const { mutate, isLoading } = apiClient.contact.create.useMutation({
        onSuccess: () => {
            toast({
                title: "Thank you!",
                description: "I'll get in touch soon."
            })
        }
    })

    return (
        <section className="max-w-2xl px-4 flex flex-col gap-12 pb-12 w-full justify-center items-center mx-auto">

            <motion.div
                className="w-full flex flex-col items-center overflow-hidden p-4 rounded-lg bg-accent border text-left space-y-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, stagger: 0.25 }}
            >

                <div className=" w-full space-y-1">
                    <h1 className=" uppercase w-full font-header text-left font-semibold text-primary-text">
                        Contact Me
                    </h1>
                    {/* <p className="text-lg font-light text-secondary-text ">
                        Thanks for your interest in SP+P
                    </p> */}
                </div>

                <Form {...form} >
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">

                        {/* <FormField
                            control={form.control}
                            name="type"
                            disabled={isLoading}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Who you are</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select..." />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="developer">Developer</SelectItem>
                                            <SelectItem value="homebuyer">Homebuyer</SelectItem>
                                            <SelectItem value="architect">Architect</SelectItem>
                                            <SelectItem value="press">Press</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )}
                        /> */}

                        <FormField
                            control={form.control}
                            name="name"
                            disabled={isLoading}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            disabled={isLoading}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="message"
                            disabled={isLoading}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Message"
                                            className="resize-none"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button disabled={isLoading} type="submit" variant="default">
                            <ArrowUpRight className="h-5 w-5 mr-1" />  Submit
                        </Button>

                    </form>
                </Form>
            </motion.div>
        </section>
    )

}

export default ContactUsForm;