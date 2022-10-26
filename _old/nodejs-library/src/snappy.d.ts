// declare the interface for 'snappy' that we promise to the 
// compiler and is for our documentation. 
//
// Snappy doesn't come with a module declaration so we created one
//
declare module "snappy" {  
    export function uncompressSync(input: string | Buffer): Buffer;
    export function compressSync(input: string | Buffer): Buffer;
}