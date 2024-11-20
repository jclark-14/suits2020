import Link from 'next/link';

interface ButtonProps {
  href: string;
  label: string;
  ariaLabel?: string;
  isExternal?: boolean;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const Button = ({
  href,
  label,
  ariaLabel,
  isExternal = false,
  variant = 'primary',
  size = 'medium',
  className = '',
}: ButtonProps) => {
  const baseStyles =
    'inline-block font-medium border-2 shadow-lg rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-xl';

  const variants = {
    primary:
      'bg-white text-black border-footerBrown hover:bg-footerBrown hover:text-white',
    secondary:
      'bg-footerBrown text-white border-white hover:bg-white hover:text-footerBrown',
  };

  const sizes = {
    small: 'py-2 px-4 text-sm',
    medium: 'py-3 px-5 text-base',
    large: 'py-4 px-6 text-lg',
  };

  const linkProps = {
    href,
    className: `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`,
    'aria-label': ariaLabel || label,
    ...(isExternal && {
      target: '_blank',
      rel: 'noopener noreferrer',
    }),
  };

  return <Link {...linkProps}>{label}</Link>;
};

export default Button;
