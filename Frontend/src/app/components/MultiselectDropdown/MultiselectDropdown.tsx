"use client"
import React, { useState } from "react";
import Select, { MultiValue, StylesConfig } from "react-select";

type OptionType = {
  value: string;
  label: string;
};



type MultiSelectDropdownProps = {
  options: OptionType[];
  placeholder?: string;
};

const customStyles: StylesConfig<OptionType, true> = {
    control: (provided) => ({
      ...provided,
      backgroundColor: '#000',
      borderColor: '#24a0ed',
      
      width: 200,
      minHeight: 35,
    }),
    option: (provided, state) => ({
      ...provided,
      fontSize: 14,
      color: "white",
      backgroundColor: state.isSelected ? '#24a0ed' : state.isFocused ? 'rgb(54, 54, 54)' : 'black',
      padding: 12,
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: '#000',
      width: 200,
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "#24a0ed",
      color: "#000",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "#000",
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: "#000",
      ':hover': {
        backgroundColor: "rgb(54, 54, 54)",
        color: "white",
      },
    }),
  };


export default function MultiSelectDropdown({ options, placeholder }: MultiSelectDropdownProps) {
  
  const [selectedOptions, setSelectedOptions] = useState<MultiValue<OptionType>>([]);
  
  

  return (
    <Select<OptionType, true>
      isMulti
      options={options}
      value={selectedOptions}
      onChange={setSelectedOptions} //+ Backendanfrage
      placeholder={placeholder}
      styles={customStyles}
    />
  );
}
