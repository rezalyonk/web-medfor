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
        // console.log('Data dari API:', data); // Menampilkan data dari API
        return data;
    } catch (error) {
        // console.error('Kesalahan:', error); // Menampilkan kesalahan jika ada
        setError(error);
    }
}

export async function fetchDataAllPost() {
    try {
        const response = await fetch('https://admin.mediaformasi.com/ghost/api/content/posts/?key=a6f6c02bf2d968577e72e52a39&include=tags,authors');
        if (!response.ok) {
            throw new Error('Request gagal loh, coba cek lagi');
        }
        const data = await response.json();
        // console.log('Data dari API:', data); // Menampilkan data dari API
        return data;
    } catch (error) {
        console.error('Kesalahan:', error); // Menampilkan kesalahan jika ada
        setError(error);
    }
}
