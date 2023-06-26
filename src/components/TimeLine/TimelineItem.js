import React, { useState } from 'react';
import '../../screens/ReleaseNotesScreen.css';

const TimelineItem = ({ version, date, description, position }) => {
  const containerClass =
    position === 'right' ? 'right-container' : 'left-container';

  const [expanded, setExpanded] = useState(false); // Estado para controlar la expansión

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  const renderNestedItems = (items) => (
    <ol>
      {items.map((item, index) => (
        <li key={index}>
          <strong>{item.title}</strong>
          <ul>
            {item.items.map((nestedItem, nestedIndex) => (
              <li key={nestedIndex}>{nestedItem}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );

  return (
    <div className={`container-timeline ${containerClass}`}>
      <img src="/images/timeline.png" alt={version} />
      <div className="text-box">
        <h2>{version}</h2>
        <small>{date}</small>
        <ul>
          {description.map((item, index) => {
            if (
              typeof item === 'object' &&
              item.hasOwnProperty('title') &&
              item.hasOwnProperty('items')
            ) {
              return (
                <li key={index}>
                  <strong onClick={handleToggleExpand}>{item.title}</strong>{' '}
                  {/* Agregar onClick para expandir/contraer */}
                  {expanded && renderNestedItems(item.items)}{' '}
                  {/* Renderizar los elementos anidados solo si está expandido */}
                </li>
              );
            } else if (Array.isArray(item)) {
              return (
                <>
                  <strong onClick={handleToggleExpand}>
                    Expandir/Contraer
                  </strong>{' '}
                  {/* Agregar onClick para expandir/contraer */}
                  {expanded && renderNestedItems(item)}{' '}
                  {/* Renderizar los elementos anidados solo si está expandido */}
                </>
              );
            }
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default TimelineItem;
