<template>
  <div class="main-container" :class="{'dark': darkMode}" >
    <div class="second-container" :class="{'h-screen' : stretchScreen()}">
    <div class="px-8 sm:px-20 py-14">
      <div class="flex justify-between">
        <h1 class="notes-title">Notes</h1>
        <label for="default-toggle" class="dark-mode-btn">
          <input @click="darkMode = !darkMode" type="checkbox" value="" id="default-toggle" class="sr-only peer">
          <span v-if="darkMode === true" class="mode-style dark:text-white">DarkMode</span>
          <span v-else-if="darkMode === false" class="mode-style">LightMode</span>
          <noto-v1-crescent-moon v-if="darkMode === true" class="ml-4"/>
          <ph-sun-light v-else-if="darkMode === false" class="ml-4"/>
        </label>
      </div>
      <p class="input-title">Title</p>
      <note-input v-model="title"/>
      <p class="input-title">Note description</p>
      <note-input v-model="body"/>
    <upload-note :err="err" :new-notes="newNotes"/>
  </div>
    <div>
      <notes-list :tasks="tasks" :delete-task="deleteTask"/>
        </div>
      </div>
    </div>

</template>

<script>
import noteInput from "@/components/noteInput";
import uploadNote from "@/components/uploadNote";
import notesList from "@/components/notesList";
export default {
  components: {notesList, uploadNote, noteInput},
  data() {
    return {
      title: "",
      body: "",
      err: "",
      tasks: [],
      darkMode: false,
    }
  },
  methods: {
    newNotes() {
      this.err = ""
      if (this.title.length > 0 && this.body.length > 0) {
        const notes = {id: Date.now(), name: this.title, body: this.body, time: new Date().toLocaleTimeString()}
        this.tasks.push(notes)
        this.title = ""
        this.body = ""
      } else {
        this.err = "please type note"
      }
    },
    deleteTask (task) {
      this.tasks.splice(task, 1)
    },
    stretchScreen() {
      if (this.tasks.length === 0) {
        return true
      } else {
        return false
      }
    }
  },
  mounted() {
    if (localStorage.tasks) {
      this.tasks = JSON.parse(localStorage.tasks);
    }
    if (localStorage.darkMode) {
      this.darkMode = JSON.parse(localStorage.darkMode);
    }
  },
  watch: {
    tasks: {
      handler(newTasks) {
        localStorage.tasks = JSON.stringify(newTasks);
      },
      deep: true
    },
    darkMode: {
      handler(newMode) {
        localStorage.darkMode = JSON.stringify(newMode);
      }
    }
  }
}
</script>
