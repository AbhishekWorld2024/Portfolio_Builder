import { Link, useLocation } from 'react-router-dom'

const FloatingEditorButton = () => {
  const location = useLocation()
  
  if (location.pathname.startsWith('/editor') || location.pathname === '/preview') {
    return null
  }

  return (
    <Link to="/editor" className="floating-editor-btn">
      <span>✏️</span>
      <span>Edit</span>
    </Link>
  )
}

export default FloatingEditorButton
