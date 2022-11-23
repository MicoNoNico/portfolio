// vite.config.ts
import path from "path";
import { defineConfig } from "file:///D:/Portfolio/portfolio/node_modules/vite/dist/node/index.js";
import Preview from "file:///D:/Portfolio/portfolio/node_modules/vite-plugin-vue-component-preview/out/index.js";
import Vue from "file:///D:/Portfolio/portfolio/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Pages from "file:///D:/Portfolio/portfolio/node_modules/vite-plugin-pages/dist/index.mjs";
import generateSitemap from "file:///D:/Portfolio/portfolio/node_modules/vite-ssg-sitemap/dist/index.js";
import Layouts from "file:///D:/Portfolio/portfolio/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import Components from "file:///D:/Portfolio/portfolio/node_modules/unplugin-vue-components/dist/vite.mjs";
import AutoImport from "file:///D:/Portfolio/portfolio/node_modules/unplugin-auto-import/dist/vite.js";
import Markdown from "file:///D:/Portfolio/portfolio/node_modules/vite-plugin-vue-markdown/dist/index.mjs";
import { VitePWA } from "file:///D:/Portfolio/portfolio/node_modules/vite-plugin-pwa/dist/index.mjs";
import VueI18n from "file:///D:/Portfolio/portfolio/node_modules/@intlify/vite-plugin-vue-i18n/lib/index.mjs";
import Inspect from "file:///D:/Portfolio/portfolio/node_modules/vite-plugin-inspect/dist/index.mjs";
import LinkAttributes from "file:///D:/Portfolio/portfolio/node_modules/markdown-it-link-attributes/index.js";
import Unocss from "file:///D:/Portfolio/portfolio/node_modules/unocss/dist/vite.mjs";
import Shiki from "file:///D:/Portfolio/portfolio/node_modules/markdown-it-shiki/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\Portfolio\\portfolio";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__vite_injected_original_dirname, "src")}/`
    }
  },
  plugins: [
    Preview(),
    Vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true
    }),
    Pages({
      extensions: ["vue", "md"]
    }),
    Layouts(),
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        "vue-i18n",
        "vue/macros",
        "@vueuse/head",
        "@vueuse/core"
      ],
      dts: "src/auto-imports.d.ts",
      dirs: [
        "src/composables",
        "src/store"
      ],
      vueTemplate: true
    }),
    Components({
      extensions: ["vue", "md"],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: "src/components.d.ts"
    }),
    Unocss(),
    Markdown({
      wrapperClasses: "prose prose-sm m-auto text-left",
      headEnabled: true,
      markdownItSetup(md) {
        md.use(Shiki, {
          theme: {
            light: "vitesse-light",
            dark: "vitesse-dark"
          }
        });
        md.use(LinkAttributes, {
          matcher: (link) => /^https?:\/\//.test(link),
          attrs: {
            target: "_blank",
            rel: "noopener"
          }
        });
      }
    }),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "safari-pinned-tab.svg"],
      manifest: {
        name: "Vitesse",
        short_name: "Vitesse",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    }),
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__vite_injected_original_dirname, "locales/**")]
    }),
    Inspect()
  ],
  test: {
    include: ["test/**/*.test.ts"],
    environment: "jsdom",
    deps: {
      inline: ["@vue", "@vueuse", "vue-demi"]
    }
  },
  ssgOptions: {
    script: "async",
    formatting: "minify",
    onFinished() {
      generateSitemap();
    }
  },
  ssr: {
    noExternal: ["workbox-window", /vue-i18n/]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQb3J0Zm9saW9cXFxccG9ydGZvbGlvXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxQb3J0Zm9saW9cXFxccG9ydGZvbGlvXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Qb3J0Zm9saW8vcG9ydGZvbGlvL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAncGF0aCdcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IFByZXZpZXcgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWNvbXBvbmVudC1wcmV2aWV3J1xyXG5pbXBvcnQgVnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuaW1wb3J0IFBhZ2VzIGZyb20gJ3ZpdGUtcGx1Z2luLXBhZ2VzJ1xyXG5pbXBvcnQgZ2VuZXJhdGVTaXRlbWFwIGZyb20gJ3ZpdGUtc3NnLXNpdGVtYXAnXHJcbmltcG9ydCBMYXlvdXRzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1sYXlvdXRzJ1xyXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xyXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xyXG5pbXBvcnQgTWFya2Rvd24gZnJvbSAndml0ZS1wbHVnaW4tdnVlLW1hcmtkb3duJ1xyXG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJ1xyXG5pbXBvcnQgVnVlSTE4biBmcm9tICdAaW50bGlmeS92aXRlLXBsdWdpbi12dWUtaTE4bidcclxuaW1wb3J0IEluc3BlY3QgZnJvbSAndml0ZS1wbHVnaW4taW5zcGVjdCdcclxuaW1wb3J0IExpbmtBdHRyaWJ1dGVzIGZyb20gJ21hcmtkb3duLWl0LWxpbmstYXR0cmlidXRlcydcclxuaW1wb3J0IFVub2NzcyBmcm9tICd1bm9jc3Mvdml0ZSdcclxuaW1wb3J0IFNoaWtpIGZyb20gJ21hcmtkb3duLWl0LXNoaWtpJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnfi8nOiBgJHtwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyl9L2AsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIHBsdWdpbnM6IFtcclxuICAgIFByZXZpZXcoKSxcclxuXHJcbiAgICBWdWUoe1xyXG4gICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwubWQkL10sXHJcbiAgICAgIHJlYWN0aXZpdHlUcmFuc2Zvcm06IHRydWUsXHJcbiAgICB9KSxcclxuXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vaGFubm9lcnUvdml0ZS1wbHVnaW4tcGFnZXNcclxuICAgIFBhZ2VzKHtcclxuICAgICAgZXh0ZW5zaW9uczogWyd2dWUnLCAnbWQnXSxcclxuICAgIH0pLFxyXG5cclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Kb2huQ2FtcGlvbkpyL3ZpdGUtcGx1Z2luLXZ1ZS1sYXlvdXRzXHJcbiAgICBMYXlvdXRzKCksXHJcblxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLWF1dG8taW1wb3J0XHJcbiAgICBBdXRvSW1wb3J0KHtcclxuICAgICAgaW1wb3J0czogW1xyXG4gICAgICAgICd2dWUnLFxyXG4gICAgICAgICd2dWUtcm91dGVyJyxcclxuICAgICAgICAndnVlLWkxOG4nLFxyXG4gICAgICAgICd2dWUvbWFjcm9zJyxcclxuICAgICAgICAnQHZ1ZXVzZS9oZWFkJyxcclxuICAgICAgICAnQHZ1ZXVzZS9jb3JlJyxcclxuICAgICAgXSxcclxuICAgICAgZHRzOiAnc3JjL2F1dG8taW1wb3J0cy5kLnRzJyxcclxuICAgICAgZGlyczogW1xyXG4gICAgICAgICdzcmMvY29tcG9zYWJsZXMnLFxyXG4gICAgICAgICdzcmMvc3RvcmUnLFxyXG4gICAgICBdLFxyXG4gICAgICB2dWVUZW1wbGF0ZTogdHJ1ZSxcclxuICAgIH0pLFxyXG5cclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bnBsdWdpbi12dWUtY29tcG9uZW50c1xyXG4gICAgQ29tcG9uZW50cyh7XHJcbiAgICAgIC8vIGFsbG93IGF1dG8gbG9hZCBtYXJrZG93biBjb21wb25lbnRzIHVuZGVyIGAuL3NyYy9jb21wb25lbnRzL2BcclxuICAgICAgZXh0ZW5zaW9uczogWyd2dWUnLCAnbWQnXSxcclxuICAgICAgLy8gYWxsb3cgYXV0byBpbXBvcnQgYW5kIHJlZ2lzdGVyIGNvbXBvbmVudHMgdXNlZCBpbiBtYXJrZG93blxyXG4gICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwudnVlXFw/dnVlLywgL1xcLm1kJC9dLFxyXG4gICAgICBkdHM6ICdzcmMvY29tcG9uZW50cy5kLnRzJyxcclxuICAgIH0pLFxyXG5cclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bm9jc3NcclxuICAgIC8vIHNlZSB1bm9jc3MuY29uZmlnLnRzIGZvciBjb25maWdcclxuICAgIFVub2NzcygpLFxyXG5cclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS92aXRlLXBsdWdpbi12dWUtbWFya2Rvd25cclxuICAgIC8vIERvbid0IG5lZWQgdGhpcz8gVHJ5IHZpdGVzc2UtbGl0ZTogaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3ZpdGVzc2UtbGl0ZVxyXG4gICAgTWFya2Rvd24oe1xyXG4gICAgICB3cmFwcGVyQ2xhc3NlczogJ3Byb3NlIHByb3NlLXNtIG0tYXV0byB0ZXh0LWxlZnQnLFxyXG4gICAgICBoZWFkRW5hYmxlZDogdHJ1ZSxcclxuICAgICAgbWFya2Rvd25JdFNldHVwKG1kKSB7XHJcbiAgICAgICAgLy8gaHR0cHM6Ly9wcmlzbWpzLmNvbS9cclxuICAgICAgICBtZC51c2UoU2hpa2ksIHtcclxuICAgICAgICAgIHRoZW1lOiB7XHJcbiAgICAgICAgICAgIGxpZ2h0OiAndml0ZXNzZS1saWdodCcsXHJcbiAgICAgICAgICAgIGRhcms6ICd2aXRlc3NlLWRhcmsnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIG1kLnVzZShMaW5rQXR0cmlidXRlcywge1xyXG4gICAgICAgICAgbWF0Y2hlcjogKGxpbms6IHN0cmluZykgPT4gL15odHRwcz86XFwvXFwvLy50ZXN0KGxpbmspLFxyXG4gICAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJyxcclxuICAgICAgICAgICAgcmVsOiAnbm9vcGVuZXInLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcblxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3ZpdGUtcGx1Z2luLXB3YVxyXG4gICAgVml0ZVBXQSh7XHJcbiAgICAgIHJlZ2lzdGVyVHlwZTogJ2F1dG9VcGRhdGUnLFxyXG4gICAgICBpbmNsdWRlQXNzZXRzOiBbJ2Zhdmljb24uc3ZnJywgJ3NhZmFyaS1waW5uZWQtdGFiLnN2ZyddLFxyXG4gICAgICBtYW5pZmVzdDoge1xyXG4gICAgICAgIG5hbWU6ICdWaXRlc3NlJyxcclxuICAgICAgICBzaG9ydF9uYW1lOiAnVml0ZXNzZScsXHJcbiAgICAgICAgdGhlbWVfY29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgICBpY29uczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzcmM6ICcvcHdhLTE5MngxOTIucG5nJyxcclxuICAgICAgICAgICAgc2l6ZXM6ICcxOTJ4MTkyJyxcclxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzcmM6ICcvcHdhLTUxMng1MTIucG5nJyxcclxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcclxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzcmM6ICcvcHdhLTUxMng1MTIucG5nJyxcclxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcclxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXHJcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnkgbWFza2FibGUnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcblxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ludGxpZnkvYnVuZGxlLXRvb2xzL3RyZWUvbWFpbi9wYWNrYWdlcy92aXRlLXBsdWdpbi12dWUtaTE4blxyXG4gICAgVnVlSTE4bih7XHJcbiAgICAgIHJ1bnRpbWVPbmx5OiB0cnVlLFxyXG4gICAgICBjb21wb3NpdGlvbk9ubHk6IHRydWUsXHJcbiAgICAgIGluY2x1ZGU6IFtwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnbG9jYWxlcy8qKicpXSxcclxuICAgIH0pLFxyXG5cclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS92aXRlLXBsdWdpbi1pbnNwZWN0XHJcbiAgICAvLyBWaXNpdCBodHRwOi8vbG9jYWxob3N0OjMzMzMvX19pbnNwZWN0LyB0byBzZWUgdGhlIGluc3BlY3RvclxyXG4gICAgSW5zcGVjdCgpLFxyXG4gIF0sXHJcblxyXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS92aXRlc3QtZGV2L3ZpdGVzdFxyXG4gIHRlc3Q6IHtcclxuICAgIGluY2x1ZGU6IFsndGVzdC8qKi8qLnRlc3QudHMnXSxcclxuICAgIGVudmlyb25tZW50OiAnanNkb20nLFxyXG4gICAgZGVwczoge1xyXG4gICAgICBpbmxpbmU6IFsnQHZ1ZScsICdAdnVldXNlJywgJ3Z1ZS1kZW1pJ10sXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS92aXRlLXNzZ1xyXG4gIHNzZ09wdGlvbnM6IHtcclxuICAgIHNjcmlwdDogJ2FzeW5jJyxcclxuICAgIGZvcm1hdHRpbmc6ICdtaW5pZnknLFxyXG4gICAgb25GaW5pc2hlZCgpIHsgZ2VuZXJhdGVTaXRlbWFwKCkgfSxcclxuICB9LFxyXG5cclxuICBzc3I6IHtcclxuICAgIC8vIFRPRE86IHdvcmthcm91bmQgdW50aWwgdGhleSBzdXBwb3J0IG5hdGl2ZSBFU01cclxuICAgIG5vRXh0ZXJuYWw6IFsnd29ya2JveC13aW5kb3cnLCAvdnVlLWkxOG4vXSxcclxuICB9LFxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTBQLE9BQU8sVUFBVTtBQUMzUSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLGFBQWE7QUFDcEIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sV0FBVztBQUNsQixPQUFPLHFCQUFxQjtBQUM1QixPQUFPLGFBQWE7QUFDcEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxjQUFjO0FBQ3JCLFNBQVMsZUFBZTtBQUN4QixPQUFPLGFBQWE7QUFDcEIsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sb0JBQW9CO0FBQzNCLE9BQU8sWUFBWTtBQUNuQixPQUFPLFdBQVc7QUFmbEIsSUFBTSxtQ0FBbUM7QUFpQnpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLE1BQU0sR0FBRyxLQUFLLFFBQVEsa0NBQVcsS0FBSztBQUFBLElBQ3hDO0FBQUEsRUFDRjtBQUFBLEVBRUEsU0FBUztBQUFBLElBQ1AsUUFBUTtBQUFBLElBRVIsSUFBSTtBQUFBLE1BQ0YsU0FBUyxDQUFDLFVB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
