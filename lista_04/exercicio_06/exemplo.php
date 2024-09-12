<?php

class MinhaClasse {
    function arearetangulo($a, $b) {
        return ($a * $b) /2;
    }
}

$minhaClasse = new MinhaClasse();
echo("area do retangulo é {$minhaClasse->arearetangulo($_GET['a'], $_GET['b'])}");