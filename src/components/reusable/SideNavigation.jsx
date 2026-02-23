import React, { useEffect, useState } from 'react';

const SideNavigation = ({ sections }) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // 1. Flatten the list so we can loop through every single title
      const allItems = sections.reduce((acc, section) => {
        acc.push(section);
        if (section.subItems) {
          acc.push(...section.subItems);
        }
        return acc;
      }, []);

      // 2. Set our tracker exactly 120px from the top of the window
      // (This perfectly catches the 100px offset we use when clicking a link)
      const scrollPosition = window.scrollY + 120;
      let current = '';

      // 3. THE BOOTSTRAP METHOD: Measure from this title to the NEXT title
      for (let i = 0; i < allItems.length; i++) {
        const currentElement = document.getElementById(allItems[i].id);
        // Look ahead to find the start of the NEXT section
        const nextElement = i < allItems.length - 1 ? document.getElementById(allItems[i + 1].id) : null;

        if (currentElement) {
          const top = currentElement.offsetTop;
          
          // If there is a next section, this section "owns" all the space until the next one starts.
          // If it's the very last section, it owns the space until the bottom of its own content.
          const bottom = nextElement ? nextElement.offsetTop : top + currentElement.offsetHeight;

          // If our scroll position falls perfectly between the top and bottom bounds, we found it!
          if (scrollPosition >= top && scrollPosition < bottom) {
            current = allItems[i].id;
            break; 
          }
        }
      }

      // Failsafe: If the user scrolled to the absolute bottom of the page, select the last item
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        current = allItems[allItems.length - 1].id;
      }

      // Only update state if we found a valid section, preventing flickering
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check immediately on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Scrolls the element to exactly 100px from the top of the screen
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (!sections) return null;

  return (
    <nav className="simple-side-nav">
      <h3 className="simple-side-nav-title">Contents</h3>
      <ul className="simple-side-nav-list">
        {sections.map((section) => {
          
          // Checks if the parent or any child is currently active
          const isExpanded = 
            activeSection === section.id || 
            (section.subItems && section.subItems.some(sub => sub.id === activeSection));

          return (
            <li key={section.id}>
              <button
                className={`simple-side-nav-link ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => scrollToSection(section.id)}
              >
                {section.title}
              </button>
              
              {/* Only render subItems if we are currently inside this section */}
              {section.subItems && isExpanded && (
                <ul className="simple-side-nav-list">
                  {section.subItems.map((sub) => (
                    <li key={sub.id}>
                      <button
                        className={`simple-side-nav-link sub-link ${activeSection === sub.id ? 'active' : ''}`}
                        onClick={() => scrollToSection(sub.id)}
                      >
                        {sub.title}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SideNavigation;