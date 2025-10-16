/*
    Routing
    -------
    -> Create multiple pages using 1 HTML file in React
    -> Let us reuse our  HTML code.
    -> To use routing in React, we need to install a library called react-router
     by writting this in terminal 'npm install react-router@(version)'.

    -> In main.jsx, we need to import BrowserRouter and wrap our App component with it.
    -> Inside App.jsx(component), we need to import Routes and Route from react-router.
    -> We need to wrap all our routes inside <Routes> component.
    -> Each route is defined using <Route> component.
    -> <Routes> component tells React all the pages that are in our website.
    -> <Route> adds a page to our website.
    -> <Route> has two props. 'path="/" → URL path(endpoint(last part of URL))' and 
    'element={<Home />} → the component rendered for that path'
    -> <BrowserRouter> → enables routing in your app (listens to URL changes).
    -> <Routes> → acts as a container that holds all your route definitions.
    -> <Route> → defines a specific path and tells React which component to show for that path.
    -> NOTE: 'path="/"' is the same as 'index'


    Single Page Application(SPA)
    ---------------------------
    -> means you are creating multiple “pages” or views using just one main HTML file, and switching 
    between them dynamically with JavaScript — instead of reloading.

    EXample
    ------
    /
    ---------
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <title>My React SPA</title>
        </head>
        <body>
            <div id="root"></div>
            <script src="main.js"></script>
        </body>
   </html>

   App.jsx
   -------
   import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
    import Home from "./Home";
    import About from "./About";
    import Contact from "./Contact";

    function App() {
    return (
        <BrowserRouter>
        <nav>
            <Link to="/">Home</Link> | 
            <Link to="/about">About</Link> | 
            <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        </BrowserRouter>
    );
    }

    export default App;


*/
