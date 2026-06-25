import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amir Mirkazemi | Data Engineer",
  description:
    "Portfolio for Amir Mirkazemi, a data engineer focused on Snowflake, Airflow, SQL validation, and enterprise data pipelines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
