import View from './View';

type Props = {
  selectedDetailsSubTab: string,
  currentObject: any,
}

const ViewModel: React.FC<Props> = ({
  selectedDetailsSubTab,
  currentObject,
}) => {

  return (
    <View 
      selectedDetailsSubTab={selectedDetailsSubTab}
      currentObject={currentObject}
    />
  );
};

export default ViewModel;

