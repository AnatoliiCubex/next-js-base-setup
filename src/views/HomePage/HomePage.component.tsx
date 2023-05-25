import classNames from "classnames";
import styles from "./HomePage.module.scss";

export const HomePageComponent: React.FC = () => {
  const homeClassName = classNames(styles.homePage);
  return <div className={homeClassName}>HomePage</div>;
};

HomePageComponent.displayName = "HomePage";
