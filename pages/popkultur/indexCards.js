import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./indexCardPopKultur.module.css";
import { fetchDataAllPost } from "@/pages/api/ghostConfig";

export default function IndexCards() {
  const [posts, setPosts] = useState([]);
  // const [tags, setTags] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchDataAllPost();
        // coba kita console log dulu
        // console.log(data);

        // Saring post berdasarkan primary_tag "Pop Kultur"
        const filteredPosts = data.posts.filter(
          (post) => post.primary_tag && post.primary_tag.name === "Pop Kultur"
        );

        setPosts(filteredPosts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className={`${styles.cardPopkulturContainer} container`}>
        <div className={`${styles.iniRows} row row-cols-1 gy-3`}>
          {posts &&
            posts.map((post) => (
              <div key={post.id} className={`${styles.iniCols} col-md-4`}>
                <div className={`card-group `}>
                  <div className={`${styles.iniCard} card h-100`}>
                    <Image
                      src={post?.feature_image}
                      height="1920"
                      width="1920"
                      className={`${styles.iniImages} card-img-top img-fluid`}
                      alt="..."
                      priority={true}
                    />
                    <div className="card-body">
                      {post.primary_tag && (
                        <div className={`${styles.iniTags} tag`}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-tag"
                            viewBox="0 0 16 16"
                          >
                            <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z" />
                            <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586 7 7L13.586 9l-7-7H2v4.586z" />
                          </svg>
                          {post.primary_tag.name}
                        </div>
                      )}
                      <h5 className="card-title">{post?.title}</h5>
                    </div>
                    <div className={`d-flex justify-content-end mb-5`}>
                      <button
                        type="button"
                        className={`${styles.iniButton} btn`}
                      >
                        Baca Sekarang
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* <h1>ini harusa muncul card</h1> */}
    </>
  );
}
