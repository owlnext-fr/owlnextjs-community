import { SideBlockType } from 'app/types/SideBlockType'
import TicketDetails from '../SideBlockAbove/SideBlockTypes/TicketDetails'

interface ComponentsType {
    [key: string]: SideBlockType
}

export const Components: ComponentsType = {
    TicketDetails: {
        sideblockHistory: true,
        render: TicketDetails
    }
}

export default Components