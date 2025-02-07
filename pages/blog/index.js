import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../../components/Common/PageBanner"));

const Footer = dynamic(() => import("../../components/_App/Footer"));

import api from "../../utils/api";
import styles from "../../styles/Home.module.css";

const Blog = ({ item, totalPage }) => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState();

  const loadMoreData = async (page) => {
    const posts = await api.get(`blogs/getAll/pagination?page=${page}&limit=9`);
    const data = await posts.data.data;
    const current = await posts.data.currentPage;
    setItems(data);
    setCurrentPage(current);
  };
  useEffect(() => {
    setItems(item);
    setCurrentPage(1);
  }, []);

  const listItems = [];
  for (let i = 1; i <= totalPage; i++) {
    listItems.push(
      <a
        key={i}
        onClick={() => loadMoreData(i)}
        className={`mb-2 ${currentPage === i ? styles.active : ""}`}
      >
        {i}
      </a>
    );
  }
  return (
    <>
      <Head>
        <title>Latest Pain Management Blogs | Dallas Premier Pain</title>
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          name="description"
          content="Discover effective pain management Treatments, expert advice, and helpful tips to find relief and improve your quality of life. Explore now"
        />
      </Head>

      <Navbar />

      <PageBanner
        pageTitle="Blog"
        homePageUrl="/"
        homePageText="Home"
        activePageText="blog"
        bgImage="http://res.cloudinary.com/dngmflrpx/image/upload/v1734994783/blog/ij463ka2shafvmzwjkc2.webp"
      />

      {/* BlogGrid */}
      <div className="blog-area-two pt-5 pb-4">
        <div className="container">
          <div className="row justify-content-center">
            {items.map((item, i) => {
              return (
                <div className="col-md-6 col-lg-4" key={i}>
                  <div className="blog-item">
                    <div className="blog-top">
                      <Link href={`/blog${item.slug}`} rel="preload">
                        <Image
                          src={item.image}
                          alt={item.category}
                          width={416}
                          height={208}
                          loading="lazy"
                        />
                      </Link>
                    </div>
                    <div className="blog-bottom">
                      <h3>
                        <Link href={`/blog${item.slug}`} rel="preload">
                          {item.seoTitle[0]}
                        </Link>
                      </h3>
                      <p>
                        {item.metaDes.length > 130
                          ? item.metaDes.slice(0, 130) + "..."
                          : item.metaDes}
                      </p>

                      <ul>
                        <li>
                          <Link href={`/blog${item.slug}`} rel="preload">
                            Read More{" "}
                            <i className="icofont-long-arrow-right"></i>
                          </Link>
                        </li>
                        <li></li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.center}>
            <div
              className={`${styles.pagination} ${styles.pagination1} ${styles.pagination3} ${styles.pagination4} ${styles.pagination6}`}
            >
              {listItems}
            </div>
          </div>
        </div>
      </div>
      {/* ....test git  commit  */}
      <Footer />
    </>
  );
};

export default Blog;

export const getServerSideProps = async () => {
  const posts = await api.get("blogs/getAll/pagination");
  const data = await posts.data.data;
  const totalPage = await posts.data.totalPages;
  return {
    props: {
      item: data,
      totalPage,
    },
  };
};
