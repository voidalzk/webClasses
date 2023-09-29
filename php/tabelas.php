<?php
// Parametro: string => $txt
// Retorno: string => "<td>$txt</td>"
function create_table_cell($txt){
    return "<td>$txt</td>";
}

// Parametro: vetor => $cells (colunas de uma linha da tabela)
// Retorno: string => "<tr><td>$cells[0]</td><td>$cells[1]</td>...</tr>"
// Deve utilizar a funcao create_table_cell
function create_table_row($cells){
    $row = "<tr>";
    foreach ($cells as $cell) {
        $row .= create_table_cell($cell);
    }
    $row .= "</tr>";
    return $row;
}

// Parametro: matriz => $rows (linhas e celulas da tabela)
// Retorno: string => "<table class='table'><tr><td>$rows[0][0]</td><td>$rows[0][1]</td>...</tr><tr><td>$rows[1][0]</td><td>$rows[1][1]</td>...</tr>...</table>"
// Deve utilizar a funcao create_table_row
function create_table($rows){
    $table = "<table class='table'>";
    foreach ($rows as $row) {
        $table .= create_table_row($row);
    }
    $table .= "</table>";
    return $table;
}

// Parâmetro: inteiro => $n (número de linhas da matriz)
// Retorno: matriz ($n x $n+1) => matriz de potência como no enunciado
function power_matrix($n){
    $matrix = array();
    for ($i = 1; $i <= $n; $i++) {
        $row = array();
        for ($j = 1; $j <= $n + 1; $j++) {
            $row[] = pow($i, $j);
        }
        $matrix[] = $row;
    }
    return $matrix;
}
?>
<!DOCTYPE html>
<html>
<head>
  <title>Teste PHP</title>
  <meta charset="utf-8">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
</head>
<body>
<div class="container">
  <h1>Tabela de potências</h1>
  <?php
    $n = 10;
    $m = power_matrix($n);
    echo create_table($m);
  ?>
</div>
</body>
</html>