import { SQL } from 'wotlkdata';

const item = SQL.Databases.world_dest.read('SELECT * from item_template where entry = 25;');
console.log(item); // -> [{ entry: 25, class: 2, subclass: 7 etc.}]

//SQL.Databases.world_dest.writeEarly('CREATE TABLE IF NOT EXISTS `test` (``)')
SQL.Databases.world_dest.write('INSERT IGNORE INTO waypoints VALUES (225,11,0,0,0,0,0,"tswow");');