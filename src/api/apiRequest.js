import bostaAxios from "./axios";

const apiRequest = {
  get: async ({
    url,
    onLoading = () => {},
    onSuccess = () => {},
    onError = () => {},
  }) => {
    try {
      onLoading();
      const { data } = await bostaAxios.get(url);
      onSuccess(data);
    } catch (e) {
      onError(e);
    }
  },
};
export default apiRequest;
