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
                    <div className="row">
                        <div className="col-4">
                            {posts && posts.map((post) => (
                                <div key={post.id} className="card-group">
                                    <div className="card" style={{ width: "18rem" }}>
                                        <Image src={post?.feature_image} className="card-img-top img-thumbnail" height="1920" width="1920" />
                                        <div className="card-body">
                                            <h5 className="card-title">{post?.title}</h5>
                                            <p className="card-text">
                                                {post?.custom_excerpt}
                                            </p>
                                            <a href={post?.url} className="btn btn-dark">
                                                Baca Sekarang
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-4"></div>
                    </div>
                </div>
            </div>
            {/* Batas Container */}
        </div>
    )
}
