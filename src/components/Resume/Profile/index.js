import React, { Component } from 'react'

import profileIcon from './man-user.svg'

class Profile extends Component {
  render() {
    return (
      <section>
        <div className="Resume-BasicTitle">
          <img className="Resume-BasicTitleIcon" src={profileIcon} alt="profile-icon" />
          <h2 className="Resume-BasicTitleText">Profile</h2>
        </div>
        <div className="Resume-BasicSectionInfo">
          <p></p>
          <ul></ul>
          <p>Привет. Я пишу говнокод</p>
        </div>
      </section>
    )
  }
}

export default Profile;