# Завершение организации GitHub — административные действия

**Дата проверки:** 14 ноября 2026  
**Аккаунт:** https://github.com/virus53111

Этот список касается только **Settings** GitHub и Render. Коды действующих сайтов уже лежат раздельно; старые неработающие workflow и CNAME удалены. Ничего не удаляйте по всему репозиторию без резервной копии.

## 1. Murdilimax — проверить, что единственный рабочий Pages у dogizen

1. Открыть [dogizen → Settings → Pages](https://github.com/virus53111/dogizen/settings/pages).
2. Проверить, что сайт опубликован и **Custom domain** содержит `murdilimax.com`. Ничего не удалять из `dogizen`.
3. Посмотреть [успешный деплой](https://github.com/virus53111/dogizen/actions/runs/43569904756). На момент проверки он завершился успешно.
4. Открыть [binance-box-2 → Settings → Pages](https://github.com/virus53111/binance-box-2/settings/pages).
5. Если там всё ещё виден Custom domain `murdilimax.com`, сначала сверить его с `dogizen` и удалить **только** старую привязку. Затем у старого опубликованного сайта в блоке GitHub Pages выбрать **… → Unpublish site**. Это отключит старую страницу `https://virus53111.github.io/binance-box-2/`, но сохранит код-архив.
6. Проверить работу `https://murdilimax.com/` и редирект `https://virus53111.github.io/dogizen/`.

**Текущее наблюдение:** `dogizen` показывает современный Answer Atlas; `binance-box-2` до отключения показывает старый сайт «твоя вселенная кино». Старые workflow и `public/CNAME` из `binance-box-2` удалены.

## 2. CenaRadar — проверить действующий Render перед переименованием

1. Открыть [Render Dashboard](https://dashboard.render.com/), выбрать **правильное** рабочее пространство и сервис `cenaradar`.
2. Открыть **Settings → Build & Deploy** и проверить, что исходный GitHub-репозиторий — `virus53111/Salik` и указанная ветка `main`.
3. Только после подтверждения связи перейти в [Salik → Settings → General](https://github.com/virus53111/Salik/settings) и переименовать `Salik` → `cenaradar-site`.
4. Обновить источник в Render, если его система не отследила переименование автоматически; затем проверить новый деплой и `https://cenaradar.online/`.

**Сейчас** DNS ведёт на Render: `www.cenaradar.online` → `cenaradar.onrender.com`. Ранее использовавшиеся `CNAME` и инструкция GitHub Pages в `Salik` удалены.

## 3. Переименования других репозиториев

Для каждого перейти в **Settings → General → Repository name → Rename**:

| Репозиторий | Желаемое имя | Условие |
| --- | --- | --- |
| [dogizen](https://github.com/virus53111/dogizen/settings) | `murdilimax-site` | После проверки Pages и того, что workflow и внешние ссылки не ссылаются на старое имя |
| [binance-box-2](https://github.com/virus53111/binance-box-2/settings) | `murdilimax-legacy-archive` | После отключения старой страницы, если она не нужна |
| [Kredos](https://github.com/virus53111/Kredos/settings) | `phonebridge-app` | Проверить связь с AppDeploy, Actions и другими сервисами |
| [binance-box](https://github.com/virus53111/binance-box/settings) | `cryptobox-extension-archive` | Архив, не относится к двум действующим сайтам |
| [binans-salik](https://github.com/virus53111/binans-salik/settings) | `projects-index-and-reserve` | Обновить ссылку на общий каталог в карточках других репозиториев |

Оставить без переименования: `astro-platform-starter`, `harvest-hollow`, `Riposte-Frontline-Source` — названия уже отражают содержимое.

**Важно:** GitHub перенаправляет обычные ссылки репозиториев после переименования, но не гарантирует перенаправление GitHub Pages проектных URL. После изменения имён обновить ссылки в [каталоге проектов](https://github.com/virus53111/binans-salik) и все жёстко закодированные ссылки внутри workflow/деплой-сервисов.

## 4. Финальная проверка

- `https://cenaradar.online/` работает.
- `https://murdilimax.com/` работает.
- GitHub Actions для Murdilimax успешно публикует `dist` из главного репозитория.
- Старый сайт `virus53111.github.io/binance-box-2/` отключён, если больше не нужен.
- У каждого проекта есть один основной репозиторий, в каталоге актуальные адреса.
- Свободный `binans-salik` служит пока только каталогом и резервом для будущего проекта.

**Осторожно:** эта инструкция — список незавершённых действий, а не заявление, что имена или настройки Pages уже изменены.
