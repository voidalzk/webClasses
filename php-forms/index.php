      <?php
        $a = "";
        $b = "";
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $a = $_POST['a'];
            $b = $_POST['b'];
        }
        ?>

      <!DOCTYPE html>
      <html>

      <head>
          <title>Teste PHP</title>
          <meta charset="utf-8">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
          <style>
            .resposta {
                margin: 15px;
                font-style: italic;
                font-weight: bold;
            }
          </style>
      </head>

      <body>
          <div class="container-fluid">
              <div class="table-responsive">
                  <h1>Somador</h1>
                  <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]) ?>" method="post">
                      <div class="col-sm-10">
                          <input required type="number" name="a" placeholder="Primeiro valor" value="<?= $a; ?>">
                          <input required type="number" name="b" placeholder="Segundo valor" value="<?= $b; ?>">
                          <input type="submit" value="Enviar">
                        </div>
                    </form>
                </div>
                <div class="resposta">
                Soma:<?php echo $a + $b; ?>
                Multiplicação:<?php echo $a * $b; ?>
              </div>
          </div>
      </body>

      </html>
