import React from "react";
import classNames from "classnames";
import styles from "../../Results.module.css";
import ResultCategory from "../ResultCategory";
import { Result } from "hooks/useResults";

const ValidResults = ({ results }: { results: Result[] }) => (
  <div className={styles.container}>
    <h2>Results</h2>
    <p className={styles.linkDescription}>
      Bookmark the link below if you want to revisit these results.
    </p>
    <a href={window.location.href}>
      <pre>{window.location.href}</pre>
    </a>
    <div className={styles.resultsContainer}>
      <p className={classNames(styles.header, styles.name)}>NAME</p>
      <p className={classNames(styles.header, styles.score)}>SCORE</p>
      <p className={classNames(styles.header, styles.rank)}>RANK</p>
      {results.map((result) => (
        <ResultCategory key={result.name} result={result} />
      ))}
    </div>
  </div>
);

export default ValidResults;
