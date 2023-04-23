import { CSSProperties, FC } from 'react'
import { IModalComponentProps } from 'async-modal-provider'

const styles: CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'gray',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const Example: FC<IModalComponentProps> = ({ onSelect, onClose }) => {
  const handleOnSelect = () => {
    if (onSelect) {
      onSelect<string>('Duq inch vor baneq uxarkel')
    }
  }

  return (
    <div style={styles}>
      <div style={{ backgroundColor: 'white' }}>
        <p>This is Modal</p>
        <button onClick={handleOnSelect}>On Select</button>
        <button onClick={onClose}>Close Modal</button>
      </div>
    </div>
  )
}

export default Example
