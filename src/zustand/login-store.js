import create from "zustand";

const loginStore = create((set) => ({
  isSubmiting: false,
  successSubmitted: false,
  errorSubmitting: undefined,
  submitLogin: (name, email) => {
    try {
      set({ isSubmiting: true });
      localStorage.setItem("@superhero-isAuth", "true");
      localStorage.setItem(
        "@superhero-data",
        JSON.stringify({
          name,
          email,
        })
      );
      set({ isSubmiting: false, successSubmitted: true });
    } catch (error) {
      set({
        successSubmitted: false,
        errorSubmitting: error,
        isSubmiting: false,
      });
    }
  },
}));

export default loginStore;
