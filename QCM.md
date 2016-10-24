<?php

###Test de 50 questions:



1. Que vaut l'expression booléenne suivante :

+ true && (false || ($value && true))

a. faux si la variable $value vaut vrai
b. faux si la variable $value ne vaut pas vrai
c. vrai si la variable $value vaut vrai
d. vrai si la variable $value vaut faux
e. une erreur



2. À partir du code JavaScript suivant :

<pre>
var data = [[ 10, 11, 12, 13, 14 ],
            [ 15, 16, 17, 18, 19 ]];
</pre>
Comment faire pour afficher "15" et "18" dans la console du navigateur ?
Veuillez choisir une réponse :
a. console.log(data[4][1], data[1][3]);
b. console.log(data[1][0], data[1][3]);
c. console.log(data[1][0] data[1][3]);
d. console.write(data[0][3]);
e. console.log(data[1][3]);
f. aucune de ces réponses

3. Que signifie MVC?

a Modele Vue Controlleur
b Modeling Viewer Control
c Maisons des Vieux Cons
d Modele Vue Composant


4. Que fais le code suivant:
<?php
$pizza  = "piece1 piece2 piece3 piece4 piece5 piece6";
$pieces = explode(" ", $pizza);
exit;
echo $pieces[1];

b Elle affiche piece 1
b elle affiche piece1 et piece2
a Elle affiche piece 2
c Elle affiche " " piece 1
d Elle affiche une erreur
e. ELle afficher une page blanche


5. Quels sont les fonctions en PHP por transformer un tableau en chaine de caractères?

a implode()
b explode()
c join()
d array_chunk()
e array_column()


6. Soit le code suivant:

class A{
  public $attribut;
  public $attributTwo;
  public $attributThree;
}

a = new A();
b = new A();
a.attribut = "Je suis initialisé";
b.attribut = "Je suis une autre initialisation";
echo a.attribut;

1 Cela me sort une erreur
2 Cela m'affiche "Je suis initialisé"
3 Cela m'affiche "Je suis une autre initialisation"
4 Cela me sort a


7. Quel sont les différences entre Git et Github?

+ Git est un language pas Github
+ Git est un protocole pas Github
+ Github est un social coding
+ Git est du versionning de n'importe quel fichier



8. Que sort le code suivant:

```
  $data = "foo:*:1023:1000::/home/foo:/bin/sh";
  list($user, $pass, $uid, $gid, $gecos, $home, $shell) = explode(":", $data)
  echo $user;
```

a foo
b *
c une erreur
d rien




9. Est-il possible en Programmation Orientée Objet d'instancier une classe B qui hérite d'une classe abstraite A et qui implémente une partie seulement des méthodes abstraites de cette classe A ?
Veuillez choisir une réponse :
a. Oui
b. Non


10. Quel principe de Programmation Orientée Objet permet de protéger les données du code extérieur ?
Veuillez choisir une réponse :
a. La surcharge
b. L'héritage
c. L'encapsulation
d. L'abstraction




11. À partir du code PHP suivant :
<pre>
class Shape
{
  private $color;

  public function setColor($color)
  {
    $this->color = $color;
  }
}
class Rectangle extends Shape
{
  public function draw()
  {
    echo "Je suis un rectangle de couleur ".$this->color;
  }
}
</pre>
Quelle est l'affirmation exacte ?

Veuillez choisir une réponse :
a. La classe Rectangle ne peut pas accéder à la propriété $color car elle n'en hérite pas, il faudrait que la classe Shape implémente une méthode getColor() ou que la propriété soit protected
b. La classe Rectangle ne peut pas accéder à la propriété $color car elle n'en hérite pas, il faudrait qu'elle implémente sa propre propriété $color
c. La classe Rectangle peut accéder à la propriété $color puisqu'elle hérite de la classe Shape


12. Un élément qui aurait la propriété CSS suivante { padding: 20px 5px 15px } aura Veuillez choisir une réponse :
a. Un padding en haut et en bas de 20px, un padding à droite de 15 px, un padding à gauche de 5px
b. Un padding en haut et en bas de 20px, un padding à gauche de 15 px, un padding à droite de 5px
c. Un padding en haut de 20px, un padding à gauche et à droite de 5px, un padding en bas de 15px
d. Un padding en haut de 20px, un padding à droite de 5px, un padding à gauche de 15px


