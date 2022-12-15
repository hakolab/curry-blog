import DocumentHead from '../components/document-head'
import ExtLink from '../components/ext-link'
import styles from '../styles/page.module.css'

const RenderPage = () => (
  <div className={styles.container}>
    <DocumentHead />

    <div>
      <h2>はこだてたろうのカレーを楽しむブログ</h2>
      <p>「カレー食べたい」が口ぐせのはこだてたろうのブログです。</p>
      <p>週末はおいしいカレーを求めて街にくりだします。</p>
      <p>このブログでは、いただいたカレーを紹介させていただきます。</p>
    </div>
    <div className={styles.thanks}>
      <p>
        このブログは、
        <ExtLink href="https://github.com/otoyo/easy-notion-blog">
            otoyo/easy-notion-blog
        </ExtLink>
        {' '}を使って制作しています。
      </p>
    </div>
  </div>
)

export default RenderPage
