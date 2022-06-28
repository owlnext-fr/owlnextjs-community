import { ReactElement } from "react";

declare type SideBlockType = {
    sideblockHistory: boolean;
    render: ConnectedComponent<FC<Props>>
}