import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
    url: 'https://admin.mediaformasi.com',
    key: 'a6f6c02bf2d968577e72e52a39',
    version: 'v5.0'
});

export async function getPosts() {
    return await api.posts
        .browse({
            include: ['tags', 'authors'],
            limit: 7
        }).catch(err => {
            throw new Error(err);
        })
};

export async function getTags() {
    return await api.tags
        .browse({
            include: ['tags', 'authors'],
            limit: 7
        }).catch(err => {
            throw new Error(err);
        })
};

export async function fetchGhostDefault() {
    try {
        const response = await fetch('https://admin.mediaformasi.com/ghost/api/content/posts/?key=a6f6c02bf2d968577e72e52a39');
        if (!response.ok) {
            throw new Error('Request gagal loh, coba cek lagi');
        }
        const data = await response.json();

        // Menampilkan data dari API
        // console.log('Data dari API:', data); 
        return data;
    } catch (error) {
        // Menampilkan kesalahan jika ada
        console.error('Kesalahan:', error);

        // setError(error);
    }
}

export async function fetchDataAllPost() {
    try {
        const response = await fetch('https://admin.mediaformasi.com/ghost/api/content/posts/?key=a6f6c02bf2d968577e72e52a39&include=tags,authors');
        if (!response.ok) {
            throw new Error('Request gagal loh, coba cek lagi');
        }
        const data = await response.json();

        // Menampilkan data dari API
        // console.log('Data dari API:', data); 
        return data;
    } catch (error) {
        // Menampilkan kesalahan jika ada
        console.error('Kesalahan:', error);

        // setError(error);
    }
}
