export default {
  Manager: [
    {
      name: "خانه",
      url: "/Manager/dashboard",
      open: false,
      icon: "$Home",
    },
    {
      name: "منابع انسانی",
      url: "/hrm/employees",
      open: false,
      icon: "$Customer",
    },
    {
      name: "تنظیمات",
      url: "#",
      open: false,
      icon: "$Cog",
      children: [
        {
          name: "باشگاه مشتریان",
          url: "/Manager/customersClub",
          open: false,
          icon: "$Star",
        },
        {
          name: "تغییر رمز عبور",
          url: "/Manager/changePassword",
          open: false,
          icon: "$Key",
        },
      ],
    },
  ],
  shop: [
    {
      name: "خانه",
      url: "/shop/dashboard",
      open: false,
      icon: "$Home",
    },
    {
      name: "فاکتور جدید",
      url: "/shop/newInvoice",
      open: false,
      icon: "$NewInvoice",
    },
    {
      name: "محصولات",
      url: "/shop/products",
      open: false,
      icon: "$Products",
    },
    {
      name: "فاکتور فروش",
      url: "/shop/salesInvoices",
      open: false,
      icon: "$SalesInvoice",
    },
    {
      name: "نمودار فروش",
      url: "/shop/reports",
      open: false,
      icon: "$Chart",
    },
    {
      name: "مشتریان",
      url: "/shop/customers",
      open: false,
      icon: "$Customer",
    },
    {
      name: "تنظیمات",
      url: "#",
      open: false,
      icon: "$Cog",
      children: [
        {
          name: "باشگاه مشتریان",
          url: "/shop/customersClub",
          open: false,
          icon: "$Star",
        },
        {
          name: "تغییر رمز عبور",
          url: "/shop/changePassword",
          open: false,
          icon: "$Key",
        },
      ],
    },
  ],
  sales: [
    {
      name: "فروش جدید",
      url: "/sales/newInvoice",
      open: false,
      icon: "$NewInvoice",
    },
    {
      name: "فاکتور فروش",
      url: "/sales/salesInvoices",
      open: false,
      icon: "$SalesInvoice",
    },
    {
      name: "تغییر رمزعبور",
      url: "/sales/changePassword",
      open: false,
      icon: "$Key",
    },
  ],
};
