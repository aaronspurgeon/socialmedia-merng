const Post = require("../../Post")

module.exports = {
    Query: {
        async getPosts() {
          try {
            const posts = await Post.find();
            return posts;
          } catch (err) {
            throw new Error(err);
          }
        },
      },
}