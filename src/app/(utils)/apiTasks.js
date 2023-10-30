export const API = {

  // GET
  async getTasks (token) {
    try {
      const response = await fetch('api/tasks', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          id: `${token}`
        },
        credentials: 'include'
      })
      if (response.ok) {
        const tasks = await response.json()
        return tasks
      } else {
        console.error('Error al cargar las tareas.')
      }
    } catch (error) {
      console.error('Error al obtener las tareas', error)
    }
  },

  // POST
  async sendTask (task) {
    console.log('ANTES', task)
    try {
      const response = await fetch('api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(task)
      })
      return response
    } catch (error) {
      console.error('Error al cargar tarea')
    }
  },

  async updateTask (task) {
    try {
      const response = await fetch(`${this.url}/${task._id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(task)
      })
      return response
    } catch (error) {
      console.error('Error al editar la tarea: ', error)
    }
  },

  // PATCH
  async updateCompletedTasks (task) {
    try {
      const response = await fetch(`${this.url}/${task._id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          completed: true
        })
      })
      return response
    } catch (error) {
      console.error('Error al completar la tarea: ', error)
    }
  },

  // PATCH

  async updateExpiredTasks (task) {
    try {
      await fetch(`${this.url}/${task._id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          expired: true
        })
      })
    } catch (error) {
      console.error('Error al expirar la tarea', error)
    }
  },

  // DELETE

  async deleteTask (task) {
    try {
      const response = await fetch(`${this.url}/${task._id}`, {
        method: 'DELETE',
        credentials: 'include'
      })
      return response
    } catch (error) {
      console.error('Error al eliminar la tarea: ', error)
    }
  }

}
