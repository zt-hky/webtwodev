export default {
  items: [
    {
      name: 'Thống kê',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      name: 'Cụm rạp',
      url: '/Theaters',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Star Bình Thạnh',
          url: '/Theaters/Theaters_Detail',
          icon: 'icon-puzzle',
        
        },
        {
          name: 'Star Bình Tân',
          url: '/Theaters/Theaters_Detail',
          icon: 'icon-puzzle',
     
        },
        {
          name: 'Star Quận 1',
          url: '/Theaters/Theaters_Detail',
          icon: 'icon-puzzle',
       
        },
        {
          name: 'Star Quận 2',
          url: '/Theaters/Theaters_Detail',
          icon: 'icon-puzzle',
          
        },
       
        {
          name: 'Thêm Cụm Rạp',
          url: '/Theaters/Theaters_Form',
          icon: 'icon-puzzle',
        },
       
      ],
    },
    {
      name: 'Film',
      url: '/Film',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Hành Động',
          url: '/Film/Films',
          icon: 'icon-cursor',
        },
        {
          name: 'Hoạt Hình',
          url: '/Film/Films',
          icon: 'icon-cursor',
        },
        {
          name: 'Kinh dị',
          url: '/Film/Films',
          icon: 'icon-cursor',
        },
        {
          name: 'Kiếm Hiệp',
          url: '/Film/Films',
          icon: 'icon-cursor',
        },
        {
          name: 'Thêm thể loại',
          url: '/Film/Film_Type',
          icon: 'icon-cursor',
        },
      ],
    },
    {
      name: 'Combo',
      url: '/Combo',
      icon: 'icon-cursor',
      children: [
       
       
        {
          name: 'Combo hiện có',
          url: '/Combo/Current',
          icon: 'icon-cursor',
        },
        {
          name: 'Combo hết hạn',
          url: '/Combo/Expired',
          icon: 'icon-cursor',
        },
        {
          name: 'Thêm combo',
          url: '/Combo/Combo_Form',
          icon: 'icon-cursor',
        },
      ],
    },
    {
      name: 'Biểu đồ',
      url: '/charts',
      icon: 'icon-pie-chart',
    },
  
   
    
    {
      divider: true,
    },
    {
      title: true,
      name: 'Extras',
    },
    {
      name: 'Pages',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/login',
          icon: 'icon-star',
        },
        {
          name: 'Register',
          url: '/register',
          icon: 'icon-star',
        },
        {
          name: 'Error 404',
          url: '/404',
          icon: 'icon-star',
        },
        {
          name: 'Error 500',
          url: '/500',
          icon: 'icon-star',
        },
      ],
    },
   
   
  ],
};
