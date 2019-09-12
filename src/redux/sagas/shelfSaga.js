import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchShelf() {
  try {
    const response = yield axios.get('/api/shelf');
    console.log(response, 'this is a response');
    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'SET_SHELF', payload: response.data });
  } catch (error) {
    console.log('Shelf get request failed', error);
  }
}

function* shelfSaga() {
  yield takeLatest('SHELF', fetchShelf);
}

export default shelfSaga;