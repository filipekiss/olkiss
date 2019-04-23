import * as path from 'path';
import * as fs from 'fs-extra';

const PROJECT_ROOT = path.resolve(__dirname, '../');

const dataFolder = path.resolve(PROJECT_ROOT, 'src/data');
const productFolder = path.resolve(dataFolder, 'products');
const destinationFile = `${dataFolder}/products.json`;

const productsFiles = fs.readdirSync(productFolder);

const products = productsFiles.map(function readJson(jsonPath) {
    const productDetails = fs.readJsonSync(`${productFolder}/${jsonPath}`);
    return productDetails;
});

fs.writeJson(destinationFile, products);
