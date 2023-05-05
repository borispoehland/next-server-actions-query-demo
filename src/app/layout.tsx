import { PropsWithChildren } from 'react'

interface IProps {}

const Layout = ({ children }: PropsWithChildren<IProps>): JSX.Element => {
    return (
        <html>
            <body>{children}</body>
        </html>
    )
}

export default Layout
