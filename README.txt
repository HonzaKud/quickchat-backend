Web o deštných pralesech – Lost In Nature
Lost in Nature je moderní a vizuálně poutavý responzivní web zaměřený na krásu a význam tropických deštných pralesů. Nejedná se o produkční projekt, ale o osobní prezentaci schopností v oblasti frontendového vývoje. Hlavním cílem je ukázat důraz na design, responzivitu a využití moderních technologií v praxi.
Projekt byl postaven pomocí frameworku Next.js a stylován s využitím Tailwind CSS. Obsahuje celou řadu interaktivních prvků – responzivní navigaci, jemné animace, vrstvení textu, obrázků a videa. Návrh klade důraz na vizuální konzistenci, detail a příjemný uživatelský zážitek.
Teoreticky by bylo možné web rozšířit o další funkcionality (například e-shop s produkty z přírody), ale to není aktuálním cílem. Hlavním účelem je prezentace dovedností.
Použité technologie
•	Next.js + React
•	TailwindCSS pro styling
•	Framer Motion / CSS animace
•	FormSubmit pro bezserverové odesílání formulářů
•	Vercel pro nasazení projektu
Funkce a obsah
•	Úvodní video – plynulý záběr z dronu nad tropickým pralesem, optimalizovaný pro smyčku
•	Moderní navigace – responzivní menu s hamburgerem a animacemi
•	Sekce „O projektu“ – úvodní část s vysvětlením tématu a cíle
•	Galerie – přehledná a vizuálně atraktivní galerie fotografií
•	Zajímavosti z pralesa – sekce se čtyřmi tematickými kartami
•	Kontaktní formulář – jednoduchý, plně funkční formulář přes FormSubmit
•	Vizuální prvky – ambientní pozadí, parallax vrstvy, SVG přechody, animace při načtení
Responzivita
Web je plně optimalizován pro mobilní i desktopová zařízení. Všechny sekce se přizpůsobují obrazovce, včetně mobilní navigace s hamburgerem.
Cíl projektu
Tento projekt vznikl jako prezentační ukázka schopností v oblasti frontendu. Cílem bylo vytvořit designově silný a plně responzivní web, který názorně ukazuje praktické dovednosti. Obsah slouží jako doplněk vizuálního a technického zpracování. Web nebude využit v produkci – jeho hlavní smysl je ukázat, co dokážu vytvořit.
Odkazy
•	Nasazený web na Vercelu: https://rainforest-website-git-main-jan-kudrnas-projects.vercel.app/
•	GitHub repozitář: https://github.com/HonzaKud/rainforest-website




























QuickChat – Jednoduchá realtime chatovací aplikace
QuickChat je jednoduchá aplikace umožňující soukromou konverzaci mezi uživateli. Aplikace je určena především jako demonstrační projekt pro backend a frontend propojení, včetně základní správy uživatelů a odesílání zpráv.
Hlavním cílem bylo:
•	přihlášení a registraci uživatelů pomocí JWT
•	uložení a načítání zpráv z MongoDB
•	stylování pomocí Tailwind CSS
•	deploy pomocí Vercelu a Renderu
Projekt zatím není určen pro produkci, ale jako cvičný projekt.
________________________________________
Použité technologie
•	React + TypeScript
•	Tailwind CSS pro styling
•	Express.js + Node.js (backend)
•	MongoDB (přes Mongoose)
•	Vercel (frontend hosting)
•	Render (backend hosting)
________________________________________
Funkce aplikace
•	Registrace a přihlášení s tokenem
•	Výpis všech ostatních uživatelů (možnost výběru pro konverzaci)
•	Možnost odeslat zprávu jinému uživateli
•	 Uložení zpráv do databáze
•	Chat UI s automatickým scrollováním
•	Oddělené prostředí pro přihlašování a registraci
•	Responzivní a barevně sladěné prostředí
________________________________________
Známé chyby a nedostatky
Chci v dokumentaci přiznat několik aktuálních chyb, které si uvědomuji a plánuji je postupně vyřešit:
1.	Problém při refreshi stránky
Po obnovení stránky (F5) se v seznamu uživatelů objeví i aktuálně přihlášený uživatel. Zároveň se nenačte dosavadní komunikace – zprávy zůstávají prázdné, dokud se uživatel neodhlásí a znovu nepřihlásí.
2.	Chybějící živý chat
Ačkoliv je projekt připraven na Socket.IO a zpráva je odesílána přes socket, zprávy příjemci zatím nepřichází v reálném čase. Aktuálně je nutné se přihlásit znovu, aby se nová zpráva zobrazila.
Tyto nedostatky plánuji co nejdříve opravit, protože se jedná o zásadní funkcionalitu pro chatovací aplikaci.
________________________________________
Cíl projektu
QuickChat vznikl jako praktická ukázka napojení frontendu a backendu s důrazem na správu uživatelů a zprávy.
Cílem bylo ovládnout základy práce s REST API, MongoDB, autentizací pomocí JWT a Socket.IO.
Zároveň jsem si chtěl vyzkoušet kompletní workflow včetně deploye.
Projekt bude dále rozvíjen – plánované funkce:
•	zobrazení online/offline uživatelů
•	odstranění chyb při refreshi
•	příchozí zprávy v reálném čase
•	vylepšené designové téma a přepínání light/dark režimu
________________________________________
Odkazy
Nasazený frontend na Vercelu:
https://quickchat-frontend-delta.vercel.app/login
GitHub repozitáře:
https://github.com/HonzaKud/quickchat-frontend
https://github.com/HonzaKud/quickchat-backend

