import React, { Component } from 'react'

import jobIcon from './case.svg'

class Employment extends Component {
  render() {
    return (
      <section>
        <div className="Resume-BasicTitle">
          <img className="Resume-BasicTitleIcon" src={jobIcon} alt="profile-icon" />
          <h2 className="Resume-BasicTitleText">Employment history</h2>
        </div>

        <div className="Resume-BasicSectionInfo">
          <h3>Web developer at ProgForce, from 2017 to date.</h3>
        </div>
      </section>
    )
  }
}

export default Employment;