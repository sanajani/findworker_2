import Providers from "@/redux/Providers"
import '../../globals.css'
import { Inter } from "next/font/google"
export const metadata = {
  title:"Messanger",
  description:"Messaging with your workers"
}

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({children}){
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </Providers>
  )
}