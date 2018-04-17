import React, { Component } from 'react'

import Content from '../Content'
import MainInfo from './MainInfo'
import Profile from './Profile'
import Education from './Education'
import Employment from './Employment'


import './index.css'

class Resume extends Component {
  render() {
    return (

      <Content>
        <div className="Resume">
          <div className="Resume-Basic">
            <MainInfo />
            <Profile />
            <Employment />
            <Education />
          </div>
          <div className="Resume-Details">
            <section>
              <h2 className="Resume-DetailsTitle">Details</h2>
              <ul>
                <li></li>
                <li></li>
              </ul>
            </section>

            <section>
              <h2 className="Resume-DetailsTitle">Social profiles</h2>
              <ul>
                <li></li>
                <li></li>
              </ul>
            </section>

            <section>
              <h2 className="Resume-DetailsTitle">Languages</h2>
              <ul>
                <li></li>
                <li></li>
              </ul>
            </section>
          </div>
        </div>
      </Content>
    )
  }
}
export default Resume;
