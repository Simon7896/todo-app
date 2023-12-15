import { TodoItem } from "../lib/definitions"

type Props = {
  item: TodoItem,
  handleCheckChange: (item: TodoItem) => void
  handleDelete: (item: TodoItem) => void
}

export default function ListItem({ item, handleCheckChange, handleDelete }: Props) {
  return (
    <tr>
      <td className="td">
        <p className="font-semibold">{item.title}</p>
        {(item.description)? <p>{item.description}</p> : <></>
      }
      </td>
      <td className="td">
        <input 
          type="checkbox" 
          checked={item.checked} 
          onChange={() => { 
            item.checked = !item.checked;
            handleCheckChange(item) 
          }}
          className="h-8 w-8"
        />
      </td>
      <td className="td">
        <button 
          onClick={() => {handleDelete(item)}} 
          className="text-red-500 hover:text-red-300"
        >Delete</button>
      </td>
    </tr>
  )
}