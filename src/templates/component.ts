function createJsxTemplate(compName) {
    const template = `import React from 'react'
    import '${compName}.css' from './${compName}';
    
    function Banana() {
        return (
            <div>
    
            </div>
        )
    }
    
    export default ${compName}
`
    return template;
}

module.exports = createJsxTemplate;