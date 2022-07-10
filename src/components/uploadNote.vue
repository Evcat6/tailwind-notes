<template>
  <div class="flex justify-center">
    <button class="upload-btn" @click="newNotes"><span class="mr-2.5 pt-1 dark:text-white">Create new notes</span> <ion-ios-create class="dark:text-white/50"/></button>
  </div>
  <p class="flex justify-center mt-6 dark:text-white">{{err}}</p>
</template>

<script>
export default {
  props: {
    err: {
      type: String,
      required: true,
    },
    newNotes: {
      type: Function,
      required: true
    }
  }
}
</script>