// Configuração central do site
interface SiteConfig {
  personal: {
    name: string;
    fullName: string;
    title: string;
    email: string;
    profileImage: string;
  };
  socialLinks: {
    instagram: string;
    facebook: string;
    twitter: string;
    linkedin: string;
  };
  colors: {
    creamyWhite: string;
    deepOrange: string;
    white: string;
    black: string;
    gray: string;
    mattBlack: string;
    background: {
      primary: string;
      secondary: string;
      contact: string;
    };
  };
  typography: {
    fonts: {
      primary: string;
      secondary: string;
    };
    headings: {
      h1: {
        fontSize: string;
        fontWeight: number;
        lineHeight: string;
        letterSpacing: string;
        color: string;
        fontFamily: string;
      };
      h1Small: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
        color: string;
        fontFamily: string;
      };
      h2: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
        color: string;
        fontFamily: string;
      };
      h2Small: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
        color: string;
        fontFamily: string;
      };
      h3: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
        color: string;
        fontFamily: string;
      };
      h3Small: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
        color: string;
        fontFamily: string;
      };
      h4: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
        color: string;
        fontFamily: string;
      };
    };
    body: {
      body1: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
        fontFamily: string;
      };
      body2: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
        fontFamily: string;
      };
    };
    paragraphs: {
      paragraphL: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
        color: string;
        fontFamily: string;
      };
      paragraphS: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
        color: string;
        fontFamily: string;
      };
    };
    navigation: {
      navMenu: {
        fontSize: string;
        fontWeight: number;
        color: string;
        fontFamily: string;
      };
      footerNav: {
        fontSize: string;
        fontWeight: number;
        color: string;
        fontFamily: string;
      };
      footerNavDark: {
        fontSize: string;
        fontWeight: number;
        color: string;
        fontFamily: string;
      };
      footerText: {
        fontSize: string;
        fontWeight: number;
        color: string;
        fontFamily: string;
      };
      footerTextXXL: {
        fontSize: string;
        fontWeight: number;
        fontStyle: string;
        color: string;
        fontFamily: string;
        minWidth: string;
      };
    };
  };
  content: {
    hero: {
      title: string;
      subtitle: string;
    };
    about: {
      title: string;
      description: string;
    };
    portfolio: {
      title: string;
      projects: Array<{
        id: number;
        title: string;
        description: string;
        image: string;
        videoUrl: string;
      }>;
    };
    contact: {
      title: string;
      subtitle: string;
    };
  };
}

