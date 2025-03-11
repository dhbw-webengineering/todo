import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sign up - Todo App"
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

