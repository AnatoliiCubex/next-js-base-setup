import React from "react";
import classNames from "classnames";

import styles from "./Loader.module.scss";

type Props = {
  loading: boolean;
};

export const LoaderComponent: React.FC<Props> = ({ loading }) => {
  const className = classNames(styles.loaderContainer, {
    [styles.loading]: loading,
  });
  return (
    <div className={className}>
      <div className={styles.loader} />
    </div>
  );
};

LoaderComponent.displayName = "Loader";
