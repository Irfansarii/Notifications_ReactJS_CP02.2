const Notification = props => {
  //  Write your code here.
  const {message} = props
  return <p>{message}</p>
}

const element = (
  //  Write your code here.
  <div className='container'>
    <h1 className='heading'>Notification</h1>

    <div className='msg-container'>
      <div className='Information'>
        <img
          src='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
          className='icon'
        />
        <Notification message='Information Message' />
      </div>
      <div className='Success'>
        <img
          src='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
          className='icon'
        />
        <Notification message='Success Message' />
      </div>
      <div className='Warning'>
        <img
          src='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
          className='icon'
        />
        <Notification message='Warning Message' />
      </div>
      <div className='Error'>
        <img
          src='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
          className='icon'
        />
        <Notification message='Error Message' />
      </div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
