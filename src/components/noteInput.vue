<template>
  <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="input-style"
      placeholder="Type something..."
  />
</template>

<script>
export default {
  props: {
    modelValue: String,
  }
}
</script>
