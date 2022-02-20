import React, { FunctionComponent } from "react"

import classnames from "classnames"

import styled, { keyframes } from "styled-components"

import SEO from "../SEO"
import Container from "../Container"
import Footer from "./Footer"
//import NewsletterSubscribe from "./NewsletterSubscribe"
import Header from "./Header"
import Contact from "./Contact"

const Layout: FunctionComponent<{ pageName?: string; className?: string }> = ({
  children,
  pageName,
  ...props
}) => {
  return (
    <div
      {...props}
      className={classnames(props.className, "gap-6 lg:p-10 lg:bg-base-100")}
    >
      <SEO pageName={pageName} />

      <Header />
      {children}
      <Contact/>
      <Footer />
    </div>
  )
}
//<Container children={<NewsletterSubscribe />} className="mt-32" />
export default Layout
