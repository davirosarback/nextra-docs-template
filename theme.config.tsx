import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import logo from './moovsec-logo.png'
 


const config: DocsThemeConfig = {
  logo:(<Image src={logo} alt="Hello" width={50} height={50} />),
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Intelbras 2024',
  },
  primaryHue: 155
}

export default config
