/*
var $d = document;
$d.addEventListener('DOMContentLoaded', function() {
    let out = $d.getElementById('out');
    out.innerText = 'Hello';

 }, false);
 */
import './index.ts';

$(() => {
    $('#out').append('Hello');
});
