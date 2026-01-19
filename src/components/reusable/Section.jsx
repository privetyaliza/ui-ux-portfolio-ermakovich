import React from 'react';

export default function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="section">
      
      {/* Header Group: Keeps Title and Intro close together */}
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        {intro && <div className="section-intro">{intro}</div>}
      </div>

      {/* Main Content: Still separated by the large 48px gap */}
      {children}
      
    </section>
  );
}