import ExtLink from './ext-link'
import Image from 'next/image'

import styles from '../styles/footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <div>
      <span>Powered by </span>
      <span style={{verticalAlign: 'middle'}}>
        <ExtLink href="https://github.com/otoyo/easy-notion-blog">
          <Image src={'/logo_mono.png'} width={124} height={30}/>
        </ExtLink>
      </span>
    </div>
  </footer>
)

export default Footer
