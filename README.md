# 肖思晨的个人主页

白色与浅灰绿为主的静态个人网站，围绕 AI 产品实践与数据治理研究组织内容。保留现有 Vercel 路由和历史项目资料入口。

## 预览

直接在浏览器打开 `index.html`。也可以在当前目录运行 `python -m http.server 4173 --bind 127.0.0.1`，然后访问 `http://127.0.0.1:4173`。

## 内容维护

- `index.html`：个人介绍、项目、科研、实习、教育与联系方式。
- `viewer-momenta.html`：CPM Agent 和项目看板案例。
- `xsc-resume.pdf`：当前简历的原始 PDF，所有新下载入口统一指向此文件。
- `assets/resume-preview.webp`：简历预览图，更新 PDF 时同步更新。
- `assets/site.css`：所有页面共享的浅色样式及手机适配。
- `assets/site.js`、`assets/case.js`：导航、邮箱复制及图片放大功能。
- `viewer-zhirun.html`、`viewer-semi-secret.html`：原有项目资料的历史访问地址。

本次内容依据 2026 年 10 月提供的最新简历更新。历史中文简历文件名同时保留，并在 Vercel 上转向 `/xsc-resume.pdf`。

## 发布

项目无需安装依赖或构建，沿用已有 Vercel 静态站点设置。提交网站文件到现有部署仓库的 `main` 分支后，由现有部署流程发布到 `https://www.xiaosc.asia/`。发布后检查线上主页、项目案例和简历下载是否对应最新内容。

`.vercelignore` 限定网站发布文件，排除本地工作目录与预览文件。不要将学籍材料或内部项目源文件加入发布内容。
