import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  // 🔴 ADD THIS LINE TO DEBUG IN YOUR TERMINAL:
  console.log("👉 VITE IS READING ENVS FROM:", process.cwd(), env.GOOGLE_MAPS_API_KEY);

  const processEnvValues = Object.keys(env).reduce((acc, key) => {
    acc[`process.env.${key}`] = JSON.stringify(env[key]);
    return acc;
  }, {});

  return {
    server: {
      hmr:
        process.env.CODESANDBOX_SSE || process.env.GITPOD_WORKSPACE_ID
          ? 443
          : undefined,
    },
    define: processEnvValues,
  };
});