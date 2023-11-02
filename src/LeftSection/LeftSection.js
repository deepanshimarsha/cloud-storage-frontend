import Header from "./Header/Header";
import classes from "./LeftSection.module.css";
import StorageOptions from "./StorageOptions/StorageOptions";

export default function LeftSection() {
  return (
    <div className={classes.leftMain}>
      <Header />
      <StorageOptions />
    </div>
  );
}
