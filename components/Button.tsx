import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-500 ease-out active:scale-95 transform hover:-translate-y-1';

  const variantStyles = {
    primary: 'bg-rose text-white shadow-[0_8px_20px_-4px_rgba(199,93,93,0.4)] hover:shadow-[0_12px_24px_-4px_rgba(199,93,93,0.6)]',
    secondary: 'bg-cream border border-dulce/20 text-rose shadow-sm hover:bg-white hover:shadow-md',
    outline: 'border-2 border-rose/30 text-rose hover:bg-rose hover:text-white',
  };

  const sizeStyles = {
    sm: 'px-5 py-2.5 text-xs tracking-wider uppercase',
    md: 'px-8 py-3.5 text-base',
    lg: 'px-10 py-4.5 text-lg',
  };

  const content = (
    <span className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}>
      {children}
    </span>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className="inline-block">
      {content}
    </button>
  );
};

export default Button;