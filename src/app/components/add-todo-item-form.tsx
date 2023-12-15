type Props = {
  handleCancel: () => void;
  handleSubmit: (title: string, description: string) => void; 
}

export default function AddTodoItemForm({
  handleCancel,
  handleSubmit
}: Props) {

  function submit(formData: FormData) {
    const title = formData.get('title')!.toString();
    const description = formData.get('description')!.toString();
    handleSubmit(title, description);
  }

  return (
    <div className="w-1/2 flex flex-col items-center content-center gap-5 p-5 card">
      <h1 className="font-semibold">New task</h1>
      <form 
        action={submit}
        className="container flex flex-col gap-1"
      >
        <label htmlFor="title" className="form-label">Title</label>
        <input type="text" name="title" id="title" className="form-control" required />
        <label htmlFor="description" className="form-label">Description</label>
        <textarea name="description" id="description" rows={3} className="form-control" />
        <span className="flex flex-row gap-2 justify-center">
          <button type="button" onClick={()=>{handleCancel()}} className="btn bg-red-500">Cancel</button>
          <button type="submit" className="btn bg-blue-500">Add</button>
        </span>
      </form>
    </div>
  )
}