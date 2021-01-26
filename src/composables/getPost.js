import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      let res = await projectFirestore
        .collection("posts")
        .doc(id)
        .get();

      if (!res.exists) {
        throw Error("404 not found");
      }

      post.value = { ...res.data(), id };
    } catch (e) {
      error.value = e.message;
      console.log(error.value);
    }
  };

  return { post, error, load };
};

export default getPost;
