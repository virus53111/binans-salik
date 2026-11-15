/* Murdilimax Swap bilingual interface. The externally hosted THORChain iframe
   controls its own language; this switch translates only our site. */
(function () {
  "use strict";

  const ru = {
    "Murdilimax — Cross-chain crypto swaps": "Murdilimax — обмен криптовалют",
    "Exchange": "Обмен",
    "Assets": "Валюты",
    "How it works": "Как это работает",
    "Security": "Безопасность",
    "Swap via THORChain": "Обмен через THORChain",
    "Crypto Swap Platform": "Обмен криптовалют",
    "Swap Crypto": "Обмен криптовалют",
    "Instantly.": "в пару шагов.",
    "One seamless way to move value across chains. No account to create. You stay in control of your crypto.": "Обменивайте криптовалюту между сетями без регистрации. Ваши средства остаются под вашим контролем.",
    "Explore Swap": "Начать обмен",
    "How it works": "Как это работает",
    "Official THORChain exchange widget · Connect your wallet when swapping": "Официальный виджет THORChain · Подключение кошелька при обмене",
    "You send": "Отдаёте",
    "Balance: —": "Баланс: —",
    "You receive": "Получаете",
    "Live quote available in the exchange": "Курс и итоговая сумма — в окне обмена",
    "Affiliate commission": "Партнёрская комиссия",
    "Swap crypto": "Обменять",
    "Your wallet signs swaps only inside the official THORChain widget. Review the transaction before approving.": "Кошелёк подтверждает операцию в официальном окне THORChain. Проверьте сумму и комиссии перед обменом.",
    "No Registration": "Без регистрации",
    "Explore crypto swaps without creating an account.": "Начните обмен без создания аккаунта.",
    "Non-Custodial": "Без хранения средств",
    "Your assets stay in your wallet until you authorize a swap.": "Криптовалюта остаётся в вашем кошельке до вашего подтверждения.",
    "Cross-Chain": "Разные сети",
    "A streamlined path to assets on different networks.": "Обменивайте активы между разными блокчейнами.",
    "Fast Experience": "Удобный обмен",
    "A smooth interface designed for a frictionless swap flow.": "Простой интерфейс для выбора валют и перехода к обмену.",
    "SUPPORTED ASSETS": "ДОСТУПНЫЕ АКТИВЫ",
    "Swap Across Leading Assets & Chains": "Обменивайте популярные криптовалюты",
    "Explore assets": "Выбрать валюту",
    "Asset availability depends on current THORChain and Maya routes. The official widget displays live quotes.": "Доступность валют зависит от текущих маршрутов THORChain и Maya. Актуальные котировки показывает официальный виджет.",
    "HOW IT WORKS": "КАК ЭТО РАБОТАЕТ",
    "Swap in 3 Simple Steps": "Обмен в 3 простых шага",
    "Choose Assets": "Выберите валюты",
    "Pick the crypto you want to send and receive.": "Укажите, какую криптовалюту отдаёте и какую хотите получить.",
    "Review the Quote": "Проверьте расчёт",
    "See the network fees and estimated received amount.": "Посмотрите курс, сетевые комиссии и итоговую сумму.",
    "Receive Crypto": "Получите криптовалюту",
    "Approved swaps settle directly to your destination wallet.": "После проведения обмена средства поступят на указанный кошелёк.",
    "Official swap widget": "Официальный виджет обмена",
    "Cross-chain": "Между сетями",
    "Native asset swaps": "Обмен нативных активов",
    "Your Wallet": "Ваш кошелёк",
    "Self-custody first": "Контроль над средствами",
    "Affiliate fee setting": "Партнёрская комиссия",
    "BUILT FOR THE NEXT MOVE": "СДЕЛАНО ДЛЯ ОБМЕНА",
    "The next chapter": "Криптообмен",
    "of crypto swapping.": "на ваших условиях.",
    "Elegant by design. Non-custodial by intention.": "Современный дизайн. Контроль над средствами — у вас.",
    "Swap through the official THORChain widget.": "Обмен — через официальный виджет THORChain.",
    "See the exchange": "Перейти к обмену",
    "Independent cross-chain swap interface powered by the official THORChain widget.": "Независимый интерфейс для обмена криптовалют с официальным виджетом THORChain.",
    "Product": "Сервис",
    "Information": "Информация",
    "Risk notice": "Предупреждение о рисках",
    "Help & information": "Помощь и информация",
    "Project": "Проект",
    "THORChain widget integration": "Интеграция с THORChain",
    "Murdilimax. All rights reserved.": "Murdilimax. Все права защищены.",
    "Murdilimax provides a non-custodial interface to an externally hosted THORChain swap widget. Quotes, wallet approval and execution are provided by the underlying service. Digital assets carry risk, and regulatory requirements may apply.": "Murdilimax предоставляет интерфейс к официальному виджету THORChain и не хранит средства пользователей. Курсы, подтверждение в кошельке и выполнение операций обеспечивает внешний сервис. Криптовалюты связаны с финансовыми рисками; могут действовать законодательные ограничения.",
    "INFORMATION": "ИНФОРМАЦИЯ",
    "About the exchange": "Об обмене",
    "This website links to the official THORChain swap widget. Wallet connection, quotes and transaction confirmation take place in that widget. Murdilimax never asks for a seed phrase.": "Этот сайт открывает официальный виджет THORChain. Подключение кошелька, котировки и подтверждение операций происходят внутри виджета. Murdilimax никогда не просит секретную фразу.",
    "Understood": "Понятно",
    "Bitcoin": "Биткоин",
    "Ethereum": "Эфириум",
    "Tether": "Тезер",
    "BNB Chain": "Сеть BNB",
    "Solana": "Солана",
    "USD Coin": "USD Coin"
  };

  const ruAttributes = {
    "Language": "Язык",
    "Main navigation": "Основная навигация",
    "Murdilimax home": "Главная Murdilimax",
    "Open menu": "Открыть меню",
    "Crypto exchange": "Обмен криптовалют",
    "Amount to send": "Сумма к обмену",
    "Send currency": "Валюта отправки",
    "Receive currency": "Валюта получения",
    "Reverse asset direction": "Поменять валюты местами",
    "Amount received": "Сумма к получению",
    "Platform advantages": "Преимущества сервиса",
    "30 basis points configured in THORChain affiliate dashboard. The official widget calculates and displays final quotes and fees.": "Комиссия 30 базисных пунктов настроена в партнёрском кабинете THORChain. Итоговые суммы и комиссии рассчитывает официальный виджет.",
    "Quote details are shown in the official THORChain widget": "Котировки отображаются в официальном виджете THORChain.",
    "Close dialog": "Закрыть окно"
  };

  const originalNodes = new WeakMap();
  const originalAttrs = new WeakMap();
  const supportedAttrs = ["aria-label", "title", "placeholder"];
  const controls = {ru:document.getElementById("lang-ru"),en:document.getElementById("lang-en")};

  function changeLanguage(lang) {
    document.documentElement.lang = lang;
    document.title = lang === "ru" ? "Murdilimax — обмен криптовалют" : "Murdilimax — Cross-chain crypto swaps";
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      lang === "ru"
        ? "Murdilimax Swap — обмен криптовалют через официальный виджет THORChain с подключением кошелька."
        : "Murdilimax Swap — a non-custodial crypto swap interface powered by the official THORChain widget."
    );

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const parent = node.parentElement;
      if (!parent || parent.closest("script,style,noscript,svg,select,option,#murdilimax-widget-overlay")) continue;
      if (!originalNodes.has(node)) originalNodes.set(node, node.nodeValue);
      const original = originalNodes.get(node);
      const key = original.trim().replace(/\s+/g, " ");
      const translated = lang === "ru" ? ru[key] : undefined;
      node.nodeValue = translated === undefined ? original :
        original.replace(/\S[\s\S]*\S|\S/, translated);
    }

    document.querySelectorAll("[aria-label],[title],[placeholder]").forEach(el => {
      if (el.closest("#murdilimax-widget-overlay")) return;
      if (!originalAttrs.has(el)) {
        const attrs = {};
        supportedAttrs.forEach(attr => { if (el.hasAttribute(attr)) attrs[attr] = el.getAttribute(attr); });
        originalAttrs.set(el, attrs);
      }
      const originals = originalAttrs.get(el);
      supportedAttrs.forEach(attr => {
        if (Object.prototype.hasOwnProperty.call(originals, attr)) {
          el.setAttribute(attr, lang === "ru" ? (ruAttributes[originals[attr]] || originals[attr]) : originals[attr]);
        }
      });
    });
    for (const code of ["ru","en"]) {
      if (controls[code]) controls[code].setAttribute("aria-pressed", String(code===lang));
    }
    try { window.localStorage.setItem("murdilimax_swap_language",lang); } catch (_) {}
    window.MURDILIMAX_LANGUAGE = lang;
  }

  function init() {
    for (const lang of ["ru","en"]) controls[lang]?.addEventListener("click",()=>changeLanguage(lang));
    let stored="ru";
    try {
      const value=window.localStorage.getItem("murdilimax_swap_language");
      if (value==="ru" || value==="en") stored=value;
    } catch (_) {}
    changeLanguage(stored);
  }
  if (document.readyState==="loading") document.addEventListener("DOMContentLoaded",init,{once:true});
  else init();
})();