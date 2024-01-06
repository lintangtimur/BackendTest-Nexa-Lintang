
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model admin
 * 
 */
export type admin = $Result.DefaultSelection<Prisma.$adminPayload>
/**
 * Model admin_token
 * 
 */
export type admin_token = $Result.DefaultSelection<Prisma.$admin_tokenPayload>
/**
 * Model karyawan
 * 
 */
export type karyawan = $Result.DefaultSelection<Prisma.$karyawanPayload>
/**
 * Model log_trx_api
 * 
 */
export type log_trx_api = $Result.DefaultSelection<Prisma.$log_trx_apiPayload>
/**
 * Model SequelizeMeta
 * 
 */
export type SequelizeMeta = $Result.DefaultSelection<Prisma.$SequelizeMetaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  L: 'L',
  P: 'P'
};

export type Gender = (typeof Gender)[keyof typeof Gender]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.adminDelegate<ExtArgs>;

  /**
   * `prisma.admin_token`: Exposes CRUD operations for the **admin_token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admin_tokens
    * const admin_tokens = await prisma.admin_token.findMany()
    * ```
    */
  get admin_token(): Prisma.admin_tokenDelegate<ExtArgs>;

  /**
   * `prisma.karyawan`: Exposes CRUD operations for the **karyawan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Karyawans
    * const karyawans = await prisma.karyawan.findMany()
    * ```
    */
  get karyawan(): Prisma.karyawanDelegate<ExtArgs>;

  /**
   * `prisma.log_trx_api`: Exposes CRUD operations for the **log_trx_api** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Log_trx_apis
    * const log_trx_apis = await prisma.log_trx_api.findMany()
    * ```
    */
  get log_trx_api(): Prisma.log_trx_apiDelegate<ExtArgs>;

  /**
   * `prisma.sequelizeMeta`: Exposes CRUD operations for the **SequelizeMeta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SequelizeMetas
    * const sequelizeMetas = await prisma.sequelizeMeta.findMany()
    * ```
    */
  get sequelizeMeta(): Prisma.SequelizeMetaDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.7.1
   * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    admin: 'admin',
    admin_token: 'admin_token',
    karyawan: 'karyawan',
    log_trx_api: 'log_trx_api',
    SequelizeMeta: 'SequelizeMeta'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'admin' | 'admin_token' | 'karyawan' | 'log_trx_api' | 'sequelizeMeta'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      admin: {
        payload: Prisma.$adminPayload<ExtArgs>
        fields: Prisma.adminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adminFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adminFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findFirst: {
            args: Prisma.adminFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adminFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findMany: {
            args: Prisma.adminFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          create: {
            args: Prisma.adminCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          createMany: {
            args: Prisma.adminCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.adminDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          update: {
            args: Prisma.adminUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          deleteMany: {
            args: Prisma.adminDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.adminUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.adminUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.adminGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.adminCountArgs<ExtArgs>,
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      admin_token: {
        payload: Prisma.$admin_tokenPayload<ExtArgs>
        fields: Prisma.admin_tokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.admin_tokenFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$admin_tokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.admin_tokenFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$admin_tokenPayload>
          }
          findFirst: {
            args: Prisma.admin_tokenFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$admin_tokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.admin_tokenFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$admin_tokenPayload>
          }
          findMany: {
            args: Prisma.admin_tokenFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$admin_tokenPayload>[]
          }
          create: {
            args: Prisma.admin_tokenCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$admin_tokenPayload>
          }
          createMany: {
            args: Prisma.admin_tokenCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.admin_tokenDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$admin_tokenPayload>
          }
          update: {
            args: Prisma.admin_tokenUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$admin_tokenPayload>
          }
          deleteMany: {
            args: Prisma.admin_tokenDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.admin_tokenUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.admin_tokenUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$admin_tokenPayload>
          }
          aggregate: {
            args: Prisma.Admin_tokenAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAdmin_token>
          }
          groupBy: {
            args: Prisma.admin_tokenGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Admin_tokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.admin_tokenCountArgs<ExtArgs>,
            result: $Utils.Optional<Admin_tokenCountAggregateOutputType> | number
          }
        }
      }
      karyawan: {
        payload: Prisma.$karyawanPayload<ExtArgs>
        fields: Prisma.karyawanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.karyawanFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$karyawanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.karyawanFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$karyawanPayload>
          }
          findFirst: {
            args: Prisma.karyawanFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$karyawanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.karyawanFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$karyawanPayload>
          }
          findMany: {
            args: Prisma.karyawanFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$karyawanPayload>[]
          }
          create: {
            args: Prisma.karyawanCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$karyawanPayload>
          }
          createMany: {
            args: Prisma.karyawanCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.karyawanDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$karyawanPayload>
          }
          update: {
            args: Prisma.karyawanUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$karyawanPayload>
          }
          deleteMany: {
            args: Prisma.karyawanDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.karyawanUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.karyawanUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$karyawanPayload>
          }
          aggregate: {
            args: Prisma.KaryawanAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateKaryawan>
          }
          groupBy: {
            args: Prisma.karyawanGroupByArgs<ExtArgs>,
            result: $Utils.Optional<KaryawanGroupByOutputType>[]
          }
          count: {
            args: Prisma.karyawanCountArgs<ExtArgs>,
            result: $Utils.Optional<KaryawanCountAggregateOutputType> | number
          }
        }
      }
      log_trx_api: {
        payload: Prisma.$log_trx_apiPayload<ExtArgs>
        fields: Prisma.log_trx_apiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.log_trx_apiFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$log_trx_apiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.log_trx_apiFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$log_trx_apiPayload>
          }
          findFirst: {
            args: Prisma.log_trx_apiFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$log_trx_apiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.log_trx_apiFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$log_trx_apiPayload>
          }
          findMany: {
            args: Prisma.log_trx_apiFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$log_trx_apiPayload>[]
          }
          create: {
            args: Prisma.log_trx_apiCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$log_trx_apiPayload>
          }
          createMany: {
            args: Prisma.log_trx_apiCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.log_trx_apiDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$log_trx_apiPayload>
          }
          update: {
            args: Prisma.log_trx_apiUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$log_trx_apiPayload>
          }
          deleteMany: {
            args: Prisma.log_trx_apiDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.log_trx_apiUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.log_trx_apiUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$log_trx_apiPayload>
          }
          aggregate: {
            args: Prisma.Log_trx_apiAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLog_trx_api>
          }
          groupBy: {
            args: Prisma.log_trx_apiGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Log_trx_apiGroupByOutputType>[]
          }
          count: {
            args: Prisma.log_trx_apiCountArgs<ExtArgs>,
            result: $Utils.Optional<Log_trx_apiCountAggregateOutputType> | number
          }
        }
      }
      SequelizeMeta: {
        payload: Prisma.$SequelizeMetaPayload<ExtArgs>
        fields: Prisma.SequelizeMetaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SequelizeMetaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SequelizeMetaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SequelizeMetaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SequelizeMetaPayload>
          }
          findFirst: {
            args: Prisma.SequelizeMetaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SequelizeMetaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SequelizeMetaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SequelizeMetaPayload>
          }
          findMany: {
            args: Prisma.SequelizeMetaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SequelizeMetaPayload>[]
          }
          create: {
            args: Prisma.SequelizeMetaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SequelizeMetaPayload>
          }
          createMany: {
            args: Prisma.SequelizeMetaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SequelizeMetaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SequelizeMetaPayload>
          }
          update: {
            args: Prisma.SequelizeMetaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SequelizeMetaPayload>
          }
          deleteMany: {
            args: Prisma.SequelizeMetaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SequelizeMetaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SequelizeMetaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SequelizeMetaPayload>
          }
          aggregate: {
            args: Prisma.SequelizeMetaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSequelizeMeta>
          }
          groupBy: {
            args: Prisma.SequelizeMetaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SequelizeMetaGroupByOutputType>[]
          }
          count: {
            args: Prisma.SequelizeMetaCountArgs<ExtArgs>,
            result: $Utils.Optional<SequelizeMetaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    tokens: number
  }

  export type AdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens?: boolean | AdminCountOutputTypeCountTokensArgs
  }

  // Custom InputTypes

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: admin_tokenWhereInput
  }



  /**
   * Models
   */

  /**
   * Model admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: Buffer | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: Buffer | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    username: number
    password: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin to aggregate.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type adminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adminWhereInput
    orderBy?: adminOrderByWithAggregationInput | adminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: adminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    username: string
    password: Buffer | null
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends adminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type adminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    tokens?: boolean | admin$tokensArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type adminSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
  }

  export type adminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens?: boolean | admin$tokensArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $adminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin"
    objects: {
      tokens: Prisma.$admin_tokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: Buffer | null
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }


  type adminGetPayload<S extends boolean | null | undefined | adminDefaultArgs> = $Result.GetResult<Prisma.$adminPayload, S>

  type adminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<adminFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: AdminCountAggregateInputType | true
    }

  export interface adminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin'], meta: { name: 'admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {adminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends adminFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, adminFindUniqueArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Admin that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {adminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends adminFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, adminFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends adminFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, adminFindFirstArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends adminFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, adminFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends adminFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, adminFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Admin.
     * @param {adminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
    **/
    create<T extends adminCreateArgs<ExtArgs>>(
      args: SelectSubset<T, adminCreateArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Admins.
     *     @param {adminCreateManyArgs} args - Arguments to create many Admins.
     *     @example
     *     // Create many Admins
     *     const admin = await prisma.admin.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends adminCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, adminCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {adminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
    **/
    delete<T extends adminDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, adminDeleteArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Admin.
     * @param {adminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends adminUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, adminUpdateArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Admins.
     * @param {adminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends adminDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, adminDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends adminUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, adminUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {adminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
    **/
    upsert<T extends adminUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, adminUpsertArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends adminCountArgs>(
      args?: Subset<T, adminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends adminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adminGroupByArgs['orderBy'] }
        : { orderBy?: adminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, adminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin model
   */
  readonly fields: adminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tokens<T extends admin$tokensArgs<ExtArgs> = {}>(args?: Subset<T, admin$tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$admin_tokenPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the admin model
   */ 
  interface adminFieldRefs {
    readonly id: FieldRef<"admin", 'Int'>
    readonly username: FieldRef<"admin", 'String'>
    readonly password: FieldRef<"admin", 'Bytes'>
  }
    

  // Custom InputTypes

  /**
   * admin findUnique
   */
  export type adminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }


  /**
   * admin findUniqueOrThrow
   */
  export type adminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }


  /**
   * admin findFirst
   */
  export type adminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }


  /**
   * admin findFirstOrThrow
   */
  export type adminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }


  /**
   * admin findMany
   */
  export type adminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }


  /**
   * admin create
   */
  export type adminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * The data needed to create a admin.
     */
    data: XOR<adminCreateInput, adminUncheckedCreateInput>
  }


  /**
   * admin createMany
   */
  export type adminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admins.
     */
    data: adminCreateManyInput | adminCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * admin update
   */
  export type adminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * The data needed to update a admin.
     */
    data: XOR<adminUpdateInput, adminUncheckedUpdateInput>
    /**
     * Choose, which admin to update.
     */
    where: adminWhereUniqueInput
  }


  /**
   * admin updateMany
   */
  export type adminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
  }


  /**
   * admin upsert
   */
  export type adminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * The filter to search for the admin to update in case it exists.
     */
    where: adminWhereUniqueInput
    /**
     * In case the admin found by the `where` argument doesn't exist, create a new admin with this data.
     */
    create: XOR<adminCreateInput, adminUncheckedCreateInput>
    /**
     * In case the admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adminUpdateInput, adminUncheckedUpdateInput>
  }


  /**
   * admin delete
   */
  export type adminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter which admin to delete.
     */
    where: adminWhereUniqueInput
  }


  /**
   * admin deleteMany
   */
  export type adminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to delete
     */
    where?: adminWhereInput
  }


  /**
   * admin.tokens
   */
  export type admin$tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_token
     */
    select?: admin_tokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: admin_tokenInclude<ExtArgs> | null
    where?: admin_tokenWhereInput
    orderBy?: admin_tokenOrderByWithRelationInput | admin_tokenOrderByWithRelationInput[]
    cursor?: admin_tokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Admin_tokenScalarFieldEnum | Admin_tokenScalarFieldEnum[]
  }


  /**
   * admin without action
   */
  export type adminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adminInclude<ExtArgs> | null
  }



  /**
   * Model admin_token
   */

  export type AggregateAdmin_token = {
    _count: Admin_tokenCountAggregateOutputType | null
    _avg: Admin_tokenAvgAggregateOutputType | null
    _sum: Admin_tokenSumAggregateOutputType | null
    _min: Admin_tokenMinAggregateOutputType | null
    _max: Admin_tokenMaxAggregateOutputType | null
  }

  export type Admin_tokenAvgAggregateOutputType = {
    id: number | null
    id_admin: number | null
  }

  export type Admin_tokenSumAggregateOutputType = {
    id: number | null
    id_admin: number | null
  }

  export type Admin_tokenMinAggregateOutputType = {
    id: number | null
    id_admin: number | null
    token: string | null
    expired_at: Date | null
  }

  export type Admin_tokenMaxAggregateOutputType = {
    id: number | null
    id_admin: number | null
    token: string | null
    expired_at: Date | null
  }

  export type Admin_tokenCountAggregateOutputType = {
    id: number
    id_admin: number
    token: number
    expired_at: number
    _all: number
  }


  export type Admin_tokenAvgAggregateInputType = {
    id?: true
    id_admin?: true
  }

  export type Admin_tokenSumAggregateInputType = {
    id?: true
    id_admin?: true
  }

  export type Admin_tokenMinAggregateInputType = {
    id?: true
    id_admin?: true
    token?: true
    expired_at?: true
  }

  export type Admin_tokenMaxAggregateInputType = {
    id?: true
    id_admin?: true
    token?: true
    expired_at?: true
  }

  export type Admin_tokenCountAggregateInputType = {
    id?: true
    id_admin?: true
    token?: true
    expired_at?: true
    _all?: true
  }

  export type Admin_tokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin_token to aggregate.
     */
    where?: admin_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_tokens to fetch.
     */
    orderBy?: admin_tokenOrderByWithRelationInput | admin_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: admin_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admin_tokens
    **/
    _count?: true | Admin_tokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Admin_tokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Admin_tokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Admin_tokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Admin_tokenMaxAggregateInputType
  }

  export type GetAdmin_tokenAggregateType<T extends Admin_tokenAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin_token]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin_token[P]>
      : GetScalarType<T[P], AggregateAdmin_token[P]>
  }




  export type admin_tokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: admin_tokenWhereInput
    orderBy?: admin_tokenOrderByWithAggregationInput | admin_tokenOrderByWithAggregationInput[]
    by: Admin_tokenScalarFieldEnum[] | Admin_tokenScalarFieldEnum
    having?: admin_tokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Admin_tokenCountAggregateInputType | true
    _avg?: Admin_tokenAvgAggregateInputType
    _sum?: Admin_tokenSumAggregateInputType
    _min?: Admin_tokenMinAggregateInputType
    _max?: Admin_tokenMaxAggregateInputType
  }

  export type Admin_tokenGroupByOutputType = {
    id: number
    id_admin: number
    token: string | null
    expired_at: Date | null
    _count: Admin_tokenCountAggregateOutputType | null
    _avg: Admin_tokenAvgAggregateOutputType | null
    _sum: Admin_tokenSumAggregateOutputType | null
    _min: Admin_tokenMinAggregateOutputType | null
    _max: Admin_tokenMaxAggregateOutputType | null
  }

  type GetAdmin_tokenGroupByPayload<T extends admin_tokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Admin_tokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Admin_tokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Admin_tokenGroupByOutputType[P]>
            : GetScalarType<T[P], Admin_tokenGroupByOutputType[P]>
        }
      >
    >


  export type admin_tokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_admin?: boolean
    token?: boolean
    expired_at?: boolean
    admin?: boolean | adminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin_token"]>

  export type admin_tokenSelectScalar = {
    id?: boolean
    id_admin?: boolean
    token?: boolean
    expired_at?: boolean
  }

  export type admin_tokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | adminDefaultArgs<ExtArgs>
  }


  export type $admin_tokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin_token"
    objects: {
      admin: Prisma.$adminPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_admin: number
      token: string | null
      expired_at: Date | null
    }, ExtArgs["result"]["admin_token"]>
    composites: {}
  }


  type admin_tokenGetPayload<S extends boolean | null | undefined | admin_tokenDefaultArgs> = $Result.GetResult<Prisma.$admin_tokenPayload, S>

  type admin_tokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<admin_tokenFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: Admin_tokenCountAggregateInputType | true
    }

  export interface admin_tokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin_token'], meta: { name: 'admin_token' } }
    /**
     * Find zero or one Admin_token that matches the filter.
     * @param {admin_tokenFindUniqueArgs} args - Arguments to find a Admin_token
     * @example
     * // Get one Admin_token
     * const admin_token = await prisma.admin_token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends admin_tokenFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, admin_tokenFindUniqueArgs<ExtArgs>>
    ): Prisma__admin_tokenClient<$Result.GetResult<Prisma.$admin_tokenPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Admin_token that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {admin_tokenFindUniqueOrThrowArgs} args - Arguments to find a Admin_token
     * @example
     * // Get one Admin_token
     * const admin_token = await prisma.admin_token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends admin_tokenFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, admin_tokenFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__admin_tokenClient<$Result.GetResult<Prisma.$admin_tokenPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Admin_token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_tokenFindFirstArgs} args - Arguments to find a Admin_token
     * @example
     * // Get one Admin_token
     * const admin_token = await prisma.admin_token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends admin_tokenFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, admin_tokenFindFirstArgs<ExtArgs>>
    ): Prisma__admin_tokenClient<$Result.GetResult<Prisma.$admin_tokenPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Admin_token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_tokenFindFirstOrThrowArgs} args - Arguments to find a Admin_token
     * @example
     * // Get one Admin_token
     * const admin_token = await prisma.admin_token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends admin_tokenFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, admin_tokenFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__admin_tokenClient<$Result.GetResult<Prisma.$admin_tokenPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Admin_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_tokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admin_tokens
     * const admin_tokens = await prisma.admin_token.findMany()
     * 
     * // Get first 10 Admin_tokens
     * const admin_tokens = await prisma.admin_token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const admin_tokenWithIdOnly = await prisma.admin_token.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends admin_tokenFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, admin_tokenFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$admin_tokenPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Admin_token.
     * @param {admin_tokenCreateArgs} args - Arguments to create a Admin_token.
     * @example
     * // Create one Admin_token
     * const Admin_token = await prisma.admin_token.create({
     *   data: {
     *     // ... data to create a Admin_token
     *   }
     * })
     * 
    **/
    create<T extends admin_tokenCreateArgs<ExtArgs>>(
      args: SelectSubset<T, admin_tokenCreateArgs<ExtArgs>>
    ): Prisma__admin_tokenClient<$Result.GetResult<Prisma.$admin_tokenPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Admin_tokens.
     *     @param {admin_tokenCreateManyArgs} args - Arguments to create many Admin_tokens.
     *     @example
     *     // Create many Admin_tokens
     *     const admin_token = await prisma.admin_token.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends admin_tokenCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, admin_tokenCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin_token.
     * @param {admin_tokenDeleteArgs} args - Arguments to delete one Admin_token.
     * @example
     * // Delete one Admin_token
     * const Admin_token = await prisma.admin_token.delete({
     *   where: {
     *     // ... filter to delete one Admin_token
     *   }
     * })
     * 
    **/
    delete<T extends admin_tokenDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, admin_tokenDeleteArgs<ExtArgs>>
    ): Prisma__admin_tokenClient<$Result.GetResult<Prisma.$admin_tokenPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Admin_token.
     * @param {admin_tokenUpdateArgs} args - Arguments to update one Admin_token.
     * @example
     * // Update one Admin_token
     * const admin_token = await prisma.admin_token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends admin_tokenUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, admin_tokenUpdateArgs<ExtArgs>>
    ): Prisma__admin_tokenClient<$Result.GetResult<Prisma.$admin_tokenPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Admin_tokens.
     * @param {admin_tokenDeleteManyArgs} args - Arguments to filter Admin_tokens to delete.
     * @example
     * // Delete a few Admin_tokens
     * const { count } = await prisma.admin_token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends admin_tokenDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, admin_tokenDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admin_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_tokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admin_tokens
     * const admin_token = await prisma.admin_token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends admin_tokenUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, admin_tokenUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin_token.
     * @param {admin_tokenUpsertArgs} args - Arguments to update or create a Admin_token.
     * @example
     * // Update or create a Admin_token
     * const admin_token = await prisma.admin_token.upsert({
     *   create: {
     *     // ... data to create a Admin_token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin_token we want to update
     *   }
     * })
    **/
    upsert<T extends admin_tokenUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, admin_tokenUpsertArgs<ExtArgs>>
    ): Prisma__admin_tokenClient<$Result.GetResult<Prisma.$admin_tokenPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Admin_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_tokenCountArgs} args - Arguments to filter Admin_tokens to count.
     * @example
     * // Count the number of Admin_tokens
     * const count = await prisma.admin_token.count({
     *   where: {
     *     // ... the filter for the Admin_tokens we want to count
     *   }
     * })
    **/
    count<T extends admin_tokenCountArgs>(
      args?: Subset<T, admin_tokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Admin_tokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin_token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Admin_tokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Admin_tokenAggregateArgs>(args: Subset<T, Admin_tokenAggregateArgs>): Prisma.PrismaPromise<GetAdmin_tokenAggregateType<T>>

    /**
     * Group by Admin_token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_tokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends admin_tokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: admin_tokenGroupByArgs['orderBy'] }
        : { orderBy?: admin_tokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, admin_tokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdmin_tokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin_token model
   */
  readonly fields: admin_tokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin_token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__admin_tokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    admin<T extends adminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, adminDefaultArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the admin_token model
   */ 
  interface admin_tokenFieldRefs {
    readonly id: FieldRef<"admin_token", 'Int'>
    readonly id_admin: FieldRef<"admin_token", 'Int'>
    readonly token: FieldRef<"admin_token", 'String'>
    readonly expired_at: FieldRef<"admin_token", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * admin_token findUnique
   */
  export type admin_tokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_token
     */
    select?: admin_tokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: admin_tokenInclude<ExtArgs> | null
    /**
     * Filter, which admin_token to fetch.
     */
    where: admin_tokenWhereUniqueInput
  }


  /**
   * admin_token findUniqueOrThrow
   */
  export type admin_tokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_token
     */
    select?: admin_tokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: admin_tokenInclude<ExtArgs> | null
    /**
     * Filter, which admin_token to fetch.
     */
    where: admin_tokenWhereUniqueInput
  }


  /**
   * admin_token findFirst
   */
  export type admin_tokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_token
     */
    select?: admin_tokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: admin_tokenInclude<ExtArgs> | null
    /**
     * Filter, which admin_token to fetch.
     */
    where?: admin_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_tokens to fetch.
     */
    orderBy?: admin_tokenOrderByWithRelationInput | admin_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admin_tokens.
     */
    cursor?: admin_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admin_tokens.
     */
    distinct?: Admin_tokenScalarFieldEnum | Admin_tokenScalarFieldEnum[]
  }


  /**
   * admin_token findFirstOrThrow
   */
  export type admin_tokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_token
     */
    select?: admin_tokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: admin_tokenInclude<ExtArgs> | null
    /**
     * Filter, which admin_token to fetch.
     */
    where?: admin_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_tokens to fetch.
     */
    orderBy?: admin_tokenOrderByWithRelationInput | admin_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admin_tokens.
     */
    cursor?: admin_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admin_tokens.
     */
    distinct?: Admin_tokenScalarFieldEnum | Admin_tokenScalarFieldEnum[]
  }


  /**
   * admin_token findMany
   */
  export type admin_tokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_token
     */
    select?: admin_tokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: admin_tokenInclude<ExtArgs> | null
    /**
     * Filter, which admin_tokens to fetch.
     */
    where?: admin_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_tokens to fetch.
     */
    orderBy?: admin_tokenOrderByWithRelationInput | admin_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admin_tokens.
     */
    cursor?: admin_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_tokens.
     */
    skip?: number
    distinct?: Admin_tokenScalarFieldEnum | Admin_tokenScalarFieldEnum[]
  }


  /**
   * admin_token create
   */
  export type admin_tokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_token
     */
    select?: admin_tokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: admin_tokenInclude<ExtArgs> | null
    /**
     * The data needed to create a admin_token.
     */
    data: XOR<admin_tokenCreateInput, admin_tokenUncheckedCreateInput>
  }


  /**
   * admin_token createMany
   */
  export type admin_tokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admin_tokens.
     */
    data: admin_tokenCreateManyInput | admin_tokenCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * admin_token update
   */
  export type admin_tokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_token
     */
    select?: admin_tokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: admin_tokenInclude<ExtArgs> | null
    /**
     * The data needed to update a admin_token.
     */
    data: XOR<admin_tokenUpdateInput, admin_tokenUncheckedUpdateInput>
    /**
     * Choose, which admin_token to update.
     */
    where: admin_tokenWhereUniqueInput
  }


  /**
   * admin_token updateMany
   */
  export type admin_tokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admin_tokens.
     */
    data: XOR<admin_tokenUpdateManyMutationInput, admin_tokenUncheckedUpdateManyInput>
    /**
     * Filter which admin_tokens to update
     */
    where?: admin_tokenWhereInput
  }


  /**
   * admin_token upsert
   */
  export type admin_tokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_token
     */
    select?: admin_tokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: admin_tokenInclude<ExtArgs> | null
    /**
     * The filter to search for the admin_token to update in case it exists.
     */
    where: admin_tokenWhereUniqueInput
    /**
     * In case the admin_token found by the `where` argument doesn't exist, create a new admin_token with this data.
     */
    create: XOR<admin_tokenCreateInput, admin_tokenUncheckedCreateInput>
    /**
     * In case the admin_token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<admin_tokenUpdateInput, admin_tokenUncheckedUpdateInput>
  }


  /**
   * admin_token delete
   */
  export type admin_tokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_token
     */
    select?: admin_tokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: admin_tokenInclude<ExtArgs> | null
    /**
     * Filter which admin_token to delete.
     */
    where: admin_tokenWhereUniqueInput
  }


  /**
   * admin_token deleteMany
   */
  export type admin_tokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin_tokens to delete
     */
    where?: admin_tokenWhereInput
  }


  /**
   * admin_token without action
   */
  export type admin_tokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_token
     */
    select?: admin_tokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: admin_tokenInclude<ExtArgs> | null
  }



  /**
   * Model karyawan
   */

  export type AggregateKaryawan = {
    _count: KaryawanCountAggregateOutputType | null
    _avg: KaryawanAvgAggregateOutputType | null
    _sum: KaryawanSumAggregateOutputType | null
    _min: KaryawanMinAggregateOutputType | null
    _max: KaryawanMaxAggregateOutputType | null
  }

  export type KaryawanAvgAggregateOutputType = {
    status: number | null
    id: number | null
  }

  export type KaryawanSumAggregateOutputType = {
    status: number | null
    id: number | null
  }

  export type KaryawanMinAggregateOutputType = {
    nip: string | null
    nama: string | null
    alamat: string | null
    gend: $Enums.Gender | null
    photo: string | null
    tgl_lahir: Date | null
    status: number | null
    insert_at: Date | null
    update_at: Date | null
    id: number | null
  }

  export type KaryawanMaxAggregateOutputType = {
    nip: string | null
    nama: string | null
    alamat: string | null
    gend: $Enums.Gender | null
    photo: string | null
    tgl_lahir: Date | null
    status: number | null
    insert_at: Date | null
    update_at: Date | null
    id: number | null
  }

  export type KaryawanCountAggregateOutputType = {
    nip: number
    nama: number
    alamat: number
    gend: number
    photo: number
    tgl_lahir: number
    status: number
    insert_at: number
    update_at: number
    id: number
    _all: number
  }


  export type KaryawanAvgAggregateInputType = {
    status?: true
    id?: true
  }

  export type KaryawanSumAggregateInputType = {
    status?: true
    id?: true
  }

  export type KaryawanMinAggregateInputType = {
    nip?: true
    nama?: true
    alamat?: true
    gend?: true
    photo?: true
    tgl_lahir?: true
    status?: true
    insert_at?: true
    update_at?: true
    id?: true
  }

  export type KaryawanMaxAggregateInputType = {
    nip?: true
    nama?: true
    alamat?: true
    gend?: true
    photo?: true
    tgl_lahir?: true
    status?: true
    insert_at?: true
    update_at?: true
    id?: true
  }

  export type KaryawanCountAggregateInputType = {
    nip?: true
    nama?: true
    alamat?: true
    gend?: true
    photo?: true
    tgl_lahir?: true
    status?: true
    insert_at?: true
    update_at?: true
    id?: true
    _all?: true
  }

  export type KaryawanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which karyawan to aggregate.
     */
    where?: karyawanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of karyawans to fetch.
     */
    orderBy?: karyawanOrderByWithRelationInput | karyawanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: karyawanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` karyawans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` karyawans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned karyawans
    **/
    _count?: true | KaryawanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KaryawanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KaryawanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KaryawanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KaryawanMaxAggregateInputType
  }

  export type GetKaryawanAggregateType<T extends KaryawanAggregateArgs> = {
        [P in keyof T & keyof AggregateKaryawan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKaryawan[P]>
      : GetScalarType<T[P], AggregateKaryawan[P]>
  }




  export type karyawanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: karyawanWhereInput
    orderBy?: karyawanOrderByWithAggregationInput | karyawanOrderByWithAggregationInput[]
    by: KaryawanScalarFieldEnum[] | KaryawanScalarFieldEnum
    having?: karyawanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KaryawanCountAggregateInputType | true
    _avg?: KaryawanAvgAggregateInputType
    _sum?: KaryawanSumAggregateInputType
    _min?: KaryawanMinAggregateInputType
    _max?: KaryawanMaxAggregateInputType
  }

  export type KaryawanGroupByOutputType = {
    nip: string
    nama: string
    alamat: string | null
    gend: $Enums.Gender | null
    photo: string | null
    tgl_lahir: Date | null
    status: number | null
    insert_at: Date | null
    update_at: Date | null
    id: number
    _count: KaryawanCountAggregateOutputType | null
    _avg: KaryawanAvgAggregateOutputType | null
    _sum: KaryawanSumAggregateOutputType | null
    _min: KaryawanMinAggregateOutputType | null
    _max: KaryawanMaxAggregateOutputType | null
  }

  type GetKaryawanGroupByPayload<T extends karyawanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KaryawanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KaryawanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KaryawanGroupByOutputType[P]>
            : GetScalarType<T[P], KaryawanGroupByOutputType[P]>
        }
      >
    >


  export type karyawanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nip?: boolean
    nama?: boolean
    alamat?: boolean
    gend?: boolean
    photo?: boolean
    tgl_lahir?: boolean
    status?: boolean
    insert_at?: boolean
    update_at?: boolean
    id?: boolean
  }, ExtArgs["result"]["karyawan"]>

  export type karyawanSelectScalar = {
    nip?: boolean
    nama?: boolean
    alamat?: boolean
    gend?: boolean
    photo?: boolean
    tgl_lahir?: boolean
    status?: boolean
    insert_at?: boolean
    update_at?: boolean
    id?: boolean
  }


  export type $karyawanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "karyawan"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      nip: string
      nama: string
      alamat: string | null
      gend: $Enums.Gender | null
      photo: string | null
      tgl_lahir: Date | null
      status: number | null
      insert_at: Date | null
      update_at: Date | null
      id: number
    }, ExtArgs["result"]["karyawan"]>
    composites: {}
  }


  type karyawanGetPayload<S extends boolean | null | undefined | karyawanDefaultArgs> = $Result.GetResult<Prisma.$karyawanPayload, S>

  type karyawanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<karyawanFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: KaryawanCountAggregateInputType | true
    }

  export interface karyawanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['karyawan'], meta: { name: 'karyawan' } }
    /**
     * Find zero or one Karyawan that matches the filter.
     * @param {karyawanFindUniqueArgs} args - Arguments to find a Karyawan
     * @example
     * // Get one Karyawan
     * const karyawan = await prisma.karyawan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends karyawanFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, karyawanFindUniqueArgs<ExtArgs>>
    ): Prisma__karyawanClient<$Result.GetResult<Prisma.$karyawanPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Karyawan that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {karyawanFindUniqueOrThrowArgs} args - Arguments to find a Karyawan
     * @example
     * // Get one Karyawan
     * const karyawan = await prisma.karyawan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends karyawanFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, karyawanFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__karyawanClient<$Result.GetResult<Prisma.$karyawanPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Karyawan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {karyawanFindFirstArgs} args - Arguments to find a Karyawan
     * @example
     * // Get one Karyawan
     * const karyawan = await prisma.karyawan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends karyawanFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, karyawanFindFirstArgs<ExtArgs>>
    ): Prisma__karyawanClient<$Result.GetResult<Prisma.$karyawanPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Karyawan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {karyawanFindFirstOrThrowArgs} args - Arguments to find a Karyawan
     * @example
     * // Get one Karyawan
     * const karyawan = await prisma.karyawan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends karyawanFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, karyawanFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__karyawanClient<$Result.GetResult<Prisma.$karyawanPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Karyawans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {karyawanFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Karyawans
     * const karyawans = await prisma.karyawan.findMany()
     * 
     * // Get first 10 Karyawans
     * const karyawans = await prisma.karyawan.findMany({ take: 10 })
     * 
     * // Only select the `nip`
     * const karyawanWithNipOnly = await prisma.karyawan.findMany({ select: { nip: true } })
     * 
    **/
    findMany<T extends karyawanFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, karyawanFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$karyawanPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Karyawan.
     * @param {karyawanCreateArgs} args - Arguments to create a Karyawan.
     * @example
     * // Create one Karyawan
     * const Karyawan = await prisma.karyawan.create({
     *   data: {
     *     // ... data to create a Karyawan
     *   }
     * })
     * 
    **/
    create<T extends karyawanCreateArgs<ExtArgs>>(
      args: SelectSubset<T, karyawanCreateArgs<ExtArgs>>
    ): Prisma__karyawanClient<$Result.GetResult<Prisma.$karyawanPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Karyawans.
     *     @param {karyawanCreateManyArgs} args - Arguments to create many Karyawans.
     *     @example
     *     // Create many Karyawans
     *     const karyawan = await prisma.karyawan.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends karyawanCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, karyawanCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Karyawan.
     * @param {karyawanDeleteArgs} args - Arguments to delete one Karyawan.
     * @example
     * // Delete one Karyawan
     * const Karyawan = await prisma.karyawan.delete({
     *   where: {
     *     // ... filter to delete one Karyawan
     *   }
     * })
     * 
    **/
    delete<T extends karyawanDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, karyawanDeleteArgs<ExtArgs>>
    ): Prisma__karyawanClient<$Result.GetResult<Prisma.$karyawanPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Karyawan.
     * @param {karyawanUpdateArgs} args - Arguments to update one Karyawan.
     * @example
     * // Update one Karyawan
     * const karyawan = await prisma.karyawan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends karyawanUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, karyawanUpdateArgs<ExtArgs>>
    ): Prisma__karyawanClient<$Result.GetResult<Prisma.$karyawanPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Karyawans.
     * @param {karyawanDeleteManyArgs} args - Arguments to filter Karyawans to delete.
     * @example
     * // Delete a few Karyawans
     * const { count } = await prisma.karyawan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends karyawanDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, karyawanDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Karyawans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {karyawanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Karyawans
     * const karyawan = await prisma.karyawan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends karyawanUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, karyawanUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Karyawan.
     * @param {karyawanUpsertArgs} args - Arguments to update or create a Karyawan.
     * @example
     * // Update or create a Karyawan
     * const karyawan = await prisma.karyawan.upsert({
     *   create: {
     *     // ... data to create a Karyawan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Karyawan we want to update
     *   }
     * })
    **/
    upsert<T extends karyawanUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, karyawanUpsertArgs<ExtArgs>>
    ): Prisma__karyawanClient<$Result.GetResult<Prisma.$karyawanPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Karyawans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {karyawanCountArgs} args - Arguments to filter Karyawans to count.
     * @example
     * // Count the number of Karyawans
     * const count = await prisma.karyawan.count({
     *   where: {
     *     // ... the filter for the Karyawans we want to count
     *   }
     * })
    **/
    count<T extends karyawanCountArgs>(
      args?: Subset<T, karyawanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KaryawanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Karyawan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KaryawanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KaryawanAggregateArgs>(args: Subset<T, KaryawanAggregateArgs>): Prisma.PrismaPromise<GetKaryawanAggregateType<T>>

    /**
     * Group by Karyawan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {karyawanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends karyawanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: karyawanGroupByArgs['orderBy'] }
        : { orderBy?: karyawanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, karyawanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKaryawanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the karyawan model
   */
  readonly fields: karyawanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for karyawan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__karyawanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the karyawan model
   */ 
  interface karyawanFieldRefs {
    readonly nip: FieldRef<"karyawan", 'String'>
    readonly nama: FieldRef<"karyawan", 'String'>
    readonly alamat: FieldRef<"karyawan", 'String'>
    readonly gend: FieldRef<"karyawan", 'Gender'>
    readonly photo: FieldRef<"karyawan", 'String'>
    readonly tgl_lahir: FieldRef<"karyawan", 'DateTime'>
    readonly status: FieldRef<"karyawan", 'Int'>
    readonly insert_at: FieldRef<"karyawan", 'DateTime'>
    readonly update_at: FieldRef<"karyawan", 'DateTime'>
    readonly id: FieldRef<"karyawan", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * karyawan findUnique
   */
  export type karyawanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the karyawan
     */
    select?: karyawanSelect<ExtArgs> | null
    /**
     * Filter, which karyawan to fetch.
     */
    where: karyawanWhereUniqueInput
  }


  /**
   * karyawan findUniqueOrThrow
   */
  export type karyawanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the karyawan
     */
    select?: karyawanSelect<ExtArgs> | null
    /**
     * Filter, which karyawan to fetch.
     */
    where: karyawanWhereUniqueInput
  }


  /**
   * karyawan findFirst
   */
  export type karyawanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the karyawan
     */
    select?: karyawanSelect<ExtArgs> | null
    /**
     * Filter, which karyawan to fetch.
     */
    where?: karyawanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of karyawans to fetch.
     */
    orderBy?: karyawanOrderByWithRelationInput | karyawanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for karyawans.
     */
    cursor?: karyawanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` karyawans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` karyawans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of karyawans.
     */
    distinct?: KaryawanScalarFieldEnum | KaryawanScalarFieldEnum[]
  }


  /**
   * karyawan findFirstOrThrow
   */
  export type karyawanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the karyawan
     */
    select?: karyawanSelect<ExtArgs> | null
    /**
     * Filter, which karyawan to fetch.
     */
    where?: karyawanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of karyawans to fetch.
     */
    orderBy?: karyawanOrderByWithRelationInput | karyawanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for karyawans.
     */
    cursor?: karyawanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` karyawans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` karyawans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of karyawans.
     */
    distinct?: KaryawanScalarFieldEnum | KaryawanScalarFieldEnum[]
  }


  /**
   * karyawan findMany
   */
  export type karyawanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the karyawan
     */
    select?: karyawanSelect<ExtArgs> | null
    /**
     * Filter, which karyawans to fetch.
     */
    where?: karyawanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of karyawans to fetch.
     */
    orderBy?: karyawanOrderByWithRelationInput | karyawanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing karyawans.
     */
    cursor?: karyawanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` karyawans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` karyawans.
     */
    skip?: number
    distinct?: KaryawanScalarFieldEnum | KaryawanScalarFieldEnum[]
  }


  /**
   * karyawan create
   */
  export type karyawanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the karyawan
     */
    select?: karyawanSelect<ExtArgs> | null
    /**
     * The data needed to create a karyawan.
     */
    data: XOR<karyawanCreateInput, karyawanUncheckedCreateInput>
  }


  /**
   * karyawan createMany
   */
  export type karyawanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many karyawans.
     */
    data: karyawanCreateManyInput | karyawanCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * karyawan update
   */
  export type karyawanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the karyawan
     */
    select?: karyawanSelect<ExtArgs> | null
    /**
     * The data needed to update a karyawan.
     */
    data: XOR<karyawanUpdateInput, karyawanUncheckedUpdateInput>
    /**
     * Choose, which karyawan to update.
     */
    where: karyawanWhereUniqueInput
  }


  /**
   * karyawan updateMany
   */
  export type karyawanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update karyawans.
     */
    data: XOR<karyawanUpdateManyMutationInput, karyawanUncheckedUpdateManyInput>
    /**
     * Filter which karyawans to update
     */
    where?: karyawanWhereInput
  }


  /**
   * karyawan upsert
   */
  export type karyawanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the karyawan
     */
    select?: karyawanSelect<ExtArgs> | null
    /**
     * The filter to search for the karyawan to update in case it exists.
     */
    where: karyawanWhereUniqueInput
    /**
     * In case the karyawan found by the `where` argument doesn't exist, create a new karyawan with this data.
     */
    create: XOR<karyawanCreateInput, karyawanUncheckedCreateInput>
    /**
     * In case the karyawan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<karyawanUpdateInput, karyawanUncheckedUpdateInput>
  }


  /**
   * karyawan delete
   */
  export type karyawanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the karyawan
     */
    select?: karyawanSelect<ExtArgs> | null
    /**
     * Filter which karyawan to delete.
     */
    where: karyawanWhereUniqueInput
  }


  /**
   * karyawan deleteMany
   */
  export type karyawanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which karyawans to delete
     */
    where?: karyawanWhereInput
  }


  /**
   * karyawan without action
   */
  export type karyawanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the karyawan
     */
    select?: karyawanSelect<ExtArgs> | null
  }



  /**
   * Model log_trx_api
   */

  export type AggregateLog_trx_api = {
    _count: Log_trx_apiCountAggregateOutputType | null
    _avg: Log_trx_apiAvgAggregateOutputType | null
    _sum: Log_trx_apiSumAggregateOutputType | null
    _min: Log_trx_apiMinAggregateOutputType | null
    _max: Log_trx_apiMaxAggregateOutputType | null
  }

  export type Log_trx_apiAvgAggregateOutputType = {
    id: number | null
  }

  export type Log_trx_apiSumAggregateOutputType = {
    id: number | null
  }

  export type Log_trx_apiMinAggregateOutputType = {
    id: number | null
    user_id: string | null
    api: string | null
    request: string | null
    response: string | null
    insert_at: Date | null
  }

  export type Log_trx_apiMaxAggregateOutputType = {
    id: number | null
    user_id: string | null
    api: string | null
    request: string | null
    response: string | null
    insert_at: Date | null
  }

  export type Log_trx_apiCountAggregateOutputType = {
    id: number
    user_id: number
    api: number
    request: number
    response: number
    insert_at: number
    _all: number
  }


  export type Log_trx_apiAvgAggregateInputType = {
    id?: true
  }

  export type Log_trx_apiSumAggregateInputType = {
    id?: true
  }

  export type Log_trx_apiMinAggregateInputType = {
    id?: true
    user_id?: true
    api?: true
    request?: true
    response?: true
    insert_at?: true
  }

  export type Log_trx_apiMaxAggregateInputType = {
    id?: true
    user_id?: true
    api?: true
    request?: true
    response?: true
    insert_at?: true
  }

  export type Log_trx_apiCountAggregateInputType = {
    id?: true
    user_id?: true
    api?: true
    request?: true
    response?: true
    insert_at?: true
    _all?: true
  }

  export type Log_trx_apiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which log_trx_api to aggregate.
     */
    where?: log_trx_apiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of log_trx_apis to fetch.
     */
    orderBy?: log_trx_apiOrderByWithRelationInput | log_trx_apiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: log_trx_apiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` log_trx_apis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` log_trx_apis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned log_trx_apis
    **/
    _count?: true | Log_trx_apiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Log_trx_apiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Log_trx_apiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Log_trx_apiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Log_trx_apiMaxAggregateInputType
  }

  export type GetLog_trx_apiAggregateType<T extends Log_trx_apiAggregateArgs> = {
        [P in keyof T & keyof AggregateLog_trx_api]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLog_trx_api[P]>
      : GetScalarType<T[P], AggregateLog_trx_api[P]>
  }




  export type log_trx_apiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: log_trx_apiWhereInput
    orderBy?: log_trx_apiOrderByWithAggregationInput | log_trx_apiOrderByWithAggregationInput[]
    by: Log_trx_apiScalarFieldEnum[] | Log_trx_apiScalarFieldEnum
    having?: log_trx_apiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Log_trx_apiCountAggregateInputType | true
    _avg?: Log_trx_apiAvgAggregateInputType
    _sum?: Log_trx_apiSumAggregateInputType
    _min?: Log_trx_apiMinAggregateInputType
    _max?: Log_trx_apiMaxAggregateInputType
  }

  export type Log_trx_apiGroupByOutputType = {
    id: number
    user_id: string | null
    api: string
    request: string | null
    response: string | null
    insert_at: Date | null
    _count: Log_trx_apiCountAggregateOutputType | null
    _avg: Log_trx_apiAvgAggregateOutputType | null
    _sum: Log_trx_apiSumAggregateOutputType | null
    _min: Log_trx_apiMinAggregateOutputType | null
    _max: Log_trx_apiMaxAggregateOutputType | null
  }

  type GetLog_trx_apiGroupByPayload<T extends log_trx_apiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Log_trx_apiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Log_trx_apiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Log_trx_apiGroupByOutputType[P]>
            : GetScalarType<T[P], Log_trx_apiGroupByOutputType[P]>
        }
      >
    >


  export type log_trx_apiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    api?: boolean
    request?: boolean
    response?: boolean
    insert_at?: boolean
  }, ExtArgs["result"]["log_trx_api"]>

  export type log_trx_apiSelectScalar = {
    id?: boolean
    user_id?: boolean
    api?: boolean
    request?: boolean
    response?: boolean
    insert_at?: boolean
  }


  export type $log_trx_apiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "log_trx_api"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: string | null
      api: string
      request: string | null
      response: string | null
      insert_at: Date | null
    }, ExtArgs["result"]["log_trx_api"]>
    composites: {}
  }


  type log_trx_apiGetPayload<S extends boolean | null | undefined | log_trx_apiDefaultArgs> = $Result.GetResult<Prisma.$log_trx_apiPayload, S>

  type log_trx_apiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<log_trx_apiFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: Log_trx_apiCountAggregateInputType | true
    }

  export interface log_trx_apiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['log_trx_api'], meta: { name: 'log_trx_api' } }
    /**
     * Find zero or one Log_trx_api that matches the filter.
     * @param {log_trx_apiFindUniqueArgs} args - Arguments to find a Log_trx_api
     * @example
     * // Get one Log_trx_api
     * const log_trx_api = await prisma.log_trx_api.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends log_trx_apiFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, log_trx_apiFindUniqueArgs<ExtArgs>>
    ): Prisma__log_trx_apiClient<$Result.GetResult<Prisma.$log_trx_apiPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Log_trx_api that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {log_trx_apiFindUniqueOrThrowArgs} args - Arguments to find a Log_trx_api
     * @example
     * // Get one Log_trx_api
     * const log_trx_api = await prisma.log_trx_api.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends log_trx_apiFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, log_trx_apiFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__log_trx_apiClient<$Result.GetResult<Prisma.$log_trx_apiPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Log_trx_api that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {log_trx_apiFindFirstArgs} args - Arguments to find a Log_trx_api
     * @example
     * // Get one Log_trx_api
     * const log_trx_api = await prisma.log_trx_api.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends log_trx_apiFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, log_trx_apiFindFirstArgs<ExtArgs>>
    ): Prisma__log_trx_apiClient<$Result.GetResult<Prisma.$log_trx_apiPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Log_trx_api that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {log_trx_apiFindFirstOrThrowArgs} args - Arguments to find a Log_trx_api
     * @example
     * // Get one Log_trx_api
     * const log_trx_api = await prisma.log_trx_api.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends log_trx_apiFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, log_trx_apiFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__log_trx_apiClient<$Result.GetResult<Prisma.$log_trx_apiPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Log_trx_apis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {log_trx_apiFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Log_trx_apis
     * const log_trx_apis = await prisma.log_trx_api.findMany()
     * 
     * // Get first 10 Log_trx_apis
     * const log_trx_apis = await prisma.log_trx_api.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const log_trx_apiWithIdOnly = await prisma.log_trx_api.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends log_trx_apiFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, log_trx_apiFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$log_trx_apiPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Log_trx_api.
     * @param {log_trx_apiCreateArgs} args - Arguments to create a Log_trx_api.
     * @example
     * // Create one Log_trx_api
     * const Log_trx_api = await prisma.log_trx_api.create({
     *   data: {
     *     // ... data to create a Log_trx_api
     *   }
     * })
     * 
    **/
    create<T extends log_trx_apiCreateArgs<ExtArgs>>(
      args: SelectSubset<T, log_trx_apiCreateArgs<ExtArgs>>
    ): Prisma__log_trx_apiClient<$Result.GetResult<Prisma.$log_trx_apiPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Log_trx_apis.
     *     @param {log_trx_apiCreateManyArgs} args - Arguments to create many Log_trx_apis.
     *     @example
     *     // Create many Log_trx_apis
     *     const log_trx_api = await prisma.log_trx_api.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends log_trx_apiCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, log_trx_apiCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Log_trx_api.
     * @param {log_trx_apiDeleteArgs} args - Arguments to delete one Log_trx_api.
     * @example
     * // Delete one Log_trx_api
     * const Log_trx_api = await prisma.log_trx_api.delete({
     *   where: {
     *     // ... filter to delete one Log_trx_api
     *   }
     * })
     * 
    **/
    delete<T extends log_trx_apiDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, log_trx_apiDeleteArgs<ExtArgs>>
    ): Prisma__log_trx_apiClient<$Result.GetResult<Prisma.$log_trx_apiPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Log_trx_api.
     * @param {log_trx_apiUpdateArgs} args - Arguments to update one Log_trx_api.
     * @example
     * // Update one Log_trx_api
     * const log_trx_api = await prisma.log_trx_api.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends log_trx_apiUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, log_trx_apiUpdateArgs<ExtArgs>>
    ): Prisma__log_trx_apiClient<$Result.GetResult<Prisma.$log_trx_apiPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Log_trx_apis.
     * @param {log_trx_apiDeleteManyArgs} args - Arguments to filter Log_trx_apis to delete.
     * @example
     * // Delete a few Log_trx_apis
     * const { count } = await prisma.log_trx_api.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends log_trx_apiDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, log_trx_apiDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Log_trx_apis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {log_trx_apiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Log_trx_apis
     * const log_trx_api = await prisma.log_trx_api.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends log_trx_apiUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, log_trx_apiUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Log_trx_api.
     * @param {log_trx_apiUpsertArgs} args - Arguments to update or create a Log_trx_api.
     * @example
     * // Update or create a Log_trx_api
     * const log_trx_api = await prisma.log_trx_api.upsert({
     *   create: {
     *     // ... data to create a Log_trx_api
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Log_trx_api we want to update
     *   }
     * })
    **/
    upsert<T extends log_trx_apiUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, log_trx_apiUpsertArgs<ExtArgs>>
    ): Prisma__log_trx_apiClient<$Result.GetResult<Prisma.$log_trx_apiPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Log_trx_apis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {log_trx_apiCountArgs} args - Arguments to filter Log_trx_apis to count.
     * @example
     * // Count the number of Log_trx_apis
     * const count = await prisma.log_trx_api.count({
     *   where: {
     *     // ... the filter for the Log_trx_apis we want to count
     *   }
     * })
    **/
    count<T extends log_trx_apiCountArgs>(
      args?: Subset<T, log_trx_apiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Log_trx_apiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Log_trx_api.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Log_trx_apiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Log_trx_apiAggregateArgs>(args: Subset<T, Log_trx_apiAggregateArgs>): Prisma.PrismaPromise<GetLog_trx_apiAggregateType<T>>

    /**
     * Group by Log_trx_api.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {log_trx_apiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends log_trx_apiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: log_trx_apiGroupByArgs['orderBy'] }
        : { orderBy?: log_trx_apiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, log_trx_apiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLog_trx_apiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the log_trx_api model
   */
  readonly fields: log_trx_apiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for log_trx_api.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__log_trx_apiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the log_trx_api model
   */ 
  interface log_trx_apiFieldRefs {
    readonly id: FieldRef<"log_trx_api", 'Int'>
    readonly user_id: FieldRef<"log_trx_api", 'String'>
    readonly api: FieldRef<"log_trx_api", 'String'>
    readonly request: FieldRef<"log_trx_api", 'String'>
    readonly response: FieldRef<"log_trx_api", 'String'>
    readonly insert_at: FieldRef<"log_trx_api", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * log_trx_api findUnique
   */
  export type log_trx_apiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_trx_api
     */
    select?: log_trx_apiSelect<ExtArgs> | null
    /**
     * Filter, which log_trx_api to fetch.
     */
    where: log_trx_apiWhereUniqueInput
  }


  /**
   * log_trx_api findUniqueOrThrow
   */
  export type log_trx_apiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_trx_api
     */
    select?: log_trx_apiSelect<ExtArgs> | null
    /**
     * Filter, which log_trx_api to fetch.
     */
    where: log_trx_apiWhereUniqueInput
  }


  /**
   * log_trx_api findFirst
   */
  export type log_trx_apiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_trx_api
     */
    select?: log_trx_apiSelect<ExtArgs> | null
    /**
     * Filter, which log_trx_api to fetch.
     */
    where?: log_trx_apiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of log_trx_apis to fetch.
     */
    orderBy?: log_trx_apiOrderByWithRelationInput | log_trx_apiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for log_trx_apis.
     */
    cursor?: log_trx_apiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` log_trx_apis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` log_trx_apis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of log_trx_apis.
     */
    distinct?: Log_trx_apiScalarFieldEnum | Log_trx_apiScalarFieldEnum[]
  }


  /**
   * log_trx_api findFirstOrThrow
   */
  export type log_trx_apiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_trx_api
     */
    select?: log_trx_apiSelect<ExtArgs> | null
    /**
     * Filter, which log_trx_api to fetch.
     */
    where?: log_trx_apiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of log_trx_apis to fetch.
     */
    orderBy?: log_trx_apiOrderByWithRelationInput | log_trx_apiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for log_trx_apis.
     */
    cursor?: log_trx_apiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` log_trx_apis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` log_trx_apis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of log_trx_apis.
     */
    distinct?: Log_trx_apiScalarFieldEnum | Log_trx_apiScalarFieldEnum[]
  }


  /**
   * log_trx_api findMany
   */
  export type log_trx_apiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_trx_api
     */
    select?: log_trx_apiSelect<ExtArgs> | null
    /**
     * Filter, which log_trx_apis to fetch.
     */
    where?: log_trx_apiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of log_trx_apis to fetch.
     */
    orderBy?: log_trx_apiOrderByWithRelationInput | log_trx_apiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing log_trx_apis.
     */
    cursor?: log_trx_apiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` log_trx_apis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` log_trx_apis.
     */
    skip?: number
    distinct?: Log_trx_apiScalarFieldEnum | Log_trx_apiScalarFieldEnum[]
  }


  /**
   * log_trx_api create
   */
  export type log_trx_apiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_trx_api
     */
    select?: log_trx_apiSelect<ExtArgs> | null
    /**
     * The data needed to create a log_trx_api.
     */
    data: XOR<log_trx_apiCreateInput, log_trx_apiUncheckedCreateInput>
  }


  /**
   * log_trx_api createMany
   */
  export type log_trx_apiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many log_trx_apis.
     */
    data: log_trx_apiCreateManyInput | log_trx_apiCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * log_trx_api update
   */
  export type log_trx_apiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_trx_api
     */
    select?: log_trx_apiSelect<ExtArgs> | null
    /**
     * The data needed to update a log_trx_api.
     */
    data: XOR<log_trx_apiUpdateInput, log_trx_apiUncheckedUpdateInput>
    /**
     * Choose, which log_trx_api to update.
     */
    where: log_trx_apiWhereUniqueInput
  }


  /**
   * log_trx_api updateMany
   */
  export type log_trx_apiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update log_trx_apis.
     */
    data: XOR<log_trx_apiUpdateManyMutationInput, log_trx_apiUncheckedUpdateManyInput>
    /**
     * Filter which log_trx_apis to update
     */
    where?: log_trx_apiWhereInput
  }


  /**
   * log_trx_api upsert
   */
  export type log_trx_apiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_trx_api
     */
    select?: log_trx_apiSelect<ExtArgs> | null
    /**
     * The filter to search for the log_trx_api to update in case it exists.
     */
    where: log_trx_apiWhereUniqueInput
    /**
     * In case the log_trx_api found by the `where` argument doesn't exist, create a new log_trx_api with this data.
     */
    create: XOR<log_trx_apiCreateInput, log_trx_apiUncheckedCreateInput>
    /**
     * In case the log_trx_api was found with the provided `where` argument, update it with this data.
     */
    update: XOR<log_trx_apiUpdateInput, log_trx_apiUncheckedUpdateInput>
  }


  /**
   * log_trx_api delete
   */
  export type log_trx_apiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_trx_api
     */
    select?: log_trx_apiSelect<ExtArgs> | null
    /**
     * Filter which log_trx_api to delete.
     */
    where: log_trx_apiWhereUniqueInput
  }


  /**
   * log_trx_api deleteMany
   */
  export type log_trx_apiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which log_trx_apis to delete
     */
    where?: log_trx_apiWhereInput
  }


  /**
   * log_trx_api without action
   */
  export type log_trx_apiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_trx_api
     */
    select?: log_trx_apiSelect<ExtArgs> | null
  }



  /**
   * Model SequelizeMeta
   */

  export type AggregateSequelizeMeta = {
    _count: SequelizeMetaCountAggregateOutputType | null
    _min: SequelizeMetaMinAggregateOutputType | null
    _max: SequelizeMetaMaxAggregateOutputType | null
  }

  export type SequelizeMetaMinAggregateOutputType = {
    name: string | null
  }

  export type SequelizeMetaMaxAggregateOutputType = {
    name: string | null
  }

  export type SequelizeMetaCountAggregateOutputType = {
    name: number
    _all: number
  }


  export type SequelizeMetaMinAggregateInputType = {
    name?: true
  }

  export type SequelizeMetaMaxAggregateInputType = {
    name?: true
  }

  export type SequelizeMetaCountAggregateInputType = {
    name?: true
    _all?: true
  }

  export type SequelizeMetaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SequelizeMeta to aggregate.
     */
    where?: SequelizeMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SequelizeMetas to fetch.
     */
    orderBy?: SequelizeMetaOrderByWithRelationInput | SequelizeMetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SequelizeMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SequelizeMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SequelizeMetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SequelizeMetas
    **/
    _count?: true | SequelizeMetaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SequelizeMetaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SequelizeMetaMaxAggregateInputType
  }

  export type GetSequelizeMetaAggregateType<T extends SequelizeMetaAggregateArgs> = {
        [P in keyof T & keyof AggregateSequelizeMeta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSequelizeMeta[P]>
      : GetScalarType<T[P], AggregateSequelizeMeta[P]>
  }




  export type SequelizeMetaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SequelizeMetaWhereInput
    orderBy?: SequelizeMetaOrderByWithAggregationInput | SequelizeMetaOrderByWithAggregationInput[]
    by: SequelizeMetaScalarFieldEnum[] | SequelizeMetaScalarFieldEnum
    having?: SequelizeMetaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SequelizeMetaCountAggregateInputType | true
    _min?: SequelizeMetaMinAggregateInputType
    _max?: SequelizeMetaMaxAggregateInputType
  }

  export type SequelizeMetaGroupByOutputType = {
    name: string
    _count: SequelizeMetaCountAggregateOutputType | null
    _min: SequelizeMetaMinAggregateOutputType | null
    _max: SequelizeMetaMaxAggregateOutputType | null
  }

  type GetSequelizeMetaGroupByPayload<T extends SequelizeMetaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SequelizeMetaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SequelizeMetaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SequelizeMetaGroupByOutputType[P]>
            : GetScalarType<T[P], SequelizeMetaGroupByOutputType[P]>
        }
      >
    >


  export type SequelizeMetaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
  }, ExtArgs["result"]["sequelizeMeta"]>

  export type SequelizeMetaSelectScalar = {
    name?: boolean
  }


  export type $SequelizeMetaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SequelizeMeta"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      name: string
    }, ExtArgs["result"]["sequelizeMeta"]>
    composites: {}
  }


  type SequelizeMetaGetPayload<S extends boolean | null | undefined | SequelizeMetaDefaultArgs> = $Result.GetResult<Prisma.$SequelizeMetaPayload, S>

  type SequelizeMetaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SequelizeMetaFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: SequelizeMetaCountAggregateInputType | true
    }

  export interface SequelizeMetaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SequelizeMeta'], meta: { name: 'SequelizeMeta' } }
    /**
     * Find zero or one SequelizeMeta that matches the filter.
     * @param {SequelizeMetaFindUniqueArgs} args - Arguments to find a SequelizeMeta
     * @example
     * // Get one SequelizeMeta
     * const sequelizeMeta = await prisma.sequelizeMeta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SequelizeMetaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SequelizeMetaFindUniqueArgs<ExtArgs>>
    ): Prisma__SequelizeMetaClient<$Result.GetResult<Prisma.$SequelizeMetaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SequelizeMeta that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SequelizeMetaFindUniqueOrThrowArgs} args - Arguments to find a SequelizeMeta
     * @example
     * // Get one SequelizeMeta
     * const sequelizeMeta = await prisma.sequelizeMeta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SequelizeMetaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SequelizeMetaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SequelizeMetaClient<$Result.GetResult<Prisma.$SequelizeMetaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SequelizeMeta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequelizeMetaFindFirstArgs} args - Arguments to find a SequelizeMeta
     * @example
     * // Get one SequelizeMeta
     * const sequelizeMeta = await prisma.sequelizeMeta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SequelizeMetaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SequelizeMetaFindFirstArgs<ExtArgs>>
    ): Prisma__SequelizeMetaClient<$Result.GetResult<Prisma.$SequelizeMetaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SequelizeMeta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequelizeMetaFindFirstOrThrowArgs} args - Arguments to find a SequelizeMeta
     * @example
     * // Get one SequelizeMeta
     * const sequelizeMeta = await prisma.sequelizeMeta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SequelizeMetaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SequelizeMetaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SequelizeMetaClient<$Result.GetResult<Prisma.$SequelizeMetaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SequelizeMetas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequelizeMetaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SequelizeMetas
     * const sequelizeMetas = await prisma.sequelizeMeta.findMany()
     * 
     * // Get first 10 SequelizeMetas
     * const sequelizeMetas = await prisma.sequelizeMeta.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const sequelizeMetaWithNameOnly = await prisma.sequelizeMeta.findMany({ select: { name: true } })
     * 
    **/
    findMany<T extends SequelizeMetaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SequelizeMetaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SequelizeMetaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SequelizeMeta.
     * @param {SequelizeMetaCreateArgs} args - Arguments to create a SequelizeMeta.
     * @example
     * // Create one SequelizeMeta
     * const SequelizeMeta = await prisma.sequelizeMeta.create({
     *   data: {
     *     // ... data to create a SequelizeMeta
     *   }
     * })
     * 
    **/
    create<T extends SequelizeMetaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SequelizeMetaCreateArgs<ExtArgs>>
    ): Prisma__SequelizeMetaClient<$Result.GetResult<Prisma.$SequelizeMetaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SequelizeMetas.
     *     @param {SequelizeMetaCreateManyArgs} args - Arguments to create many SequelizeMetas.
     *     @example
     *     // Create many SequelizeMetas
     *     const sequelizeMeta = await prisma.sequelizeMeta.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SequelizeMetaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SequelizeMetaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SequelizeMeta.
     * @param {SequelizeMetaDeleteArgs} args - Arguments to delete one SequelizeMeta.
     * @example
     * // Delete one SequelizeMeta
     * const SequelizeMeta = await prisma.sequelizeMeta.delete({
     *   where: {
     *     // ... filter to delete one SequelizeMeta
     *   }
     * })
     * 
    **/
    delete<T extends SequelizeMetaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SequelizeMetaDeleteArgs<ExtArgs>>
    ): Prisma__SequelizeMetaClient<$Result.GetResult<Prisma.$SequelizeMetaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SequelizeMeta.
     * @param {SequelizeMetaUpdateArgs} args - Arguments to update one SequelizeMeta.
     * @example
     * // Update one SequelizeMeta
     * const sequelizeMeta = await prisma.sequelizeMeta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SequelizeMetaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SequelizeMetaUpdateArgs<ExtArgs>>
    ): Prisma__SequelizeMetaClient<$Result.GetResult<Prisma.$SequelizeMetaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SequelizeMetas.
     * @param {SequelizeMetaDeleteManyArgs} args - Arguments to filter SequelizeMetas to delete.
     * @example
     * // Delete a few SequelizeMetas
     * const { count } = await prisma.sequelizeMeta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SequelizeMetaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SequelizeMetaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SequelizeMetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequelizeMetaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SequelizeMetas
     * const sequelizeMeta = await prisma.sequelizeMeta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SequelizeMetaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SequelizeMetaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SequelizeMeta.
     * @param {SequelizeMetaUpsertArgs} args - Arguments to update or create a SequelizeMeta.
     * @example
     * // Update or create a SequelizeMeta
     * const sequelizeMeta = await prisma.sequelizeMeta.upsert({
     *   create: {
     *     // ... data to create a SequelizeMeta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SequelizeMeta we want to update
     *   }
     * })
    **/
    upsert<T extends SequelizeMetaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SequelizeMetaUpsertArgs<ExtArgs>>
    ): Prisma__SequelizeMetaClient<$Result.GetResult<Prisma.$SequelizeMetaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SequelizeMetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequelizeMetaCountArgs} args - Arguments to filter SequelizeMetas to count.
     * @example
     * // Count the number of SequelizeMetas
     * const count = await prisma.sequelizeMeta.count({
     *   where: {
     *     // ... the filter for the SequelizeMetas we want to count
     *   }
     * })
    **/
    count<T extends SequelizeMetaCountArgs>(
      args?: Subset<T, SequelizeMetaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SequelizeMetaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SequelizeMeta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequelizeMetaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SequelizeMetaAggregateArgs>(args: Subset<T, SequelizeMetaAggregateArgs>): Prisma.PrismaPromise<GetSequelizeMetaAggregateType<T>>

    /**
     * Group by SequelizeMeta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequelizeMetaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SequelizeMetaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SequelizeMetaGroupByArgs['orderBy'] }
        : { orderBy?: SequelizeMetaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SequelizeMetaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSequelizeMetaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SequelizeMeta model
   */
  readonly fields: SequelizeMetaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SequelizeMeta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SequelizeMetaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SequelizeMeta model
   */ 
  interface SequelizeMetaFieldRefs {
    readonly name: FieldRef<"SequelizeMeta", 'String'>
  }
    

  // Custom InputTypes

  /**
   * SequelizeMeta findUnique
   */
  export type SequelizeMetaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequelizeMeta
     */
    select?: SequelizeMetaSelect<ExtArgs> | null
    /**
     * Filter, which SequelizeMeta to fetch.
     */
    where: SequelizeMetaWhereUniqueInput
  }


  /**
   * SequelizeMeta findUniqueOrThrow
   */
  export type SequelizeMetaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequelizeMeta
     */
    select?: SequelizeMetaSelect<ExtArgs> | null
    /**
     * Filter, which SequelizeMeta to fetch.
     */
    where: SequelizeMetaWhereUniqueInput
  }


  /**
   * SequelizeMeta findFirst
   */
  export type SequelizeMetaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequelizeMeta
     */
    select?: SequelizeMetaSelect<ExtArgs> | null
    /**
     * Filter, which SequelizeMeta to fetch.
     */
    where?: SequelizeMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SequelizeMetas to fetch.
     */
    orderBy?: SequelizeMetaOrderByWithRelationInput | SequelizeMetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SequelizeMetas.
     */
    cursor?: SequelizeMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SequelizeMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SequelizeMetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SequelizeMetas.
     */
    distinct?: SequelizeMetaScalarFieldEnum | SequelizeMetaScalarFieldEnum[]
  }


  /**
   * SequelizeMeta findFirstOrThrow
   */
  export type SequelizeMetaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequelizeMeta
     */
    select?: SequelizeMetaSelect<ExtArgs> | null
    /**
     * Filter, which SequelizeMeta to fetch.
     */
    where?: SequelizeMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SequelizeMetas to fetch.
     */
    orderBy?: SequelizeMetaOrderByWithRelationInput | SequelizeMetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SequelizeMetas.
     */
    cursor?: SequelizeMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SequelizeMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SequelizeMetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SequelizeMetas.
     */
    distinct?: SequelizeMetaScalarFieldEnum | SequelizeMetaScalarFieldEnum[]
  }


  /**
   * SequelizeMeta findMany
   */
  export type SequelizeMetaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequelizeMeta
     */
    select?: SequelizeMetaSelect<ExtArgs> | null
    /**
     * Filter, which SequelizeMetas to fetch.
     */
    where?: SequelizeMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SequelizeMetas to fetch.
     */
    orderBy?: SequelizeMetaOrderByWithRelationInput | SequelizeMetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SequelizeMetas.
     */
    cursor?: SequelizeMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SequelizeMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SequelizeMetas.
     */
    skip?: number
    distinct?: SequelizeMetaScalarFieldEnum | SequelizeMetaScalarFieldEnum[]
  }


  /**
   * SequelizeMeta create
   */
  export type SequelizeMetaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequelizeMeta
     */
    select?: SequelizeMetaSelect<ExtArgs> | null
    /**
     * The data needed to create a SequelizeMeta.
     */
    data: XOR<SequelizeMetaCreateInput, SequelizeMetaUncheckedCreateInput>
  }


  /**
   * SequelizeMeta createMany
   */
  export type SequelizeMetaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SequelizeMetas.
     */
    data: SequelizeMetaCreateManyInput | SequelizeMetaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * SequelizeMeta update
   */
  export type SequelizeMetaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequelizeMeta
     */
    select?: SequelizeMetaSelect<ExtArgs> | null
    /**
     * The data needed to update a SequelizeMeta.
     */
    data: XOR<SequelizeMetaUpdateInput, SequelizeMetaUncheckedUpdateInput>
    /**
     * Choose, which SequelizeMeta to update.
     */
    where: SequelizeMetaWhereUniqueInput
  }


  /**
   * SequelizeMeta updateMany
   */
  export type SequelizeMetaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SequelizeMetas.
     */
    data: XOR<SequelizeMetaUpdateManyMutationInput, SequelizeMetaUncheckedUpdateManyInput>
    /**
     * Filter which SequelizeMetas to update
     */
    where?: SequelizeMetaWhereInput
  }


  /**
   * SequelizeMeta upsert
   */
  export type SequelizeMetaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequelizeMeta
     */
    select?: SequelizeMetaSelect<ExtArgs> | null
    /**
     * The filter to search for the SequelizeMeta to update in case it exists.
     */
    where: SequelizeMetaWhereUniqueInput
    /**
     * In case the SequelizeMeta found by the `where` argument doesn't exist, create a new SequelizeMeta with this data.
     */
    create: XOR<SequelizeMetaCreateInput, SequelizeMetaUncheckedCreateInput>
    /**
     * In case the SequelizeMeta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SequelizeMetaUpdateInput, SequelizeMetaUncheckedUpdateInput>
  }


  /**
   * SequelizeMeta delete
   */
  export type SequelizeMetaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequelizeMeta
     */
    select?: SequelizeMetaSelect<ExtArgs> | null
    /**
     * Filter which SequelizeMeta to delete.
     */
    where: SequelizeMetaWhereUniqueInput
  }


  /**
   * SequelizeMeta deleteMany
   */
  export type SequelizeMetaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SequelizeMetas to delete
     */
    where?: SequelizeMetaWhereInput
  }


  /**
   * SequelizeMeta without action
   */
  export type SequelizeMetaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequelizeMeta
     */
    select?: SequelizeMetaSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const Admin_tokenScalarFieldEnum: {
    id: 'id',
    id_admin: 'id_admin',
    token: 'token',
    expired_at: 'expired_at'
  };

  export type Admin_tokenScalarFieldEnum = (typeof Admin_tokenScalarFieldEnum)[keyof typeof Admin_tokenScalarFieldEnum]


  export const KaryawanScalarFieldEnum: {
    nip: 'nip',
    nama: 'nama',
    alamat: 'alamat',
    gend: 'gend',
    photo: 'photo',
    tgl_lahir: 'tgl_lahir',
    status: 'status',
    insert_at: 'insert_at',
    update_at: 'update_at',
    id: 'id'
  };

  export type KaryawanScalarFieldEnum = (typeof KaryawanScalarFieldEnum)[keyof typeof KaryawanScalarFieldEnum]


  export const Log_trx_apiScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    api: 'api',
    request: 'request',
    response: 'response',
    insert_at: 'insert_at'
  };

  export type Log_trx_apiScalarFieldEnum = (typeof Log_trx_apiScalarFieldEnum)[keyof typeof Log_trx_apiScalarFieldEnum]


  export const SequelizeMetaScalarFieldEnum: {
    name: 'name'
  };

  export type SequelizeMetaScalarFieldEnum = (typeof SequelizeMetaScalarFieldEnum)[keyof typeof SequelizeMetaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type adminWhereInput = {
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    id?: IntFilter<"admin"> | number
    username?: StringFilter<"admin"> | string
    password?: BytesNullableFilter<"admin"> | Buffer | null
    tokens?: Admin_tokenListRelationFilter
  }

  export type adminOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrderInput | SortOrder
    tokens?: admin_tokenOrderByRelationAggregateInput
  }

  export type adminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    password?: BytesNullableFilter<"admin"> | Buffer | null
    tokens?: Admin_tokenListRelationFilter
  }, "id" | "username">

  export type adminOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrderInput | SortOrder
    _count?: adminCountOrderByAggregateInput
    _avg?: adminAvgOrderByAggregateInput
    _max?: adminMaxOrderByAggregateInput
    _min?: adminMinOrderByAggregateInput
    _sum?: adminSumOrderByAggregateInput
  }

  export type adminScalarWhereWithAggregatesInput = {
    AND?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    OR?: adminScalarWhereWithAggregatesInput[]
    NOT?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"admin"> | number
    username?: StringWithAggregatesFilter<"admin"> | string
    password?: BytesNullableWithAggregatesFilter<"admin"> | Buffer | null
  }

  export type admin_tokenWhereInput = {
    AND?: admin_tokenWhereInput | admin_tokenWhereInput[]
    OR?: admin_tokenWhereInput[]
    NOT?: admin_tokenWhereInput | admin_tokenWhereInput[]
    id?: IntFilter<"admin_token"> | number
    id_admin?: IntFilter<"admin_token"> | number
    token?: StringNullableFilter<"admin_token"> | string | null
    expired_at?: DateTimeNullableFilter<"admin_token"> | Date | string | null
    admin?: XOR<AdminRelationFilter, adminWhereInput>
  }

  export type admin_tokenOrderByWithRelationInput = {
    id?: SortOrder
    id_admin?: SortOrder
    token?: SortOrderInput | SortOrder
    expired_at?: SortOrderInput | SortOrder
    admin?: adminOrderByWithRelationInput
  }

  export type admin_tokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: admin_tokenWhereInput | admin_tokenWhereInput[]
    OR?: admin_tokenWhereInput[]
    NOT?: admin_tokenWhereInput | admin_tokenWhereInput[]
    id_admin?: IntFilter<"admin_token"> | number
    token?: StringNullableFilter<"admin_token"> | string | null
    expired_at?: DateTimeNullableFilter<"admin_token"> | Date | string | null
    admin?: XOR<AdminRelationFilter, adminWhereInput>
  }, "id">

  export type admin_tokenOrderByWithAggregationInput = {
    id?: SortOrder
    id_admin?: SortOrder
    token?: SortOrderInput | SortOrder
    expired_at?: SortOrderInput | SortOrder
    _count?: admin_tokenCountOrderByAggregateInput
    _avg?: admin_tokenAvgOrderByAggregateInput
    _max?: admin_tokenMaxOrderByAggregateInput
    _min?: admin_tokenMinOrderByAggregateInput
    _sum?: admin_tokenSumOrderByAggregateInput
  }

  export type admin_tokenScalarWhereWithAggregatesInput = {
    AND?: admin_tokenScalarWhereWithAggregatesInput | admin_tokenScalarWhereWithAggregatesInput[]
    OR?: admin_tokenScalarWhereWithAggregatesInput[]
    NOT?: admin_tokenScalarWhereWithAggregatesInput | admin_tokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"admin_token"> | number
    id_admin?: IntWithAggregatesFilter<"admin_token"> | number
    token?: StringNullableWithAggregatesFilter<"admin_token"> | string | null
    expired_at?: DateTimeNullableWithAggregatesFilter<"admin_token"> | Date | string | null
  }

  export type karyawanWhereInput = {
    AND?: karyawanWhereInput | karyawanWhereInput[]
    OR?: karyawanWhereInput[]
    NOT?: karyawanWhereInput | karyawanWhereInput[]
    nip?: StringFilter<"karyawan"> | string
    nama?: StringFilter<"karyawan"> | string
    alamat?: StringNullableFilter<"karyawan"> | string | null
    gend?: EnumGenderNullableFilter<"karyawan"> | $Enums.Gender | null
    photo?: StringNullableFilter<"karyawan"> | string | null
    tgl_lahir?: DateTimeNullableFilter<"karyawan"> | Date | string | null
    status?: IntNullableFilter<"karyawan"> | number | null
    insert_at?: DateTimeNullableFilter<"karyawan"> | Date | string | null
    update_at?: DateTimeNullableFilter<"karyawan"> | Date | string | null
    id?: IntFilter<"karyawan"> | number
  }

  export type karyawanOrderByWithRelationInput = {
    nip?: SortOrder
    nama?: SortOrder
    alamat?: SortOrderInput | SortOrder
    gend?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    tgl_lahir?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    insert_at?: SortOrderInput | SortOrder
    update_at?: SortOrderInput | SortOrder
    id?: SortOrder
  }

  export type karyawanWhereUniqueInput = Prisma.AtLeast<{
    nip?: string
    AND?: karyawanWhereInput | karyawanWhereInput[]
    OR?: karyawanWhereInput[]
    NOT?: karyawanWhereInput | karyawanWhereInput[]
    nama?: StringFilter<"karyawan"> | string
    alamat?: StringNullableFilter<"karyawan"> | string | null
    gend?: EnumGenderNullableFilter<"karyawan"> | $Enums.Gender | null
    photo?: StringNullableFilter<"karyawan"> | string | null
    tgl_lahir?: DateTimeNullableFilter<"karyawan"> | Date | string | null
    status?: IntNullableFilter<"karyawan"> | number | null
    insert_at?: DateTimeNullableFilter<"karyawan"> | Date | string | null
    update_at?: DateTimeNullableFilter<"karyawan"> | Date | string | null
    id?: IntFilter<"karyawan"> | number
  }, "nip">

  export type karyawanOrderByWithAggregationInput = {
    nip?: SortOrder
    nama?: SortOrder
    alamat?: SortOrderInput | SortOrder
    gend?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    tgl_lahir?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    insert_at?: SortOrderInput | SortOrder
    update_at?: SortOrderInput | SortOrder
    id?: SortOrder
    _count?: karyawanCountOrderByAggregateInput
    _avg?: karyawanAvgOrderByAggregateInput
    _max?: karyawanMaxOrderByAggregateInput
    _min?: karyawanMinOrderByAggregateInput
    _sum?: karyawanSumOrderByAggregateInput
  }

  export type karyawanScalarWhereWithAggregatesInput = {
    AND?: karyawanScalarWhereWithAggregatesInput | karyawanScalarWhereWithAggregatesInput[]
    OR?: karyawanScalarWhereWithAggregatesInput[]
    NOT?: karyawanScalarWhereWithAggregatesInput | karyawanScalarWhereWithAggregatesInput[]
    nip?: StringWithAggregatesFilter<"karyawan"> | string
    nama?: StringWithAggregatesFilter<"karyawan"> | string
    alamat?: StringNullableWithAggregatesFilter<"karyawan"> | string | null
    gend?: EnumGenderNullableWithAggregatesFilter<"karyawan"> | $Enums.Gender | null
    photo?: StringNullableWithAggregatesFilter<"karyawan"> | string | null
    tgl_lahir?: DateTimeNullableWithAggregatesFilter<"karyawan"> | Date | string | null
    status?: IntNullableWithAggregatesFilter<"karyawan"> | number | null
    insert_at?: DateTimeNullableWithAggregatesFilter<"karyawan"> | Date | string | null
    update_at?: DateTimeNullableWithAggregatesFilter<"karyawan"> | Date | string | null
    id?: IntWithAggregatesFilter<"karyawan"> | number
  }

  export type log_trx_apiWhereInput = {
    AND?: log_trx_apiWhereInput | log_trx_apiWhereInput[]
    OR?: log_trx_apiWhereInput[]
    NOT?: log_trx_apiWhereInput | log_trx_apiWhereInput[]
    id?: IntFilter<"log_trx_api"> | number
    user_id?: StringNullableFilter<"log_trx_api"> | string | null
    api?: StringFilter<"log_trx_api"> | string
    request?: StringNullableFilter<"log_trx_api"> | string | null
    response?: StringNullableFilter<"log_trx_api"> | string | null
    insert_at?: DateTimeNullableFilter<"log_trx_api"> | Date | string | null
  }

  export type log_trx_apiOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    api?: SortOrder
    request?: SortOrderInput | SortOrder
    response?: SortOrderInput | SortOrder
    insert_at?: SortOrderInput | SortOrder
  }

  export type log_trx_apiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: log_trx_apiWhereInput | log_trx_apiWhereInput[]
    OR?: log_trx_apiWhereInput[]
    NOT?: log_trx_apiWhereInput | log_trx_apiWhereInput[]
    user_id?: StringNullableFilter<"log_trx_api"> | string | null
    api?: StringFilter<"log_trx_api"> | string
    request?: StringNullableFilter<"log_trx_api"> | string | null
    response?: StringNullableFilter<"log_trx_api"> | string | null
    insert_at?: DateTimeNullableFilter<"log_trx_api"> | Date | string | null
  }, "id">

  export type log_trx_apiOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    api?: SortOrder
    request?: SortOrderInput | SortOrder
    response?: SortOrderInput | SortOrder
    insert_at?: SortOrderInput | SortOrder
    _count?: log_trx_apiCountOrderByAggregateInput
    _avg?: log_trx_apiAvgOrderByAggregateInput
    _max?: log_trx_apiMaxOrderByAggregateInput
    _min?: log_trx_apiMinOrderByAggregateInput
    _sum?: log_trx_apiSumOrderByAggregateInput
  }

  export type log_trx_apiScalarWhereWithAggregatesInput = {
    AND?: log_trx_apiScalarWhereWithAggregatesInput | log_trx_apiScalarWhereWithAggregatesInput[]
    OR?: log_trx_apiScalarWhereWithAggregatesInput[]
    NOT?: log_trx_apiScalarWhereWithAggregatesInput | log_trx_apiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"log_trx_api"> | number
    user_id?: StringNullableWithAggregatesFilter<"log_trx_api"> | string | null
    api?: StringWithAggregatesFilter<"log_trx_api"> | string
    request?: StringNullableWithAggregatesFilter<"log_trx_api"> | string | null
    response?: StringNullableWithAggregatesFilter<"log_trx_api"> | string | null
    insert_at?: DateTimeNullableWithAggregatesFilter<"log_trx_api"> | Date | string | null
  }

  export type SequelizeMetaWhereInput = {
    AND?: SequelizeMetaWhereInput | SequelizeMetaWhereInput[]
    OR?: SequelizeMetaWhereInput[]
    NOT?: SequelizeMetaWhereInput | SequelizeMetaWhereInput[]
    name?: StringFilter<"SequelizeMeta"> | string
  }

  export type SequelizeMetaOrderByWithRelationInput = {
    name?: SortOrder
  }

  export type SequelizeMetaWhereUniqueInput = Prisma.AtLeast<{
    name?: string
    AND?: SequelizeMetaWhereInput | SequelizeMetaWhereInput[]
    OR?: SequelizeMetaWhereInput[]
    NOT?: SequelizeMetaWhereInput | SequelizeMetaWhereInput[]
  }, "name" | "name">

  export type SequelizeMetaOrderByWithAggregationInput = {
    name?: SortOrder
    _count?: SequelizeMetaCountOrderByAggregateInput
    _max?: SequelizeMetaMaxOrderByAggregateInput
    _min?: SequelizeMetaMinOrderByAggregateInput
  }

  export type SequelizeMetaScalarWhereWithAggregatesInput = {
    AND?: SequelizeMetaScalarWhereWithAggregatesInput | SequelizeMetaScalarWhereWithAggregatesInput[]
    OR?: SequelizeMetaScalarWhereWithAggregatesInput[]
    NOT?: SequelizeMetaScalarWhereWithAggregatesInput | SequelizeMetaScalarWhereWithAggregatesInput[]
    name?: StringWithAggregatesFilter<"SequelizeMeta"> | string
  }

  export type adminCreateInput = {
    username: string
    password?: Buffer | null
    tokens?: admin_tokenCreateNestedManyWithoutAdminInput
  }

  export type adminUncheckedCreateInput = {
    id?: number
    username: string
    password?: Buffer | null
    tokens?: admin_tokenUncheckedCreateNestedManyWithoutAdminInput
  }

  export type adminUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    tokens?: admin_tokenUpdateManyWithoutAdminNestedInput
  }

  export type adminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    tokens?: admin_tokenUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type adminCreateManyInput = {
    id?: number
    username: string
    password?: Buffer | null
  }

  export type adminUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableBytesFieldUpdateOperationsInput | Buffer | null
  }

  export type adminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableBytesFieldUpdateOperationsInput | Buffer | null
  }

  export type admin_tokenCreateInput = {
    token?: string | null
    expired_at?: Date | string | null
    admin: adminCreateNestedOneWithoutTokensInput
  }

  export type admin_tokenUncheckedCreateInput = {
    id?: number
    id_admin: number
    token?: string | null
    expired_at?: Date | string | null
  }

  export type admin_tokenUpdateInput = {
    token?: NullableStringFieldUpdateOperationsInput | string | null
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin?: adminUpdateOneRequiredWithoutTokensNestedInput
  }

  export type admin_tokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_admin?: IntFieldUpdateOperationsInput | number
    token?: NullableStringFieldUpdateOperationsInput | string | null
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type admin_tokenCreateManyInput = {
    id?: number
    id_admin: number
    token?: string | null
    expired_at?: Date | string | null
  }

  export type admin_tokenUpdateManyMutationInput = {
    token?: NullableStringFieldUpdateOperationsInput | string | null
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type admin_tokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_admin?: IntFieldUpdateOperationsInput | number
    token?: NullableStringFieldUpdateOperationsInput | string | null
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type karyawanCreateInput = {
    nip: string
    nama: string
    alamat?: string | null
    gend?: $Enums.Gender | null
    photo?: string | null
    tgl_lahir?: Date | string | null
    status?: number | null
    insert_at?: Date | string | null
    update_at?: Date | string | null
    id: number
  }

  export type karyawanUncheckedCreateInput = {
    nip: string
    nama: string
    alamat?: string | null
    gend?: $Enums.Gender | null
    photo?: string | null
    tgl_lahir?: Date | string | null
    status?: number | null
    insert_at?: Date | string | null
    update_at?: Date | string | null
    id: number
  }

  export type karyawanUpdateInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    gend?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    tgl_lahir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    insert_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type karyawanUncheckedUpdateInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    gend?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    tgl_lahir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    insert_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type karyawanCreateManyInput = {
    nip: string
    nama: string
    alamat?: string | null
    gend?: $Enums.Gender | null
    photo?: string | null
    tgl_lahir?: Date | string | null
    status?: number | null
    insert_at?: Date | string | null
    update_at?: Date | string | null
    id: number
  }

  export type karyawanUpdateManyMutationInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    gend?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    tgl_lahir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    insert_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type karyawanUncheckedUpdateManyInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    gend?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    tgl_lahir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    insert_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type log_trx_apiCreateInput = {
    user_id?: string | null
    api: string
    request?: string | null
    response?: string | null
    insert_at?: Date | string | null
  }

  export type log_trx_apiUncheckedCreateInput = {
    id?: number
    user_id?: string | null
    api: string
    request?: string | null
    response?: string | null
    insert_at?: Date | string | null
  }

  export type log_trx_apiUpdateInput = {
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    api?: StringFieldUpdateOperationsInput | string
    request?: NullableStringFieldUpdateOperationsInput | string | null
    response?: NullableStringFieldUpdateOperationsInput | string | null
    insert_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type log_trx_apiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    api?: StringFieldUpdateOperationsInput | string
    request?: NullableStringFieldUpdateOperationsInput | string | null
    response?: NullableStringFieldUpdateOperationsInput | string | null
    insert_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type log_trx_apiCreateManyInput = {
    id?: number
    user_id?: string | null
    api: string
    request?: string | null
    response?: string | null
    insert_at?: Date | string | null
  }

  export type log_trx_apiUpdateManyMutationInput = {
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    api?: StringFieldUpdateOperationsInput | string
    request?: NullableStringFieldUpdateOperationsInput | string | null
    response?: NullableStringFieldUpdateOperationsInput | string | null
    insert_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type log_trx_apiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    api?: StringFieldUpdateOperationsInput | string
    request?: NullableStringFieldUpdateOperationsInput | string | null
    response?: NullableStringFieldUpdateOperationsInput | string | null
    insert_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SequelizeMetaCreateInput = {
    name: string
  }

  export type SequelizeMetaUncheckedCreateInput = {
    name: string
  }

  export type SequelizeMetaUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SequelizeMetaUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SequelizeMetaCreateManyInput = {
    name: string
  }

  export type SequelizeMetaUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SequelizeMetaUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | null
    notIn?: Buffer[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Buffer | null
  }

  export type Admin_tokenListRelationFilter = {
    every?: admin_tokenWhereInput
    some?: admin_tokenWhereInput
    none?: admin_tokenWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type admin_tokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type adminCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type adminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type adminMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type adminMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type adminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | null
    notIn?: Buffer[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Buffer | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AdminRelationFilter = {
    is?: adminWhereInput
    isNot?: adminWhereInput
  }

  export type admin_tokenCountOrderByAggregateInput = {
    id?: SortOrder
    id_admin?: SortOrder
    token?: SortOrder
    expired_at?: SortOrder
  }

  export type admin_tokenAvgOrderByAggregateInput = {
    id?: SortOrder
    id_admin?: SortOrder
  }

  export type admin_tokenMaxOrderByAggregateInput = {
    id?: SortOrder
    id_admin?: SortOrder
    token?: SortOrder
    expired_at?: SortOrder
  }

  export type admin_tokenMinOrderByAggregateInput = {
    id?: SortOrder
    id_admin?: SortOrder
    token?: SortOrder
    expired_at?: SortOrder
  }

  export type admin_tokenSumOrderByAggregateInput = {
    id?: SortOrder
    id_admin?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | null
    notIn?: $Enums.Gender[] | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type karyawanCountOrderByAggregateInput = {
    nip?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    gend?: SortOrder
    photo?: SortOrder
    tgl_lahir?: SortOrder
    status?: SortOrder
    insert_at?: SortOrder
    update_at?: SortOrder
    id?: SortOrder
  }

  export type karyawanAvgOrderByAggregateInput = {
    status?: SortOrder
    id?: SortOrder
  }

  export type karyawanMaxOrderByAggregateInput = {
    nip?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    gend?: SortOrder
    photo?: SortOrder
    tgl_lahir?: SortOrder
    status?: SortOrder
    insert_at?: SortOrder
    update_at?: SortOrder
    id?: SortOrder
  }

  export type karyawanMinOrderByAggregateInput = {
    nip?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    gend?: SortOrder
    photo?: SortOrder
    tgl_lahir?: SortOrder
    status?: SortOrder
    insert_at?: SortOrder
    update_at?: SortOrder
    id?: SortOrder
  }

  export type karyawanSumOrderByAggregateInput = {
    status?: SortOrder
    id?: SortOrder
  }

  export type EnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | null
    notIn?: $Enums.Gender[] | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type log_trx_apiCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    api?: SortOrder
    request?: SortOrder
    response?: SortOrder
    insert_at?: SortOrder
  }

  export type log_trx_apiAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type log_trx_apiMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    api?: SortOrder
    request?: SortOrder
    response?: SortOrder
    insert_at?: SortOrder
  }

  export type log_trx_apiMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    api?: SortOrder
    request?: SortOrder
    response?: SortOrder
    insert_at?: SortOrder
  }

  export type log_trx_apiSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SequelizeMetaCountOrderByAggregateInput = {
    name?: SortOrder
  }

  export type SequelizeMetaMaxOrderByAggregateInput = {
    name?: SortOrder
  }

  export type SequelizeMetaMinOrderByAggregateInput = {
    name?: SortOrder
  }

  export type admin_tokenCreateNestedManyWithoutAdminInput = {
    create?: XOR<admin_tokenCreateWithoutAdminInput, admin_tokenUncheckedCreateWithoutAdminInput> | admin_tokenCreateWithoutAdminInput[] | admin_tokenUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: admin_tokenCreateOrConnectWithoutAdminInput | admin_tokenCreateOrConnectWithoutAdminInput[]
    createMany?: admin_tokenCreateManyAdminInputEnvelope
    connect?: admin_tokenWhereUniqueInput | admin_tokenWhereUniqueInput[]
  }

  export type admin_tokenUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<admin_tokenCreateWithoutAdminInput, admin_tokenUncheckedCreateWithoutAdminInput> | admin_tokenCreateWithoutAdminInput[] | admin_tokenUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: admin_tokenCreateOrConnectWithoutAdminInput | admin_tokenCreateOrConnectWithoutAdminInput[]
    createMany?: admin_tokenCreateManyAdminInputEnvelope
    connect?: admin_tokenWhereUniqueInput | admin_tokenWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Buffer | null
  }

  export type admin_tokenUpdateManyWithoutAdminNestedInput = {
    create?: XOR<admin_tokenCreateWithoutAdminInput, admin_tokenUncheckedCreateWithoutAdminInput> | admin_tokenCreateWithoutAdminInput[] | admin_tokenUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: admin_tokenCreateOrConnectWithoutAdminInput | admin_tokenCreateOrConnectWithoutAdminInput[]
    upsert?: admin_tokenUpsertWithWhereUniqueWithoutAdminInput | admin_tokenUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: admin_tokenCreateManyAdminInputEnvelope
    set?: admin_tokenWhereUniqueInput | admin_tokenWhereUniqueInput[]
    disconnect?: admin_tokenWhereUniqueInput | admin_tokenWhereUniqueInput[]
    delete?: admin_tokenWhereUniqueInput | admin_tokenWhereUniqueInput[]
    connect?: admin_tokenWhereUniqueInput | admin_tokenWhereUniqueInput[]
    update?: admin_tokenUpdateWithWhereUniqueWithoutAdminInput | admin_tokenUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: admin_tokenUpdateManyWithWhereWithoutAdminInput | admin_tokenUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: admin_tokenScalarWhereInput | admin_tokenScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type admin_tokenUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<admin_tokenCreateWithoutAdminInput, admin_tokenUncheckedCreateWithoutAdminInput> | admin_tokenCreateWithoutAdminInput[] | admin_tokenUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: admin_tokenCreateOrConnectWithoutAdminInput | admin_tokenCreateOrConnectWithoutAdminInput[]
    upsert?: admin_tokenUpsertWithWhereUniqueWithoutAdminInput | admin_tokenUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: admin_tokenCreateManyAdminInputEnvelope
    set?: admin_tokenWhereUniqueInput | admin_tokenWhereUniqueInput[]
    disconnect?: admin_tokenWhereUniqueInput | admin_tokenWhereUniqueInput[]
    delete?: admin_tokenWhereUniqueInput | admin_tokenWhereUniqueInput[]
    connect?: admin_tokenWhereUniqueInput | admin_tokenWhereUniqueInput[]
    update?: admin_tokenUpdateWithWhereUniqueWithoutAdminInput | admin_tokenUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: admin_tokenUpdateManyWithWhereWithoutAdminInput | admin_tokenUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: admin_tokenScalarWhereInput | admin_tokenScalarWhereInput[]
  }

  export type adminCreateNestedOneWithoutTokensInput = {
    create?: XOR<adminCreateWithoutTokensInput, adminUncheckedCreateWithoutTokensInput>
    connectOrCreate?: adminCreateOrConnectWithoutTokensInput
    connect?: adminWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type adminUpdateOneRequiredWithoutTokensNestedInput = {
    create?: XOR<adminCreateWithoutTokensInput, adminUncheckedCreateWithoutTokensInput>
    connectOrCreate?: adminCreateOrConnectWithoutTokensInput
    upsert?: adminUpsertWithoutTokensInput
    connect?: adminWhereUniqueInput
    update?: XOR<XOR<adminUpdateToOneWithWhereWithoutTokensInput, adminUpdateWithoutTokensInput>, adminUncheckedUpdateWithoutTokensInput>
  }

  export type NullableEnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | null
    notIn?: Buffer[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Buffer | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | null
    notIn?: Buffer[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Buffer | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | null
    notIn?: $Enums.Gender[] | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | null
    notIn?: $Enums.Gender[] | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type admin_tokenCreateWithoutAdminInput = {
    token?: string | null
    expired_at?: Date | string | null
  }

  export type admin_tokenUncheckedCreateWithoutAdminInput = {
    id?: number
    token?: string | null
    expired_at?: Date | string | null
  }

  export type admin_tokenCreateOrConnectWithoutAdminInput = {
    where: admin_tokenWhereUniqueInput
    create: XOR<admin_tokenCreateWithoutAdminInput, admin_tokenUncheckedCreateWithoutAdminInput>
  }

  export type admin_tokenCreateManyAdminInputEnvelope = {
    data: admin_tokenCreateManyAdminInput | admin_tokenCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type admin_tokenUpsertWithWhereUniqueWithoutAdminInput = {
    where: admin_tokenWhereUniqueInput
    update: XOR<admin_tokenUpdateWithoutAdminInput, admin_tokenUncheckedUpdateWithoutAdminInput>
    create: XOR<admin_tokenCreateWithoutAdminInput, admin_tokenUncheckedCreateWithoutAdminInput>
  }

  export type admin_tokenUpdateWithWhereUniqueWithoutAdminInput = {
    where: admin_tokenWhereUniqueInput
    data: XOR<admin_tokenUpdateWithoutAdminInput, admin_tokenUncheckedUpdateWithoutAdminInput>
  }

  export type admin_tokenUpdateManyWithWhereWithoutAdminInput = {
    where: admin_tokenScalarWhereInput
    data: XOR<admin_tokenUpdateManyMutationInput, admin_tokenUncheckedUpdateManyWithoutAdminInput>
  }

  export type admin_tokenScalarWhereInput = {
    AND?: admin_tokenScalarWhereInput | admin_tokenScalarWhereInput[]
    OR?: admin_tokenScalarWhereInput[]
    NOT?: admin_tokenScalarWhereInput | admin_tokenScalarWhereInput[]
    id?: IntFilter<"admin_token"> | number
    id_admin?: IntFilter<"admin_token"> | number
    token?: StringNullableFilter<"admin_token"> | string | null
    expired_at?: DateTimeNullableFilter<"admin_token"> | Date | string | null
  }

  export type adminCreateWithoutTokensInput = {
    username: string
    password?: Buffer | null
  }

  export type adminUncheckedCreateWithoutTokensInput = {
    id?: number
    username: string
    password?: Buffer | null
  }

  export type adminCreateOrConnectWithoutTokensInput = {
    where: adminWhereUniqueInput
    create: XOR<adminCreateWithoutTokensInput, adminUncheckedCreateWithoutTokensInput>
  }

  export type adminUpsertWithoutTokensInput = {
    update: XOR<adminUpdateWithoutTokensInput, adminUncheckedUpdateWithoutTokensInput>
    create: XOR<adminCreateWithoutTokensInput, adminUncheckedCreateWithoutTokensInput>
    where?: adminWhereInput
  }

  export type adminUpdateToOneWithWhereWithoutTokensInput = {
    where?: adminWhereInput
    data: XOR<adminUpdateWithoutTokensInput, adminUncheckedUpdateWithoutTokensInput>
  }

  export type adminUpdateWithoutTokensInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableBytesFieldUpdateOperationsInput | Buffer | null
  }

  export type adminUncheckedUpdateWithoutTokensInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableBytesFieldUpdateOperationsInput | Buffer | null
  }

  export type admin_tokenCreateManyAdminInput = {
    id?: number
    token?: string | null
    expired_at?: Date | string | null
  }

  export type admin_tokenUpdateWithoutAdminInput = {
    token?: NullableStringFieldUpdateOperationsInput | string | null
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type admin_tokenUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: NullableStringFieldUpdateOperationsInput | string | null
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type admin_tokenUncheckedUpdateManyWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: NullableStringFieldUpdateOperationsInput | string | null
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AdminCountOutputTypeDefaultArgs instead
     */
    export type AdminCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use adminDefaultArgs instead
     */
    export type adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = adminDefaultArgs<ExtArgs>
    /**
     * @deprecated Use admin_tokenDefaultArgs instead
     */
    export type admin_tokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = admin_tokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use karyawanDefaultArgs instead
     */
    export type karyawanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = karyawanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use log_trx_apiDefaultArgs instead
     */
    export type log_trx_apiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = log_trx_apiDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SequelizeMetaDefaultArgs instead
     */
    export type SequelizeMetaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SequelizeMetaDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}