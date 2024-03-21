# 12. Počítačové sítě

### 1) Hlavní druhy sítí
#### Podle velikosti
- **LAN** = local area network, skupina počítačů spojená na malém prostoru např. v jedné budově/kanceláři, použivá kabely, levné, rychlé, bezpečné
- **PAN** = personal area network, zařizovaná jedním člověkem, rozsah cca 10m, propojuje např. laptop, mobil, sluchátka, tiskárnu, atd.
- **MAN** = metropolitan area network, pokrývá větší oblasti, spojuje více LAN, používána mezi bankami, rezervace letenek, v armádě, ...
- **WAN** = pokrývá velká území (státy, kontinenty) spojuje MAN a LAN; internet, může být veřejná nebo soukromá, užívaná vládou, školstvím, byznys

#### Podle topologie
1. **Sběrnicová (BUS)** = jeden souvislý kabel, ostatní zařízení se připojují pomocí spojek/odboček; jednoduché, levné, pomalé, problém = crash
	![|200](https://upload.wikimedia.org/wikipedia/commons/4/4d/NetworkTopology-Bus.png)
2. **Kruhová (ring)** = stanice navzájem propojeny, nevznikají kolize, levné, zhroucení uzlu = crash
	![[Pasted image 20210527112002.png|200]]
3. **Hvězdicová (star)** = skládá se ze samostatných kabelů vedoucí k HUBu/switchi, porušení jednoho zařízení neovlivní fungování, vyšší spotřeba kabelů
	**HUB** = rozbočovač, umožňuje větvení sítě, data kopíruje na všechny porty, nástupce switch - data posílá jen na konkrétní porty
	![[Pasted image 20210527112023.png|200]]
4. **Stromová (tree)** = složena z několika hvězdicových propojených HUBy/switchi, používaná ve velkých firmách
	![|200](https://upload.wikimedia.org/wikipedia/commons/a/a5/NetworkTopology-Tree.png)
5. **Síťová (mesh)** = každé zařízení je propojeno s každým, velká spolehlivost, spíše bezdrátové
	![[Pasted image 20210527111935.png|200]]

### Podle vzájemného vztahu stanic (uzlů)
1. **Peer-to-peer (P2P)**
	- všechny PC (uzly) si jsou rovny, někdy také "klient-klient"
	- každá stanice si může vyčlenit prostředek pro sdílení (tiskárnu, HDD, ...)
	- nelze centrálně spravovat; sdílení souborů v OS a na internetu, ...

2. **Klient-server**
	- jeden nebo více PC jsou nadřezeny ostatním klientům
	- server poskytuje služby klientům, mají serverový OS

3. **Model ISO/OSI**
	- počáteční sítě byly nekompatibilní, snaha o jednotný standard --> ISO (International Standard Organisation) vytvořili OSI (Open System Interconnection)
	- původně určeno pro WAN, ale funguje i pro LAN
	- 7 vrstev - každá vstva komunikuje se sousedními
	- soustředí se na spolehlivé služby, spolehlivost přenosu až do komunikační sítě --> musela být složitá, všechny vrstvy modelu zaměstnané
	
| vrstva      | funkce                                                                                                                                                                                                                             |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| aplikační   | tvoří rozhraní mezi programem a komunikačním systémem, např. HTTP, DNS, ...                                                                                                                                                        |
| prezentační | převádí formát dat do univerzální podoby, zajišťujezpůsob kódování, komprimace, kryptografie, ...                                                                                                                                  |
| relační     | navazuje relace mezi stanicemi, zajišťuje práva, hesla, ...                                                                                                                                                                        |
| transportní | zajišťuje přenos dat, přijímá je z relační vrstvy a rozkládá na pakety, případě chyby přenosu zajišťuje opětovné sestavení vstvy                                                                                                   |
| síťová      | zajišťuje adresování a směrování dat v síti od zdroje k cíli <br> přenosová cesta se buď dynamicky mění při průchodu packetů (datagramová služba - nespojová) nebo se cesta vytvoří na začátku spojení (spojově oriantovaná cesta) |
| linková     | zajišťuje přenos dat mezi propojenými stanicemi, vytváří rámce, které zabezpečují data proti chybám, poskytuje synchronizaci pro fyzickou vstvu                                                                                    |
| fyzická     | přenáší jednotlivé bity komunikačním kanálem, spojení může být dvoubodé - sériová linka nebo mnohobodé - ethernet                                                                                                                  |

4. **TCP/IP**
	- vychází z ISO/OSI, původně vznikl pro komunikaci minsterstev v USA, dnes součástí všech OS (původně pro Unix), využíván ke komunikaci na internetu
	- nezávislý na přenosovém médiu, určen pro WAN, Lan, sériové linky, kabely, optické sítě, ...
	- má 4 vrstvy - aplikační (aplikační + prezentační + relační), transportní, síťová, vrstva síťového rozhraní (linková + fyzická)
	- spolehlivost je problémem koncových uživatelů --> řešeno až na transportní vrstvě, méně spolehlivý, ale rychlejší a jednodušší

**Síťový port** = speciální číslo (0 až 65535), které slouží v počítačových sítích při komunikaci pomocí protokolů TCP a UDP k rozlišení aplikace v rámci počítače
**Mac adresa** = fyzická adresa, jednoznačný identifikátor síťového zařízení, přiřazován hned po výrobě
**IP adresa** = jednozančný identifikátor síťového rozhraní v počítačové síti, které používá IP protokol
**DHCP** = protokol pro automatickou konfiguraci PC připojených do sítě, přiděluje IP adresu, masku, ...
**DNS** = Domain Name System - převádí doménová jména na IP adresy a zpět
**Hub** = vše, co přijde na port, pošle na všechny ostatní porty (i když to pro ně není určené), nejjednodušší, nejlevnější, rychlé - v dnešní době nahrazovány switchi
**Switch** = vá, jaký počítač je připojen na jakém portu --> posílá informace síleně a ne všem; rychlejší
**NAT** = Network Adress Translation, zabraňuje komunikaci ostatních zařízení přes internet s lokálním PC
**Router** = umí vše, co switch + DHCP + NAT, nejsložitější, bezpečný

### 2) Zabezpečení
**Bezpečné heslo** = dostatečně dlouhé (alespoň 8 znaků), kombinace velkých a malých písmen, čísel, symbolů, častá změna hesel, vždy se odhlásit, nepoužívat jednoduchá hesla jako "qwerty", "password", "123456789" atd., nepoužívat samostatné slovo
**Firewall** = zařízení síťové bezpečnosti, monitoruje příchozí a odchozí data, povoluje či blokuje příchozí data podle určitých pravidel; bariéra před hackery, malwarem atd.
**Antivirus** = software, který chrání PC před viry, malwarem, např. Avast, ESET, McAfee
**Aktualizovaný OS** - chyby v OS jsou využívány hackery