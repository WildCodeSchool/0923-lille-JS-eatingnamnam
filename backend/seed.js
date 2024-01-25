// Load environment variables from .env file
require("dotenv").config();

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop
    const queries = [];

    /* ************************************************************************* */

    // Generating Seed Data
    // Insert data into the 'user' table

    queries.push(
      database.query(
        `INSERT INTO nam_nam.user(first_name, last_name, pseudo, email, password, birth_date, profile_picture, background_picture, role) VALUES 
        ("Thomas", "Nigon", "JacobDeLaFon", "nigont@gmail.com", "delafon", "1988-10-22", "aucune image", "aucune image", "admin"),
        ("Robin", "Fantino", "NemoOnTheNet", "robin.fantino.rf@gmail.com", "onthenet", "1991-11-18", "aucune image", "aucune image", "user"),
        ("Marie", "Saillard", "mogavays", "mariesaillard2@gmail.com", "mogavays", "1996-06-30", "aucune image", "aucune image", "user"),
        ("Fred", "Ticon", "Tycoon", "fred.ticon@gmail.com", "tycoon", "1977-05-21", "aucune image", "aucune image", "user");`
      )
    );

    // Insert data into the 'ingredient' table

    queries.push(
      database.query(
        `INSERT INTO nam_nam.ingredient(name, picture) VALUES
        ("ail", "/assets/ingredients/ail.jpg"),
        ("baie rose", "/assets/ingredients/baie_rose.jpg"),
        ("beurre", "/assets/ingredients/beurre.jpg"),
        ("bière brune", "/assets/ingredients/biere_brune.jpg"),
        ("boeuf haché", "/assets/ingredients/boeuf_hache.jpg"),
        ("bouillon de légumes", "/assets/ingredients/bouillon_legume.webp"),
        ("cassonade", "/assets/ingredients/cassonade.jpg"),
        ("champignon de Paris bruns", "/assets/ingredients/champignon_paris_brun.jpg"),
        ("cognac", "/assets/ingredients/cognac.jpg"),
        ("coulis de tomates", "/assets/ingredients/coulis_tomate.jpg"),
        ("cumin en poudre", "/assets/ingredients/cumin_poudre.jpg"),
        ("échalote", "/assets/ingredients/echalotes.jpg"),
        ("haricots rouge", "/assets/ingredients/haricots_rouge.jpg"),
        ("huile d'olive", "/assets/ingredients/huile_olive.jpg"),
        ("huile", "/assets/ingredients/huile.png"),
        ("laitue", "/assets/ingredients/laitue.jpg"),
        ("lardons", "/assets/ingredients/lardons.jpg"),
        ("laurier", "/assets/ingredients/laurier.jpg"),
        ("moutarde", "/assets/ingredients/moutarde.jpg"),
        ("oignon blanc", "/assets/ingredients/oignon_blanc.jpg"),
        ("oignon jaune", "/assets/ingredients/oignon_jaune.jpg"),
        ("pain d'épice", "/assets/ingredients/pain_epice.jpg"),
        ("pain", "/assets/ingredients/pain.jpg"),
        ("petit épautre", "/assets/ingredients/petit_epautre.jpg"),
        ("poivre", "/assets/ingredients/poivre.jpg"),
        ("poivron vert", "/assets/ingredients/poivront_vert.jpg"),
        ("sel", "/assets/ingredients/sel.jpg"),
        ("tabasco", "/assets/ingredients/tabasco.jpg"),
        ("thym", "/assets/ingredients/thym.jpg"),
        ("tomate", "/assets/ingredients/tomates.jpg"),
        ("tortillas", "/assets/ingredients/tortillas.jpg"),
        ("courge", "/assets/ingredients/courge.jpg"),
        ("créme fraiche liquide", "/assets/ingredients/creme_fraiche_liquide.jpg"),
        ("gruyére", "/assets/ingredients/gruyere.jpg"),
        ("semoule", "/assets/ingredients/semoule.jpg"),
        ("boeuf", "/assets/ingredients/boeuf.jpg"),
        ("carotte", "/assets/ingredients/carotte.jpg"),
        ("chou", "/assets/ingredients/chou.jpg"),
        ("lard", "/assets/ingredients/lard.jpg"),
        ("navet", "/assets/ingredients/navet.jpg"),
        ("os a moelle", "/assets/ingredients/os_a_moelle.jpg"),
        ("poireau", "/assets/ingredients/poireau.jpg"),
        ("chorizo", "/assets/ingredients/chorizo.jpg"),
        ("riz long", "/assets/ingredients/riz_long.jpg"),
        ("concentré de tomate", "/assets/ingredients/concentre_de_tomate.jpg"),
        ("persil", "/assets/ingredients/persil.jpg"),
        ("poivron rouge", "/assets/ingredients/poivron_rouge.jpg"),
        ("vin", "/assets/ingredients/vin.jpg"),
        ("sauce soja", "/assets/ingredients/sauce_soja.jpg"),
        ("crème de soja", "/assets/ingredients/creme_soja.jpg");`
      )
    );

    queries.push(
      database.query(
        `INSERT INTO nam_nam.ustensil(name, picture) VALUES 
        ("couteau", "/assets/ustensils/couteau.jpg"),
        ("Crépière", "/assets/ustensils/crepiere.jpg"),
        ("Dénoyauteur", "/assets/ustensils/denoyauteur.jpg"),
        ("pinceau", "/assets/ustensils/pinceau.jpg"),
        ("Poêle", "/assets/ustensils/poele.jpg"),
        ("sauteuse", "/assets/ustensils/sauteuse.jpg"),
        ("cocotte", "/assets/ustensils/cocotte.jpg"),
        ("four", "/assets/ustensils/four.jpg"),
        ("fourchette", "/assets/ustensils/fourchette.jpg"),
        ("plat a gratin", "/assets/ustensils/plat_a_gratin.jpg"),
        ("plat", "/assets/ustensils/plat.jpg"),
        ("saladier", "/assets/ustensils/saladier.jpg"),
        ("set de 3 poeles", "/assets/ustensils/set_de_3_poeles.jpg"),
        ("économe", "/assets/ustensils/econome.jpg"),
        ("lot de 3 casseroles", "/assets/ustensils/lot_de_3_casseroles.jpg"),
        ("mijoteuse électrique", "/assets/ustensils/mijoteuse_electrique.jpg"),
        ("cuillière en bois", "/assets/ustensils/cuilliere_en_bois.jpg");`
      )
    );

    queries.push(
      database.query(`INSERT INTO nam_nam.tag(name) VALUES
  ("Vegan", "/assets/tags/vegan.jpg"),
  ("Mexicain", "/assets/tags/mexicain.jpg"),
  ("Végétarien", "/assets/tags/vege.jpg"),
  ("Light", "/assets/tags/light.jpg"),
  ("Equilibré"),
  ("Hiver", "/assets/tags/hiver.jpg"),
  ("Eté", "/assets/tags/ete.jpg"),
  ("Automne", "/assets/tags/automne.jpg"),
  ("Printemps", "/assets/tags/printemps.jpg"),
  ("Entrée", "/assets/tags/entree.jpg"),
  ("Plat", "/assets/tags/plat.jpg"),
  ("Dessert", "/assets/tags/dessert.jpg"),
  ("Apéritif", "/assets/tags/aperitif.jpg"),
  ("Cocktail", "/assets/tags/cocktail.jpg");`)
    );

    // insert data into the 'recipe' table

    queries.push(
      database.query(
        `INSERT INTO nam_nam.recipe(title, picture, time, date, price, difficulty, number_share, user_id) VALUES
        ("Risotto de petit-épeautre aux champignons (vegan)", "/assets/recette/risotto.jpg", "1 heure", "2023-12-31", "3", "easy", "4", "1"),
        ("Tacos Mexicain", "/assets/recette/tacos.jpg", "55 minutes", "2023-12-30", "1", "très facile", "4", "2"),
        ("chili con carne", "/assets/recette/chili.jpg", "1 heure 30 minutes", "2024-01-03", "1", "facile", "4", "3"),
        ("riz mexicain au chorizo", "/assets/recette/riz_mexicain.jpg", "1 heure 5 minutes", "2024-01-03", "1", "facile", "4", "4"),
        ("pot au feu", "/assets/recette/pot_au_feu.jpg", "2 heure 45 minutes", "2024-01-03", "1", "facile", "6", "4"),
        ("gratin d'hiver à la courge", "/assets/recette/gratin.jpg", "40 minutes", "2024-01-03", "1", "facile", "4", "4");`
      )
    );

    queries.push(
      database.query(
        `INSERT INTO nam_nam.list_tags_recipe(recipe_id, tag_id) VALUES 
        ("1", "1"),
        ("2", "2");`
      )
    );
    queries.push(
      database.query(
        `INSERT INTO nam_nam.comment_recipe_user(recipe_id, user_id, grade, comment, date_time) VALUES 
        (1,1,5,'Meilleur recette de ma vie !!!','2024-01-04'),
        (1,2,3,'ca va','2024-01-04'),
        (1,3,3,'imotep','2024-01-04'),
        (1,4,4,'','2024-01-04'),
        (2,1,5,'Super recette, j ai redécouvert ce plat !','2024-01-04'),
        (3,1,4,'Toute la famille à apprécier','2024-01-04'),
        (4,3,3,'imotep','2024-01-04'),
        (5,4,4,'','2024-01-04'),
        (6,3,3,'Tip Top','2024-01-04');`
      )
    );

    queries.push(
      database.query(
        `INSERT INTO nam_nam.list_ingredients_recip(recipe_id, ingredient_id, quantity, unit) VALUES 
        ( 1,25,1,"pincée(s)"),
        ( 1, 9, 4, "cl"),
        ( 1, 15, 2, "cuillières à soupe"),
        ( 1, 24, 320, "g"),
        ( 1, 12, 3, ""),
        ( 1, 6, 2, "l"),
        ( 1, 8, 300, "g"),
        ( 1, 49, 1, "cuillières à soupe"),
        ( 1, 50, 3, "cuillières à soupe"),        
        ( 2, 28, 3, "quelques goûtes (facultatif)"),
        ( 2, 27, 1, "pincée(s)"),
        ( 2, 25, 2, "pincée(s)"),
        ( 2, 11, 2, "cuillières à café"),
        ( 2, 26, 0.5, "/"),
        ( 2, 13, 1, "petite boîte"),
        ( 2, 30, 2, "entière"),
        ( 2, 31, 8, "moyenne"),
        ( 2, 20, 1, "entière"),
        ( 2, 10, 10, "cl"),
        ( 2, 5, 250, "g"),
        ( 2, 16, 8, "feuille(s)");`
      )
    );
    queries.push(
      database.query(
        `INSERT INTO nam_nam.list_ustensils_recip(recipe_id, ustensil_id) VALUES 
        ("1", "6"),
        ("2", "13");`
      )
    );

    queries.push(
      database.query(
        `INSERT INTO nam_nam.step(number_step, description, recipe_id) VALUES 
        ( "1", "Rincer les champignons et éplucher les échalotes. Les émincer.", "1"),
        ( "2", "Dans une sauteuse, faire chauffer un filet d'huile. Y faire revenir les échalotes et les champignons 5 minutes.", "1"),
        ( "3", "Débarrasser les champignons et verser le petit-épeautre dans la sauteuse. Le faire revenir jusqu'à ce qu'il devienne translucide.", "1"),
        ( "4", "Déglacer au cognac et à la sauce soja.", "1"),
        ( "5", "Ajouter le bouillon de légumes petit à petit.", "1"),
        ( "6", "Au bout de 20 min, ajouter les champignons et les échalotes.", "1"),
        ( "7", "Continuer à ajouter le bouillon. Laisser cuire pendant encore 15 min.", "1"),
        ( "8", "Crémer le risotto avec la crème de soja, éteindre le feu, et laisser reposer 2 min avant de servir.", "1"),
        ( "1", "Rincer les champignons et éplucher les échalotes. Les émincer.", "1"),
        ( "2", "Dans une sauteuse, faire chauffer un filet d'huile. Y faire revenir les échalotes et les champignons 5 minutes.", "2"),
        ( "3", "Débarrasser les champignons et verser le petit-épeautre dans la sauteuse. Le faire revenir jusqu'à ce qu'il devienne translucide.", "2"),
        ( "4", "Déglacer au cognac et à la sauce soja.", "2"),
        ( "5", "Ajouter le bouillon de légumes petit à petit.", "2"),
        ( "6", "Au bout de 20 min, ajouter les champignons et les échalotes.", "2"),
        ( "7", "Continuer à ajouter le bouillon. Laisser cuire pendant encore 15 min.", "2"),
        ( "8", "Crémer le risotto avec la crème de soja, éteindre le feu, et laisser reposer 2 min avant de servir.", "2");`
      )
    );

    /* ************************************************************************* */

    // Wait for all the insertion queries to complete
    await Promise.all(queries);

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
