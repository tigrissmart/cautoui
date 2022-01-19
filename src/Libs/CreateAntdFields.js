import React from "react";
import { DatePicker, Form, Input, TimePicker, Select,Checkbox,Switch} from "antd";

const FormItem = Form.Item;
const { Option } = Select;

const CreateAntdField = AntComponent => ({
  field,
  form,
  hasFeedback,
  label,
  selectOptions,
  submitCount,
  type,
  ...props
}) => {
  const touched = form.touched[field.name];
  const submitted = submitCount > 0;
  const hasError = form.errors[field.name];
  const submittedError = hasError && submitted;
  const touchedError = hasError && touched;
  const onInputChange = ({ target: { value } }) =>
    form.setFieldValue(field.name, value);
  const onChange = value => form.setFieldValue(field.name, value);
  const onBlur = () => form.setFieldTouched(field.name, true);
  return (
    <div className="field-container">
      <FormItem
        label={label}
        hasFeedback={
          (hasFeedback && submitted) || (hasFeedback && touched) ? true : false
        }
        help={submittedError || touchedError ? hasError : false}
        validateStatus={submittedError || touchedError ? "error" : "success"}
      >
        <AntComponent
          {...field}
          {...props}
          onBlur={onBlur}
          onChange={type ? onInputChange : onChange}
        >
          {selectOptions &&
            selectOptions.map(name => <Option key={name}>{name}</Option>)}
        </AntComponent>
      </FormItem>
    </div>
  );
};

export const AntSelect = CreateAntdField(Select);
export const AntCheckbox = CreateAntdField(Checkbox);
export const AntDatePicker = CreateAntdField(DatePicker);
export const AntInput = CreateAntdField(Input);
export const AntTimePicker = CreateAntdField(TimePicker);
export const AntPassword = CreateAntdField(Input.Password);
export const AntSwitch = CreateAntdField(Switch);