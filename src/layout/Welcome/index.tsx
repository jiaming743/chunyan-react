import React, { PropsWithChildren } from 'react';
import styles from './index.module.less';

export const WelcomeLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.welcome}>{children}</div>;
};
