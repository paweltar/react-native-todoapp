export const TOGGLE_STATE = 'TOGGLE_STATE';
export const UPDATE_TEXT = 'UPDATE_TEXT';
export const SUBMIT_TEXT = 'SUBMIT_TEXT';
export const REMOVE_FINISHED = 'REMOVE_FINISHED';

export const toggleState = id => ({
  type: TOGGLE_STATE,
  id,
});

export const updateText = text => ({
  type: UPDATE_TEXT,
  text,
});

export const submitText = () => ({
  type: SUBMIT_TEXT,
});

export const removeFinished = () => ({
  type: REMOVE_FINISHED,
});
