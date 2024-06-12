// src/app/components/backgroundgradient/backgroundGradient.jsx
import React from 'react';
import styles from './backgroundGradient.module.css'; // Asegúrate de que el archivo de estilos esté correctamente importado

const BackgroundGradient = ({ children }) => {
  return (
    <section className={styles.gradientBackground}>
      {children}
    </section>
  );
};

export default BackgroundGradient;
