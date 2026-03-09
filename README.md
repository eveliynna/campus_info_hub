# Campus Info Hub

## 1. Ce este o resursă (resource) în aplicația ta?
O resursă în aplicația mea este orice pagină, fișier sau informație accesibilă printr-un URI. Exemple: pagina principală, pagina bibliotecii, pagina cantinei, pagina de evenimente sau fișierul JSON cu date despre resursele din campus.

## 2. Dă exemplu de un URI și explică componentele acestuia.
Exemplu de URI: /pages/library.html#schedule

Componente:
- /pages/ = folderul în care se află pagina
- library.html = numele fișierului HTML
- #schedule = fragment identifier care duce direct la secțiunea de program

## 3. Care părți sunt statice și care sunt dinamice?
Părțile statice sunt fișierele HTML și CSS, deoarece conținutul lor este scris direct în pagină.
Părțile dinamice sunt datele încărcate din resources.json cu JavaScript folosind fetch și afișate automat pe home page.

## 4. Este aplicația ta document-centric sau interactive (sau ambele)? De ce?
Aplicația este ambele. Este document-centric pentru că are mai multe pagini HTML informative. Este și interactive pentru că folosește JavaScript pentru a încărca date din JSON și pentru a filtra resursele afișate.