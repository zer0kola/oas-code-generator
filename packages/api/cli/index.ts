// import { typeGenerateCommand } from './command/type-generate';

async function main() {
  try {
    // await swaggerCommand();
    // await typeGenerateCommand();
  } catch (error: any) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

void main();
