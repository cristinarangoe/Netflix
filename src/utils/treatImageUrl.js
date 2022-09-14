//example url stracted form netflix 
//https://occ-0-1456-3933.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABW9UxuELV8JI0rY7QqQhsPhJvMyJsG0syQryPQAVXwtPMkNKYH9GqwOCZCVemX9t2z_22BFui9rhanCnEEkRz0wV2u6nfvbHu4A2.jpg?r=f9c

/**
 * extract the name of the image URL 
 *
 * @param  {String} imageUrl imageURL
 * @param  {String} imageName name base on the movie or serie
 * @return {{contentType,fileName, upload}} return object with contentType, fileName and upload
 */
export function treatImgageUrl(imageUrl,imageName){
    const tmpUrl = new URL(imageUrl);
    const path = tmpUrl.pathname;
    const imageType =  path.split('/').pop().split('.').pop();
    
    return {
        contentType: `image/${imageType}`,
        fileName: `${imageName}.${imageType}`,
        upload: imageUrl
    }
    
}
