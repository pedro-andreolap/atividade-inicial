<?php

class MinhaClasse {
    function buscaMaiorValor($a, $b , $c) {
        return max($a, $b, $c);
    }
}

$minhaClasse = new MinhaClasse();
echo("Maior Valor é {$minhaClasse->buscaMaiorValor($_GET['a'], $_GET['b'], $_GET['c'])}");

