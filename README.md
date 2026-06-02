# WorkoutApp

Semestrální práce pro předmět **4IT427** — jednoduchá webová aplikace pro sledování silových tréninků.

## Popis projektu

WorkoutApp umožňuje uživateli sestavit trénink z předpřipravené knihovny cviků, zaznamenat série s váhou a počtem opakování a trénink uložit. Aplikace podporuje registraci a přihlášení uživatele a přepínání světlého/tmavého režimu.

Projekt vznikl jako školní práce. Backend a perzistence dat jsou zatím simulovány statickými JSON soubory v adresáři `public/`

### Technologický stack

| Vrstva | Technologie |
|---|---|
| UI framework | React 19 + TypeScript |
| Routing | React Router DOM 7 |
| Správa dat | TanStack React Query 5 |
| Stylování | Tailwind CSS 4 + vlastní CSS |
| Build tool | Vite 8 |
| Testy | Vitest + Testing Library |

## Instalace a spuštění

Předpoklady: **Node.js 18+** a **npm**.

```bash
# 1. Klonování repozitáře
git clone https://github.com/JakubHerr/4IT427_herj17_semestralka.git
cd 4IT427_herj17_semestralka

# 2. Instalace závislostí
npm install

# 3. Spuštění vývojového serveru
npm run dev
```

Aplikace poběží na `http://localhost:5173`.

### Ostatní příkazy

```bash
npm run build    # produkční build
npm run preview  # náhled produkčního buildu
npm run lint     # statická analýza kódu
```

## Použití

1. Otevřete aplikaci v prohlížeči.
2. **Registrujte se** nebo se přihlaste (demo účty: `alice` / `bob`, heslo `password123`).
3. Na **Dashboardu** spusťte nový workout.
4. Klikněte na **+ Přidat cvik** a vyberte cvik z knihovny.
5. U každého cviku přidejte série tlačítkem **+ Přidat sérii** a vyplňte váhu a opakování.
6. Trénink uložte tlačítkem **Uložit workout**.

Tmavý/světlý režim přepnete tlačítkem v pravém horním rohu navigace.

## Struktura projektu

```
src/
├── components/       # Znovupoužitelné komponenty (Navbar, ExerciseCard, WorkoutSet, …)
├── context/          # React kontexty (WorkoutContext, UserContext)
├── hooks/            # Vlastní hooky (useWorkout, useUser)
├── pages/            # Stránky aplikace (Dashboard, Workout, Login, …)
└── types/            # TypeScript typy (Exercise, Workout, User, …)

public/
├── exercises.json    # Knihovna 20 cviků
└── users.json        # Demo uživatelé (placeholder)
```

## Autor

**Jakub Herrmann**

## Licence
Apache-2.0

