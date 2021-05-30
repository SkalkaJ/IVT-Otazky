# 7. HW počítače I

### a) Druhy počítačů
- **počítač** = zařízení měnící vstupní data na výstupní; ukládá a zpracovává data pomocí programů
- **PC** = personal computer, počítač určený pro 1 uživatel, přenosný
- **jednočipový PC** = integrovaný obvod obsahující kompletní mikropočítač, používaný např. v automobilových motorech, ovladačích, hračkách atd. (internet of things)
- *server* = počítač, který poskytuje informace dalším počítačům (klientům), nabízí služby (webovky atd.)

#### Rozdělení podle rozměru a výkonu
- **superpočítače**
	- nyní nejrychlejší počítače, velmi drahé, prostorově náročné
	- specializované na co nejrychlejší zpracování velkího množství dat
	- využívány pro vědecké simulace, animace, výzkum nukleární energie
- **mainframe**
	- podobný superpočítači
	- podporuje mnoho uživatelů současně, provádí velké množství operací/programů současně
	- využívány pro komerční společnosti - banky, výzkumná centra, ...
- **minipočítače**
	- středně velký počítač, může ho používat až 200 uživatelů současně
	- využívány pro databáze, tauomatizaci, výplaty atd.
	- dnes se už skoro nepoužívá
- **mikropočítače**
	- malý počítač s microprocesorem, dnes už je počítač
	- např. PC, laptop, mobily, server atd.

#### Rozdělení podle využití
- **pro kancelářskou práci** - desktop PC (výkonnější PC na např. animace a grafiku)
- **pro přenos** - mobil, tablet, notebook
- **pro hry** - herní PC, konzole
- **pro poskytování služeb** - servery

.
.


### b) Základní deska (motherboard)

#### Části
1. **procesor *(CPU)*** - zpracovává všechny procesy (výpočty)
2. **sloty na operační paměť (RAM)** - paměť, v níž jsou uloženy běžící programy (včetně operačního systému) a jejich data
3. **grafická karta *(GPU)*** - zpracovává grafický výstup
4. **BIOS** - viz otázka č. 6
5. **CMOS baterie** - napájí BIOS
7. **rozšiřující sloty** - spojují CPU a periférie (=připojené zařízení), vkládají se do nich karty (např. síťová, zvuková, grafická) - nyní běžně integrováno
8. **chipset** - skupina malých obvodů, koordinuje pohyb dat mezi hlavnámi komponenty PC, např. CPU, paměť, mezipaměť, zařízení na slotech
	1. **severní most (north bridge)** = spojuje CPU s RAM
	2. **jižní most (south bridge)** - komunikuje se perifériemi

#### Kabely
- SATA (dříve IDE) - *interní konektor* pro připojení pevných disků
- WGA - velkej modrej - připojení monitoru (přenáší obraz)
- HDMI - černej - také připojení monitoru (přenáší obraz i zvuk)
- Ethernet - kroutí se, aby se znegovalo magnetické pole, které vytváří
- USB (Universal Serial Bus) - starší 2.X (přenáší větší proud), novější 3.X (rychlejší přenos dat) 

### c) Procesor

#### Dělení podle počtu jader
- jednojádrové - nejstarší, mohou provádět jen 1 operaci najednou, velmi pomalé
- dvoujádrové - skoro 2x rychlejší CPU clock, zvládá multitasking
-  ...
-  desetijádrové - už docela rychlé

#### Dělení podle výrobce
- Intel
- AMD

#### Části procesoru
- **řídicí jednotka (řadič)** - zajišťuje součinnost jednotlivých částí procesoru, posílá data skrz systém
- **logická jednotka (ALU)** - provádí nad daty aritmetické a logické operace
- **registry** - malé množství vysokorychlostní paměti, skládající se zde data potřebná pro procesy, např. výsledky výpočtů, používané instrukce, ...
- **mezipaměť (cache)** - vyrovnávací paměť procesoru
- **procesorové hodiny** - synchronizují operace PC

### d) Paměti a grafické karty

#### Vnitřní paměti
- **RAM** - paměť, v níž jsou uloženy běžící programy (včetně operačního systému) a jejich data
- **mezipaměť (cache)**uchovává data a tím následující přístup k těmto datům může být rychlejší
- **ROM** - dnes se už skoro nepoužívá

#### Média na ukládání dat
- **HDD** - fyzický disk z něhož jsou data čteny pomocí mechanického ramene (levnější, zastaralé)
- **SSD** - neobsahuje pohyblivé části, rychlejší
- **flashdrive** - praktické pro malé soubory
- **optické disky** - Blu-ray > DVD > CD - laser z nich čte data
- **floppy disk (disketa)** - fungují jako hard disk, jen s o trochu menší pamětí:))

#### Grafická karta
- vytváří grafický výstup na monitoru, čím výkonnější, tím lepší grafika
- výrobci: Nvidia, AMD, Intel

### e) Pevné disky
- kapacita = velikost úložiště na disku, měřená v GB a TB
- počet otáček - měří rychlost, čím více otáček, tím větší rychlost 
- přístupová doba - měří, jak dlouho trvá načtení 1. znaku
- RAID - viz otázka č. 6