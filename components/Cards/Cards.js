import React, { useState, useEffect } from 'react';
import { getPosts } from '@/pages/api/ghostConfig';
import Image from 'next/image';

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
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    {posts.map((post) => (
                        <React.Fragment key={post.id}>
                            <div>
                                <Image src={post?.feature_image} alt="feature_image" width={500} height={500} />
                            </div>
                        </React.Fragment>
                    ))}
                    <h1>Cards</h1>
                </div>
            )}
        </div>
    );
}