13. Quel moyen en Programmation Orientée Objet permet de gérer les erreurs potentielles d'un code ?
Veuillez choisir une réponse :
a. Les exceptions, le code s'écrit normalement dans un bloc try, et un ou plusieurs blocs catch permettent de gérer les erreurs
b. Les namespaces, cela évite qu'une classe puisse être appelée par n'importe qui
c. L'encapsulation, les données sont protégées par du code qui en contrôle l'accès


14. Quels formats de sérialisation permettent de dialoguer entre deux machines via le protocole HTTP ?
Veuillez choisir au moins une réponse :
a. XML
b. SQL
c. JSON
d. CSV



15. À partir du code HTML suivant :

<pre>
<ul>
  <li>Lorem</li>
  <li class="even">Ipsum</li>
  <li>Dolor</li>
  <li class="even">Sit</li>
  <li>Amet</li>
</ul>
</pre>
Que va afficher le code JavaScript suivant (avec la librairie jQuery) :

<pre>console.log($('ol li.even').length);</pre>
Veuillez choisir une réponse :
a. "0" car jQuery ne trouve rien avec ce sélecteur
b. "1" car jQuery trouve la première balise HTML li ayant la classe "even"
c. "2" car jQuery trouve toutes les balises HTML li ayant la classe "even"
d. "4" car jQuery trouve toutes les balises HTML li


16. Un élément qui aurait les propriétés CSS suivantes { position: absolute, right: 40px } sera :
Veuillez choisir une réponse :
a. Positionné à 40px du bord droit du body
b. Positionné à 40px du bord droit de son élément parent
c. Positionné à 40px du bord gauche du body
d. Positionné à 40px du bord droit de son plus proche élément parent positionné

17. Quelles sont les fonctions d'aggrégation existantes en SQL ?
Veuillez choisir une réponse :
a. AVERAGE(), COUNT(), MAX(), MIN(), SUM()
b. AVG(), MAX(), MIN(), SUM()
c. AVG(), COUNT(), MAX(), MIN(), SUM()
d. AVERAGE(), MAX(), MIN(), SUM()


18. Pour positionner un arrière plan centré à droite, il faut écrire la propriété CSS :
Veuillez choisir une réponse :
a. background-position: right;
b. background-position: right center;
c. background: center right;
d. background-position: middle right;


19. Le sélecteur CSS section article:nth-child(2) est :
Veuillez choisir une réponse :
a. Un pseudo-élément attaché au deuxième article de chaque section
b. Une pseudo-classe qui sélectionne n'importe quel deuxième enfant de chaque section si c'est un article
c. Une pseudo-classe qui sélectionne n'importe quel deuxième enfant d'un article de chaque section
d. Une pseudo-classe qui sélectionne n'importe quel deuxième enfant de chaque section


20. Pourquoi la classe PHP ci-dessous est invalide :

class Animal
{
  private $category;

  abstract public function isWild();

  function setCategory($category)
  {
    $this->category = $category;
  }
}
Veuillez choisir une réponse :
a. Parce que la classe n'a pas de constructeur
b. Parce que la méthode setCategory() n'est pas déclarée publique
c. Parce que la classe devrait être abstraite
d. Parce que la méthode setCategory() n'est pas déclarée abstraite



21. À partir du code HTML suivant :

```
<pre>
<form action="search.php">
  <label for="firstName">Prénom :</label>
  <input id="firstName" name="first-name" type="text">
  <input type="submit" value="Rechercher">
</form>
</pre>
```

Comment faire dans le fichier search.php pour récupérer le prénom qui a été saisi ?

Veuillez choisir une réponse :
+ $firstName = $_POST['firstName'];
+ $firstName = $_POST['first-name'];
+ $firstName = $_GET['firstName'];
+ $firstName = $_GET['first-name'];



22. Quels sont en JavaScript les moyens techniques dont on dispose pour stocker des données dans le navigateur ?
Veuillez choisir au moins une réponse :
a. window.domStorage
b. window.sessionStorage
c. document.localStorage
d. window.localStorage


23. Quel est la fonction pour le mieux hasher un mdp?
+ sha1()
+ md5()
+ password_hash()
+ encrypt()

