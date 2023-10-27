import styles from "@/components/Carousels/Carousels.module.css";
import Head from "next/head";
import Script from "next/script";
import { getPosts } from '@/pages/api/ghostConfig';
import Image from "next/image";
import React, { useState, useEffect } from 'react';

// export async function getStaticProps() {
//     const res = await getPosts;
//     const posts = await res.json()

//     return {
//         props: { posts }
//     }
// }

export default function Carousel() {
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
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Media Formasi</title>
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
                    crossOrigin="anonymous"
                />
            </Head>
            <div>
                <br />
                <br />
                <br />
                <br />
                <h1>Ini jadi Carousels</h1>
                <br />
                <br />
                <br />
                <br />
                <hr />
                <br />
                <br />
                <br />
                <br />

                <div>
                    {posts && posts.map((post) => (
                        <div key={post.id} className="card" style={{ width: "18rem" }}>
                            <Image src={post?.feature_image} className="card-img-top" alt={post?.feature_image_alt} height={200} width={200} />
                            <div className="card-body">
                                <h5 className="card-title">{post?.title}</h5>
                                <p className="card-text">
                                    {post?.excerpt}
                                </p>
                                <a href={post?.url} className="btn btn-primary">
                                    Baca Sekarang
                                </a>
                            </div>
                        </div>

                    ))}
                </div>







                <hr />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />


            </div>
            {/* Ini adalah batas script jangan diubah */}
            <Script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
                crossorigin="anonymous"
            ></Script>
            <Script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
                integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
                crossorigin="anonymous"
            ></Script>
            <Script
                src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
                integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
                crossorigin="anonymous"
            ></Script>
        </div>
    )
}
