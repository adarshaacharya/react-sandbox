/** @jsx jsx */
import { useRouter } from 'next/router'
import { jsx } from 'theme-ui'

export default () => {
  const router = useRouter()
  const { id }= router.query

  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>Note: {id} </h1>
    </div>
  )
}