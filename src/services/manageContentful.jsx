const contentful = require('contentful-management')


const SPACE_ID = "mi2376gvz0ix";
const ACCESS_TOKEN = "HmNlq04pEUzTlTC-KeUDbYMjy7ALQDhTU0DK3DlBqKs";
const CONTENT_MANAGEMENT_TOKEN = "CFPAT-nNKy6WQGgarKDwSc0xxORKz_wxAqhYR2mQW_XfkEcmg";
const BASE_URL = `https://cdn.contentful.com/spaces/${SPACE_ID}`;

const client = contentful.createClient({
    accessToken: CONTENT_MANAGEMENT_TOKEN
})

const manageContentful = {
    async createMovie(spaceId,movieData) {
        try {
            const URL = `${BASE_URL}/environments/master/entries`;
            const requestHeader = {
                method: 'POST',
                headers: {
                    "Authorization": `Bearer ${ACCESS_TOKEN}`,
                    "Content-Type": "application/vnd.contentful.management.v1+json",
                    "X-Contentful-Content-Type": "pelicula",
                },
                body: JSON.stringify({fields: {
                    title: "intento de que funcione",
                    body: movieData} 
                    // sys: {
                    //     contentType: {
                    //         "sys": {
                    //             type: "Link",
                    //             linkType: "ContentType",
                    //             id: "pelicula"
                    //         }
                    //     },
                    //     environment: {
                    //         "sys": {
                    //             "id": "master",
                    //             "type": "Link",
                    //             "linkType": "Environment"
                    //         }
                    //     },
                    //     type: "Entry",
                    //     space: {
                    //         "sys": {
                    //             "type": "Link",
                    //             "linkType": "Space",
                    //             "id": "mi2376gvz0ix"
                    //         }
                    //     }
                    // }
                })
            }

            const createEntry = await fetch(URL,requestHeader);
            return createEntry.json();

        } catch (error) {
            console.log(error)
        }
    },

    async getData(spaceId){
        const URL = `${BASE_URL}/environments/master/content_types/pelicula`;
        const data = await fetch(URL,{
            headers:{
                Authorization: `Bearer ${ACCESS_TOKEN}`,
            }
        })
        console.log(await data.json());
    },

    async createEntry(movieData){
        const space = await client.getSpace(SPACE_ID);
        const environment = await space.getEnvironment('master');
        const entry = await  environment.createEntry('pelicula',{fields:movieData})
        return entry
    }
}

export default manageContentful;
