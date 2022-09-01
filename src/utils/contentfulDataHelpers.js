import {treatImgageUrl} from './treatImageUrl';
import {contentfulHelper} from '../services/contentfulHelper';

async function prepareMovie(data){
      //create asset
    const assetData = await createAssetBaseOnURL(data.imagen);
    const actor1 = await createCast(data.actor1);
    const actor2 = await createCast(data.actor2);
    const cast = generateArrayContentfulRef(actor1.sys.id,actor2.sys.id);
    const genres = generateArrayContentfulRef(data.gender1, data.gender2);
    
    return {
  name: {
    "en-US": data.nombre
  },
  adult: {
    "en-US": data.adultos,
  },
  description: {
    "en-US": {
      data: {},
      nodeType: 'document',
      content: [
        {
          data: {},
          content: [{
            data: {},
            marks: [],
            nodeType: 'text',
            value: data.descripcion
          }],
          nodeType: 'paragraph',
        }
      ]
    }
  },
  duration: {
    "en-US": data.duracion
  },
  price: {
    "en-US": parseInt(data.Precio)
  },
  //reference
  genres: {
    "en-US": genres
  },
  //cast reference
  cast:{
      "en-US": cast
  },
  //asset ref
  image: {
    "en-US": {
      sys: {
        id: assetData.sys.id,
        linkType: 'Asset',
        type: 'Link'
      }
    }
  }
}
}

function generateArrayContentfulRef(...elements) {
  return elements.map(e => (
    {
      sys: {
        id: e,
        linkType: 'Entry',
        type: 'Link'
      }
    }
  ))
}

async function createAssetBaseOnURL(url,name){
    const infoImage = treatImgageUrl(url,name);
    const asset = {
        fields: {
            title: {
      'en-US': `${name} image`
    },
    description: {
      'en-US': `image for ${name}`
    },
    file: {
      'en-US': {
        ...infoImage
      }
    }
  }
}
return await contentfulHelper.createAsset(asset)
}


async function createCast(castName){
    const actor  = {
        name: {
            "en-US": castName
        },
    };
    return await contentfulHelper.createEntry('actor',actor).then(async e => await e.publish());
}

export async function createMovie(data){
    const contentfulMovieData = await prepareMovie(data);
    return await contentfulHelper.createEntry('pelicula',contentfulMovieData).then(
        async e => await e.publish()
    );
}