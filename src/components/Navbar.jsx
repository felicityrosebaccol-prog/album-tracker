
import { useCollection } from "../context/CollectionContext.jsx";

export default function Navbar({ page, setPage }) {
  const { albums } = useCollection();

  const count = Object.keys(albums).length;

  const tab = (id, label) => (
    <button
      key={id}
      className={page === id ? "nav-tab active" : "nav-tab"}
      onClick={() => setPage(id)}
    >
      {label}
    </button>
  );

  return (
    <header className="navbar">
      <div className="nav-inner">
        <h1 className="brand">Album Tracker</h1>

        <nav className="nav-tabs">
          {tab("discover", "Discover")}

          {tab("collection", `My Collection (${count})`)}

          {tab("ai", "Recommendations")}
        </nav>
      </div>
    </header>
  );
}

