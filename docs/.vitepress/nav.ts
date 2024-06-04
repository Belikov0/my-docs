export default [
  {
    text: "资源站",
    link: "/resource",
  },

  {
    text: "学科理论",
    items: [
      { text: "计算机网络", link: "/theory/computer_network/index" },
      { text: "编译原理", link: "/theory/compilation/index" },
    ],
  },
  {
    text: "前端技术",
    items: [
      {
        text: "前端基础",
        items: [
          { text: "HTML", link: "/frontend/html/index" },
          { text: "CSS", link: "/frontend/css/index" },
          { text: "JavaScript", link: "/frontend/js/index" },
        ],
      },
      {
        text: "前端框架",
        items: [
          { text: "React", link: "/frontend/react/index" },
          { text: "VUE", link: "/frontend/vue/index" },
        ],
      },
      {
        text: "后端技术",
        items: [{ text: "Node", link: "/frontend/node/index" }],
      },
      {
        text: "网络基础",
        items: [{ text: "Network", link: "/frontend/network/index" }],
      },
      {
        text: "Web可视化",
        items: [
          { text: "three.js", link: "/frontend/threejs/index" },
          { text: "d3.js", link: "/frontend/d3/index" },
          { text: "tinyColor2", link: "frontend/tinyColor/index" },
        ],
      },
    ],
  },
  {
    text: "前端面试",
    link: "/_questions/index",
  },
  {
    text: " 开发技术",
    items: [
      { text: "git", link: "/dev/git/index" },
      { text: "解决方案", link: "/dev/question/index" },
      { text: "开发经验", link: "/dev/exp/index" },
    ],
  },
];
