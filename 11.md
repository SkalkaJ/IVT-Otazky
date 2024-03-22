# 11. Objektově orientované a událostmi řízené programování

= programovací paradigma, kde kód je přidružen k datům (metody jsou zapouzdřeny v objektech), což umožňuje snadnější přenos kódu mezi různými projekty (abstrakce a zapouzdření)

### Základní pojmy
#### Objekt (object)
- objekt je koncepčně ucelená jednotka daná těmito součástmi:
	- vnitřní stav (vlastnosti) - soubor proměnných, tzv. **atributy** - mohou to být i další objekty
	- vnitřní chování (schopnosti) - soubor procedur, tzv. **metody**

#### Třída (class)
- představuje skupinu objektů, které nesou stejné vlastnosti a schopnosti
- "továrna" na objekty (instance)
- zahrnuje předpis/postup pro tvorbu objektů (instancí), které pak budou mít stejný druh vlastností a schopností

### Instance třídy 
- konkrétní objekt - jeden konkrétní jedinec z příslušné třídy

### Výhody
- **DRY** (Don't Repeat Yourself) - důraz na znovupoužitelnost
- jednodušší oprava
- spíše z pohledu programátora - objekt často odpovídá věci z reálného světa 

1. *K čemu slouží programovací jazyk?*
- programovací jazyk je prostředek pro zápis algoritmů, jež mohou být provedeny na počítači. Zápis algoritmu ve zvoleném programovacím jazyce se nazývá program.
- programovací jazyk je komunikačním nástrojem mezi programátorem, který v programovacím jazyce formuluje postup řešení daného problému, a počítačem, který program interpretuje technickými prostředky. Programovací jazyk je vlastně soubor pravidel pro zápis algoritmu, odborně řečeno se jedná o formální jazyk.
2. *Popiš rozdíl mezi objektově orientovaným a procedurálním programovacím jazykem*
- procedurální paradigma řeší problémy pomocí procedur, což jsou kolekce kódu, které běží v určitém pořadí
- OOP se zaměřuje na reprezentaci problémů pomocí reálných objektů a jejich chování
3. *Uveďte příklady OOP programovacích jazyků*
- Java, , Python - OOP i proced., C++ - OOP i proced.
4. *Vysvětli pojem třída a instance třídy*
 viz výše
5. *Otevřete program „hrdina.py“ ve vhodném vývojovém prostředí či editoru.*
6. *Popište jednotlivé části programu otevřeného programu, zaměřte se na jeho OOP konstrukce*
7. *Vysvětlete pojem událostmi řízené programování – ozřejměte pojem událost a obsluha události*
- tok programu řízen událostmi
- události nastávají obvykle určitou uživatelskou akcí - klik či pohyb myši, stisk tlačítka...
8. *V programu „vektor.py“ popište speciální metody třídy*