# 14. Internetové technologie

**internet** - globální počítačová síť skládající se z propojených sítí používajících TCP/IP protokol, poskytuje informace a možnosti ke komunikaci
**www** - world wide web; informační systém dostupný přes internet, usnadňuje práci s informacemi pomocí hyperlinks, webových prohlížečů atd.
**doména** - unikátní označení počítače nebo počítačové sítě připojené k internetu
**webhosting** - pronájem prostoru pro webové stránky na cizím serveru --> nemusí mít vlastní
**cloud** - servery dostupné přes internet + software a databáze na nich, skladuje data

### Správce domény .cz
- cz.nic, částečné spravují i doménu EU
- registrátor domén = společnost, které registruje/rezervuje domény, musí být akreditována registrátorem top-level domén (.org, .net. .com, ...) nebo registrátorem národních domén (.cz, .us, .uk, ...)
- u nás okolov 50, např. FORPSI, WEDOS, ...; mají smlouvu s CZ.NIC

### HTML
- hlavní struktura a obsah stránky

```html
<html>
	<head>
		<title>název stránky</title>
	</head>
	<body>
		<div>
			<p>text v odstavci</p>
		</div>
	</body>
</html>
```

```html
<h1> Hlavní nadpis </h1>
<p> odstavec </p>
<ul> unordered list </ul>
<br> break (zalomení)
<a href=""> odkaz </a>
```

### CSS
- zjednodušuje HTML kód
- stará se o vizuální podobu stránky a odděluje ji od obsahu (barvy, font, layout, ...)

```css
body{
	backgrounf-color: white;
	color: blask;
	padding: 10px !important;
}
```

### Postup při tvorbě webu
- nápad --> doména + webhosting --> připravit stránku, např. pomocí WordPress nebo HTML + CSS --> údržba

### Technologie k tvorbě webových stránek
- HTML, CSS, JavaScript
- frameworky: např. Angular - pro tvorbu dynamických stránek, Ruby on Rails - technologie na straně severu, je s ní vyroben např. GitHub
- API (Application Programming Interface) - umožňuje vývojářům sdílet funkční části aplikace bez sdílení zdrojového kódu
- na straně klienta: JS (jQuery)
- na straně serveru: JS (Node.js), Python (Django nebo Flask), PHP