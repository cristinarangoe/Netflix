
export const helpers = {

    descriptionValue(contentfulDescription){
        return contentfulDescription.content[0].content[0].value;
    },
    imageValue(contentfulImage){
        return 'https:'+ contentfulImage.fields.file.url;
    },
    arrayValue(genres){
        let data = []
        for (let index = 0; index < genres.length; index++) {
            data.push(genres[index].fields.name)
        }
        return data
    },

    episodeValue(episodes){
        let data = []
        for (let index = 0; index < episodes.length; index++) {
            let episode = episodes[index].fields
            data.push({name: episode.name, description: this.descriptionValue(episode.description), image: this.imageValue(episode.image), duration: episode.duration})
        }
        return data
    },

    contentfulClean(data){
        let movies = []
        let series = []
        for (let index = 0; index < data.movies.length; index++) {
            let movieData = data.movies[index].fields
            movies.push({name: movieData.name, description: this.descriptionValue(movieData.description), image: this.imageValue(movieData.image), adult: movieData.adult, genres: this.arrayValue(movieData.genres), cast: this.arrayValue(movieData.cast), duration: movieData.duration})
        }
        for (let index = 0; index < data.series.length; index++) {
            let serieData = data.series[index].fields;
            series.push({name: serieData.name, description: this.descriptionValue(serieData.description), image: this.imageValue(serieData.image), adult: serieData.adult, genres: this.arrayValue(serieData.genres), cast: this.arrayValue(serieData.cast), duration: serieData.duration, episodes: this.episodeValue(serieData.episodes)});
        
        }
        return {movies, series};
    },

   
}

