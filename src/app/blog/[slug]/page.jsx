import Image from 'next/image';
import styles from './singlePost.module.css';
import { Suspense } from 'react';
import PostUser from '@/components/postUser/postUser';
import { getPost, getUser } from '@/lib/postData';

export async function generateMetadata({ params }) {
  const slug = params.slug;
  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.excerpt,
  };
}

async function SinglePostPage({ params }) {
  const slug = params.slug;
  const post = await getPost(slug);
  const user = await getUser(slug);
  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt="" fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={user} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              2024/01/01
              {/* {post.createdAt.toString().slice(4, 16)} */}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
}

export default SinglePostPage;
