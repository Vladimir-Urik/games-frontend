import React from 'react';

const styles = {
  primary: {
    classic: {
      enabled: 'bg-blue-600 border-b-4 transition-all border-blue-800 py-1 px-6 rounded text-[16px] font-bold text-white hover:bg-blue-800 hover:text-white/80 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-blue-600 disabled:text-white',
      disabled: 'bg-blue-600 border-b-4 transition-all border-blue-800 py-1 px-6 rounded text-[16px] font-bold text-white hover:bg-blue-800 hover:text-white/80 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-blue-600 disabled:text-white',
    },
    outline: {
      enabled: 'bg-transparent border-b-4 transition-all border-blue-600 py-1 px-6 rounded text-[16px] font-bold text-blue-600 hover:bg-blue-600 hover:text-white/80 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:text-blue-600',
      disabled: 'bg-transparent border-b-4 transition-all border-blue-600 py-1 px-6 rounded text-[16px] font-bold text-blue-600 hover:bg-blue-600 hover:text-white/80 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:text-blue-600',
    },
  },
  secondary: {
    classic: {
      enabled: 'bg-gray-600 border-b-4 transition-all border-gray-800 py-1 px-6 rounded text-[16px] font-bold text-white hover:bg-gray-800 hover:text-white/80 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-gray-600 disabled:text-white',
      disabled: 'bg-gray-600 border-b-4 transition-all border-gray-800 py-1 px-6 rounded text-[16px] font-bold text-white hover:bg-gray-800 hover:text-white/80 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-gray-600 disabled:text-white',
    },
    outline: {
      enabled: 'bg-transparent border-b-4 transition-all border-gray-600 py-1 px-6 rounded text-[16px] font-bold text-gray-600 hover:bg-gray-600 hover:text-white/80 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:text-gray-600',
      disabled: 'bg-transparent border-b-4 transition-all border-gray-600 py-1 px-6 rounded text-[16px] font-bold text-gray-600 hover:bg-gray-600 hover:text-white/80 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:text-gray-600',
    },
  },
  danger: {
    classic: {
      enabled: 'bg-red-600 border-b-4 transition-all border-red-800 py-1 px-6 rounded text-[16px] font-bold text-white hover:bg-red-800 hover:text-white/80 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-red-600 disabled:text-white',
      disabled: 'bg-red-600 border-b-4 transition-all border-red-800 py-1 px-6 rounded text-[16px] font-bold text-white hover:bg-red-800 hover:text-white/80 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-red-600 disabled:text-white',
    },
    outline: {
      enabled: 'bg-transparent border-b-4 transition-all border-red-600 py-1 px-6 rounded text-[16px] font-bold text-red-600 hover:bg-red-600 hover:text-white/80 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:text-red-600',
      disabled: 'bg-transparent border-b-4 transition-all border-red-600 py-1 px-6 rounded text-[16px] font-bold text-red-600 hover:bg-red-600 hover:text-white/80 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:text-red-600',
    },
  },
  success: {
    classic: {
      enabled: 'bg-green-600 border-b-4 transition-all border-green-800 py-1 px-6 rounded text-[16px] font-bold text-white hover:bg-green-800 hover:text-white/80 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-green-600 disabled:text-white',
      disabled: 'bg-green-600 border-b-4 transition-all border-green-800 py-1 px-6 rounded text-[16px] font-bold text-white hover:bg-green-800 hover:text-white/80 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-green-600 disabled:text-white',
    },
    outline: {
      enabled: 'bg-transparent border-b-4 transition-all border-green-600 py-1 px-6 rounded text-[16px] font-bold text-green-600 hover:bg-green-600 hover:text-white/80 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:text-green-600',
      disabled: 'bg-transparent border-b-4 transition-all border-green-600 py-1 px-6 rounded text-[16px] font-bold text-green-600 hover:bg-green-600 hover:text-white/80 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:text-green-600',
    },
  },
  warning: {
    classic: {
      enabled: 'bg-yellow-600 border-b-4 transition-all border-yellow-800 py-1 px-6 rounded text-[16px] font-bold text-white hover:bg-yellow-800 hover:text-white/80 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-yellow-600 disabled:text-white',
      disabled: 'bg-yellow-600 border-b-4 transition-all border-yellow-800 py-1 px-6 rounded text-[16px] font-bold text-white hover:bg-yellow-800 hover:text-white/80 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-yellow-600 disabled:text-white',
    },
    outline: {
      enabled: 'bg-transparent border-b-4 transition-all border-yellow-600 py-1 px-6 rounded text-[16px] font-bold text-yellow-600 hover:bg-yellow-600 hover:text-white/80 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:text-yellow-600',
      disabled: 'bg-transparent border-b-4 transition-all border-yellow-600 py-1 px-6 rounded text-[16px] font-bold text-yellow-600 hover:bg-yellow-600 hover:text-white/80 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:text-yellow-600',
    },
  },
  info: {
    classic: {
      enabled: 'bg-purple-600 border-b-4 transition-all border-purple-800 py-1 px-6 rounded text-[16px] font-bold text-white hover:bg-purple-800 hover:text-white/80 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-purple-600 disabled:text-white',
      disabled: 'bg-purple-600 border-b-4 transition-all border-purple-800 py-1 px-6 rounded text-[16px] font-bold text-white hover:bg-purple-800 hover:text-white/80 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-purple-600 disabled:text-white',
    },
    outline: {
      enabled: 'bg-transparent border-b-4 transition-all border-purple-600 py-1 px-6 rounded text-[16px] font-bold text-purple-600 hover:bg-purple-600 hover:text-white/80 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:text-purple-600',
      disabled: 'bg-transparent border-b-4 transition-all border-purple-600 py-1 px-6 rounded text-[16px] font-bold text-purple-600 hover:bg-purple-600 hover:text-white/80 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:text-purple-600',
    },
  },
  light: {
    classic: {
      enabled: 'bg-gray-300 border-b-4 transition-all border-gray-500 py-1 px-6 rounded text-[16px] font-bold text-gray-800 hover:bg-gray-500 hover:text-gray-800/80 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-gray-300 disabled:text-gray-800',
      disabled: 'bg-gray-300 border-b-4 transition-all border-gray-500 py-1 px-6 rounded text-[16px] font-bold text-gray-800 hover:bg-gray-500 hover:text-gray-800/80 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-gray-300 disabled:text-gray-800',
    },
    outline: {
      enabled: 'bg-transparent border-b-4 transition-all border-gray-300 py-1 px-6 rounded text-[16px] font-bold text-gray-300 hover:bg-gray-300 hover:text-gray-800/80 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:text-gray-300',
      disabled: 'bg-transparent border-b-4 transition-all border-gray-300 py-1 px-6 rounded text-[16px] font-bold text-gray-300 hover:bg-gray-300 hover:text-gray-800/80 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:text-gray-300',
    },
  },
  dark: {
    classic: {
      enabled: 'bg-gray-800 border-b-4 transition-all border-black py-1 px-6 rounded text-[16px] font-bold text-white hover:bg-black hover:text-white/80 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-gray-800 disabled:text-white',
      disabled: 'bg-gray-800 border-b-4 transition-all border-black py-1 px-6 rounded text-[16px] font-bold text-white hover:bg-black hover:text-white/80 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-gray-800 disabled:text-white',
    },
    outline: {
      enabled: 'bg-transparent border-b-4 transition-all border-gray-800 py-1 px-6 rounded text-[16px] font-bold text-gray-800 hover:bg-gray-800 hover:text-white/80 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:text-gray-800',
      disabled: 'bg-transparent border-b-4 transition-all border-gray-800 py-1 px-6 rounded text-[16px] font-bold text-gray-800 hover:bg-gray-800 hover:text-white/80 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:text-gray-800',
    },
  },
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'light' | 'dark';
    disabled?: boolean;
    outline?: boolean;
    children: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  const buttonStyles = props.outline ? styles[props.variant].outline : styles[props.variant].classic;
  const buttonClass = props.disabled ? buttonStyles.disabled : buttonStyles.enabled;

  return (
    <button {...props} className={buttonClass +' '+ props.className}>
      {props.children}
    </button>
  );
};
