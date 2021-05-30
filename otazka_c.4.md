# 4. OS Unixového typu

= víceuživatelský multitasking OS s modulovým designem (= dělí systém do menších částí, "modulů", mohou být tvořeny, vyměňovány a upravovány)
- unixová filozofie = autor Ken Thompson, prosazuje minimalistický a modulový software development
- od svých předchůdců se liší tím, že byl jako první přenosný (napsán v C)

### a) virtualizační software
#### VirtualBox
- multiplatoformový, open-source nástroj pro virtualizaci
- **virtualizace** = proces, kdy se vytváří virtuální výpočetní prostředí namísto fyzického, často vytváří virtuální hardware, OS, atd --> jeden PC/server může být rozdělen na několik virtuálních počítačů --> snižuje počet využívaných serveru, spotřebu energie, náklady na infrastrukturu
- zapnout VirtualBox --> nový --> nastavení --> úložiště --> cd ikonka --> cd ikonka napravo --> choose/create a VOD --> vybrat .iso soubor --> run --> install

### b) OS unixového typu
- **základní vlastnosti**: modulový design, unixová filozofie, hierarchický souborový systéém (stromová str.), data ukládá jako "plain text", malé programy, které plní specifické úkoly - jejich propojení použitím "pipe" (output jednoho programu je automaticky používán jako input druhého)
- **výhody**: multitasking (proto využíván ve větších institucích, např. servery), efektivní využití paměti, sjednocený souborový systém (zařízení, programy a data se stávají soubory), vysoce přenosný
- **nevýhody**: ne-přátelské rozhraní pro nové uživatele, nutnost znát a rozumět hlavním vlastnostem, nutnost psát příkazy přesně a kontrolovat je
- **použití**: nejčastěji pro webové servery (multitasking, bezpečnost), databáze, cloud aplikace, zabezpečení cloudu (servery přístupné přes internet)
- unixový souborový systém: nejmenší jednotkou je **soubor** (obsahuje data) - soubory jsou ve **složkách** - složky jsou ve **stromové struktuře**

| Příkaz  | Co to dělá         |
| ------- | ------------------ |
| ls (-l) | list files         |
| cd      | change directory   |
| mkdir   | make directory     |
| clear   | vyčistí cmd line   |
| cp      | kopírování souborů |
| mv      | přesun souborů     |
| rm      | mazání souborů     |

tabulátor (automatické doplnění)

### c) souborové systémy na OS unixového typu

 **filesystem/systém souborů** 
- používá se pro ukládání dat na disk, je to specifický způsob, ve kterém jsou data ukládána a umoňuje např. pojmenovávat soubory či stromovou strukturu
- dříve OS podporovaly jen 1 typ souborového systému, dnes OS jako Unix nebo Linux podporují tzv. virtual file system (VFS) = abstraktní vstva nad souborovými systémy, umožňuje přástup k různým typům souborových systémů
- většina OS má svůj vlastná souborový systém, např. NTFS - Windows (jednoduchá organizace, velké objemy dat), ext(4) - Linux nekompatibilní s Win a MacOS, FAT - kompatibilní se všemi OS, ale zastaralý, HFS+ - MacOS
- **standardní struktura adresářů:**
	![jfn linux project: Linux Directory Structure|400](http://static.thegeekstuff.com/wp-content/uploads/2010/11/filesystem-structure.png)
	- /bin obsahuje základní programy/příkazy OS jako /ls /pwd atd.
	- /boot obsahuje soubory potřebné pro start počítače