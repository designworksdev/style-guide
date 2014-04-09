<?php

require_once 'php-class.php';
require_once 'php-functions.php';

$instance = new designworks\Thing();

if (true) {
    $result = foo(array( 'one', 'two', 'three' => 3 ));

    // Always have braces even if not needed
    if (is_string($result)) {
        echo 'yes';
    }
}
