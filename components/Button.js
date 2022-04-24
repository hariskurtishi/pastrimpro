/* eslint-disable react/display-name */
import React, { forwardRef } from 'react'

import { cls } from './src/utils.js'

const classes = {
  base: 'focus:outline-none transition-all ease-in-out duration-300 ',
  disabled: 'opacity-50 cursor-not-allowed',

  variant: {
    primary:
      'group-hover:bg-blue-400 rounded shadow-xl shadow-blue-300/30 bg-blue-300 transition-all text-white group-hover:text-white ',
    secondary: 'text-blue-300 group-hover:text-blue-300 border rounded border-blue-300 ',
    tertiary: 'text-white border',
  },
}

const Button = forwardRef(
  (
    { children, className, variant = 'primary', disabled = false, as = 'button', ...props },
    ref
  ) => {
    const Tag = as || 'button'

    return (
      <Tag
        ref={ref}
        disabled={disabled}
        className={cls(`
            
                group
                ${classes.base}

                ${disabled && classes.disabled}
                ${className}
            `)}
        {...props}
      >
        <div className={`inline-flex group ${classes.variant[variant]}`}>
          <div className="px-6 my-4 text-base font-medium">{children}</div>
        </div>
      </Tag>
    )
  }
)

export default Button
