# Portfolio Ary Aragão - Motion Designer

Landing page moderna e animada para motion designer, desenvolvida com React, Vite e Framer Motion.

## 🚀 Características

- ⚡ Build rápido com Vite
- 🎨 Animações suaves com Framer Motion
- 🎯 Totalmente parametrizado via arquivo de configuração
- 📱 Design responsivo
- 🎭 Fontes customizadas (Clash Display e Satoshi)
- 🎬 Otimizado para showcases de motion design

## 📦 Instalação

```bash
npm install
```

## 🏃 Execução

### Modo desenvolvimento
```bash
npm run dev
```

### Build para produção
```bash
npm run build
```

### Preview da build
```bash
npm run preview
```

## ⚙️ Configuração

Todas as configurações do site estão centralizadas no arquivo `src/config/site.config.js`.

### Personalize:

#### 1. Informações Pessoais
```javascript
personal: {
  name: "Seu Nome",
  title: "Seu Título",
  email: "seu@email.com",
  profileImage: "/profile.jpg",
}
```

#### 2. Redes Sociais
```javascript
socialLinks: {
  instagram: "https://instagram.com/seu-usuario",
  facebook: "https://facebook.com/seu-usuario",
  twitter: "https://twitter.com/seu-usuario",
  linkedin: "https://linkedin.com/in/seu-usuario",
}
```

#### 3. Cores
```javascript
colors: {
  creamyWhite: "#FAF5EA",
  deepOrange: "#FF2E63",
  // ... outras cores
}
```

#### 4. Tipografia
Todas as definições de fonte estão parametrizadas:
- Headings (H1-H4) com versões small
- Body (Body1, Body2)
- Paragraphs (L e S)
- Navegação

#### 5. Conteúdo
Edite os textos e projetos do portfólio diretamente no config:
```javascript
content: {
  hero: { ... },
  about: { ... },
  portfolio: {
    projects: [ ... ]
  },
  contact: { ... }
}
```

## 🎨 Estrutura de Cores

- **Creamy White** (#FAF5EA) - Headings e elementos principais
- **Deep Orange** (#FF2E63) - Seção de contato e destaques
- **White** (#FFFFFF) - Textos e navegação
- **Gray** (#BABABA) - Textos secundários

## 🔤 Tipografia

### Fontes
- **Clash Display** - Headings, Body e Navegação
- **Satoshi** - Parágrafos

### Escala
- H1: 96px (Small: 64px)
- H2: 72px (Small: 48px)
- H3: 56px (Small: 36px)
- H4: 32px
- Body1: 40px
- Body2: 22px
- Paragraph L: 20px
- Paragraph S: 16px

## 📁 Estrutura do Projeto

```
portfolio-ari/
├── public/
│   ├── profile.jpg          # Sua foto de perfil
│   ├── project1.jpg         # Imagens dos projetos
│   └── ...
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Barra de navegação
│   │   ├── Hero.jsx         # Seção principal
│   │   ├── About.jsx        # Sobre você
│   │   ├── Portfolio.jsx    # Grid de projetos
│   │   ├── Contact.jsx      # Seção de contato (Deep Orange)
│   │   └── Footer.jsx       # Rodapé
│   ├── config/
│   │   └── site.config.js   # ⚙️ CONFIGURAÇÃO CENTRAL
│   ├── App.jsx              # Componente principal
│   ├── main.jsx             # Entry point
│   └── index.css            # Estilos globais
├── package.json
├── vite.config.js
└── README.md
```

## 🎬 Animações

O site utiliza Framer Motion para criar animações suaves:
- **Hero**: Animação de entrada com escala e rotação
- **Scroll Progress**: Animações baseadas no scroll
- **Hover Effects**: Efeitos interativos nos cards e links
- **Fade In/Out**: Transições suaves entre seções

## 📝 Próximos Passos

1. Adicione suas imagens na pasta `public/`
2. Configure suas informações em `src/config/site.config.js`
3. Personalize os projetos do portfólio
4. Atualize os links das redes sociais
5. Customize cores e tipografia conforme necessário

## 🌐 Deploy

Você pode fazer deploy facilmente em:
- Vercel
- Netlify
- GitHub Pages

Basta conectar seu repositório e a build será automática!

---

Desenvolvido com ❤️ para motion designers

