import {treatImgageUrl} from './treatImageUrl';
import {contentfulHelper} from '../services/contentfulHelper';

async function prepareMovie(data){
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

async function prepareSerie(data){
   const assetData = await createAssetBaseOnURL(data.imagen);
    const actor1 = await createCast(data.actor1);
    const actor2 = await createCast(data.actor2);
    const cast = generateArrayContentfulRef(actor1.sys.id,actor2.sys.id);
    const genres = generateArrayContentfulRef(data.gender1, data.gender2);
    

    
    const episode1 = await createEpisode({
        nombre: data.nombreep1,
        descripcion: data.descripcionep1,
        imagen: data.imagenep1,
        duracion: data.duracionep1
    });
    
    const episode2 = await createEpisode({
        nombre: data.nombreep2,
        descripcion: data.descripcionep2,
        imagen: data.imagenep2,
        duracion: data.duracionep2
    });
    
    const episode3 = await createEpisode({
        nombre: data.nombreep3,
        descripcion: data.descripcionep3,
        imagen: data.imagenep3,
        duracion: data.duracionep3
    });
    
    const episodes = generateArrayContentfulRef(episode1.sys.id,episode2.sys.id,episode3.sys.id);
    
    return {
  name: {
    "en-US": data.nombre
  },
  adult: {
    "en-US": data.adultos,
  },
  episodes:{
      "en-US": episodes,
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

async function createEpisode(dataEpisode){
   const assetData = await createAssetBaseOnURL(dataEpisode.imagen);
    
    const episodeStructure = {
        name: {
    "en-US": dataEpisode.nombre
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
            value: dataEpisode.descripcion
          }],
          nodeType: 'paragraph',
        }
      ]
    }
  },
  image: {
    "en-US": {
      sys: {
        id: assetData.sys.id,
        linkType: 'Asset',
        type: 'Link'
      }
    }
  },
   duration: {
    "en-US": dataEpisode.duracion
  },
    }
    
    return await contentfulHelper.createEntry('episode',episodeStructure).then(async e => await e.publish())
}

export async function createSerie(data){
     const contentfulSerieData = await prepareSerie(data);
    return await contentfulHelper.createEntry('serie',contentfulSerieData).then(
        async e => await e.publish()
    );
}