import { NavLink, FeatureCardProps, PillarProps, TestimonialProps, FAQItemProps } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Como funciona', href: '#features-section' },
  { name: 'Depoimentos', href: '#testimonials-section' },
  { name: 'O Que Você Vai Receber', href: '#features-section' },
  { name: 'Quem Já Testou', href: '#testimonials-section' },
  { name: 'FAQ', href: '#faq-section' },
  { name: 'Pague Se Gostar', href: '#why-choose-section' },
];

export const FEATURES_DATA: FeatureCardProps[] = [
  {
    title: 'Doces que vendem muito na Páscoa',
    description: 'Receitas irresistíveis com chocolate, leite condensado e ingredientes acessíveis.',
    isMain: true,
  },
  {
    title: 'Tudo sem usar fogão ou forno',
    description: 'Mais segurança, menos energia, sem precisar saber cozinhar.',
    icon: '🔥', // Fire emoji for "no fire"
  },
  {
    title: 'Receitas prontas em minutos',
    description: 'Ideal para quem quer fazer e vender no mesmo dia.',
    icon: '⏱️', // Clock emoji
  },
  {
    title: 'Visual atrativo para vender',
    description: 'Doces lindos que chamam atenção com fotos caseiras.',
    icon: '✨', // Sparkles emoji
  },
  {
    title: 'PDF ilustrado e com passo a passo',
    description: 'Linguagem direta e amigável, ideal para qualquer nível de experiência.',
    icon: '📖', // Open book emoji
  },
  {
    title: 'Acesso rápido via WhatsApp',
    description: 'Receba agora e comece a fazer ainda hoje.',
    icon: '📱', // Mobile phone emoji
  },
];

export const WHY_CHOOSE_DATA: PillarProps[] = [
  {
    title: 'Perfeito para ganhar dinheiro na Páscoa',
    description: 'As receitas são pensadas para gerar lucro com pouco investimento.',
    icon: '💰',
  },
  {
    title: 'Você testa antes, paga depois (se quiser!)',
    description: 'Transparência total. Receba o conteúdo e só depois decida pagar.',
    icon: '🤝',
  },
  {
    title: 'Feito com carinho para mulheres que amam adoçar a vida',
    description: 'Escrita leve, acolhedora e pensada para você.',
    icon: '💖',
  },
  {
    title: 'Você pode começar com o que tem em casa',
    description: 'Nada de utensílios caros ou ingredientes difíceis.',
    icon: '🏡',
  },
];

export const TESTIMONIALS_DATA: TestimonialProps[] = [
  {
    avatar: 'https://picsum.photos/80/80?random=1',
    rating: 5,
    quote: 'Fiz os bombons da apostila e vendi tudo no grupo da igreja! Já até pedi mais receitas!',
    author: 'Ana Cláudia',
    location: 'Belo Horizonte/MG',
  },
  {
    avatar: 'https://picsum.photos/80/80?random=2',
    rating: 5,
    quote: 'Sou aposentada e nunca pensei em vender, mas depois que fiz os doces sem fogo comecei a ganhar um dinheirinho extra.',
    author: 'Terezinha Lopes',
    location: 'São Paulo/SP',
  },
  {
    avatar: 'https://picsum.photos/80/80?random=3',
    rating: 5,
    quote: 'Receitas simples e lindas! Fiz com minha filha de 9 anos e ela adorou ajudar.',
    author: 'Maria Eduarda',
    location: 'Curitiba/PR',
  },
];

export const FAQ_DATA: FAQItemProps[] = [
  {
    question: 'Como recebo as receitas?',
    answer: 'Você receberá o PDF diretamente pelo WhatsApp, assim que clicar no botão da página.',
  },
  {
    question: 'Preciso pagar antes para receber?',
    answer: 'Não! Você recebe primeiro. Só depois, se gostar, pode pagar o valor simbólico de R$ 14,75 via Pix.',
  },
  {
    question: 'Tem receitas de Páscoa?',
    answer: 'Sim! Você encontrará opções perfeitas para vender e lucrar nessa época — com chocolate e muito sabor!',
  },
  {
    question: 'Preciso saber cozinhar?',
    answer: 'De jeito nenhum! As receitas são simples, não usam fogão nem forno, e foram feitas para qualquer pessoa conseguir.',
  },
  {
    question: 'Quais ingredientes eu preciso?',
    answer: 'Usamos ingredientes fáceis de achar, como leite condensado, chocolate, coco ralado, biscoito, etc. Coisas que você já deve ter em casa!',
  },
  {
    question: 'Posso vender essas receitas?',
    answer: 'Claro! Essa é a ideia: receitas pensadas para vender no WhatsApp, na igreja, escola ou até entre vizinhas.',
  },
];