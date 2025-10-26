export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="font-sans">
      <body className="antialiased" suppressHydrationWarning>
        <main>{children}</main>
      </body>
    </html>
  );
}