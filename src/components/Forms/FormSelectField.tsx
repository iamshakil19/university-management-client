"use client";

import { Input, Select } from "antd";
import { useFormContext, Controller } from "react-hook-form";
type SelectOptions = { value: string; label: string };
type SelectFieldProps = {
  options: SelectOptions[];
  name: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  label?: string;
  placeholder?: string;
  defaultValue?: SelectOptions;
};

const FormSelect = ({
  name,
  size,
  value,
  label,
  defaultValue,
  placeholder,
  options,
}: SelectFieldProps) => {
  const { control } = useFormContext();
  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            onChange={onChange}
            size={size}
            options={options}
            style={{ width: "100%" }}
            value={value}
            placeholder={placeholder}
          />
        )}
      />
    </>
  );
};

export default FormSelect;
