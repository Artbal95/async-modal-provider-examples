import { useState } from 'react'
import { useAsyncModal } from 'async-modal-provider'
import Example from './Example'

const ModalExample = () => {
  const [result, setResult] = useState('')

  const { open } = useAsyncModal()

  const handleOpenModal = async () => {
    try {
      const res = await open(Example)
      if (res) {
        setResult(res)
      }
    } catch (e) {
      console.log(e.message)
    }
  }




  return (
    <div style={{ fontSize: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {result}
      <button onClick={handleOpenModal}>Click to Open</button>
    </div>
  )
}

export default ModalExample
