import React from 'react';
import { getTextAreaError } from '../utils/utils';

export function useFormAndValidation(initialInputValues: any) {
  const [values, setValues] = React.useState(initialInputValues);
  const [errors, setErrors] = React.useState(initialInputValues);
  const [isInputValid, setIsInputValid] = React.useState(false);
  const [isTextAreaValid, setIsTextAreaValid] = React.useState(false);

  const handleInputChange = (evt: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = evt.currentTarget;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: evt.currentTarget.validationMessage });
    // setIsInputValid(evt.currentTarget.closest('form')!.checkValidity());
    setIsInputValid(Boolean(!evt.currentTarget.validationMessage));
  };

  const resetForm = () => {
    setValues(initialInputValues);
    setErrors(initialInputValues);
    setIsInputValid(false);
    setIsTextAreaValid(false);
  };

  const handleTextAreaChange = (evt: React.FormEvent<HTMLTextAreaElement>) => {
    const { name, value } = evt.currentTarget;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: getTextAreaError(evt.currentTarget.value) });
    setIsTextAreaValid(Boolean(!getTextAreaError(evt.currentTarget.value)));
  };

  return {
    values,
    handleInputChange,
    handleTextAreaChange,
    isInputValid,
    isTextAreaValid,
    setValues,
    errors,
    resetForm,
  };
}
