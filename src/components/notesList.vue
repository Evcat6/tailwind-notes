<template>
  <p v-if="tasks.length === 0" class="flex justify-center dark:text-white dark:text-white">No notes yet</p>
  <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 px-7 sm:px-20 py-10 ">
    <div class="backdrop-blur-xl bg-white/30 p-6 rounded-2xl truncate mb-10 lg:mb-0" v-for="(task) in tasks" :key="task.id">
      <p class="flex justify-between font-bold dark:text-white">Title<IcBaselineDeleteForever @click="deleteTask"/></p>
      <div class="dark:text-white mt-0.5 mb-0.5">{{task.name}}</div>
      <p class="font-bold dark:text-white">Description</p>
      <div class="dark:text-white mt-2.5">{{task.body}}</div>
      <p class="font-bold dark:text-white">Time</p>
      <div class="dark:text-white mt-2.5">{{task.time}}</div>
    </div>
  </div>
</template>

<script>
export default {
props: {
  tasks: {
    type: Array,
    required: true
  },
  deleteTask: {
    type: Function,
    required: true
  }
}
}
</script>
