<?php

class MinhaClasse {
    function areacirculo($a) {
        return pi() * $a * $a;
    }
}

$minhaClasse = new MinhaClasse();
echo("area do circulo é {$minhaClasse->areacirculo($_GET['a'])}");