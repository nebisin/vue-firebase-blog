<template>
  <div class="tag">
    <h1>Tag</h1>
    <div v-if="error">{{ error }}</div>
    <div v-else-if="posts.length" class="layout">
      <PostList :posts="filteredPosts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else><Spinner /></div>
  </div>
</template>

<script>
import PostList from "../components/PostList";
import Spinner from "../components/Spinner";
import getPosts from "../composables/getPosts";

import { useRoute } from "vue-router";
import { computed } from "vue";
import TagCloud from "../components/TagCloud.vue";

export default {
  name: "Tag",
  props: ["tag"],
  components: {
    PostList,
    Spinner,
    TagCloud,
  },
  setup() {
    const route = useRoute();
    const { posts, error, load } = getPosts();

    load();

    const filteredPosts = computed(() => {
      return posts.value.filter((post) => post.tags.includes(route.params.tag));
    });

    return { filteredPosts, posts, error };
  },
};
</script>

<style scoped>
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>