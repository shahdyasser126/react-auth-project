export default function Sidebar({ active, setActive }) {
  return (
    <aside className="sidebar">
      
      {/* Section 1 */}
      <p className="sidebar-heading">Manage My Account</p>
      <ul>
        <li>
          <button 
            className={`sidebar-item border-0 bg-transparent ${active === "profile" ? "active" : ""}`}
            onClick={() => setActive("profile")}
          >
            My Profile
          </button>
        </li>
      </ul>

      {/* Section 2 */}
      <p className="sidebar-heading">My Orders</p>
      <ul>
        <li>
          <button 
            className={`sidebar-item border-0 bg-transparent {active === "orders" ? "active" : ""}`} 
            onClick={() => setActive("orders")}
          >
            My Orders
          </button>
        </li>

        <li>
          <button 
            className={`sidebar-item border-0 bg-transparent {active === "returns" ? "active" : ""}`} 
            onClick={() => setActive("returns")}
          >
            My Returns
          </button>
        </li>

        <li>
          <button 
            className={`sidebar-item border-0 bg-transparent {active === "cancellations" ? "active" : ""}`} 
            onClick={() => setActive("cancellations")}
          >
            My Cancellations
          </button>
        </li>
      </ul>

      {/* Section 3 */}
      <p className="sidebar-heading">Wishlist</p>
      <ul>
        <li>
          <button 
            className={`sidebar-item border-0 bg-transparent {active === "wishlist" ? "active" : ""}`} 
            onClick={() => setActive("wishlist")}
          >
            My Wishlist
          </button>
        </li>
      </ul>

    </aside>
  );
}