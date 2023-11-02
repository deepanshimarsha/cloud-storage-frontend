import classes from "./StorageOptions.module.css";
import bearishLogo from "../../assets/images/Bearish OS Logo_Orange.png";
import settingIcon from "../../assets/images/Light 1px-settings.png";
import dropboxIcon from "../../assets/images/dropboxIcon.png";
import driveIcon from "../../assets/images/driveIcon.png";
export default function StorageOptions() {
  return (
    <div className={classes.container}>
      <div className={classes.headingContainer}>
        <span className={classes.heading}>Cloud Storage</span>
        <div className={classes.smLine}></div>
      </div>
      <div className={classes.optionsList}>
        <div className={classes.option}>
          <div className={classes.singleOption}>
            <img
              className={classes.brandLogo}
              src={bearishLogo}
              alt="bearish-logo"
            />

            <span className={classes.optionContent}> Bearish OS</span>
          </div>
          <img
            src={settingIcon}
            alt="sttings-icon"
            className={classes.settingIcon}
          ></img>
        </div>
        <div className={classes.option}>
          <div className={classes.singleOption}>
            <img
              className={classes.brandLogo}
              src={driveIcon}
              alt="bearish-logo"
            />

            <span className={classes.optionContent}> Google Drive </span>
          </div>
          <img
            src={settingIcon}
            alt="sttings-icon"
            className={classes.settingIcon}
          ></img>
        </div>
        <div className={classes.option}>
          <div className={classes.singleOption}>
            <img
              className={classes.brandLogo}
              src={dropboxIcon}
              alt="bearish-logo"
            />

            <span className={classes.optionContent}>Dropbox</span>
          </div>
          <img
            src={settingIcon}
            alt="sttings-icon"
            className={classes.settingIcon}
          ></img>
        </div>
      </div>
      <div className={classes.moreOptions}>
        <div className={classes.dropdownIcon}></div>
        <div className={classes.text}>View More</div>
      </div>
      <div className={classes.footer}>
        <span className={classes.heading}>Shared</span>
        <div className={classes.smLine}></div>
      </div>
    </div>
  );
}
