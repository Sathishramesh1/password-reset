import React from 'react'

function Protected({logout}) {
  return (
    <div>
        <h1>Welcome to Protected Page using JWT token</h1>

        <button onClick={logout}>Logout</button>



    </div>
  )
}

export default Protected