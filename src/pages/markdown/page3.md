---
path: "/page3"
date: "2017-11-07"
title: "Matrices"
---

#2-dimentionale matrix

Een 2-dimentionale is een ander woord voor een 2x2 matrix. Dit wil zeggen dat de matrix bestaat uit 4 waarden.

##constructor

```javascript
export default class Matrix2
{
    constructor(items){
        this.items = items || [
            0,0,
            0,0,
        ]
    }
    ...
}
```

##matrix bewerkingen

De volgende functies worden allemaal aangemaakt binnen de klasse `Matrix2`

###add()

De add() functie zorgt er net als bij de vectoren voor dat 2 matricen bij elkaar kunnen worden opgeteld om tot 1 matrix te komen.

```javascript
add(b)
    {
        const a = this.items
        this.items = [
            a[0] + b[0], a[1] + b[1],
            a[2] + b[2], a[3] + b[3],
        ]
    }
```

###sub()

Deze functie doet het omgekeerde van de add() functie, namelijk een tweede matrix van de originele aftrekken om tot 1 matrix te komen.

```javascript
sub(m)
    {
        const a = this.items
        this.items = [
            a[0] - b[0], a[1] - b[1],
            a[2] - b[2], a[3] - b[3],
        ]
    }
```

###mul()

In deze functie is het de bedoeling dat 2 matrices met elkaar worden vermenigvuldigd. Dit is al een iets lastigere bewerking dan de vorige.

`PAS OP:` Dit kan enkel wanneer het aantal kollommen van de ene matrix overeenkomt met het aantal rijen van de andere matrix en omgekeerd. 

Als je wilt weten hoe dit in zijn werk gaat kun je beter eens googelen op hoe je matrixen moet vermenigvuldigen. In onderstaande code vind je alvast de bewerkingen . 

```javascript
mul(b)
    {
        const a = this. items
        const c = []
        c[0] = a[0] * b[0] + a[1] * b[2]
        c[1] = a[0] * b[1] + a[1] * b[3]
        c[2] = a[2] * b[0] + a[3] * b[2]
        c[3] = a[2] * b[1] + a[3] * b[3]

        this.items = c

    }
```

#Multi-dimentionale matrix

Dit is een matrix waarbij de inhoud van de matrix groter is dan 2x2. 
De bewerkingen gebeuren ook hier op dezelfde manier als bij de 2-dimentionale matrix maar dan dus met grotere matrices.

Let wel op dat als je matrices wilt optrekken of aftrekken deze matrices dezelfde grote moeten hebben (aantal rijen en kollomen zijn gelijk).

Ook bij het vermenigvuldigen geldt dezelfde regel als hierboven vermeld, namelijk dat het aant kollommen van de ene matrix moet overeenkomen met het aantal rijen van de andere en omgekeerd. 

De bewerkingen van multi-dimentionale matrices zijn vanzelfsprekend ook weer complexer dan die van 2-dimentionale matrices. 

Hieronder nog even een voorbeeld van het optelen van twee 4x4 matrices:

```javascript
add(b)
    {
        const a = this.items
        this.items = [
            a[0] + b[0], a[1] + b[1], a[2] + b[2], a[3] + b[3],
            a[4] + b[4], a[5] + b[5], a[6] + b[6], a[7] + b[7],
            a[8] + b[8], a[9] + b[9], a[10] + b[10], a[11] + b[11],
            a[12] + b[12], a[13] + b[13], a[14] + b[14], a[15] + b[15],
        ]
    }
```
