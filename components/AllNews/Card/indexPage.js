import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './indexPage.module.css'
import { fetchDataAllPost } from '@/pages/api/ghostConfig'

export default function indexPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getFetchData() {
            try {
                const res = await fetchDataAllPost();

                // Menampilkan data console log dulu
                console.log(res);

                setPosts(res.posts);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        getFetchData();
    }, []);

    return (
        <>
            <div className={`container`}>
                <div className={`row`}>
                    {posts && posts.map((post) => (
                        <div key={post.id} className={`${styles.cardGroup} card-group col-4 gx-2 gy-3`}>
                            <div className={`${styles.cardAja} card w-50`} style={{ width: "18rem" }}>
                                <Image src={post?.feature_image} width={1920} height={1920} className={`${styles.imageThumbnail} card-img-top img-fluid`} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{post.title}</h5>
                                    <p className="card-text">

                                    </p>
                                    <a href="#" className="btn btn-primary">
                                        Go somewhere
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
