// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickCategory = () => {
    updateActiveTabId(tabId)
  }

  const activeTabClass = isActive ? 'active-tab-btn' : 'tab-button'

  return (
    <li className="list-item">
      <button
        type="button"
        className={`tab-button ${activeTabClass}`}
        onClick={onClickCategory}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
