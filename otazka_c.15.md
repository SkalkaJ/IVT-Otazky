# 15. Databázové systémy

### Historie
- předchůdcem byly papírové kartotéky - operace s nimi prováděl člověk fyzicky
- poté pomáhaly se zpracováním dat stroje - děrné štítky a elektromechanické počítače
- v roce 1960 vznikla první verze jazyku pro práci s databázemi **COBOL**
- začaly vznikat první **síťové** SŘBD (systém řízení báze dat = rozhraní mezi aplikačními programy a uloženými daty) na sálových počítačích
- prvním průkopníkem databází byl *Charles Bachman*
- v roce 1971 vydal výbor **Database Task Group** (DBTG - měl za úkol vytvořit koncepci databázových systémů) zprávu *The DBTG April 1971 Report*, kde se objevily pojmy jako **schéma databáze**, **jazyk pro definici schématu**, **subschéma** a podobně, byla zde popsána celá architektura síťového databázového systému
- 1970 *Edgar F. Codda* první **relační databáze**, které pohlížejí na data jako na tabulky
- 1974 se vyvíjí první verze dotazovacího jazyka **SQL** (Structured Query Language)
- v 90. letech 20. století - **objektově** orientované databáze
- vznikla **objektově-relační** technologie

### Databázové modely

#### 1. Hierarchický model dat
- data jsou uspořádána ve stromové struktuře, má nedostatky

![Databáze](https://lh3.googleusercontent.com/proxy/qZRBZaYhxyW6dfsk_Bz0XfYxuQy-_vKykx8Z2PxH8T19bL9uXMuxrlzDA0Z0C-iWAkkIHZzEsvTwXXMWOOpLFtWdRgcgmg)
 
 #### 2. Síťový model dat
- na rozdíl od hierarchického databázového modelu poskytuje navíc vztahy více ku více, tedy jedna entita mohla mít více otců
- tato datová koncepce však byla v roce 1970 překonána relační koncepcí databáze

#### 3. Relační model dat
- ukládá vzájemně propojené datové body a poskytuje k nim přístup
- je založen na relačním modelu - intuitivním, přímočarém způsobu vyjádření dat v tabulkách
- v relační databázi je každý řádek v tabulce záznam s jedinečným ID nazvaným klíč
- sloupce tabulky obsahují atributy dat a každý záznam má obvykle hodnotu pro každý atribut, což usnadňuje navázání vztahů mezi datovými body

![Databáze](https://lh3.googleusercontent.com/proxy/WRmr3chFNFvRXZR5MDzG59F8zGjdb0LB7AZRTzNisw-WuabhEg25XwEFwGb4bqs2pL1xQVbCCBKRM70dnOuncNrD52t_tA)

### 3 Tier architecture

![[Pasted image 20210519175141.png|500]]

### SQL

= strukturovaný **dotazovací** jazyk
- deklarativní neboli dotazovací programování je založeno na myšlence programování aplikací pomocí definic co se má udělat a ne jak se to má udělat
	- řekneme např. příkaz *"Vrať mi 10 uživatelů s nejvyšším hodnocením."*
	- jazyk takový dotaz pochopí, rozloží si ho na nějaké své instrukce a tak jej zpracuje
	- nám poté opravdu vrátí výsledek, aniž bychom tušili, jak k němu došel
- SQL - historicky SEQUEL (Structured English Query Language) společnosti IBM
- Dnes je standardem komunikace s databázemi i když to v moderních OOP jazycích může činit problémy a existují modernější alternativy

### SQLite

- jednoduchý SŘBD komunikující pomocí SQL
- na rozdíl od velkých databází, které běží jako služba, je SQLite pouze malá knihovna nástrojů, kterou mají již některé jazyky zabudovanou v sobě
- velmi odlehčená a trochu upravená verze SQL

### Otázky

*Popište základní strukturu databázového systému; dejte do vztahu vlastní databázi, aplikační software a systém řízení databáze (SŘDB).*

*Uveďte některé současné, běžně užívané, systémy řízení databáze*
- MySQL, SQLite, Oracle

*Popište strukturu tabulky vytvořenou pomocí následujícího SQL příkazu:*
```SQL
CREATE TABLE adresar (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	jmeno TEXT NOT NULL,
	prijmeni TEXT NOT NULL,
	telefon TEXT,
	ulice CHAR(80),
	mesto CHAR(80)
);
```
- vytvoří to tabulku "adresar" a nastaví:
	-  automatické definování "id" jako celé číslo (integer), `PRIMARY KEY` určuje, že tato řádka bude unikátní klíč na identifikaci
	-  dále přidáme sloupec "jmeno", které nesmí být prázdné (`NOT NULL`)
	-  "prijmeni" to samé
	-  "telefon" bude mít vstup text, ale je to nepovinný údaj
	-  "ulice" má omezen počet znaků na 80
	-  "mesto" také

*V SŘDB SQLite3 otevřete přiložený soubor *DATABAZE.DB*, který obsahuje naplněnou tabulku, která odpovídá struktuře z předchozího bodu.
Spusťte *sqlite3.exe* a na výzvu systému otevřete soubor pomocí příkazu.*
```SQL
.open DATABAZE.DB
```

Úvodní příkazy (nepovinné):
```SQL
.headers on  
.mode column  
.width 20 20 20
```

Základní příkazy pro orientaci:
```SQL
.tables   - ukáže tabulky v databázi
.schema   - ukáže jak byla databáze vytvořena
.exit     - ukončí SQLite
```

Nějaké poznatky zmínkyhodné při maturitě:
- při každém příkazu používáme na konci řádky středník (;)
- všechny příkazy zní velmi podobně angličtině --> vcelku pohodlná syntaxe
- syntaxi píšeme velkými písmeny - to nemusíme dělat, ale je to takovým zvykem oddělovat keywords od názvů
- 

*Vytvoř a popiš dotaz v SQL, který vypíše obsah celé tabulky*

```SQL
SELECT [název sloupce], [název dalšího sloupce] FROM [název tabulky];   - vybere (vypíše) dané sloupce z tabulky
SELECT * FROM [název tabulky];   - vybere všechny sloupce = celou tabulku (! používat pouze při orientaci v tabulkách, pan učitel to nemá moc rád)
```

*Vytvoř a popiš dotaz v SQL, který vybere pouze jméno, příjmení a telefon z věty id číslo 3*

 ```SQL
SELECT jmeno, prijmeni, telefon from adresar WHERE id=3; - vybere podle nějaké podmínky
 ```

*Vytvoř a popiš dotaz v SQL, který do uvedené tabulky přidá novou větu*
```SQL 
INSERT INTO [název tabulky] ([název sloupce], [další název sloupce]) VALUES ([první hodnota], [druhá hodnota]);
 - tomu se říká, že vkládáme větu do tabulky
```

*Vytvoř a popiš dotaz v SQL, který změní  v tabulce u věty s id číslo 1 telefonní číslo na +420 603 604 777*

```SQL
UPDATE [tabulka] SET [sloupec] WHERE [podmínka (většinou id=něco)];
```

*Vyjmenuj některé aplikace, které využívají databázových systémů*
bakaláři, cbvk.cz (knihovna), všechny sociální sítě, ... v podstatě všechny služby či webové stránky, které pracují s daty

Souhrn příkazů:
```SQL
SELECT [] FROM [] ORDER BY [sloupec]; - seřadí
SELECT MAX([sloupec])/MIN([sloupec]) FROM [] - vybere řádek s maximální/minimální hodnotou podle daného sloupce
```