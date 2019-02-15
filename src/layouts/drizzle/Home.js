import React, { Component } from 'react'

class Home extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Drizzle</h1>
                <p>Drizzle Page</p>
          </div>
        </div>
      </main>
    )
  }
}

export default Home
