import Link from "next/link";
import React from "react";

// import styles from "./Header.module.scss";

export const HeaderComponent = () => {
  return (
    <header>
      <Link href='/test'>test</Link>
    </header>
  );
};

HeaderComponent.displayName = "Header";
