import initSqlJs from 'sql.js'

// Load sql.js into a global var which Go will use
export function init(config) {
    return initSqlJs(config).then(SQL => {
        global._go_sqlite = SQL;
    });
}
