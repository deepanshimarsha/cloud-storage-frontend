import classes from "./CloudStorageInfoBanner.module.css";
import horizontalThreeDots from "../../../../../assets/images/horizontalThreeDots.png";

export default function CloudStorageInfoBanner({
  brandName,
  fileCount,
  brandLogo,
}) {
  return (
    <div className={classes.storageInfoBanner}>
      <div className={classes.topInfo}>
        <div className={classes.infoSection}>
          <div className={classes.brandLogo}>
            <img src={brandLogo} alt="storage-brand-logo" />
          </div>

          <div className={classes.horizontalThreeDots}>
            <img src={horizontalThreeDots} alt="horizontal-three-dots" />
          </div>
        </div>
        <div className={classes.infoSection}>
          <div className={classes.brandName}>{brandName}</div>

          <div className={classes.fileCount}>{fileCount} files</div>
        </div>
      </div>
      <div className={classes.bottomInfo}>
        <div className={classes.storageUsageInfo}>10 GB or 15 GB Used</div>
        <div
          className={classes.storageUsageBar}
          style={{
            background:
              brandName === "Google Drive"
                ? "#FFECC7 0% 0% no-repeat padding-box"
                : brandName === "Drop Box"
                ? "#A0B6FF 0% 0% no-repeat padding-box"
                : "#5EE2A0 0% 0% no-repeat padding-box",
          }}
        >
          <div
            className={classes.storageUsed}
            style={{
              background:
                brandName === "Google Drive"
                  ? "#FFA700 0% 0% no-repeat padding-box"
                  : brandName === "Drop Box"
                  ? "#0008C6 0% 0% no-repeat padding-box"
                  : "#085A15 0% 0% no-repeat padding-box",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
