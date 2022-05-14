import NavBar from 'components/organisms/NavBar'
import CallOut from 'components/organisms/CallOut'
import Footer from 'components/organisms/Footer'
import React, { ReactNode } from 'react'
import Container from 'components/templates/Container'
import Head from 'next/head'
interface PageTemplateProps {
  children: ReactNode[] | JSX.Element
  title?: string
}
const PageTemplate = ({ children, title = 'Collosal' }: PageTemplateProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          rel="shortcut icon"
          href="/images/favicon.svg"
          type="image/x-icon"
        />
      </Head>
      {/* Navbar Fixed on top */}
      <NavBar />
      {/* Background */}
      <div className="w-full h-fit min-h-screen bg-dark overflow-x-hidden">
        <div className="w-full h-full min-h-screen relative bg-[url('/images/page-background.svg')] bg-cover">
          <div className="w-full h-full min-h-screen relative backdrop-blur-[175px] bg-dark/[.85] overflow-visible">
            {/* Space for navbar, because navbar is absolute */}
            <div className="h-[105px]"></div>
            {/* Padding */}
            <Container>
              {children}
              <div data-aos="fade-right">

              <CallOut />
              </div>
              <Footer />
            </Container>
          </div>
        </div>
      </div>
    </>
  )
}

export default PageTemplate