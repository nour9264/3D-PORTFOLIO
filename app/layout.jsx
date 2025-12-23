import "../app/globals.css";

export const metadata = {
    title: "Nour — Portfolio",
    description: "Frontend Developer with 2 years of experience specializing in React, Next.js, and 3D web experiences",
    keywords: "frontend developer, portfolio, react, next.js, three.js, web development",
    authors: [{ name: "Nour" }],
    icons: {
        icon: "/images/fav.png",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
