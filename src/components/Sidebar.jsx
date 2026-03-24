import './Sidebar.css'

const MENU = [
  {
    title: 'Manage My Account',
    items: [
      { id: 'profile',  label: 'My Profile' },
     
    ],
  },
  
]

export default function Sidebar({ active, onSelect }) {
  return (
    <aside className="sidebar">
      {MENU.map(({ title, items, directId }) => (
        <div key={title} className="sidebar-group">
          {directId ? (
            <button
              className={`sidebar-heading btn-link ${active === directId ? 'active' : ''}`}
              onClick={() => onSelect(directId)}
            >
              {title}
            </button>
          ) : (
            <p className="sidebar-heading">{title}</p>
          )}

          {items.length > 0 && (
            <ul>
              {items.map(({ id, label }) => (
                <li key={id}>
                  <button
                    className={`sidebar-item btn-link ${active === id ? 'active' : ''}`}
                    onClick={() => onSelect(id)}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </aside>
  )
}