24. Quel est la fonction pour envoyer un mail en PHP?

Class A{

  protected $a
  protected function getA(){
    return $this->a;
  }
}

$a = new A();
echo $a->getA();


a affiche la variable $a
b affiche la valeur de l'attribut a
c affiche  une erreur
d affiche null


25. A quoi sert un namespace ?
a Eviter les conflits entrele nom des classes
b Mieux organiser nos classes
c Donner un champ d'application
d Préfixer le nom des classes

26 Quels sont les avantages d'un Moteur de Template comme dans les frameworkds?
a Etre plus sécurisé
b Etre plus rapide à l'execution
c Générer automatiquement du HTML
d Etre plus souple et organisé dans les vues

27. Que signifie que les languages coté serveur ?
a. Derriere un comptoir
b  Executer par une ordinateur distant
c  Le language est  compilé
d Le language est plus rapide

28. Que signifie l'Autoload?
a. Chargement automatique des variables
b  Chargement automatique des fichiers
c  Charger automatiquement le PHP


29. Par quels moyens peut-on modifier un attribut de classe?
a. A travers une constructeur
b. A travers un setter
c A travers une méthode

30 Qu'est ce qu'un classe abstraite?
a. Une classe comportant au mouins une methode abstraite
b. Une classe servant de modèle au aux classes
c. Une classe ne créant pas d'objet
d. Une classe abstraite peut hériter de plusieurs classes

31 Qu'est ce que Composer?
a Un gestionnaire de packet
b Un chargeur automatique des classes
c Une mise en cache du PHP

32 Quels sont les atouts de la couche « Routing » dans un framework ?
a Une couche de résolution d'uri vers le Model
b Une couche de résolution d'uri vers le Controlleur
c Une couche de sécurité
a Une couche de réécriture d'url

33 Qu'est ce  qu'une interface ?
a. Un contrat de méthodes que la classe doit respecter
b. Une abstraction avec que des signatures de méthodes
c. Une interface peut hériter d'une autre interface
d. Une interface peut implémenters d'autres interfaces
e. Une interface peut crée des objets


34  Quels sont les rôles d'un ORM?

a. Couche d'abstraction  d'accès à la base de données
b. Approche Orienté-Objet des requetes SQL et relations entre les tables
c  Securiser ses requetes SQL
d  Améliorer le SQL dans ses fonctions
e  Executer du PHP dans le SQL

35 Quel est le principe d'unique responsabilité ?
a. La classe doit bien fair son travail
b  La classe ne doit pas trop faire de choses
c La classe ne doit pas avoir de trop nombreuses dépendances
d Les methodes ne doivent pas être trop longues en nombres de ligne

36 A quoi sert GULP?
a. A charger les dépendances JS
b. A charger les dépendances HTML/CSS
c. A créer des taches réutilisables
d. A compiler, compresser, concatenet les fichiers SASS

37. A quoi sert Eloquent dans Laravel?
a. A représenter nos tables sous forme de classes relationnelles
b. A etre poli avec Laravel
c. A pouvoir effectuer des relations entre les tables
d. A créer des routes pour matcher avec nos controlleurs


38 Qu'affiche ce code?

<?php
echo var_dump(filter_var('http://yahoo.com', FILTER_VALIDATE_URL, FILTER_FLAG_PATH_REQUIRED));

a. false
b null
c une erreur
d true

39 De la classe Datetime, quel est la fonction permettant de faire une différnec entre 2 dates?
a. format()
b. date_diff()
c diff()
d. setTimestamp()

40
Qu'affiche le code suivant?

<?php
$date1 = new DateTime("now")
$date2 = new DateTime("tomorrow")
var_dump($date1 == $date2)

a. false
b true
c. ue erreur


41. A quoi sert le .gitignore dans un projet?

+ A ignorer mon projet top-secret
+ A permettre de ne pas versionner certains fichiers
+ A desactiver git
+ A partager mes accès de git



43. Que fais le code suivant:

<div class="box">
  <h2>Greetings</h2>
  <p>Test</p>
  <div class="inner">Hello</div>
  <p>Test</p>
  <div class="inner">Goodbye</div>
</div>

$( ".box" ).before( $( "h3" ) );


