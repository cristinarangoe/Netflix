
export const helpers = {

    descriptionValue(contentfulDescription){
        return contentfulDescription.content[0].content[0].value;
    },
    imageValue(contentfulImage){
        return 'https:'+ contentfulImage.fields.file.url;
    },
    arrayValue(genres){
        console.log(genres)
        let data = []
        for (let index = 0; index < genres.length; index++) {
            data.push(genres[index].fields.name)
        }
        return data
    }
}

