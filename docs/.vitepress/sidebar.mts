const front_end_prefix = "/front_end";

export const front_end = {
  "/front_end/html/": [],
  "/front_end/css/": [],
  "/front_end/js/": [
    {
      text: "内容",
      collapsed: true,
      items: [
        {
          text: "数组",
          collapsed: true,
          items: [{ text: "数组方法", link: "/front_end/js/array/数组方法" }],
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
        { text: "数组去重", link: "/front_end/js/questions/数组去重" },
        { text: "数组展平", link: "/front_end/js/questions/数组展平" },
        { text: "闭包", link: "/front_end/js/questions/闭包" },
      ],
    },
  ],
  "/front_end/vue/": [],
  "/front_end/network/": [],
  "/front_end/react/": [
    {
      text: "绪论",
      link: "/front_end/react/index",
    },
  ],
  "/front_end/threejs" :[
    {
      text: "入门",
      link: "/front_end/threejs/index"
    }
  ]
};

export const theories = {
  "/theory/computer_network": [
    {
      text: "概述",
      collpased: true,
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
    // { text: '上下文无关文法', link:'/theory/compilation/grammer_2'}
  ],
};
