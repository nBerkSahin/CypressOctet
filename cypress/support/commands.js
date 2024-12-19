Cypress.Commands.add('function1', () => {
    let rnd = Math.floor(10000 + Math.random() * 90000);
    let sx1 = ""+rnd;
      cy.writeFile('cypress/fixtures/apiname.txt', sx1)




      
    })


   
    Cypress.Commands.add('getIframeContent', (iframeSelector) => {
      const checkIframeContent = ($iframe) => {
        const doc = $iframe[0].contentDocument || $iframe[0].contentWindow.document;
        if (doc && doc.body && doc.body.innerHTML.trim() !== '') {
          console.log('Iframe Body (Rendered):', doc.body.innerHTML);
          return doc.body; // Return the document body if rendered content exists
        } else if ($iframe[0].srcdoc) {
          const parser = new DOMParser();
          const parsedDoc = parser.parseFromString($iframe[0].srcdoc, 'text/html');
          console.log('Iframe Body (Parsed from srcdoc):', parsedDoc.body.innerHTML);
          return parsedDoc.body; // Return the parsed body
        }
        return null; // No content yet
      };
      return cy.get(iframeSelector, { timeout: 10000 }) // Get the iframe
        .then(($iframe) => {
          const content = checkIframeContent($iframe);
          if (!content) {
            throw new Error('Iframe content is not accessible or rendered yet.');
          }
          return cy.wrap(content); // Wrap the body in Cypress for further chaining
        });
    });