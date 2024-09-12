<?php

class MinhaClasse {
    function areaQuadrado($a, $b) {
        return $a * $b;
    }
}

$minhaClasse = new MinhaClasse();
echo("area do Quadrado é {$minhaClasse->areaQuadrado($_GET['a'], $_GET['b'])}");