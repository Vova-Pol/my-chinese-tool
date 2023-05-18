import { useState } from 'react';
import {
  LINE_BREAK_AT_THE_END_ERROR_TEXT,
  LINE_BREAK_AT_THE_END_REGEX,
  MIN_LENGTH_ERROR_TEXT,
  MORE_THAN_ONE_LINE_BREAK_ERROR_TEXT,
  MORE_THAN_ONE_LINE_BREAK_REGEX,
  TEXTAREA_MIN_LENGTH,
} from '../utils/constants';
import { IFormValues } from '../models/models';

export const useTextareaValidation = (initialValues: IFormValues) => {
  const [values, setValues] = useState(initialValues);
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState('');

  function isValidTextArea(value: string) {
    const isValidMinLength = value.length > TEXTAREA_MIN_LENGTH;
    const isValidLineBreakAtTheEnd = !LINE_BREAK_AT_THE_END_REGEX.test(value);
    const isValidMoreThanOneLineBreak =
      !MORE_THAN_ONE_LINE_BREAK_REGEX.test(value);
    const isValidTotal =
      isValidMinLength &&
      isValidLineBreakAtTheEnd &&
      isValidMoreThanOneLineBreak;
    return {
      isValidTotal,
      isValidMinLength,
      isValidLineBreakAtTheEnd,
      isValidMoreThanOneLineBreak,
    };
  }

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setValues({ ...values, [name]: value });

    const {
      isValidLineBreakAtTheEnd,
      isValidMoreThanOneLineBreak,
      isValidMinLength,
      isValidTotal,
    } = isValidTextArea(evt.target.value);
    setIsValid(isValidTotal);

    setError(
      !isValidLineBreakAtTheEnd
        ? LINE_BREAK_AT_THE_END_ERROR_TEXT
        : !isValidMoreThanOneLineBreak
        ? MORE_THAN_ONE_LINE_BREAK_ERROR_TEXT
        : !isValidMinLength
        ? MIN_LENGTH_ERROR_TEXT
        : '',
    );
  };

  const resetForm = () => {
    setValues(initialValues);
    setIsValid(false);
  };

  return { values, isValid, error, handleChange, resetForm };
};
