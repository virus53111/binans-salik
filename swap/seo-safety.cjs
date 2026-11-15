// Risk and cost education written for real user decisions rather than keyword duplication.
module.exports=[
{
slug:'why-cross-chain-swaps-take-time',category:'safety',
sources:[
['THORChain — network confirmation and outbound delays','https://dev.thorchain.org/concepts/delays.html'],
['THORChain — streaming swaps and execution time','https://dev.thorchain.org/swap-guide/streaming-swaps.html'],
['THORChain — fees and wait times','https://dev.thorchain.org/swap-guide/fees-and-wait-times.html']],
en:{
title:'Why Is My Crypto Swap Taking So Long? Five Delay Stages',
h1:'Why cross-chain crypto swaps can be delayed',
description:'Understand the five stages of cross-chain swap delays: inbound confirmation, observation, finality, outbound queue and destination confirmation.',
lead:'Cross-chain delivery can take longer than a transfer within a single blockchain. A transaction can be successful on the sending chain while the receiving chain still has nothing to show.',
sections:[
['Stage one: source-chain confirmations','The source transaction must actually be broadcast and confirmed on its own blockchain. Bitcoin block arrivals vary; Ethereum confirmations follow a different process. Network congestion or a low selected fee can lengthen this first stage. You can usually identify it by looking up the source transaction hash. If there is no broadcast transaction, verify the wallet’s submission status instead of assuming the provider already has the funds.'],
['Stage two: the protocol observes incoming funds','Cross-chain systems have to recognize inbound payments and agree on what was received. THORChain describes observation and consensus by independent nodes as an explicit stage. A source explorer’s “success” does not instantly produce the same status inside the cross-chain system; processing requires the provider to identify the correct deposit and ensure it meets the quote’s instructions.'],
['Stage three: chain finality and required confirmation count','The provider may wait for additional confirmations or finality before processing a larger-value transfer. The rules vary by source blockchain and transaction context. Bitcoin and Ethereum do not use identical finality models, and a quote’s ETA is not a guaranteed deadline. If the chain is reorganizing or an asset route is halted, this stage may extend beyond the first estimated time.'],
['Stage four: outbound scheduling or streaming execution','After the inbound payment is accepted, the protocol may queue the target payout. Some swaps use multiple smaller execution steps, called streaming swaps, to reduce price impact. That can trade speed for a potentially better rate if the provider offers the option. A delayed outbound transaction is different from a failed source transaction; escalating with repeated payments can create a much bigger problem.'],
['Stage five: destination transaction and wallet indexing','The destination chain must include the payout, and your wallet must recognize the asset. A token might need to be made visible in the correct network’s token list. Check the provider’s payout transaction ID when available. If the provider shows completion but you cannot find funds, verify the destination chain and address first, then contact official support with public hashes rather than secrets.']
],
checks:['Verify the original transfer reached its blockchain.','Check whether the provider has observed that payment.','Look for finality, queueing or streaming steps.','Find a separate destination transaction before assuming delivery.'],
faq:[['Is a 30-minute delay proof of theft?','No. Cross-chain confirmations and queueing can legitimately take time, though unusual delays still merit checking.'],['Can I cancel after my original chain has confirmed?','Do not assume cancellation is possible. Follow the provider’s actual refund or support instructions.']]
},
ru:{
title:'Почему задерживается обмен криптовалют: 5 этапов проверки',
h1:'Почему кроссчейн-обмен криптовалют может задержаться',
description:'Обмен долго выполняется? Пять этапов: подтверждения исходной сети, наблюдение протоколом, финальность, очередь выплат и поступление монет.',
lead:'Перевод между разными блокчейнами может занимать больше времени, чем обычная отправка внутри одной сети. Исходная транзакция уже подтверждена, но выплата ещё может обрабатываться.',
sections:[
['Первый этап: подтверждения исходной сети','Отправленный перевод должен попасть в блокчейн и получить необходимые подтверждения. В Bitcoin время появления блока меняется, в Ethereum механизм другой. Перегрузка сети или небольшая выбранная комиссия могут увеличить ожидание. Это проверяется по исходному хешу. Если транзакции в сети вообще нет, сначала выясните, действительно ли кошелёк её опубликовал.'],
['Второй этап: протокол распознаёт входящий перевод','Кроссчейн-системе нужно заметить поступление средств и согласовать состояние между узлами. В документации THORChain наблюдение и консенсус описаны как отдельная стадия. Статус «успешно» в исходном обозревателе не обязан мгновенно появиться в протоколе. Поставщик должен распознать адрес, сумму и требования конкретной инструкции.'],
['Третий этап: финальность и дополнительные подтверждения','Протокол может ожидать дальнейших подтверждений, особенно для операций определённого размера. У Bitcoin и Ethereum разные правила финальности, а примерное время из котировки — не гарантия. Перестройка цепочки, остановка маршрута или сетевой сбой могут увеличить ожидание. Уточняйте текущий статус, а не ориентируйтесь на один рекламный срок.'],
['Четвёртый этап: очередь вывода и дробное исполнение','После принятия средств протокол может поставить выплату в очередь. Некоторые маршруты используют streaming swap — несколько небольших внутренних этапов, которые иногда снижают влияние сделки на цену ценой времени. Такая возможность зависит от поставщика. Отсутствие целевого хеша в данный момент ещё не означает провал исходной отправки; повторный перевод может привести к двойной операции.'],
['Пятый этап: поступление в целевую сеть','Платёж должен появиться в блокчейне получения, а кошелёк — корректно отобразить актив. Иногда токен скрыт из-за выбора другой сети или настроек интерфейса. Проверьте отдельный идентификатор исходящего перевода у поставщика. Если он сообщает об успехе, а баланс не изменился, сначала сверьте адрес и сеть, затем обращайтесь в официальную поддержку с публичными хешами.']
],
checks:['Исходная транзакция найдена в нужном блокчейне.','Поставщик распознал входящий перевод.','Проверены ожидание финальности, очередь и streaming.','Найдена целевая транзакция и проверен баланс.'],
faq:[['Полчаса ожидания — значит деньги украли?','Нет. Подтверждения и очередь могут занимать время; длительную задержку всё же нужно проверять.'],['Можно отменить подтверждённый перевод?','Не рассчитывайте на это. Следуйте только реальным правилам возврата и поддержки поставщика.']]
}
},
{
slug:'crypto-swap-minimum-amount-network-fees',category:'safety',
sources:[
['THORChain — fees and minimum swap amounts','https://dev.thorchain.org/swap-guide/fees-and-wait-times.html'],
['Ethereum — gas and fees','https://ethereum.org/gas/'],
['THORChain — public pricing explanation','https://thorchain.org/pricing']],
en:{
title:'Minimum Crypto Swap Amount: When Network Fees Cost Too Much',
h1:'How to judge the minimum sensible crypto swap amount',
description:'Minimum crypto swap amount explained: provider thresholds versus the practical cost of gas, outbound fees, token approvals and liquidity.',
lead:'“Minimum allowed” and “worth doing” are different. A swap can be technically supported while its fees are unreasonably large compared with the amount you hope to receive.',
sections:[
['Two different minimums to understand','Providers can enforce a technical minimum for a route, often related to whether the output covers network costs or refund requirements. Separately, you decide an economic minimum: the smallest amount for which the expected net receipt makes sense to you. There is no universal dollar threshold for BTC, ETH, USDT and USDC because the source and target chains, available liquidity and gas prices differ.'],
['Source-chain gas versus outbound cost','When you initiate a transfer, its source blockchain may deduct a network charge. The cross-chain provider may then account for an outbound payment fee on the destination network. For a small exchange, a fee that looks modest in absolute value can consume a substantial proportion of the received amount. BTC and Ethereum transactions have different fee models, so do not compare them using only one fixed headline number.'],
['Token approval can make a tiny Ethereum swap less attractive','For ERC-20 tokens such as Ethereum USDT or USDC, the wallet sometimes requires an approval transaction before the actual transfer. An approval may involve additional gas. Ethereum charges for computation even if an on-chain operation ultimately reverts. If your available USDT is small and you also need to acquire ETH for gas, the true cost may be higher than the provider’s single visible percentage.'],
['Use the quote to calculate the effective loss','A practical comparison starts with the full value leaving your wallet, including source gas. Compare that with the expected value of the received asset after liquidity, affiliate and outbound fees. Express the difference as a share of the total input value; then decide if it is acceptable for your goal. Do not interpret a “zero exchange commission” marketing line as zero network cost. A quote might also flag a recommended minimum amount.'],
['When waiting is better than swapping','If the live quote shows an unusually high cost-to-output ratio, consider waiting for network conditions to change or using a different supported route after comparing risks. Do not split an amount into many tiny swaps without considering repeated fees. Conversely, a large transaction deserves close attention to price impact and permitted slippage. The purpose of this guide is evaluating a quote, not promising profit or selecting a coin to buy.']
],
checks:['Distinguish provider’s hard minimum from your fee tolerance.','Include wallet-paid network gas in your comparison.','Account for possible ERC-20 approval cost.','Reject a quote when net receipt is unacceptably low.'],
faq:[['Is there one minimum in dollars for all swaps?','No. It varies by route, fees, liquidity and provider rules.'],['Can a zero-fee exchange still cost money?','Yes. Blockchain gas, outbound delivery and other route charges may remain.']]
},
ru:{
title:'Минимальная сумма обмена криптовалют: когда комиссия слишком велика',
h1:'Как определить разумную минимальную сумму криптообмена',
description:'Минимум обмена BTC, ETH, USDT и USDC: чем отличаются ограничения сервиса от реальных расходов на газ, вывод, ликвидность и одобрение токена.',
lead:'Минимум, который сервис технически принимает, не всегда выгоден пользователю. На небольшой сумме расходы сети могут оказаться слишком заметными.',
sections:[
['Технический и разумный минимумы — разные вещи','Поставщик может установить обязательный минимум: сумма должна покрывать расходы маршрута или возможный возврат. Отдельно есть ваш личный экономический минимум — размер сделки, при котором чистый результат оправдывает затраты. Одного значения в долларах для всех BTC, ETH, USDT и USDC нет, потому что сети, газ, ликвидность и комиссии различаются.'],
['Комиссия исходной сети и плата за выплату','При отправке сеть списывает сбор с исходного кошелька. Для перевода в целевой блокчейн поставщик может учитывать ещё и расход на исходящую транзакцию. Даже небольшая фиксированная сумма может съесть значительную часть маленького обмена. Bitcoin и Ethereum считают расходы по-разному; нельзя сравнивать их по одной рекламной цифре.'],
['У токенов Ethereum может быть отдельное одобрение','Для USDT и USDC ERC-20 некоторые маршруты требуют сначала разрешить смарт-контракту использовать токен. Такая операция может потратить дополнительный газ. Ethereum берёт плату за вычисления даже при неуспешном выполнении. Если у вас мало USDT, а для газа ещё придётся пополнить ETH, реальные расходы могут быть выше видимого процента комиссии сервиса.'],
['Как оценить итоговые потери по котировке','Сравните полную стоимость списываемых активов, включая газ кошелька, со стоимостью ожидаемого получения после платы за ликвидность, партнёрского сбора и исходящего вывода. Выразите разницу в процентах исходной стоимости и решите, приемлема ли она. Надпись «нулевая комиссия обмена» не означает нулевые сетевые расходы. В котировке могут быть указаны рекомендованный минимум и предупреждения.'],
['Когда лучше не начинать обмен','Если итоговая сумма слишком мала относительно расходов, возможно, лучше дождаться изменения условий сети или изучить другой доступный маршрут с учётом всех его рисков. Не дробите перевод на десятки крошечных операций без расчёта повторяющихся сборов. Для большого объёма, наоборот, важны влияние на цену и допустимое проскальзывание. Статья помогает оценивать условия, а не обещает доход.']
],
checks:['Отличаете технический минимум от своего допустимого расхода.','Учли газ кошелька и вывод на целевой сети.','Проверили стоимость разрешений ERC-20.','Отказались от котировки с чрезмерными потерями.'],
faq:[['Есть единая минимальная сумма для всех обменов?','Нет. Она зависит от сети, маршрута, комиссий и поставщика.'],['Нулевая комиссия обмена означает бесплатный перевод?','Нет. Сетевые и другие маршрутные расходы могут остаться.']]
}
},
{
slug:'how-to-check-crypto-swap-address',category:'safety',
sources:[
['Bitcoin.org — address safety and irrevocable transfers','https://bitcoin.org/en/faq'],
['Bitcoin.org — address poisoning and recovery scams','https://bitcoin.org/en/scams'],
['THORChain developer docs — why fresh inbound deposit addresses matter','https://dev.thorchain.org/swap-guide/quickstart-guide.html']],
en:{
title:'How to Check a Crypto Swap Address Before You Send Funds',
h1:'How to verify a crypto swap deposit or receiving address',
description:'Prevent crypto swap mistakes: check blockchain and token network, inspect the whole address, avoid clipboard poisoning and never reuse expired deposit details.',
lead:'An apparently valid address is not enough. The address must belong to the correct network, the right recipient and the current transaction instructions.',
sections:[
['Start with the blockchain, not the address prefix','Before copying anything, identify which blockchain the sending asset uses and which one will receive the payout. Bitcoin and Ethereum use distinct transaction systems. Some EVM chains use similar-looking address formats even though they are not the same network. A token label such as USDC may exist on several blockchains. A syntactically valid address for the wrong chain does not make a transfer safe.'],
['Get the destination from a wallet you control','Open the wallet’s Receive screen for the correct asset and network. If you are depositing to another service, independently confirm that the service supports that token and chain. Read whether a memo or tag is required for that service. Copying the address from an unrelated chat message or a past transaction can introduce a different recipient without being visually obvious.'],
['Avoid address poisoning and clipboard replacement','Scammers sometimes send tiny transactions from addresses crafted to resemble familiar addresses, hoping you will copy one from your history. Malicious clipboard software can also replace text after you copy it. Bitcoin.org advises verifying the entire receiving address, not only its first or last characters. Use the wallet’s trusted address book where available, compare the full value carefully and pay attention to any hardware-wallet display.'],
['Never reuse a provider deposit address without checking','A quote can generate transaction-specific instructions with time limits or route parameters. THORChain documentation explicitly warns against caching inbound addresses. A deposit address that was valid for an older swap may no longer be appropriate. If you need to restart, generate a fresh quote and follow the current provider’s amount, memo and destination requirements, rather than relying on a screenshot.'],
['What to do if you already sent to the wrong place','Do not promise yourself that the transaction can simply be reversed. Confirm the broadcast transaction ID and the destination network first. If you sent to your own address but chose the wrong network, recovery may depend on technical access and the recipient service. If the destination belongs to a stranger, recovery may be impossible. Contact only legitimate wallet or service support with public transaction details, never your seed phrase.']
],
checks:['Correct sending chain and destination token network.','Address obtained from the intended wallet or verified service.','Full value checked after copying, not just the beginning.','Fresh provider deposit instructions used for this exact transaction.'],
faq:[['Is matching the first six characters enough?','No. Lookalike and clipboard attacks make partial comparison unreliable.'],['Can the provider reverse a confirmed Bitcoin transfer?','A confirmed Bitcoin transfer generally cannot be reversed; recovery depends on who controls the destination.']]
},
ru:{
title:'Как проверить адрес криптообмена и не потерять деньги',
h1:'Как правильно проверить адрес перед обменом криптовалют',
description:'Проверка адреса BTC и ETH перед обменом: сеть токена, подмена буфера обмена, адресное отравление и опасность устаревших депозитных инструкций.',
lead:'Даже адрес правильного формата может вести не туда. Нужно убедиться, что сеть, владелец и реквизиты совпадают с конкретным обменом.',
sections:[
['Сначала блокчейн, потом символы адреса','До копирования уточните, в каком блокчейне отправляется актив и в каком нужно получить результат. Bitcoin и Ethereum — отдельные сети. Некоторые EVM-блокчейны используют похожий формат адресов, хотя перевод на другом блокчейне не становится от этого правильным. USDC и другие токены встречаются в разных сетях. Синтаксически похожий адрес не доказывает совместимость.'],
['Берите адрес у реального получателя','Откройте в кошельке раздел «Получить» для нужного актива и сети. Если переводите на стороннюю платформу, отдельно проверьте, что она принимает конкретную сеть и токен. У некоторых систем может требоваться memo или tag. Адрес из переписки или истории старого обмена может принадлежать совершенно другому получателю.'],
['Подмена адреса и «отравление» истории','Мошенники иногда отправляют мелкие транзакции с похожих адресов, рассчитывая, что вы возьмёте реквизиты из истории. Вредоносное ПО может заменить строку в буфере после копирования. Bitcoin.org рекомендует проверять весь адрес, а не только первые и последние символы. Пользуйтесь надёжной адресной книгой, если она есть, внимательно сравнивайте значение и проверяйте экран аппаратного кошелька при его использовании.'],
['Не используйте старый адрес депозита без новой котировки','Внешний поставщик может выдать реквизиты с ограниченным сроком и параметрами маршрута. THORChain прямо предупреждает разработчиков об опасности повторного использования старых входящих адресов. Для новой попытки создавайте свежую инструкцию, проверяйте сумму, memo и адрес. Сохранённая фотография экрана старого обмена не является действительным платёжным поручением.'],
['Что делать, если уже отправили неправильно','Не рассчитывайте, что перевод можно отменить одной кнопкой. Найдите хеш транзакции и проверьте, куда и в какой сети она отправлена. Если средства ушли на ваш адрес в неожиданной сети, возврат может зависеть от доступа к ключам и возможностей получателя. Если адрес чужой, восстановление может оказаться невозможным. Обращайтесь только в официальную поддержку с публичным хешем, не раскрывая seed-фразу.']
],
checks:['Проверены исходная сеть и сеть получения токена.','Адрес взят у нужного кошелька или проверенного сервиса.','После копирования сверено полное значение.','Использована свежая инструкция конкретной сделки.'],
faq:[['Достаточно проверить первые символы?','Нет. Похожие адреса и подмена буфера делают такую проверку ненадёжной.'],['Можно вернуть подтверждённый Bitcoin?','Обычно нельзя просто отменить перевод; всё зависит от владельца адреса получения.']]
}
}
];
