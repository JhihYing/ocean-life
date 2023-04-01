<script>
export default {
  props: ["type"],
  setup(props) {
    return {
      props,
    };
  },
};
</script>

<template>
  <li class="faqBoxLi" v-for="item in props.type" :key="item.title">
    <button class="collapsible" type="button">
      <span>Q</span>
      <span class="question">{{ item.question }}</span>
    </button>

    <div class="faqContent">
      <p>{{ item.answer }}</p>
    </div>
  </li>
</template>

<style lang="scss" src="@/assets/scss/layout/faq/_faqItem.scss" scoped></style>
