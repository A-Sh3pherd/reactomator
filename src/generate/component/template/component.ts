function createJsxTemplate(compName: string) {
    const template = `import React from 'react'
    import '${compName}.css';
    
    function ${compName}() {
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