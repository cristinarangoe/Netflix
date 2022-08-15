export function getDataByGenera({ movies, series }) {
	const generaMap = new Map();

	for (const movie of movies) {
		for (const genera of movie.genres) {
			if (generaMap.has(genera)) {
				generaMap.get(genera).movies.push(movie);
			}else {    
			    generaMap.set(genera, {
				    movies: [movie],
                    series: []
			    });
            }
		}
	}

    for (const serie of series) {
		for (const genera of serie.genres) {
			if (generaMap.has(genera)) {
				generaMap.get(genera).series.push(serie);
			}else{ 
			    generaMap.set(genera, {
				    movies: [],
                    series: [serie]
			    });
            }
		}
	}

	return generaMap;
}