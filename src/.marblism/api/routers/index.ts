/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createAccountRouter from "./Account.router";
import createUserRouter from "./User.router";
import createSessionRouter from "./Session.router";
import createRoleRouter from "./Role.router";
import createChatRouter from "./Chat.router";
import createDocumentRouter from "./Document.router";
import createInventoryRouter from "./Inventory.router";
import createInvoiceRouter from "./Invoice.router";
import createExpenseRouter from "./Expense.router";
import createBankReconciliationRouter from "./BankReconciliation.router";
import createFinancialInsightRouter from "./FinancialInsight.router";
import createRagVectorRouter from "./RagVector.router";
import { ClientType as AccountClientType } from "./Account.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as SessionClientType } from "./Session.router";
import { ClientType as RoleClientType } from "./Role.router";
import { ClientType as ChatClientType } from "./Chat.router";
import { ClientType as DocumentClientType } from "./Document.router";
import { ClientType as InventoryClientType } from "./Inventory.router";
import { ClientType as InvoiceClientType } from "./Invoice.router";
import { ClientType as ExpenseClientType } from "./Expense.router";
import { ClientType as BankReconciliationClientType } from "./BankReconciliation.router";
import { ClientType as FinancialInsightClientType } from "./FinancialInsight.router";
import { ClientType as RagVectorClientType } from "./RagVector.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        account: createAccountRouter(router, procedure),
        user: createUserRouter(router, procedure),
        session: createSessionRouter(router, procedure),
        role: createRoleRouter(router, procedure),
        chat: createChatRouter(router, procedure),
        document: createDocumentRouter(router, procedure),
        inventory: createInventoryRouter(router, procedure),
        invoice: createInvoiceRouter(router, procedure),
        expense: createExpenseRouter(router, procedure),
        bankReconciliation: createBankReconciliationRouter(router, procedure),
        financialInsight: createFinancialInsightRouter(router, procedure),
        ragVector: createRagVectorRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    account: AccountClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
    role: RoleClientType<AppRouter>;
    chat: ChatClientType<AppRouter>;
    document: DocumentClientType<AppRouter>;
    inventory: InventoryClientType<AppRouter>;
    invoice: InvoiceClientType<AppRouter>;
    expense: ExpenseClientType<AppRouter>;
    bankReconciliation: BankReconciliationClientType<AppRouter>;
    financialInsight: FinancialInsightClientType<AppRouter>;
    ragVector: RagVectorClientType<AppRouter>;
}
