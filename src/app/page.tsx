'use client'

import { useState } from "react"
import { TodoItem } from "./lib/definitions";
import TodoList from "./components/todo-list";
import AddButton from "./components/add-button";
import AddTodoItemForm from "./components/add-todo-item-form";

export default function Home() {
  const [id, setId] = useState(0);
  const [list, setList] = useState(Array<TodoItem>);
  const [showForm, setShowForm] = useState(false);

  function handleCheckChange(item: TodoItem) {
    const updatedList = list.map((currentItem: TodoItem, ) => {
      return (currentItem.key === item.key) ? item : currentItem;
    });
    setList(updatedList)
  }

  function insertListItem(title: string, description: string) {
    let item: TodoItem = {
      key: id,
      title: title,
      description: description,
      checked: false
    }
    setList([...list, item])
    setId(id+1)
    setShowForm(false);
  }

  function deleteListItem(item: TodoItem) {
    setList(list.filter((currentItem: TodoItem) => {
      return currentItem.key !== item.key;
    }))
  }

  function showTodoItemForm() {

  }

  const EmptyMessage = () => {
    return (
      <h1 className="w-100 text-lg font-bold">
        List is empty! Start by adding something to-do
      </h1>
    );
  };

  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center">
      { (list.length > 0) ?
      <div className="overflow-auto max-h-[50vh] p-4 bg-white">
        <TodoList
          items={list}
          handleCheckChange={handleCheckChange}
          handleDelete={deleteListItem}
        />
      </div> : <EmptyMessage/> 
      }
      <AddButton onClick={() => setShowForm(true)}>
        <p className="font-semibold">Add new to-do item</p>
      </AddButton>
      { (showForm)? 
        <AddTodoItemForm 
          handleCancel={()=>setShowForm(false)} 
          handleSubmit={insertListItem}
        /> : <></>
      }
    </main>
  )
}
