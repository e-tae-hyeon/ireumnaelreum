import { logout } from "apis/auth";

function useLogout() {
  return async () => {
    try {
      await logout();
    } catch (err) {
      console.error(err);
    }
    window.location.href = "/";
  };
}

export default useLogout;
