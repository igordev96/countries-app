import { ChangeEvent, useState } from 'react';
import { useDebounce } from './useDebounce';

export function useController() {
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce(value);

  const onSelectValueChange = (value: string) => {
    setValue(value);
  };

  const onInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return {
    value,
    debouncedValue,
    onSelectValueChange,
    onInputValueChange,
  };
}
