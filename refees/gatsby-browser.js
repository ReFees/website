/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

 import "./src/css/tailwind.css"
 import "./src/css/fonts.css"
 import "./src/css/index.css"
 import "./src/css/roadmap.css"
 
 import ReactGA from "react-ga"
 ReactGA.initialize("XXX")
 ReactGA.pageview(window.location.pathname + window.location.search)