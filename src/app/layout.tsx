import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amir Mirkazemi | Data Engineer",
  description:
    "Portfolio for Amir Mirkazemi, a data engineer focused on Snowflake ingestion, Airflow DAGs, PySpark, Trino, Kubernetes, and Great Expectations validation.",
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
