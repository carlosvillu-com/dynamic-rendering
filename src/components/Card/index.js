import React from 'react'
import PropTypes from 'prop-types'

const Card = ({user}) => {
  debugger // eslint-disable-line
  return (
    <div className="card" style={{width: '18rem', margin: '25px 0'}}>
      <img
        src={user.picture.large}
        className="card-img-top"
        alt={user.name.first}
      />
      <div className="card-body">
        <h5 className="card-title">{`${user.name.last} ${user.name.first} ${
          user.name.last
        }`}</h5>
        <p className="card-text">
          {user.text.split('').map((c, i) => <span key={i}>{c}</span>)}
        </p>
        <a href="#" className="btn btn-primary">
          Profile
        </a>
      </div>
    </div>
  )
}

Card.display = 'Card'
Card.propTypes = {
  user: PropTypes.object
}

export default Card
