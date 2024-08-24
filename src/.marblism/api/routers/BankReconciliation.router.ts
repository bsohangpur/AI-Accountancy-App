/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.BankReconciliationInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).bankReconciliation.createMany(input as any))),

        create: procedure.input($Schema.BankReconciliationInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).bankReconciliation.create(input as any))),

        deleteMany: procedure.input($Schema.BankReconciliationInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).bankReconciliation.deleteMany(input as any))),

        delete: procedure.input($Schema.BankReconciliationInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).bankReconciliation.delete(input as any))),

        findFirst: procedure.input($Schema.BankReconciliationInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).bankReconciliation.findFirst(input as any))),

        findMany: procedure.input($Schema.BankReconciliationInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).bankReconciliation.findMany(input as any))),

        findUnique: procedure.input($Schema.BankReconciliationInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).bankReconciliation.findUnique(input as any))),

        updateMany: procedure.input($Schema.BankReconciliationInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).bankReconciliation.updateMany(input as any))),

        update: procedure.input($Schema.BankReconciliationInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).bankReconciliation.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.BankReconciliationCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BankReconciliationCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BankReconciliationCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BankReconciliationCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.BankReconciliationCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BankReconciliationCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BankReconciliationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BankReconciliationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BankReconciliationCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BankReconciliationCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BankReconciliationGetPayload<T>, Context>) => Promise<Prisma.BankReconciliationGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.BankReconciliationDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BankReconciliationDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BankReconciliationDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BankReconciliationDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.BankReconciliationDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BankReconciliationDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BankReconciliationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BankReconciliationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BankReconciliationDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BankReconciliationDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BankReconciliationGetPayload<T>, Context>) => Promise<Prisma.BankReconciliationGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.BankReconciliationFindFirstArgs, TData = Prisma.BankReconciliationGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.BankReconciliationFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.BankReconciliationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.BankReconciliationFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.BankReconciliationFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.BankReconciliationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.BankReconciliationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.BankReconciliationFindManyArgs, TData = Array<Prisma.BankReconciliationGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.BankReconciliationFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.BankReconciliationGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.BankReconciliationFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.BankReconciliationFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.BankReconciliationGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.BankReconciliationGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.BankReconciliationFindUniqueArgs, TData = Prisma.BankReconciliationGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.BankReconciliationFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.BankReconciliationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.BankReconciliationFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.BankReconciliationFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.BankReconciliationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.BankReconciliationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.BankReconciliationUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BankReconciliationUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BankReconciliationUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BankReconciliationUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.BankReconciliationUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BankReconciliationUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BankReconciliationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BankReconciliationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BankReconciliationUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BankReconciliationUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BankReconciliationGetPayload<T>, Context>) => Promise<Prisma.BankReconciliationGetPayload<T>>
            };

    };
}
