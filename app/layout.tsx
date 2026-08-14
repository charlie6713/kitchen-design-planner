import type { Metadata } from "next"
import "./globals.css"
import AppHeader from "@/components/AppHeader"

export const metadata: Metadata = {
  title: "Kitchen Design Planner",
  description: "Kitchen furniture selection and design planner",
}

export default function RootLayout(props: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AppHeader />

        <main>{props.children}</main>
      </body>
    </html>
  )
}