// tailwind.config.js
module.exports = {
  darkMode: 'class', // active le mode sombre via la classe "dark"
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
        secondary: 'hsl(var(--secondary))',
        'secondary-foreground': 'hsl(var(--secondary-foreground))',
        // tu peux ajouter toutes tes variables ici
      },
    },
  },
};
