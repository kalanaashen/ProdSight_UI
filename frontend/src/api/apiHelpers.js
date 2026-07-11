export const unwrapData = (response) => response?.data?.data ?? response?.data;

export const getApiErrorMessage = (error, fallback = "Request failed.") => {
  const payload = error?.response?.data;

  if (typeof payload === "string") return payload;
  return payload?.message ?? payload?.error ?? fallback;
};

export const getLoggedInUserId = () => {
  const token = localStorage.getItem("accessToken");
  if (!token) return "";

  try {
    const encodedPayload = token.split(".")[1];
    const normalizedPayload = encodedPayload
      .replace(/-/g, "+")
      .replace(/_/g, "/");
    const payload = JSON.parse(atob(normalizedPayload));
    return payload._id ?? payload.userId ?? payload.sub ?? "";
  } catch {
    return "";
  }
};
