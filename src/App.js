import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Resume from './components/Resume'
import ReachOut from './components/ReachOut'
import AboutMe from './components/AboutMe'
import BlogPosts from './components/BlogPosts'
import Footer from './components/Footer'
import { Helmet } from 'react-helmet'

function App() {

  const [engineering, setEngineering] = useState([{}])
  const [languages, setLanguages] = useState([{}])
  const [roles, setRoles] = useState([{}])
  const [companies, setCompanies] = useState([{}])
  const [skills, setSkills] = useState([{}])
  const [accomplishments, setAccomplishments] = useState([{}])
  const [hobbies, setHobbies] = useState([{}])

  useEffect(() => {
    fetch("/engineering").then(
      r => r.json()
    ).then(
      engineering => {
        setEngineering(engineering)
        console.log(engineering)
      }
    )
  }, [])

  useEffect(() => {
    fetch("/languages").then(
      r => r.json()
    ).then(
      languages => {
        setLanguages(languages)
        console.log(languages)
      }
    )
  }, [])

  useEffect(() => {
    fetch("/roles").then(
      r => r.json()
    ).then(
      roles => {
        setRoles(roles)
        console.log(roles)
      }
    )
  }, [])

  useEffect(() => {
    fetch("/companies").then(
      r => r.json()
    ).then(
      companies => {
        setCompanies(companies)
        console.log(companies)
      }
    )
  }, [])

  useEffect(() => {
    fetch("/skills").then(
      r => r.json()
    ).then(
    skills => {
        setSkills(skills)
        console.log(skills)
      }
    )
  }, [])

  useEffect(() => {
    fetch("/accomplishments").then(
      r => r.json()
    ).then(
      accomplishments => {
        setAccomplishments(accomplishments)
        console.log(accomplishments)
      }
    )
  }, [])

  useEffect(() => {
    fetch("/hobbies").then(
      r => r.json()
    ).then(
      hobbies => {
        setHobbies(hobbies)
        console.log(hobbies)
      }
    )
  }, [])


  return (
        <div className="App">
        <Helmet>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Helmet>
        <div className="page-container">
        <div className="content-wrap"> 
        <NavBar />
        <Router>
              <Routes>
                <Route exact path="/" element={<Home engineering={engineering} />}/>
                <Route exact path="/resume" element={<Resume engineering={engineering} languages={languages} roles={roles} companies={companies} skills={skills} accomplishments={accomplishments} hobbies={hobbies} />}/>
                <Route exact path="/aboutme" element={<AboutMe />}/>
                <Route exact path="/contact" element={<ReachOut/>}/>
                <Route exact path="/blog" element={<BlogPosts />}/>
              </Routes>
        </Router>
        </div>
        <Footer />
        </div>
        </div>
  
  )
}

export default App