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
        <div {...props} className={classnames(props.className, "gap-6 lg:p-10 lg:bg-base-100")}>

            <SEO pageName={pageName} />
    

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