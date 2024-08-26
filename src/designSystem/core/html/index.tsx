import { theme } from 'antd'
import Head from 'next/head'
import { ReactNode } from 'react'

const { useToken } = theme

interface Props {
  children: ReactNode
}

export const MrbHtml: React.FC<Props> = ({ children }: Props) => {
  const { token } = useToken()

  return (
    <html
      lang="en"
      style={{ background: token.colorBgBase, color: token.colorTextBase }}
    >
      <Head>
        <title>AI Accountancy App</title>
      </Head>
      <body>{children}</body>
    </html>
  )
}
