import {createStore} from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import { noteReducer } from './reducers/noteReducer';

const counterReducer = (state = 0  , action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1

      case 'DECREMENT':
        return state - 1  

    case 'ZERO':
        return 0

    default:
      return state
  }
}



// const store = createStore(counterReducer, composeWithDevTools())
const store = createStore(noteReducer, composeWithDevTools())

store.subscribe(() =>{
  const storeNow = store.getState()
  console.log("Se modifico el store..", storeNow);

})

store.dispatch({
  type:'NEW_NOTE',
  data:{
    content: 'El estado de la App esta en la store de Redux',
    important: true,
    id: 1
  }
})

store.dispatch({
  type:'NEW_NOTE',
  data:{
    content: 'Los cambios de estado se realizan mediante acciones',
    important: false,
    id: 2
  }
})

function App() {

  return (
    <div>
      <ul>
        {store.getState().map( note => 
          <li key={note.id}>
            {note.content} <strong> {note.important ? 'important':''}</strong>
          </li>
        )}
      </ul>
    </div>
  )
}

export default App


