'use client';

import React from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'gradient';
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonAnimation = 'none' | 'pulse' | 'float';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  animation?: ButtonAnimation;
  isLoading?: boolean;
  fullWidth?: boolean;
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

const getVariantClasses = (variant: ButtonVariant) => {
  switch (variant) {
    case 'primary':
      return 'bg-primary text-primary-foreground hover:bg-primary/90';
    case 'outline':
      return 'border border-border bg-transparent hover:bg-secondary/10 text-foreground';
    case 'ghost':
      return 'bg-transparent hover:bg-secondary/10 text-foreground';
    case 'gradient':
      return 'gradient-button text-primary-foreground';
    default:
      return 'bg-primary text-primary-foreground hover:bg-primary/90';
  }
};

const getSizeClasses = (size: ButtonSize) => {
  switch (size) {
    case 'sm':
      return 'text-xs px-3 py-1.5';
    case 'md':
      return 'text-sm px-4 py-2';
    case 'lg':
      return 'text-base px-5 py-2.5';
    default:
      return 'text-sm px-4 py-2';
  }
};

const getAnimationClasses = (animation: ButtonAnimation) => {
  switch (animation) {
    case 'pulse':
      return 'animate-pulse-slow';
    case 'float':
      return 'animate-float';
    case 'none':
    default:
      return '';
  }
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  animation = 'none',
  isLoading,
  fullWidth,
  className = '',
  disabled,
  href,
  icon,
  iconPosition = 'left',
  ...props
}: ButtonProps) {
  const buttonClasses = `
    font-medium rounded inline-flex items-center justify-center transition-colors
    ${getVariantClasses(variant)}
    ${getSizeClasses(size)}
    ${getAnimationClasses(animation)}
    ${fullWidth ? 'w-full' : ''}
    ${disabled || isLoading ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `;
  
  const content = (
    <>
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );

  // If href is provided, render as a Link
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {content}
      </Link>
    );
  }

  // Otherwise render as a button
  return (
    <button
      className={buttonClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </button>
  );
} 