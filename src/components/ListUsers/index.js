import React from 'react'
import PropTypes from 'prop-types'

import Card from '../Card'
import DynamicRendering from '../DynamicRendering'

const ListUsers = ({users}) => {
  return (
    <div
      className="ListUsers"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      {users.map((user, index) => (
        <DynamicRendering key={user.phone} height={500}>
          <Card user={user} />
        </DynamicRendering>
      ))}
    </div>
  )
}
ListUsers.propTypes = {users: PropTypes.array}

export default ListUsers
