"use client"
import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroupTextarea,
} from "@/components/ui/input-group"
import { lato } from "../font"
const formSchema = z.object({
    title: z
        .string()
        .min(5, "Bug title must be at least 5 characters.")
        .max(32, "Bug title must be at most 32 characters."),
    name: z
        .string()
        .min(5, "Bug title must be at least 5 characters.")
        .max(32, "Bug title must be at most 32 characters."),
    email: z
        .string()
        .min(5, "Bug title must be at least 5 characters.")
        .max(32, "Bug title must be at most 32 characters."),
    description: z
        .string()
        .min(20, "Description must be at least 20 characters.")
        .max(100, "Description must be at most 100 characters."),
})

export default function FormContact() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name:"",
            email:"",
            title: "",
            description: "",
        },
    })
    function onSubmit(data: z.infer<typeof formSchema>) {
        toast("You submitted the following values:", {
            description: (
                <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
                    <code>{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
            position: "bottom-right",
            classNames: {
                content: "flex flex-col gap-2",
            },
            style: {
                "--border-radius": "calc(var(--radius)  + 4px)",
            } as React.CSSProperties,
        })
    }

    return (
        <div className="w-full md:w-150 overflow-x-hidden">
            <Card className={`${lato.className}  bg-gray-100 text-black font-medium`}>
                <CardContent>
                    <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
                        <FieldGroup>
                            <div className="flex gap-4">
                                <Controller
                                name="name"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="form-rhf-demo-name" className="font-bold">
                                            Name *
                                        </FieldLabel>
                                        <Input
                                            {...field}
                                            id="form-rhf-demo-name"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="Your Name"
                                            autoComplete="off"
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                            <Controller
                                name="email"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="form-rhf-demo-email" className="font-bold">
                                            Email *
                                        </FieldLabel>
                                        <Input
                                            {...field}
                                            id="form-rhf-demo-email"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="Your Email"
                                            autoComplete="off"
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                            </div>
                            <Controller
                                name="title"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="form-rhf-demo-title" className="font-bold">
                                            Subject *
                                        </FieldLabel>
                                        <Input
                                            {...field}
                                            id="form-rhf-demo-title"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="What is this about?"
                                            autoComplete="off"
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                            <Controller
                                name="description"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="form-rhf-demo-description" className="font-bold">
                                            Description
                                        </FieldLabel>
                                        <InputGroup>
                                            <InputGroupTextarea
                                                {...field}
                                                id="form-rhf-demo-description"
                                                placeholder="Your message..."
                                                rows={6}
                                                className="min-h-24 resize-none"
                                                aria-invalid={fieldState.invalid}
                                            />
                                            <InputGroupAddon align="block-end">
                                                <InputGroupText className="tabular-nums">
                                                    {field.value.length}/100 characters
                                                </InputGroupText>
                                            </InputGroupAddon>
                                        </InputGroup>
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                        </FieldGroup>
                    </form>
                </CardContent>
                <CardFooter>
                    <Field orientation="horizontal">
                        <Button type="button" variant="outline" onClick={() => form.reset()} className={`${lato.className} text-white font-bold`}>
                            Reset
                        </Button>
                        <Button type="submit" form="form-rhf-demo" className={`${lato.className} text-black font-bold cursor-pointer`}>
                            Submit
                        </Button>
                    </Field>
                </CardFooter>
            </Card>
        </div>
    )
}
