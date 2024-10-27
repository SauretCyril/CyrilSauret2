
  function fetchQuote() {
    const quotes = ["Il y a 10 types de personnes dans le monde : ceux qui comprennent le binaire et ceux qui ne le comprennent pas.", "Un programmeur est une machine qui transforme le café en code.", "Je ne suis pas antisocial, je suis juste en mode débogage.", "Pourquoi les programmeurs préfèrent-ils la nuit ? Parce que le temps de compilation est plus court.", "Le code, c'est comme l'humour. Quand on doit l'expliquer, c'est mauvais."];
    const quoteContent = document.getElementById('quote-content');
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteContent.textContent = randomQuote;
}
    fetchQuote();
    setInterval(fetchQuote, 10000);
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        const headerLogo = document.getElementById('header-logo');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
            headerLogo.style.filter = 'brightness(1.2)';
        } else {
            header.classList.remove('scrolled');
            headerLogo.style.filter = 'none';
        }
    });