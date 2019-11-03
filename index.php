<!DOCTYPE html>
<html lang="de">
<head>
   <meta charset="utf-8">
   <title>classcade</title>
   <meta name="description" content="">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <link href="classcade.min.css" rel="stylesheet" media="screen">
   <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700&display=swap" rel="stylesheet">
</head>
<body class="fadeIn s1">

<?php
  function table($x=''){

    if( !empty() ){

      $r = '<table class="w100">';

        $r.= '<thead>';
          $r.= '<tr style="height: 23px;">
            <td style="width: 25%; height: 23px;">&nbsp;.jc</td>
            <td style="width: 75%; height: 23px;">&nbsp;justify-content:var(--jc)</td>
            </tr>';
        $r.= '</thead>';

        $r.= '<tbody>';
          foreach( $x as $y ){
            $r.= '<tr style="height: 23px;">
              <td style="width:25%;height:23px;">'.$y[0].'</td>
              <td style="width:75%;height:23px;">'.$y[1].'</td>
              </tr>';
          }
        $r.= '</tbody>';

      $r.= '</table>';

      return $r;

    }

  }

  $el = [[ 'align-content'    , 'ac'  ],
         [ 'justify-content'  , 'jc'  ],
         [ 'z-index'          , 'zi'  ]];

  $jc = [[ '.jc'   , 'justify-content:var(--jc)'     ],
         [ '.jcc'  , 'justify-content:center'        ],
         [ '.jcfe' , 'justify-content:flex-end'      ],
         [ '.jcfs' , 'justify-content:flex-start'    ],
         [ '.jcsa' , 'justify-content:space-around'  ],
         [ '.jcsb' , 'justify-content:space-between' ]];
?>

<section id="wiki cc3">
  <?php foreach($el as $x){ ?>
    <div class="disib">
      <h3><?=$x[0]?></h3>
      <?=table($$x[1])?>
    </div>
  <?php } ?>
</section>

<?=table($jc)?>

<script src="https://webgestalter.github.io/manfred/mf.js"></script>
<script language="JavaScript"></script>

</body>
</html>
