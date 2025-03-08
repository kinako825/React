import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Layout from "../components/Layout";
import { getPosts } from '../../lib/posts'

export const getStaticProps = async () => {
  return {
    props: {
      posts: getPosts()
    }
  }
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home({ posts }) {
  return (
    <Layout pageTitle="Home">
      <h1 className={styles.title}>Home</h1>
      <Link href="/about" className={styles.navigation}>
        Aboutへ
      </Link>

      <ul className={styles.list}>
        {posts.map(({ id, title, date }) => {
          // 日付をフォーマット
          const formattedDate = new Date(date).toLocaleDateString('ja-JP')

          return (
            <li key={id}>
              <Link href={`/posts/${id}`}>

                <h2>{title}</h2>
                <p>{formattedDate}</p> {/* 投稿日時を表示 */}

              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}