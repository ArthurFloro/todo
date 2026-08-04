import Button from "../components/button";
import PlusIcon from "../assets/icons/plus.svg?react"
import TaskItem from "./task-item";

export default function TasksList() {
  return <>
    <section>
      <Button className="w-full" icon={PlusIcon}>Nova tarefa</Button>
    </section>
    <section className="space-y-2">
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </section>
  </>
}