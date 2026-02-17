step 1 install react router dom
step 2 import {BrowserRouter} from 'react-router-dom'
step 3 enclose the </app> in <BrowserRouter> 
<!-- now we can perform routing -->
step 4 import {Routes, Route} from 'react-router-dom'
step 5 enclose <Route> in <Routes> then use 
<Route path = '/' element = {<Home>}>
and so on for all the pages.
step 6 use link in navbar.