export default {
  esbuild: {
    target: "esnext",
  },
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        post: "./post/index.html",
        profile: "./profile/index.html",
        settings: "./settings/index.html",
        login: "./login/index.html",
        register: "./register/index.html",
      },
    },
  },
};
