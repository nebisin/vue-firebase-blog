<template>
  <div v-if="error">{{ error }}</div>
  <div v-else-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button @click="deleteHandler">Delete Post</button>
  </div>
  <div v-else><Spinner /></div>
</template>

<script>
import Spinner from "../components/Spinner";

import getPost from "../composables/getPost";
import { projectFirestore } from "../firebase/config";

import { useRouter } from "vue-router";

export default {
  props: ["id"],
  components: {
    Spinner,
  },
  setup(props) {
    const { post, error, load } = getPost(props.id);

    const router = useRouter();

    load();

    const deleteHandler = async () => {
      await projectFirestore.collection("posts").doc(props.id).delete();

      router.push("/");
    };

    return { post, error, deleteHandler };
  },
};
</script>

<style>
.post {
  max-width: 1200px;
  margin: 0 auto;
}

.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}

.pre {
  white-space: pre-wrap;
}
</style>