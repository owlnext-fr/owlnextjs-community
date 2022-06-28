
import View from './View';
import InboxIcon from '@mui/icons-material/Inbox';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CakeIcon from '@mui/icons-material/Cake';
import PersonIcon from '@mui/icons-material/Person';
import { formatDate, formatPhoneNumber } from 'utils/common';
import { useCallback, useMemo } from 'react';
import { ReduxUniversalSetter } from 'app/types/global';
import normalizeFirstname from 'utils/normalizeFirstname';

type Props = {
  loadingLayoutSearch: boolean;
  layoutSearchList: any[];
  setAppFields: ReduxUniversalSetter;
  setSpecificAboveObject: (arg: {
    type: string;
    parent: any;
  }) => void;
  setSideblockFields: ReduxUniversalSetter
}

const ViewModel: React.FC<Props> = ({
  loadingLayoutSearch,
  layoutSearchList,
  setAppFields,
  setSpecificAboveObject,
  setSideblockFields
}) => {
  const formatList = useMemo(() => {
    let localDatas: Array<any> = []
    let headers: Array<any> = [
    ]

    for (let i = 0; i < layoutSearchList.length; i ++) {
      let temp: {options: any, data: Array<any>, originalData: any} = {
        options: {
          isDisabled: layoutSearchList[i].isArchived
        },
        originalData: layoutSearchList[i],
        data: [
          {
            value: `${layoutSearchList[i].firstName} ${layoutSearchList[i].lastName}`,
            cellType: 'text',
            width: 'third',
            icon: <PersonIcon />
          },
          {
            value: layoutSearchList[i].birthDate ? formatDate(layoutSearchList[i].birthDate || '') : '-',
            cellType: 'text',
            width: 'third',
            icon: <CakeIcon />
          },
          {
            value: layoutSearchList[i].email,
            cellType: 'text',
            width: 'third',
            icon: <AlternateEmailIcon />
          },
          {
            value: formatPhoneNumber(layoutSearchList[i].mobilePhone || ''),
            cellType: 'text',
            width: 'third',
            icon: <LocalPhoneIcon />
          },
          // {
          //   value: (list[i].Address ? list[i].Address : '-') + (list[i].ZipCode !== null ? list[i].ZipCode : ''),
          //   cellType: 'text',
          //   width: 'twothird',
          //   icon: <LocationOnIcon />
          // }
        ]
      }

      if (layoutSearchList[i].isArchived) {
        temp.data.push({
          cellType: 'badgeTopRight',
          color: '#BA8BE9',
          icon: <InboxIcon />
        })
      }

      localDatas.push(temp)
    }
    return {
      data: localDatas,
      headers,
    }
  } , [layoutSearchList])

  const onClickRow = useCallback((e: React.SyntheticEvent , client: any) => {
    e.stopPropagation()
    setAppFields('selectedItem', 'Patient_' + client.id)
    setSideblockFields('sideblockTitle', normalizeFirstname(client.firstName) + ' ' + client.lastName)
    setSpecificAboveObject({
        type: 'PatientDetails',
        parent: client
    })
    // setAppFields('isSearchScreen', false)
  }, [setAppFields, setSideblockFields, setSpecificAboveObject])

  
  return (
    <View
      loadingLayoutSearch={loadingLayoutSearch}
      layoutSearchList={layoutSearchList}
      formatList={formatList}
      onClickRow={onClickRow}
    />
  );
};

export default ViewModel;

