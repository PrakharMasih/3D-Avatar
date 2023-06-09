import React from 'react'
import styles from './css/page.module.css'
import Link from 'next/link'

function Page9() {

  return (
    <div className={styles.container}>
      <div id={styles.contact}>
        <h4>Contact or follow me on</h4>
        
         <br />
        <Link href="https://www.linkedin.com/in/prakhar-masih-004ba6214/" className={styles.link}>
          LinkedIn
          <i style={{ "font-size": "24px" }} className="fa">&#xf08c;</i>
        </Link>
        &nbsp; & &nbsp;
        <Link href="https://instagram.com/prakharmasih007?igshid=MzNlNGNkZWQ4Mg==" className={styles.link}>
          Instagram
          <i style={{"font-size":"24px"}} className="fa">&#xf16d;</i>
        </Link>
      </div>
    </div>
  )
}

export default Page9