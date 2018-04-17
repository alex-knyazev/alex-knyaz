import React, { Component } from 'react'

import educationIcon from './students-cap.svg'

class Education extends Component {
  render() {
    return (
      <section>
        <div className="Resume-BasicTitle">
          <img className="Resume-BasicTitleIcon" src={educationIcon} alt="profile-icon" />
          <h2 className="Resume-BasicTitleText">Education</h2>
        </div>
        <div className="Resume-BasicSectionInfo">
          <p>Software Engineering, SRSTU, 2013-2017, Bachelor.</p>
          <p>Software Engineering, SRSTU, 2017-2019, Master's degree (in process). </p>
          <p>Yandex "Interfaces development School", 2018.</p>
        </div>
      </section>
    )
  }
}

export default Education;