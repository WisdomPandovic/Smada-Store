'use client';
import React, { FC } from 'react';

interface SearchInputProps {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: FC<SearchInputProps> = ({ placeholder = 'Search...', value, onChange }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border p-2 rounded w-full max-w-xs"
      />
    </div>
  );
};

export default SearchInput;
