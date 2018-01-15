import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const HymnSchema = new Schema({
  name: String,
  originalKey: String,
  scan: Array,
  v1: String,
  v2: String,
  v3: String,
  v4: String,
  v5: String,
  chorus: String,
  bridge: String,
});

const Hymn = mongoose.model('HymnCollection', HymnSchema);

export default Hymn;
