import { useCallback, useState } from "react";

const useForm = (initialForm, schema, handleSubmit) => {
  const [data, setData] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleReset = useCallback(() => {
    setData(initialForm);
    setErrors({});
  }, [initialForm]);
};
