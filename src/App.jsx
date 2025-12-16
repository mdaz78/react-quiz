import { useEffect, useReducer } from 'react';

import Error from './components/Error';
import FinishScreen from './components/FinishScreen';
import Footer from './components/Footer';
import Header from './components/Header';
import Loader from './components/Loader';
import Main from './components/Main';
import NextQuestion from './components/NextQuestion';
import Progress from './components/Progress';
import Question from './components/Question';
import StartScreen from './components/StartScreen';
import Timer from './components/Timer';

const SECONDS_PER_QUESTION = 15;

const initialState = {
  questions: [],
  status: 'loading', // different statuses -> 'loading', 'error', 'ready', 'active', 'finished'
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  secondsRemaining: null,
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
        secondsRemaining: state.questions.length * SECONDS_PER_QUESTION,
      };

    case 'newAnswer': {
      const question = state.questions.at(state.index);

      return {
        ...state,
        answer: payload,
        points:
          payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    }

    case 'nextQuestion':
      return { ...state, index: state.index + 1, answer: null };

    case 'finished':
      return {
        ...state,
        status: 'finished',
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };

    case 'restart':
      return {
        ...initialState,
        questions: state.questions,
        status: 'ready',
        highScore: state.highScore,
      };

    case 'tick':
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? 'finished' : state.status,
      };

    default:
      throw new Error(`Action unknown ${action}`);
  }
}

function App() {
  const [
    { questions, status, index, answer, points, highScore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numberOfQuestions = questions?.length;
  const maxPossiblePoints = questions.reduce(
    (prev, current) => prev + current.points,
    0
  );

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
          <>
            <Progress
              index={index}
              numberOfQuestions={numberOfQuestions}
              points={points}
              maxPoints={maxPossiblePoints}
              answer={answer}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <Timer secondsRemaining={secondsRemaining} dispatch={dispatch} />
              <NextQuestion
                dispatch={dispatch}
                answer={answer}
                index={index}
                numberOfQuestions={numberOfQuestions}
              />
            </Footer>
          </>
        )}
        {status === 'finished' && (
          <FinishScreen
            maxPossiblePoints={maxPossiblePoints}
            points={points}
            highScore={highScore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
