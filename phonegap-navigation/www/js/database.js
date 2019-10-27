var db = window.openDatabase("food", 1.0, "food database", 1024 * 1024);
db.transaction(createTable, error, success);
	
function createTable(tx) {	
 	tx.executeSql("CREATE TABLE IF NOT EXISTS food(id UNIQUE, title TEXT)");
}
	
function success() {
	db.transaction(addFood, error);
}
	
function addFood(tx) {
	tx.executeSql("INSERT INTO food(id, title) VALUES (1, 'chips')");
	tx.executeSql("INSERT INTO food(id, title) VALUES (2, 'cake')");
	tx.executeSql("INSERT INTO food(id, title) VALUES (3, 'nachos')");
}
	
function error(err) {
	alert("oops something went wrong " + err.message);
}