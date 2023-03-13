import React from 'react'

function Footer() {
  return (
    <div className="main-footer">
        <div className="container">
            <div className="row">
                {/* Column1 */}
                <div className="col">
                    <h4>LinkedIn</h4>
                    <ul className="list-unstyled">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                {/* Column2 */}
                <div className="col">
                    <h4>GitHub</h4>
                    <ul className="list-unstyled">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                {/* Column3 */}
                <div className="col">
                    <h4>Medium</h4>
                    <ul className="list-unstyled">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="row">
                <p className="col-sm">
                    &copy; {new Date().getFullYear()} | Alexander Joseph Spagnoli | This site was built using Python on Flask with React.js
                </p>
            </div>
        </div>
    </div>

  )
}

export default Footer