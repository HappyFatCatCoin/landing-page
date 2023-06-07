import "./globals.css";

export const metadata = {
  title: "Happy Fat Cat",
  description: "Happy Fat Cat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
