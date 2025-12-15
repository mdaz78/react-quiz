import { useEffect, useReducer } from 'react';

import Error from './components/Error';
import Header from './components/Header';
import Loader from './components/Loader';
import Main from './components/Main';
import Question from './components/Question';
import StartScreen from './components/StartScreen';

const initialState = {
  questions: [],
  status: 'loading', // different statuses -> 'loading', 'error', 'ready', 'active', 'finished'
  index: 0,
  answer: null,
};

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case 'dataReceived':
      return {
        ...state,
        questions: payload,
        status: 'ready',
      };

    case 'dataFailed':
      return {
        ...state,
        status: 'error',
      };

    case 'start':
      return {
        ...state,
        status: 'active',
      };

    case 'newAnswer':
      return {
        ...state,
        answer: payload,
      };

    default:
      throw new Error(`Action unknown ${action}`);
  }
}

function App() {
  const [{ questions, status, index, answer }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const numberOfQuestions = questions?.length;

  useEffect(() => {
    try {
      const fetchQuestions = async () => {
        const response = await fetch('http://localhost:8000/questions');
        const data = await response.json();

        dispatch({ type: 'dataReceived', payload: data });
      };
      fetchQuestions();
    } catch (err) {
      console.error(err);

      dispatch({ type: 'dataFailed' });
    }
  }, []);

  return (
    <div className='app'>
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && (
          <StartScreen
            numberOfQuestions={numberOfQuestions}
            dispatch={dispatch}
          />
        )}
        {status === 'active' && (
          <Question
            question={questions[index]}
            dispatch={dispatch}
            answer={answer}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
