import React from 'react'; // Asegúrate de importar React
import styles from './backgroundGradient.module.css';

// Especifica el tipo de las props del componente, incluyendo `children`
interface BackgroundGradientProps {
  children: React.ReactNode;
}

const BackgroundGradient: React.FC<BackgroundGradientProps> = ({ children }) => {
  return (
    <section className={styles.gradientBackground}>
      {children}
    </section>
  );
};

export default BackgroundGradient;
