const mongoose = require('mongoose');
import { logger } from '@utils/logger';
import { telegramLogger } from '@utils/telegramLogger';
import { MONGODB_URI } from '@config';
import models from '@schemas/index.schema'; // Import danh sách các mô hình
//connect mongoose
const connectMongoDb = () => {
   mongoose
      .connect(MONGODB_URI, {
         dbName: 'me_review',
      })
      .then(() => {
         logger.info(
            `✅✅✅✅✅✅✅✅ Connect MongoDB success✅✅✅✅✅✅✅✅`
         );
         telegramLogger.sendMessage(
            '✅✅✅✅ Connect MongoDB success ✅✅✅✅',
            'NOTICE'
         );
      })
      .catch((error: any) => {
         telegramLogger.sendMessage(
            '⚠️⚠️⚠️⚠️⚠️ Connect MongoDB failed: ⚠️⚠️⚠️⚠️' + error.message,
            'ERROR'
         );
      });
};

// for (const modelName in models) {
//    if (Object.hasOwnProperty.call(models, modelName)) {
//       const Model = models[modelName];
//       Model.createCollection()
//          .then(() => {
//             console.log(
//                `Collection for model ${modelName} created successfully.`
//             );
//          })
//          .catch((error) => {
//             console.error(
//                `Error creating collection for model ${modelName}:`,
//                error
//             );
//          });
//    }
// }
export default connectMongoDb;
