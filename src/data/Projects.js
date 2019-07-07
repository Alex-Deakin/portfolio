export default [
    {
        name: "Personal",
        description: "These are projects of my own that are publicly available.",
        dateText: "July 2019 - Present",
        projects: [
            {
                name: "Portfolio / Blog",
                description: "This is the website you're on right now! It is a single-page application that uses React along with routing and animation libraries. Try pressing and dragging the avatar at the top of the page. * At the time of writing, the blog is not yet live, but once ready will pull posts from a data source using a Node.js API.",
                technologies: [
                    "React for the frontend architecture",
                    "React Spring for animations and transitions",
                    "React Router for single-page routing",
                    "Node.js*",
                    "CSS"
                ],
                imageRef: "portfolio",
            }
        ]
    },
    {
        name: "Levitate Digital",
        description: "These are finished projects that I have completed under the Levitate Digital brand.",
        dateText: "March 2019 - Present",
        url: "https://levitatedigital.co.uk",
        linkText: "Levitate Digital Website",
        projects: [
            {
                name: "Levitate Digital Website",
                description: "This is the main website for Levitate Digital. It is a very basic layout and was made using pure JavaScript, HTML, and CSS for the front-end. A new site has been designed and is in the process of creation.",
                technologies: [
                    "JavaScript",
                    "HTML5",
                    "CSS",
                    "PHP",
                    "Apache/Linux"
                ],
                imageRef: "levitate",
            }
        ]
    },
    {
        name: "AXLR8",
        description: "These are projects that I led or was involved in while working at AXLR8.",
        dateText: "December 2017 - June 2019",
        url: "http:///axlr8.net",
        linkText: "AXLR8 Website",
        projects: [
            {
                name: "Funding Calculator",
                description: "This is likely my most complex project to date. This calculator takes parameters for a loan, lease, or hire purchase, and calculates interest amounts and proofs for the lender, as well as payment schedules for the borrower. It fits a similar role to other industry products such as Freehand and TValue.",
                technologies: [
                    "JavaScript",
                    "jQuery",
                    "PHP",
                    "SQL (proprietary library)",
                    "HTML5",
                    "CSS"
                ],
                imageRef: "fundingcalc",
            },
            {
                name: "Chart Generation for Reports",
                description: "AXLR8's CRM system has a proprietary reports system, able to build reports from a query to the database performed through an interface. I was tasked with extending this functionality by implementing a charting feature, that can take a query and visualise it as a graph.",
                technologies: [
                    "JavaScript",
                    "jQuery",
                    "PHP",
                    "Chart.js library"
                ],
                imageRef: "charting",
            },
            {
                name: "Portal Redesign for App Integration",
                description: "AXLR8's experiental staffing and security clients use a virtual portal to manage their workers. Historically, workers used the portal through a web browser - but, when work began on a new mobile app for the portal, the design of it was due a much needed update.",
                technologies: [
                    "JavaScript",                    
                    "jQuery",
                    "ASP",
                    "HTML"
                ],
                imageRef: "staffportal",
            }
        ]
    }

];