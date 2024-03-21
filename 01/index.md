# 1. Základní pojmy informatiky

### a) základní pojmy
*vysvětli pojem informatika:*
- informatika není přesně definovaná disciplína, ale volně řečeno se informatika zabývá přenosem a zpracováním informace
- zkoumá počítačové návrhy (designy), programování, zpracovávání informací, algoritmické (sada kroků, které definují provedení úkolu) řešení problémů a vlastní algoritmické procesy
*vysvětli pojem bit, byte, vysvětli rozdíl mezi MiB a MB:*
- **bit** je základní a zároveň nejmenší jednotkou dat, značí se malým písmenem *b*, nabývá 2 hodnot a to 1 a 0 - pravda a nepravda - ano, ne
- **byte** je 8 bitů, značí se velkým B, používá se jako základní jednotka kapacity počítačové paměti a objemu dat, byte označuje nejmenší objem dat, se kterým dokáže počítač najednou pracovat (fun fact: pojem zavedl v 50. letech 19. století informatik z IBM Werner Bushholz a pochází ze slova bite - sousto)
	![[Pasted image 20210310194754.png|400]]
	![[Pasted image 20210310210242.png|600]]
*vysvětli pojmy soubor a adresář/složka (vysvětli proč se používají adresáře):*
- **soubor** je nějaká množina dat se společnými vlastnostmi, je pojmenován a uložen na disku, lze s ním pracovat nástroji operačního systému jako s jedním celkem
- **adresář** sdružuje na disku dokumenty (soubory) a další složky (podadresáře) a slouží k tomu, aby si je uživatel mohl logicky uspořádat
*co to je operační systém, co zajišťuje:*
- **operační systém** je software, který řídí chod počítače, kontroluje rozhraní mezi strojem a vnějším světem, chrání počítač a data v něm uložená před neoprávněným přístupem, umožňuje uživateli spouštět různé programy, koordinuje interní funkce, ...

### b) architektura počítače
*popiš Von Neumannovou architekturu počítače:*
- navržen roku 1945 Johnem von Neumannem, s jistými výjimkami je zachován dodnes
- Operační paměť : slouží k uchování zpracovávaného programu, zpracovávaných dat a výsledků výpočtu
-  *ALU - Arithmetic-logic Unit (aritmetickologická jednotka)*: jednotka provádějící veškeré aritmetické výpočty a logické operace. Obsahuje sčítačky, násobičky (pro aritmetické výpočty) a komparátory (pro porovnávání)
-  *Řadič*: řídící jednotka, která řídí činnost všech částí počítače. Toto řízení je prováděno pomocí **řídících signálů**, které jsou zasílány jednotlivým modulům. Reakce na řídící signály, stavy jednotlivých modulů jsou naopak zasílany zpět řadiči pomocí **stavových hlášení**
-   *Vstupní zařízení*: zařízení určená pro vstup programu a dat.
-   *Výstupní zařízení*: zařízení určená pro výstup výsledků, které program zpracoval
- ![](https://www.fi.muni.cz/usr/pelikan/ARCHIT/PICTURES/OBECNE/VNEUMAN.GIF)
*vysvětli rozdíl mezi Von Neumannovou a Harvardskou architekturou:*
- *Harvardská architetura* byla navržena v 30. letech 20. století při vývoji počítače HARVARD MARK 1 
- má na rozdíl od von Neumanovy architektury oddělený paměťový prostor pro data a pro program
![../_images/harvard_arch.png|550](http://michaelkuty.github.io/ssz-ai-hk-3/_images/harvard_arch.png)
- paměť je rozdělena na paměť programu a dvě paměti dat tak, aby současně mohly dva operandy vstupovat do ALU,
- součin dvou operandů v jednom instrukčním cyklu provede hardwarová násobička a výsledek součinu je přičten k akumulátoru (operace typu MAC - Multiply And Accumulate),
- je zvýšen počet samostatných datových a adresových sběrnic a přímý přístup do paměti je prováděn vícenásobným kanálem DMA (Direct Memory Access),
- řízení jádra procesoru je odděleno od řízení vstupních a výstupních jednotek a architektura typu 1X a 2X znamená, že jedna instrukce je provedena v jednom nebo ve dvou hodinových cyklech (taktech).
### c) ukládání dat a převody
*jakým způsobem počítač běžně ukládá celá čísla, znaky:*
- informace v počítačích jsou zakódovány jako posloupnosti **bitů** (zkrácení slova *binary digit*)
*jak a s jakým datovým typem je spojena tabulka ASCII:*
- váže se s textovým řetězcem
- ASCII tabulka je norma, jak se mají vyjádřit jednotlivé písmena abecedy, čísla a další znaky
- 7 bit
*převeď číslo 206 z desítkové do dvojkové soustavy:*
	![[159303377_269374668095344_4974192035698965784_n.jpg|350]]
*převeď číslo 11100011101010 z dvojkové soustavy do šestnáctkové:*
	![[159303377_269374668095344_4974192035698965784_n2.jpg|350]]
*vysvětli rozdíl mezi poziční a nepoziční číselnou soustavou, uveď příklady:*
- hodnota každé číslice je dána její pozicí v sekvenci symbolů, každá číslice má touto pozicí dánu svou váhu pro výpočet celkové hodnoty čísla, zpravidla zprava doleva se vzrůstající váhou
- binární (dvojková), dekadická (desítková), hexadecimální (šestnáctková)