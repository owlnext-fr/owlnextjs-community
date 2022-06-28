import View from './View';

type Props = {
  data: Array<any>,
  headers: Array<any>,
  hasHeader?: boolean,
  onClickRow?: (e: any, object: any) => void,
  title?: string,
  handleClickPlus?: (() => void) | null,
  selectedItem: string,
  type: string
}

const ViewModel: React.FC<Props> = ({
  data,
  headers,
  hasHeader = false,
  onClickRow = () => {},
  title = '',
  handleClickPlus = null,
  selectedItem,
  type
}) => {

  return (
    <View 
      data={data}
      headers={headers}
      hasHeader={hasHeader}
      onClickRow={onClickRow}
      title={title}
      handleClickPlus={handleClickPlus}
      selectedItem={selectedItem}
      type={type}
    />
  );
};

export default ViewModel;

