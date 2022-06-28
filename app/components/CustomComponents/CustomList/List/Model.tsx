
import View from './View';

type Props = {
  data: Array<any>,
  onClickRow: (e: any, object: any) => void,
  selectedItem: string,
  type: string
}

const ViewModel: React.FC<Props> = ({
  data,
  onClickRow,
  selectedItem,
  type
}) => {
  
  return (
    <View
      data={data}
      onClickRow={onClickRow}
      selectedItem={selectedItem}
      type={type}
    />
  );
};

export default ViewModel;

