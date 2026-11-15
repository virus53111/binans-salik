module.exports = {
  "slug": "thorchain-swap-refund",
  "category": "safety",
  "sources": [
    [
      "THORChain — transaction memos and refunds",
      "https://dev.thorchain.org/concepts/memos.html"
    ],
    [
      "THORChain — quote and refund routing",
      "https://dev.thorchain.org/swap-guide/quickstart-guide.html"
    ],
    [
      "THORChain — outbound delays",
      "https://dev.thorchain.org/concepts/delays.html"
    ]
  ],
  "en": {
    "title": "THORChain Swap Refund: How to Check What Happened",
    "h1": "How to check a THORChain swap refund",
    "description": "Use your inbound transaction ID to distinguish a pending THORChain swap from a refund, check the return chain and understand outbound fees.",
    "lead": "A confirmed deposit only shows that the sending chain accepted your transaction. To find out whether the swap was delivered, queued or refunded, follow the deposit in the protocol’s transaction history.",
    "sections": [
      [
        "Start with the inbound transaction",
        "Copy the transaction ID from the wallet used to send the asset. Open the explorer on the sending chain and check the status, asset and amount. If the wallet never broadcast the transfer, the protocol may have received nothing. If the transfer is confirmed, use the same public ID to look for protocol status rather than initiating a second transfer."
      ],
      [
        "Separate a delay from a refund",
        "An inbound confirmation and an outbound payment are different events. Look for a return transaction or an explicit refund status in the protocol’s tracking information. If you see an outbound hash, open it on the chain shown by the tracker and compare its asset and destination. A swap still waiting for an outbound payment can appear unfinished even when the inbound transfer is final."
      ],
      [
        "Understand what can trigger a return",
        "THORChain documents refund conditions including invalid transaction memos and a trade that cannot meet its price limit. Those conditions assume the protocol can observe and process the inbound transaction. A transfer to an unrelated address or unsupported network is a different situation. Keep the original quote and the public hash so official support can identify which case applies."
      ],
      [
        "Find the return address and expected amount",
        "A refund typically returns the inbound asset on its original network to the sender or to a valid refund address specified for the swap. If the sender is an exchange or smart contract, the refund can land somewhere other than the wallet you expected. THORChain documents outbound fees for refunds, so the returned amount can be lower than the deposit."
      ],
      [
        "Escalate with public evidence",
        "If the status is unclear, collect the original chain and asset, inbound transaction ID, time, any outbound ID and any error label. Share only public transaction details through the provider’s verified support channel. Someone asking you to import your wallet, disclose a recovery phrase or send a recovery payment cannot establish ownership of your transaction that way."
      ]
    ],
    "checks": [
      "Find the sending chain and inbound transaction ID.",
      "Check the protocol status and look for a separate outbound ID.",
      "Verify the return network, asset and address.",
      "Use verified support with public transaction IDs if the status is unclear."
    ],
    "faq": [
      [
        "Will a refund return the exact deposit?",
        "The outbound fee can reduce the returned amount. Check the recorded inbound and refund transactions for the actual amounts."
      ],
      [
        "Can a transfer sent to the wrong network be recovered by THORChain?",
        "Do not assume recovery. Verify the actual chain and destination, then contact the provider able to inspect that transfer."
      ]
    ]
  },
  "ru": {
    "title": "Возврат в THORChain: как проверить статус и адрес",
    "h1": "Как проверить возврат после обмена в THORChain",
    "description": "Как отличить задержанный обмен THORChain от возврата, найти исходящий перевод и проверить сеть, адрес и комиссию по хешу транзакции.",
    "lead": "Подтверждение депозита означает, что исходная сеть приняла транзакцию. Чтобы узнать, выполнен ли обмен, стоит ли он в очереди или оформлен возврат, проследите за депозитом в истории протокола.",
    "sections": [
      [
        "Найдите хеш исходной транзакции",
        "Скопируйте идентификатор транзакции из кошелька, с которого отправляли актив. В обозревателе исходной сети проверьте статус, монету и сумму. Если кошелёк ещё не передал транзакцию в сеть, протокол мог не получить средства. Если перевод подтверждён, проверяйте его по тому же хешу, не отправляя средства повторно."
      ],
      [
        "Отличите задержку от возврата",
        "Входящее подтверждение и выплата — это разные события. Ищите возврат или отдельный исходящий хеш в истории обмена. Откройте найденный хеш в обозревателе указанной сети и сравните актив и адрес. Если исходящей транзакции ещё нет, обмен может оставаться в очереди даже после подтверждения входящего перевода."
      ],
      [
        "Проверьте причину возврата",
        "В документации THORChain среди причин возврата указаны неправильный memo и невозможность выполнить обмен по заданному ценовому пределу. Эти правила применяются, когда протокол видит и может обработать входящий перевод. Отправка по неверному адресу или в неподдерживаемой сети требует отдельной проверки."
      ],
      [
        "Уточните, куда и сколько вернулось",
        "Возврат обычно приходит в исходном активе и сети на адрес отправителя либо на действительный адрес возврата, указанный для обмена. Если отправителем была биржа или смарт-контракт, средства могут оказаться на их адресе. THORChain учитывает сетевую комиссию исходящего перевода, поэтому сумма возврата может быть меньше суммы депозита."
      ],
      [
        "Соберите данные для поддержки",
        "Запишите исходную сеть, актив и хеш перевода. Если есть идентификатор выплаты, время или сообщение об ошибке, приложите их. Передавайте только публичные сведения через проверенный канал поддержки. Запрос секретной фразы, приватного ключа или перевода за «разблокировку возврата» не нужен для проверки публичной транзакции."
      ]
    ],
    "checks": [
      "Найдите исходную сеть и хеш входящего перевода.",
      "Проверьте статус протокола и наличие отдельного исходящего хеша.",
      "Сверьте сеть, актив и адрес возврата.",
      "Если статус неясен, обратитесь в официальную поддержку с публичными хешами."
    ],
    "faq": [
      [
        "Вернётся ли вся сумма депозита?",
        "Исходящая комиссия может уменьшить сумму возврата. Фактические суммы видны в записях входящей и исходящей транзакций."
      ],
      [
        "Вернёт ли THORChain средства, отправленные в неверной сети?",
        "Автоматический возврат в этом случае нельзя считать доступным. Сначала проверьте сеть и адрес, затем уточните ситуацию у поддержки сервиса."
      ]
    ]
  }
};
