/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

 import 'tailwindcss/tailwind.css'
 
 
 import ReactGA from "react-ga"
 ReactGA.initialize("XXX")
 ReactGA.pageview(window.location.pathname + window.location.search)