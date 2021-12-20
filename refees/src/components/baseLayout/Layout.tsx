import React, { FunctionComponent } from "react"

import classnames from "classnames"

import styled, { keyframes } from "styled-components"

import SEO from "../SEO"
import Container from "../Container"
import Footer from "./Footer"
//import NewsletterSubscribe from "./NewsletterSubscribe"
import Header from "./Header"

const Layout: FunctionComponent<{ pageName?: string, className?: string }> = ({ children, pageName, ...props }) => {
    return (
        <div {...props} className={classnames(props.className, "relative pattern-dots text-opacity-10 text-primary-200 overflow-x-hidden")}>

            <SEO pageName={pageName} />
    
            <div className="absolute  bg-primary-500 h-screen w-full opacity-20" /> { /* TODO: radial gradient with styled.div */ }

            <div className="relative z-10">

                <Header />
                {children}
                <SEO pageName={pageName} />
                <Container children={<Footer />} className="mt-8 pb-16" />
            
            </div>

        </div>
    )
}
//<Container children={<NewsletterSubscribe />} className="mt-32" />
export default Layout