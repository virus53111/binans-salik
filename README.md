# 🗂 МОИ ПРОЕКТЫ — КАТАЛОГ GitHub

> Аккаунт: [virus53111](https://github.com/virus53111) · Обновлено: 14 ноября 2026  
> Здесь хранится **единый каталог**. Код каждого проекта остаётся в **отдельном репозитории**, чтобы проекты не путались.

## 🟢 1. Действующие сайты (основные проекты)

| Проект | Где лежит код | Где работает сайт | Статус |
| --- | --- | --- | --- |
| **CenaRadar** — ремонт, цены и калькуляторы в Латвии | [Salik](https://github.com/virus53111/Salik) · [карточка](https://github.com/virus53111/Salik/blob/main/PROJECT_INFO.md) | [cenaradar.online](https://cenaradar.online/) · Render | **ДЕЙСТВУЕТ**. Код в Salik. Связь с Render требует проверки |
| **Murdilimax — The Answer Atlas** — многоязычный справочник | [dogizen](https://github.com/virus53111/dogizen) · [карточка](https://github.com/virus53111/dogizen/blob/main/PROJECT_INFO.md) | [murdilimax.com](https://murdilimax.com/) · GitHub Pages | **ДЕЙСТВУЕТ**. Сборка и публикация из dogizen/main |

**Правило:** Murdilimax обновлять **только в `dogizen`**. CenaRadar редактировать в `Salik`; до переименования или изменения хостинга проверить Render → Settings → Build & Deploy.

## 🟡 2. Другие проекты — отдельно

| Проект | Репозиторий | Назначение |
| --- | --- | --- |
| **PhoneBridge** | [Kredos](https://github.com/virus53111/Kredos) · [карточка](https://github.com/virus53111/Kredos/blob/main/PROJECT_INFO.md) | Прототип веб-приложения и Android-агента. Не относится к сайтам |
| **Harvest Hollow** | [harvest-hollow](https://github.com/virus53111/harvest-hollow) · [карточка](https://github.com/virus53111/harvest-hollow/blob/main/PROJECT_INFO.md) | Исходники отдельной браузерной игры |
| **Riposte: Frontline** | [Riposte-Frontline-Source](https://github.com/virus53111/Riposte-Frontline-Source) · [карточка](https://github.com/virus53111/Riposte-Frontline-Source/blob/main/PROJECT_INFO.md) | Снимок исходного кода браузерной игры |

## 📦 3. Архивы и шаблоны (пока не удалять)

| Название | Репозиторий | Статус |
| --- | --- | --- |
| **Старая публикация Murdilimax** | [binance-box-2](https://github.com/virus53111/binance-box-2) · [карточка](https://github.com/virus53111/binance-box-2/blob/main/PROJECT_INFO.md) | **LEGACY**. Последние публикации проваливались. Периодический автозапуск выключен; файлы и Pages настройки сохранены до окончательной проверки домена |
| **CryptoBox** | [binance-box](https://github.com/virus53111/binance-box) · [карточка](https://github.com/virus53111/binance-box/blob/main/PROJECT_INFO.md) | **АРХИВ** пакетов расширения браузера |
| **Astro + Netlify** | [astro-platform-starter](https://github.com/virus53111/astro-platform-starter) · [карточка](https://github.com/virus53111/astro-platform-starter/blob/main/PROJECT_INFO.md) | **ШАБЛОН** для новых сайтов |

## ⚪ 4. СВОБОДНО — резерв для нового проекта

**Этот репозиторий `binans-salik` свободен для будущего проекта.**

- Рабочего кода здесь нет — только этот текстовый каталог.
- Активные сайты **не зависят** от этого репозитория.
- Когда появится новая идея, можно использовать его под новый проект, переименовать и начать с чистого кода.
- Перед использованием перенести эту карту проектов в новое постоянное место, чтобы не потерять навигацию.

## 🔧 Переименования — пока НЕ выполнены

Существующие имена репозиториев оставлены, чтобы не разорвать привязки GitHub Pages, Render и других сервисов. После проверки связей логичные названия:

| Сейчас | Предлагаемое имя |
| --- | --- |
| `Salik` | `cenaradar-site` |
| `dogizen` | `murdilimax-site` |
| `binance-box-2` | `murdilimax-legacy-pages` |
| `Kredos` | `phonebridge-app` |
| `binance-box` | `cryptobox-extension-archive` |
| `binans-salik` | `future-project-reserve` |

**Пока не удалять и не переносить репозитории с кодом.** Перед очисткой старого `binance-box-2` проверить **Settings → Pages → Custom domain** у него и у `dogizen`. В действующем `dogizen` GitHub Actions успешно выполнил публикацию 14.11.2026; старые периодические запуски `binance-box-2` после повторяющихся ошибок выключены.

---

### Как добавлять новый проект

Создать для него отдельный репозиторий с понятным именем или использовать резерв `binans-salik`. Добавить в этот каталог новую строку с названием, ссылкой на код, адресом сайта (если он есть) и статусом.
