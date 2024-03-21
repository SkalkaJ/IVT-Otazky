# 6. Stavba PC a konfigurace OS

### a) složení PC

#### Hlavní komponenty
1. **Základní deska *(mother board)*** - obvodová deska, spojuje všechno ostatní
2. **Procesor *(CPU)*** - zpracovává všechny procesy (výpočty)
3. **Grafická karta *(GPU)*** - zpracovává grafický výstup
4. **Operační paměť *(RAM)*** - ukládá nejpoužívanější data, pomáhá rychlejšímu načítání, po restartu se vymaže
5. **Úložiště**
	- **pevný disk *(HDD)*** - fyzický disk z něhož jsou data čteny pomocí mechanického ramene (levnější, zastaralé)
	- **polovodičový disk *(SSD)*** - neobsahuje pohyblivé části, rychlejší
6. **Zdroj napájení *(PSU)***
7. **Skříň *(case)***
8. **Chlazení, monitor, myš, klávesnice**

#### BIOS
- Basic Input/Output System = čip na základní desce, slouží pro přístup a nastavení PC
- obsahuje instrukce pro načtení základního HW, testuje zda je PC funkční
- po nalezení OS mu předá kontrolu nad PC
- poskytuje základní kontrolu nad HW, umožňuje konfiguraci systémového nastavením data, času, hesel atd.

#### OS
- základní program počítače, který umožňuje běh programů a komunikaci s HW

### b) instalace a konfigurace OS
- instalace z internetu/virtual PC

#### Formátování disku
- příprava disku na ukládání dat

1. **Nízkoúrovňové formátování**
	- vytváří na disku sektory, většinou prováděno výrobcem
	- pokud provedeno po použávání disku, všechna data to smaže 

2. **Vysokoúrovňové formátování**
	- rozděluje data do sektorů na disku, vyváří souborové a systémové struktury
	- pokud provedeno po používání disku, vytvoří nové datové struktury a data nebudou přístupná

#### Dělení disku
- disk se rozdělí na více částí, každá je operačním systémem brána jako samostatný celek
- dobré pro oddělení systémových a uživatelských dat
- dobré pro organizaci souboru, ochranu dat
- při manuálním dělení může dojít k naplnění kapacity jedné části a další zůstává nevyužita - nemusí dojít k maximálnímu využití potenciálu

#### RAID
- metoda zabezpeření dat proti slehání pevného disku
- data ukládá na více nezávislých disků
- je více různých úrovní (RAID 0, 1, 2, ...)
- každá úrověň nabízí jinou kombinaci spolehlivosti, dostupnosti, výkonu, kapacity, bezpečnosti, ...

#### Hlavní nastavení OS
- datum a čas, region, jazyk, nastavení displeje, typ klávesnice, síť/připojení

#### Zabezpečení PC
- nastavení silného hesla, firewall (zamezuje neautorizovanou komunikaci), back-up (kopie důležitýchdat), kryptování souborů, antivirus, VPN, ...