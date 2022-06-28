const fs = require('fs');

const componentName = process.argv.slice(2)[0];
const path = process.argv.slice(3)[0] || '';

const camelComponentName = `${componentName[0].toUpperCase()}${componentName.slice(1).toLowerCase()}`;
const lowerComponentName = componentName.toLowerCase();

const componentDir = `app/components${path}/${camelComponentName}`;

if (!fs.existsSync(componentDir)) {
  fs.mkdirSync(componentDir, { recursive: true });
}

// creation du component
const componentpath = `app/components${path}/${camelComponentName}/Model.tsx`;

if (!fs.existsSync(componentpath)) {
  const textAction = `
  import View from './View';

  type Props = {

  }
  
  const ViewModel: React.FC<Props> = () => {
    
    return (
      <View />
    );
  };
  
  export default ViewModel;
  
  `;

  fs.writeFile(componentpath, textAction, (err) => {
    if (err) throw err;
    console.log('viewModel create');
  });
}
// creation de la view

const viewpath = `app/components${path}/${camelComponentName}/View.tsx`;

if (!fs.existsSync(viewpath)) {
  const textAction = `
  import styles from './styles.module.scss';

  type Props = {

  }
    
  const View: React.FC<Props> = () => {
    
    return (
      <div className={styles.${lowerComponentName}}>
      </div>
    );
  };
  
  export default View;
  
  `;

  fs.writeFile(viewpath, textAction, (err) => {
    if (err) throw err;
    console.log('view create');
  });
}

// creation de la feuille de style

const stylepath = `app/components${path}/${camelComponentName}/styles.module.scss`;

if (!fs.existsSync(stylepath)) {
  const textAction = `
  .${lowerComponentName} {

  }
  
  `;

  fs.writeFile(stylepath, textAction, (err) => {
    if (err) throw err;
    console.log('scss create');
  });
}

// creation du container

const containerpath = `app/components${path}/${camelComponentName}/index.ts`;

if (!fs.existsSync(stylepath)) {
  const textAction = `
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState } from 'app/store';

import ViewModel from './Model';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: RootState) => ({
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: Dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
  `;

  fs.writeFile(containerpath, textAction, (err) => {
    if (err) throw err;
    console.log('container create');
  });
}
