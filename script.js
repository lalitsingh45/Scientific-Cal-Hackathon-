var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;
        if (btntext == 'x') {
            btntext = '*';
        }
        screen.value += btntext;
    });
}

function sin() {
    screen.value = Math.sin(screen.value);
}
function cos() {
    screen.value = Math.cos(screen.value);
}
function tan() {
    screen.value = Math.tan(screen.value);
}
function pow() {
    screen.value = Math.pow(screen.value, 2);
}
function sqrt() {
    screen.value = Math.sqrt(screen.value, 2);
}
function log() {
    screen.value = Math.log(screen.value);
}
function pi() {
    screen.value = 3.14159265359;
}
function e() {
    screen.value = 2.71828182846;
}
function fact() {

    var i, num, f;
    f = 1
    num = screen.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }

    i = i - 1;

    screen.value = f;
}

function backspace() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}


function clearMatrix() {
    document.getElementById("screen").value = "";
}

function speedOfLight() {
    document.getElementById("screen").value = 299792458; // Speed of light in meters per second
}

function gravitationalConstant() {
    document.getElementById("screen").value = 6.67430e-11; // Gravitational constant in m^3 kg^-1 s^-2
}


function convertToMeters() {
    let value = parseFloat(document.getElementById("screen").value);
    document.getElementById("screen").value = value * 1000; // Convert to meters
}

function convertToKilometers() {
    let value = parseFloat(document.getElementById("screen").value);
    document.getElementById("screen").value = value / 1000; // Convert to kilometers
}

function transpose() {

    let matrixInput = document.getElementById("screen").value.trim();

    let matrix = parseMatrixInput(matrixInput);
    let transposedMatrix = transposeMatrix(matrix);
    let transposedMatrixString = formatMatrix(transposedMatrix);
    document.getElementById("screen").value = transposedMatrixString;
}
function parseMatrixInput(input) {
    let rows = input.split(";");

    let matrix = rows.map(row => row.trim().split(/\s+/).map(Number));

    return matrix;
}
function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let result = [];
    for (let j = 0; j < cols; j++) {
        let newRow = [];
        for (let i = 0; i < rows; i++) {
            newRow.push(matrix[i][j]);
        }
        result.push(newRow);
    }
    return result;
}
function formatMatrix(matrix) {
    let formattedMatrix = "";
    for (let i = 0; i < matrix.length; i++) {
        formattedMatrix += matrix[i].join("\t") + "\n";
    }
    return formattedMatrix.trim();
}
function inverse() {
    let matrixInput = document.getElementById("screen").value.trim();
    let matrix = parseMatrixInput(matrixInput);
    if (!isValidSquareMatrix(matrix)) {
        alert("Invalid matrix input! The matrix must be square to compute its inverse.");
        return;
    }
    let det = determinant(matrix);
    if (det === 0) {
        alert("The determinant of the matrix is zero. It does not have an inverse.");
        return;
    }
    let inverseMatrix = computeInverse(matrix, det);
    let inverseMatrixString = formatMatrix(inverseMatrix);
    document.getElementById("screen").value = inverseMatrixString;
}
function isValidSquareMatrix(matrix) {
    const numRows = matrix.length;
    if (numRows === 0) return false;
    const numCols = matrix[0].length;
    if (numRows !== numCols) return false;
    return true;
}


function determinant(matrix) {
    
    let det = 0; 
    return det;
}
function computeInverse(matrix, det) {
    let inverseMatrix = []; 
    return inverseMatrix;
}
function formatMatrix(matrix) {
    let formattedMatrix = "";
    for (let i = 0; i < matrix.length; i++) {
        formattedMatrix += matrix[i].join("\t") + "\n";
    }
    return formattedMatrix.trim();
}
