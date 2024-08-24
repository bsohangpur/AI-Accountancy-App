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

        createMany: procedure.input($Schema.InventoryInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).inventory.createMany(input as any))),

        create: procedure.input($Schema.InventoryInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).inventory.create(input as any))),

        deleteMany: procedure.input($Schema.InventoryInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).inventory.deleteMany(input as any))),

        delete: procedure.input($Schema.InventoryInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).inventory.delete(input as any))),

        findFirst: procedure.input($Schema.InventoryInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).inventory.findFirst(input as any))),

        findMany: procedure.input($Schema.InventoryInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).inventory.findMany(input as any))),

        findUnique: procedure.input($Schema.InventoryInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).inventory.findUnique(input as any))),

        updateMany: procedure.input($Schema.InventoryInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).inventory.updateMany(input as any))),

        update: procedure.input($Schema.InventoryInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).inventory.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.InventoryCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.InventoryCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.InventoryCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.InventoryCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.InventoryCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.InventoryCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.InventoryGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.InventoryGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.InventoryCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.InventoryCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.InventoryGetPayload<T>, Context>) => Promise<Prisma.InventoryGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.InventoryDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.InventoryDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.InventoryDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.InventoryDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.InventoryDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.InventoryDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.InventoryGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.InventoryGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.InventoryDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.InventoryDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.InventoryGetPayload<T>, Context>) => Promise<Prisma.InventoryGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.InventoryFindFirstArgs, TData = Prisma.InventoryGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.InventoryFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.InventoryGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.InventoryFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.InventoryFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.InventoryGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.InventoryGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.InventoryFindManyArgs, TData = Array<Prisma.InventoryGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.InventoryFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.InventoryGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.InventoryFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.InventoryFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.InventoryGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.InventoryGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.InventoryFindUniqueArgs, TData = Prisma.InventoryGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.InventoryFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.InventoryGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.InventoryFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.InventoryFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.InventoryGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.InventoryGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.InventoryUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.InventoryUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.InventoryUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.InventoryUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.InventoryUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.InventoryUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.InventoryGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.InventoryGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.InventoryUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.InventoryUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.InventoryGetPayload<T>, Context>) => Promise<Prisma.InventoryGetPayload<T>>
            };

    };
}
