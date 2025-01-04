export type taskPriority = 'low' | 'medium' | 'high'
export type taskStatus = 'todo' | 'doing' | 'done'
export interface Task {
    id: number
    title: string
    description: string
   priority:taskPriority
   status:taskStatus
}
