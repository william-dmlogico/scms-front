import React from 'react';
import styles from './Timeline.module.css';

const timelineData = [
  { year: 1887, description: 'Founding of SCMS' },
  { year: 1920, description: 'Expansion of services' },
  { year: 1960, description: 'Peak membership of 10,000' },
  { year: 1980, description: 'Introduction of new financial products' },
  { year: 2003, description: 'Partnership with Banco BGN' },
  { year: 2010, description: 'Modernization of operations' },
  { year: 2015, description: 'Focus on public sector employees' },
  { year: 2024, description: 'Continued growth and stability' }
];

const Timeline = () => {
  return (
    <section className={styles.timeline}>
      {timelineData.map((item, index) => (
        <div key={index} className={styles.timelineItem}>
          <div className={styles.timelineMarker}>+</div>
          <div className={styles.timelineYear}>{item.year}</div>
          <div className={styles.timelineNumber}>{index + 1}</div>
          <p className={styles.timelineDescription}>{item.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Timeline;