import { TodoItem } from "../lib/definitions";
import ListItem from "./todo-list-item";

type Props = {
  items: TodoItem[];
  handleCheckChange: (item: TodoItem) => void;
  handleDelete: (item: TodoItem) => void;
}

export default function TodoList({ 
  items, 
  handleCheckChange, 
  handleDelete 
}: Props) {
  const ListItems = () => {
    return items.map((item: TodoItem) => 
      <ListItem
        key={item.key}
        item={item}
        handleCheckChange={handleCheckChange}
        handleDelete={handleDelete}
      />
  )};

  return (
    <table className="table-auto text-left bg-white">
      <thead>
        <tr>
          <th scope="col" className="th">Tasks</th>
          <th scope="col" className="th">Complete?</th>
          <th scope="col" className="th">Action</th>
        </tr>
      </thead>
      <tbody>
        <ListItems/>
      </tbody>
    </table>
  )
}
