---
path: "/page2"
date: "2017-11-03"
title: "Vectoren"
---

#2-dimentionale vector

Deze vector heeft maar 2 coördinaten: x & y

##constructor

```javascript
export default class Vector2
{
    constructor(x, y)
    {
        this.x = Number(x) || 0
        this.y = Number(y) || 0
    }
    ...
}
```

##Basis operaties

De volgende functies worden allemaal aangemaakt binnen de klasse `Vector2`

###add()

Deze functie telt de coördinaten van twee vectoren bij elkaar op.

```
add(v){
        this.x += v.x
        this.y += v.y
    }
```
###sub()

Deze functie is ongeveer hetzelfde opgesteld als de add() functie alleen wordt hier de tweede vector van de eerste afgetrokken in plaats van opgeteld.

```
sub(v){
        this.x -= v.x
        this.y -= v.y
    }
```
###scalar()

scalar is een functie die er voor zorgt dat een vector vermenigvuldigd wordt met een meegegeven getal. In dit geval is dit getal dus de waarde die in 'a' zit.

```
scalar(a){
        this.x *= a
        this.y *= a
    }
```

#Multi-dimentionale vectoren

Deze vectoren werken ongeveer op dezelfde manier als de 2-dimentionale vectoren. Het enige verschil is dat de berekeningen soms wat ingewikkelder kunnen zijn.
Zo heb je dus in de plaats van 2 vectoren die je bij elkaar opteld bijvoorbeeld 3 of 4 vectoren. 


