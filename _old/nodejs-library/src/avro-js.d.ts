

declare module "avro-js" {  
    interface Type {
        fromBuffer(buffer: Buffer): any
        getFingerprint(algorithm: 'md5' | 'sha256'): Buffer
    }
    export function parse(input: object): Type;
}