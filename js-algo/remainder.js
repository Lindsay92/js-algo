//remainder (english) = reste de la division

const leftOperand = parseInt(process.argv[2], 10);
const rightOperand = parseInt(process.argv[3], 10);
//left operand % right operand : % = opérateur arithmétique

console.log(`${leftOperand} % ${rightOperand}=${leftOperand % rightOperand}`);
//il nous retourne le reste de la division