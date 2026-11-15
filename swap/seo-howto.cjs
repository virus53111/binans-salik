// Practical, distinct how-to subjects; no wallet or network function is emulated here.
module.exports=[
{
slug:'swap-crypto-without-exchange-account',category:'howto',
sources:[
['THORChain — official swap interface','https://swap.thorchain.org/'],
['THORChain — official walletless swap instructions (August 2026)','https://blog.thorchain.org/how-to-walletless-swaps'],
['THORChain — how to use THORChain','https://docs.thorchain.org/how-to-use-thorchain']],
en:{
title:'Swap Crypto Without an Exchange Account: What to Check',
h1:'How to swap cryptocurrency without opening an exchange account',
description:'Learn how non-custodial crypto swaps differ from exchange accounts, when walletless routes may exist and what to verify before sending funds.',
lead:'You can sometimes move value between supported blockchains without creating a traditional custodial exchange account. That convenience does not remove the need to understand the counterparty, route, fees and wallet destination.',
sections:[
['No exchange account is not the same as no verification anywhere','An account-based exchange may maintain balances and require identity verification under its rules. A non-custodial protocol route normally asks you to authorize a blockchain transaction from your wallet instead of opening a custodial account. But third-party interfaces can have their own restrictions, sanctions screening, regional limitations or additional checks. Do not interpret “no account on this website” as a universal guarantee of anonymity or unrestricted service.'],
['Choose between connected-wallet and provider deposit flows','With a connected wallet, the interface prepares a transaction and your wallet displays the approval request. The official THORChain site also documents a walletless mode for some starting assets: the provider supplies deposit instructions and an intended receiving address. Those flows are different. Do not assume Murdilimax’s embedded widget includes every feature of the official site; always look at what the actual widget offers before making a payment.'],
['Verify exactly which network carries the money','Bitcoin, native ETH and tokens such as USDC on Ethereum need different on-chain handling. Choose the asset and the network together. A common mistake is sending a token on a cheaper network to a destination that expects Ethereum mainnet, simply because both versions have the same ticker. Read any contract or token label from a trusted source and check the destination address before confirming.'],
['Follow the quote, not a screenshot or saved deposit address','The quote should display an estimated output and identify the exchange route, fees and current constraints. If the provider uses manual deposit instructions, generate them for the present transaction, follow its exact amount and expiry and do not send to an address from a previous swap. THORChain’s developer guidance warns against caching inbound addresses. Saving a screenshot of a rate is not the same as securing a live executable price.'],
['Keep enough evidence for support without sharing secrets','Save the transaction hash, the chain, source asset, intended destination and approximate time. Do not post a seed phrase, private key, authenticator code or full personal account details in a public support forum. Use only official support routes for the underlying provider. Transactions are publicly traceable on many chains; not needing a custodial exchange account does not make you invisible to the blockchain.']
],
checks:['Select the exact starting asset and blockchain.','Confirm whether the flow actually offers wallet connection or a deposit instruction.','Review the quote, payout chain and fees before authorization.','Retain the transaction ID, never the seed phrase in a support ticket.'],
faq:[['Is this automatically anonymous?','No. Public transactions can be tracked, and third-party compliance or access rules may still apply.'],['Does Murdilimax hold my coins?','The current Murdilimax interface links to an externally hosted widget; it does not provide a custodial balance on the site.']]
},
ru:{
title:'Обмен криптовалюты без аккаунта биржи: как это устроено',
h1:'Как обменивать криптовалюту без регистрации на бирже',
description:'Некастодиальный обмен без аккаунта биржи: подключение кошелька, варианты без подключения, сети, комиссии и важные проверки перед отправкой.',
lead:'Обмен между блокчейнами иногда возможен без открытия счёта на централизованной бирже. Но отсутствие аккаунта не отменяет проверки адресов, маршрута, комиссий и ограничений поставщика.',
sections:[
['Без регистрации не означает без каких-либо проверок','Централизованная биржа может вести внутренний баланс и требовать установления личности. Некастодиальный маршрут обычно предлагает отправить транзакцию из своего кошелька, а не заводить отдельный биржевой счёт. Но внешний интерфейс может применять ограничения, проверки адресов или требования своей юрисдикции. Фраза «без регистрации на сайте» не даёт гарантии анонимности и отсутствия каких-либо условий.'],
['Подключение кошелька и обмен без подключения — разные режимы','При подключённом кошельке он показывает подготовленную транзакцию для подтверждения. Официальный THORChain также описывает режим, когда пользователь сам отправляет деньги по выданной инструкции и указывает адрес получения. Это разные способы работы. Не следует предполагать, что встроенный виджет Murdilimax поддерживает абсолютно все возможности официального сайта: проверяйте реальные функции окна обмена перед отправкой.'],
['Сеть важна не меньше названия монеты','Нативный Bitcoin, ETH и USDC в Ethereum обрабатываются по-разному. Указывайте блокчейн вместе с тикером. Ошибка — отправить токен в другой сети только потому, что он называется так же, как нужный. Проверяйте точное обозначение актива и адрес назначения, а при сомнениях ищите описание сети в документации поставщика и своего кошелька.'],
['Ориентируйтесь на свежую котировку','Поставщик рассчитывает ожидаемую сумму, комиссию и текущие ограничения. При варианте с ручной отправкой он может выдать специальный адрес, точную сумму и срок действия инструкции. Не пользуйтесь реквизитами прошлой сделки. Разработчики THORChain предупреждают, что устаревший адрес для входящего перевода опасен. Снимок экрана со старым курсом не означает действительную цену сегодня.'],
['Что сохранить на случай задержки','Запишите хеш транзакции, исходную сеть, актив, выбранный адрес и время операции. Для обращения в официальную поддержку эти данные полезнее, чем скриншот рекламного баннера. Никогда не присылайте seed-фразу, приватный ключ или коды подтверждения. Операции в публичных блокчейнах отслеживаемы: отсутствие биржевого аккаунта не делает транзакции невидимыми.']
],
checks:['Выбраны точные актив и сеть отправки.','Понятно, требуется ли кошелёк или ручная отправка.','Проверены реальная котировка, комиссии и адрес получения.','Хеш операции сохранён, секретные данные не раскрываются.'],
faq:[['Значит ли это полную анонимность?','Нет. Публичные блокчейны позволяют отслеживать транзакции, а у внешних поставщиков могут быть проверки.'],['Murdilimax хранит баланс пользователей?','Нет, существующая версия сайта предоставляет доступ к внешнему виджету, а не личный счёт для хранения монет.']]
}
},
{
slug:'how-to-read-crypto-swap-quote',category:'howto',
sources:[
['THORChain — network, liquidity and affiliate fees','https://dev.thorchain.org/swap-guide/fees-and-wait-times.html'],
['THORChain — developer quote output example','https://swap.thorchain.org/developers/quickstart'],
['THORChain — affiliate fee specification','https://thorchain.gitlab.io/thornode/affiliate-guide/affiliate-fee-guide.html']],
en:{
title:'How to Read a Crypto Swap Quote: Fees, Output and Slippage',
h1:'How to read a crypto swap quote before signing',
description:'Understand estimated crypto output, slippage, network and affiliate fees, minimum amounts and quote expiry before approving a cross-chain swap.',
lead:'A swap quote is a working estimate under specific network and market conditions. Reading just the token price or a big “receive” number can hide the real costs and constraints.',
sections:[
['Start with the input and output networks','First verify what you send and what you receive, including the network label. BTC on Bitcoin is not WBTC on Ethereum; USDT on Ethereum is not automatically interchangeable with USDT on TRON. Look for the exact route supported by the provider right now. A correct quote for the wrong chain is still the wrong transaction for your wallet.'],
['Separate wallet-paid gas from deductions in the quote','For a source-chain transaction, your sending wallet usually pays gas or a miner fee. The provider may estimate an outbound network fee for delivering the target asset. Some routes also include a liquidity fee, price impact and a separate affiliate or integrator charge. Different interfaces group these under different labels, so compare total wallet debit against estimated net funds received rather than simply adding percentage badges.'],
['Slippage, price impact and minimum received','Price impact reflects how the trade affects available liquidity; slippage describes the possible difference between quoted and executed rates. A provider may show a minimum acceptable output or maximum slippage tolerance. Do not raise an unfamiliar tolerance merely to force a failing transaction. For larger orders, a streaming route may reduce price impact at the expense of additional processing time, but only if the current provider actually offers it.'],
['Why the suggested minimum matters','There may be a formal minimum swap amount, but the economic minimum is often higher. For example, a small transaction can lose too much value to relatively fixed network charges even if it is technically allowed. Compare percentage loss with your own threshold. The THORChain developer quote fields can include a recommended minimum amount because gas and other fees can dominate small trades.'],
['Check expiry and refund behavior before clicking','Quotes can become stale as fees, vault addresses and liquidity conditions change. If the provider requests a deposit, follow the current transaction instructions; do not reuse an old destination address. A failed or refunded transaction may still incur network and refund costs, so “refund possible” does not automatically mean “no loss.” Save the live quote details and the resulting transaction hash after authorization.']
],
checks:['Input and output chain labels match the wallets you control.','Review total wallet debit and net amount received.','Understand slippage limits and the economically sensible minimum.','Confirm quote expiry and what refunds may cost.'],
faq:[['Is quoted output guaranteed?','Not necessarily. Read the live provider’s minimum-output, limit and route rules.'],['Why are fees not always a single percentage?','Source and destination chains, liquidity and integrator charges have different cost drivers.']]
},
ru:{
title:'Как читать котировку криптообмена: курс, комиссии, проскальзывание',
h1:'Как правильно проверить котировку обмена криптовалют',
description:'Как понять расчёт обмена: итоговая сумма, сетевые сборы, партнёрская комиссия, проскальзывание, минимальный объём и срок действия котировки.',
lead:'Котировка обмена — расчёт для текущих условий сети и рынка. Смотреть только на крупную цифру «получите» недостаточно: важно понять все списания и ограничения.',
sections:[
['Сначала проверьте сети обеих монет','Сверьте отправляемый актив, получаемый актив и их блокчейны. BTC в сети Bitcoin не равен WBTC в Ethereum; USDT на Ethereum не автоматически совместим с USDT на TRON. Котировка может быть технически правильной, но для другой сети, которая вам не подходит. Поэтому сначала выбирайте соответствующие кошельки и цепочки, а уже затем сравнивайте суммы.'],
['Разделяйте газ кошелька и сборы поставщика','За исходную транзакцию сеть может списывать газ или комиссию майнерам напрямую из кошелька. В котировке поставщик показывает либо учитывает вывод в целевой сети, комиссию ликвидности и возможное партнёрское вознаграждение интерфейса. Названия строк различаются, поэтому сравнивайте полный расход из кошелька с чистой суммой получения, а не складывайте вслепую проценты из рекламы.'],
['Проскальзывание и минимальный результат','Влияние сделки на цену связано с глубиной ликвидности. Проскальзывание означает возможное отклонение цены исполнения от расчёта. В некоторых интерфейсах есть предел допустимого отклонения или минимальная сумма получения. Не увеличивайте непонятный предел только ради того, чтобы заставить сделку пройти. Крупным обменам иногда доступны более долгие маршруты с дробным исполнением, но их наличие нужно проверять в конкретном виджете.'],
['Почему официальный минимум не равен выгодному минимуму','Сервис может технически принимать небольшой перевод, но фиксированные расходы сети способны поглотить заметную его часть. Оцените долю потерянной суммы и сравните со своим допустимым уровнем. THORChain в документации котировок описывает рекомендованный минимальный объём именно потому, что комиссии могут оказаться слишком большими для маленького обмена.'],
['Срок действия и возврат средств','Курс, адрес депозита и условия маршрута могут меняться. Если сервис показывает инструкцию для отправки, используйте именно свежую версию, а не старый адрес. При ошибке или возврате операция иногда всё равно расходует комиссии исходной сети и перевода назад. Поэтому «возможен возврат» не означает «потерь нет». Сохраняйте данные котировки и хеш реально отправленной транзакции.']
],
checks:['Проверены сеть отправки и сеть получения.','Понятны полный расход кошелька и чистая сумма получения.','Оценены проскальзывание и разумный минимальный объём.','Прочитаны срок действия инструкции и условия возврата.'],
faq:[['Сумма из котировки гарантирована?','Не всегда. Всё зависит от реальных условий маршрута и защиты минимальной суммы.'],['Почему нет одного фиксированного процента комиссии?','Расходы разных сетей, ликвидности и интерфейса рассчитываются по-разному.']]
}
},
{
slug:'check-cross-chain-swap-status',category:'howto',
sources:[
['THORChain — confirmation and outbound delay phases','https://dev.thorchain.org/concepts/delays.html'],
['THORChain — network transaction tracking','https://dev.thorchain.org/concepts/connecting-to-thorchain.html'],
['Bitcoin — public transaction verification','https://bitcoin.org/en/faq']],
en:{
title:'How to Track a Cross-Chain Crypto Swap Step by Step',
h1:'How to check the status of a cross-chain swap',
description:'Crypto swap pending? Learn how to find a transaction hash, distinguish source confirmation from destination payout and check the provider’s tracker.',
lead:'“Sent” and “received” are not the same event in a cross-chain swap. Tracking the separate stages helps you tell normal waiting from an actionable problem.',
sections:[
['Find the source transaction ID first','After you authorize the swap, your wallet should show a transaction hash or Bitcoin TXID on the source blockchain. Record it, along with the asset, source network and approximate time. Avoid sharing your seed phrase or signing secret with anyone. If there is no hash yet, confirm whether the wallet actually broadcast the transaction; a signed-but-not-sent request is not proof that the transfer has reached the network.'],
['Check source-chain confirmation','Open the source chain’s recognized block explorer or a transaction view from your wallet. Look at whether the transaction is pending, failed or confirmed. On Bitcoin, confirm that the payment is on the correct network and has a growing confirmation count. On Ethereum, examine whether the transaction succeeded and note any gas paid. A source-chain confirmation does not guarantee that the target payout has completed.'],
['Understand protocol observation and processing','THORChain documents multiple stages after a source transaction: observation by protocol nodes, required confirmation/finality, possible queueing, and eventual outbound settlement. A delay in one phase cannot always be solved by increasing your wallet’s original gas after the transaction is confirmed. Use the current provider status rather than assuming that two consecutive explorer pages should update simultaneously.'],
['Find the destination transaction when available','Once the provider has broadcast the destination payment, it should have its own transaction identifier on the target chain. That is the best evidence that the target network is processing the payout. Check the correct receiving address and asset/network combination. A completed provider message without a matching wallet balance may reflect wallet indexing, a hidden token display or a genuine discrepancy that requires support.'],
['When and how to contact support','If the transaction exceeds the provider’s quoted window, check published network incidents and the official support channel. Supply the source hash, relevant destination hash if available, time and non-sensitive quote or route details. Never respond to direct messages asking for a recovery phrase or to send an extra “unlock” payment. Avoid initiating a duplicate swap while the original outcome remains unclear.']
],
checks:['Save the source-chain hash and confirm it was broadcast.','Look for actual source confirmations, not only wallet animation.','Read the provider’s current processing/queue status.','Find the destination transaction and verify the receiving wallet.'],
faq:[['Does “confirmed on Ethereum” mean I received BTC?','No. The provider still has to process the swap and broadcast a separate Bitcoin payout.'],['Should I repeat a transaction if it is slow?','Not until you have verified the first transfer’s state and the provider’s instructions.']]
},
ru:{
title:'Как отследить кроссчейн-обмен криптовалюты по хешу',
h1:'Как проверить статус обмена криптовалют между сетями',
description:'Обмен завис или задерживается? Как найти хеш транзакции, проверить подтверждения исходной сети и отследить выплату на целевой блокчейн.',
lead:'«Отправлено» и «Получено» при кроссчейн-обмене — два разных события. Разобрав этапы, проще отличить обычное ожидание от настоящей ошибки.',
sections:[
['Сохраните хеш исходящей транзакции','После подтверждения обмена кошелёк обычно показывает хеш операции или BTC TXID в исходной сети. Запишите его, сеть, актив и время. Никогда не передавайте seed-фразу и ключи «помощникам». Если хеша нет, проверьте, действительно ли кошелёк отправил транзакцию. Подписание запроса не обязательно означает, что перевод уже опубликован в блокчейне.'],
['Проверьте подтверждения исходной сети','Откройте надёжный обозреватель нужной цепочки или встроенную историю кошелька. Увидьте, что произошло: ожидание, ошибка или подтверждение. Для Bitcoin важны подтверждения, для Ethereum — статус выполнения и уплаченный газ. Даже успешная исходящая транзакция не доказывает поступление монет в конечную сеть.'],
['Что делает протокол между отправкой и выплатой','THORChain выделяет несколько этапов: наблюдение узлами за входящим переводом, необходимая финальность, очередь и отправка в другую сеть. Отдельные стадии могут занимать разное время. После подтверждения исходного перевода увеличение газа в исходном кошельке обычно уже не решает задержку протокола. Смотрите статус у настоящего поставщика, а не ожидайте одновременного появления двух транзакций.'],
['Где искать перевод получения','Когда поставщик отправит монеты в целевую сеть, должна появиться отдельная транзакция с собственным идентификатором. Её можно проверить в обозревателе нужного блокчейна. Сверьте сеть, адрес и актив. Если поставщик сообщает об успехе, но кошелёк пуст, причина может быть в отображении токена или задержке синхронизации; иногда требуется обратиться в поддержку с хешами.'],
['Когда обращаться за помощью','Если прошёл ожидаемый интервал, проверьте сообщения поставщика о состоянии сети и официальные каналы поддержки. Укажите публичный хеш, время и неконфиденциальные данные маршрута. Никому не давайте код восстановления и не платите людям из личных сообщений за «разблокировку». Пока исход первой сделки неизвестен, не начинайте повторную отправку.']
],
checks:['Исходная транзакция имеет хеш и опубликована в сети.','Проверен реальный статус подтверждений.','Проверены наблюдение протоколом и очередь выплаты.','Найдена транзакция целевой сети и нужный адрес.'],
faq:[['Ethereum подтвердил USDT — значит BTC уже отправлен?','Нет. Целевая выплата выполняется отдельным этапом.'],['Можно повторить перевод, если долго ждать?','Пока исход первой сделки не проверен, повтор опасен двойным списанием.']]
}
},
{
slug:'choose-wallet-for-cross-chain-swaps',category:'howto',
sources:[
['THORChain — supported wallets and workflow','https://docs.thorchain.org/how-to-use-thorchain'],
['Bitcoin — transaction safety principles','https://bitcoin.org/en/you-need-to-know'],
['Ethereum — network gas and wallet transaction fees','https://ethereum.org/developers/docs/gas/']],
en:{
title:'Choosing a Wallet for Cross-Chain Crypto Swaps | Murdilimax',
h1:'How to choose a wallet for cross-chain crypto swaps',
description:'Choose the right Bitcoin, Ethereum and token wallets for cross-chain swaps: networks, receive address ownership, backup safety and transaction approvals.',
lead:'No wallet suits every asset and every route. Choose based on which networks you need, how the wallet signs transactions and whether you control the destination address.',
sections:[
['Make a list of the chains, not just the tickers','A wallet that handles ERC-20 tokens on Ethereum may not support native Bitcoin. Conversely, a Bitcoin-only wallet will not automatically receive Ethereum USDT. Before installing anything, write down the exact source and destination network, which asset you will send and which one you plan to hold after the swap. Compare those requirements with the wallet’s supported networks as documented by its publisher.'],
['Understand what self-custody requires','With a self-custody wallet you are responsible for recovery credentials, backups and device security. The swap provider should never need the wallet’s recovery phrase. The strongest protection is to store the recovery information offline and verify the wallet publisher’s official download source. Do not type your phrase into an unexpected web form, a support chat or a “wallet validation” page.'],
['Check the receive address before putting funds at risk','Create a destination address inside the wallet for the network you selected. Copy it and check for unexpected changes. On Bitcoin, a fresh address is often recommended for privacy and accounting; on Ethereum, one account address can hold native ETH and supported tokens, but only if the correct chain is used. Network mismatch can be more important than a matching token name.'],
['Read approvals as permissions, not decorations','On Ethereum, some ERC-20 transactions ask you to approve token spending before the exchange. A signature or allowance is a real permission, not a cosmetic login button. Review the application domain, token, allowance and expected gas cost. Prefer a limited allowance when the provider supports it; inspect and revoke unneeded approvals through reputable tools when appropriate.'],
['Test the full path with sensible risk limits','Confirm that the wallet can show the actual source transaction and receive the target asset on the selected chain. Consider a small test transaction if you are uncertain and the network fees make that reasonable. A test is not free, and it does not guarantee a later transaction succeeds under changed market conditions. For large holdings, review hardware-wallet support and the vendor’s backup guidance.']
],
checks:['Wallet supports both required networks or you have a separate destination wallet.','You own the receive address and have an offline recovery backup.','You understand all signatures and token approvals.','Network fees and destination token display are checked.'],
faq:[['Will one Ethereum wallet automatically receive BTC?','Not native Bitcoin unless the wallet also supports the Bitcoin network and supplies a BTC receiving address.'],['Should I share my seed phrase to verify a swap?','Never. A legitimate swap provider does not need your recovery phrase.']]
},
ru:{
title:'Как выбрать кошелёк для обмена BTC, ETH, USDT и USDC',
h1:'Как выбрать кошелёк для кроссчейн-обмена криптовалют',
description:'Какой кошелёк нужен для обмена между Bitcoin и Ethereum: сети, адрес получения, резервная копия, разрешения токенов и защита seed-фразы.',
lead:'Не каждый кошелёк поддерживает все монеты и сети. Выбирайте его по блокчейну отправки, нужному активу получения и тому, как подтверждаются операции.',
sections:[
['Составьте список сетей, а не только монет','Кошелёк с токенами ERC-20 в Ethereum может не поддерживать нативный Bitcoin. И наоборот: обычный BTC-кошелёк не примет USDT в Ethereum. Запишите исходный актив и его сеть, целевой актив и сеть получения. Затем сверяйте техническую совместимость по официальной документации разработчика кошелька, а не по иконке криптовалюты на случайном сайте.'],
['Что означает самостоятельное хранение средств','Некастодиальный кошелёк даёт владельцу контроль над ключами, но и ответственность за резервное восстановление. Сервис обмена не должен требовать seed-фразу. Храните данные восстановления безопасно вне публичного доступа, устанавливайте приложение только с официальных ресурсов. Никогда не вводите фразу на сайте «проверки кошелька» или в переписке с якобы поддержкой.'],
['Как проверить адрес получения','Создайте адрес в нужной сети внутри своего кошелька и сверьте его после копирования. В Bitcoin для разных платежей часто рекомендуются новые адреса ради приватности. В Ethereum один адрес аккаунта может использоваться для ETH и разных ERC-20 токенов, но только при правильном выборе сети. Совпадение названия токена не делает перевод между сетями безопасным.'],
['Разрешение токена — настоящее полномочие','Для ERC-20 иногда нужно одобрить смарт-контракт, который сможет использовать определённый объём токена. Это не просто кнопка входа. Проверяйте домен приложения, актив, лимит разрешения и ожидаемый газ. Если сервис позволяет, избегайте ненужного безлимитного доступа. Сведения об активных разрешениях проверяйте только надёжными инструментами; отзывайте лишние права при необходимости.'],
['Проверяйте весь путь до крупной операции','Убедитесь, что кошелёк показывает исходную транзакцию и способен принять актив в конечной сети. При сомнениях можно рассмотреть небольшой тестовый перевод, если комиссия делает его разумным. Но тест тоже стоит денег и не гарантирует такой же результат при изменении ликвидности. Для крупных сумм изучите аппаратные кошельки и рекомендации производителя по восстановлению.']
],
checks:['Кошелёк поддерживает нужные сети и активы.','Адрес получения ваш, резервная копия хранится безопасно.','Каждая подпись и разрешение смарт-контракта понятны.','Проверены газ и корректное отображение токена.'],
faq:[['Любой Ethereum-кошелёк принимает BTC?','Только если он отдельно поддерживает сеть Bitcoin и выдаёт BTC-адрес.'],['Нужна ли seed-фраза для обмена?','Нет. Никогда не передавайте её сайту, поставщику или поддержке.']]
}
}
];
