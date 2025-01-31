import { useRuntimeConfig } from "#app";

export const useAppNavigation = () => {
  const config = useRuntimeConfig();

  const goToApp = () => {
    if (import.meta.client) {
      const appUrl = config.public.appUrl || "https://app.getspelly.com";
      window.location.href = appUrl;
    }
  };

  return {
    goToApp,
  };
};
