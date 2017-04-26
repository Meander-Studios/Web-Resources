/**
 * Created by Meander Studios Inc.
 */
// Omega Code
// © Meander Studios Inc 2016 - 2017
// Requires Permission From Meander Studios Inc. To Use


function write(input){
    document.write(input);
}
function writeln(input){
    write(input + '<br>');
}
function writelnTag(input,tagName){
    var startTag = '<' + tagName + '>';
    var endTag = '</' + tagName + '>';
    writeln(startTag + input + endTag);
}
function writeTag(input,tagName){
    var startTag = '<' + tagName + '>';
    var endTag = '</' + tagName + '>';
    write(startTag + input + endTag);
}
function log(input){
    console.log(input);
}
function createCopyright(){
    var date = new Date();
    var year = date.getFullYear();
    writeTag('© Meander Studios Inc ' + year, 'p');
}
function createTitle(input,projectName){
    writeTag(projectName + ' | ' + input,'title');
}