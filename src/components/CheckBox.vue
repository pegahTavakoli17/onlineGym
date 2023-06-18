<template>
  <div class="d-flex">
    <div
      @click="selectItem(text)"
      v-for="(text, index) in itemTexts"
      :key="index"
      class="me-8"
    >
      <v-icon v-if="checked != text" color="primary"
        >mdi-checkbox-blank-outline</v-icon
      >
      <v-icon v-else color="primary">mdi-checkbox-intermediate</v-icon>
      <span class="ms-1 fs-small pt-1">{{ text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["items", "model", "value"],
  data() {
    return {
      checkBoxItems: [],
      itemTexts: [],
      checked: "",
      checkedValue: "",
    };
  },
  methods: {
    createTextItemArray() {
      this.itemTexts = this.items.map((x) => x.text);
    },
    selectItem(text) {
      this.checked = text;
      this.checkedValue = this.checkBoxItems.filter(
        (x) => x.text == this.checked
      )[0]
        ? this.checkBoxItems.filter((x) => x.text == this.checked)[0].value
        : "";
      this.$emit("passData", { value: this.checkedValue, model: this.model });
    },
  },
  mounted() {
    this.checkBoxItems = this.items;
    if (typeof this.value == "boolean") {
      this.checked = this.checkBoxItems.filter((x) => x.value == this.value)[0]
        ? this.checkBoxItems.filter((x) => x.value == this.value)[0].text
        : "";
    }
    this.createTextItemArray();
  },
};
</script>
