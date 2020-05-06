import React, { useState } from "react"
import styles from "./Wave.module.scss"

const Wave = () => {
  const [waves, setWaves] = useState(0)
  const label = `👋 ${waves} ${waves === 1 ? "wave" : "waves"}`

  return (
    <button className={styles.wave} onClick={() => setWaves(waves + 1)}>
      {label}
    </button>
  )
}

export default Wave
