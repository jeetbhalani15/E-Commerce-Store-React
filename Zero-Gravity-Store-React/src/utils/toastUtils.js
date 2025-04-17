import { toast } from 'react-toastify';

const defaultOptions = {
  position: toast.POSITION.BOTTOM_RIGHT,
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

// Success toast
export const showSuccessToast = (message) => {
  return toast.success(message, {
    ...defaultOptions,
    toastId: 'success-toast'
  });
};

// Error toast
export const showErrorToast = (message) => {
  return toast.error(message, {
    ...defaultOptions,
    toastId: 'error-toast'
  });
};

// Info toast
export const showInfoToast = (message) => {
  return toast.info(message, {
    ...defaultOptions,
    toastId: 'info-toast'
  });
};

// Warning toast
export const showWarningToast = (message) => {
  return toast.warning(message, {
    ...defaultOptions,
    toastId: 'warning-toast'
  });
}; 