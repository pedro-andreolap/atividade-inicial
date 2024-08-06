<?php

class MinhaClasse {
    function ehpar($a) {
        return ! ($a % 2) ;
    }
}

$minhaClasse = new MinhaClasse();
$resultado = "o numero e impar";
if ( $minhaClasse->ehpar($_GET["a"])){
    $resultado = "o numero e par";
}
echo($resultado);