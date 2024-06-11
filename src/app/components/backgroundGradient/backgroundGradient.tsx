// src/app/components/backgroundgradient/backgroundGradient.jsx
import React from 'react';
import styles from './backgroundGradient.module.css'; // Asegúrate de que el archivo de estilos esté correctamente importado

const BackgroundGradient = ({ children }) => {
  return (
    <div className={styles.gradientBackground}>
      {children}
    </div>
  );
};

export default BackgroundGradient;
