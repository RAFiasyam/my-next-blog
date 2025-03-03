export const metadata = {
    title: "My Blog",
    description: "A simple blog using Next.js",
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }
  