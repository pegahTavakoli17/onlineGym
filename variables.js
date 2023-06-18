// give the hosted domain here
module.exports = {
  hardcode_url:
    process.env.NODE_ENV === "production"
      ? "something.satrapp.com/api/"
      : "localhost/api/",
  token: "9dfa0cf455fb5c2cc44f145fb5642fe72b156c5a",
  allTypes: [
    {
      index: 0,
      iBusy: true,
      name: "محصولات",
      id: "6145accc4fc6136858801595",
      variant: "primary",
      icon: "mdi-package-variant-closed",
      color: "green",
      slug: "product",
    },
    {
      index: 1,
      iBusy: true,
      name: "مواد اولیه",
      id: "6145acfb4fc61368588015a0",
      variant: "secondary",
      icon: "mdi-newspaper-plus",
      color: "blue",
      slug: "material",
    },
    {
      index: 2,
      iBusy: true,
      name: "ملزومات",
      id: "6145acef4fc613685880159e",
      variant: "success",
      icon: "mdi-tools",
      color: "red",
      slug: "tool",
    },
    {
      index: 3,
      iBusy: true,
      name: "محصول فروشگاه",
      id: "616838e7af6ce65ed71f4879",
      variant: "success",
      icon: "mdi-shopping",
      color: "yellow",
      slug: "shop",
    },
  ],
};
