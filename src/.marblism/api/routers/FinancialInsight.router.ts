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

        createMany: procedure.input($Schema.FinancialInsightInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).financialInsight.createMany(input as any))),

        create: procedure.input($Schema.FinancialInsightInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).financialInsight.create(input as any))),

        deleteMany: procedure.input($Schema.FinancialInsightInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).financialInsight.deleteMany(input as any))),

        delete: procedure.input($Schema.FinancialInsightInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).financialInsight.delete(input as any))),

        findFirst: procedure.input($Schema.FinancialInsightInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).financialInsight.findFirst(input as any))),

        findMany: procedure.input($Schema.FinancialInsightInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).financialInsight.findMany(input as any))),

        findUnique: procedure.input($Schema.FinancialInsightInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).financialInsight.findUnique(input as any))),

        updateMany: procedure.input($Schema.FinancialInsightInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).financialInsight.updateMany(input as any))),

        update: procedure.input($Schema.FinancialInsightInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).financialInsight.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.FinancialInsightCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.FinancialInsightCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.FinancialInsightCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.FinancialInsightCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.FinancialInsightCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.FinancialInsightCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.FinancialInsightGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.FinancialInsightGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.FinancialInsightCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.FinancialInsightCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.FinancialInsightGetPayload<T>, Context>) => Promise<Prisma.FinancialInsightGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.FinancialInsightDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.FinancialInsightDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.FinancialInsightDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.FinancialInsightDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.FinancialInsightDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.FinancialInsightDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.FinancialInsightGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.FinancialInsightGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.FinancialInsightDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.FinancialInsightDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.FinancialInsightGetPayload<T>, Context>) => Promise<Prisma.FinancialInsightGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.FinancialInsightFindFirstArgs, TData = Prisma.FinancialInsightGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.FinancialInsightFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.FinancialInsightGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.FinancialInsightFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.FinancialInsightFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.FinancialInsightGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.FinancialInsightGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.FinancialInsightFindManyArgs, TData = Array<Prisma.FinancialInsightGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.FinancialInsightFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.FinancialInsightGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.FinancialInsightFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.FinancialInsightFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.FinancialInsightGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.FinancialInsightGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.FinancialInsightFindUniqueArgs, TData = Prisma.FinancialInsightGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.FinancialInsightFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.FinancialInsightGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.FinancialInsightFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.FinancialInsightFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.FinancialInsightGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.FinancialInsightGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.FinancialInsightUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.FinancialInsightUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.FinancialInsightUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.FinancialInsightUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.FinancialInsightUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.FinancialInsightUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.FinancialInsightGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.FinancialInsightGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.FinancialInsightUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.FinancialInsightUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.FinancialInsightGetPayload<T>, Context>) => Promise<Prisma.FinancialInsightGetPayload<T>>
            };

    };
}
