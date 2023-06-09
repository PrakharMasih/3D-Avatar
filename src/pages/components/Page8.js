import React from 'react'
import Link from 'next/link'
import styles from './css/page.module.css'

function Page8() {
  return (
    <div className={styles.container}>
      <Link href="https://github.com/PrakharMasih" className={styles.link} ><i style={{"font-size":"84px"}} className="fa">&#xf09b;</i></Link>
      
    </div>
  )
}

export default Page8