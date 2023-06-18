<template>
  <div>
    <div class="text-center mt-15">
      <atom-spinner
        :animation-duration="1000"
        :size="60"
        color="#00838F"
        class="mx-auto"
      />
      <p class="secondary--text fs-xsmall mt-5">در حال بارگذاری</p>
    </div>
  </div>
</template>

<script>
import { AtomSpinner } from "epic-spinners";
export default {
  components: {
    AtomSpinner,
  },
};
</script>
