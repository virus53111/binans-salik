// Direction-specific editorial pages; never suggest that an asset route is currently open.
module.exports=[
{
slug:'swap-usdc-ethereum-to-btc',category:'pairs',
sources:[
['Ethereum.org — why token transfers use gas','https://ethereum.org/gas/'],
['THORChain — swapping mechanics','https://docs.thorchain.org/technical-documentation/understanding-thorchain/roles/swapping'],
['Bitcoin — wallet address and irreversible transaction safety','https://bitcoin.org/en/you-need-to-know']],
en:{
title:'Swap Ethereum USDC to Native BTC: Avoid Network Mistakes',
h1:'How to swap USDC (Ethereum) for native Bitcoin',
description:'USDC ERC-20 to BTC guide: token approval, ETH gas for source transactions, Bitcoin address verification, fees and destination confirmations.',
lead:'USDC on Ethereum is an ERC-20 token, while BTC is native to Bitcoin. This direction starts with an Ethereum token transaction and finishes, if the live route succeeds, with a Bitcoin payment.',
sections:[
['Confirm the USDC source network','USDC balances can appear on different blockchains, and sending the wrong version to an Ethereum-only route is not interchangeable. Select USDC on Ethereum mainnet explicitly. Read the token identity shown by your wallet and provider; avoid unknown tokens with similar names. If your USDC is actually on a different chain, this page is not a promise that the same route works there.'],
['ETH is needed even when you are selling only USDC','Ethereum network gas is generally paid in ETH, not in the USDC you are selling. A wallet holding a large USDC balance and zero ETH may therefore be unable to broadcast the required token transfer or approve the provider’s token spending. Some interfaces request a separate token allowance transaction; that authorization may incur additional gas. Read each wallet prompt rather than approving unlimited permissions automatically.'],
['Make the receiving Bitcoin address unmistakable','The outcome you want is native BTC on the Bitcoin blockchain, not wrapped Bitcoin in Ethereum. Get a receive address from a genuine Bitcoin wallet. Check the complete address and the destination network. Do not copy a lookalike address from a transaction-history dust payment. Bitcoin transfers are generally irreversible after confirmation; a wrong but valid destination can mean a permanent loss.'],
['Read the deductions from both sides of the swap','The Ethereum source operation consumes gas; a quote may also account for liquidity costs, outbound Bitcoin transaction cost and an optional interface fee. The exact receipt can change with market conditions. Never use a generic USDC-to-USD headline as the final rate. Compare the net BTC estimate, minimum size and any provider warnings with the amount you intend to send.'],
['Verify completion independently','Your Ethereum wallet can show a successful ERC-20 transfer before a Bitcoin payout has happened. That is not necessarily an error: cross-chain observation and outbound settlement are separate. Keep the Ethereum transaction hash, watch the official provider status and verify the receiving Bitcoin transaction when a TXID becomes available. Do not repeat the source transfer without confirming what happened to the first.']
],
checks:['USDC is on Ethereum, not an unrelated chain.','Your wallet has ETH for gas and any required approval.','BTC destination belongs to your Bitcoin wallet.','You understand the net BTC result and current route limits.'],
faq:[['Why can’t I swap my USDC with zero ETH?','Ethereum requires ETH for network gas, even when the value being moved is an ERC-20 token.'],['Will BTC appear immediately after USDC leaves?','Not necessarily. The provider must observe the source transaction and complete a separate Bitcoin payout.']]
},
ru:{
title:'Как обменять USDC ERC-20 на BTC: комиссия и адрес | Murdilimax',
h1:'Как обменять USDC в Ethereum на настоящий BTC',
description:'USDC ERC-20 на BTC: как оплатить газ ETH, проверить разрешение токена, избежать ошибки адреса Bitcoin и отследить кроссчейн-обмен.',
lead:'В этом направлении вы отправляете токен USDC в сети Ethereum, а при успешном выполнении доступного маршрута получаете нативный Bitcoin.',
sections:[
['Убедитесь, что USDC именно в Ethereum','USDC встречается в разных блокчейнах. Для этого маршрута требуется вариант сети Ethereum mainnet. Токены в других сетях не становятся эквивалентными просто из-за одинакового названия. Сверяйте сеть и идентичность актива в кошельке и виджете. Если ваши монеты находятся в другой сети, эта инструкция не подтверждает доступность такого маршрута.'],
['Почему нужен ETH, хотя вы продаёте USDC','Комиссия за операции в Ethereum обычно оплачивается нативным ETH. Даже большой баланс USDC при нуле ETH может оказаться недостаточным, чтобы отправить токен или разрешить его использование через смарт-контракт. В некоторых сценариях кошелёк сначала просит отдельное одобрение токена, которое тоже расходует газ. Читайте каждое окно подтверждения и не соглашайтесь на ненужные безлимитные разрешения.'],
['Получение Bitcoin требует настоящего BTC-адреса','В результате должен прийти Bitcoin в блокчейне Bitcoin, а не WBTC в сети Ethereum. Откройте BTC-кошелёк и скопируйте его адрес получения. Сверьте его полностью, а не только первые символы. Не используйте похожий адрес из истории сомнительных переводов. Подтверждённые Bitcoin-транзакции обычно нельзя отменить; ошибка адреса может стоить всей суммы.'],
['Как рассчитать реальную сумму BTC','Сначала учитывается Ethereum gas, затем в котировке могут отражаться ликвидность, комиссия вывода BTC и сбор интерфейса. Итог может отличаться от простого деления суммы USDC на рыночную цену Bitcoin. Сравните чистую ожидаемую сумму BTC, минимальный объём сделки и ограничения маршрута. Старая котировка не заменяет расчёт непосредственно перед отправкой.'],
['Когда считать операцию завершённой','Успешная отправка USDC в сети Ethereum не означает, что Bitcoin уже поступил. Внешнему сервису ещё нужно распознать входящий перевод и организовать отдельную BTC-транзакцию. Сохраните Ethereum-хеш и проверяйте статус у поставщика; затем проверьте Bitcoin TXID. Не повторяйте перевод, пока не выяснили состояние первоначальной операции.']
],
checks:['Исходный USDC — в сети Ethereum.','На счёте есть ETH для газа и разрешения токена.','Адрес получения — именно Bitcoin.','Проверены чистая сумма BTC и ограничения котировки.'],
faq:[['Почему нельзя отправить USDC без ETH?','Сеть Ethereum берёт комиссию за операции с токенами в ETH.'],['Когда придёт Bitcoin?','После обработки исходного перевода и отдельной выплаты BTC; точное время не гарантировано.']]
}
},
{
slug:'swap-eth-to-usdt-ethereum',category:'pairs',
sources:[
['Tether — official supported chains and Ethereum contract','https://tether.to/en/supported-protocols/'],
['Ethereum.org — how gas works','https://ethereum.org/developers/docs/gas/'],
['THORChain — network and liquidity fees','https://dev.thorchain.org/swap-guide/fees-and-wait-times.html']],
en:{
title:'Swap ETH to USDT on Ethereum: Token, Gas and Quote Checks',
h1:'How to swap ETH for USDT on Ethereum',
description:'ETH to USDT ERC-20 checklist: verify the Ethereum token contract and destination chain, budget ETH gas and compare the live quote before a swap.',
lead:'ETH and Ethereum-network USDT can exist on the same chain, but an exchange still involves the correct token contract, provider route, wallet approvals and transaction costs.',
sections:[
['USDT is a token, not a separate Ethereum coin','Tether issues USDT on multiple supported blockchains. This article is specifically about Ethereum ERC-20 USD₮, not USDT on TRON or another network. Tether lists the Ethereum contract publicly in its official supported-protocols documentation. Use wallet and provider token selectors rather than typing an unfamiliar contract address supplied in a social-media message.'],
['Same-network exchange and cross-chain labels are not identical','Converting native ETH into an ERC-20 USDT token on Ethereum is a different route type from moving value between Bitcoin and Ethereum. A provider may expose more than one mechanism or may temporarily lack a quote. Do not assume that because ETH and USDT share a chain, all exchanges will be free, instant or supported through the selected THORChain affiliate widget. Verify the actual route before proceeding.'],
['Leave ETH for network fees','Ethereum network fees are paid in ETH. A wallet that attempts to spend its entire ETH balance in an operation can leave too little for gas. Read the complete transaction preview and choose a sensible remaining balance. The fee may depend on smart-contract complexity and congestion. Never compare an ETH-to-USDT output without accounting for the source transaction and any service or liquidity deductions.'],
['Understand what “one USDT” promises','USDT is designed to maintain a reference to the US dollar, but ownership of a token is not the same as holding insured cash in a bank account. Token redemption conditions, issuer and market risks exist. A live quote is an estimate under current conditions; token liquidity and any interface charges change the final output. Evaluate the actual amount received rather than relying on a promotional one-dollar slogan.'],
['Check the token in your wallet after settlement','An Ethereum wallet should support ERC-20 tokens. If USDT does not show in the interface, verify the Ethereum chain and the legitimate contract from Tether’s official documentation before changing display settings. Do not use a random “activate USDT” link or grant a dApp access to your recovery phrase. Keep the transaction hash and review the provider status if the payout is not visible.']
],
checks:['USDT means Ethereum ERC-20, not TRON USDT.','Token identity is checked against Tether’s official contract list.','You keep enough ETH for gas.','The live quote shows the intended chain and net USDT amount.'],
faq:[['Can I receive Ethereum USDT in a Bitcoin wallet?','No. Use an Ethereum-compatible destination that explicitly supports the USDT ERC-20 token.'],['Is a stablecoin guaranteed to be worth one dollar?','No. Stablecoin and issuer risks remain even when the token is designed for dollar tracking.']]
},
ru:{
title:'Как обменять ETH на USDT ERC-20 в Ethereum | Murdilimax',
h1:'Как обменять Ethereum (ETH) на USDT ERC-20',
description:'Обмен ETH на USDT в сети Ethereum: как проверить контракт Tether, оставить ETH на газ, оценить комиссии и получить токены без ошибки сети.',
lead:'ETH — нативная монета Ethereum, а USDT ERC-20 — токен на этой сети. При обмене важно проверить именно версию токена и условия текущего маршрута.',
sections:[
['USDT бывает в разных блокчейнах','Tether выпускает USD₮ не только в Ethereum. Здесь речь именно о версии ERC-20; USDT в сети TRON или другой сети — не тот же технический актив. Официальный сайт Tether публикует адрес контракта для Ethereum. Проверяйте его по первоисточнику и выбирайте токен в кошельке и виджете, а не по случайной ссылке из рекламы.'],
['Обмен в одной сети всё равно имеет особенности','ETH и USDT ERC-20 принадлежат одной сети, но операция может использовать смарт-контракт, поставщика ликвидности или другой маршрут. Это отличается от обмена между Bitcoin и Ethereum. Не считайте такой обмен гарантированно мгновенным и бесплатным. Наличие двух активов в выборе ещё не означает, что конкретная котировка доступна сейчас через партнёрский виджет.'],
['Оставьте ETH для комиссии сети','В Ethereum газ оплачивается в ETH. Если обменять весь баланс без остатка, средств на подтверждение может не хватить. Смотрите полный прогноз списания из кошелька, включая стоимость газа и возможные расходы смарт-контракта. Нагрузка сети меняется, поэтому комиссии нельзя надёжно указать одной цифрой для всех пользователей.'],
['Почему USDT не равен наличным долларам','USDT предназначен для привязки к доллару, но остаётся цифровым токеном. Есть риски эмитента, изменения рыночной цены и ограничения выкупа. Итоговая сумма обмена зависит от котировки, ликвидности и сборов. Перед подтверждением проверяйте именно количество получаемых USDT и выбранный контракт, а не рекламную формулу «один USDT всегда один доллар».'],
['Как проверить получение токена','Кошелёк должен показывать ERC-20 токены сети Ethereum. Если USDT не виден, сначала проверьте нужную сеть и легитимный контракт по данным Tether, а не переходите по сообщениям «активации токена». Не раскрывайте seed-фразу и не выдавайте лишних разрешений случайным сайтам. Сохраните хеш транзакции для проверки в обозревателе Ethereum и у поставщика маршрута.']
],
checks:['Токен USDT выбран именно в Ethereum ERC-20.','Контракт сверён с официальным источником Tether.','На газ в кошельке оставлен ETH.','Текущая котировка показывает чистую сумму получения.'],
faq:[['Подойдёт адрес Bitcoin?','Нет. Для получения USDT ERC-20 нужен кошелёк, совместимый с Ethereum.'],['USDT всегда равен доллару?','Нет. Цель привязки не отменяет рыночных и эмитентских рисков.']]
}
},
{
slug:'swap-usdt-ethereum-to-eth',category:'pairs',
sources:[
['Tether — Ethereum USDT contract information','https://tether.to/en/supported-protocols/'],
['Ethereum Foundation — token transaction gas fees','https://ethereum.org/developers/docs/gas/'],
['THORChain — how the quote and fees work','https://dev.thorchain.org/swap-guide/fees-and-wait-times.html']],
en:{
title:'Swap USDT ERC-20 to ETH: Wallet Gas and Approval Guide',
h1:'How to swap Ethereum USDT into ETH',
description:'USDT ERC-20 to ETH guide: why you need ETH for gas before converting tokens, what wallet approval means and which fees to review.',
lead:'Converting Ethereum-network USDT into ETH sounds simple, but holding only USDT can cause a practical problem: the sending network usually needs ETH for transaction gas.',
sections:[
['Select the correct token and Ethereum network','USDT exists on multiple chains. Only USDT ERC-20 on Ethereum is covered by this guide. A matching ticker on a different chain does not automatically work with an Ethereum-specific quote. Confirm that the source wallet is using Ethereum mainnet and that the token identity matches Tether’s official supported-protocol information. Fake tokens may copy the same name or icon.'],
['Why the wallet can say “insufficient ETH” when USDT is plentiful','An ERC-20 transfer consumes Ethereum gas paid in native ETH. A wallet that holds USDT but no ETH may not be able to broadcast the swap entry transaction. Some routes also ask for a token allowance before a separate swap action; that allowance change has its own potential gas expense and security implications. Read both requests, approve only what you understand and evaluate whether a limited allowance is possible.'],
['Check whether the wallet receives actual ETH','The destination should be native ETH on Ethereum, not WETH or an asset on a different network unless that is deliberately what you want. Examine the provider quote, the chain label, net ETH output and minimum-received protection. A successful token transfer does not guarantee the next contract or network action will finish without delay.'],
['How to calculate an economic minimum','Small USDT exchanges may be disproportionately expensive if gas consumes a meaningful fraction of the amount. The practical minimum is not just the provider’s formal threshold: compare what leaves the wallet with the ETH you expect after network fees, liquidity cost, any affiliate charge and token approval cost. If the net result looks poor, it may be wiser to wait rather than send a tiny transaction.'],
['What to do after a failed attempt','A failed Ethereum transaction can still consume gas, according to Ethereum’s documentation. Do not send a duplicate while the original is pending. Check the transaction on a trusted Ethereum explorer, then consult the provider’s status. Be wary of unsolicited recovery offers. Never provide a recovery phrase or grant broad token permissions to an unknown site claiming to reverse the failure.']
],
checks:['Source is genuine USDT ERC-20 on Ethereum.','Wallet has ETH for gas before and during authorization.','You understand any token allowance prompt.','Destination is native Ethereum ETH and the net result is sensible.'],
faq:[['Can I pay Ethereum gas with USDT?','In the standard Ethereum transaction flow, gas is paid in ETH, even when the transaction sends USDT.'],['Does a failed transaction return the gas?','Not necessarily. Ethereum charges for computation already consumed, so inspect the failure details.']]
},
ru:{
title:'Как обменять USDT ERC-20 на ETH: газ и разрешения | Murdilimax',
h1:'Как обменять USDT ERC-20 на ETH',
description:'USDT на ETH в Ethereum: почему нужен ETH для газа, как проверить разрешение токена, оценить итоговую комиссию и избежать ошибок.',
lead:'Обмен USDT ERC-20 на ETH может застопориться даже при большом балансе USDT: для исходной операции Ethereum обычно нужен ETH на комиссию.',
sections:[
['Сначала выберите правильный USDT','Токен USDT существует в нескольких сетях. Эта инструкция относится только к ERC-20 версии в Ethereum mainnet. Название USDT в другой сети не означает совместимости с маршрутом Ethereum. Сверьте сеть кошелька и контракт токена по официальным данным Tether. Поддельные токены способны копировать название и значок настоящего USDT.'],
['Почему кошелёк просит ETH при продаже USDT','Операции с ERC-20 в Ethereum требуют газа, оплачиваемого нативным ETH. Кошелёк с USDT и нулём ETH может не отправить исходную транзакцию. Иногда внешний виджет сначала запрашивает разрешение смарт-контракту использовать токен, а затем отдельное подтверждение обмена. За разрешение тоже может взиматься газ. Читайте запросы, ограничивайте ненужные полномочия и не подтверждайте всё подряд.'],
['Что именно придёт в результате','Убедитесь, что хотите получить нативный ETH в сети Ethereum, а не WETH или монету похожего названия на другой цепочке. В котировке проверьте правильную сеть, предполагаемое количество ETH и минимальную сумму получения. Исходный перевод токена не всегда равен мгновенному завершению всей цепочки операций.'],
['Когда небольшой обмен становится невыгодным','У небольшого объёма расход на газ может составлять заметную часть суммы. Сравните общий расход USDT, затраты ETH на газ, возможное разрешение токена и чистую сумму ETH после ликвидности и сборов партнёрского интерфейса. Наличие технического минимума не означает, что обмен финансово разумен. Иногда лучше отложить очень маленький перевод.'],
['Если попытка завершилась ошибкой','Даже неудачная транзакция в Ethereum может израсходовать газ на выполненные вычисления. Сначала найдите операцию по хешу в надёжном обозревателе Ethereum и проверьте статус у поставщика. Не отправляйте повторную транзакцию, пока первая ещё ожидает подтверждения. Игнорируйте людей, которые обещают «возврат» за seed-фразу или дополнительное разрешение неизвестному контракту.']
],
checks:['USDT — настоящий ERC-20 в Ethereum.','Есть ETH для сетевых комиссий.','Разрешение смарт-контракта понятно и оправдано.','Результат — нативный ETH с учётом всех расходов.'],
faq:[['Можно оплатить газ в USDT?','В обычной сети Ethereum стандартные комиссии за транзакции платятся в ETH.'],['Вернётся ли комиссия при ошибке?','Не обязательно. Газ за выполненные вычисления может списаться даже при неуспехе.']]
}
}
];
