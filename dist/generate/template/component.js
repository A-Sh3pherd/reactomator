"use strict";
function createJsxTemplate(compName) {
    var template = "import React from 'react'\n    import '" + compName + ".css';\n    \n    function " + compName + "() {\n        return (\n            <div>\n    \n            </div>\n        )\n    }\n    \n    export default " + compName + "\n";
    return template;
}
module.exports = createJsxTemplate;
//# sourceMappingURL=component.js.map