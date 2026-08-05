import useLocalStorage from "use-local-storage-state"
import { TASK_KEY, type Task } from '../models/task'

export default function useTasks() {
    const [tasks] = useLocalStorage<Task[]>(TASK_KEY, {
        defaultValue: []
    })

    return {
        tasks,
        taskCount: tasks.length,
        concludedTasksCount: tasks.filter((task) => task.concluded).length
    }
}