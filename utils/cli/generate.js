const fs = require('fs');

const actionName = process.argv.slice(2)[0];

const upperActionName = actionName.toUpperCase();
const camelActionName = `${actionName[0].toUpperCase()}${actionName.slice(1).toLowerCase()}`;
const lowerActionName = actionName.toLowerCase();

// creation du fichier action
const actionpath = `app/actions/${lowerActionName}.ts`;

if (!fs.existsSync(actionpath)) {
  const textAction = `export const CHANGE_${upperActionName}PAGE_FIELDS = 'CHANGE_${upperActionName}PAGE_FIELDS';
  
  export const change${camelActionName}PageFields: ReduxUniversalSetter = (field, value) => ({
    type: CHANGE_${upperActionName}PAGE_FIELDS,
    field,
    value,
  });
  `;

  fs.writeFile(actionpath, textAction, (err) => {
    if (err) throw err;
    console.log('action create');
  });
}
// creation du reducer
const reducerpath = `app/reducers/${lowerActionName}Reducer.ts`;

if (!fs.existsSync(reducerpath)) {
  const textReducer = `
  import { AnyAction } from 'redux'
  import { CHANGE_${upperActionName}PAGE_FIELDS } from 'app/actions/${lowerActionName}'

  type State = {

  }

  const initialState = {
  }
  
  const ${lowerActionName}Reducer = (state: State = initialState, action: AnyAction = {type: ''}) => {
    switch (action.type) {
      case CHANGE_${upperActionName}PAGE_FIELDS:
        return {
          ...state,
          [action.field]: action.value,
        } as State
      default:
        return state;
    }
  };
  
  export default ${lowerActionName}Reducer;
  `;

  fs.writeFile(reducerpath, textReducer, (err) => {
    if (err) throw err;
    console.log('reducer create');
  });
}

// creation du middleware

const middlewarepath = `app/middlewares/${lowerActionName}Middleware.ts`;

if (!fs.existsSync(middlewarepath)) {
  const textMiddleware = `
  import { Middleware } from "redux";
  import { RootState } from "app/store";

  const ${lowerActionName}Middleware: Middleware<{}, RootState> = (store) => (next) => (action) => {
    switch (action.type) {
      default:
        next(action);
    }
  };
  
  export default ${lowerActionName}Middleware;
  `;

  fs.writeFile(middlewarepath, textMiddleware, (err) => {
    if (err) throw err;
    console.log('middleware create');
  });
}
