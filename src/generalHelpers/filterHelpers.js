export const filterHelpers = {
  filterMediaByGenres(data) {
    const { movies, series } = data;
    const movieGenres = this.MediaGenres(movies);
    const serieGenres = this.MediaGenres(series);
    const genres = this.deepCopy(movieGenres);

    for (const [key, value] of Object.entries(serieGenres)) {
      if (genres[key] != undefined) {
        genres[key] = genres[key] + value;
      } else {
        genres[key] = value;
      }
    }

    return { genres, movieGenres, serieGenres };
  },

  MediaGenres(media) {
    const genres = {};
    for (let index = 0; index < media.length; index++) {
      let movieGenres = media[index].genres;
      for (let index2 = 0; index2 < movieGenres.length; index2++) {
        if (genres[movieGenres[index2]] != undefined) {
          genres[movieGenres[index2]] = genres[movieGenres[index2]] + 1;
        } else {
          genres[movieGenres[index2]] = 1;
        }
      }
    }
    return genres;
  },

  deepCopy(object) {
    return JSON.parse(JSON.stringify(object));
  },
};