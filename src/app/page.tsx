'use client'

import { useState } from "react"
import { TodoItem } from "./lib/definitions";
import TodoList from "./components/todo-list";
import AddButton from "./components/add-button";
import AddTodoItemForm from "./components/add-todo-item-form";

export default function Home() {
  const [id, setId] = useState(0); // Track key for each list item
  const [list, setList] = useState(Array<TodoItem>); // List of to-do items
  const [showForm, setShowForm] = useState(false); // State of form visibility

  // Change 'checked' status of given to-do item
  function handleCheckChange(item: TodoItem) {
    const updatedList = list.map((currentItem: TodoItem, ) => {
      return (currentItem.key === item.key) ? item : currentItem;
    });
    setList(updatedList)
  }

  /*
    Creates a new to-do item, assigns a unique key to it, and
    uses setState to update the list.
  */
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

  /*
    Removes the specified to-do item from the list using
    its ID, and updates the list state
  */
  function deleteListItem(item: TodoItem) {
    setList(list.filter((currentItem: TodoItem) => {
      return currentItem.key !== item.key;
    }))
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
