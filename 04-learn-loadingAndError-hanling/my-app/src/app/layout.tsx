

import "./globals.css";
import NavBar from "./NavBar/page";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        {children}</body>
    </html>
  );
}
