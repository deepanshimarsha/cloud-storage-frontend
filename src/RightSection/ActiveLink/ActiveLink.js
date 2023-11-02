import classes from "./ActiveLink.module.css";
import linkIcon from "../../assets/images/linkIcon.png";
import folderIcon from "../../assets/images/folderIcon.png";
import viewIcon from "../../assets/images/viewIcon.png";

export default function ActiveLink() {
  return (
    <div className={classes.linkContainer}>
      <div className={classes.linkHeader}>
        <div className={classes.linkHeaderLeft}>
          <img src={linkIcon} alt="link-icon" className={classes.linkIcon} />
          <div className={classes.linkName}>Link Name One</div>
        </div>
        <div className={classes.linkHeaderRight}>
          <div className={classes.arrowIcon}></div>
        </div>
      </div>
      <div className={classes.linkDescription}>
        <div className={classes.desc}>
          <img
            src={folderIcon}
            alt="folder-icon"
            className={classes.folderIcon}
          />
          <span className={classes.folderLink}>Folder or File linked...</span>
        </div>

        <div className={classes.desc}>
          <img src={viewIcon} alt="view-icon" className={classes.viewIcon} />
          <span className={classes.viewCount}>10 Total Views</span>
        </div>
      </div>
    </div>
  );
}
