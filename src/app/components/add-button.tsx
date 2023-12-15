type ButtonProps = {
  onClick: () => void,
  children: React.ReactNode
}

export default function AddButton({onClick, children}: ButtonProps) {
  return (
    <button 
      onClick={onClick}
      className="btn bg-blue-500 rounded-full m-5 text-white"
    >{children}</button>
  )
}