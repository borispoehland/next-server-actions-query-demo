import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { Open_Sans } from 'next/font/google'

const font = Open_Sans({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <style jsx global>{`
                html {
                    font-family: ${font.style.fontFamily};
                }
            `}</style>
            <Navbar />
            <div className="grow bg-red-500">
                <Component {...pageProps} />
            </div>
            <Footer />
        </>
    )
}
