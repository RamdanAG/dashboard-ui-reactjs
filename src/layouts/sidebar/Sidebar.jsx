import { useEffect, useState, useContext } from 'react';
import { personsImgs } from '../../utils/images';
import { 
  navigationLinksLine1, 
  navigationLinksLine2, 
  navigationLinksLine3, 
  navigationLinksLine4 
} from '../../data/data';
import "./Sidebar.css";
import { SidebarContext } from '../../context/sidebarContext';

const Sidebar = () => {
  const [activeLinkIdx] = useState(1);
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen } = useContext(SidebarContext);

  useEffect(() => {
    setSidebarClass(isSidebarOpen ? 'sidebar-change' : '');
  }, [isSidebarOpen]);

  // Function untuk render setiap section
  const renderNavSection = (links) => (
    <>
      <ul className="nav-list">
        {links.map((navigationLink) => (
          <li className="nav-item" key={navigationLink.id}>
            <a 
              href="#" 
              className={`nav-link ${navigationLink.id === activeLinkIdx ? 'active' : ''}`}
            >
              <img 
                src={navigationLink.image} 
                className="nav-link-icon" 
                alt={navigationLink.title} 
              />
              <span className="nav-link-text">{navigationLink.title}</span>
            </a>
          </li>
        ))}
      </ul>
      <div className="separator"></div> {/* Pemisah antar section */}
    </>
  );

  return (
    <div className={`sidebar ${sidebarClass}`}>
      <div className="user-info">
        <div className="info-img img-fit-cover">
          <img src={personsImgs.person_two} alt="profile image" />
        </div>
        <div className='info-user'>
          <span className="info-name">Ellen Joe</span>
          <p className="info-descripction">Manager</p>
        </div>

      </div>

      <nav className="navigation">
        {renderNavSection(navigationLinksLine1)}
        <hr className='sidebar-line'/>
        {renderNavSection(navigationLinksLine2)}
        <hr className='sidebar-line'/>
        {renderNavSection(navigationLinksLine3)}
        <hr className='sidebar-line'/>
        {renderNavSection(navigationLinksLine4)}
      </nav>
    </div>
  );
}

export default Sidebar;
