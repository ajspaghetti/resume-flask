import React from 'react'

function Resume({
    engineering,
    languages,
    roles,
    companies,
    skills,
    accomplishments,
    hobbies
}) {
  return (
    <div className="content-page">
        <div>
            <h1>Resume</h1>
            <br/>
            <h3>Software Engineering Experience</h3>
            <ul>
            {(typeof engineering.engineering === 'undefined') ? (
                <p>Loading...</p>
            ) :
                engineering.engineering.map((engineer, i) => (
                    <li key={i}>{engineer}</li>

                    ))}
            </ul>
            <br/>
            <h3>Spoken Languages</h3>
            <ul>
            {(typeof languages.languages === 'undefined') ? (
                <p>Loading...</p>
            ) :
                languages.languages.map((language, i) => (
                    <li key={i}>{language}</li>

                    ))}
            </ul>
            <br/>
            <h3>Software Engineering Experience</h3>
            <ul>
            {(typeof engineering.engineering === 'undefined') ? (
                <p>Loading...</p>
            ) :
                engineering.engineering.map((engineer, i) => (
                    <li key={i}>{engineer}</li>

                    ))}
            </ul>
            <br/>
            <h3>Software Engineering Experience</h3>
            <ul>
            {(typeof engineering.engineering === 'undefined') ? (
                <p>Loading...</p>
            ) :
                engineering.engineering.map((engineer, i) => (
                    <li key={i}>{engineer}</li>

                    ))}
            </ul>
            <br/>
            <h3>Software Engineering Experience</h3>
            <ul>
            {(typeof engineering.engineering === 'undefined') ? (
                <p>Loading...</p>
            ) :
                engineering.engineering.map((engineer, i) => (
                    <li key={i}>{engineer}</li>

                    ))}
            </ul>
            <br/>
            <h3>Software Engineering Experience</h3>
            <ul>
            {(typeof engineering.engineering === 'undefined') ? (
                <p>Loading...</p>
            ) :
                engineering.engineering.map((engineer, i) => (
                    <li key={i}>{engineer}</li>

                    ))}
            </ul>
            <br/>
            <h3>Software Engineering Experience</h3>
            <ul>
            {(typeof engineering.engineering === 'undefined') ? (
                <p>Loading...</p>
            ) :
                engineering.engineering.map((engineer, i) => (
                    <li key={i}>{engineer}</li>

                    ))}
            </ul>
        </div>
    </div>
  )
}

export default Resume