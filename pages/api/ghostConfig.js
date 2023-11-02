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

