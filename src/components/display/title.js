import React from 'react'
import './title.css'
import { Randomizer } from './randomizer'
import { Nav } from './nav'

export class Title extends React.Component {
  render () {
    const thisTitle = () => {
      if (this.props.view === 'Today' || this.props.view === 'Tomorrow') {
        return (
          <>
            What's the weather like <br />{' '}
            <span className='view'>{this.props.view.toLowerCase()}</span> in{' '}
          </>
        )
      } else {
        return (
          <>
            What's the five day <br />
            forecast in{' '}
          </>
        )
      }
    }
    return (
      <>
        <div className='title'>
          {thisTitle()}
          <span className='city'>
            {this.props.city}, {this.props.country}?
            <br />
          </span>
        </div>
        <div className='navbar'>
          <Randomizer onChange={this.props.onRandom} />
          <Nav view={this.props.view} onViewChange={this.props.onViewChange} />
        </div>
      </>
    )
  }
}
