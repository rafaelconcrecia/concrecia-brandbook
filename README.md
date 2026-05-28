# CONCRECIA — Brand Book

Documento oficial de identidade visual da **CONCRECIA**, concreteira sediada em Ribeirão Preto · SP, em operação desde 2009.

Versão: **1.0** · Maio 2026

---

## Como visualizar

Este brandbook é um documento HTML estático — não requer build, dependências ou servidor. Há três formas de abrir:

### 1. Localmente (mais simples)
Clique duas vezes em `index.html`. O documento abre em qualquer navegador moderno (Chrome, Firefox, Safari, Edge).

### 2. Servido localmente (recomendado para desenvolvimento)
```bash
# Python 3
python -m http.server 8080
# Node (npx)
npx serve .
```
Depois abra `http://localhost:8080`.

### 3. GitHub Pages (publicação institucional)
1. Crie um repositório no GitHub (ex: `concrecia-brandbook`)
2. Suba os arquivos: `git push origin main`
3. Em **Settings → Pages**, selecione branch `main`, pasta `/` (root)
4. Acesse: `https://[usuario].github.io/concrecia-brandbook`

---

## Estrutura

```
concrecia-brandbook/
├── index.html              # Documento principal (10 seções)
├── styles/
│   ├── tokens.css          # Design tokens: cores, tipografia, espaçamento
│   ├── main.css            # Layout, componentes, scroll-spy
│   └── print.css           # Otimização para export PDF
├── scripts/
│   └── nav.js              # Navegação flutuante (IntersectionObserver)
├── assets/
│   ├── logo.svg            # Logo completo (símbolo + wordmark)
│   ├── logo-mark.svg       # Símbolo isolado (3 Cs)
│   └── mockups/
│       ├── truck.svg       # Caminhão betoneira
│       ├── card.svg        # Cartão de visita (frente/verso)
│       ├── uniform.svg     # Uniforme + capacete
│       ├── facade.svg      # Fachada institucional
│       ├── signature.svg   # Assinatura de email
│       └── social.svg      # Templates redes sociais
└── README.md
```

---

## Seções do documento

| # | Seção | Conteúdo |
|---|-------|----------|
| **Capa** | Hero | Logo, edição, metadados institucionais |
| **01** | Introdução | Posicionamento, stats operacionais, propósito |
| **02** | Conceito | Essência, arquétipo (O Construtor), valores |
| **03** | Logo | Símbolo, versões, área de proteção, usos incorretos |
| **04** | Paleta | Cores primárias, apoio, neutros, especificações (HEX/RGB/CMYK/Pantone) |
| **05** | Tipografia | Manrope + Inter + JetBrains Mono · escala completa |
| **06** | Elementos | Padrões gráficos · regras de composição · aplicação por canal |
| **07** | Fotografia | Direção de imagem · iluminação · enquadramento · tratamento |
| **08** | Aplicações | Caminhão, cartão, uniforme, fachada, email, social, orçamento |
| **09** | Comunicação | Voz da marca · faça/evite · exemplos por contexto · eixos de tom |
| **10** | Encerramento | Síntese institucional · créditos |

---

## Exportar para PDF

1. Abra o documento no Chrome ou Edge
2. `Ctrl/⌘ + P`
3. **Destino:** Salvar como PDF
4. **Margens:** Padrão
5. **Mais configurações → Gráficos de fundo:** ATIVADO ⚠️
6. **Tamanho do papel:** A4
7. Salve

O `print.css` já está configurado para otimizar quebras de página, esconder navegação flutuante e ajustar tipografia para impressão.

---

## Sistema de design

### Cores
| Token | HEX | Uso |
|-------|-----|-----|
| Concrecia Navy | `#0A1F5C` | Primária institucional |
| Concrecia Yellow | `#F5C518` | Primária operacional |
| Deep | `#050F2E` | Fundos escuros |
| Bone | `#F4F2ED` | Fundos claros |

### Tipografia
- **Display:** Manrope (200-800) — Google Fonts
- **Body:** Inter (300-700) — Google Fonts
- **Mono:** JetBrains Mono (400-700) — Google Fonts

Todas livres, sem necessidade de licenciamento.

---

## Personalização

Toda a paleta e tipografia estão centralizadas em `styles/tokens.css` (CSS Custom Properties). Para ajustes globais, edite apenas esse arquivo — as mudanças propagam para todo o documento.

Exemplo, para ajustar o azul primário:
```css
:root {
  --c-navy-900: #0A1F5C;  /* alterar aqui */
}
```

---

## Substituição do logo

O logo atual foi recriado vetorialmente a partir do logo do site institucional. Para substituir pela versão oficial (caso haja arquivo vetorial original):

1. Substitua `assets/logo.svg` pelo SVG oficial mantendo o `viewBox` proporcional
2. Atualize os SVGs inline em `index.html` nas seguintes seções:
   - Capa (linha do header `.hero__brand`)
   - 03 Logo (todas as variações)
   - 10 Encerramento (`.closing__mark`)
   - Mockups em `assets/mockups/*.svg`

---

## Versionamento

Para iniciar o controle de versão via Git:

```bash
git init
git add .
git commit -m "Initial brandbook v1.0"
git branch -M main
git remote add origin https://github.com/[usuario]/concrecia-brandbook.git
git push -u origin main
```

---

## Suporte

Documento mantido pela equipe CONCRECIA.
Contato: `contato@concrecia.com.br`

---

**© CONCRECIA · 2026.** Construindo confiança desde 2009.
