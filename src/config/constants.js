export const SECONDS_PER_QUESTION = 15;

export const initialState = {
  questions: [],
  status: 'loading', // different statuses -> 'loading', 'error', 'ready', 'active', 'finished'
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  secondsRemaining: null,
};
