
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login - Todo App"
};

export default function loginLayout({

    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return(
        <>
        {children}

        </>
    )
}

