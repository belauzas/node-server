const { readFileSync } = require('fs');

function html(templateName, data) {
    const template = readFileSync('./src/pages/' + templateName + '.html', 'utf8');
    // console.log(template);
    return 'DONE';
}

module.exports = html;