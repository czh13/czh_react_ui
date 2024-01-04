/*
 * @Author: milton
 * @Date: 2023-12-29 11:49:22
 * @LastEditors: milton caizhihao@guidefuture.com
 * @LastEditTime: 2023-12-29 15:48:20
 * @FilePath: \dumi_react_ui\.dumirc.ts
 * @Description:
 *
 */
import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  base: '/czh_react_ui/',
  publicPath: '/czh_react_ui/',
  themeConfig: {
    name: 'czh-ui',
    nav: [
      { title: 'Guide', link: '/guide' },
      { title: 'Component', link: '/components/space' },
    ],
    socialLinks: {
      github: 'https://github.com/czh13/czh_react_ui',
    },
    nprogress: true,
    showLineNum: true,
    lastUpdated: false,
    editLink: false,
  },
});
