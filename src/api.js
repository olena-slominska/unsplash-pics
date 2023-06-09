import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID lYzA7DwJTbtWS9iyi3dCnq2yQGowosPkYEgSd9o1AQQ'
        },
        params: {
            query: term
        }
    }).catch(
        (error) => {
            console.error(error.toJSON());
        }
    );

    return response.data.results;
};

export default searchImages;