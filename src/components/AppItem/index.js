// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props

  const {appName, imageUrl} = appDetails

  return (
    <li className="app-item">
      <img src={imageUrl} alt={appName} className="appImage" />
      <p className="app-title">{appName}</p>
    </li>
  )
}

export default AppItem
