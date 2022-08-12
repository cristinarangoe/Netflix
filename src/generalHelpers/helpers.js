
export const helpers = {

    descriptionValue(contentfulDescription){
        return contentfulDescription.content[0].content[0].value;
    },
    imageValue(contentfulImage){
        return 'https:'+ contentfulImage.fields.file.url;
    },
}

