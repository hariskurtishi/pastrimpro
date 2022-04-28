/* eslint-disable react/display-name */
import React, { forwardRef } from 'react'

import { cls } from './src/utils.js'

const classes = {
  base: 'focus:outline-none transition-all ease-in-out duration-300 ',
  disabled: 'opacity-50 cursor-not-allowed',

  variant: {
    primary:
      'group-hover:bg-gray-3 rounded shadow-xl shadow-gray-950/30 bg-gray-950 transition-all text-white group-hover:text-white ',
    secondary: 'text-gray-950 group-hover:text-gray-950 border rounded border-gray-950 ',
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
