import React, { useEffect, useState } from "react";
import styles from "./Carousels.module.css";
import Image from "next/image";
import { getPosts } from "@/pages/api/ghostConfig";
import iconKirimedfor from "@/assets/images/icon-kiri.png";
import iconKananmedfor from "@/assets/images/icon-kanan.png";

export default function Carousels() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getPosts();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {/* Container */}
      <div className={`${styles.containers1} container row-col-2`}>
        <div className="row grid">
          <div className="col-8">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {posts &&
                  posts.map((post) => (
                    <div key={post.id}>
                      <div className="carousel-item active">
                        <Image
                          src={post?.feature_image}
                          height={480}
                          width={640}
                          className={`${styles.iniImage} d-block w-100`}
                          alt={`gambar`}
                        />
                        <div class="carousel-caption d-none d-md-block">
                          <h5>{post?.title}</h5>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span>
                  <Image
                    src={iconKirimedfor}
                    className={`${styles.iconKirimedfor}`}
                    aria-hidden="true"
                    alt={`iconKirimedfor`}
                  />
                </span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span>
                  <Image
                    src={iconKananmedfor}
                    className={`${styles.iconKananmedfor}`}
                    aria-hidden="true"
                    alt={`iconKananmedfor`}
                  />
                </span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div
            className={`${styles.col4} col-4 text-bg-secondary text-center position-relative`}
          >
            <p
              className={`${styles.p001} position-absolute top-50 start-50 translate-middle`}
            >
              Ad Placeholder
            </p>
          </div>
        </div>
      </div>
      {/* Batas Container */}
    </div>
  );
}
