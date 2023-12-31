import z from 'zod'

const taskSchema = z.object({
  title: z.string({
    required_error: 'Task title is required'
  }).min(5),
  description: z
    .string({
      required_error: 'Task description is required'
    })
    .min(10)
    .max(100),
  completed: z
    .boolean(),
  date: z
    .string(),
  expired: z
    .boolean()
})

export function validateTask (task) {
  return taskSchema.safeParse(task)
}

export function validatePartialTask (task) {
  console.log('TASK' + task)
  return taskSchema.partial().safeParse(task)
}
