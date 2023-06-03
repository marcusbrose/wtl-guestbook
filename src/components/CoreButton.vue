<template>
  <button class="core-button">
    <slot />
  </button>
</template>

<style>
.core-button {
  @apply flex justify-center items-center;
  @apply px-3.5 py-2.5 text-sm font-semibold;
  @apply bg-emerald-600 text-white rounded-md shadow-sm;
  @apply hover:bg-emerald-500;
  @apply focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600;
}

.core-button:disabled {
  @apply bg-gray-300 text-gray-600;
}
</style>