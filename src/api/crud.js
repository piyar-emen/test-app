import Axios from 'axios';

export const GetWithToken = async (url) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            // Authorization için API key kullanılmalı
            // Authorization: 'Bearer /key buraya gelecek/'
        }
    };

    return Axios.get(url, options);
}