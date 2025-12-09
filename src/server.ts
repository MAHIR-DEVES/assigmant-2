import app from './app';
import { config } from 'dotenv';
import { ENV } from './config/environment';

config();

const port = ENV.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
