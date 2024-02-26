
import { Fragment } from "react";
import WalletPoint from "./waleet-point";
import SidebarLists from "./sidebar-lists";

const SidebarContainer = () => {
  return (
    <Fragment>
      <WalletPoint />
      <SidebarLists />
    </Fragment>
  );
};

export default SidebarContainer;