a. Il m'affiche une erreur dans ma console
b. Il fait rien
c. Il copie Greeting avant la div avec la classe box
d. Il bouge Greeting avant la div avec la classe box



44. Que fait le code suivant:

<div><span>Hello</span></div>
<p class="selected">Hello Again</p>
<p>And Again</p>

<script>
$( "p" ).prev( "selected" ).css( "background", "yellow" ).text('Hello changed');
</script>


a. Il colorie le paragraphe "p" qui a la classe "selected" en jaune
b. Il fait rien du tout
c. Il change le texte en "Hello changed"
d. Il fait une erreur


45. Que fais le code suivant:

<p class="blue">Click to toggle</p>
<div class="blue highlight">highlight</div>
<p class="blue">on these</p>
<p class="yellow">paragraphs</p>

<script>
$( "p.blue" ).click(function() {
  $( this ).toggleClass( "highlight" );
});
</script>


1. Il écoute un evenement click sur tous les paragraphes
2. Au click sur les paragraphes au classe blue, il bascule de la classe blue à highlight
3. Il permet d'ajouter la classe highlight au element de classe blue
4. Il supprimer toutes les classes qui ne sont pas blue


46. Que fais le code suivant:

<div class="blue">
  <p class="blue under">Hello</p>
  <p class="blue under highlight">and</p>
  <p class="blue under">then</p>
  <p class="blue under">Goodbye</p>
</div>

<script>
$( "p:even" ).removeClass( "blue" ).slideDown().html('<p>Okay</p>');
</script>

1. Il supprime la classe blue et fais disparaitre les elements qui ont cette classe
2. Il supprime la classe blue au paragraphe "pairs" et supprimes les pargraphes pairs en remplaçant par le pargraphe <p>Okay</p>
3. 2. Il supprime les  paragraphe "pairs" et supprimes la classe blue en remplaçant par le pargraphe <p>Okay</p>
4. Il fait une erreur




47 Que fais le code suivant:
<select name="sweets" multiple="multiple">
  <option>Chocolate</option>
  <option selected="selected">Candy</option>
  <option>Taffy</option>
  <option selected="selected">Caramel</option>
  <option>Fudge</option>
  <option>Cookie</option>
</select>
<div></div>

<script>
$( "select[name="sweets"]" ).change(function () {
    var str = "";
    $( "select option:selected" ).each(function() {
      str += $( this ).text() + " ";
    });
    $( "div" ).text( str );
  }).change();
</script>


a. Il plante
b Il fais rien du tout
c Il affiche les option selectionné dans la div
d. Il remplace les textes des options selectionées
e. Il permet de selectionnées des options dans la select


48. Que fais le code suivant:

<ul>
  <li>Milk</li>
  <li>Bread</li>
  <li class="fade">Chips</li>
  <li class="fade">Socks</li>
</ul>

<script>
$( "li" ).hover(
  function() {
    $( this ).append( $( "<span> ***</span>" ) );
  }, function() {
    $( this ).find( "span:last" ).remove();
  }
);

$( "li.fade" ).hover(function() {
  $( this ).fadeOut( 100 );
  $( this ).fadeIn( 500 );
});
</script>


a. Au survol il ajoute 3 étoiles sur les li survolées
b. Au survol il fais disparaitre sur les li survolées
c. Au survol il fais aparaitres sur les li survolées
d. Il plante



49. Que fais le code suivant:

<?php
$array1 = array("a" => "green", "red", "blue", "red");
$array2 = array("b" => "green", "yellow", "red");
$array4 = array("b" => "black", 3, "white");
$result = array_diff($array1, $array3);
print_r($result);
?>

a. Il fait la différence entre 2 tableaux
b. Il plante
c. Il soustrait les clefs du tableau 1 et du tableau 3
d. Il fait rien du tout


50. Que fais le code suivant:

<?php
function sum($carry, $item)
{
    $carry += $item;
    return $carry;
}

function operation($carry, $item)
{
    $carry *= $item;
    return $carry;
}

$a = array(1, 2, 3, 4, 5);
$x = array();
var_dump(array_reduce($a, "operation", 10));

a. Il plante
b. Il affiche juste le chiffre 1200
c. Il affiche  juste int
d. Il affiche int 1100
e. Il affiche le chiffre 1200 et int
