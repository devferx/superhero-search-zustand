import create from "zustand";
import axios from "axios";

const superheroStore = create((set) => ({
  isFetchingSuperheroes: false,
  fetchSuperheroesError: undefined,
  superheroes: [],
  fetchSuperheroes: async () => {
    try {
      set({
        fetchSuperheroesError: undefined,
        superheroes: [],
        isFetchingSuperheroes: true,
      });
      const { data } = await axios.get(
        `https://superheroapi.com/api.php/10223232565340348/search/${searchText}`
      );
      set({ superheroes: data?.results });
    } catch (error) {
      set({ fetchSuperheroesError: error });
    } finally {
      set({ isFetchingSuperheroes: false });
    }
  },
}));

export default superheroStore;
