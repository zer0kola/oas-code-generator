import * as fs from 'fs';
import * as path from 'path';
import SwaggerParser from '@apidevtools/swagger-parser';
import { targetDirectories } from './config';

const OAS_2_URL = 'https://petstore.swagger.io/v2/swagger.json';
const OAS_3_URL = 'https://petstore3.swagger.io/api/v3/openapi.json';

const parser = new SwaggerParser();

export const generateTypeDefinition = async () => {
  const doc_2 = await parser.parse(OAS_2_URL);
  const doc_3 = await parser.parse(OAS_3_URL);

  if (!fs.existsSync(targetDirectories.types)) {
    fs.mkdirSync(targetDirectories.types, { recursive: true });
  }

  console.log(doc_2);
  console.log(doc_3);
};
