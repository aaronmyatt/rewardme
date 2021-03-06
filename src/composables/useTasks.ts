import type { z } from 'zod'
import { useProfiles } from '~/stores/profiles'
import type { Reward, Task } from '~/schemas'

type TaskType = z.infer<typeof Task>
type RewardType = z.infer<typeof Reward>

export default function useTasks() {
  const profileStore = useProfiles()

  function storeNewTask(reward: RewardType, task: TaskType) {
    const updateddate = new Date().toUTCString()
    if (task.id in profileStore.active.rewards[reward.id].tasks) {
      // update
      task.updateddate = updateddate
    }
    reward.updateddate = updateddate
    profileStore.active.rewards[reward.id].tasks[task.id] = task
    return task
  }

  function deleteTask(reward: RewardType, task: TaskType) {
    const newTasks: Record<string, TaskType> = {}
    for (const key in reward.tasks) {
      if (key === task.id) {
        // skip item
      }
      else {
        newTasks[key] = reward.tasks[key]
      }
    }
    reward.updateddate = new Date().toUTCString()
    profileStore.active.rewards[reward.id].tasks = newTasks
  }

  function getByReward(id: string) {
    return profileStore.active.rewards[id].tasks
  }

  return {
    storeNewTask,
    getByReward,
    deleteTask,
  }
}
