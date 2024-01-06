import {  useParams } from 'react-router-dom'

export const Batch = () => {
    const params = useParams()
  return (
    <div>
        {params.dep}, {params.year}
    </div>
  )
}
