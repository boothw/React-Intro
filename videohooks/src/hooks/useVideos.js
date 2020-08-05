import { useState, useEffect } from 'react';
import youtube from '../api/youtube'

const KEY = 'AIzaSyAyNCVfHwMRyCjlKzGTkoBSdnwcCPno8PY';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (text) => {
        const response = await youtube.get("/search", {
            params: {
                q: text,
                part: "snippet",
                type: 'video',
                maxResults: 5,
                key: KEY
            }
        });
        setVideos(response.data.items);
    }

    return [videos, search];
}

export default useVideos;