import React from 'react';
import { FaDesktop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa'; // Importing icons for devices

export default function CanvasToolbar() {
  return (
    <div style={styles.toolbar}>
      <div style={styles.projectName}>My EMR Project</div>
      <div style={styles.deviceIcons}>
        <FaDesktop style={styles.icon} title="Desktop" />
        <FaTabletAlt style={styles.icon} title="Tablet" />
        <FaMobileAlt style={styles.icon} title="Mobile" />
      </div>
      <button style={styles.publishButton}>Publish</button>
    </div>
  );
}

const styles = {
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#f5f5f5',
    borderBottom: '1px solid #ddd',
  },
  projectName: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  deviceIcons: {
    display: 'flex',
    gap: '10px',
  },
  icon: {
    fontSize: '20px',
    cursor: 'pointer',
  },
  publishButton: {
    padding: '8px 16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};
