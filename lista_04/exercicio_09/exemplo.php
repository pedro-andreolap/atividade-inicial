<?php

class MinhaClasse {
    function ehBissexto($a) {
        $divisivel4 = $a % 4 == 0;
        $divisivel100 = $a % 100 == 0;
        $divisivel400 = $a % 400 == 0;
        return ($divisivel4 && !$divisivel100) || $divisivel400;
    }
}

$minhaClasse = new MinhaClasse();

$resultado = "O ano {$_GET['a']} não eh bissexto";
if ( $minhaClasse->ehBissexto($_GET["a"])){
    $resultado = "O ano {$_GET['a']} eh bissexto";
}

echo($resultado);