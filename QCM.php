<?paper-header-panel

Test de 50 questions:

Que vaut l'expression booléenne suivante :

+ true && (false || ($value && true))
a. faux si la variable $value vaut vrai
b. faux si la variable $value ne vaut pas vrai
c. vrai si la variable $value vaut vrai
d. vrai si la variable $value vaut faux



À partir du code JavaScript suivant :

<pre>
var data = [[ 10, 11, 12, 13, 14 ],
            [ 15, 16, 17, 18, 19 ]];
</pre>
Comment faire pour afficher "18" dans la console du navigateur ?
Veuillez choisir une réponse :
a. console.log(data[4][1]);
b. console.log(data[1][3]);
c. console.log(data[1,4]);
d. console.write(data[1][3]);



Que signifie MVC?

a Modele Vue Controlleur
b Modeling Viewer Control
c Maisons des Vieux Cons



Que fais le codee suivant:
<?php
$pizza  = "piece1 piece2 piece3 piece4 piece5 piece6";
$pieces = explode(" ", $pizza);
echo $pieces[1];

a Elle affiche piece 2
b Elle affiche piece 1
c Elle affiche " " piece 1
d Elle affiche une erreur



Quels sont les fonctions en PHP por transformer un tableau en chaine de caractères?

a implode()
b explode()
c join()


Soit le code suivant:

class A{
  public $attribut;
}

a = new A();
b = new A();
a.attribut = "Je suis initialisé";
b.attribut = "Je suis une autre initialisation";
echo a.attribut;

1 Cela me sort une erreur
2 Cela m'affiche "Je suis initialisé"
3 Cela m'affiche "Je suis une autre initialisation"





Que sort le code suivant:

$data = "foo:*:1023:1000::/home/foo:/bin/sh";
list($user, $pass, $uid, $gid, $gecos, $home, $shell) = explode(":", $data)
echo $user;

a foo
b *
c une erreur
d rien




Est-il possible en Programmation Orientée Objet d'instancier une classe B qui hérite d'une classe abstraite A et qui implémente une partie seulement des méthodes abstraites de cette classe A ?
Veuillez choisir une réponse :
a. Oui
b. Non


Quel principe de Programmation Orientée Objet permet de protéger les données du code extérieur ?
Veuillez choisir une réponse :
a. La surcharge
b. L'héritage
c. L'encapsulation
d. L'abstraction




À partir du code PHP suivant :
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


Un élément qui aurait la propriété CSS suivante { padding: 20px 5px 15px } aura Veuillez choisir une réponse :
a. Un padding en haut et en bas de 20px, un padding à droite de 15 px, un padding à gauche de 5px
b. Un padding en haut et en bas de 20px, un padding à gauche de 15 px, un padding à droite de 5px
c. Un padding en haut de 20px, un padding à gauche et à droite de 5px, un padding en bas de 15px
d. Un padding en haut de 20px, un padding à droite de 5px, un padding à gauche de 15px


Quel moyen en Programmation Orientée Objet permet de gérer les erreurs potentielles d'un code ?
Veuillez choisir une réponse :
a. Les exceptions, le code s'écrit normalement dans un bloc try, et un ou plusieurs blocs catch permettent de gérer les erreurs
b. Les namespaces, cela évite qu'une classe puisse être appelée par n'importe qui
c. L'encapsulation, les données sont protégées par du code qui en contrôle l'accès


Quels formats de sérialisation permettent de dialoguer entre deux machines via le protocole HTTP ?
Veuillez choisir au moins une réponse :
a. XML
b. SQL
c. JSON
d. CSV



À partir du code HTML suivant :

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


Un élément qui aurait les propriétés CSS suivantes { position: absolute, right: 40px } sera :
Veuillez choisir une réponse :
a. Positionné à 40px du bord droit du body
b. Positionné à 40px du bord droit de son élément parent
c. Positionné à 40px du bord gauche du body
d. Positionné à 40px du bord droit de son plus proche élément parent positionné

Quelles sont les fonctions d'aggrégation existantes en SQL ?
Veuillez choisir une réponse :
a. AVERAGE(), COUNT(), MAX(), MIN(), SUM()
b. AVG(), MAX(), MIN(), SUM()
c. AVG(), COUNT(), MAX(), MIN(), SUM()
d. AVERAGE(), MAX(), MIN(), SUM()


Pour positionner un arrière plan centré à droite, il faut écrire la propriété CSS :
Veuillez choisir une réponse :
a. background-position: right;
b. background-position: right center;
c. background: center right;
d. background-position: middle right;


Le sélecteur CSS section article:nth-child(2) est :
Veuillez choisir une réponse :
a. Un pseudo-élément attaché au deuxième article de chaque section
b. Une pseudo-classe qui sélectionne n'importe quel deuxième enfant de chaque section si c'est un article
c. Une pseudo-classe qui sélectionne n'importe quel deuxième enfant d'un article de chaque section
d. Une pseudo-classe qui sélectionne n'importe quel deuxième enfant de chaque section


Pourquoi la classe PHP ci-dessous est invalide :

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





À partir du code HTML suivant :
<pre>
<form action="search.php">
  <label for="firstName">Prénom :</label>
  <input id="firstName" name="first-name" type="text">
  <input type="submit" value="Rechercher">
</form>
</pre>
Comment faire dans le fichier search.php pour récupérer le prénom qui a été saisi ?

Veuillez choisir une réponse :
a. $firstName = $_POST['firstName'];
b. $firstName = $_POST['first-name'];
c. $firstName = $_GET['firstName'];
d. $firstName = $_GET['first-name'];



Quels sont en JavaScript les moyens techniques dont on dispose pour stocker des données dans le navigateur ?
Veuillez choisir au moins une réponse :
a. window.domStorage
b. window.sessionStorage
c. document.localStorage
d. window.localStorage
