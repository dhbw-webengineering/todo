// app/layout.tsx
import { CategoryProvider } from "./CategoryContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="de">
        <body>
        <CategoryProvider>
            {children}
        </CategoryProvider>
        </body>
        </html>
    );
}
