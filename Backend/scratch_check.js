const db = require('./config/db');

async function checkProcs() {
    try {
        const [propRows] = await db.query("SHOW CREATE PROCEDURE sp_add_property");
        console.log('--- sp_add_property ---');
        console.log(propRows[0]['Create Procedure']);
        
        const [blogRows] = await db.query("SHOW CREATE PROCEDURE sp_add_blog");
        console.log('--- sp_add_blog ---');
        console.log(blogRows[0]['Create Procedure']);
    } catch(err) {
        console.error(err);
    }
    process.exit(0);
}
checkProcs();
