import bearishLogo from "../../assets/images/Bearish OS Logo_Orange.png";
import CreateButton from "./CreateButton/CreateButton";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <div className={classes.headerMain}>
      <div className={classes.headerRow1}>
        <div className={classes.bearishLogo}>
          <img src={bearishLogo} alt="bearish-logo" />
        </div>
        <div className={classes.companyImageRectangle}></div>
        <div className={classes.companyName}>
          <span>Company Name</span>
        </div>
        <div className={classes.arrowIcon}></div>
      </div>
      <div className={classes.headerRow2}>
        <CreateButton />
        <div className={classes.plugIcon}></div>
      </div>
    </div>
  );
}
