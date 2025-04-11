import mongoose, { Schema, Document } from 'mongoose';

export interface IMessage extends Document {
  sender: mongoose.Types.ObjectId;
  recipient: mongoose.Types.ObjectId;
  content: string;
  timestamp: Date;
}

const messageSchema = new Schema<IMessage>(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    recipient: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Message = mongoose.model<IMessage>('Message', messageSchema);
export default Message;
