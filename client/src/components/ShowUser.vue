<template>
  <div>
    <h1>Show Silver</h1>
    <p>ID : {{ user.id }}</p>
    <p>Source : {{ user.source }}</p>
    <p>Benefit : {{ user.benefit }}</p>
    <p>Reaction: {{ user.reaction }}</p>
    <p>type: {{user.type}}</p>
  </div>
</template>
<script>
import UserService from "@/services/UsersService";
export default {
  data() {
    return {
      user: null,
    };
  },
  async created() {
    try {
      let userId = this.$route.params.userId;
      this.user = (await UserService.show(userId)).data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style scoped>
</style>