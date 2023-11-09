import React, { useEffect, useState } from 'react'
import { getPosts } from '@/pages/api/ghostConfig';
import Image from 'next/image';
import styles from '@/components/Cards/Cards.module.css'

export default function Cards() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getPosts();
                setPosts(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            {/* Container */}
            <div className="container-fluid">
                <div className="container">
                    <div className={`${styles.iniRows} row`}>
                        {posts && posts.map((post) => (
                            <div key={post.id} className={`${styles.cardGrups} card-group col-4 g-3`}>
                                <div className="card" style={{ width: "18rem" }}>
                                    <Image src={post?.feature_image} height="1920" width="1920"
                                        className={`${styles.imageThumnail} card-img-top img-fluid img-thumbnail rounded-3`} alt={`gambar`} />
                                    <div className="card-body">
                                        <h5 className="card-title">{post?.title}</h5>
                                        <button className={`${styles.button} btn btn-dark float-end`}>Baca Sekarang</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Batas Container */}
        </div>
    )
}
