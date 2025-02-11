import React from "react";
import styles from "./Skeleton.module.css";
import clsx from 'clsx'
type SkeletonProps = {

  variant?: "text" | "circle" | "rectangle" ;
  
};

export const Skeleton: React.FC<SkeletonProps> = ({
  
  variant="text",
 
}) => {
  return (
    <div
      className={clsx(styles.skeleton,styles[variant])}
      
    />
  );
};