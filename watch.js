const { Project } = require('ts-morph') ;

// Create a new project
const project = new Project();

// Add source files
project.addSourceFilesAtPaths('./src/**/*.ts');

// Iterate through each source file
project.getSourceFiles().forEach(sourceFile => {
    console.log(`- File: .${sourceFile.getFilePath().split("StreetFight")[1]}`);

    // Iterate through each class declaration
    sourceFile.getClasses().forEach(classDeclaration => {
        console.log(`   - Class: ${classDeclaration.getName()}`);
        // Iterate through each method of the class
        classDeclaration.getMethods().forEach(method => {
            console.log(`       - Method: ${method.getName()}`);
        });
    });

    // Iterate through each function declaration
    sourceFile.getFunctions().forEach(functionDeclaration => {
        console.log(`   - Function: ${functionDeclaration.getName()}`);
    });

    // Iterate through each interface declaration
    sourceFile.getInterfaces().forEach(interfaceDeclaration => {
        console.log(`   - Interface: ${interfaceDeclaration.getName()}`);
    });

    // Iterate through each module declaration
    sourceFile.getModules().forEach(moduleDeclaration => {
        console.log(`   - Module: ${moduleDeclaration.getName()}`);
    });
});