import React from 'react'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';

interface IInputProps {
  readonly leftIcon?: IconDefinition;
  readonly rightIcon?: IconDefinition;
  readonly placeholder?: string;
  readonly value: string;
  readonly hideLeftIcon?: boolean;
  readonly onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readonly onIconClick?: () => void;
}

export function Input({ 
  leftIcon, 
  rightIcon, 
  placeholder, 
  value, 
  hideLeftIcon ,
  onChange, 
  onIconClick, 
}: IInputProps) {
  return (
    <div className='input-container'>
      {leftIcon && <div className='input-icon'>
        <FontAwesomeIcon icon={leftIcon} />
      </div>}
      <input type='text' placeholder={placeholder} onChange={onChange} value={value} />
      {rightIcon && !hideLeftIcon && <div className='input-icon'>
        <FontAwesomeIcon icon={rightIcon} onClick={onIconClick} />
      </div>}
    </div>
  )
}

