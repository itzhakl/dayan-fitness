import mongoose, { Schema, Document } from 'mongoose';

interface IHealthDeclaration extends Document {
  userId: string;
  fullName: string;
  phone: string;
  signature: string;
}

const HealthDeclarationSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  signature: { type: String, required: true },
});

export default mongoose.model<IHealthDeclaration>('HealthDeclaration', HealthDeclarationSchema);
