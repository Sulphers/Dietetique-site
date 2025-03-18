JE dois voir la doc pour changer le nom de domaine

1. Choisir et acheter son nom de domaine
Nom de domaine : La seule dépense quasiment incontournable pour une présence professionnelle est l’achat d’un nom de domaine (entre 5 et 15 euros/an, selon l’extension et le prestataire).
Registraire (ou “Registrar”) : Choisis un prestataire fiable (OVH, Gandi, IONOS, etc.) et compare les prix.
Extension : Pour la France, privilégier le .fr ou le .com (cela reste les plus reconnus et sérieux).

2. Héberger gratuitement : les solutions “static hosting”
Puisque tu sais coder et qu’un site vitrine peut être très bien réalisé en mode “statique” (pages HTML/CSS/JS sans base de données complexe), tu peux héberger ton site gratuitement sur des plateformes telles que :

GitHub Pages

Tu places ton projet dans un dépôt GitHub, tu actives “GitHub Pages”, et le site sera accessible à [toncompte].github.io/ton-site.
Avantages : Gratuit, fiable, versioning du code.
Inconvénient : Configuration du nom de domaine personnalisé un peu plus technique (mais la documentation GitHub est claire).
Netlify

Tu peux déployer directement ton code (push Git), Netlify reconstruit ton site et le met en ligne.
Avantages : Déploiement automatisé, SSL gratuit, options de redirection/404, etc.
Inconvénient : Comme toute solution gratuite, il y a quelques limites (bandwidth, etc.), mais largement suffisant pour un site vitrine.
Vercel

Similaire à Netlify, très orienté projets JavaScript (Next.js notamment), mais marche aussi pour du simple HTML statique.
Avantages : Paramétrage du déploiement très simple, SSL gratuit.
Inconvénient : Prévu surtout pour React/Next.js ; pour du HTML “pur” ça fonctionne mais c’est parfois un peu surdimensionné.
Dans tous les cas, tu peux associer ton propre nom de domaine au site hébergé gratuitement. Il suffit de configurer un enregistrement DNS (CNAME ou A record) pour pointer ton domaine vers la plateforme choisie.

3. Utiliser un générateur de site statique (optionnel)
Si tu préfères ne pas maintenir 10 pages HTML à la main, tu peux utiliser un générateur de site statique tel que Jekyll, Hugo ou Eleventy :

Ces outils te permettent d’écrire ton contenu en Markdown (par exemple) et génèrent automatiquement les pages HTML.
Ils gèrent facilement des menus, des articles, des layouts.
Très pratiques si tu veux régulièrement mettre à jour le contenu de ton site vitrine.
4. Sécuriser l’accès (HTTPS/SSL)
Avec GitHub Pages, Netlify, Vercel, tu disposes d’un certificat SSL gratuit (Let’s Encrypt est souvent intégré). Ton site sera accessible en HTTPS, ce qui est indispensable pour un site pro.
Assure-toi juste de bien configurer le « HSTS » et la redirection en HTTPS dans les réglages de ta plateforme.
5. Structurer le site vitrine
Pour un cabinet de diététique, en général, un site vitrine minimaliste peut contenir :

Accueil : Brève présentation, accroche, photo, slogan.
À propos : Ton parcours, ta méthode, ta philosophie (ex. : “Ines, diététicienne-nutritionniste diplômée...”).
Services/Consultations : Les différents types de consultations, les tarifs éventuels, prise de rendez-vous en ligne ou contact direct.
Contact : Formulaire de contact ou lien vers email, numéro de téléphone, adresse, plan Google Maps intégrable (attention à la politique d’usage de Google Maps).
Témoignages (optionnel) : Quelques retours de clients, si tu en as le droit et si c’est pertinent.
Blog/Articles (optionnel) : Partager des conseils nutritionnels, recettes, etc. – ça améliore ton référencement.
Pense également à inclure un bandeau cookies et mentions légales si tu utilises des outils de mesure d’audience (Google Analytics ou autre) ou des services tiers.

6. Soigner le référencement (SEO)
Même si c’est un site vitrine simple, quelques bonnes pratiques SEO :

Titres de page pertinents (balise <title>).
Méta-descriptions pour chaque page.
Texte descriptif sur la page d’accueil : mention “Diététicienne” ou “Nutritionniste”, “Ines”, “consultations à [ville]” si tu veux cibler une zone géographique.
Images légères et balises alt pour l’accessibilité.
Un favicon et un design responsive pour avoir un aspect professionnel.
7. Suivre la performance
Installe un outil de suivi d’audience (par ex. Google Analytics ou Matomo) pour voir combien de visiteurs tu as, et ajuster si besoin.
Vérifie que ton site se charge rapidement (images optimisées, code propre, etc.).
8. À retenir
Nom de domaine : Seule dépense quasi inévitable (quelques euros par an).
Hébergement : Gratuit sur GitHub Pages, Netlify, ou Vercel, qui suffisent largement pour un site vitrine.
Sécurité (HTTPS) : Généralement fournie gratuitement par les hébergeurs susmentionnés.
Mises à jour : Gérées via un simple push de code (ou un CMS statique si tu choisis un générateur).
Simplicité : Un site vitrine n’a pas besoin d’être volumineux, mais doit être clair, rapide, et attractif.
En suivant cette approche, tu limites tes coûts au strict nécessaire (une poignée d’euros par an pour le domaine) tout en ayant un site professionnel et maintenable facilement !