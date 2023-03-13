import { useEffect, useState } from "react"

const FollowMouse = () => {

  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('efecto', { enabled })

    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove', { clientX, clientY });
      setPosition({ x: clientX, y: clientY })
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }


    return () => {
      window.removeEventListener('pointermove', handleMove)
      console.log('clean');
    }


  }, [enabled])
  return (
    <>

      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir el puntero
      </button>

    </>



  )
}

function App() {
  const [mounted, setMounted] = useState(true)
  return (
    <main>
      {mounted && <FollowMouse />}
      <button onClick={() => setMounted(!mounted)}>
        Monta y desponta el compoemnte
      </button>


    </main>
  )


}

export default App