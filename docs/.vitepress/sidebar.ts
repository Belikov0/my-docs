const frontend_prefix = "/frontend";

export const frontend = {
  "/frontend/html/": [],
  "/frontend/css/": [],
  "/frontend/js/": [
    {
      text: "内容",
      collapsed: true,
      items: [
        {
          text: "数组",
          collapsed: true,
          items: [{ text: "数组方法", link: "/frontend/js/array/数组方法" }],
        },
        {
          text: "对象",
          collapsed: true,
          items: [],
        },
      ],
    },
    {
      text: "面试",
      collapsed: true,
      items: [
        { text: "数组去重", link: "/frontend/js/questions/数组去重" },
        { text: "数组展平", link: "/frontend/js/questions/数组展平" },
        { text: "闭包", link: "/frontend/js/questions/闭包" },
      ],
    },
  ],
  "/frontend/vue/": [],
  "/frontend/network/": [],
  "/frontend/react/": [
    {
      text: "绪论",
      link: "/frontend/react/index",
    },
  ],
  "/frontend/threejs": [
    {
      text: "快速开始",
      link: "/frontend/threejs/index",
    },
  ],
  "/frontend/tinyColor": [
    {
      text: "tinycolor颜色库简单接口文档",
      link: "/frontend/tinyColor/index",
    },
  ],
  "/frontend/d3": [
    {
      text: "快速开始",
      link: "/frontend/d3/index",
    },
    {
      text: "可视化",
      collapsed: true,
      items: [
        {
          text: "力导向图",
          collapsed: true,
          items: [
            {
              text: "力导向图模拟",
              links: "/frontend/d3/visualization/force/force",
            },
          ],
        },
      ],
    },
    {
      text: "元素选择与渲染",
      collaped: true,
      items: [
        {
          text: "选择元素",
          links: "/frontend/d3/visualization/selection/selecting",
        },
      ],
    },
    {
      text: "交互",
      // collapsed: true,
      items: [
        {
          text: "拖拽",
          link: "/frontend/d3/interaction/drag",
        },
      ],
    },
  ],
};

export const theories = {
  "/theory/computer_network": [
    {
      text: "概述",
      collapsed: true,
      items: [
        { text: "绪论", link: "theory/computer_network/index" },
        {
          text: "交换方式",
          link: "theory/computer_network/introduction/switch",
        },
      ],
    },
  ],
  "/theory/compilation": [
    { text: "绪论", link: "/theory/compilation/index" },
    { text: "文法和语言", link: "/theory/compilation/grammer" },
    { text: "上下文无关文法", link: "/theory/compilation/grammer_2" },
  ],
};

export const dev = {
  "dev/git": [
    {
      text: "git",
      collapsed: true,
      items: [{ text: "入门", link: "/dev/git/index" }],
    },
  ],
  "dev/question": [
    {
      text: "开发解决方案",
      collapsed: true,
      items: [{ text: "1", link: "dev/question/index" }],
    },
  ],
  "dev/exp": [
    {
      text: "代码经验",
      link: "dev/exp/index",
    },
    {
      text: "随记",
      link: "dev/exp/casual",
    },
  ],
};