export const siteConfig: SiteConfig = {
  // Informações pessoais
  personal: {
    name: "Ary Aragão",
    fullName: "Aryell Aragão",
    title: "Motion Designer",
    email: "ary@aragaogfx.com",
    profileImage: "/profile.jpg", // Adicione sua imagem na pasta public
  },

  // Links de redes sociais
  socialLinks: {
    instagram: "https://instagram.com/seu-usuario",
    facebook: "https://facebook.com/seu-usuario",
    twitter: "https://twitter.com/seu-usuario",
    linkedin: "https://linkedin.com/in/seu-usuario",
  },

    // Cores
    colors: {
      // Cores principais
      creamyWhite: "#FAF5EA",
      deepOrange: "#FF2E63",
      white: "#FFFFFF",
      black: "#000000",
      gray: "#BABABA",
      mattBlack: "#1A1A1A",
      
      // Cores de fundo
      background: {
        primary: "#0A0A0A",
        secondary: "#1A1A1A",
        contact: "#FF2E63",
      },
    },

  // Tipografia
  typography: {
    fonts: {
      primary: "'Clash Display', sans-serif",
      secondary: "'Satoshi', sans-serif",
    },

    // Headings - Clash Display, Creamy White
    headings: {
      h1: {
        fontSize: "657px",
        fontWeight: 200,
        lineHeight: "80%",
        letterSpacing: "-0.06em",
        color: "#FAF5EA",
        fontFamily: "'Clash Display', sans-serif",
      },
      h1Small: {
        fontSize: "64px",
        fontWeight: 700,
        lineHeight: 1.2,
        color: "#FAF5EA",
        fontFamily: "'Clash Display', sans-serif",
      },
      h2: {
        fontSize: "72px",
        fontWeight: 600,
        lineHeight: 1.1,
        color: "#FAF5EA",
        fontFamily: "'Clash Display', sans-serif",
      },
      h2Small: {
        fontSize: "48px",
        fontWeight: 600,
        lineHeight: 1.2,
        color: "#FAF5EA",
        fontFamily: "'Clash Display', sans-serif",
      },
      h3: {
        fontSize: "56px",
        fontWeight: 600,
        lineHeight: 1.2,
        color: "#FAF5EA",
        fontFamily: "'Clash Display', sans-serif",
      },
      h3Small: {
        fontSize: "36px",
        fontWeight: 600,
        lineHeight: 1.2,
        color: "#FAF5EA",
        fontFamily: "'Clash Display', sans-serif",
      },
      h4: {
        fontSize: "32px",
        fontWeight: 600,
        lineHeight: 1.3,
        color: "#FAF5EA",
        fontFamily: "'Clash Display', sans-serif",
      },
    },

    // Body - Clash Display
    body: {
      body1: {
        fontSize: "40px",
        fontWeight: 500,
        lineHeight: 1.4,
        fontFamily: "'Clash Display', sans-serif",
      },
      body2: {
        fontSize: "22px",
        fontWeight: 500,
        lineHeight: 1.5,
        fontFamily: "'Clash Display', sans-serif",
      },
    },

    // Paragraphs - Satoshi
    paragraphs: {
      paragraphL: {
        fontSize: "20px",
        fontWeight: 400,
        lineHeight: 1.6,
        color: "#FFFFFF",
        fontFamily: "'Satoshi', sans-serif",
      },
      paragraphS: {
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: 1.6,
        color: "#BABABA",
        fontFamily: "'Satoshi', sans-serif",
      },
    },

    // Navegação - Clash Display
    navigation: {
      navMenu: {
        fontSize: "18px",
        fontWeight: 500,
        color: "#FFFFFF",
        fontFamily: "'Clash Display', sans-serif",
      },
      footerNav: {
        fontSize: "16px",
        fontWeight: 500,
        color: "#FAF5EA",
        fontFamily: "'Clash Display', sans-serif",
      },
      footerNavDark: {
        fontSize: "16px",
        fontWeight: 500,
        color: "#1A1A1A",
        fontFamily: "'Clash Display', sans-serif",
      },
      footerText: {
        fontSize: "14px",
        fontWeight: 400,
        color: "#000000",
        fontFamily: "'Clash Display', sans-serif",
      },
      footerTextXXL: {
        fontSize: "240px",
        fontWeight: 700,
        fontStyle: "italic",
        color: "#FFFFFF",
        fontFamily: "'Clash Display', sans-serif",
        minWidth: "1200px",
      },
    },
  },

  // Conteúdo
  content: {
    hero: {
      title: "Motion Designer & Creative Director",
      subtitle: "Criando experiências visuais que contam histórias",
    },
    about: {
      title: "Sobre",
      description: "Com anos de experiência em motion design, transformo ideias em animações memoráveis que conectam marcas e pessoas.",
    },
    portfolio: {
      title: "Portfólio",
      projects: [
        {
          id: 1,
          title: "Projeto 1",
          description: "Descrição do projeto",
          image: "/project1.jpg",
          videoUrl: "https://youtube.com/...",
        },
        {
          id: 2,
          title: "Projeto 2",
          description: "Descrição do projeto",
          image: "/project2.jpg",
          videoUrl: "https://youtube.com/...",
        },
        {
          id: 3,
          title: "Projeto 3",
          description: "Descrição do projeto",
          image: "/project3.jpg",
          videoUrl: "https://youtube.com/...",
        },
      ],
    },
    contact: {
      title: "Vamos trabalhar juntos?",
      subtitle: "Entre em contato para discutir seu próximo projeto",
    },
  },
};

