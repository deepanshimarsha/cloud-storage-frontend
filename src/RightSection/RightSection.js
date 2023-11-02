import ActiveLink from "./ActiveLink/ActiveLink";
import classes from "./RightSection.module.css";
import RightSectionFooter from "./RightSectionFooter/RightSectionFooter";
export default function RightSection() {
  return (
    <div className={classes.rightMain}>
      <div className={classes.header}>
        <span className={classes.heading}>Cloud Analytics</span>
        <div className={classes.sizeIcon}></div>
      </div>
      <div className={classes.subHeading}>5 Active Analytic Links</div>
      <div className={classes.linkList}>
        <ActiveLink />
        <ActiveLink />
        <ActiveLink />
      </div>
      <div className={classes.moreLinks}>
        <div className={classes.arrowIcon}></div>
        <div className={classes.viewMoreBtn}>View More</div>
      </div>
      <RightSectionFooter />
    </div>
  );
}
