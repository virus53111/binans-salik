// Original pair-specific explainers. These are conditional guides, not live rate/availability claims.
module.exports=[
{
slug:'swap-btc-to-eth',category:'pairs',
sources:[
['THORChain — native asset swaps','https://docs.thorchain.org/technical-documentation/understanding-thorchain/roles/swapping'],
['THORChain — swap execution quickstart','https://dev.thorchain.org/swap-guide/quickstart-guide.html'],
['THORChain — fee components','https://dev.thorchain.org/swap-guide/fees-and-wait-times.html']],
en:{
title:'How to Swap BTC for ETH Without a Centralized Exchange | Murdilimax',
h1:'How to swap native Bitcoin (BTC) for Ethereum (ETH)',
description:'BTC to ETH explained: Bitcoin network confirmation, Ethereum receiving address, cross-chain quotes, gas and liquidity fees before swapping.',
lead:'A BTC-to-ETH swap crosses two different networks. You send native Bitcoin from a Bitcoin wallet and, if a route is available and settles correctly, receive native ETH at an Ethereum address.',
sections:[
['Why this pair is a genuine cross-chain swap','Bitcoin and Ethereum do not share a transaction ledger. A direct cross-chain route is different from trading BTC and ETH balances inside a centralized exchange account. THORChain describes a native-asset process in which Bitcoin is observed on its network and the protocol processes an outgoing Ethereum transfer. You do not need to handle an intermediate RUNE balance manually. That mechanism still has fees, timing constraints and route-availability risks.'],
['What you need before generating a quote','Prepare a Bitcoin wallet with spendable BTC and an Ethereum-compatible destination wallet whose address you control. Verify that the destination is on Ethereum mainnet, not an address copied from an unrelated network or an exchange deposit page with special requirements. Compare the selected asset names: BTC.BTC denotes Bitcoin on Bitcoin; ETH.ETH denotes ether on Ethereum. The site itself is only the entry point to an external THORChain widget.'],
['Why the output differs from the spot-market conversion','There is a Bitcoin transaction fee for sending, a liquidity or price-impact component along the route and a destination network fee for the ETH payout. An interface may also apply an integrator fee. Those amounts and the current exchange rate vary; there is no responsible permanent “1 BTC = X ETH” figure on this page. Check the current provider quote, the estimated final ETH and the minimum acceptable output immediately before authorization.'],
['How to avoid sending BTC to an obsolete address','A quote may contain a transaction-specific deposit address, memo requirements or expiry. THORChain developer documentation warns against reusing stale inbound addresses. Generate fresh instructions for the actual swap, follow every amount and destination requirement, and never use a saved address from an earlier exchange. Make a record of the Bitcoin transaction identifier before closing your wallet.'],
['After sending: what should happen next','Bitcoin first needs sufficient confirmation and protocol observation; only then can settlement toward Ethereum proceed. Bitcoin blocks are not produced at exact fixed intervals, and a larger swap can experience further queueing. Use the actual provider status and your public transaction ID to check progress. Do not send a second payment just because the first one is taking longer than a marketing estimate.']
],
checks:['Choose BTC on Bitcoin and ETH on Ethereum, not wrapped lookalikes.','Inspect the fresh quote, fee breakdown and minimum output.','Check the Ethereum destination and all deposit instructions.','Save the Bitcoin transaction ID for tracking.'],
faq:[['Will I receive native ETH?','Only if the current provider route explicitly specifies native ETH on Ethereum; always verify the selected chain in the quote.'],['Is the rate locked?','Do not assume so. Read the current route conditions and any limit or minimum-received protections before submitting.']]
},
ru:{
title:'Как обменять BTC на ETH без централизованной биржи | Murdilimax',
h1:'Как обменять Bitcoin (BTC) на Ethereum (ETH)',
description:'Обмен BTC на ETH между блокчейнами: комиссии Bitcoin, адрес Ethereum, актуальная котировка, время подтверждения и безопасность перевода.',
lead:'При обмене BTC на ETH средства переходят между двумя разными сетями. Вы отправляете настоящий Bitcoin, а при успешном выполнении доступного маршрута получаете ETH в сети Ethereum.',
sections:[
['Почему это обмен между разными блокчейнами','Bitcoin и Ethereum работают на разных реестрах. Кроссчейн-обмен отличается от простого изменения двух цифр на счёте централизованной биржи. В THORChain входящий BTC наблюдается в сети Bitcoin, а протокол организует исходящий перевод ETH. Пользователю не обязательно самостоятельно покупать промежуточный RUNE. Но маршрут может быть временно недоступен, а цена и комиссии меняются.'],
['Что подготовить до расчёта','Нужен кошелёк с BTC в сети Bitcoin и адрес получения ETH в сети Ethereum, который вы контролируете. Не используйте адрес биржевого депозита без проверки требований этой биржи. Убедитесь, что выбраны нативные BTC.BTC и ETH.ETH, а не обёрнутые токены с похожими названиями. Murdilimax только открывает внешний виджет обмена и не хранит ваши монеты.'],
['Почему итоговая сумма не равна цене на бирже','Отправка BTC требует комиссии сети Bitcoin. Маршрут обмена может включать плату за ликвидность, комиссию вывода ETH и партнёрский сбор интерфейса. Добавляется рыночное изменение курса. Поэтому здесь нет выдуманного фиксированного «1 BTC = столько-то ETH». В виджете сравните реальную котировку, оценку получаемой суммы и минимально допустимый результат перед подтверждением.'],
['Свежий адрес и точная сумма имеют значение','Внешний сервис может выдавать адрес для конкретной операции, срок действия инструкции и дополнительные условия. Разработчики THORChain отдельно предупреждают: нельзя использовать устаревшие адреса входящего перевода. Получайте инструкцию заново для каждой сделки, следуйте указанной сумме и не копируйте адрес из истории старых обменов. Сохраните идентификатор отправленного BTC.'],
['Почему получение ETH может задержаться','Сначала Bitcoin должен получить нужные подтверждения, затем входящий перевод наблюдается узлами протокола, а исходящая транзакция выполняется в сети Ethereum. Это несколько отдельных этапов; обещания мгновенного получения ненадёжны. Отслеживайте операцию по идентификатору у реального поставщика. Не отправляйте второй платёж, если первая транзакция просто ожидает обработки.']
],
checks:['Выбраны именно Bitcoin BTC и Ethereum ETH.','Проверены комиссии, курс и минимальная сумма получения.','Адрес ETH и свежие инструкции перевода сверены.','Сохранён идентификатор Bitcoin-транзакции.'],
faq:[['Это настоящий ETH, а не WETH?','Только если текущая котировка указывает нативный ETH именно в сети Ethereum.'],['Когда придут монеты?','Точный срок не гарантирован: важны подтверждения Bitcoin и обработка исходящего перевода.']]
}
},
{
slug:'swap-eth-to-btc',category:'pairs',
sources:[
['THORChain — how swappers work','https://docs.thorchain.org/technical-documentation/understanding-thorchain/roles/swapping'],
['Ethereum Foundation — gas fees','https://ethereum.org/developers/docs/gas/'],
['Bitcoin — transaction and address safety','https://bitcoin.org/en/you-need-to-know']],
en:{
title:'ETH to BTC: Swap Ethereum for Native Bitcoin | Murdilimax',
h1:'How to swap ETH for native BTC',
description:'ETH to BTC guide: Ethereum gas, Bitcoin receive addresses, native Bitcoin versus wrapped tokens and how to follow a cross-chain settlement.',
lead:'Selling ETH and receiving actual Bitcoin requires a route out of Ethereum and into the Bitcoin network. A Bitcoin payout address must belong to the destination wallet you intend to use.',
sections:[
['Understand the destination: BTC is not WBTC','A native BTC payout happens on the Bitcoin blockchain. WBTC and other Bitcoin-labelled tokens on Ethereum are separate assets with different custody, contracts and network requirements. When you choose your destination, read both its ticker and its network. A Bitcoin receiving wallet provides an address for native BTC and should support the format shown by the provider. Do not assume an Ethereum wallet address can receive a native Bitcoin payout.'],
['Reserve enough ETH for the outgoing transaction','Ethereum transactions use gas paid in ETH. The wallet may reserve a maximum fee even when the actual cost is lower. If you try to spend an entire ETH balance, the transaction may not have enough ETH left for gas. Check the wallet’s total-debit preview, not only the amount placed in the quote. Ethereum gas demand varies with network usage; the site cannot show a universal fixed transaction fee.'],
['Read the rate together with transaction charges','An ETH-to-BTC estimate includes market conversion and may include price impact, network charges for delivery on Bitcoin and an optional interface fee. Compare the expected native BTC output after these costs. Even if a swap looks profitable by a displayed reference price, a small amount can be uneconomic once fees are included. The provider should expose the live route and minimum output rather than a static number from an article.'],
['Check the BTC address like a payment instruction','The receiving address determines where the Bitcoin will land. Copy it from the wallet you control, verify its full value where practical and check that you selected the Bitcoin network. Clipboard replacements and addresses copied from old transfers are real failure modes. Never enter a seed phrase into the exchange page. If the actual provider creates time-limited deposit instructions, follow only the current instructions.'],
['Follow both networks, not just Ethereum','An Ethereum transaction being confirmed establishes that the source transfer happened; it does not automatically prove the BTC payout has completed. The cross-chain provider must observe and process the inbound transaction and then release a Bitcoin transaction. Keep the source transaction hash, find the destination TXID when available and check status using authoritative explorers or the provider tracker.']
],
checks:['Choose native BTC on Bitcoin rather than WBTC on Ethereum.','Keep enough ETH for gas and inspect total wallet debit.','Verify your Bitcoin address character by character where possible.','Check the current quote and save the Ethereum transaction hash.'],
faq:[['Can ETH be sent straight to a BTC address?','No. Use a verified cross-chain route and follow its Ethereum-side instructions; do not paste a BTC address as an Ethereum transaction recipient.'],['Why is there an additional BTC fee?','The destination network has costs to broadcast and confirm its outbound transaction.']]
},
ru:{
title:'Обмен ETH на BTC: как получить настоящий Bitcoin | Murdilimax',
h1:'Как обменять Ethereum (ETH) на Bitcoin (BTC)',
description:'Как обменять ETH на нативный BTC: газ Ethereum, адрес Bitcoin, отличие от WBTC, расчёт комиссий и отслеживание кроссчейн-операции.',
lead:'Чтобы превратить ETH в настоящий Bitcoin, нужен маршрут из сети Ethereum в Bitcoin. Особенно важно правильно указать адрес получения BTC.',
sections:[
['Нативный Bitcoin — не то же самое, что WBTC','Настоящий BTC приходит в блокчейне Bitcoin. WBTC и другие токены с похожими названиями в сети Ethereum отличаются устройством, контрактом и рисками. Проверяйте не только тикер, но и название сети в котировке. Кошелёк для приёма нативного Bitcoin создаёт собственный BTC-адрес. Отправлять исходящий Bitcoin на обычный адрес Ethereum нельзя.'],
['Оставьте ETH на оплату газа','В сети Ethereum отправка транзакции требует газа, который оплачивается в ETH. Кошелёк показывает предполагаемый общий расход, иногда с резервированием максимальной комиссии. Если попытаться обменять весь баланс ETH без остатка, операция может не пройти. Сверяйте не только сумму обмена, но и полный расход из кошелька. Комиссия Ethereum меняется с нагрузкой сети, поэтому фиксированную цену здесь обещать нельзя.'],
['Как правильно сравнивать сумму получения','Курс ETH к BTC не равен автоматически конечному результату. Возможны влияние ликвидности, плата за вывод Bitcoin, комиссия интерфейса и сетевые расходы. Для небольших сумм общий сбор иногда оказывается слишком заметным. Сравните итоговый прогноз в BTC после комиссий и проверьте минимально допустимый результат в настоящем виджете. Статичная статья не показывает живую цену.'],
['Проверьте адрес получения BTC','Адрес определяет, куда будет переведён Bitcoin. Получите его в своём BTC-кошельке, тщательно сверьте и проверьте выбранную сеть. Не копируйте сомнительные адреса из истории операций: злоумышленники могут подменять записи или буфер обмена. Ни один честный обмен не требует seed-фразы. Если внешний сервис выдаёт временную инструкцию, используйте только свежий адрес и параметры для этой сделки.'],
['Как понимать статус операции','Подтверждение исходящей транзакции Ethereum — лишь первый этап, а не подтверждение поступления Bitcoin. Протокол ещё должен распознать перевод, выполнить обмен и отправить BTC отдельной транзакцией. Сохраните хеш Ethereum и следите за появлением Bitcoin TXID. Источником статуса должен быть реальный сервис обмена и проверенные обозреватели блокчейнов.']
],
checks:['Выбран Bitcoin в сети BTC, не WBTC.','Для отправки оставлен ETH на газ.','Адрес Bitcoin полностью сверён.','Проверена реальная сумма получения и сохранён TX-хеш.'],
faq:[['Можно просто отправить ETH на Bitcoin-адрес?','Нет. Сначала нужен кроссчейн-маршрут с правильными инструкциями для сети Ethereum.'],['Зачем комиссия сети Bitcoin?','Поступающий перевод BTC требует отдельной транзакции в сети Bitcoin.']]
}
},
{
slug:'swap-btc-to-usdc-ethereum',category:'pairs',
sources:[
['THORChain — supported assets and networks','https://thorchain.org/faq'],
['Ethereum Foundation — token transfers and gas','https://ethereum.org/gas/'],
['THORChain — quote and fees','https://dev.thorchain.org/swap-guide/fees-and-wait-times.html']],
en:{
title:'Swap BTC to USDC on Ethereum: Wallet and Fee Guide | Murdilimax',
h1:'How to swap BTC for USDC on Ethereum',
description:'BTC to Ethereum USDC guide: confirm the ERC-20 network, prepare a receiving wallet, understand stablecoin risks and check cross-chain fees.',
lead:'A BTC-to-USDC route is not simply a Bitcoin-to-dollar conversion. USDC is a token issued on multiple chains, so the target network matters as much as the token name.',
sections:[
['USDC exists on more than one blockchain','You may see USDC on Ethereum and other chains in different wallet applications. This guide is specifically about the Ethereum ERC-20 version. A chain mismatch can prevent a receiving service from recognizing the deposit, even if the token ticker appears identical. Check the provider’s destination asset and your wallet’s selected network before treating a quote as suitable.'],
['Prepare the destination wallet for an ERC-20 token','The receiving wallet should support Ethereum mainnet and the correct USDC token. It must be an address you control, or a destination service whose deposit instructions you have independently checked. Receiving USDC does not mean you automatically have ETH to transfer that USDC onward. Future Ethereum token transactions generally require ETH for gas; plan for that before moving the stablecoins again.'],
['Compare stablecoin value and liquidity honestly','USDC is designed to track the US dollar, but it is still a token with issuer, depegging, custody and smart-contract risks. A quoted BTC-to-USDC amount may differ from a simple BTC dollar-price multiplication because of liquidity, cross-chain routing, fees and exchange-rate movement. Do not promise a fixed one-to-one future cash conversion merely because the token is called a stablecoin.'],
['Check Bitcoin deposit requirements','The starting asset is native BTC. You will pay Bitcoin network transaction costs and may need several confirmations before the provider processes the route. Follow a fresh deposit address and every instruction given by the current quote; never reuse a deposit address from a previous swap. Watch that the receiving side specifies Ethereum USDC rather than a similarly named version on another chain.'],
['After the USDC arrives','Check the token on the Ethereum network, not only the total wallet balance. A wallet may need to display the token or refresh its token list. If a payment is slow, trace the BTC transaction and provider status before assuming the USDC payout was sent. Ignore messages claiming you must share a seed phrase or pay a personal “release” fee to unlock tokens.']
],
checks:['Target is USDC on Ethereum mainnet, not another chain.','Receiving wallet supports the selected ERC-20 asset.','Reserve ETH later if you intend to move the USDC.','Follow fresh BTC-side instructions and compare net output.'],
faq:[['Is USDC the same as cash in a bank?','No. USDC is a blockchain token subject to issuer, market and technical risk.'],['Can I receive USDC without holding ETH?','A compatible Ethereum address can receive it, but later outbound transfers require Ethereum gas paid in ETH.']]
},
ru:{
title:'Обмен BTC на USDC в сети Ethereum: пошаговое руководство | Murdilimax',
h1:'Как обменять Bitcoin на USDC в сети Ethereum',
description:'Обмен BTC на USDC ERC-20: выбор сети Ethereum, совместимый кошелёк, комиссии, риски стейблкоинов и правильный адрес получения.',
lead:'BTC можно обменять на USDC по доступному маршруту, но USDC выпускается в разных блокчейнах. Здесь речь именно о токене USDC в сети Ethereum.',
sections:[
['Почему название USDC без сети недостаточно','Токен USDC существует в нескольких блокчейнах. Эта инструкция относится к версии ERC-20 в основной сети Ethereum. Если кошелёк или площадка ожидает другую сеть, поступление может не отобразиться или потребует сложного восстановления. Проверьте в котировке полное обозначение актива и сеть получения, а не только знакомый тикер USDC.'],
['Как подготовить Ethereum-кошелёк','Кошелёк должен поддерживать Ethereum mainnet и правильный токен USDC. Лучше получать средства на адрес, который вы контролируете. Если используете депозит сторонней платформы, предварительно прочитайте её требования к сети и токену. Важная деталь: полученный USDC не создаёт запас ETH для следующего перевода. Для отправки ERC-20 токена позже обычно понадобится ETH на газ.'],
['Почему сумма не совпадает с долларовой оценкой BTC','USDC стремится следовать стоимости доллара, но остаётся токеном с рисками эмитента, потери привязки и смарт-контрактов. Котировка BTC→USDC включает рыночный курс, доступную ликвидность, комиссии протокола и сети. Поэтому нельзя обещать точную сумму «по курсу Google» и тем более безусловную возможность обменять каждый USDC на банковский доллар. Смотрите живой итог в виджете.'],
['Что проверить при отправке Bitcoin','BTC списывается в сети Bitcoin, поэтому вы оплачиваете её комиссию и ожидаете нужных подтверждений. Внешний поставщик может выдавать уникальный адрес и срок действия инструкции. Не повторяйте старые адреса из предыдущих сделок. На стороне получения ещё раз убедитесь, что выбрали именно Ethereum USDC, а не другой блокчейн с таким же тикером.'],
['После поступления стейблкоинов','Проверьте токен в кошельке в сети Ethereum; иногда необходимо обновить список отображаемых активов. Если вывод задерживается, сначала проверьте хеш BTC и статус обмена у поставщика. Игнорируйте «службу поддержки», которая требует seed-фразу или отправку дополнительного платежа на личный адрес для разблокировки USDC.']
],
checks:['Сеть получения — Ethereum mainnet, токен USDC ERC-20.','Кошелёк действительно принимает этот токен.','Для последующих переводов будет нужен ETH на газ.','Сверены курс, комиссии и свежая BTC-инструкция.'],
faq:[['USDC — это обычные доллары?','Нет. Это цифровой токен с рыночными и техническими рисками.'],['Можно получить USDC без ETH на балансе?','Получить на совместимый адрес обычно можно, но для дальнейшей отправки потребуется ETH на комиссию.']]
}
}
];
