const { Project } = require('ts-morph') ;
const { appendFileSync, unlinkSync } = require('fs') ;

const project = new Project();
const mdFilePath = "./watch.md";
const append = (str) => {
    appendFileSync(mdFilePath, str);
}

// 移除舊檔案
unlinkSync(mdFilePath);



var str = "";

// Add source files
project.addSourceFilesAtPaths('./src/**/*.ts');

// Iterate through each source file
project.getSourceFiles().forEach(sourceFile => {
    str = "";
    str += `- File: .${sourceFile.getFilePath().split("StreetFight")[1]}\n`;

    // Iterate through each class declaration
    sourceFile.getClasses().forEach(classDeclaration => {
        str += `   - Class: ${classDeclaration.getName()}\n\n`;
        // Iterate through each method of the class
        classDeclaration.getMethods().forEach(method => {
            str += `       - Method: ${method.getName()}\n`;
        });
    });

    // Iterate through each function declaration
    sourceFile.getFunctions().forEach(functionDeclaration => {
        str += `   - Function: ${functionDeclaration.getName()}\n`;
    });

    // Iterate through each interface declaration
    sourceFile.getInterfaces().forEach(interfaceDeclaration => {
        str += `   - Interface: ${interfaceDeclaration.getName()}\n`;
    });

    // Iterate through each module declaration
    sourceFile.getModules().forEach(moduleDeclaration => {
        str += `   - Module: ${moduleDeclaration.getName()}\n`;
    });

    append(str);
});