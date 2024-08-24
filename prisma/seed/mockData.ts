import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('caa69e1d-f7fe-4fae-9e9f-6b6c423d784f', '1Dianna_Bogan2@gmail.com', 'David Wilson', 'https://i.imgur.com/YfJQV5z.png?id=3', 'inv11223', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('645204e9-fc96-47ad-963e-1cde001d5f70', '8Travon92@hotmail.com', 'Michael Brown', 'https://i.imgur.com/YfJQV5z.png?id=10', 'inv67890', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('7310464b-c45f-40a4-a4d4-c075887db5b5', '15Misty_Muller63@hotmail.com', 'Michael Brown', 'https://i.imgur.com/YfJQV5z.png?id=17', 'inv11223', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('7d342248-293b-4d9c-8b6b-3077dcdc87e3', '22Mike75@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=24', 'inv67890', 'suspended', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('496a9b30-0ec8-41c2-9db4-cb69a15a4442', '29Orland96@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=31', 'inv09876', 'suspended', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('c4977f81-adcd-4d1c-b03e-0a5629905b20', '36Amani.Barton@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=38', 'inv67890', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('9f6fc61a-be79-4e35-82a5-7a71662bfb83', '43Lauretta_Witting31@yahoo.com', 'Emily Jones', 'https://i.imgur.com/YfJQV5z.png?id=45', 'inv67890', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('e8f09c3b-a69e-4db3-8571-a963b013f453', '50Queen83@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=52', 'inv09876', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('6874b532-445f-4849-927b-d7532120d836', '64Irving63@yahoo.com', 'Michael Brown', 'https://i.imgur.com/YfJQV5z.png?id=66', 'inv12345', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('d294c4cb-6f26-4840-a79e-a2a1e415585b', 'a1b2c3d4e5f6g7h8i9j0', '{"conatus":"sonitus","volaticus":"tres","cernuus":"thermae","derideo":"atqui","tondeo":"vinco"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('65d60d71-658b-4c7f-985d-9ac720b946e5', 'z9y8x7w6v5u4t3s2r1q0', '{"calamitas":"provident","adulescens":"balbus","suppono":"depraedor"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('d7e5900a-dae4-41b0-b51b-d9806600ea98', 'z9y8x7w6v5u4t3s2r1q0', '{"vita":"combibo","cohaero":"conitor","solum":"illum","necessitatibus":"strenuus"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('3ba25160-ec5b-484d-9686-bc216ad1845d', 'w1x2y3z4a5b6c7d8e9f0', '{"certus":"vulgivagus","auctor":"vix","universe":"delinquo"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('f564cfcf-09d1-47a7-81b9-904e956545ae', 'k9l8m7n6o5p4q3r2s1t0', '{"laudantium":"adicio","tui":"defetiscor","admoveo":"arto"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('3fdb6c4f-f936-4a16-9a01-d729e15589bc', 'z9y8x7w6v5u4t3s2r1q0', '{"aptus":"brevis","aetas":"aliquam","agnitio":"quia"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('afbe871b-8f44-424d-933c-9de87ba8d0ef', 'z9y8x7w6v5u4t3s2r1q0', '{"comparo":"totus","cruciamentum":"absorbeo","architecto":"veritas","coruscus":"mollitia","denego":"sunt"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('024cd4cd-b752-4b79-80c8-3861625a507b', 'm1n2o3p4q5r6s7t8u9v0', '{"valde":"magni","theatrum":"calamitas","varius":"curatio","aro":"adflicto"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('046b426d-65fc-488c-81a2-4d2c49d81e4e', 'a1b2c3d4e5f6g7h8i9j0', '{"certe":"cognatus","accusator":"argentum","arto":"utrum","repellendus":"catena"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('3fc8032c-7ccb-4520-b1f3-30a819afd523', 'k9l8m7n6o5p4q3r2s1t0', '{"dens":"adfectus","stipes":"conculco","confero":"sustineo"}'::jsonb);

INSERT INTO "Chat" ("id", "message", "timestamp", "userId") VALUES ('a3e6a446-b16f-4a09-8e5d-8a9a28165fb0', 'The new shipment has arrived please update the stock levels.', '2025-01-03T05:52:07.084Z', 'caa69e1d-f7fe-4fae-9e9f-6b6c423d784f');
INSERT INTO "Chat" ("id", "message", "timestamp", "userId") VALUES ('e9b27ff6-9bfc-4e0c-ac59-2f3bef3726f0', 'Could you generate an invoice for the recent order', '2023-11-26T09:05:33.446Z', '7d342248-293b-4d9c-8b6b-3077dcdc87e3');
INSERT INTO "Chat" ("id", "message", "timestamp", "userId") VALUES ('c9654ff9-4815-4562-b209-012b1f6e7410', 'Could you generate an invoice for the recent order', '2024-08-01T17:51:11.579Z', 'c4977f81-adcd-4d1c-b03e-0a5629905b20');
INSERT INTO "Chat" ("id", "message", "timestamp", "userId") VALUES ('3b321424-1e31-486b-8c49-d0ab7f7c320f', 'Can you send me the latest inventory report', '2023-10-22T04:15:29.767Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Chat" ("id", "message", "timestamp", "userId") VALUES ('29995f0f-93dd-4277-87b5-62c0d3f1570d', 'The new shipment has arrived please update the stock levels.', '2024-05-23T10:51:05.835Z', '6874b532-445f-4849-927b-d7532120d836');
INSERT INTO "Chat" ("id", "message", "timestamp", "userId") VALUES ('45a8c264-fcec-4b2b-975c-1b3154490c31', 'Could you generate an invoice for the recent order', '2025-03-10T20:12:22.009Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Chat" ("id", "message", "timestamp", "userId") VALUES ('7c7db59a-cbcf-4989-bcb1-f96a203a4802', 'Can you send me the latest inventory report', '2023-11-11T01:46:28.412Z', '7d342248-293b-4d9c-8b6b-3077dcdc87e3');
INSERT INTO "Chat" ("id", "message", "timestamp", "userId") VALUES ('5725f83b-ff8e-4fd0-b1a3-352ba88587d7', 'I need the expense summary for last month.', '2023-09-20T16:37:17.675Z', '6874b532-445f-4849-927b-d7532120d836');
INSERT INTO "Chat" ("id", "message", "timestamp", "userId") VALUES ('6e3dd4c8-c816-4f06-b1ff-b36c2fc5be99', 'Could you generate an invoice for the recent order', '2024-09-30T04:28:53.567Z', '6874b532-445f-4849-927b-d7532120d836');
INSERT INTO "Chat" ("id", "message", "timestamp", "userId") VALUES ('5c9e2303-a837-41bb-a8ee-cd38308a1824', 'Lets schedule a meeting to review the financial dashboard.', '2023-09-19T06:08:58.979Z', '7d342248-293b-4d9c-8b6b-3077dcdc87e3');

INSERT INTO "Document" ("id", "name", "url", "userId") VALUES ('7369a471-b884-4630-ac54-a593201c0453', 'Annual_Budget_Proposal.pptx', 'https://i.imgur.com/YfJQV5z.png?id=132', 'c4977f81-adcd-4d1c-b03e-0a5629905b20');
INSERT INTO "Document" ("id", "name", "url", "userId") VALUES ('73ff6160-0eae-4919-92f1-8fc578fb84aa', 'Invoice_12345.pdf', 'https://i.imgur.com/YfJQV5z.png?id=135', '7310464b-c45f-40a4-a4d4-c075887db5b5');
INSERT INTO "Document" ("id", "name", "url", "userId") VALUES ('ddff9722-5cf3-4988-90c6-c5437b88d039', 'Expense_Summary_March.docx', 'https://i.imgur.com/YfJQV5z.png?id=138', 'caa69e1d-f7fe-4fae-9e9f-6b6c423d784f');
INSERT INTO "Document" ("id", "name", "url", "userId") VALUES ('5fef299a-5c3a-4c1f-8eed-6844121be078', 'Annual_Budget_Proposal.pptx', 'https://i.imgur.com/YfJQV5z.png?id=141', '7310464b-c45f-40a4-a4d4-c075887db5b5');
INSERT INTO "Document" ("id", "name", "url", "userId") VALUES ('7cf9617d-c86d-4f11-bb2a-f5c6df5cfd0e', 'Expense_Summary_March.docx', 'https://i.imgur.com/YfJQV5z.png?id=144', '9f6fc61a-be79-4e35-82a5-7a71662bfb83');
INSERT INTO "Document" ("id", "name", "url", "userId") VALUES ('3b1c8d49-e56d-488b-b7ad-db8afd9875db', 'Invoice_12345.pdf', 'https://i.imgur.com/YfJQV5z.png?id=147', '645204e9-fc96-47ad-963e-1cde001d5f70');
INSERT INTO "Document" ("id", "name", "url", "userId") VALUES ('21f8cb28-0878-414c-8fe6-200e5842b9b8', 'Q1_Financial_Report.pdf', 'https://i.imgur.com/YfJQV5z.png?id=150', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Document" ("id", "name", "url", "userId") VALUES ('1d6e1fe5-c2dc-46cd-9f19-4364d13aab6e', 'Q1_Financial_Report.pdf', 'https://i.imgur.com/YfJQV5z.png?id=153', 'c4977f81-adcd-4d1c-b03e-0a5629905b20');
INSERT INTO "Document" ("id", "name", "url", "userId") VALUES ('8ff7374d-d384-4fd4-b0a6-aa359c838141', 'Inventory_List_2023.xlsx', 'https://i.imgur.com/YfJQV5z.png?id=156', 'caa69e1d-f7fe-4fae-9e9f-6b6c423d784f');
INSERT INTO "Document" ("id", "name", "url", "userId") VALUES ('84656984-a3e9-4c42-bf91-d206526cb698', 'Q1_Financial_Report.pdf', 'https://i.imgur.com/YfJQV5z.png?id=159', '7310464b-c45f-40a4-a4d4-c075887db5b5');

INSERT INTO "Inventory" ("id", "itemName", "quantity", "price", "userId") VALUES ('94c37c6c-021c-4a2a-aab1-f08e3adf89d0', 'Printer', 523, 996, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Inventory" ("id", "itemName", "quantity", "price", "userId") VALUES ('9f2efc2a-c785-4add-a502-686b0d199c55', 'Notebook', 930, 640, '6874b532-445f-4849-927b-d7532120d836');
INSERT INTO "Inventory" ("id", "itemName", "quantity", "price", "userId") VALUES ('0b5b4b5a-906d-4962-b9b6-2335f5110147', 'Printer', 453, 876, '7310464b-c45f-40a4-a4d4-c075887db5b5');
INSERT INTO "Inventory" ("id", "itemName", "quantity", "price", "userId") VALUES ('8ad9ddc5-1edc-46a1-b86c-a7df6a505713', 'Office Chair', 439, 779, '9f6fc61a-be79-4e35-82a5-7a71662bfb83');
INSERT INTO "Inventory" ("id", "itemName", "quantity", "price", "userId") VALUES ('9c5a5917-f0e3-4a1d-b414-9f9f84d637e2', 'Printer', 697, 982, 'c4977f81-adcd-4d1c-b03e-0a5629905b20');
INSERT INTO "Inventory" ("id", "itemName", "quantity", "price", "userId") VALUES ('ee551a81-fcc8-4a94-b43d-43a434db7480', 'Notebook', 447, 394, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Inventory" ("id", "itemName", "quantity", "price", "userId") VALUES ('754a9908-7179-45a1-bc37-5ffeb056621c', 'Office Chair', 245, 688, '7d342248-293b-4d9c-8b6b-3077dcdc87e3');
INSERT INTO "Inventory" ("id", "itemName", "quantity", "price", "userId") VALUES ('c1916469-8fa5-4d87-90b3-4f2fd0392ece', 'Printer', 558, 240, '6874b532-445f-4849-927b-d7532120d836');
INSERT INTO "Inventory" ("id", "itemName", "quantity", "price", "userId") VALUES ('bbf2cef1-f3cb-447f-97ee-cc0dfd060538', 'Notebook', 728, 927, 'c4977f81-adcd-4d1c-b03e-0a5629905b20');
INSERT INTO "Inventory" ("id", "itemName", "quantity", "price", "userId") VALUES ('689fd9f4-7ed0-49ae-8e71-da0e8c036888', 'Notebook', 875, 426, '7310464b-c45f-40a4-a4d4-c075887db5b5');

INSERT INTO "Invoice" ("id", "amount", "dueDate", "status", "userId") VALUES ('c6700fbe-d89a-4ccb-a71a-4c0688e4b0c3', 134, '2025-01-13T06:25:00.434Z', 'Paid', '645204e9-fc96-47ad-963e-1cde001d5f70');
INSERT INTO "Invoice" ("id", "amount", "dueDate", "status", "userId") VALUES ('2152986f-ea80-49d0-8f4a-356e836c4679', 807, '2024-01-27T20:13:09.683Z', 'Draft', '7310464b-c45f-40a4-a4d4-c075887db5b5');
INSERT INTO "Invoice" ("id", "amount", "dueDate", "status", "userId") VALUES ('468d08d3-9ec0-4240-8897-60e84dcf621a', 16, '2025-06-05T17:33:15.798Z', 'Cancelled', '9f6fc61a-be79-4e35-82a5-7a71662bfb83');
INSERT INTO "Invoice" ("id", "amount", "dueDate", "status", "userId") VALUES ('6ef3cd3b-a6c3-45dd-889f-dabdb4ca6fdd', 517, '2023-12-17T18:43:21.348Z', 'Paid', '7d342248-293b-4d9c-8b6b-3077dcdc87e3');
INSERT INTO "Invoice" ("id", "amount", "dueDate", "status", "userId") VALUES ('87706571-582c-430b-9ce7-67a2e532264e', 355, '2024-09-13T09:32:15.192Z', 'Draft', 'c4977f81-adcd-4d1c-b03e-0a5629905b20');
INSERT INTO "Invoice" ("id", "amount", "dueDate", "status", "userId") VALUES ('62f90397-c3dc-4c8a-b3a0-e8a7c874ff83', 120, '2024-01-04T20:20:09.669Z', 'Overdue', '7d342248-293b-4d9c-8b6b-3077dcdc87e3');
INSERT INTO "Invoice" ("id", "amount", "dueDate", "status", "userId") VALUES ('a9b08489-86b2-427e-ab1a-d5b783cdf260', 151, '2024-07-19T00:40:04.705Z', 'Draft', 'caa69e1d-f7fe-4fae-9e9f-6b6c423d784f');
INSERT INTO "Invoice" ("id", "amount", "dueDate", "status", "userId") VALUES ('dd0a3b1a-69eb-42ef-a7f6-03838cc2bc99', 871, '2024-01-05T11:03:45.547Z', 'Pending', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Invoice" ("id", "amount", "dueDate", "status", "userId") VALUES ('67269e42-364f-4fc3-a515-4665f1bdf0ad', 232, '2024-07-02T18:39:07.252Z', 'Overdue', 'c4977f81-adcd-4d1c-b03e-0a5629905b20');
INSERT INTO "Invoice" ("id", "amount", "dueDate", "status", "userId") VALUES ('c5707794-c607-4f66-8424-3827135ae0d0', 698, '2025-06-23T14:11:56.851Z', 'Overdue', '7310464b-c45f-40a4-a4d4-c075887db5b5');

INSERT INTO "Expense" ("id", "amount", "category", "date", "userId") VALUES ('17296ac7-4910-4b4e-9123-094c351b253f', 593, 'Software', '2025-01-17T06:29:28.021Z', 'caa69e1d-f7fe-4fae-9e9f-6b6c423d784f');
INSERT INTO "Expense" ("id", "amount", "category", "date", "userId") VALUES ('c20d65c9-932a-47d5-8383-8e56202c092c', 18, 'Travel', '2023-10-13T18:20:46.956Z', '645204e9-fc96-47ad-963e-1cde001d5f70');
INSERT INTO "Expense" ("id", "amount", "category", "date", "userId") VALUES ('be4048e6-ee9b-48ed-9d3b-b1a70dc076e5', 897, 'Marketing', '2025-06-02T03:25:30.355Z', 'c4977f81-adcd-4d1c-b03e-0a5629905b20');
INSERT INTO "Expense" ("id", "amount", "category", "date", "userId") VALUES ('840a5909-3b2b-4f8e-8a94-b4e82ea84c7a', 521, 'Marketing', '2025-04-27T19:14:04.544Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Expense" ("id", "amount", "category", "date", "userId") VALUES ('e155b415-8501-4ee4-86e7-69bfd3c80fe3', 728, 'Software', '2024-08-14T19:09:09.080Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Expense" ("id", "amount", "category", "date", "userId") VALUES ('71e24c50-1657-4ca2-9c5e-70ea3193b168', 191, 'Software', '2025-06-22T16:06:52.573Z', 'c4977f81-adcd-4d1c-b03e-0a5629905b20');
INSERT INTO "Expense" ("id", "amount", "category", "date", "userId") VALUES ('b220eb20-5971-4ff6-b763-8ef5cae3690d', 21, 'Marketing', '2024-12-07T16:03:15.442Z', '645204e9-fc96-47ad-963e-1cde001d5f70');
INSERT INTO "Expense" ("id", "amount", "category", "date", "userId") VALUES ('15ed155b-a574-4d8f-965e-56606a026af4', 602, 'Utilities', '2024-06-11T21:58:33.162Z', '645204e9-fc96-47ad-963e-1cde001d5f70');
INSERT INTO "Expense" ("id", "amount", "category", "date", "userId") VALUES ('d38d05c4-b063-499c-b550-5895482700c0', 219, 'Travel', '2024-07-03T18:59:01.740Z', 'e8f09c3b-a69e-4db3-8571-a963b013f453');
INSERT INTO "Expense" ("id", "amount", "category", "date", "userId") VALUES ('f6444b9f-768d-428f-a3ea-955d9c8d59bf', 865, 'Travel', '2025-05-16T21:08:09.062Z', 'e8f09c3b-a69e-4db3-8571-a963b013f453');

INSERT INTO "BankReconciliation" ("id", "bankStatementId", "reconciledAmount", "date", "userId") VALUES ('7c642bdf-d0d5-471a-a45b-6bbf1afa78c7', 'd75935c5-7beb-4a6f-821a-4de519ce9ede', 982, '2024-12-21T15:22:29.790Z', '496a9b30-0ec8-41c2-9db4-cb69a15a4442');
INSERT INTO "BankReconciliation" ("id", "bankStatementId", "reconciledAmount", "date", "userId") VALUES ('8772cb5b-47a7-4355-b7f4-38d02bb633f4', '07d916fb-e1d1-409a-b8b3-389afdc16fd6', 345, '2025-03-02T04:22:10.332Z', '7310464b-c45f-40a4-a4d4-c075887db5b5');
INSERT INTO "BankReconciliation" ("id", "bankStatementId", "reconciledAmount", "date", "userId") VALUES ('932389f4-d164-46c6-bcba-0e78ff81641f', '5bc75972-df3d-427d-9bca-31aa608ba9c3', 314, '2025-07-21T09:02:40.346Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "BankReconciliation" ("id", "bankStatementId", "reconciledAmount", "date", "userId") VALUES ('18202f27-9ef7-4c55-b89b-78f68fa84de3', '52f1ecd2-48f0-4999-a05c-be099841cd5c', 221, '2024-09-16T07:40:14.287Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "BankReconciliation" ("id", "bankStatementId", "reconciledAmount", "date", "userId") VALUES ('de8ffc47-5c28-4ec0-9eb7-22ccb753d5bc', '3bb0f458-e04f-4740-9da3-6bf62817b9d2', 499, '2025-07-23T01:58:58.030Z', 'caa69e1d-f7fe-4fae-9e9f-6b6c423d784f');
INSERT INTO "BankReconciliation" ("id", "bankStatementId", "reconciledAmount", "date", "userId") VALUES ('f9b03359-d18a-48b2-a805-989cae1582d1', '5ec5c7da-2ae8-406a-be1a-7c1ac77d87d0', 329, '2024-09-24T01:48:02.220Z', '496a9b30-0ec8-41c2-9db4-cb69a15a4442');
INSERT INTO "BankReconciliation" ("id", "bankStatementId", "reconciledAmount", "date", "userId") VALUES ('dab1f050-b008-4b12-95b7-084a063578db', '179d31ef-a255-432d-81fb-41bf8ac8d040', 31, '2023-10-27T06:54:31.394Z', '7310464b-c45f-40a4-a4d4-c075887db5b5');
INSERT INTO "BankReconciliation" ("id", "bankStatementId", "reconciledAmount", "date", "userId") VALUES ('d9f13c3a-8240-46f7-badf-79754ec4c72d', 'cea7c156-ee9d-44f8-ad5b-746579038daf', 732, '2024-01-05T18:27:16.877Z', '9f6fc61a-be79-4e35-82a5-7a71662bfb83');
INSERT INTO "BankReconciliation" ("id", "bankStatementId", "reconciledAmount", "date", "userId") VALUES ('5269ff20-ab5e-4b99-bfbb-3799490e902f', 'a681878b-a597-43ef-810b-eb5ac9dc2adc', 560, '2024-08-30T14:27:11.331Z', '7d342248-293b-4d9c-8b6b-3077dcdc87e3');
INSERT INTO "BankReconciliation" ("id", "bankStatementId", "reconciledAmount", "date", "userId") VALUES ('424c07d1-146e-4987-a7ee-352d58623a48', '2eb73e7a-a520-40c7-b54b-0bdebb34019c', 310, '2025-05-28T14:19:03.483Z', 'e8f09c3b-a69e-4db3-8571-a963b013f453');

INSERT INTO "FinancialInsight" ("id", "insightType", "description", "userId") VALUES ('d46fa091-ae51-4bf1-8c76-759f21460e67', 'Expense Reduction', 'Identifying areas to reduce operational expenses by 15.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "FinancialInsight" ("id", "insightType", "description", "userId") VALUES ('e073195f-78aa-4b84-a2b2-1b1a7754c1cc', 'Inventory Turnover', 'Evaluating profit margins across different product lines to boost profitability.', 'e8f09c3b-a69e-4db3-8571-a963b013f453');
INSERT INTO "FinancialInsight" ("id", "insightType", "description", "userId") VALUES ('a642550c-9ac4-4ddd-a95d-63be02fa00bb', 'Revenue Growth', 'Optimizing cash flow by adjusting payment terms with suppliers.', 'e8f09c3b-a69e-4db3-8571-a963b013f453');
INSERT INTO "FinancialInsight" ("id", "insightType", "description", "userId") VALUES ('c4bc0981-90c7-4dbf-b9dd-3d5a4a053963', 'Profit Margin Analysis', 'Optimizing cash flow by adjusting payment terms with suppliers.', '7310464b-c45f-40a4-a4d4-c075887db5b5');
INSERT INTO "FinancialInsight" ("id", "insightType", "description", "userId") VALUES ('04898b48-2214-4214-a3b1-b9740dcf4b68', 'Inventory Turnover', 'Analyzing quarterly revenue growth trends to identify key drivers.', '496a9b30-0ec8-41c2-9db4-cb69a15a4442');
INSERT INTO "FinancialInsight" ("id", "insightType", "description", "userId") VALUES ('af5659a8-c024-4617-8406-174970adcc07', 'Profit Margin Analysis', 'Improving inventory turnover rates to enhance stock management.', '6874b532-445f-4849-927b-d7532120d836');
INSERT INTO "FinancialInsight" ("id", "insightType", "description", "userId") VALUES ('8400719e-a74e-40a7-bdf3-b8d02f57988e', 'Expense Reduction', 'Identifying areas to reduce operational expenses by 15.', 'c4977f81-adcd-4d1c-b03e-0a5629905b20');
INSERT INTO "FinancialInsight" ("id", "insightType", "description", "userId") VALUES ('c4935e8e-fcbf-435e-81a8-5ea6cf2dea58', 'Revenue Growth', 'Optimizing cash flow by adjusting payment terms with suppliers.', 'caa69e1d-f7fe-4fae-9e9f-6b6c423d784f');
INSERT INTO "FinancialInsight" ("id", "insightType", "description", "userId") VALUES ('99b1159c-af12-432b-b50e-598ad58f0512', 'Profit Margin Analysis', 'Evaluating profit margins across different product lines to boost profitability.', '496a9b30-0ec8-41c2-9db4-cb69a15a4442');
INSERT INTO "FinancialInsight" ("id", "insightType", "description", "userId") VALUES ('d8287324-bd20-4ff3-9a57-ea3bb95f5625', 'Cash Flow Optimization', 'Identifying areas to reduce operational expenses by 15.', '9f6fc61a-be79-4e35-82a5-7a71662bfb83');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
