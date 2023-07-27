import axios from 'axios';

export const fetchGreetingRequest = () => ({
  type: 'FETCH_GREETING_REQUEST',
});

export const fetchGreetingSuccess = (greeting) => ({
  type: 'FETCH_GREETING_SUCCESS',
  payload: greeting,
});

export const fetchGreetingFailure = (error) => ({
  type: 'FETCH_GREETING_FAILURE',
  payload: error,
});

export const fetchGreeting = () => (dispatch) => {
  dispatch(fetchGreetingRequest());
  axios
    .get('http://localhost:3000/greetings')
    .then((response) => {
      const greeting = response.data.name;
      dispatch(fetchGreetingSuccess(greeting));
    })
    .catch((error) => {
      dispatch(fetchGreetingFailure(error.message));
    });
};
