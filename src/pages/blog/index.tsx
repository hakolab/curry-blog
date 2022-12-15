import DocumentHead from '../../components/document-head'
import {
  BlogPostLink,
  BlogTagLink,
  NextPageLink,
  NoContents,
  PostCard,
  PostCover,
  PostDate,
  PostExcerpt,
  PostTags,
  PostTitle,
} from '../../components/blog-parts'
import styles from '../../styles/blog.module.css'
import {
  getPosts,
  getFirstPost,
  getRankedPosts,
  getAllTags,
} from '../../lib/notion/client'
import * as Labels from '../../constants/labels'

export async function getStaticProps() {
  const [posts, firstPost, rankedPosts, tags] = await Promise.all([
    getPosts(),
    getFirstPost(),
    getRankedPosts(),
    getAllTags(),
  ])

  return {
    props: {
      posts,
      firstPost,
      rankedPosts,
      tags,
    },
    revalidate: 60,
  }
}

const RenderPosts = ({
  posts = [],
  firstPost,
  rankedPosts = [],
  tags = [],
}) => {
  return (
    <div className={styles.container}>
      <DocumentHead title="Blog" />

      <div className={styles.mainContent}>
        <NoContents contents={posts} />

        {posts.map(post => {
          return (
            <PostCard post={post} key={post.Slug}>
              <div className={styles.card}>
                <PostCover post={post} />
                <PostTitle post={post} />
                <PostDate post={post} />
                <PostTags post={post} />
                <PostExcerpt post={post} />
              </div>
            </PostCard>
          )
        })}

        <footer>
          <NextPageLink firstPost={firstPost} posts={posts} />
        </footer>
      </div>

      <div className={styles.subContent}>
        <BlogPostLink heading={Labels.RecommendedPosts} posts={rankedPosts} />
        <BlogTagLink heading={Labels.Tag} tags={tags} />
      </div>
    </div>
  )
}

export default RenderPosts
