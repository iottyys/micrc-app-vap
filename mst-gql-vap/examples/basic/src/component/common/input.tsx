import React from "react";

export default ({
  id,
  name,
  type='text',
  value,
  style = {},
  onChange = () => {},
  onClick = () => {}
}:{
  id: string,
  name: string,
  type: 'button'|'checkbox'|'file'|'hidden'|'image'|'password'|'radio'|'reset'|'submit'|'text',
  value: any,
  style: object,
  onChange: any,
  onClick: any
}) => <input
  id={id}
  name={name}
  type={type}
  value={value}
  style={style}
  onChange={onChange}
  onClick={onClick}
/>


