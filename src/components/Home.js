import React from 'react'

function Home({
    engineering
}) {
  return (
    <div className="content-page">
        <div>
            <h1>Home</h1>
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

export default Home