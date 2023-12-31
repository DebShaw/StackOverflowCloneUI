import * as api from "../api";
export const askQuestion = (questionData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.postQuestion(questionData);
    dispatch({ type: "POST_QUESTION", payload: data });
    dispatch(fetchAllQuestion());
    navigate("/");
  } catch (error) {
    alert(error.response.data.message);
  }
};
export const fetchAllQuestion = () => async (dispatch) => {
  try {
    const { data } = await api.getAllQuestions();
    dispatch({ type: "FETCH_ALL_QUESTION", payload: data });
  } catch (error) {
    alert(error.response.data.message);
  }
};
export const postAnswer = (answerData) => async (dispatch) => {
  try {
    const { id, noOfAnswers, answerBody, userAnswered, userId } = answerData;
    const { data } = await api.postAnswer(
      id,
      noOfAnswers,
      answerBody,
      userAnswered,
      userId
    );
    dispatch({ type: "POST_ANSWER", payload: data });
    dispatch(fetchAllQuestion());
  } catch (error) {
    alert(error.response.data.message);
  }
};
export const deleteQuestion = (id, navigate) => async (dispatch) => {
  try {
    api.deleteQuestion(id);
    dispatch(fetchAllQuestion());
    navigate("/");
  } catch (error) {
    alert(error.response.data.message);
  }
};
export const deleteAnswer = (id, answerId, noOfAnswers) => async (dispatch) => {
  try {
    await api.deleteAnswer(id, answerId, noOfAnswers);
    dispatch(fetchAllQuestion());
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const voteQuestion = (id, type, userId) => async (dispatch) => {
  try {
    await api.voteQuestion(id, type, userId);
    dispatch(fetchAllQuestion());
  } catch (error) {
    alert(error.response.data.message);
  }
};
