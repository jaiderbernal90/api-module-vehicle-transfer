export class InvalidTransferDataException extends Error {
  constructor(message: string) {
    super(`Invalid transfer data: ${message}`);
    this.name = 'InvalidTransferDataException';
  }
}
