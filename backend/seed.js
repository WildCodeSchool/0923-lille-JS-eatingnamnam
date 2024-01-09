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

    // Insert data into the 'user' table

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
        ("huile", "/assets/ingredients/huile.jpg"),
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
        ("vin", "/assets/ingredients/vin.jpg")`
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
        ("cuillière en bois", "/assets/ustensils/cuilliere_en_bois.jpg")`
      )
    );

    queries.push(
      database.query(`INSERT INTO nam_nam.tag(name) VALUES
        ("Vegan"),
        ("Mexicain"),
        ("Végétarien"),
        ("Light"),
        ("Equilibré"),
        ("Hiver"),
        ("Eté"),
        ("Automne"),
        ("Printemps"),
        ("Entrée"),
        ("Plat"),
        ("Dessert"),
        ("Apéritif"),
        ("Cocktail"),
        ("Noël"),
        ("Paques"),
        ("Nouvel An"),
        ("Anniversaire"),
        ("Halloween"),
        ("Fête des mères"),
        ("Fête des pères")`)
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
        ("gratin d'hiver à la courge", "/assets/recette/gratin.jpg", "40 minutes", "2024-01-03", "1", "facile", "4", "4")`
      )
    );

    queries.push(
      database.query(
        `INSERT INTO nam_nam.list_tags_recipe(recipe_id, tag_id) VALUES 
        ("1", "1"),
        ("2", "2")
        `
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
