import { useSnackbar, VariantType } from "notistack";

export const useToast = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const showToast = (message: string, variant: VariantType = "default") => {
    return enqueueSnackbar(message, { variant });
  };

  const showSuccess = (message: string) => {
    return showToast(message, "success");
  };

  const showError = (message: string) => {
    return showToast(message, "error");
  };

  const showInfo = (message: string) => {
    return showToast(message, "info");
  };

  const showWarning = (message: string) => {
    return showToast(message, "warning");
  };

  return {
    showToast,
    showSuccess,
    showError,
    showInfo,
    showWarning,
    closeToast: closeSnackbar,
  };
};
