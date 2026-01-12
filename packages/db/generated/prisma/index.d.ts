
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model KycSession
 * 
 */
export type KycSession = $Result.DefaultSelection<Prisma.$KycSessionPayload>
/**
 * Model SIP
 * 
 */
export type SIP = $Result.DefaultSelection<Prisma.$SIPPayload>
/**
 * Model Investment
 * 
 */
export type Investment = $Result.DefaultSelection<Prisma.$InvestmentPayload>
/**
 * Model Watchlist
 * 
 */
export type Watchlist = $Result.DefaultSelection<Prisma.$WatchlistPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Blog
 * 
 */
export type Blog = $Result.DefaultSelection<Prisma.$BlogPayload>
/**
 * Model Story
 * 
 */
export type Story = $Result.DefaultSelection<Prisma.$StoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const KycStatus: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  VERIFIED: 'VERIFIED',
  REJECTED: 'REJECTED',
  EXPIRED: 'EXPIRED'
};

export type KycStatus = (typeof KycStatus)[keyof typeof KycStatus]


export const KycType: {
  VALIDATED: 'VALIDATED',
  REGISTERED: 'REGISTERED',
  ON_HOLD: 'ON_HOLD'
};

export type KycType = (typeof KycType)[keyof typeof KycType]


export const KycSessionStatus: {
  INITIATED: 'INITIATED',
  REDIRECTED: 'REDIRECTED',
  AUTHENTICATED: 'AUTHENTICATED',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  EXPIRED: 'EXPIRED'
};

export type KycSessionStatus = (typeof KycSessionStatus)[keyof typeof KycSessionStatus]


export const InvestmentType: {
  SIP: 'SIP',
  LUMPSUM: 'LUMPSUM'
};

export type InvestmentType = (typeof InvestmentType)[keyof typeof InvestmentType]


export const SIPFrequency: {
  MONTHLY: 'MONTHLY',
  QUARTERLY: 'QUARTERLY',
  WEEKLY: 'WEEKLY'
};

export type SIPFrequency = (typeof SIPFrequency)[keyof typeof SIPFrequency]


export const SIPStatus: {
  ACTIVE: 'ACTIVE',
  PAUSED: 'PAUSED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type SIPStatus = (typeof SIPStatus)[keyof typeof SIPStatus]


export const PaymentStatus: {
  INITIATED: 'INITIATED',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const PaymentMode: {
  UPI: 'UPI',
  NETBANKING: 'NETBANKING',
  AUTO_DEBIT: 'AUTO_DEBIT'
};

export type PaymentMode = (typeof PaymentMode)[keyof typeof PaymentMode]


export const InvestmentStatus: {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
  REDEEMED: 'REDEEMED',
  CANCELLED: 'CANCELLED',
  ONGOING: 'ONGOING'
};

export type InvestmentStatus = (typeof InvestmentStatus)[keyof typeof InvestmentStatus]


export const EducationLevel: {
  UNDERGRADUATE: 'UNDERGRADUATE',
  GRADUATE: 'GRADUATE',
  POST_GRADUATE: 'POST_GRADUATE',
  DOCTORATE: 'DOCTORATE',
  OTHER: 'OTHER'
};

export type EducationLevel = (typeof EducationLevel)[keyof typeof EducationLevel]


export const MaritalStatus: {
  SINGLE: 'SINGLE',
  MARRIED: 'MARRIED',
  DIVORCED: 'DIVORCED',
  WIDOWED: 'WIDOWED',
  OTHER: 'OTHER'
};

export type MaritalStatus = (typeof MaritalStatus)[keyof typeof MaritalStatus]


export const AnnualIncome: {
  BELOW_2_LAKH: 'BELOW_2_LAKH',
  TWO_TO_FIVE_LAKH: 'TWO_TO_FIVE_LAKH',
  FIVE_TO_TEN_LAKH: 'FIVE_TO_TEN_LAKH',
  TEN_TO_TWENTYFIVE_LAKH: 'TEN_TO_TWENTYFIVE_LAKH',
  ABOVE_25_LAKH: 'ABOVE_25_LAKH',
  OTHER: 'OTHER'
};

export type AnnualIncome = (typeof AnnualIncome)[keyof typeof AnnualIncome]


export const IncomeSource: {
  SALARIED: 'SALARIED',
  SELF_EMPLOYED: 'SELF_EMPLOYED',
  BUSINESS_OWNER: 'BUSINESS_OWNER',
  STUDENT: 'STUDENT',
  RETIRED: 'RETIRED',
  OTHER: 'OTHER'
};

export type IncomeSource = (typeof IncomeSource)[keyof typeof IncomeSource]


export const TaxResidency: {
  INDIA: 'INDIA',
  NRI: 'NRI',
  FOREIGN_NATIONAL: 'FOREIGN_NATIONAL'
};

export type TaxResidency = (typeof TaxResidency)[keyof typeof TaxResidency]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER',
  PREFER_NOT_TO_SAY: 'PREFER_NOT_TO_SAY'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const ResidentialStatus: {
  RESIDENT_INDIVIDUAL: 'RESIDENT_INDIVIDUAL',
  NRI: 'NRI',
  FOREIGN_NATIONAL: 'FOREIGN_NATIONAL'
};

export type ResidentialStatus = (typeof ResidentialStatus)[keyof typeof ResidentialStatus]


export const OccupationType: {
  PRIVATE_SECTOR: 'PRIVATE_SECTOR',
  PUBLIC_SECTOR: 'PUBLIC_SECTOR',
  GOVERNMENT_SERVICE: 'GOVERNMENT_SERVICE',
  BUSINESS: 'BUSINESS',
  PROFESSIONAL: 'PROFESSIONAL',
  STUDENT: 'STUDENT',
  RETIRED: 'RETIRED',
  HOUSEWIFE: 'HOUSEWIFE',
  OTHER: 'OTHER'
};

export type OccupationType = (typeof OccupationType)[keyof typeof OccupationType]


export const AdminRole: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  EDITOR: 'EDITOR'
};

export type AdminRole = (typeof AdminRole)[keyof typeof AdminRole]


export const BlogStatus: {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED',
  ARCHIVED: 'ARCHIVED'
};

export type BlogStatus = (typeof BlogStatus)[keyof typeof BlogStatus]


export const StoryStatus: {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED',
  ARCHIVED: 'ARCHIVED'
};

export type StoryStatus = (typeof StoryStatus)[keyof typeof StoryStatus]

}

export type KycStatus = $Enums.KycStatus

export const KycStatus: typeof $Enums.KycStatus

export type KycType = $Enums.KycType

export const KycType: typeof $Enums.KycType

export type KycSessionStatus = $Enums.KycSessionStatus

export const KycSessionStatus: typeof $Enums.KycSessionStatus

export type InvestmentType = $Enums.InvestmentType

export const InvestmentType: typeof $Enums.InvestmentType

export type SIPFrequency = $Enums.SIPFrequency

export const SIPFrequency: typeof $Enums.SIPFrequency

export type SIPStatus = $Enums.SIPStatus

export const SIPStatus: typeof $Enums.SIPStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type PaymentMode = $Enums.PaymentMode

export const PaymentMode: typeof $Enums.PaymentMode

export type InvestmentStatus = $Enums.InvestmentStatus

export const InvestmentStatus: typeof $Enums.InvestmentStatus

export type EducationLevel = $Enums.EducationLevel

export const EducationLevel: typeof $Enums.EducationLevel

export type MaritalStatus = $Enums.MaritalStatus

export const MaritalStatus: typeof $Enums.MaritalStatus

export type AnnualIncome = $Enums.AnnualIncome

export const AnnualIncome: typeof $Enums.AnnualIncome

export type IncomeSource = $Enums.IncomeSource

export const IncomeSource: typeof $Enums.IncomeSource

export type TaxResidency = $Enums.TaxResidency

export const TaxResidency: typeof $Enums.TaxResidency

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type ResidentialStatus = $Enums.ResidentialStatus

export const ResidentialStatus: typeof $Enums.ResidentialStatus

export type OccupationType = $Enums.OccupationType

export const OccupationType: typeof $Enums.OccupationType

export type AdminRole = $Enums.AdminRole

export const AdminRole: typeof $Enums.AdminRole

export type BlogStatus = $Enums.BlogStatus

export const BlogStatus: typeof $Enums.BlogStatus

export type StoryStatus = $Enums.StoryStatus

export const StoryStatus: typeof $Enums.StoryStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kycSession`: Exposes CRUD operations for the **KycSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KycSessions
    * const kycSessions = await prisma.kycSession.findMany()
    * ```
    */
  get kycSession(): Prisma.KycSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sIP`: Exposes CRUD operations for the **SIP** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SIPS
    * const sIPS = await prisma.sIP.findMany()
    * ```
    */
  get sIP(): Prisma.SIPDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.investment`: Exposes CRUD operations for the **Investment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Investments
    * const investments = await prisma.investment.findMany()
    * ```
    */
  get investment(): Prisma.InvestmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.watchlist`: Exposes CRUD operations for the **Watchlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Watchlists
    * const watchlists = await prisma.watchlist.findMany()
    * ```
    */
  get watchlist(): Prisma.WatchlistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blog`: Exposes CRUD operations for the **Blog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blogs
    * const blogs = await prisma.blog.findMany()
    * ```
    */
  get blog(): Prisma.BlogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.story`: Exposes CRUD operations for the **Story** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stories
    * const stories = await prisma.story.findMany()
    * ```
    */
  get story(): Prisma.StoryDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    KycSession: 'KycSession',
    SIP: 'SIP',
    Investment: 'Investment',
    Watchlist: 'Watchlist',
    Payment: 'Payment',
    Admin: 'Admin',
    Blog: 'Blog',
    Story: 'Story'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "kycSession" | "sIP" | "investment" | "watchlist" | "payment" | "admin" | "blog" | "story"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      KycSession: {
        payload: Prisma.$KycSessionPayload<ExtArgs>
        fields: Prisma.KycSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KycSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KycSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycSessionPayload>
          }
          findFirst: {
            args: Prisma.KycSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KycSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycSessionPayload>
          }
          findMany: {
            args: Prisma.KycSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycSessionPayload>[]
          }
          create: {
            args: Prisma.KycSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycSessionPayload>
          }
          createMany: {
            args: Prisma.KycSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KycSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycSessionPayload>[]
          }
          delete: {
            args: Prisma.KycSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycSessionPayload>
          }
          update: {
            args: Prisma.KycSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycSessionPayload>
          }
          deleteMany: {
            args: Prisma.KycSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KycSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KycSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycSessionPayload>[]
          }
          upsert: {
            args: Prisma.KycSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycSessionPayload>
          }
          aggregate: {
            args: Prisma.KycSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKycSession>
          }
          groupBy: {
            args: Prisma.KycSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<KycSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.KycSessionCountArgs<ExtArgs>
            result: $Utils.Optional<KycSessionCountAggregateOutputType> | number
          }
        }
      }
      SIP: {
        payload: Prisma.$SIPPayload<ExtArgs>
        fields: Prisma.SIPFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SIPFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SIPPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SIPFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SIPPayload>
          }
          findFirst: {
            args: Prisma.SIPFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SIPPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SIPFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SIPPayload>
          }
          findMany: {
            args: Prisma.SIPFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SIPPayload>[]
          }
          create: {
            args: Prisma.SIPCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SIPPayload>
          }
          createMany: {
            args: Prisma.SIPCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SIPCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SIPPayload>[]
          }
          delete: {
            args: Prisma.SIPDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SIPPayload>
          }
          update: {
            args: Prisma.SIPUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SIPPayload>
          }
          deleteMany: {
            args: Prisma.SIPDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SIPUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SIPUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SIPPayload>[]
          }
          upsert: {
            args: Prisma.SIPUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SIPPayload>
          }
          aggregate: {
            args: Prisma.SIPAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSIP>
          }
          groupBy: {
            args: Prisma.SIPGroupByArgs<ExtArgs>
            result: $Utils.Optional<SIPGroupByOutputType>[]
          }
          count: {
            args: Prisma.SIPCountArgs<ExtArgs>
            result: $Utils.Optional<SIPCountAggregateOutputType> | number
          }
        }
      }
      Investment: {
        payload: Prisma.$InvestmentPayload<ExtArgs>
        fields: Prisma.InvestmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvestmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvestmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          findFirst: {
            args: Prisma.InvestmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvestmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          findMany: {
            args: Prisma.InvestmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>[]
          }
          create: {
            args: Prisma.InvestmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          createMany: {
            args: Prisma.InvestmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvestmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>[]
          }
          delete: {
            args: Prisma.InvestmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          update: {
            args: Prisma.InvestmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          deleteMany: {
            args: Prisma.InvestmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvestmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvestmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>[]
          }
          upsert: {
            args: Prisma.InvestmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          aggregate: {
            args: Prisma.InvestmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvestment>
          }
          groupBy: {
            args: Prisma.InvestmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvestmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvestmentCountArgs<ExtArgs>
            result: $Utils.Optional<InvestmentCountAggregateOutputType> | number
          }
        }
      }
      Watchlist: {
        payload: Prisma.$WatchlistPayload<ExtArgs>
        fields: Prisma.WatchlistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WatchlistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WatchlistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          findFirst: {
            args: Prisma.WatchlistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WatchlistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          findMany: {
            args: Prisma.WatchlistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>[]
          }
          create: {
            args: Prisma.WatchlistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          createMany: {
            args: Prisma.WatchlistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WatchlistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>[]
          }
          delete: {
            args: Prisma.WatchlistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          update: {
            args: Prisma.WatchlistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          deleteMany: {
            args: Prisma.WatchlistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WatchlistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WatchlistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>[]
          }
          upsert: {
            args: Prisma.WatchlistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          aggregate: {
            args: Prisma.WatchlistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWatchlist>
          }
          groupBy: {
            args: Prisma.WatchlistGroupByArgs<ExtArgs>
            result: $Utils.Optional<WatchlistGroupByOutputType>[]
          }
          count: {
            args: Prisma.WatchlistCountArgs<ExtArgs>
            result: $Utils.Optional<WatchlistCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Blog: {
        payload: Prisma.$BlogPayload<ExtArgs>
        fields: Prisma.BlogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findFirst: {
            args: Prisma.BlogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findMany: {
            args: Prisma.BlogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          create: {
            args: Prisma.BlogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          createMany: {
            args: Prisma.BlogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          delete: {
            args: Prisma.BlogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          update: {
            args: Prisma.BlogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          deleteMany: {
            args: Prisma.BlogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          upsert: {
            args: Prisma.BlogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          aggregate: {
            args: Prisma.BlogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlog>
          }
          groupBy: {
            args: Prisma.BlogGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogCountArgs<ExtArgs>
            result: $Utils.Optional<BlogCountAggregateOutputType> | number
          }
        }
      }
      Story: {
        payload: Prisma.$StoryPayload<ExtArgs>
        fields: Prisma.StoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          findFirst: {
            args: Prisma.StoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          findMany: {
            args: Prisma.StoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>[]
          }
          create: {
            args: Prisma.StoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          createMany: {
            args: Prisma.StoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>[]
          }
          delete: {
            args: Prisma.StoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          update: {
            args: Prisma.StoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          deleteMany: {
            args: Prisma.StoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>[]
          }
          upsert: {
            args: Prisma.StoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          aggregate: {
            args: Prisma.StoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStory>
          }
          groupBy: {
            args: Prisma.StoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoryCountArgs<ExtArgs>
            result: $Utils.Optional<StoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    kycSession?: KycSessionOmit
    sIP?: SIPOmit
    investment?: InvestmentOmit
    watchlist?: WatchlistOmit
    payment?: PaymentOmit
    admin?: AdminOmit
    blog?: BlogOmit
    story?: StoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sips: number
    investments: number
    payments: number
    kycSessions: number
    watchlist: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sips?: boolean | UserCountOutputTypeCountSipsArgs
    investments?: boolean | UserCountOutputTypeCountInvestmentsArgs
    payments?: boolean | UserCountOutputTypeCountPaymentsArgs
    kycSessions?: boolean | UserCountOutputTypeCountKycSessionsArgs
    watchlist?: boolean | UserCountOutputTypeCountWatchlistArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SIPWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInvestmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountKycSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KycSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWatchlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchlistWhereInput
  }


  /**
   * Count Type SIPCountOutputType
   */

  export type SIPCountOutputType = {
    investments: number
  }

  export type SIPCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    investments?: boolean | SIPCountOutputTypeCountInvestmentsArgs
  }

  // Custom InputTypes
  /**
   * SIPCountOutputType without action
   */
  export type SIPCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SIPCountOutputType
     */
    select?: SIPCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SIPCountOutputType without action
   */
  export type SIPCountOutputTypeCountInvestmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestmentWhereInput
  }


  /**
   * Count Type InvestmentCountOutputType
   */

  export type InvestmentCountOutputType = {
    Payment: number
  }

  export type InvestmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Payment?: boolean | InvestmentCountOutputTypeCountPaymentArgs
  }

  // Custom InputTypes
  /**
   * InvestmentCountOutputType without action
   */
  export type InvestmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentCountOutputType
     */
    select?: InvestmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvestmentCountOutputType without action
   */
  export type InvestmentCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    blogs: number
    stories: number
  }

  export type AdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogs?: boolean | AdminCountOutputTypeCountBlogsArgs
    stories?: boolean | AdminCountOutputTypeCountStoriesArgs
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
  export type AdminCountOutputTypeCountBlogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountStoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    currentStep: number | null
    bankNameMatchScore: number | null
    nomineeAllocation: number | null
  }

  export type UserSumAggregateOutputType = {
    currentStep: number | null
    bankNameMatchScore: number | null
    nomineeAllocation: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    currentStep: number | null
    phone: string | null
    encryptedPan: string | null
    encryptedBankAcc: string | null
    encryptedIfsc: string | null
    bankAccountType: string | null
    bankName: string | null
    bankBranchName: string | null
    bankAccountHolderName: string | null
    bankVerified: boolean | null
    bankVerifiedAt: Date | null
    bankBeneficiaryName: string | null
    bankNameMatchScore: number | null
    upiId: string | null
    dob: Date | null
    maritalStatus: $Enums.MaritalStatus | null
    education: $Enums.EducationLevel | null
    motherName: string | null
    fatherName: string | null
    gender: $Enums.Gender | null
    annualIncome: $Enums.AnnualIncome | null
    incomeSource: $Enums.IncomeSource | null
    taxResidency: $Enums.TaxResidency | null
    residentialStatus: $Enums.ResidentialStatus | null
    occupationType: $Enums.OccupationType | null
    countryOfBirth: string | null
    nationality: string | null
    signatureUrl: string | null
    nomineeName: string | null
    nomineeRelation: string | null
    nomineeAllocation: number | null
    nomineeIdType: string | null
    nomineeIdNumber: string | null
    nomineeEmail: string | null
    nomineeMobile: string | null
    nomineeAddressLine1: string | null
    nomineeAddressLine2: string | null
    nomineeCity: string | null
    nomineePincode: string | null
    nomineeCountry: string | null
    nomineeDob: Date | null
    languagePref: string | null
    createdAt: Date | null
    updatedAt: Date | null
    kycStatus: $Enums.KycStatus | null
    digilockerKycId: string | null
    digilockerid: string | null
    aadhaarLinked: boolean | null
    aadhaarLastFour: string | null
    kycVerifiedAt: Date | null
    addressLine1: string | null
    addressLine2: string | null
    city: string | null
    state: string | null
    pincode: string | null
    country: string | null
    commAddressLine1: string | null
    commAddressLine2: string | null
    commCity: string | null
    commState: string | null
    commPincode: string | null
    commCountry: string | null
    useSameAddress: boolean | null
    dlAccessToken: string | null
    dlRefreshToken: string | null
    dlTokenExpiresAt: Date | null
    ckycRefId: string | null
    kycType: $Enums.KycType | null
    kraVerified: boolean | null
    kraRefId: string | null
    kraStatusCode: string | null
    kraStatusDate: Date | null
    uccCode: string | null
    fatcaSubmitted: boolean | null
    elogAuthenticated: boolean | null
    nseStatus: string | null
    nseLastUpdated: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    currentStep: number | null
    phone: string | null
    encryptedPan: string | null
    encryptedBankAcc: string | null
    encryptedIfsc: string | null
    bankAccountType: string | null
    bankName: string | null
    bankBranchName: string | null
    bankAccountHolderName: string | null
    bankVerified: boolean | null
    bankVerifiedAt: Date | null
    bankBeneficiaryName: string | null
    bankNameMatchScore: number | null
    upiId: string | null
    dob: Date | null
    maritalStatus: $Enums.MaritalStatus | null
    education: $Enums.EducationLevel | null
    motherName: string | null
    fatherName: string | null
    gender: $Enums.Gender | null
    annualIncome: $Enums.AnnualIncome | null
    incomeSource: $Enums.IncomeSource | null
    taxResidency: $Enums.TaxResidency | null
    residentialStatus: $Enums.ResidentialStatus | null
    occupationType: $Enums.OccupationType | null
    countryOfBirth: string | null
    nationality: string | null
    signatureUrl: string | null
    nomineeName: string | null
    nomineeRelation: string | null
    nomineeAllocation: number | null
    nomineeIdType: string | null
    nomineeIdNumber: string | null
    nomineeEmail: string | null
    nomineeMobile: string | null
    nomineeAddressLine1: string | null
    nomineeAddressLine2: string | null
    nomineeCity: string | null
    nomineePincode: string | null
    nomineeCountry: string | null
    nomineeDob: Date | null
    languagePref: string | null
    createdAt: Date | null
    updatedAt: Date | null
    kycStatus: $Enums.KycStatus | null
    digilockerKycId: string | null
    digilockerid: string | null
    aadhaarLinked: boolean | null
    aadhaarLastFour: string | null
    kycVerifiedAt: Date | null
    addressLine1: string | null
    addressLine2: string | null
    city: string | null
    state: string | null
    pincode: string | null
    country: string | null
    commAddressLine1: string | null
    commAddressLine2: string | null
    commCity: string | null
    commState: string | null
    commPincode: string | null
    commCountry: string | null
    useSameAddress: boolean | null
    dlAccessToken: string | null
    dlRefreshToken: string | null
    dlTokenExpiresAt: Date | null
    ckycRefId: string | null
    kycType: $Enums.KycType | null
    kraVerified: boolean | null
    kraRefId: string | null
    kraStatusCode: string | null
    kraStatusDate: Date | null
    uccCode: string | null
    fatcaSubmitted: boolean | null
    elogAuthenticated: boolean | null
    nseStatus: string | null
    nseLastUpdated: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    currentStep: number
    phone: number
    encryptedPan: number
    encryptedBankAcc: number
    encryptedIfsc: number
    bankAccountType: number
    bankName: number
    bankBranchName: number
    bankAccountHolderName: number
    bankVerified: number
    bankVerifiedAt: number
    bankBeneficiaryName: number
    bankNameMatchScore: number
    upiId: number
    dob: number
    maritalStatus: number
    education: number
    motherName: number
    fatherName: number
    gender: number
    annualIncome: number
    incomeSource: number
    taxResidency: number
    residentialStatus: number
    occupationType: number
    countryOfBirth: number
    nationality: number
    signatureUrl: number
    nomineeName: number
    nomineeRelation: number
    nomineeAllocation: number
    nomineeIdType: number
    nomineeIdNumber: number
    nomineeEmail: number
    nomineeMobile: number
    nomineeAddressLine1: number
    nomineeAddressLine2: number
    nomineeCity: number
    nomineePincode: number
    nomineeCountry: number
    nomineeDob: number
    languagePref: number
    createdAt: number
    updatedAt: number
    kycStatus: number
    digilockerKycId: number
    digilockerid: number
    aadhaarLinked: number
    aadhaarLastFour: number
    kycVerifiedAt: number
    addressLine1: number
    addressLine2: number
    city: number
    state: number
    pincode: number
    country: number
    commAddressLine1: number
    commAddressLine2: number
    commCity: number
    commState: number
    commPincode: number
    commCountry: number
    useSameAddress: number
    dlAccessToken: number
    dlRefreshToken: number
    dlTokenExpiresAt: number
    ckycRefId: number
    kycType: number
    kraVerified: number
    kraRefId: number
    kraStatusCode: number
    kraStatusDate: number
    fatcaDeclaration: number
    uccCode: number
    fatcaSubmitted: number
    elogAuthenticated: number
    nseStatus: number
    nseLastUpdated: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    currentStep?: true
    bankNameMatchScore?: true
    nomineeAllocation?: true
  }

  export type UserSumAggregateInputType = {
    currentStep?: true
    bankNameMatchScore?: true
    nomineeAllocation?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    currentStep?: true
    phone?: true
    encryptedPan?: true
    encryptedBankAcc?: true
    encryptedIfsc?: true
    bankAccountType?: true
    bankName?: true
    bankBranchName?: true
    bankAccountHolderName?: true
    bankVerified?: true
    bankVerifiedAt?: true
    bankBeneficiaryName?: true
    bankNameMatchScore?: true
    upiId?: true
    dob?: true
    maritalStatus?: true
    education?: true
    motherName?: true
    fatherName?: true
    gender?: true
    annualIncome?: true
    incomeSource?: true
    taxResidency?: true
    residentialStatus?: true
    occupationType?: true
    countryOfBirth?: true
    nationality?: true
    signatureUrl?: true
    nomineeName?: true
    nomineeRelation?: true
    nomineeAllocation?: true
    nomineeIdType?: true
    nomineeIdNumber?: true
    nomineeEmail?: true
    nomineeMobile?: true
    nomineeAddressLine1?: true
    nomineeAddressLine2?: true
    nomineeCity?: true
    nomineePincode?: true
    nomineeCountry?: true
    nomineeDob?: true
    languagePref?: true
    createdAt?: true
    updatedAt?: true
    kycStatus?: true
    digilockerKycId?: true
    digilockerid?: true
    aadhaarLinked?: true
    aadhaarLastFour?: true
    kycVerifiedAt?: true
    addressLine1?: true
    addressLine2?: true
    city?: true
    state?: true
    pincode?: true
    country?: true
    commAddressLine1?: true
    commAddressLine2?: true
    commCity?: true
    commState?: true
    commPincode?: true
    commCountry?: true
    useSameAddress?: true
    dlAccessToken?: true
    dlRefreshToken?: true
    dlTokenExpiresAt?: true
    ckycRefId?: true
    kycType?: true
    kraVerified?: true
    kraRefId?: true
    kraStatusCode?: true
    kraStatusDate?: true
    uccCode?: true
    fatcaSubmitted?: true
    elogAuthenticated?: true
    nseStatus?: true
    nseLastUpdated?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    currentStep?: true
    phone?: true
    encryptedPan?: true
    encryptedBankAcc?: true
    encryptedIfsc?: true
    bankAccountType?: true
    bankName?: true
    bankBranchName?: true
    bankAccountHolderName?: true
    bankVerified?: true
    bankVerifiedAt?: true
    bankBeneficiaryName?: true
    bankNameMatchScore?: true
    upiId?: true
    dob?: true
    maritalStatus?: true
    education?: true
    motherName?: true
    fatherName?: true
    gender?: true
    annualIncome?: true
    incomeSource?: true
    taxResidency?: true
    residentialStatus?: true
    occupationType?: true
    countryOfBirth?: true
    nationality?: true
    signatureUrl?: true
    nomineeName?: true
    nomineeRelation?: true
    nomineeAllocation?: true
    nomineeIdType?: true
    nomineeIdNumber?: true
    nomineeEmail?: true
    nomineeMobile?: true
    nomineeAddressLine1?: true
    nomineeAddressLine2?: true
    nomineeCity?: true
    nomineePincode?: true
    nomineeCountry?: true
    nomineeDob?: true
    languagePref?: true
    createdAt?: true
    updatedAt?: true
    kycStatus?: true
    digilockerKycId?: true
    digilockerid?: true
    aadhaarLinked?: true
    aadhaarLastFour?: true
    kycVerifiedAt?: true
    addressLine1?: true
    addressLine2?: true
    city?: true
    state?: true
    pincode?: true
    country?: true
    commAddressLine1?: true
    commAddressLine2?: true
    commCity?: true
    commState?: true
    commPincode?: true
    commCountry?: true
    useSameAddress?: true
    dlAccessToken?: true
    dlRefreshToken?: true
    dlTokenExpiresAt?: true
    ckycRefId?: true
    kycType?: true
    kraVerified?: true
    kraRefId?: true
    kraStatusCode?: true
    kraStatusDate?: true
    uccCode?: true
    fatcaSubmitted?: true
    elogAuthenticated?: true
    nseStatus?: true
    nseLastUpdated?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    currentStep?: true
    phone?: true
    encryptedPan?: true
    encryptedBankAcc?: true
    encryptedIfsc?: true
    bankAccountType?: true
    bankName?: true
    bankBranchName?: true
    bankAccountHolderName?: true
    bankVerified?: true
    bankVerifiedAt?: true
    bankBeneficiaryName?: true
    bankNameMatchScore?: true
    upiId?: true
    dob?: true
    maritalStatus?: true
    education?: true
    motherName?: true
    fatherName?: true
    gender?: true
    annualIncome?: true
    incomeSource?: true
    taxResidency?: true
    residentialStatus?: true
    occupationType?: true
    countryOfBirth?: true
    nationality?: true
    signatureUrl?: true
    nomineeName?: true
    nomineeRelation?: true
    nomineeAllocation?: true
    nomineeIdType?: true
    nomineeIdNumber?: true
    nomineeEmail?: true
    nomineeMobile?: true
    nomineeAddressLine1?: true
    nomineeAddressLine2?: true
    nomineeCity?: true
    nomineePincode?: true
    nomineeCountry?: true
    nomineeDob?: true
    languagePref?: true
    createdAt?: true
    updatedAt?: true
    kycStatus?: true
    digilockerKycId?: true
    digilockerid?: true
    aadhaarLinked?: true
    aadhaarLastFour?: true
    kycVerifiedAt?: true
    addressLine1?: true
    addressLine2?: true
    city?: true
    state?: true
    pincode?: true
    country?: true
    commAddressLine1?: true
    commAddressLine2?: true
    commCity?: true
    commState?: true
    commPincode?: true
    commCountry?: true
    useSameAddress?: true
    dlAccessToken?: true
    dlRefreshToken?: true
    dlTokenExpiresAt?: true
    ckycRefId?: true
    kycType?: true
    kraVerified?: true
    kraRefId?: true
    kraStatusCode?: true
    kraStatusDate?: true
    fatcaDeclaration?: true
    uccCode?: true
    fatcaSubmitted?: true
    elogAuthenticated?: true
    nseStatus?: true
    nseLastUpdated?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    fullName: string
    email: string
    currentStep: number
    phone: string | null
    encryptedPan: string | null
    encryptedBankAcc: string | null
    encryptedIfsc: string | null
    bankAccountType: string | null
    bankName: string | null
    bankBranchName: string | null
    bankAccountHolderName: string | null
    bankVerified: boolean
    bankVerifiedAt: Date | null
    bankBeneficiaryName: string | null
    bankNameMatchScore: number | null
    upiId: string | null
    dob: Date | null
    maritalStatus: $Enums.MaritalStatus | null
    education: $Enums.EducationLevel | null
    motherName: string | null
    fatherName: string | null
    gender: $Enums.Gender | null
    annualIncome: $Enums.AnnualIncome | null
    incomeSource: $Enums.IncomeSource | null
    taxResidency: $Enums.TaxResidency | null
    residentialStatus: $Enums.ResidentialStatus | null
    occupationType: $Enums.OccupationType | null
    countryOfBirth: string | null
    nationality: string | null
    signatureUrl: string | null
    nomineeName: string | null
    nomineeRelation: string | null
    nomineeAllocation: number | null
    nomineeIdType: string | null
    nomineeIdNumber: string | null
    nomineeEmail: string | null
    nomineeMobile: string | null
    nomineeAddressLine1: string | null
    nomineeAddressLine2: string | null
    nomineeCity: string | null
    nomineePincode: string | null
    nomineeCountry: string | null
    nomineeDob: Date | null
    languagePref: string | null
    createdAt: Date
    updatedAt: Date
    kycStatus: $Enums.KycStatus
    digilockerKycId: string | null
    digilockerid: string | null
    aadhaarLinked: boolean
    aadhaarLastFour: string | null
    kycVerifiedAt: Date | null
    addressLine1: string | null
    addressLine2: string | null
    city: string | null
    state: string | null
    pincode: string | null
    country: string | null
    commAddressLine1: string | null
    commAddressLine2: string | null
    commCity: string | null
    commState: string | null
    commPincode: string | null
    commCountry: string | null
    useSameAddress: boolean
    dlAccessToken: string | null
    dlRefreshToken: string | null
    dlTokenExpiresAt: Date | null
    ckycRefId: string | null
    kycType: $Enums.KycType | null
    kraVerified: boolean
    kraRefId: string | null
    kraStatusCode: string | null
    kraStatusDate: Date | null
    fatcaDeclaration: JsonValue | null
    uccCode: string | null
    fatcaSubmitted: boolean
    elogAuthenticated: boolean
    nseStatus: string | null
    nseLastUpdated: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    currentStep?: boolean
    phone?: boolean
    encryptedPan?: boolean
    encryptedBankAcc?: boolean
    encryptedIfsc?: boolean
    bankAccountType?: boolean
    bankName?: boolean
    bankBranchName?: boolean
    bankAccountHolderName?: boolean
    bankVerified?: boolean
    bankVerifiedAt?: boolean
    bankBeneficiaryName?: boolean
    bankNameMatchScore?: boolean
    upiId?: boolean
    dob?: boolean
    maritalStatus?: boolean
    education?: boolean
    motherName?: boolean
    fatherName?: boolean
    gender?: boolean
    annualIncome?: boolean
    incomeSource?: boolean
    taxResidency?: boolean
    residentialStatus?: boolean
    occupationType?: boolean
    countryOfBirth?: boolean
    nationality?: boolean
    signatureUrl?: boolean
    nomineeName?: boolean
    nomineeRelation?: boolean
    nomineeAllocation?: boolean
    nomineeIdType?: boolean
    nomineeIdNumber?: boolean
    nomineeEmail?: boolean
    nomineeMobile?: boolean
    nomineeAddressLine1?: boolean
    nomineeAddressLine2?: boolean
    nomineeCity?: boolean
    nomineePincode?: boolean
    nomineeCountry?: boolean
    nomineeDob?: boolean
    languagePref?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kycStatus?: boolean
    digilockerKycId?: boolean
    digilockerid?: boolean
    aadhaarLinked?: boolean
    aadhaarLastFour?: boolean
    kycVerifiedAt?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    city?: boolean
    state?: boolean
    pincode?: boolean
    country?: boolean
    commAddressLine1?: boolean
    commAddressLine2?: boolean
    commCity?: boolean
    commState?: boolean
    commPincode?: boolean
    commCountry?: boolean
    useSameAddress?: boolean
    dlAccessToken?: boolean
    dlRefreshToken?: boolean
    dlTokenExpiresAt?: boolean
    ckycRefId?: boolean
    kycType?: boolean
    kraVerified?: boolean
    kraRefId?: boolean
    kraStatusCode?: boolean
    kraStatusDate?: boolean
    fatcaDeclaration?: boolean
    uccCode?: boolean
    fatcaSubmitted?: boolean
    elogAuthenticated?: boolean
    nseStatus?: boolean
    nseLastUpdated?: boolean
    sips?: boolean | User$sipsArgs<ExtArgs>
    investments?: boolean | User$investmentsArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    kycSessions?: boolean | User$kycSessionsArgs<ExtArgs>
    watchlist?: boolean | User$watchlistArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    currentStep?: boolean
    phone?: boolean
    encryptedPan?: boolean
    encryptedBankAcc?: boolean
    encryptedIfsc?: boolean
    bankAccountType?: boolean
    bankName?: boolean
    bankBranchName?: boolean
    bankAccountHolderName?: boolean
    bankVerified?: boolean
    bankVerifiedAt?: boolean
    bankBeneficiaryName?: boolean
    bankNameMatchScore?: boolean
    upiId?: boolean
    dob?: boolean
    maritalStatus?: boolean
    education?: boolean
    motherName?: boolean
    fatherName?: boolean
    gender?: boolean
    annualIncome?: boolean
    incomeSource?: boolean
    taxResidency?: boolean
    residentialStatus?: boolean
    occupationType?: boolean
    countryOfBirth?: boolean
    nationality?: boolean
    signatureUrl?: boolean
    nomineeName?: boolean
    nomineeRelation?: boolean
    nomineeAllocation?: boolean
    nomineeIdType?: boolean
    nomineeIdNumber?: boolean
    nomineeEmail?: boolean
    nomineeMobile?: boolean
    nomineeAddressLine1?: boolean
    nomineeAddressLine2?: boolean
    nomineeCity?: boolean
    nomineePincode?: boolean
    nomineeCountry?: boolean
    nomineeDob?: boolean
    languagePref?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kycStatus?: boolean
    digilockerKycId?: boolean
    digilockerid?: boolean
    aadhaarLinked?: boolean
    aadhaarLastFour?: boolean
    kycVerifiedAt?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    city?: boolean
    state?: boolean
    pincode?: boolean
    country?: boolean
    commAddressLine1?: boolean
    commAddressLine2?: boolean
    commCity?: boolean
    commState?: boolean
    commPincode?: boolean
    commCountry?: boolean
    useSameAddress?: boolean
    dlAccessToken?: boolean
    dlRefreshToken?: boolean
    dlTokenExpiresAt?: boolean
    ckycRefId?: boolean
    kycType?: boolean
    kraVerified?: boolean
    kraRefId?: boolean
    kraStatusCode?: boolean
    kraStatusDate?: boolean
    fatcaDeclaration?: boolean
    uccCode?: boolean
    fatcaSubmitted?: boolean
    elogAuthenticated?: boolean
    nseStatus?: boolean
    nseLastUpdated?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    currentStep?: boolean
    phone?: boolean
    encryptedPan?: boolean
    encryptedBankAcc?: boolean
    encryptedIfsc?: boolean
    bankAccountType?: boolean
    bankName?: boolean
    bankBranchName?: boolean
    bankAccountHolderName?: boolean
    bankVerified?: boolean
    bankVerifiedAt?: boolean
    bankBeneficiaryName?: boolean
    bankNameMatchScore?: boolean
    upiId?: boolean
    dob?: boolean
    maritalStatus?: boolean
    education?: boolean
    motherName?: boolean
    fatherName?: boolean
    gender?: boolean
    annualIncome?: boolean
    incomeSource?: boolean
    taxResidency?: boolean
    residentialStatus?: boolean
    occupationType?: boolean
    countryOfBirth?: boolean
    nationality?: boolean
    signatureUrl?: boolean
    nomineeName?: boolean
    nomineeRelation?: boolean
    nomineeAllocation?: boolean
    nomineeIdType?: boolean
    nomineeIdNumber?: boolean
    nomineeEmail?: boolean
    nomineeMobile?: boolean
    nomineeAddressLine1?: boolean
    nomineeAddressLine2?: boolean
    nomineeCity?: boolean
    nomineePincode?: boolean
    nomineeCountry?: boolean
    nomineeDob?: boolean
    languagePref?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kycStatus?: boolean
    digilockerKycId?: boolean
    digilockerid?: boolean
    aadhaarLinked?: boolean
    aadhaarLastFour?: boolean
    kycVerifiedAt?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    city?: boolean
    state?: boolean
    pincode?: boolean
    country?: boolean
    commAddressLine1?: boolean
    commAddressLine2?: boolean
    commCity?: boolean
    commState?: boolean
    commPincode?: boolean
    commCountry?: boolean
    useSameAddress?: boolean
    dlAccessToken?: boolean
    dlRefreshToken?: boolean
    dlTokenExpiresAt?: boolean
    ckycRefId?: boolean
    kycType?: boolean
    kraVerified?: boolean
    kraRefId?: boolean
    kraStatusCode?: boolean
    kraStatusDate?: boolean
    fatcaDeclaration?: boolean
    uccCode?: boolean
    fatcaSubmitted?: boolean
    elogAuthenticated?: boolean
    nseStatus?: boolean
    nseLastUpdated?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    currentStep?: boolean
    phone?: boolean
    encryptedPan?: boolean
    encryptedBankAcc?: boolean
    encryptedIfsc?: boolean
    bankAccountType?: boolean
    bankName?: boolean
    bankBranchName?: boolean
    bankAccountHolderName?: boolean
    bankVerified?: boolean
    bankVerifiedAt?: boolean
    bankBeneficiaryName?: boolean
    bankNameMatchScore?: boolean
    upiId?: boolean
    dob?: boolean
    maritalStatus?: boolean
    education?: boolean
    motherName?: boolean
    fatherName?: boolean
    gender?: boolean
    annualIncome?: boolean
    incomeSource?: boolean
    taxResidency?: boolean
    residentialStatus?: boolean
    occupationType?: boolean
    countryOfBirth?: boolean
    nationality?: boolean
    signatureUrl?: boolean
    nomineeName?: boolean
    nomineeRelation?: boolean
    nomineeAllocation?: boolean
    nomineeIdType?: boolean
    nomineeIdNumber?: boolean
    nomineeEmail?: boolean
    nomineeMobile?: boolean
    nomineeAddressLine1?: boolean
    nomineeAddressLine2?: boolean
    nomineeCity?: boolean
    nomineePincode?: boolean
    nomineeCountry?: boolean
    nomineeDob?: boolean
    languagePref?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kycStatus?: boolean
    digilockerKycId?: boolean
    digilockerid?: boolean
    aadhaarLinked?: boolean
    aadhaarLastFour?: boolean
    kycVerifiedAt?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    city?: boolean
    state?: boolean
    pincode?: boolean
    country?: boolean
    commAddressLine1?: boolean
    commAddressLine2?: boolean
    commCity?: boolean
    commState?: boolean
    commPincode?: boolean
    commCountry?: boolean
    useSameAddress?: boolean
    dlAccessToken?: boolean
    dlRefreshToken?: boolean
    dlTokenExpiresAt?: boolean
    ckycRefId?: boolean
    kycType?: boolean
    kraVerified?: boolean
    kraRefId?: boolean
    kraStatusCode?: boolean
    kraStatusDate?: boolean
    fatcaDeclaration?: boolean
    uccCode?: boolean
    fatcaSubmitted?: boolean
    elogAuthenticated?: boolean
    nseStatus?: boolean
    nseLastUpdated?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "currentStep" | "phone" | "encryptedPan" | "encryptedBankAcc" | "encryptedIfsc" | "bankAccountType" | "bankName" | "bankBranchName" | "bankAccountHolderName" | "bankVerified" | "bankVerifiedAt" | "bankBeneficiaryName" | "bankNameMatchScore" | "upiId" | "dob" | "maritalStatus" | "education" | "motherName" | "fatherName" | "gender" | "annualIncome" | "incomeSource" | "taxResidency" | "residentialStatus" | "occupationType" | "countryOfBirth" | "nationality" | "signatureUrl" | "nomineeName" | "nomineeRelation" | "nomineeAllocation" | "nomineeIdType" | "nomineeIdNumber" | "nomineeEmail" | "nomineeMobile" | "nomineeAddressLine1" | "nomineeAddressLine2" | "nomineeCity" | "nomineePincode" | "nomineeCountry" | "nomineeDob" | "languagePref" | "createdAt" | "updatedAt" | "kycStatus" | "digilockerKycId" | "digilockerid" | "aadhaarLinked" | "aadhaarLastFour" | "kycVerifiedAt" | "addressLine1" | "addressLine2" | "city" | "state" | "pincode" | "country" | "commAddressLine1" | "commAddressLine2" | "commCity" | "commState" | "commPincode" | "commCountry" | "useSameAddress" | "dlAccessToken" | "dlRefreshToken" | "dlTokenExpiresAt" | "ckycRefId" | "kycType" | "kraVerified" | "kraRefId" | "kraStatusCode" | "kraStatusDate" | "fatcaDeclaration" | "uccCode" | "fatcaSubmitted" | "elogAuthenticated" | "nseStatus" | "nseLastUpdated", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sips?: boolean | User$sipsArgs<ExtArgs>
    investments?: boolean | User$investmentsArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    kycSessions?: boolean | User$kycSessionsArgs<ExtArgs>
    watchlist?: boolean | User$watchlistArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sips: Prisma.$SIPPayload<ExtArgs>[]
      investments: Prisma.$InvestmentPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      kycSessions: Prisma.$KycSessionPayload<ExtArgs>[]
      watchlist: Prisma.$WatchlistPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      email: string
      currentStep: number
      phone: string | null
      encryptedPan: string | null
      encryptedBankAcc: string | null
      encryptedIfsc: string | null
      bankAccountType: string | null
      bankName: string | null
      bankBranchName: string | null
      bankAccountHolderName: string | null
      bankVerified: boolean
      bankVerifiedAt: Date | null
      bankBeneficiaryName: string | null
      bankNameMatchScore: number | null
      upiId: string | null
      dob: Date | null
      maritalStatus: $Enums.MaritalStatus | null
      education: $Enums.EducationLevel | null
      motherName: string | null
      fatherName: string | null
      gender: $Enums.Gender | null
      annualIncome: $Enums.AnnualIncome | null
      incomeSource: $Enums.IncomeSource | null
      taxResidency: $Enums.TaxResidency | null
      residentialStatus: $Enums.ResidentialStatus | null
      occupationType: $Enums.OccupationType | null
      countryOfBirth: string | null
      nationality: string | null
      signatureUrl: string | null
      nomineeName: string | null
      nomineeRelation: string | null
      nomineeAllocation: number | null
      nomineeIdType: string | null
      nomineeIdNumber: string | null
      nomineeEmail: string | null
      nomineeMobile: string | null
      nomineeAddressLine1: string | null
      nomineeAddressLine2: string | null
      nomineeCity: string | null
      nomineePincode: string | null
      nomineeCountry: string | null
      nomineeDob: Date | null
      languagePref: string | null
      createdAt: Date
      updatedAt: Date
      kycStatus: $Enums.KycStatus
      digilockerKycId: string | null
      digilockerid: string | null
      aadhaarLinked: boolean
      aadhaarLastFour: string | null
      kycVerifiedAt: Date | null
      addressLine1: string | null
      addressLine2: string | null
      city: string | null
      state: string | null
      pincode: string | null
      country: string | null
      commAddressLine1: string | null
      commAddressLine2: string | null
      commCity: string | null
      commState: string | null
      commPincode: string | null
      commCountry: string | null
      useSameAddress: boolean
      dlAccessToken: string | null
      dlRefreshToken: string | null
      dlTokenExpiresAt: Date | null
      ckycRefId: string | null
      kycType: $Enums.KycType | null
      kraVerified: boolean
      kraRefId: string | null
      kraStatusCode: string | null
      kraStatusDate: Date | null
      fatcaDeclaration: Prisma.JsonValue | null
      uccCode: string | null
      fatcaSubmitted: boolean
      elogAuthenticated: boolean
      nseStatus: string | null
      nseLastUpdated: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sips<T extends User$sipsArgs<ExtArgs> = {}>(args?: Subset<T, User$sipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SIPPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    investments<T extends User$investmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$investmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends User$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    kycSessions<T extends User$kycSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$kycSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KycSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    watchlist<T extends User$watchlistArgs<ExtArgs> = {}>(args?: Subset<T, User$watchlistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly currentStep: FieldRef<"User", 'Int'>
    readonly phone: FieldRef<"User", 'String'>
    readonly encryptedPan: FieldRef<"User", 'String'>
    readonly encryptedBankAcc: FieldRef<"User", 'String'>
    readonly encryptedIfsc: FieldRef<"User", 'String'>
    readonly bankAccountType: FieldRef<"User", 'String'>
    readonly bankName: FieldRef<"User", 'String'>
    readonly bankBranchName: FieldRef<"User", 'String'>
    readonly bankAccountHolderName: FieldRef<"User", 'String'>
    readonly bankVerified: FieldRef<"User", 'Boolean'>
    readonly bankVerifiedAt: FieldRef<"User", 'DateTime'>
    readonly bankBeneficiaryName: FieldRef<"User", 'String'>
    readonly bankNameMatchScore: FieldRef<"User", 'Int'>
    readonly upiId: FieldRef<"User", 'String'>
    readonly dob: FieldRef<"User", 'DateTime'>
    readonly maritalStatus: FieldRef<"User", 'MaritalStatus'>
    readonly education: FieldRef<"User", 'EducationLevel'>
    readonly motherName: FieldRef<"User", 'String'>
    readonly fatherName: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'Gender'>
    readonly annualIncome: FieldRef<"User", 'AnnualIncome'>
    readonly incomeSource: FieldRef<"User", 'IncomeSource'>
    readonly taxResidency: FieldRef<"User", 'TaxResidency'>
    readonly residentialStatus: FieldRef<"User", 'ResidentialStatus'>
    readonly occupationType: FieldRef<"User", 'OccupationType'>
    readonly countryOfBirth: FieldRef<"User", 'String'>
    readonly nationality: FieldRef<"User", 'String'>
    readonly signatureUrl: FieldRef<"User", 'String'>
    readonly nomineeName: FieldRef<"User", 'String'>
    readonly nomineeRelation: FieldRef<"User", 'String'>
    readonly nomineeAllocation: FieldRef<"User", 'Float'>
    readonly nomineeIdType: FieldRef<"User", 'String'>
    readonly nomineeIdNumber: FieldRef<"User", 'String'>
    readonly nomineeEmail: FieldRef<"User", 'String'>
    readonly nomineeMobile: FieldRef<"User", 'String'>
    readonly nomineeAddressLine1: FieldRef<"User", 'String'>
    readonly nomineeAddressLine2: FieldRef<"User", 'String'>
    readonly nomineeCity: FieldRef<"User", 'String'>
    readonly nomineePincode: FieldRef<"User", 'String'>
    readonly nomineeCountry: FieldRef<"User", 'String'>
    readonly nomineeDob: FieldRef<"User", 'DateTime'>
    readonly languagePref: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly kycStatus: FieldRef<"User", 'KycStatus'>
    readonly digilockerKycId: FieldRef<"User", 'String'>
    readonly digilockerid: FieldRef<"User", 'String'>
    readonly aadhaarLinked: FieldRef<"User", 'Boolean'>
    readonly aadhaarLastFour: FieldRef<"User", 'String'>
    readonly kycVerifiedAt: FieldRef<"User", 'DateTime'>
    readonly addressLine1: FieldRef<"User", 'String'>
    readonly addressLine2: FieldRef<"User", 'String'>
    readonly city: FieldRef<"User", 'String'>
    readonly state: FieldRef<"User", 'String'>
    readonly pincode: FieldRef<"User", 'String'>
    readonly country: FieldRef<"User", 'String'>
    readonly commAddressLine1: FieldRef<"User", 'String'>
    readonly commAddressLine2: FieldRef<"User", 'String'>
    readonly commCity: FieldRef<"User", 'String'>
    readonly commState: FieldRef<"User", 'String'>
    readonly commPincode: FieldRef<"User", 'String'>
    readonly commCountry: FieldRef<"User", 'String'>
    readonly useSameAddress: FieldRef<"User", 'Boolean'>
    readonly dlAccessToken: FieldRef<"User", 'String'>
    readonly dlRefreshToken: FieldRef<"User", 'String'>
    readonly dlTokenExpiresAt: FieldRef<"User", 'DateTime'>
    readonly ckycRefId: FieldRef<"User", 'String'>
    readonly kycType: FieldRef<"User", 'KycType'>
    readonly kraVerified: FieldRef<"User", 'Boolean'>
    readonly kraRefId: FieldRef<"User", 'String'>
    readonly kraStatusCode: FieldRef<"User", 'String'>
    readonly kraStatusDate: FieldRef<"User", 'DateTime'>
    readonly fatcaDeclaration: FieldRef<"User", 'Json'>
    readonly uccCode: FieldRef<"User", 'String'>
    readonly fatcaSubmitted: FieldRef<"User", 'Boolean'>
    readonly elogAuthenticated: FieldRef<"User", 'Boolean'>
    readonly nseStatus: FieldRef<"User", 'String'>
    readonly nseLastUpdated: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sips
   */
  export type User$sipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SIP
     */
    select?: SIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SIP
     */
    omit?: SIPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SIPInclude<ExtArgs> | null
    where?: SIPWhereInput
    orderBy?: SIPOrderByWithRelationInput | SIPOrderByWithRelationInput[]
    cursor?: SIPWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SIPScalarFieldEnum | SIPScalarFieldEnum[]
  }

  /**
   * User.investments
   */
  export type User$investmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    where?: InvestmentWhereInput
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    cursor?: InvestmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * User.payments
   */
  export type User$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * User.kycSessions
   */
  export type User$kycSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycSession
     */
    select?: KycSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycSession
     */
    omit?: KycSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycSessionInclude<ExtArgs> | null
    where?: KycSessionWhereInput
    orderBy?: KycSessionOrderByWithRelationInput | KycSessionOrderByWithRelationInput[]
    cursor?: KycSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KycSessionScalarFieldEnum | KycSessionScalarFieldEnum[]
  }

  /**
   * User.watchlist
   */
  export type User$watchlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    where?: WatchlistWhereInput
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    cursor?: WatchlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WatchlistScalarFieldEnum | WatchlistScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model KycSession
   */

  export type AggregateKycSession = {
    _count: KycSessionCountAggregateOutputType | null
    _min: KycSessionMinAggregateOutputType | null
    _max: KycSessionMaxAggregateOutputType | null
  }

  export type KycSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    state: string | null
    codeVerifier: string | null
    status: $Enums.KycSessionStatus | null
    errorCode: string | null
    errorMessage: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type KycSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    state: string | null
    codeVerifier: string | null
    status: $Enums.KycSessionStatus | null
    errorCode: string | null
    errorMessage: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type KycSessionCountAggregateOutputType = {
    id: number
    userId: number
    state: number
    codeVerifier: number
    status: number
    errorCode: number
    errorMessage: number
    createdAt: number
    expiresAt: number
    _all: number
  }


  export type KycSessionMinAggregateInputType = {
    id?: true
    userId?: true
    state?: true
    codeVerifier?: true
    status?: true
    errorCode?: true
    errorMessage?: true
    createdAt?: true
    expiresAt?: true
  }

  export type KycSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    state?: true
    codeVerifier?: true
    status?: true
    errorCode?: true
    errorMessage?: true
    createdAt?: true
    expiresAt?: true
  }

  export type KycSessionCountAggregateInputType = {
    id?: true
    userId?: true
    state?: true
    codeVerifier?: true
    status?: true
    errorCode?: true
    errorMessage?: true
    createdAt?: true
    expiresAt?: true
    _all?: true
  }

  export type KycSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KycSession to aggregate.
     */
    where?: KycSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KycSessions to fetch.
     */
    orderBy?: KycSessionOrderByWithRelationInput | KycSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KycSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KycSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KycSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KycSessions
    **/
    _count?: true | KycSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KycSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KycSessionMaxAggregateInputType
  }

  export type GetKycSessionAggregateType<T extends KycSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateKycSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKycSession[P]>
      : GetScalarType<T[P], AggregateKycSession[P]>
  }




  export type KycSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KycSessionWhereInput
    orderBy?: KycSessionOrderByWithAggregationInput | KycSessionOrderByWithAggregationInput[]
    by: KycSessionScalarFieldEnum[] | KycSessionScalarFieldEnum
    having?: KycSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KycSessionCountAggregateInputType | true
    _min?: KycSessionMinAggregateInputType
    _max?: KycSessionMaxAggregateInputType
  }

  export type KycSessionGroupByOutputType = {
    id: string
    userId: string
    state: string
    codeVerifier: string
    status: $Enums.KycSessionStatus
    errorCode: string | null
    errorMessage: string | null
    createdAt: Date
    expiresAt: Date
    _count: KycSessionCountAggregateOutputType | null
    _min: KycSessionMinAggregateOutputType | null
    _max: KycSessionMaxAggregateOutputType | null
  }

  type GetKycSessionGroupByPayload<T extends KycSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KycSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KycSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KycSessionGroupByOutputType[P]>
            : GetScalarType<T[P], KycSessionGroupByOutputType[P]>
        }
      >
    >


  export type KycSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    state?: boolean
    codeVerifier?: boolean
    status?: boolean
    errorCode?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kycSession"]>

  export type KycSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    state?: boolean
    codeVerifier?: boolean
    status?: boolean
    errorCode?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kycSession"]>

  export type KycSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    state?: boolean
    codeVerifier?: boolean
    status?: boolean
    errorCode?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kycSession"]>

  export type KycSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    state?: boolean
    codeVerifier?: boolean
    status?: boolean
    errorCode?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }

  export type KycSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "state" | "codeVerifier" | "status" | "errorCode" | "errorMessage" | "createdAt" | "expiresAt", ExtArgs["result"]["kycSession"]>
  export type KycSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type KycSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type KycSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $KycSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KycSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      state: string
      codeVerifier: string
      status: $Enums.KycSessionStatus
      errorCode: string | null
      errorMessage: string | null
      createdAt: Date
      expiresAt: Date
    }, ExtArgs["result"]["kycSession"]>
    composites: {}
  }

  type KycSessionGetPayload<S extends boolean | null | undefined | KycSessionDefaultArgs> = $Result.GetResult<Prisma.$KycSessionPayload, S>

  type KycSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KycSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KycSessionCountAggregateInputType | true
    }

  export interface KycSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KycSession'], meta: { name: 'KycSession' } }
    /**
     * Find zero or one KycSession that matches the filter.
     * @param {KycSessionFindUniqueArgs} args - Arguments to find a KycSession
     * @example
     * // Get one KycSession
     * const kycSession = await prisma.kycSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KycSessionFindUniqueArgs>(args: SelectSubset<T, KycSessionFindUniqueArgs<ExtArgs>>): Prisma__KycSessionClient<$Result.GetResult<Prisma.$KycSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one KycSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KycSessionFindUniqueOrThrowArgs} args - Arguments to find a KycSession
     * @example
     * // Get one KycSession
     * const kycSession = await prisma.kycSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KycSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, KycSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KycSessionClient<$Result.GetResult<Prisma.$KycSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KycSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycSessionFindFirstArgs} args - Arguments to find a KycSession
     * @example
     * // Get one KycSession
     * const kycSession = await prisma.kycSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KycSessionFindFirstArgs>(args?: SelectSubset<T, KycSessionFindFirstArgs<ExtArgs>>): Prisma__KycSessionClient<$Result.GetResult<Prisma.$KycSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KycSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycSessionFindFirstOrThrowArgs} args - Arguments to find a KycSession
     * @example
     * // Get one KycSession
     * const kycSession = await prisma.kycSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KycSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, KycSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__KycSessionClient<$Result.GetResult<Prisma.$KycSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more KycSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KycSessions
     * const kycSessions = await prisma.kycSession.findMany()
     * 
     * // Get first 10 KycSessions
     * const kycSessions = await prisma.kycSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kycSessionWithIdOnly = await prisma.kycSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KycSessionFindManyArgs>(args?: SelectSubset<T, KycSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KycSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a KycSession.
     * @param {KycSessionCreateArgs} args - Arguments to create a KycSession.
     * @example
     * // Create one KycSession
     * const KycSession = await prisma.kycSession.create({
     *   data: {
     *     // ... data to create a KycSession
     *   }
     * })
     * 
     */
    create<T extends KycSessionCreateArgs>(args: SelectSubset<T, KycSessionCreateArgs<ExtArgs>>): Prisma__KycSessionClient<$Result.GetResult<Prisma.$KycSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many KycSessions.
     * @param {KycSessionCreateManyArgs} args - Arguments to create many KycSessions.
     * @example
     * // Create many KycSessions
     * const kycSession = await prisma.kycSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KycSessionCreateManyArgs>(args?: SelectSubset<T, KycSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KycSessions and returns the data saved in the database.
     * @param {KycSessionCreateManyAndReturnArgs} args - Arguments to create many KycSessions.
     * @example
     * // Create many KycSessions
     * const kycSession = await prisma.kycSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KycSessions and only return the `id`
     * const kycSessionWithIdOnly = await prisma.kycSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KycSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, KycSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KycSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a KycSession.
     * @param {KycSessionDeleteArgs} args - Arguments to delete one KycSession.
     * @example
     * // Delete one KycSession
     * const KycSession = await prisma.kycSession.delete({
     *   where: {
     *     // ... filter to delete one KycSession
     *   }
     * })
     * 
     */
    delete<T extends KycSessionDeleteArgs>(args: SelectSubset<T, KycSessionDeleteArgs<ExtArgs>>): Prisma__KycSessionClient<$Result.GetResult<Prisma.$KycSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one KycSession.
     * @param {KycSessionUpdateArgs} args - Arguments to update one KycSession.
     * @example
     * // Update one KycSession
     * const kycSession = await prisma.kycSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KycSessionUpdateArgs>(args: SelectSubset<T, KycSessionUpdateArgs<ExtArgs>>): Prisma__KycSessionClient<$Result.GetResult<Prisma.$KycSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more KycSessions.
     * @param {KycSessionDeleteManyArgs} args - Arguments to filter KycSessions to delete.
     * @example
     * // Delete a few KycSessions
     * const { count } = await prisma.kycSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KycSessionDeleteManyArgs>(args?: SelectSubset<T, KycSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KycSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KycSessions
     * const kycSession = await prisma.kycSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KycSessionUpdateManyArgs>(args: SelectSubset<T, KycSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KycSessions and returns the data updated in the database.
     * @param {KycSessionUpdateManyAndReturnArgs} args - Arguments to update many KycSessions.
     * @example
     * // Update many KycSessions
     * const kycSession = await prisma.kycSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more KycSessions and only return the `id`
     * const kycSessionWithIdOnly = await prisma.kycSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KycSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, KycSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KycSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one KycSession.
     * @param {KycSessionUpsertArgs} args - Arguments to update or create a KycSession.
     * @example
     * // Update or create a KycSession
     * const kycSession = await prisma.kycSession.upsert({
     *   create: {
     *     // ... data to create a KycSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KycSession we want to update
     *   }
     * })
     */
    upsert<T extends KycSessionUpsertArgs>(args: SelectSubset<T, KycSessionUpsertArgs<ExtArgs>>): Prisma__KycSessionClient<$Result.GetResult<Prisma.$KycSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of KycSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycSessionCountArgs} args - Arguments to filter KycSessions to count.
     * @example
     * // Count the number of KycSessions
     * const count = await prisma.kycSession.count({
     *   where: {
     *     // ... the filter for the KycSessions we want to count
     *   }
     * })
    **/
    count<T extends KycSessionCountArgs>(
      args?: Subset<T, KycSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KycSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KycSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KycSessionAggregateArgs>(args: Subset<T, KycSessionAggregateArgs>): Prisma.PrismaPromise<GetKycSessionAggregateType<T>>

    /**
     * Group by KycSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycSessionGroupByArgs} args - Group by arguments.
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
      T extends KycSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KycSessionGroupByArgs['orderBy'] }
        : { orderBy?: KycSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KycSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKycSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KycSession model
   */
  readonly fields: KycSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KycSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KycSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the KycSession model
   */
  interface KycSessionFieldRefs {
    readonly id: FieldRef<"KycSession", 'String'>
    readonly userId: FieldRef<"KycSession", 'String'>
    readonly state: FieldRef<"KycSession", 'String'>
    readonly codeVerifier: FieldRef<"KycSession", 'String'>
    readonly status: FieldRef<"KycSession", 'KycSessionStatus'>
    readonly errorCode: FieldRef<"KycSession", 'String'>
    readonly errorMessage: FieldRef<"KycSession", 'String'>
    readonly createdAt: FieldRef<"KycSession", 'DateTime'>
    readonly expiresAt: FieldRef<"KycSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * KycSession findUnique
   */
  export type KycSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycSession
     */
    select?: KycSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycSession
     */
    omit?: KycSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycSessionInclude<ExtArgs> | null
    /**
     * Filter, which KycSession to fetch.
     */
    where: KycSessionWhereUniqueInput
  }

  /**
   * KycSession findUniqueOrThrow
   */
  export type KycSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycSession
     */
    select?: KycSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycSession
     */
    omit?: KycSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycSessionInclude<ExtArgs> | null
    /**
     * Filter, which KycSession to fetch.
     */
    where: KycSessionWhereUniqueInput
  }

  /**
   * KycSession findFirst
   */
  export type KycSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycSession
     */
    select?: KycSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycSession
     */
    omit?: KycSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycSessionInclude<ExtArgs> | null
    /**
     * Filter, which KycSession to fetch.
     */
    where?: KycSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KycSessions to fetch.
     */
    orderBy?: KycSessionOrderByWithRelationInput | KycSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KycSessions.
     */
    cursor?: KycSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KycSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KycSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KycSessions.
     */
    distinct?: KycSessionScalarFieldEnum | KycSessionScalarFieldEnum[]
  }

  /**
   * KycSession findFirstOrThrow
   */
  export type KycSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycSession
     */
    select?: KycSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycSession
     */
    omit?: KycSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycSessionInclude<ExtArgs> | null
    /**
     * Filter, which KycSession to fetch.
     */
    where?: KycSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KycSessions to fetch.
     */
    orderBy?: KycSessionOrderByWithRelationInput | KycSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KycSessions.
     */
    cursor?: KycSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KycSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KycSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KycSessions.
     */
    distinct?: KycSessionScalarFieldEnum | KycSessionScalarFieldEnum[]
  }

  /**
   * KycSession findMany
   */
  export type KycSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycSession
     */
    select?: KycSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycSession
     */
    omit?: KycSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycSessionInclude<ExtArgs> | null
    /**
     * Filter, which KycSessions to fetch.
     */
    where?: KycSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KycSessions to fetch.
     */
    orderBy?: KycSessionOrderByWithRelationInput | KycSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KycSessions.
     */
    cursor?: KycSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KycSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KycSessions.
     */
    skip?: number
    distinct?: KycSessionScalarFieldEnum | KycSessionScalarFieldEnum[]
  }

  /**
   * KycSession create
   */
  export type KycSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycSession
     */
    select?: KycSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycSession
     */
    omit?: KycSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a KycSession.
     */
    data: XOR<KycSessionCreateInput, KycSessionUncheckedCreateInput>
  }

  /**
   * KycSession createMany
   */
  export type KycSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KycSessions.
     */
    data: KycSessionCreateManyInput | KycSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KycSession createManyAndReturn
   */
  export type KycSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycSession
     */
    select?: KycSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KycSession
     */
    omit?: KycSessionOmit<ExtArgs> | null
    /**
     * The data used to create many KycSessions.
     */
    data: KycSessionCreateManyInput | KycSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * KycSession update
   */
  export type KycSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycSession
     */
    select?: KycSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycSession
     */
    omit?: KycSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a KycSession.
     */
    data: XOR<KycSessionUpdateInput, KycSessionUncheckedUpdateInput>
    /**
     * Choose, which KycSession to update.
     */
    where: KycSessionWhereUniqueInput
  }

  /**
   * KycSession updateMany
   */
  export type KycSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KycSessions.
     */
    data: XOR<KycSessionUpdateManyMutationInput, KycSessionUncheckedUpdateManyInput>
    /**
     * Filter which KycSessions to update
     */
    where?: KycSessionWhereInput
    /**
     * Limit how many KycSessions to update.
     */
    limit?: number
  }

  /**
   * KycSession updateManyAndReturn
   */
  export type KycSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycSession
     */
    select?: KycSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KycSession
     */
    omit?: KycSessionOmit<ExtArgs> | null
    /**
     * The data used to update KycSessions.
     */
    data: XOR<KycSessionUpdateManyMutationInput, KycSessionUncheckedUpdateManyInput>
    /**
     * Filter which KycSessions to update
     */
    where?: KycSessionWhereInput
    /**
     * Limit how many KycSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * KycSession upsert
   */
  export type KycSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycSession
     */
    select?: KycSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycSession
     */
    omit?: KycSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the KycSession to update in case it exists.
     */
    where: KycSessionWhereUniqueInput
    /**
     * In case the KycSession found by the `where` argument doesn't exist, create a new KycSession with this data.
     */
    create: XOR<KycSessionCreateInput, KycSessionUncheckedCreateInput>
    /**
     * In case the KycSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KycSessionUpdateInput, KycSessionUncheckedUpdateInput>
  }

  /**
   * KycSession delete
   */
  export type KycSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycSession
     */
    select?: KycSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycSession
     */
    omit?: KycSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycSessionInclude<ExtArgs> | null
    /**
     * Filter which KycSession to delete.
     */
    where: KycSessionWhereUniqueInput
  }

  /**
   * KycSession deleteMany
   */
  export type KycSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KycSessions to delete
     */
    where?: KycSessionWhereInput
    /**
     * Limit how many KycSessions to delete.
     */
    limit?: number
  }

  /**
   * KycSession without action
   */
  export type KycSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycSession
     */
    select?: KycSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycSession
     */
    omit?: KycSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycSessionInclude<ExtArgs> | null
  }


  /**
   * Model SIP
   */

  export type AggregateSIP = {
    _count: SIPCountAggregateOutputType | null
    _avg: SIPAvgAggregateOutputType | null
    _sum: SIPSumAggregateOutputType | null
    _min: SIPMinAggregateOutputType | null
    _max: SIPMaxAggregateOutputType | null
  }

  export type SIPAvgAggregateOutputType = {
    amountPerInstallment: number | null
    totalInstallments: number | null
  }

  export type SIPSumAggregateOutputType = {
    amountPerInstallment: number | null
    totalInstallments: number | null
  }

  export type SIPMinAggregateOutputType = {
    id: string | null
    userId: string | null
    fundName: string | null
    amcCode: string | null
    schemeCode: string | null
    amountPerInstallment: number | null
    totalInstallments: number | null
    frequency: $Enums.SIPFrequency | null
    startDate: Date | null
    nextInstallment: Date | null
    endDate: Date | null
    status: $Enums.SIPStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SIPMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    fundName: string | null
    amcCode: string | null
    schemeCode: string | null
    amountPerInstallment: number | null
    totalInstallments: number | null
    frequency: $Enums.SIPFrequency | null
    startDate: Date | null
    nextInstallment: Date | null
    endDate: Date | null
    status: $Enums.SIPStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SIPCountAggregateOutputType = {
    id: number
    userId: number
    fundName: number
    amcCode: number
    schemeCode: number
    amountPerInstallment: number
    totalInstallments: number
    frequency: number
    startDate: number
    nextInstallment: number
    endDate: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SIPAvgAggregateInputType = {
    amountPerInstallment?: true
    totalInstallments?: true
  }

  export type SIPSumAggregateInputType = {
    amountPerInstallment?: true
    totalInstallments?: true
  }

  export type SIPMinAggregateInputType = {
    id?: true
    userId?: true
    fundName?: true
    amcCode?: true
    schemeCode?: true
    amountPerInstallment?: true
    totalInstallments?: true
    frequency?: true
    startDate?: true
    nextInstallment?: true
    endDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SIPMaxAggregateInputType = {
    id?: true
    userId?: true
    fundName?: true
    amcCode?: true
    schemeCode?: true
    amountPerInstallment?: true
    totalInstallments?: true
    frequency?: true
    startDate?: true
    nextInstallment?: true
    endDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SIPCountAggregateInputType = {
    id?: true
    userId?: true
    fundName?: true
    amcCode?: true
    schemeCode?: true
    amountPerInstallment?: true
    totalInstallments?: true
    frequency?: true
    startDate?: true
    nextInstallment?: true
    endDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SIPAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SIP to aggregate.
     */
    where?: SIPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SIPS to fetch.
     */
    orderBy?: SIPOrderByWithRelationInput | SIPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SIPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SIPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SIPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SIPS
    **/
    _count?: true | SIPCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SIPAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SIPSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SIPMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SIPMaxAggregateInputType
  }

  export type GetSIPAggregateType<T extends SIPAggregateArgs> = {
        [P in keyof T & keyof AggregateSIP]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSIP[P]>
      : GetScalarType<T[P], AggregateSIP[P]>
  }




  export type SIPGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SIPWhereInput
    orderBy?: SIPOrderByWithAggregationInput | SIPOrderByWithAggregationInput[]
    by: SIPScalarFieldEnum[] | SIPScalarFieldEnum
    having?: SIPScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SIPCountAggregateInputType | true
    _avg?: SIPAvgAggregateInputType
    _sum?: SIPSumAggregateInputType
    _min?: SIPMinAggregateInputType
    _max?: SIPMaxAggregateInputType
  }

  export type SIPGroupByOutputType = {
    id: string
    userId: string
    fundName: string
    amcCode: string
    schemeCode: string
    amountPerInstallment: number
    totalInstallments: number
    frequency: $Enums.SIPFrequency
    startDate: Date
    nextInstallment: Date | null
    endDate: Date | null
    status: $Enums.SIPStatus
    createdAt: Date
    updatedAt: Date
    _count: SIPCountAggregateOutputType | null
    _avg: SIPAvgAggregateOutputType | null
    _sum: SIPSumAggregateOutputType | null
    _min: SIPMinAggregateOutputType | null
    _max: SIPMaxAggregateOutputType | null
  }

  type GetSIPGroupByPayload<T extends SIPGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SIPGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SIPGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SIPGroupByOutputType[P]>
            : GetScalarType<T[P], SIPGroupByOutputType[P]>
        }
      >
    >


  export type SIPSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fundName?: boolean
    amcCode?: boolean
    schemeCode?: boolean
    amountPerInstallment?: boolean
    totalInstallments?: boolean
    frequency?: boolean
    startDate?: boolean
    nextInstallment?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    investments?: boolean | SIP$investmentsArgs<ExtArgs>
    _count?: boolean | SIPCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sIP"]>

  export type SIPSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fundName?: boolean
    amcCode?: boolean
    schemeCode?: boolean
    amountPerInstallment?: boolean
    totalInstallments?: boolean
    frequency?: boolean
    startDate?: boolean
    nextInstallment?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sIP"]>

  export type SIPSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fundName?: boolean
    amcCode?: boolean
    schemeCode?: boolean
    amountPerInstallment?: boolean
    totalInstallments?: boolean
    frequency?: boolean
    startDate?: boolean
    nextInstallment?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sIP"]>

  export type SIPSelectScalar = {
    id?: boolean
    userId?: boolean
    fundName?: boolean
    amcCode?: boolean
    schemeCode?: boolean
    amountPerInstallment?: boolean
    totalInstallments?: boolean
    frequency?: boolean
    startDate?: boolean
    nextInstallment?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SIPOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "fundName" | "amcCode" | "schemeCode" | "amountPerInstallment" | "totalInstallments" | "frequency" | "startDate" | "nextInstallment" | "endDate" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["sIP"]>
  export type SIPInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    investments?: boolean | SIP$investmentsArgs<ExtArgs>
    _count?: boolean | SIPCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SIPIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SIPIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SIPPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SIP"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      investments: Prisma.$InvestmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      fundName: string
      amcCode: string
      schemeCode: string
      amountPerInstallment: number
      totalInstallments: number
      frequency: $Enums.SIPFrequency
      startDate: Date
      nextInstallment: Date | null
      endDate: Date | null
      status: $Enums.SIPStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sIP"]>
    composites: {}
  }

  type SIPGetPayload<S extends boolean | null | undefined | SIPDefaultArgs> = $Result.GetResult<Prisma.$SIPPayload, S>

  type SIPCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SIPFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SIPCountAggregateInputType | true
    }

  export interface SIPDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SIP'], meta: { name: 'SIP' } }
    /**
     * Find zero or one SIP that matches the filter.
     * @param {SIPFindUniqueArgs} args - Arguments to find a SIP
     * @example
     * // Get one SIP
     * const sIP = await prisma.sIP.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SIPFindUniqueArgs>(args: SelectSubset<T, SIPFindUniqueArgs<ExtArgs>>): Prisma__SIPClient<$Result.GetResult<Prisma.$SIPPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SIP that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SIPFindUniqueOrThrowArgs} args - Arguments to find a SIP
     * @example
     * // Get one SIP
     * const sIP = await prisma.sIP.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SIPFindUniqueOrThrowArgs>(args: SelectSubset<T, SIPFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SIPClient<$Result.GetResult<Prisma.$SIPPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SIP that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SIPFindFirstArgs} args - Arguments to find a SIP
     * @example
     * // Get one SIP
     * const sIP = await prisma.sIP.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SIPFindFirstArgs>(args?: SelectSubset<T, SIPFindFirstArgs<ExtArgs>>): Prisma__SIPClient<$Result.GetResult<Prisma.$SIPPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SIP that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SIPFindFirstOrThrowArgs} args - Arguments to find a SIP
     * @example
     * // Get one SIP
     * const sIP = await prisma.sIP.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SIPFindFirstOrThrowArgs>(args?: SelectSubset<T, SIPFindFirstOrThrowArgs<ExtArgs>>): Prisma__SIPClient<$Result.GetResult<Prisma.$SIPPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SIPS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SIPFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SIPS
     * const sIPS = await prisma.sIP.findMany()
     * 
     * // Get first 10 SIPS
     * const sIPS = await prisma.sIP.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sIPWithIdOnly = await prisma.sIP.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SIPFindManyArgs>(args?: SelectSubset<T, SIPFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SIPPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SIP.
     * @param {SIPCreateArgs} args - Arguments to create a SIP.
     * @example
     * // Create one SIP
     * const SIP = await prisma.sIP.create({
     *   data: {
     *     // ... data to create a SIP
     *   }
     * })
     * 
     */
    create<T extends SIPCreateArgs>(args: SelectSubset<T, SIPCreateArgs<ExtArgs>>): Prisma__SIPClient<$Result.GetResult<Prisma.$SIPPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SIPS.
     * @param {SIPCreateManyArgs} args - Arguments to create many SIPS.
     * @example
     * // Create many SIPS
     * const sIP = await prisma.sIP.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SIPCreateManyArgs>(args?: SelectSubset<T, SIPCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SIPS and returns the data saved in the database.
     * @param {SIPCreateManyAndReturnArgs} args - Arguments to create many SIPS.
     * @example
     * // Create many SIPS
     * const sIP = await prisma.sIP.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SIPS and only return the `id`
     * const sIPWithIdOnly = await prisma.sIP.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SIPCreateManyAndReturnArgs>(args?: SelectSubset<T, SIPCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SIPPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SIP.
     * @param {SIPDeleteArgs} args - Arguments to delete one SIP.
     * @example
     * // Delete one SIP
     * const SIP = await prisma.sIP.delete({
     *   where: {
     *     // ... filter to delete one SIP
     *   }
     * })
     * 
     */
    delete<T extends SIPDeleteArgs>(args: SelectSubset<T, SIPDeleteArgs<ExtArgs>>): Prisma__SIPClient<$Result.GetResult<Prisma.$SIPPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SIP.
     * @param {SIPUpdateArgs} args - Arguments to update one SIP.
     * @example
     * // Update one SIP
     * const sIP = await prisma.sIP.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SIPUpdateArgs>(args: SelectSubset<T, SIPUpdateArgs<ExtArgs>>): Prisma__SIPClient<$Result.GetResult<Prisma.$SIPPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SIPS.
     * @param {SIPDeleteManyArgs} args - Arguments to filter SIPS to delete.
     * @example
     * // Delete a few SIPS
     * const { count } = await prisma.sIP.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SIPDeleteManyArgs>(args?: SelectSubset<T, SIPDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SIPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SIPUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SIPS
     * const sIP = await prisma.sIP.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SIPUpdateManyArgs>(args: SelectSubset<T, SIPUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SIPS and returns the data updated in the database.
     * @param {SIPUpdateManyAndReturnArgs} args - Arguments to update many SIPS.
     * @example
     * // Update many SIPS
     * const sIP = await prisma.sIP.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SIPS and only return the `id`
     * const sIPWithIdOnly = await prisma.sIP.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SIPUpdateManyAndReturnArgs>(args: SelectSubset<T, SIPUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SIPPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SIP.
     * @param {SIPUpsertArgs} args - Arguments to update or create a SIP.
     * @example
     * // Update or create a SIP
     * const sIP = await prisma.sIP.upsert({
     *   create: {
     *     // ... data to create a SIP
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SIP we want to update
     *   }
     * })
     */
    upsert<T extends SIPUpsertArgs>(args: SelectSubset<T, SIPUpsertArgs<ExtArgs>>): Prisma__SIPClient<$Result.GetResult<Prisma.$SIPPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SIPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SIPCountArgs} args - Arguments to filter SIPS to count.
     * @example
     * // Count the number of SIPS
     * const count = await prisma.sIP.count({
     *   where: {
     *     // ... the filter for the SIPS we want to count
     *   }
     * })
    **/
    count<T extends SIPCountArgs>(
      args?: Subset<T, SIPCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SIPCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SIP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SIPAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SIPAggregateArgs>(args: Subset<T, SIPAggregateArgs>): Prisma.PrismaPromise<GetSIPAggregateType<T>>

    /**
     * Group by SIP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SIPGroupByArgs} args - Group by arguments.
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
      T extends SIPGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SIPGroupByArgs['orderBy'] }
        : { orderBy?: SIPGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SIPGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSIPGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SIP model
   */
  readonly fields: SIPFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SIP.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SIPClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    investments<T extends SIP$investmentsArgs<ExtArgs> = {}>(args?: Subset<T, SIP$investmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SIP model
   */
  interface SIPFieldRefs {
    readonly id: FieldRef<"SIP", 'String'>
    readonly userId: FieldRef<"SIP", 'String'>
    readonly fundName: FieldRef<"SIP", 'String'>
    readonly amcCode: FieldRef<"SIP", 'String'>
    readonly schemeCode: FieldRef<"SIP", 'String'>
    readonly amountPerInstallment: FieldRef<"SIP", 'Float'>
    readonly totalInstallments: FieldRef<"SIP", 'Int'>
    readonly frequency: FieldRef<"SIP", 'SIPFrequency'>
    readonly startDate: FieldRef<"SIP", 'DateTime'>
    readonly nextInstallment: FieldRef<"SIP", 'DateTime'>
    readonly endDate: FieldRef<"SIP", 'DateTime'>
    readonly status: FieldRef<"SIP", 'SIPStatus'>
    readonly createdAt: FieldRef<"SIP", 'DateTime'>
    readonly updatedAt: FieldRef<"SIP", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SIP findUnique
   */
  export type SIPFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SIP
     */
    select?: SIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SIP
     */
    omit?: SIPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SIPInclude<ExtArgs> | null
    /**
     * Filter, which SIP to fetch.
     */
    where: SIPWhereUniqueInput
  }

  /**
   * SIP findUniqueOrThrow
   */
  export type SIPFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SIP
     */
    select?: SIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SIP
     */
    omit?: SIPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SIPInclude<ExtArgs> | null
    /**
     * Filter, which SIP to fetch.
     */
    where: SIPWhereUniqueInput
  }

  /**
   * SIP findFirst
   */
  export type SIPFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SIP
     */
    select?: SIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SIP
     */
    omit?: SIPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SIPInclude<ExtArgs> | null
    /**
     * Filter, which SIP to fetch.
     */
    where?: SIPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SIPS to fetch.
     */
    orderBy?: SIPOrderByWithRelationInput | SIPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SIPS.
     */
    cursor?: SIPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SIPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SIPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SIPS.
     */
    distinct?: SIPScalarFieldEnum | SIPScalarFieldEnum[]
  }

  /**
   * SIP findFirstOrThrow
   */
  export type SIPFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SIP
     */
    select?: SIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SIP
     */
    omit?: SIPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SIPInclude<ExtArgs> | null
    /**
     * Filter, which SIP to fetch.
     */
    where?: SIPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SIPS to fetch.
     */
    orderBy?: SIPOrderByWithRelationInput | SIPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SIPS.
     */
    cursor?: SIPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SIPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SIPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SIPS.
     */
    distinct?: SIPScalarFieldEnum | SIPScalarFieldEnum[]
  }

  /**
   * SIP findMany
   */
  export type SIPFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SIP
     */
    select?: SIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SIP
     */
    omit?: SIPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SIPInclude<ExtArgs> | null
    /**
     * Filter, which SIPS to fetch.
     */
    where?: SIPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SIPS to fetch.
     */
    orderBy?: SIPOrderByWithRelationInput | SIPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SIPS.
     */
    cursor?: SIPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SIPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SIPS.
     */
    skip?: number
    distinct?: SIPScalarFieldEnum | SIPScalarFieldEnum[]
  }

  /**
   * SIP create
   */
  export type SIPCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SIP
     */
    select?: SIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SIP
     */
    omit?: SIPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SIPInclude<ExtArgs> | null
    /**
     * The data needed to create a SIP.
     */
    data: XOR<SIPCreateInput, SIPUncheckedCreateInput>
  }

  /**
   * SIP createMany
   */
  export type SIPCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SIPS.
     */
    data: SIPCreateManyInput | SIPCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SIP createManyAndReturn
   */
  export type SIPCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SIP
     */
    select?: SIPSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SIP
     */
    omit?: SIPOmit<ExtArgs> | null
    /**
     * The data used to create many SIPS.
     */
    data: SIPCreateManyInput | SIPCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SIPIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SIP update
   */
  export type SIPUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SIP
     */
    select?: SIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SIP
     */
    omit?: SIPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SIPInclude<ExtArgs> | null
    /**
     * The data needed to update a SIP.
     */
    data: XOR<SIPUpdateInput, SIPUncheckedUpdateInput>
    /**
     * Choose, which SIP to update.
     */
    where: SIPWhereUniqueInput
  }

  /**
   * SIP updateMany
   */
  export type SIPUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SIPS.
     */
    data: XOR<SIPUpdateManyMutationInput, SIPUncheckedUpdateManyInput>
    /**
     * Filter which SIPS to update
     */
    where?: SIPWhereInput
    /**
     * Limit how many SIPS to update.
     */
    limit?: number
  }

  /**
   * SIP updateManyAndReturn
   */
  export type SIPUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SIP
     */
    select?: SIPSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SIP
     */
    omit?: SIPOmit<ExtArgs> | null
    /**
     * The data used to update SIPS.
     */
    data: XOR<SIPUpdateManyMutationInput, SIPUncheckedUpdateManyInput>
    /**
     * Filter which SIPS to update
     */
    where?: SIPWhereInput
    /**
     * Limit how many SIPS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SIPIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SIP upsert
   */
  export type SIPUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SIP
     */
    select?: SIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SIP
     */
    omit?: SIPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SIPInclude<ExtArgs> | null
    /**
     * The filter to search for the SIP to update in case it exists.
     */
    where: SIPWhereUniqueInput
    /**
     * In case the SIP found by the `where` argument doesn't exist, create a new SIP with this data.
     */
    create: XOR<SIPCreateInput, SIPUncheckedCreateInput>
    /**
     * In case the SIP was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SIPUpdateInput, SIPUncheckedUpdateInput>
  }

  /**
   * SIP delete
   */
  export type SIPDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SIP
     */
    select?: SIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SIP
     */
    omit?: SIPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SIPInclude<ExtArgs> | null
    /**
     * Filter which SIP to delete.
     */
    where: SIPWhereUniqueInput
  }

  /**
   * SIP deleteMany
   */
  export type SIPDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SIPS to delete
     */
    where?: SIPWhereInput
    /**
     * Limit how many SIPS to delete.
     */
    limit?: number
  }

  /**
   * SIP.investments
   */
  export type SIP$investmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    where?: InvestmentWhereInput
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    cursor?: InvestmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * SIP without action
   */
  export type SIPDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SIP
     */
    select?: SIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SIP
     */
    omit?: SIPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SIPInclude<ExtArgs> | null
  }


  /**
   * Model Investment
   */

  export type AggregateInvestment = {
    _count: InvestmentCountAggregateOutputType | null
    _avg: InvestmentAvgAggregateOutputType | null
    _sum: InvestmentSumAggregateOutputType | null
    _min: InvestmentMinAggregateOutputType | null
    _max: InvestmentMaxAggregateOutputType | null
  }

  export type InvestmentAvgAggregateOutputType = {
    units: number | null
    navAtPurchase: number | null
    currentNav: number | null
  }

  export type InvestmentSumAggregateOutputType = {
    units: number | null
    navAtPurchase: number | null
    currentNav: number | null
  }

  export type InvestmentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    sipId: string | null
    fundName: string | null
    amcCode: string | null
    schemeCode: string | null
    units: number | null
    navAtPurchase: number | null
    currentNav: number | null
    type: $Enums.InvestmentType | null
    status: $Enums.InvestmentStatus | null
    purchaseDate: Date | null
    createdAt: Date | null
  }

  export type InvestmentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    sipId: string | null
    fundName: string | null
    amcCode: string | null
    schemeCode: string | null
    units: number | null
    navAtPurchase: number | null
    currentNav: number | null
    type: $Enums.InvestmentType | null
    status: $Enums.InvestmentStatus | null
    purchaseDate: Date | null
    createdAt: Date | null
  }

  export type InvestmentCountAggregateOutputType = {
    id: number
    userId: number
    sipId: number
    fundName: number
    amcCode: number
    schemeCode: number
    units: number
    navAtPurchase: number
    currentNav: number
    type: number
    status: number
    purchaseDate: number
    createdAt: number
    _all: number
  }


  export type InvestmentAvgAggregateInputType = {
    units?: true
    navAtPurchase?: true
    currentNav?: true
  }

  export type InvestmentSumAggregateInputType = {
    units?: true
    navAtPurchase?: true
    currentNav?: true
  }

  export type InvestmentMinAggregateInputType = {
    id?: true
    userId?: true
    sipId?: true
    fundName?: true
    amcCode?: true
    schemeCode?: true
    units?: true
    navAtPurchase?: true
    currentNav?: true
    type?: true
    status?: true
    purchaseDate?: true
    createdAt?: true
  }

  export type InvestmentMaxAggregateInputType = {
    id?: true
    userId?: true
    sipId?: true
    fundName?: true
    amcCode?: true
    schemeCode?: true
    units?: true
    navAtPurchase?: true
    currentNav?: true
    type?: true
    status?: true
    purchaseDate?: true
    createdAt?: true
  }

  export type InvestmentCountAggregateInputType = {
    id?: true
    userId?: true
    sipId?: true
    fundName?: true
    amcCode?: true
    schemeCode?: true
    units?: true
    navAtPurchase?: true
    currentNav?: true
    type?: true
    status?: true
    purchaseDate?: true
    createdAt?: true
    _all?: true
  }

  export type InvestmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Investment to aggregate.
     */
    where?: InvestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Investments
    **/
    _count?: true | InvestmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvestmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvestmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvestmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvestmentMaxAggregateInputType
  }

  export type GetInvestmentAggregateType<T extends InvestmentAggregateArgs> = {
        [P in keyof T & keyof AggregateInvestment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvestment[P]>
      : GetScalarType<T[P], AggregateInvestment[P]>
  }




  export type InvestmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestmentWhereInput
    orderBy?: InvestmentOrderByWithAggregationInput | InvestmentOrderByWithAggregationInput[]
    by: InvestmentScalarFieldEnum[] | InvestmentScalarFieldEnum
    having?: InvestmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvestmentCountAggregateInputType | true
    _avg?: InvestmentAvgAggregateInputType
    _sum?: InvestmentSumAggregateInputType
    _min?: InvestmentMinAggregateInputType
    _max?: InvestmentMaxAggregateInputType
  }

  export type InvestmentGroupByOutputType = {
    id: string
    userId: string
    sipId: string | null
    fundName: string
    amcCode: string
    schemeCode: string
    units: number
    navAtPurchase: number
    currentNav: number | null
    type: $Enums.InvestmentType
    status: $Enums.InvestmentStatus
    purchaseDate: Date
    createdAt: Date
    _count: InvestmentCountAggregateOutputType | null
    _avg: InvestmentAvgAggregateOutputType | null
    _sum: InvestmentSumAggregateOutputType | null
    _min: InvestmentMinAggregateOutputType | null
    _max: InvestmentMaxAggregateOutputType | null
  }

  type GetInvestmentGroupByPayload<T extends InvestmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvestmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvestmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvestmentGroupByOutputType[P]>
            : GetScalarType<T[P], InvestmentGroupByOutputType[P]>
        }
      >
    >


  export type InvestmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sipId?: boolean
    fundName?: boolean
    amcCode?: boolean
    schemeCode?: boolean
    units?: boolean
    navAtPurchase?: boolean
    currentNav?: boolean
    type?: boolean
    status?: boolean
    purchaseDate?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sip?: boolean | Investment$sipArgs<ExtArgs>
    Payment?: boolean | Investment$PaymentArgs<ExtArgs>
    _count?: boolean | InvestmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investment"]>

  export type InvestmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sipId?: boolean
    fundName?: boolean
    amcCode?: boolean
    schemeCode?: boolean
    units?: boolean
    navAtPurchase?: boolean
    currentNav?: boolean
    type?: boolean
    status?: boolean
    purchaseDate?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sip?: boolean | Investment$sipArgs<ExtArgs>
  }, ExtArgs["result"]["investment"]>

  export type InvestmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sipId?: boolean
    fundName?: boolean
    amcCode?: boolean
    schemeCode?: boolean
    units?: boolean
    navAtPurchase?: boolean
    currentNav?: boolean
    type?: boolean
    status?: boolean
    purchaseDate?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sip?: boolean | Investment$sipArgs<ExtArgs>
  }, ExtArgs["result"]["investment"]>

  export type InvestmentSelectScalar = {
    id?: boolean
    userId?: boolean
    sipId?: boolean
    fundName?: boolean
    amcCode?: boolean
    schemeCode?: boolean
    units?: boolean
    navAtPurchase?: boolean
    currentNav?: boolean
    type?: boolean
    status?: boolean
    purchaseDate?: boolean
    createdAt?: boolean
  }

  export type InvestmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "sipId" | "fundName" | "amcCode" | "schemeCode" | "units" | "navAtPurchase" | "currentNav" | "type" | "status" | "purchaseDate" | "createdAt", ExtArgs["result"]["investment"]>
  export type InvestmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sip?: boolean | Investment$sipArgs<ExtArgs>
    Payment?: boolean | Investment$PaymentArgs<ExtArgs>
    _count?: boolean | InvestmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InvestmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sip?: boolean | Investment$sipArgs<ExtArgs>
  }
  export type InvestmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sip?: boolean | Investment$sipArgs<ExtArgs>
  }

  export type $InvestmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Investment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      sip: Prisma.$SIPPayload<ExtArgs> | null
      Payment: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      sipId: string | null
      fundName: string
      amcCode: string
      schemeCode: string
      units: number
      navAtPurchase: number
      currentNav: number | null
      type: $Enums.InvestmentType
      status: $Enums.InvestmentStatus
      purchaseDate: Date
      createdAt: Date
    }, ExtArgs["result"]["investment"]>
    composites: {}
  }

  type InvestmentGetPayload<S extends boolean | null | undefined | InvestmentDefaultArgs> = $Result.GetResult<Prisma.$InvestmentPayload, S>

  type InvestmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvestmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvestmentCountAggregateInputType | true
    }

  export interface InvestmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Investment'], meta: { name: 'Investment' } }
    /**
     * Find zero or one Investment that matches the filter.
     * @param {InvestmentFindUniqueArgs} args - Arguments to find a Investment
     * @example
     * // Get one Investment
     * const investment = await prisma.investment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvestmentFindUniqueArgs>(args: SelectSubset<T, InvestmentFindUniqueArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Investment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvestmentFindUniqueOrThrowArgs} args - Arguments to find a Investment
     * @example
     * // Get one Investment
     * const investment = await prisma.investment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvestmentFindUniqueOrThrowArgs>(args: SelectSubset<T, InvestmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Investment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentFindFirstArgs} args - Arguments to find a Investment
     * @example
     * // Get one Investment
     * const investment = await prisma.investment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvestmentFindFirstArgs>(args?: SelectSubset<T, InvestmentFindFirstArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Investment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentFindFirstOrThrowArgs} args - Arguments to find a Investment
     * @example
     * // Get one Investment
     * const investment = await prisma.investment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvestmentFindFirstOrThrowArgs>(args?: SelectSubset<T, InvestmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Investments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Investments
     * const investments = await prisma.investment.findMany()
     * 
     * // Get first 10 Investments
     * const investments = await prisma.investment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const investmentWithIdOnly = await prisma.investment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvestmentFindManyArgs>(args?: SelectSubset<T, InvestmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Investment.
     * @param {InvestmentCreateArgs} args - Arguments to create a Investment.
     * @example
     * // Create one Investment
     * const Investment = await prisma.investment.create({
     *   data: {
     *     // ... data to create a Investment
     *   }
     * })
     * 
     */
    create<T extends InvestmentCreateArgs>(args: SelectSubset<T, InvestmentCreateArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Investments.
     * @param {InvestmentCreateManyArgs} args - Arguments to create many Investments.
     * @example
     * // Create many Investments
     * const investment = await prisma.investment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvestmentCreateManyArgs>(args?: SelectSubset<T, InvestmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Investments and returns the data saved in the database.
     * @param {InvestmentCreateManyAndReturnArgs} args - Arguments to create many Investments.
     * @example
     * // Create many Investments
     * const investment = await prisma.investment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Investments and only return the `id`
     * const investmentWithIdOnly = await prisma.investment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvestmentCreateManyAndReturnArgs>(args?: SelectSubset<T, InvestmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Investment.
     * @param {InvestmentDeleteArgs} args - Arguments to delete one Investment.
     * @example
     * // Delete one Investment
     * const Investment = await prisma.investment.delete({
     *   where: {
     *     // ... filter to delete one Investment
     *   }
     * })
     * 
     */
    delete<T extends InvestmentDeleteArgs>(args: SelectSubset<T, InvestmentDeleteArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Investment.
     * @param {InvestmentUpdateArgs} args - Arguments to update one Investment.
     * @example
     * // Update one Investment
     * const investment = await prisma.investment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvestmentUpdateArgs>(args: SelectSubset<T, InvestmentUpdateArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Investments.
     * @param {InvestmentDeleteManyArgs} args - Arguments to filter Investments to delete.
     * @example
     * // Delete a few Investments
     * const { count } = await prisma.investment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvestmentDeleteManyArgs>(args?: SelectSubset<T, InvestmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Investments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Investments
     * const investment = await prisma.investment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvestmentUpdateManyArgs>(args: SelectSubset<T, InvestmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Investments and returns the data updated in the database.
     * @param {InvestmentUpdateManyAndReturnArgs} args - Arguments to update many Investments.
     * @example
     * // Update many Investments
     * const investment = await prisma.investment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Investments and only return the `id`
     * const investmentWithIdOnly = await prisma.investment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvestmentUpdateManyAndReturnArgs>(args: SelectSubset<T, InvestmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Investment.
     * @param {InvestmentUpsertArgs} args - Arguments to update or create a Investment.
     * @example
     * // Update or create a Investment
     * const investment = await prisma.investment.upsert({
     *   create: {
     *     // ... data to create a Investment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Investment we want to update
     *   }
     * })
     */
    upsert<T extends InvestmentUpsertArgs>(args: SelectSubset<T, InvestmentUpsertArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Investments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentCountArgs} args - Arguments to filter Investments to count.
     * @example
     * // Count the number of Investments
     * const count = await prisma.investment.count({
     *   where: {
     *     // ... the filter for the Investments we want to count
     *   }
     * })
    **/
    count<T extends InvestmentCountArgs>(
      args?: Subset<T, InvestmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvestmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Investment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvestmentAggregateArgs>(args: Subset<T, InvestmentAggregateArgs>): Prisma.PrismaPromise<GetInvestmentAggregateType<T>>

    /**
     * Group by Investment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentGroupByArgs} args - Group by arguments.
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
      T extends InvestmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvestmentGroupByArgs['orderBy'] }
        : { orderBy?: InvestmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvestmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Investment model
   */
  readonly fields: InvestmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Investment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvestmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sip<T extends Investment$sipArgs<ExtArgs> = {}>(args?: Subset<T, Investment$sipArgs<ExtArgs>>): Prisma__SIPClient<$Result.GetResult<Prisma.$SIPPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Payment<T extends Investment$PaymentArgs<ExtArgs> = {}>(args?: Subset<T, Investment$PaymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Investment model
   */
  interface InvestmentFieldRefs {
    readonly id: FieldRef<"Investment", 'String'>
    readonly userId: FieldRef<"Investment", 'String'>
    readonly sipId: FieldRef<"Investment", 'String'>
    readonly fundName: FieldRef<"Investment", 'String'>
    readonly amcCode: FieldRef<"Investment", 'String'>
    readonly schemeCode: FieldRef<"Investment", 'String'>
    readonly units: FieldRef<"Investment", 'Float'>
    readonly navAtPurchase: FieldRef<"Investment", 'Float'>
    readonly currentNav: FieldRef<"Investment", 'Float'>
    readonly type: FieldRef<"Investment", 'InvestmentType'>
    readonly status: FieldRef<"Investment", 'InvestmentStatus'>
    readonly purchaseDate: FieldRef<"Investment", 'DateTime'>
    readonly createdAt: FieldRef<"Investment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Investment findUnique
   */
  export type InvestmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investment to fetch.
     */
    where: InvestmentWhereUniqueInput
  }

  /**
   * Investment findUniqueOrThrow
   */
  export type InvestmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investment to fetch.
     */
    where: InvestmentWhereUniqueInput
  }

  /**
   * Investment findFirst
   */
  export type InvestmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investment to fetch.
     */
    where?: InvestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Investments.
     */
    cursor?: InvestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Investments.
     */
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * Investment findFirstOrThrow
   */
  export type InvestmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investment to fetch.
     */
    where?: InvestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Investments.
     */
    cursor?: InvestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Investments.
     */
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * Investment findMany
   */
  export type InvestmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investments to fetch.
     */
    where?: InvestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Investments.
     */
    cursor?: InvestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * Investment create
   */
  export type InvestmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Investment.
     */
    data: XOR<InvestmentCreateInput, InvestmentUncheckedCreateInput>
  }

  /**
   * Investment createMany
   */
  export type InvestmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Investments.
     */
    data: InvestmentCreateManyInput | InvestmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Investment createManyAndReturn
   */
  export type InvestmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * The data used to create many Investments.
     */
    data: InvestmentCreateManyInput | InvestmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Investment update
   */
  export type InvestmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Investment.
     */
    data: XOR<InvestmentUpdateInput, InvestmentUncheckedUpdateInput>
    /**
     * Choose, which Investment to update.
     */
    where: InvestmentWhereUniqueInput
  }

  /**
   * Investment updateMany
   */
  export type InvestmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Investments.
     */
    data: XOR<InvestmentUpdateManyMutationInput, InvestmentUncheckedUpdateManyInput>
    /**
     * Filter which Investments to update
     */
    where?: InvestmentWhereInput
    /**
     * Limit how many Investments to update.
     */
    limit?: number
  }

  /**
   * Investment updateManyAndReturn
   */
  export type InvestmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * The data used to update Investments.
     */
    data: XOR<InvestmentUpdateManyMutationInput, InvestmentUncheckedUpdateManyInput>
    /**
     * Filter which Investments to update
     */
    where?: InvestmentWhereInput
    /**
     * Limit how many Investments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Investment upsert
   */
  export type InvestmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Investment to update in case it exists.
     */
    where: InvestmentWhereUniqueInput
    /**
     * In case the Investment found by the `where` argument doesn't exist, create a new Investment with this data.
     */
    create: XOR<InvestmentCreateInput, InvestmentUncheckedCreateInput>
    /**
     * In case the Investment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvestmentUpdateInput, InvestmentUncheckedUpdateInput>
  }

  /**
   * Investment delete
   */
  export type InvestmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter which Investment to delete.
     */
    where: InvestmentWhereUniqueInput
  }

  /**
   * Investment deleteMany
   */
  export type InvestmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Investments to delete
     */
    where?: InvestmentWhereInput
    /**
     * Limit how many Investments to delete.
     */
    limit?: number
  }

  /**
   * Investment.sip
   */
  export type Investment$sipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SIP
     */
    select?: SIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SIP
     */
    omit?: SIPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SIPInclude<ExtArgs> | null
    where?: SIPWhereInput
  }

  /**
   * Investment.Payment
   */
  export type Investment$PaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Investment without action
   */
  export type InvestmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
  }


  /**
   * Model Watchlist
   */

  export type AggregateWatchlist = {
    _count: WatchlistCountAggregateOutputType | null
    _avg: WatchlistAvgAggregateOutputType | null
    _sum: WatchlistSumAggregateOutputType | null
    _min: WatchlistMinAggregateOutputType | null
    _max: WatchlistMaxAggregateOutputType | null
  }

  export type WatchlistAvgAggregateOutputType = {
    currentNav: number | null
  }

  export type WatchlistSumAggregateOutputType = {
    currentNav: number | null
  }

  export type WatchlistMinAggregateOutputType = {
    id: string | null
    userId: string | null
    schemeCode: string | null
    amcCode: string | null
    fundName: string | null
    category: string | null
    currentNav: number | null
    addedAt: Date | null
  }

  export type WatchlistMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    schemeCode: string | null
    amcCode: string | null
    fundName: string | null
    category: string | null
    currentNav: number | null
    addedAt: Date | null
  }

  export type WatchlistCountAggregateOutputType = {
    id: number
    userId: number
    schemeCode: number
    amcCode: number
    fundName: number
    category: number
    currentNav: number
    addedAt: number
    _all: number
  }


  export type WatchlistAvgAggregateInputType = {
    currentNav?: true
  }

  export type WatchlistSumAggregateInputType = {
    currentNav?: true
  }

  export type WatchlistMinAggregateInputType = {
    id?: true
    userId?: true
    schemeCode?: true
    amcCode?: true
    fundName?: true
    category?: true
    currentNav?: true
    addedAt?: true
  }

  export type WatchlistMaxAggregateInputType = {
    id?: true
    userId?: true
    schemeCode?: true
    amcCode?: true
    fundName?: true
    category?: true
    currentNav?: true
    addedAt?: true
  }

  export type WatchlistCountAggregateInputType = {
    id?: true
    userId?: true
    schemeCode?: true
    amcCode?: true
    fundName?: true
    category?: true
    currentNav?: true
    addedAt?: true
    _all?: true
  }

  export type WatchlistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Watchlist to aggregate.
     */
    where?: WatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watchlists to fetch.
     */
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watchlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Watchlists
    **/
    _count?: true | WatchlistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WatchlistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WatchlistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WatchlistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WatchlistMaxAggregateInputType
  }

  export type GetWatchlistAggregateType<T extends WatchlistAggregateArgs> = {
        [P in keyof T & keyof AggregateWatchlist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWatchlist[P]>
      : GetScalarType<T[P], AggregateWatchlist[P]>
  }




  export type WatchlistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchlistWhereInput
    orderBy?: WatchlistOrderByWithAggregationInput | WatchlistOrderByWithAggregationInput[]
    by: WatchlistScalarFieldEnum[] | WatchlistScalarFieldEnum
    having?: WatchlistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WatchlistCountAggregateInputType | true
    _avg?: WatchlistAvgAggregateInputType
    _sum?: WatchlistSumAggregateInputType
    _min?: WatchlistMinAggregateInputType
    _max?: WatchlistMaxAggregateInputType
  }

  export type WatchlistGroupByOutputType = {
    id: string
    userId: string
    schemeCode: string
    amcCode: string
    fundName: string
    category: string | null
    currentNav: number | null
    addedAt: Date
    _count: WatchlistCountAggregateOutputType | null
    _avg: WatchlistAvgAggregateOutputType | null
    _sum: WatchlistSumAggregateOutputType | null
    _min: WatchlistMinAggregateOutputType | null
    _max: WatchlistMaxAggregateOutputType | null
  }

  type GetWatchlistGroupByPayload<T extends WatchlistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WatchlistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WatchlistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WatchlistGroupByOutputType[P]>
            : GetScalarType<T[P], WatchlistGroupByOutputType[P]>
        }
      >
    >


  export type WatchlistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    schemeCode?: boolean
    amcCode?: boolean
    fundName?: boolean
    category?: boolean
    currentNav?: boolean
    addedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchlist"]>

  export type WatchlistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    schemeCode?: boolean
    amcCode?: boolean
    fundName?: boolean
    category?: boolean
    currentNav?: boolean
    addedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchlist"]>

  export type WatchlistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    schemeCode?: boolean
    amcCode?: boolean
    fundName?: boolean
    category?: boolean
    currentNav?: boolean
    addedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchlist"]>

  export type WatchlistSelectScalar = {
    id?: boolean
    userId?: boolean
    schemeCode?: boolean
    amcCode?: boolean
    fundName?: boolean
    category?: boolean
    currentNav?: boolean
    addedAt?: boolean
  }

  export type WatchlistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "schemeCode" | "amcCode" | "fundName" | "category" | "currentNav" | "addedAt", ExtArgs["result"]["watchlist"]>
  export type WatchlistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WatchlistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WatchlistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WatchlistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Watchlist"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      schemeCode: string
      amcCode: string
      fundName: string
      category: string | null
      currentNav: number | null
      addedAt: Date
    }, ExtArgs["result"]["watchlist"]>
    composites: {}
  }

  type WatchlistGetPayload<S extends boolean | null | undefined | WatchlistDefaultArgs> = $Result.GetResult<Prisma.$WatchlistPayload, S>

  type WatchlistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WatchlistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WatchlistCountAggregateInputType | true
    }

  export interface WatchlistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Watchlist'], meta: { name: 'Watchlist' } }
    /**
     * Find zero or one Watchlist that matches the filter.
     * @param {WatchlistFindUniqueArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WatchlistFindUniqueArgs>(args: SelectSubset<T, WatchlistFindUniqueArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Watchlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WatchlistFindUniqueOrThrowArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WatchlistFindUniqueOrThrowArgs>(args: SelectSubset<T, WatchlistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Watchlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistFindFirstArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WatchlistFindFirstArgs>(args?: SelectSubset<T, WatchlistFindFirstArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Watchlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistFindFirstOrThrowArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WatchlistFindFirstOrThrowArgs>(args?: SelectSubset<T, WatchlistFindFirstOrThrowArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Watchlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Watchlists
     * const watchlists = await prisma.watchlist.findMany()
     * 
     * // Get first 10 Watchlists
     * const watchlists = await prisma.watchlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const watchlistWithIdOnly = await prisma.watchlist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WatchlistFindManyArgs>(args?: SelectSubset<T, WatchlistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Watchlist.
     * @param {WatchlistCreateArgs} args - Arguments to create a Watchlist.
     * @example
     * // Create one Watchlist
     * const Watchlist = await prisma.watchlist.create({
     *   data: {
     *     // ... data to create a Watchlist
     *   }
     * })
     * 
     */
    create<T extends WatchlistCreateArgs>(args: SelectSubset<T, WatchlistCreateArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Watchlists.
     * @param {WatchlistCreateManyArgs} args - Arguments to create many Watchlists.
     * @example
     * // Create many Watchlists
     * const watchlist = await prisma.watchlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WatchlistCreateManyArgs>(args?: SelectSubset<T, WatchlistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Watchlists and returns the data saved in the database.
     * @param {WatchlistCreateManyAndReturnArgs} args - Arguments to create many Watchlists.
     * @example
     * // Create many Watchlists
     * const watchlist = await prisma.watchlist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Watchlists and only return the `id`
     * const watchlistWithIdOnly = await prisma.watchlist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WatchlistCreateManyAndReturnArgs>(args?: SelectSubset<T, WatchlistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Watchlist.
     * @param {WatchlistDeleteArgs} args - Arguments to delete one Watchlist.
     * @example
     * // Delete one Watchlist
     * const Watchlist = await prisma.watchlist.delete({
     *   where: {
     *     // ... filter to delete one Watchlist
     *   }
     * })
     * 
     */
    delete<T extends WatchlistDeleteArgs>(args: SelectSubset<T, WatchlistDeleteArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Watchlist.
     * @param {WatchlistUpdateArgs} args - Arguments to update one Watchlist.
     * @example
     * // Update one Watchlist
     * const watchlist = await prisma.watchlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WatchlistUpdateArgs>(args: SelectSubset<T, WatchlistUpdateArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Watchlists.
     * @param {WatchlistDeleteManyArgs} args - Arguments to filter Watchlists to delete.
     * @example
     * // Delete a few Watchlists
     * const { count } = await prisma.watchlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WatchlistDeleteManyArgs>(args?: SelectSubset<T, WatchlistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Watchlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Watchlists
     * const watchlist = await prisma.watchlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WatchlistUpdateManyArgs>(args: SelectSubset<T, WatchlistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Watchlists and returns the data updated in the database.
     * @param {WatchlistUpdateManyAndReturnArgs} args - Arguments to update many Watchlists.
     * @example
     * // Update many Watchlists
     * const watchlist = await prisma.watchlist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Watchlists and only return the `id`
     * const watchlistWithIdOnly = await prisma.watchlist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WatchlistUpdateManyAndReturnArgs>(args: SelectSubset<T, WatchlistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Watchlist.
     * @param {WatchlistUpsertArgs} args - Arguments to update or create a Watchlist.
     * @example
     * // Update or create a Watchlist
     * const watchlist = await prisma.watchlist.upsert({
     *   create: {
     *     // ... data to create a Watchlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Watchlist we want to update
     *   }
     * })
     */
    upsert<T extends WatchlistUpsertArgs>(args: SelectSubset<T, WatchlistUpsertArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Watchlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistCountArgs} args - Arguments to filter Watchlists to count.
     * @example
     * // Count the number of Watchlists
     * const count = await prisma.watchlist.count({
     *   where: {
     *     // ... the filter for the Watchlists we want to count
     *   }
     * })
    **/
    count<T extends WatchlistCountArgs>(
      args?: Subset<T, WatchlistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WatchlistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Watchlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WatchlistAggregateArgs>(args: Subset<T, WatchlistAggregateArgs>): Prisma.PrismaPromise<GetWatchlistAggregateType<T>>

    /**
     * Group by Watchlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistGroupByArgs} args - Group by arguments.
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
      T extends WatchlistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WatchlistGroupByArgs['orderBy'] }
        : { orderBy?: WatchlistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WatchlistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWatchlistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Watchlist model
   */
  readonly fields: WatchlistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Watchlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WatchlistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Watchlist model
   */
  interface WatchlistFieldRefs {
    readonly id: FieldRef<"Watchlist", 'String'>
    readonly userId: FieldRef<"Watchlist", 'String'>
    readonly schemeCode: FieldRef<"Watchlist", 'String'>
    readonly amcCode: FieldRef<"Watchlist", 'String'>
    readonly fundName: FieldRef<"Watchlist", 'String'>
    readonly category: FieldRef<"Watchlist", 'String'>
    readonly currentNav: FieldRef<"Watchlist", 'Float'>
    readonly addedAt: FieldRef<"Watchlist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Watchlist findUnique
   */
  export type WatchlistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlist to fetch.
     */
    where: WatchlistWhereUniqueInput
  }

  /**
   * Watchlist findUniqueOrThrow
   */
  export type WatchlistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlist to fetch.
     */
    where: WatchlistWhereUniqueInput
  }

  /**
   * Watchlist findFirst
   */
  export type WatchlistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlist to fetch.
     */
    where?: WatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watchlists to fetch.
     */
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Watchlists.
     */
    cursor?: WatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watchlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Watchlists.
     */
    distinct?: WatchlistScalarFieldEnum | WatchlistScalarFieldEnum[]
  }

  /**
   * Watchlist findFirstOrThrow
   */
  export type WatchlistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlist to fetch.
     */
    where?: WatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watchlists to fetch.
     */
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Watchlists.
     */
    cursor?: WatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watchlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Watchlists.
     */
    distinct?: WatchlistScalarFieldEnum | WatchlistScalarFieldEnum[]
  }

  /**
   * Watchlist findMany
   */
  export type WatchlistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlists to fetch.
     */
    where?: WatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watchlists to fetch.
     */
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Watchlists.
     */
    cursor?: WatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watchlists.
     */
    skip?: number
    distinct?: WatchlistScalarFieldEnum | WatchlistScalarFieldEnum[]
  }

  /**
   * Watchlist create
   */
  export type WatchlistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * The data needed to create a Watchlist.
     */
    data: XOR<WatchlistCreateInput, WatchlistUncheckedCreateInput>
  }

  /**
   * Watchlist createMany
   */
  export type WatchlistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Watchlists.
     */
    data: WatchlistCreateManyInput | WatchlistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Watchlist createManyAndReturn
   */
  export type WatchlistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * The data used to create many Watchlists.
     */
    data: WatchlistCreateManyInput | WatchlistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Watchlist update
   */
  export type WatchlistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * The data needed to update a Watchlist.
     */
    data: XOR<WatchlistUpdateInput, WatchlistUncheckedUpdateInput>
    /**
     * Choose, which Watchlist to update.
     */
    where: WatchlistWhereUniqueInput
  }

  /**
   * Watchlist updateMany
   */
  export type WatchlistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Watchlists.
     */
    data: XOR<WatchlistUpdateManyMutationInput, WatchlistUncheckedUpdateManyInput>
    /**
     * Filter which Watchlists to update
     */
    where?: WatchlistWhereInput
    /**
     * Limit how many Watchlists to update.
     */
    limit?: number
  }

  /**
   * Watchlist updateManyAndReturn
   */
  export type WatchlistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * The data used to update Watchlists.
     */
    data: XOR<WatchlistUpdateManyMutationInput, WatchlistUncheckedUpdateManyInput>
    /**
     * Filter which Watchlists to update
     */
    where?: WatchlistWhereInput
    /**
     * Limit how many Watchlists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Watchlist upsert
   */
  export type WatchlistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * The filter to search for the Watchlist to update in case it exists.
     */
    where: WatchlistWhereUniqueInput
    /**
     * In case the Watchlist found by the `where` argument doesn't exist, create a new Watchlist with this data.
     */
    create: XOR<WatchlistCreateInput, WatchlistUncheckedCreateInput>
    /**
     * In case the Watchlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WatchlistUpdateInput, WatchlistUncheckedUpdateInput>
  }

  /**
   * Watchlist delete
   */
  export type WatchlistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter which Watchlist to delete.
     */
    where: WatchlistWhereUniqueInput
  }

  /**
   * Watchlist deleteMany
   */
  export type WatchlistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Watchlists to delete
     */
    where?: WatchlistWhereInput
    /**
     * Limit how many Watchlists to delete.
     */
    limit?: number
  }

  /**
   * Watchlist without action
   */
  export type WatchlistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    investmentId: string | null
    txnRef: string | null
    amount: number | null
    mode: $Enums.PaymentMode | null
    razorpayOrderId: string | null
    upiRefId: string | null
    status: $Enums.PaymentStatus | null
    createdAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    investmentId: string | null
    txnRef: string | null
    amount: number | null
    mode: $Enums.PaymentMode | null
    razorpayOrderId: string | null
    upiRefId: string | null
    status: $Enums.PaymentStatus | null
    createdAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    userId: number
    investmentId: number
    txnRef: number
    amount: number
    mode: number
    razorpayOrderId: number
    upiRefId: number
    status: number
    createdAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    userId?: true
    investmentId?: true
    txnRef?: true
    amount?: true
    mode?: true
    razorpayOrderId?: true
    upiRefId?: true
    status?: true
    createdAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    userId?: true
    investmentId?: true
    txnRef?: true
    amount?: true
    mode?: true
    razorpayOrderId?: true
    upiRefId?: true
    status?: true
    createdAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    userId?: true
    investmentId?: true
    txnRef?: true
    amount?: true
    mode?: true
    razorpayOrderId?: true
    upiRefId?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    userId: string
    investmentId: string | null
    txnRef: string
    amount: number
    mode: $Enums.PaymentMode
    razorpayOrderId: string | null
    upiRefId: string | null
    status: $Enums.PaymentStatus
    createdAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    investmentId?: boolean
    txnRef?: boolean
    amount?: boolean
    mode?: boolean
    razorpayOrderId?: boolean
    upiRefId?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    investment?: boolean | Payment$investmentArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    investmentId?: boolean
    txnRef?: boolean
    amount?: boolean
    mode?: boolean
    razorpayOrderId?: boolean
    upiRefId?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    investment?: boolean | Payment$investmentArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    investmentId?: boolean
    txnRef?: boolean
    amount?: boolean
    mode?: boolean
    razorpayOrderId?: boolean
    upiRefId?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    investment?: boolean | Payment$investmentArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    userId?: boolean
    investmentId?: boolean
    txnRef?: boolean
    amount?: boolean
    mode?: boolean
    razorpayOrderId?: boolean
    upiRefId?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "investmentId" | "txnRef" | "amount" | "mode" | "razorpayOrderId" | "upiRefId" | "status" | "createdAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    investment?: boolean | Payment$investmentArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    investment?: boolean | Payment$investmentArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    investment?: boolean | Payment$investmentArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      investment: Prisma.$InvestmentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      investmentId: string | null
      txnRef: string
      amount: number
      mode: $Enums.PaymentMode
      razorpayOrderId: string | null
      upiRefId: string | null
      status: $Enums.PaymentStatus
      createdAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    investment<T extends Payment$investmentArgs<ExtArgs> = {}>(args?: Subset<T, Payment$investmentArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly userId: FieldRef<"Payment", 'String'>
    readonly investmentId: FieldRef<"Payment", 'String'>
    readonly txnRef: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly mode: FieldRef<"Payment", 'PaymentMode'>
    readonly razorpayOrderId: FieldRef<"Payment", 'String'>
    readonly upiRefId: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment.investment
   */
  export type Payment$investmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    where?: InvestmentWhereInput
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.AdminRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.AdminRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
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




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    role: $Enums.AdminRole
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
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


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blogs?: boolean | Admin$blogsArgs<ExtArgs>
    stories?: boolean | Admin$storiesArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogs?: boolean | Admin$blogsArgs<ExtArgs>
    stories?: boolean | Admin$storiesArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AdminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      blogs: Prisma.$BlogPayload<ExtArgs>[]
      stories: Prisma.$StoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      role: $Enums.AdminRole
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
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
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
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
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
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
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
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
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blogs<T extends Admin$blogsArgs<ExtArgs> = {}>(args?: Subset<T, Admin$blogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stories<T extends Admin$storiesArgs<ExtArgs> = {}>(args?: Subset<T, Admin$storiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly name: FieldRef<"Admin", 'String'>
    readonly role: FieldRef<"Admin", 'AdminRole'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin.blogs
   */
  export type Admin$blogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    cursor?: BlogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Admin.stories
   */
  export type Admin$storiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    where?: StoryWhereInput
    orderBy?: StoryOrderByWithRelationInput | StoryOrderByWithRelationInput[]
    cursor?: StoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoryScalarFieldEnum | StoryScalarFieldEnum[]
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model Blog
   */

  export type AggregateBlog = {
    _count: BlogCountAggregateOutputType | null
    _avg: BlogAvgAggregateOutputType | null
    _sum: BlogSumAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  export type BlogAvgAggregateOutputType = {
    views: number | null
  }

  export type BlogSumAggregateOutputType = {
    views: number | null
  }

  export type BlogMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    excerpt: string | null
    coverImage: string | null
    content: string | null
    status: $Enums.BlogStatus | null
    authorId: string | null
    views: number | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    excerpt: string | null
    coverImage: string | null
    content: string | null
    status: $Enums.BlogStatus | null
    authorId: string | null
    views: number | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    excerpt: number
    coverImage: number
    content: number
    tags: number
    status: number
    authorId: number
    views: number
    publishedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlogAvgAggregateInputType = {
    views?: true
  }

  export type BlogSumAggregateInputType = {
    views?: true
  }

  export type BlogMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    coverImage?: true
    content?: true
    status?: true
    authorId?: true
    views?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    coverImage?: true
    content?: true
    status?: true
    authorId?: true
    views?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    coverImage?: true
    content?: true
    tags?: true
    status?: true
    authorId?: true
    views?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blog to aggregate.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blogs
    **/
    _count?: true | BlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogMaxAggregateInputType
  }

  export type GetBlogAggregateType<T extends BlogAggregateArgs> = {
        [P in keyof T & keyof AggregateBlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlog[P]>
      : GetScalarType<T[P], AggregateBlog[P]>
  }




  export type BlogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithAggregationInput | BlogOrderByWithAggregationInput[]
    by: BlogScalarFieldEnum[] | BlogScalarFieldEnum
    having?: BlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogCountAggregateInputType | true
    _avg?: BlogAvgAggregateInputType
    _sum?: BlogSumAggregateInputType
    _min?: BlogMinAggregateInputType
    _max?: BlogMaxAggregateInputType
  }

  export type BlogGroupByOutputType = {
    id: string
    title: string
    slug: string
    excerpt: string | null
    coverImage: string | null
    content: string
    tags: string[]
    status: $Enums.BlogStatus
    authorId: string
    views: number
    publishedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: BlogCountAggregateOutputType | null
    _avg: BlogAvgAggregateOutputType | null
    _sum: BlogSumAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  type GetBlogGroupByPayload<T extends BlogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogGroupByOutputType[P]>
            : GetScalarType<T[P], BlogGroupByOutputType[P]>
        }
      >
    >


  export type BlogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    coverImage?: boolean
    content?: boolean
    tags?: boolean
    status?: boolean
    authorId?: boolean
    views?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    coverImage?: boolean
    content?: boolean
    tags?: boolean
    status?: boolean
    authorId?: boolean
    views?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    coverImage?: boolean
    content?: boolean
    tags?: boolean
    status?: boolean
    authorId?: boolean
    views?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    coverImage?: boolean
    content?: boolean
    tags?: boolean
    status?: boolean
    authorId?: boolean
    views?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BlogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "excerpt" | "coverImage" | "content" | "tags" | "status" | "authorId" | "views" | "publishedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["blog"]>
  export type BlogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | AdminDefaultArgs<ExtArgs>
  }
  export type BlogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | AdminDefaultArgs<ExtArgs>
  }
  export type BlogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | AdminDefaultArgs<ExtArgs>
  }

  export type $BlogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Blog"
    objects: {
      author: Prisma.$AdminPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      excerpt: string | null
      coverImage: string | null
      content: string
      tags: string[]
      status: $Enums.BlogStatus
      authorId: string
      views: number
      publishedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["blog"]>
    composites: {}
  }

  type BlogGetPayload<S extends boolean | null | undefined | BlogDefaultArgs> = $Result.GetResult<Prisma.$BlogPayload, S>

  type BlogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogCountAggregateInputType | true
    }

  export interface BlogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Blog'], meta: { name: 'Blog' } }
    /**
     * Find zero or one Blog that matches the filter.
     * @param {BlogFindUniqueArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogFindUniqueArgs>(args: SelectSubset<T, BlogFindUniqueArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogFindUniqueOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogFindFirstArgs>(args?: SelectSubset<T, BlogFindFirstArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blogs
     * const blogs = await prisma.blog.findMany()
     * 
     * // Get first 10 Blogs
     * const blogs = await prisma.blog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogWithIdOnly = await prisma.blog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogFindManyArgs>(args?: SelectSubset<T, BlogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blog.
     * @param {BlogCreateArgs} args - Arguments to create a Blog.
     * @example
     * // Create one Blog
     * const Blog = await prisma.blog.create({
     *   data: {
     *     // ... data to create a Blog
     *   }
     * })
     * 
     */
    create<T extends BlogCreateArgs>(args: SelectSubset<T, BlogCreateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blogs.
     * @param {BlogCreateManyArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogCreateManyArgs>(args?: SelectSubset<T, BlogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Blogs and returns the data saved in the database.
     * @param {BlogCreateManyAndReturnArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Blogs and only return the `id`
     * const blogWithIdOnly = await prisma.blog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Blog.
     * @param {BlogDeleteArgs} args - Arguments to delete one Blog.
     * @example
     * // Delete one Blog
     * const Blog = await prisma.blog.delete({
     *   where: {
     *     // ... filter to delete one Blog
     *   }
     * })
     * 
     */
    delete<T extends BlogDeleteArgs>(args: SelectSubset<T, BlogDeleteArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blog.
     * @param {BlogUpdateArgs} args - Arguments to update one Blog.
     * @example
     * // Update one Blog
     * const blog = await prisma.blog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogUpdateArgs>(args: SelectSubset<T, BlogUpdateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blogs.
     * @param {BlogDeleteManyArgs} args - Arguments to filter Blogs to delete.
     * @example
     * // Delete a few Blogs
     * const { count } = await prisma.blog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogDeleteManyArgs>(args?: SelectSubset<T, BlogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogUpdateManyArgs>(args: SelectSubset<T, BlogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs and returns the data updated in the database.
     * @param {BlogUpdateManyAndReturnArgs} args - Arguments to update many Blogs.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Blogs and only return the `id`
     * const blogWithIdOnly = await prisma.blog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Blog.
     * @param {BlogUpsertArgs} args - Arguments to update or create a Blog.
     * @example
     * // Update or create a Blog
     * const blog = await prisma.blog.upsert({
     *   create: {
     *     // ... data to create a Blog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blog we want to update
     *   }
     * })
     */
    upsert<T extends BlogUpsertArgs>(args: SelectSubset<T, BlogUpsertArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCountArgs} args - Arguments to filter Blogs to count.
     * @example
     * // Count the number of Blogs
     * const count = await prisma.blog.count({
     *   where: {
     *     // ... the filter for the Blogs we want to count
     *   }
     * })
    **/
    count<T extends BlogCountArgs>(
      args?: Subset<T, BlogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlogAggregateArgs>(args: Subset<T, BlogAggregateArgs>): Prisma.PrismaPromise<GetBlogAggregateType<T>>

    /**
     * Group by Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogGroupByArgs} args - Group by arguments.
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
      T extends BlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogGroupByArgs['orderBy'] }
        : { orderBy?: BlogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Blog model
   */
  readonly fields: BlogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Blog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends AdminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminDefaultArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Blog model
   */
  interface BlogFieldRefs {
    readonly id: FieldRef<"Blog", 'String'>
    readonly title: FieldRef<"Blog", 'String'>
    readonly slug: FieldRef<"Blog", 'String'>
    readonly excerpt: FieldRef<"Blog", 'String'>
    readonly coverImage: FieldRef<"Blog", 'String'>
    readonly content: FieldRef<"Blog", 'String'>
    readonly tags: FieldRef<"Blog", 'String[]'>
    readonly status: FieldRef<"Blog", 'BlogStatus'>
    readonly authorId: FieldRef<"Blog", 'String'>
    readonly views: FieldRef<"Blog", 'Int'>
    readonly publishedAt: FieldRef<"Blog", 'DateTime'>
    readonly createdAt: FieldRef<"Blog", 'DateTime'>
    readonly updatedAt: FieldRef<"Blog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Blog findUnique
   */
  export type BlogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findUniqueOrThrow
   */
  export type BlogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findFirst
   */
  export type BlogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findFirstOrThrow
   */
  export type BlogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findMany
   */
  export type BlogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blogs to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog create
   */
  export type BlogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The data needed to create a Blog.
     */
    data: XOR<BlogCreateInput, BlogUncheckedCreateInput>
  }

  /**
   * Blog createMany
   */
  export type BlogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blog createManyAndReturn
   */
  export type BlogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Blog update
   */
  export type BlogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The data needed to update a Blog.
     */
    data: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
    /**
     * Choose, which Blog to update.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog updateMany
   */
  export type BlogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
  }

  /**
   * Blog updateManyAndReturn
   */
  export type BlogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Blog upsert
   */
  export type BlogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The filter to search for the Blog to update in case it exists.
     */
    where: BlogWhereUniqueInput
    /**
     * In case the Blog found by the `where` argument doesn't exist, create a new Blog with this data.
     */
    create: XOR<BlogCreateInput, BlogUncheckedCreateInput>
    /**
     * In case the Blog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
  }

  /**
   * Blog delete
   */
  export type BlogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter which Blog to delete.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog deleteMany
   */
  export type BlogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blogs to delete
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to delete.
     */
    limit?: number
  }

  /**
   * Blog without action
   */
  export type BlogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
  }


  /**
   * Model Story
   */

  export type AggregateStory = {
    _count: StoryCountAggregateOutputType | null
    _avg: StoryAvgAggregateOutputType | null
    _sum: StorySumAggregateOutputType | null
    _min: StoryMinAggregateOutputType | null
    _max: StoryMaxAggregateOutputType | null
  }

  export type StoryAvgAggregateOutputType = {
    views: number | null
  }

  export type StorySumAggregateOutputType = {
    views: number | null
  }

  export type StoryMinAggregateOutputType = {
    id: string | null
    label: string | null
    heading: string | null
    teaser: string | null
    imageUrl: string | null
    content: string | null
    status: $Enums.StoryStatus | null
    authorId: string | null
    views: number | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoryMaxAggregateOutputType = {
    id: string | null
    label: string | null
    heading: string | null
    teaser: string | null
    imageUrl: string | null
    content: string | null
    status: $Enums.StoryStatus | null
    authorId: string | null
    views: number | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoryCountAggregateOutputType = {
    id: number
    label: number
    heading: number
    teaser: number
    imageUrl: number
    content: number
    status: number
    authorId: number
    views: number
    publishedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StoryAvgAggregateInputType = {
    views?: true
  }

  export type StorySumAggregateInputType = {
    views?: true
  }

  export type StoryMinAggregateInputType = {
    id?: true
    label?: true
    heading?: true
    teaser?: true
    imageUrl?: true
    content?: true
    status?: true
    authorId?: true
    views?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoryMaxAggregateInputType = {
    id?: true
    label?: true
    heading?: true
    teaser?: true
    imageUrl?: true
    content?: true
    status?: true
    authorId?: true
    views?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoryCountAggregateInputType = {
    id?: true
    label?: true
    heading?: true
    teaser?: true
    imageUrl?: true
    content?: true
    status?: true
    authorId?: true
    views?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Story to aggregate.
     */
    where?: StoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stories to fetch.
     */
    orderBy?: StoryOrderByWithRelationInput | StoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stories
    **/
    _count?: true | StoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoryMaxAggregateInputType
  }

  export type GetStoryAggregateType<T extends StoryAggregateArgs> = {
        [P in keyof T & keyof AggregateStory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStory[P]>
      : GetScalarType<T[P], AggregateStory[P]>
  }




  export type StoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoryWhereInput
    orderBy?: StoryOrderByWithAggregationInput | StoryOrderByWithAggregationInput[]
    by: StoryScalarFieldEnum[] | StoryScalarFieldEnum
    having?: StoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoryCountAggregateInputType | true
    _avg?: StoryAvgAggregateInputType
    _sum?: StorySumAggregateInputType
    _min?: StoryMinAggregateInputType
    _max?: StoryMaxAggregateInputType
  }

  export type StoryGroupByOutputType = {
    id: string
    label: string
    heading: string
    teaser: string
    imageUrl: string
    content: string
    status: $Enums.StoryStatus
    authorId: string
    views: number
    publishedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: StoryCountAggregateOutputType | null
    _avg: StoryAvgAggregateOutputType | null
    _sum: StorySumAggregateOutputType | null
    _min: StoryMinAggregateOutputType | null
    _max: StoryMaxAggregateOutputType | null
  }

  type GetStoryGroupByPayload<T extends StoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoryGroupByOutputType[P]>
            : GetScalarType<T[P], StoryGroupByOutputType[P]>
        }
      >
    >


  export type StorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    heading?: boolean
    teaser?: boolean
    imageUrl?: boolean
    content?: boolean
    status?: boolean
    authorId?: boolean
    views?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["story"]>

  export type StorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    heading?: boolean
    teaser?: boolean
    imageUrl?: boolean
    content?: boolean
    status?: boolean
    authorId?: boolean
    views?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["story"]>

  export type StorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    heading?: boolean
    teaser?: boolean
    imageUrl?: boolean
    content?: boolean
    status?: boolean
    authorId?: boolean
    views?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["story"]>

  export type StorySelectScalar = {
    id?: boolean
    label?: boolean
    heading?: boolean
    teaser?: boolean
    imageUrl?: boolean
    content?: boolean
    status?: boolean
    authorId?: boolean
    views?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "label" | "heading" | "teaser" | "imageUrl" | "content" | "status" | "authorId" | "views" | "publishedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["story"]>
  export type StoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | AdminDefaultArgs<ExtArgs>
  }
  export type StoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | AdminDefaultArgs<ExtArgs>
  }
  export type StoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | AdminDefaultArgs<ExtArgs>
  }

  export type $StoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Story"
    objects: {
      author: Prisma.$AdminPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      label: string
      heading: string
      teaser: string
      imageUrl: string
      content: string
      status: $Enums.StoryStatus
      authorId: string
      views: number
      publishedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["story"]>
    composites: {}
  }

  type StoryGetPayload<S extends boolean | null | undefined | StoryDefaultArgs> = $Result.GetResult<Prisma.$StoryPayload, S>

  type StoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoryCountAggregateInputType | true
    }

  export interface StoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Story'], meta: { name: 'Story' } }
    /**
     * Find zero or one Story that matches the filter.
     * @param {StoryFindUniqueArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoryFindUniqueArgs>(args: SelectSubset<T, StoryFindUniqueArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Story that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StoryFindUniqueOrThrowArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoryFindUniqueOrThrowArgs>(args: SelectSubset<T, StoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Story that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryFindFirstArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoryFindFirstArgs>(args?: SelectSubset<T, StoryFindFirstArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Story that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryFindFirstOrThrowArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoryFindFirstOrThrowArgs>(args?: SelectSubset<T, StoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stories
     * const stories = await prisma.story.findMany()
     * 
     * // Get first 10 Stories
     * const stories = await prisma.story.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storyWithIdOnly = await prisma.story.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoryFindManyArgs>(args?: SelectSubset<T, StoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Story.
     * @param {StoryCreateArgs} args - Arguments to create a Story.
     * @example
     * // Create one Story
     * const Story = await prisma.story.create({
     *   data: {
     *     // ... data to create a Story
     *   }
     * })
     * 
     */
    create<T extends StoryCreateArgs>(args: SelectSubset<T, StoryCreateArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stories.
     * @param {StoryCreateManyArgs} args - Arguments to create many Stories.
     * @example
     * // Create many Stories
     * const story = await prisma.story.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoryCreateManyArgs>(args?: SelectSubset<T, StoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stories and returns the data saved in the database.
     * @param {StoryCreateManyAndReturnArgs} args - Arguments to create many Stories.
     * @example
     * // Create many Stories
     * const story = await prisma.story.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stories and only return the `id`
     * const storyWithIdOnly = await prisma.story.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StoryCreateManyAndReturnArgs>(args?: SelectSubset<T, StoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Story.
     * @param {StoryDeleteArgs} args - Arguments to delete one Story.
     * @example
     * // Delete one Story
     * const Story = await prisma.story.delete({
     *   where: {
     *     // ... filter to delete one Story
     *   }
     * })
     * 
     */
    delete<T extends StoryDeleteArgs>(args: SelectSubset<T, StoryDeleteArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Story.
     * @param {StoryUpdateArgs} args - Arguments to update one Story.
     * @example
     * // Update one Story
     * const story = await prisma.story.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoryUpdateArgs>(args: SelectSubset<T, StoryUpdateArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stories.
     * @param {StoryDeleteManyArgs} args - Arguments to filter Stories to delete.
     * @example
     * // Delete a few Stories
     * const { count } = await prisma.story.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoryDeleteManyArgs>(args?: SelectSubset<T, StoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stories
     * const story = await prisma.story.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoryUpdateManyArgs>(args: SelectSubset<T, StoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stories and returns the data updated in the database.
     * @param {StoryUpdateManyAndReturnArgs} args - Arguments to update many Stories.
     * @example
     * // Update many Stories
     * const story = await prisma.story.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stories and only return the `id`
     * const storyWithIdOnly = await prisma.story.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StoryUpdateManyAndReturnArgs>(args: SelectSubset<T, StoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Story.
     * @param {StoryUpsertArgs} args - Arguments to update or create a Story.
     * @example
     * // Update or create a Story
     * const story = await prisma.story.upsert({
     *   create: {
     *     // ... data to create a Story
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Story we want to update
     *   }
     * })
     */
    upsert<T extends StoryUpsertArgs>(args: SelectSubset<T, StoryUpsertArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryCountArgs} args - Arguments to filter Stories to count.
     * @example
     * // Count the number of Stories
     * const count = await prisma.story.count({
     *   where: {
     *     // ... the filter for the Stories we want to count
     *   }
     * })
    **/
    count<T extends StoryCountArgs>(
      args?: Subset<T, StoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Story.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StoryAggregateArgs>(args: Subset<T, StoryAggregateArgs>): Prisma.PrismaPromise<GetStoryAggregateType<T>>

    /**
     * Group by Story.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryGroupByArgs} args - Group by arguments.
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
      T extends StoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoryGroupByArgs['orderBy'] }
        : { orderBy?: StoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Story model
   */
  readonly fields: StoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Story.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends AdminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminDefaultArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Story model
   */
  interface StoryFieldRefs {
    readonly id: FieldRef<"Story", 'String'>
    readonly label: FieldRef<"Story", 'String'>
    readonly heading: FieldRef<"Story", 'String'>
    readonly teaser: FieldRef<"Story", 'String'>
    readonly imageUrl: FieldRef<"Story", 'String'>
    readonly content: FieldRef<"Story", 'String'>
    readonly status: FieldRef<"Story", 'StoryStatus'>
    readonly authorId: FieldRef<"Story", 'String'>
    readonly views: FieldRef<"Story", 'Int'>
    readonly publishedAt: FieldRef<"Story", 'DateTime'>
    readonly createdAt: FieldRef<"Story", 'DateTime'>
    readonly updatedAt: FieldRef<"Story", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Story findUnique
   */
  export type StoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter, which Story to fetch.
     */
    where: StoryWhereUniqueInput
  }

  /**
   * Story findUniqueOrThrow
   */
  export type StoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter, which Story to fetch.
     */
    where: StoryWhereUniqueInput
  }

  /**
   * Story findFirst
   */
  export type StoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter, which Story to fetch.
     */
    where?: StoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stories to fetch.
     */
    orderBy?: StoryOrderByWithRelationInput | StoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stories.
     */
    cursor?: StoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stories.
     */
    distinct?: StoryScalarFieldEnum | StoryScalarFieldEnum[]
  }

  /**
   * Story findFirstOrThrow
   */
  export type StoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter, which Story to fetch.
     */
    where?: StoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stories to fetch.
     */
    orderBy?: StoryOrderByWithRelationInput | StoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stories.
     */
    cursor?: StoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stories.
     */
    distinct?: StoryScalarFieldEnum | StoryScalarFieldEnum[]
  }

  /**
   * Story findMany
   */
  export type StoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter, which Stories to fetch.
     */
    where?: StoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stories to fetch.
     */
    orderBy?: StoryOrderByWithRelationInput | StoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stories.
     */
    cursor?: StoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stories.
     */
    skip?: number
    distinct?: StoryScalarFieldEnum | StoryScalarFieldEnum[]
  }

  /**
   * Story create
   */
  export type StoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Story.
     */
    data: XOR<StoryCreateInput, StoryUncheckedCreateInput>
  }

  /**
   * Story createMany
   */
  export type StoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stories.
     */
    data: StoryCreateManyInput | StoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Story createManyAndReturn
   */
  export type StoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * The data used to create many Stories.
     */
    data: StoryCreateManyInput | StoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Story update
   */
  export type StoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Story.
     */
    data: XOR<StoryUpdateInput, StoryUncheckedUpdateInput>
    /**
     * Choose, which Story to update.
     */
    where: StoryWhereUniqueInput
  }

  /**
   * Story updateMany
   */
  export type StoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stories.
     */
    data: XOR<StoryUpdateManyMutationInput, StoryUncheckedUpdateManyInput>
    /**
     * Filter which Stories to update
     */
    where?: StoryWhereInput
    /**
     * Limit how many Stories to update.
     */
    limit?: number
  }

  /**
   * Story updateManyAndReturn
   */
  export type StoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * The data used to update Stories.
     */
    data: XOR<StoryUpdateManyMutationInput, StoryUncheckedUpdateManyInput>
    /**
     * Filter which Stories to update
     */
    where?: StoryWhereInput
    /**
     * Limit how many Stories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Story upsert
   */
  export type StoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Story to update in case it exists.
     */
    where: StoryWhereUniqueInput
    /**
     * In case the Story found by the `where` argument doesn't exist, create a new Story with this data.
     */
    create: XOR<StoryCreateInput, StoryUncheckedCreateInput>
    /**
     * In case the Story was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoryUpdateInput, StoryUncheckedUpdateInput>
  }

  /**
   * Story delete
   */
  export type StoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter which Story to delete.
     */
    where: StoryWhereUniqueInput
  }

  /**
   * Story deleteMany
   */
  export type StoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stories to delete
     */
    where?: StoryWhereInput
    /**
     * Limit how many Stories to delete.
     */
    limit?: number
  }

  /**
   * Story without action
   */
  export type StoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    currentStep: 'currentStep',
    phone: 'phone',
    encryptedPan: 'encryptedPan',
    encryptedBankAcc: 'encryptedBankAcc',
    encryptedIfsc: 'encryptedIfsc',
    bankAccountType: 'bankAccountType',
    bankName: 'bankName',
    bankBranchName: 'bankBranchName',
    bankAccountHolderName: 'bankAccountHolderName',
    bankVerified: 'bankVerified',
    bankVerifiedAt: 'bankVerifiedAt',
    bankBeneficiaryName: 'bankBeneficiaryName',
    bankNameMatchScore: 'bankNameMatchScore',
    upiId: 'upiId',
    dob: 'dob',
    maritalStatus: 'maritalStatus',
    education: 'education',
    motherName: 'motherName',
    fatherName: 'fatherName',
    gender: 'gender',
    annualIncome: 'annualIncome',
    incomeSource: 'incomeSource',
    taxResidency: 'taxResidency',
    residentialStatus: 'residentialStatus',
    occupationType: 'occupationType',
    countryOfBirth: 'countryOfBirth',
    nationality: 'nationality',
    signatureUrl: 'signatureUrl',
    nomineeName: 'nomineeName',
    nomineeRelation: 'nomineeRelation',
    nomineeAllocation: 'nomineeAllocation',
    nomineeIdType: 'nomineeIdType',
    nomineeIdNumber: 'nomineeIdNumber',
    nomineeEmail: 'nomineeEmail',
    nomineeMobile: 'nomineeMobile',
    nomineeAddressLine1: 'nomineeAddressLine1',
    nomineeAddressLine2: 'nomineeAddressLine2',
    nomineeCity: 'nomineeCity',
    nomineePincode: 'nomineePincode',
    nomineeCountry: 'nomineeCountry',
    nomineeDob: 'nomineeDob',
    languagePref: 'languagePref',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    kycStatus: 'kycStatus',
    digilockerKycId: 'digilockerKycId',
    digilockerid: 'digilockerid',
    aadhaarLinked: 'aadhaarLinked',
    aadhaarLastFour: 'aadhaarLastFour',
    kycVerifiedAt: 'kycVerifiedAt',
    addressLine1: 'addressLine1',
    addressLine2: 'addressLine2',
    city: 'city',
    state: 'state',
    pincode: 'pincode',
    country: 'country',
    commAddressLine1: 'commAddressLine1',
    commAddressLine2: 'commAddressLine2',
    commCity: 'commCity',
    commState: 'commState',
    commPincode: 'commPincode',
    commCountry: 'commCountry',
    useSameAddress: 'useSameAddress',
    dlAccessToken: 'dlAccessToken',
    dlRefreshToken: 'dlRefreshToken',
    dlTokenExpiresAt: 'dlTokenExpiresAt',
    ckycRefId: 'ckycRefId',
    kycType: 'kycType',
    kraVerified: 'kraVerified',
    kraRefId: 'kraRefId',
    kraStatusCode: 'kraStatusCode',
    kraStatusDate: 'kraStatusDate',
    fatcaDeclaration: 'fatcaDeclaration',
    uccCode: 'uccCode',
    fatcaSubmitted: 'fatcaSubmitted',
    elogAuthenticated: 'elogAuthenticated',
    nseStatus: 'nseStatus',
    nseLastUpdated: 'nseLastUpdated'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const KycSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    state: 'state',
    codeVerifier: 'codeVerifier',
    status: 'status',
    errorCode: 'errorCode',
    errorMessage: 'errorMessage',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt'
  };

  export type KycSessionScalarFieldEnum = (typeof KycSessionScalarFieldEnum)[keyof typeof KycSessionScalarFieldEnum]


  export const SIPScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    fundName: 'fundName',
    amcCode: 'amcCode',
    schemeCode: 'schemeCode',
    amountPerInstallment: 'amountPerInstallment',
    totalInstallments: 'totalInstallments',
    frequency: 'frequency',
    startDate: 'startDate',
    nextInstallment: 'nextInstallment',
    endDate: 'endDate',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SIPScalarFieldEnum = (typeof SIPScalarFieldEnum)[keyof typeof SIPScalarFieldEnum]


  export const InvestmentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    sipId: 'sipId',
    fundName: 'fundName',
    amcCode: 'amcCode',
    schemeCode: 'schemeCode',
    units: 'units',
    navAtPurchase: 'navAtPurchase',
    currentNav: 'currentNav',
    type: 'type',
    status: 'status',
    purchaseDate: 'purchaseDate',
    createdAt: 'createdAt'
  };

  export type InvestmentScalarFieldEnum = (typeof InvestmentScalarFieldEnum)[keyof typeof InvestmentScalarFieldEnum]


  export const WatchlistScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    schemeCode: 'schemeCode',
    amcCode: 'amcCode',
    fundName: 'fundName',
    category: 'category',
    currentNav: 'currentNav',
    addedAt: 'addedAt'
  };

  export type WatchlistScalarFieldEnum = (typeof WatchlistScalarFieldEnum)[keyof typeof WatchlistScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    investmentId: 'investmentId',
    txnRef: 'txnRef',
    amount: 'amount',
    mode: 'mode',
    razorpayOrderId: 'razorpayOrderId',
    upiRefId: 'upiRefId',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const BlogScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    excerpt: 'excerpt',
    coverImage: 'coverImage',
    content: 'content',
    tags: 'tags',
    status: 'status',
    authorId: 'authorId',
    views: 'views',
    publishedAt: 'publishedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BlogScalarFieldEnum = (typeof BlogScalarFieldEnum)[keyof typeof BlogScalarFieldEnum]


  export const StoryScalarFieldEnum: {
    id: 'id',
    label: 'label',
    heading: 'heading',
    teaser: 'teaser',
    imageUrl: 'imageUrl',
    content: 'content',
    status: 'status',
    authorId: 'authorId',
    views: 'views',
    publishedAt: 'publishedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StoryScalarFieldEnum = (typeof StoryScalarFieldEnum)[keyof typeof StoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'MaritalStatus'
   */
  export type EnumMaritalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaritalStatus'>
    


  /**
   * Reference to a field of type 'MaritalStatus[]'
   */
  export type ListEnumMaritalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaritalStatus[]'>
    


  /**
   * Reference to a field of type 'EducationLevel'
   */
  export type EnumEducationLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EducationLevel'>
    


  /**
   * Reference to a field of type 'EducationLevel[]'
   */
  export type ListEnumEducationLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EducationLevel[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'AnnualIncome'
   */
  export type EnumAnnualIncomeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnnualIncome'>
    


  /**
   * Reference to a field of type 'AnnualIncome[]'
   */
  export type ListEnumAnnualIncomeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnnualIncome[]'>
    


  /**
   * Reference to a field of type 'IncomeSource'
   */
  export type EnumIncomeSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IncomeSource'>
    


  /**
   * Reference to a field of type 'IncomeSource[]'
   */
  export type ListEnumIncomeSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IncomeSource[]'>
    


  /**
   * Reference to a field of type 'TaxResidency'
   */
  export type EnumTaxResidencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaxResidency'>
    


  /**
   * Reference to a field of type 'TaxResidency[]'
   */
  export type ListEnumTaxResidencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaxResidency[]'>
    


  /**
   * Reference to a field of type 'ResidentialStatus'
   */
  export type EnumResidentialStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResidentialStatus'>
    


  /**
   * Reference to a field of type 'ResidentialStatus[]'
   */
  export type ListEnumResidentialStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResidentialStatus[]'>
    


  /**
   * Reference to a field of type 'OccupationType'
   */
  export type EnumOccupationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OccupationType'>
    


  /**
   * Reference to a field of type 'OccupationType[]'
   */
  export type ListEnumOccupationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OccupationType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'KycStatus'
   */
  export type EnumKycStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KycStatus'>
    


  /**
   * Reference to a field of type 'KycStatus[]'
   */
  export type ListEnumKycStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KycStatus[]'>
    


  /**
   * Reference to a field of type 'KycType'
   */
  export type EnumKycTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KycType'>
    


  /**
   * Reference to a field of type 'KycType[]'
   */
  export type ListEnumKycTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KycType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'KycSessionStatus'
   */
  export type EnumKycSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KycSessionStatus'>
    


  /**
   * Reference to a field of type 'KycSessionStatus[]'
   */
  export type ListEnumKycSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KycSessionStatus[]'>
    


  /**
   * Reference to a field of type 'SIPFrequency'
   */
  export type EnumSIPFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SIPFrequency'>
    


  /**
   * Reference to a field of type 'SIPFrequency[]'
   */
  export type ListEnumSIPFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SIPFrequency[]'>
    


  /**
   * Reference to a field of type 'SIPStatus'
   */
  export type EnumSIPStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SIPStatus'>
    


  /**
   * Reference to a field of type 'SIPStatus[]'
   */
  export type ListEnumSIPStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SIPStatus[]'>
    


  /**
   * Reference to a field of type 'InvestmentType'
   */
  export type EnumInvestmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvestmentType'>
    


  /**
   * Reference to a field of type 'InvestmentType[]'
   */
  export type ListEnumInvestmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvestmentType[]'>
    


  /**
   * Reference to a field of type 'InvestmentStatus'
   */
  export type EnumInvestmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvestmentStatus'>
    


  /**
   * Reference to a field of type 'InvestmentStatus[]'
   */
  export type ListEnumInvestmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvestmentStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentMode'
   */
  export type EnumPaymentModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMode'>
    


  /**
   * Reference to a field of type 'PaymentMode[]'
   */
  export type ListEnumPaymentModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMode[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'AdminRole'
   */
  export type EnumAdminRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdminRole'>
    


  /**
   * Reference to a field of type 'AdminRole[]'
   */
  export type ListEnumAdminRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdminRole[]'>
    


  /**
   * Reference to a field of type 'BlogStatus'
   */
  export type EnumBlogStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BlogStatus'>
    


  /**
   * Reference to a field of type 'BlogStatus[]'
   */
  export type ListEnumBlogStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BlogStatus[]'>
    


  /**
   * Reference to a field of type 'StoryStatus'
   */
  export type EnumStoryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StoryStatus'>
    


  /**
   * Reference to a field of type 'StoryStatus[]'
   */
  export type ListEnumStoryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StoryStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    currentStep?: IntFilter<"User"> | number
    phone?: StringNullableFilter<"User"> | string | null
    encryptedPan?: StringNullableFilter<"User"> | string | null
    encryptedBankAcc?: StringNullableFilter<"User"> | string | null
    encryptedIfsc?: StringNullableFilter<"User"> | string | null
    bankAccountType?: StringNullableFilter<"User"> | string | null
    bankName?: StringNullableFilter<"User"> | string | null
    bankBranchName?: StringNullableFilter<"User"> | string | null
    bankAccountHolderName?: StringNullableFilter<"User"> | string | null
    bankVerified?: BoolFilter<"User"> | boolean
    bankVerifiedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    bankBeneficiaryName?: StringNullableFilter<"User"> | string | null
    bankNameMatchScore?: IntNullableFilter<"User"> | number | null
    upiId?: StringNullableFilter<"User"> | string | null
    dob?: DateTimeNullableFilter<"User"> | Date | string | null
    maritalStatus?: EnumMaritalStatusNullableFilter<"User"> | $Enums.MaritalStatus | null
    education?: EnumEducationLevelNullableFilter<"User"> | $Enums.EducationLevel | null
    motherName?: StringNullableFilter<"User"> | string | null
    fatherName?: StringNullableFilter<"User"> | string | null
    gender?: EnumGenderNullableFilter<"User"> | $Enums.Gender | null
    annualIncome?: EnumAnnualIncomeNullableFilter<"User"> | $Enums.AnnualIncome | null
    incomeSource?: EnumIncomeSourceNullableFilter<"User"> | $Enums.IncomeSource | null
    taxResidency?: EnumTaxResidencyNullableFilter<"User"> | $Enums.TaxResidency | null
    residentialStatus?: EnumResidentialStatusNullableFilter<"User"> | $Enums.ResidentialStatus | null
    occupationType?: EnumOccupationTypeNullableFilter<"User"> | $Enums.OccupationType | null
    countryOfBirth?: StringNullableFilter<"User"> | string | null
    nationality?: StringNullableFilter<"User"> | string | null
    signatureUrl?: StringNullableFilter<"User"> | string | null
    nomineeName?: StringNullableFilter<"User"> | string | null
    nomineeRelation?: StringNullableFilter<"User"> | string | null
    nomineeAllocation?: FloatNullableFilter<"User"> | number | null
    nomineeIdType?: StringNullableFilter<"User"> | string | null
    nomineeIdNumber?: StringNullableFilter<"User"> | string | null
    nomineeEmail?: StringNullableFilter<"User"> | string | null
    nomineeMobile?: StringNullableFilter<"User"> | string | null
    nomineeAddressLine1?: StringNullableFilter<"User"> | string | null
    nomineeAddressLine2?: StringNullableFilter<"User"> | string | null
    nomineeCity?: StringNullableFilter<"User"> | string | null
    nomineePincode?: StringNullableFilter<"User"> | string | null
    nomineeCountry?: StringNullableFilter<"User"> | string | null
    nomineeDob?: DateTimeNullableFilter<"User"> | Date | string | null
    languagePref?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    kycStatus?: EnumKycStatusFilter<"User"> | $Enums.KycStatus
    digilockerKycId?: StringNullableFilter<"User"> | string | null
    digilockerid?: StringNullableFilter<"User"> | string | null
    aadhaarLinked?: BoolFilter<"User"> | boolean
    aadhaarLastFour?: StringNullableFilter<"User"> | string | null
    kycVerifiedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    addressLine1?: StringNullableFilter<"User"> | string | null
    addressLine2?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    state?: StringNullableFilter<"User"> | string | null
    pincode?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    commAddressLine1?: StringNullableFilter<"User"> | string | null
    commAddressLine2?: StringNullableFilter<"User"> | string | null
    commCity?: StringNullableFilter<"User"> | string | null
    commState?: StringNullableFilter<"User"> | string | null
    commPincode?: StringNullableFilter<"User"> | string | null
    commCountry?: StringNullableFilter<"User"> | string | null
    useSameAddress?: BoolFilter<"User"> | boolean
    dlAccessToken?: StringNullableFilter<"User"> | string | null
    dlRefreshToken?: StringNullableFilter<"User"> | string | null
    dlTokenExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    ckycRefId?: StringNullableFilter<"User"> | string | null
    kycType?: EnumKycTypeNullableFilter<"User"> | $Enums.KycType | null
    kraVerified?: BoolFilter<"User"> | boolean
    kraRefId?: StringNullableFilter<"User"> | string | null
    kraStatusCode?: StringNullableFilter<"User"> | string | null
    kraStatusDate?: DateTimeNullableFilter<"User"> | Date | string | null
    fatcaDeclaration?: JsonNullableFilter<"User">
    uccCode?: StringNullableFilter<"User"> | string | null
    fatcaSubmitted?: BoolFilter<"User"> | boolean
    elogAuthenticated?: BoolFilter<"User"> | boolean
    nseStatus?: StringNullableFilter<"User"> | string | null
    nseLastUpdated?: DateTimeNullableFilter<"User"> | Date | string | null
    sips?: SIPListRelationFilter
    investments?: InvestmentListRelationFilter
    payments?: PaymentListRelationFilter
    kycSessions?: KycSessionListRelationFilter
    watchlist?: WatchlistListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    currentStep?: SortOrder
    phone?: SortOrderInput | SortOrder
    encryptedPan?: SortOrderInput | SortOrder
    encryptedBankAcc?: SortOrderInput | SortOrder
    encryptedIfsc?: SortOrderInput | SortOrder
    bankAccountType?: SortOrderInput | SortOrder
    bankName?: SortOrderInput | SortOrder
    bankBranchName?: SortOrderInput | SortOrder
    bankAccountHolderName?: SortOrderInput | SortOrder
    bankVerified?: SortOrder
    bankVerifiedAt?: SortOrderInput | SortOrder
    bankBeneficiaryName?: SortOrderInput | SortOrder
    bankNameMatchScore?: SortOrderInput | SortOrder
    upiId?: SortOrderInput | SortOrder
    dob?: SortOrderInput | SortOrder
    maritalStatus?: SortOrderInput | SortOrder
    education?: SortOrderInput | SortOrder
    motherName?: SortOrderInput | SortOrder
    fatherName?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    annualIncome?: SortOrderInput | SortOrder
    incomeSource?: SortOrderInput | SortOrder
    taxResidency?: SortOrderInput | SortOrder
    residentialStatus?: SortOrderInput | SortOrder
    occupationType?: SortOrderInput | SortOrder
    countryOfBirth?: SortOrderInput | SortOrder
    nationality?: SortOrderInput | SortOrder
    signatureUrl?: SortOrderInput | SortOrder
    nomineeName?: SortOrderInput | SortOrder
    nomineeRelation?: SortOrderInput | SortOrder
    nomineeAllocation?: SortOrderInput | SortOrder
    nomineeIdType?: SortOrderInput | SortOrder
    nomineeIdNumber?: SortOrderInput | SortOrder
    nomineeEmail?: SortOrderInput | SortOrder
    nomineeMobile?: SortOrderInput | SortOrder
    nomineeAddressLine1?: SortOrderInput | SortOrder
    nomineeAddressLine2?: SortOrderInput | SortOrder
    nomineeCity?: SortOrderInput | SortOrder
    nomineePincode?: SortOrderInput | SortOrder
    nomineeCountry?: SortOrderInput | SortOrder
    nomineeDob?: SortOrderInput | SortOrder
    languagePref?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    kycStatus?: SortOrder
    digilockerKycId?: SortOrderInput | SortOrder
    digilockerid?: SortOrderInput | SortOrder
    aadhaarLinked?: SortOrder
    aadhaarLastFour?: SortOrderInput | SortOrder
    kycVerifiedAt?: SortOrderInput | SortOrder
    addressLine1?: SortOrderInput | SortOrder
    addressLine2?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    pincode?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    commAddressLine1?: SortOrderInput | SortOrder
    commAddressLine2?: SortOrderInput | SortOrder
    commCity?: SortOrderInput | SortOrder
    commState?: SortOrderInput | SortOrder
    commPincode?: SortOrderInput | SortOrder
    commCountry?: SortOrderInput | SortOrder
    useSameAddress?: SortOrder
    dlAccessToken?: SortOrderInput | SortOrder
    dlRefreshToken?: SortOrderInput | SortOrder
    dlTokenExpiresAt?: SortOrderInput | SortOrder
    ckycRefId?: SortOrderInput | SortOrder
    kycType?: SortOrderInput | SortOrder
    kraVerified?: SortOrder
    kraRefId?: SortOrderInput | SortOrder
    kraStatusCode?: SortOrderInput | SortOrder
    kraStatusDate?: SortOrderInput | SortOrder
    fatcaDeclaration?: SortOrderInput | SortOrder
    uccCode?: SortOrderInput | SortOrder
    fatcaSubmitted?: SortOrder
    elogAuthenticated?: SortOrder
    nseStatus?: SortOrderInput | SortOrder
    nseLastUpdated?: SortOrderInput | SortOrder
    sips?: SIPOrderByRelationAggregateInput
    investments?: InvestmentOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    kycSessions?: KycSessionOrderByRelationAggregateInput
    watchlist?: WatchlistOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    digilockerKycId?: string
    digilockerid?: string
    uccCode?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    currentStep?: IntFilter<"User"> | number
    encryptedPan?: StringNullableFilter<"User"> | string | null
    encryptedBankAcc?: StringNullableFilter<"User"> | string | null
    encryptedIfsc?: StringNullableFilter<"User"> | string | null
    bankAccountType?: StringNullableFilter<"User"> | string | null
    bankName?: StringNullableFilter<"User"> | string | null
    bankBranchName?: StringNullableFilter<"User"> | string | null
    bankAccountHolderName?: StringNullableFilter<"User"> | string | null
    bankVerified?: BoolFilter<"User"> | boolean
    bankVerifiedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    bankBeneficiaryName?: StringNullableFilter<"User"> | string | null
    bankNameMatchScore?: IntNullableFilter<"User"> | number | null
    upiId?: StringNullableFilter<"User"> | string | null
    dob?: DateTimeNullableFilter<"User"> | Date | string | null
    maritalStatus?: EnumMaritalStatusNullableFilter<"User"> | $Enums.MaritalStatus | null
    education?: EnumEducationLevelNullableFilter<"User"> | $Enums.EducationLevel | null
    motherName?: StringNullableFilter<"User"> | string | null
    fatherName?: StringNullableFilter<"User"> | string | null
    gender?: EnumGenderNullableFilter<"User"> | $Enums.Gender | null
    annualIncome?: EnumAnnualIncomeNullableFilter<"User"> | $Enums.AnnualIncome | null
    incomeSource?: EnumIncomeSourceNullableFilter<"User"> | $Enums.IncomeSource | null
    taxResidency?: EnumTaxResidencyNullableFilter<"User"> | $Enums.TaxResidency | null
    residentialStatus?: EnumResidentialStatusNullableFilter<"User"> | $Enums.ResidentialStatus | null
    occupationType?: EnumOccupationTypeNullableFilter<"User"> | $Enums.OccupationType | null
    countryOfBirth?: StringNullableFilter<"User"> | string | null
    nationality?: StringNullableFilter<"User"> | string | null
    signatureUrl?: StringNullableFilter<"User"> | string | null
    nomineeName?: StringNullableFilter<"User"> | string | null
    nomineeRelation?: StringNullableFilter<"User"> | string | null
    nomineeAllocation?: FloatNullableFilter<"User"> | number | null
    nomineeIdType?: StringNullableFilter<"User"> | string | null
    nomineeIdNumber?: StringNullableFilter<"User"> | string | null
    nomineeEmail?: StringNullableFilter<"User"> | string | null
    nomineeMobile?: StringNullableFilter<"User"> | string | null
    nomineeAddressLine1?: StringNullableFilter<"User"> | string | null
    nomineeAddressLine2?: StringNullableFilter<"User"> | string | null
    nomineeCity?: StringNullableFilter<"User"> | string | null
    nomineePincode?: StringNullableFilter<"User"> | string | null
    nomineeCountry?: StringNullableFilter<"User"> | string | null
    nomineeDob?: DateTimeNullableFilter<"User"> | Date | string | null
    languagePref?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    kycStatus?: EnumKycStatusFilter<"User"> | $Enums.KycStatus
    aadhaarLinked?: BoolFilter<"User"> | boolean
    aadhaarLastFour?: StringNullableFilter<"User"> | string | null
    kycVerifiedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    addressLine1?: StringNullableFilter<"User"> | string | null
    addressLine2?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    state?: StringNullableFilter<"User"> | string | null
    pincode?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    commAddressLine1?: StringNullableFilter<"User"> | string | null
    commAddressLine2?: StringNullableFilter<"User"> | string | null
    commCity?: StringNullableFilter<"User"> | string | null
    commState?: StringNullableFilter<"User"> | string | null
    commPincode?: StringNullableFilter<"User"> | string | null
    commCountry?: StringNullableFilter<"User"> | string | null
    useSameAddress?: BoolFilter<"User"> | boolean
    dlAccessToken?: StringNullableFilter<"User"> | string | null
    dlRefreshToken?: StringNullableFilter<"User"> | string | null
    dlTokenExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    ckycRefId?: StringNullableFilter<"User"> | string | null
    kycType?: EnumKycTypeNullableFilter<"User"> | $Enums.KycType | null
    kraVerified?: BoolFilter<"User"> | boolean
    kraRefId?: StringNullableFilter<"User"> | string | null
    kraStatusCode?: StringNullableFilter<"User"> | string | null
    kraStatusDate?: DateTimeNullableFilter<"User"> | Date | string | null
    fatcaDeclaration?: JsonNullableFilter<"User">
    fatcaSubmitted?: BoolFilter<"User"> | boolean
    elogAuthenticated?: BoolFilter<"User"> | boolean
    nseStatus?: StringNullableFilter<"User"> | string | null
    nseLastUpdated?: DateTimeNullableFilter<"User"> | Date | string | null
    sips?: SIPListRelationFilter
    investments?: InvestmentListRelationFilter
    payments?: PaymentListRelationFilter
    kycSessions?: KycSessionListRelationFilter
    watchlist?: WatchlistListRelationFilter
  }, "id" | "email" | "phone" | "digilockerKycId" | "digilockerid" | "uccCode">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    currentStep?: SortOrder
    phone?: SortOrderInput | SortOrder
    encryptedPan?: SortOrderInput | SortOrder
    encryptedBankAcc?: SortOrderInput | SortOrder
    encryptedIfsc?: SortOrderInput | SortOrder
    bankAccountType?: SortOrderInput | SortOrder
    bankName?: SortOrderInput | SortOrder
    bankBranchName?: SortOrderInput | SortOrder
    bankAccountHolderName?: SortOrderInput | SortOrder
    bankVerified?: SortOrder
    bankVerifiedAt?: SortOrderInput | SortOrder
    bankBeneficiaryName?: SortOrderInput | SortOrder
    bankNameMatchScore?: SortOrderInput | SortOrder
    upiId?: SortOrderInput | SortOrder
    dob?: SortOrderInput | SortOrder
    maritalStatus?: SortOrderInput | SortOrder
    education?: SortOrderInput | SortOrder
    motherName?: SortOrderInput | SortOrder
    fatherName?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    annualIncome?: SortOrderInput | SortOrder
    incomeSource?: SortOrderInput | SortOrder
    taxResidency?: SortOrderInput | SortOrder
    residentialStatus?: SortOrderInput | SortOrder
    occupationType?: SortOrderInput | SortOrder
    countryOfBirth?: SortOrderInput | SortOrder
    nationality?: SortOrderInput | SortOrder
    signatureUrl?: SortOrderInput | SortOrder
    nomineeName?: SortOrderInput | SortOrder
    nomineeRelation?: SortOrderInput | SortOrder
    nomineeAllocation?: SortOrderInput | SortOrder
    nomineeIdType?: SortOrderInput | SortOrder
    nomineeIdNumber?: SortOrderInput | SortOrder
    nomineeEmail?: SortOrderInput | SortOrder
    nomineeMobile?: SortOrderInput | SortOrder
    nomineeAddressLine1?: SortOrderInput | SortOrder
    nomineeAddressLine2?: SortOrderInput | SortOrder
    nomineeCity?: SortOrderInput | SortOrder
    nomineePincode?: SortOrderInput | SortOrder
    nomineeCountry?: SortOrderInput | SortOrder
    nomineeDob?: SortOrderInput | SortOrder
    languagePref?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    kycStatus?: SortOrder
    digilockerKycId?: SortOrderInput | SortOrder
    digilockerid?: SortOrderInput | SortOrder
    aadhaarLinked?: SortOrder
    aadhaarLastFour?: SortOrderInput | SortOrder
    kycVerifiedAt?: SortOrderInput | SortOrder
    addressLine1?: SortOrderInput | SortOrder
    addressLine2?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    pincode?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    commAddressLine1?: SortOrderInput | SortOrder
    commAddressLine2?: SortOrderInput | SortOrder
    commCity?: SortOrderInput | SortOrder
    commState?: SortOrderInput | SortOrder
    commPincode?: SortOrderInput | SortOrder
    commCountry?: SortOrderInput | SortOrder
    useSameAddress?: SortOrder
    dlAccessToken?: SortOrderInput | SortOrder
    dlRefreshToken?: SortOrderInput | SortOrder
    dlTokenExpiresAt?: SortOrderInput | SortOrder
    ckycRefId?: SortOrderInput | SortOrder
    kycType?: SortOrderInput | SortOrder
    kraVerified?: SortOrder
    kraRefId?: SortOrderInput | SortOrder
    kraStatusCode?: SortOrderInput | SortOrder
    kraStatusDate?: SortOrderInput | SortOrder
    fatcaDeclaration?: SortOrderInput | SortOrder
    uccCode?: SortOrderInput | SortOrder
    fatcaSubmitted?: SortOrder
    elogAuthenticated?: SortOrder
    nseStatus?: SortOrderInput | SortOrder
    nseLastUpdated?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    currentStep?: IntWithAggregatesFilter<"User"> | number
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    encryptedPan?: StringNullableWithAggregatesFilter<"User"> | string | null
    encryptedBankAcc?: StringNullableWithAggregatesFilter<"User"> | string | null
    encryptedIfsc?: StringNullableWithAggregatesFilter<"User"> | string | null
    bankAccountType?: StringNullableWithAggregatesFilter<"User"> | string | null
    bankName?: StringNullableWithAggregatesFilter<"User"> | string | null
    bankBranchName?: StringNullableWithAggregatesFilter<"User"> | string | null
    bankAccountHolderName?: StringNullableWithAggregatesFilter<"User"> | string | null
    bankVerified?: BoolWithAggregatesFilter<"User"> | boolean
    bankVerifiedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    bankBeneficiaryName?: StringNullableWithAggregatesFilter<"User"> | string | null
    bankNameMatchScore?: IntNullableWithAggregatesFilter<"User"> | number | null
    upiId?: StringNullableWithAggregatesFilter<"User"> | string | null
    dob?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    maritalStatus?: EnumMaritalStatusNullableWithAggregatesFilter<"User"> | $Enums.MaritalStatus | null
    education?: EnumEducationLevelNullableWithAggregatesFilter<"User"> | $Enums.EducationLevel | null
    motherName?: StringNullableWithAggregatesFilter<"User"> | string | null
    fatherName?: StringNullableWithAggregatesFilter<"User"> | string | null
    gender?: EnumGenderNullableWithAggregatesFilter<"User"> | $Enums.Gender | null
    annualIncome?: EnumAnnualIncomeNullableWithAggregatesFilter<"User"> | $Enums.AnnualIncome | null
    incomeSource?: EnumIncomeSourceNullableWithAggregatesFilter<"User"> | $Enums.IncomeSource | null
    taxResidency?: EnumTaxResidencyNullableWithAggregatesFilter<"User"> | $Enums.TaxResidency | null
    residentialStatus?: EnumResidentialStatusNullableWithAggregatesFilter<"User"> | $Enums.ResidentialStatus | null
    occupationType?: EnumOccupationTypeNullableWithAggregatesFilter<"User"> | $Enums.OccupationType | null
    countryOfBirth?: StringNullableWithAggregatesFilter<"User"> | string | null
    nationality?: StringNullableWithAggregatesFilter<"User"> | string | null
    signatureUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    nomineeName?: StringNullableWithAggregatesFilter<"User"> | string | null
    nomineeRelation?: StringNullableWithAggregatesFilter<"User"> | string | null
    nomineeAllocation?: FloatNullableWithAggregatesFilter<"User"> | number | null
    nomineeIdType?: StringNullableWithAggregatesFilter<"User"> | string | null
    nomineeIdNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    nomineeEmail?: StringNullableWithAggregatesFilter<"User"> | string | null
    nomineeMobile?: StringNullableWithAggregatesFilter<"User"> | string | null
    nomineeAddressLine1?: StringNullableWithAggregatesFilter<"User"> | string | null
    nomineeAddressLine2?: StringNullableWithAggregatesFilter<"User"> | string | null
    nomineeCity?: StringNullableWithAggregatesFilter<"User"> | string | null
    nomineePincode?: StringNullableWithAggregatesFilter<"User"> | string | null
    nomineeCountry?: StringNullableWithAggregatesFilter<"User"> | string | null
    nomineeDob?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    languagePref?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    kycStatus?: EnumKycStatusWithAggregatesFilter<"User"> | $Enums.KycStatus
    digilockerKycId?: StringNullableWithAggregatesFilter<"User"> | string | null
    digilockerid?: StringNullableWithAggregatesFilter<"User"> | string | null
    aadhaarLinked?: BoolWithAggregatesFilter<"User"> | boolean
    aadhaarLastFour?: StringNullableWithAggregatesFilter<"User"> | string | null
    kycVerifiedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    addressLine1?: StringNullableWithAggregatesFilter<"User"> | string | null
    addressLine2?: StringNullableWithAggregatesFilter<"User"> | string | null
    city?: StringNullableWithAggregatesFilter<"User"> | string | null
    state?: StringNullableWithAggregatesFilter<"User"> | string | null
    pincode?: StringNullableWithAggregatesFilter<"User"> | string | null
    country?: StringNullableWithAggregatesFilter<"User"> | string | null
    commAddressLine1?: StringNullableWithAggregatesFilter<"User"> | string | null
    commAddressLine2?: StringNullableWithAggregatesFilter<"User"> | string | null
    commCity?: StringNullableWithAggregatesFilter<"User"> | string | null
    commState?: StringNullableWithAggregatesFilter<"User"> | string | null
    commPincode?: StringNullableWithAggregatesFilter<"User"> | string | null
    commCountry?: StringNullableWithAggregatesFilter<"User"> | string | null
    useSameAddress?: BoolWithAggregatesFilter<"User"> | boolean
    dlAccessToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    dlRefreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    dlTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    ckycRefId?: StringNullableWithAggregatesFilter<"User"> | string | null
    kycType?: EnumKycTypeNullableWithAggregatesFilter<"User"> | $Enums.KycType | null
    kraVerified?: BoolWithAggregatesFilter<"User"> | boolean
    kraRefId?: StringNullableWithAggregatesFilter<"User"> | string | null
    kraStatusCode?: StringNullableWithAggregatesFilter<"User"> | string | null
    kraStatusDate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    fatcaDeclaration?: JsonNullableWithAggregatesFilter<"User">
    uccCode?: StringNullableWithAggregatesFilter<"User"> | string | null
    fatcaSubmitted?: BoolWithAggregatesFilter<"User"> | boolean
    elogAuthenticated?: BoolWithAggregatesFilter<"User"> | boolean
    nseStatus?: StringNullableWithAggregatesFilter<"User"> | string | null
    nseLastUpdated?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type KycSessionWhereInput = {
    AND?: KycSessionWhereInput | KycSessionWhereInput[]
    OR?: KycSessionWhereInput[]
    NOT?: KycSessionWhereInput | KycSessionWhereInput[]
    id?: StringFilter<"KycSession"> | string
    userId?: StringFilter<"KycSession"> | string
    state?: StringFilter<"KycSession"> | string
    codeVerifier?: StringFilter<"KycSession"> | string
    status?: EnumKycSessionStatusFilter<"KycSession"> | $Enums.KycSessionStatus
    errorCode?: StringNullableFilter<"KycSession"> | string | null
    errorMessage?: StringNullableFilter<"KycSession"> | string | null
    createdAt?: DateTimeFilter<"KycSession"> | Date | string
    expiresAt?: DateTimeFilter<"KycSession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type KycSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    state?: SortOrder
    codeVerifier?: SortOrder
    status?: SortOrder
    errorCode?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type KycSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    state?: string
    AND?: KycSessionWhereInput | KycSessionWhereInput[]
    OR?: KycSessionWhereInput[]
    NOT?: KycSessionWhereInput | KycSessionWhereInput[]
    userId?: StringFilter<"KycSession"> | string
    codeVerifier?: StringFilter<"KycSession"> | string
    status?: EnumKycSessionStatusFilter<"KycSession"> | $Enums.KycSessionStatus
    errorCode?: StringNullableFilter<"KycSession"> | string | null
    errorMessage?: StringNullableFilter<"KycSession"> | string | null
    createdAt?: DateTimeFilter<"KycSession"> | Date | string
    expiresAt?: DateTimeFilter<"KycSession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "state">

  export type KycSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    state?: SortOrder
    codeVerifier?: SortOrder
    status?: SortOrder
    errorCode?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    _count?: KycSessionCountOrderByAggregateInput
    _max?: KycSessionMaxOrderByAggregateInput
    _min?: KycSessionMinOrderByAggregateInput
  }

  export type KycSessionScalarWhereWithAggregatesInput = {
    AND?: KycSessionScalarWhereWithAggregatesInput | KycSessionScalarWhereWithAggregatesInput[]
    OR?: KycSessionScalarWhereWithAggregatesInput[]
    NOT?: KycSessionScalarWhereWithAggregatesInput | KycSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"KycSession"> | string
    userId?: StringWithAggregatesFilter<"KycSession"> | string
    state?: StringWithAggregatesFilter<"KycSession"> | string
    codeVerifier?: StringWithAggregatesFilter<"KycSession"> | string
    status?: EnumKycSessionStatusWithAggregatesFilter<"KycSession"> | $Enums.KycSessionStatus
    errorCode?: StringNullableWithAggregatesFilter<"KycSession"> | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"KycSession"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"KycSession"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"KycSession"> | Date | string
  }

  export type SIPWhereInput = {
    AND?: SIPWhereInput | SIPWhereInput[]
    OR?: SIPWhereInput[]
    NOT?: SIPWhereInput | SIPWhereInput[]
    id?: StringFilter<"SIP"> | string
    userId?: StringFilter<"SIP"> | string
    fundName?: StringFilter<"SIP"> | string
    amcCode?: StringFilter<"SIP"> | string
    schemeCode?: StringFilter<"SIP"> | string
    amountPerInstallment?: FloatFilter<"SIP"> | number
    totalInstallments?: IntFilter<"SIP"> | number
    frequency?: EnumSIPFrequencyFilter<"SIP"> | $Enums.SIPFrequency
    startDate?: DateTimeFilter<"SIP"> | Date | string
    nextInstallment?: DateTimeNullableFilter<"SIP"> | Date | string | null
    endDate?: DateTimeNullableFilter<"SIP"> | Date | string | null
    status?: EnumSIPStatusFilter<"SIP"> | $Enums.SIPStatus
    createdAt?: DateTimeFilter<"SIP"> | Date | string
    updatedAt?: DateTimeFilter<"SIP"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    investments?: InvestmentListRelationFilter
  }

  export type SIPOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    fundName?: SortOrder
    amcCode?: SortOrder
    schemeCode?: SortOrder
    amountPerInstallment?: SortOrder
    totalInstallments?: SortOrder
    frequency?: SortOrder
    startDate?: SortOrder
    nextInstallment?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    investments?: InvestmentOrderByRelationAggregateInput
  }

  export type SIPWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SIPWhereInput | SIPWhereInput[]
    OR?: SIPWhereInput[]
    NOT?: SIPWhereInput | SIPWhereInput[]
    userId?: StringFilter<"SIP"> | string
    fundName?: StringFilter<"SIP"> | string
    amcCode?: StringFilter<"SIP"> | string
    schemeCode?: StringFilter<"SIP"> | string
    amountPerInstallment?: FloatFilter<"SIP"> | number
    totalInstallments?: IntFilter<"SIP"> | number
    frequency?: EnumSIPFrequencyFilter<"SIP"> | $Enums.SIPFrequency
    startDate?: DateTimeFilter<"SIP"> | Date | string
    nextInstallment?: DateTimeNullableFilter<"SIP"> | Date | string | null
    endDate?: DateTimeNullableFilter<"SIP"> | Date | string | null
    status?: EnumSIPStatusFilter<"SIP"> | $Enums.SIPStatus
    createdAt?: DateTimeFilter<"SIP"> | Date | string
    updatedAt?: DateTimeFilter<"SIP"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    investments?: InvestmentListRelationFilter
  }, "id">

  export type SIPOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    fundName?: SortOrder
    amcCode?: SortOrder
    schemeCode?: SortOrder
    amountPerInstallment?: SortOrder
    totalInstallments?: SortOrder
    frequency?: SortOrder
    startDate?: SortOrder
    nextInstallment?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SIPCountOrderByAggregateInput
    _avg?: SIPAvgOrderByAggregateInput
    _max?: SIPMaxOrderByAggregateInput
    _min?: SIPMinOrderByAggregateInput
    _sum?: SIPSumOrderByAggregateInput
  }

  export type SIPScalarWhereWithAggregatesInput = {
    AND?: SIPScalarWhereWithAggregatesInput | SIPScalarWhereWithAggregatesInput[]
    OR?: SIPScalarWhereWithAggregatesInput[]
    NOT?: SIPScalarWhereWithAggregatesInput | SIPScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SIP"> | string
    userId?: StringWithAggregatesFilter<"SIP"> | string
    fundName?: StringWithAggregatesFilter<"SIP"> | string
    amcCode?: StringWithAggregatesFilter<"SIP"> | string
    schemeCode?: StringWithAggregatesFilter<"SIP"> | string
    amountPerInstallment?: FloatWithAggregatesFilter<"SIP"> | number
    totalInstallments?: IntWithAggregatesFilter<"SIP"> | number
    frequency?: EnumSIPFrequencyWithAggregatesFilter<"SIP"> | $Enums.SIPFrequency
    startDate?: DateTimeWithAggregatesFilter<"SIP"> | Date | string
    nextInstallment?: DateTimeNullableWithAggregatesFilter<"SIP"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"SIP"> | Date | string | null
    status?: EnumSIPStatusWithAggregatesFilter<"SIP"> | $Enums.SIPStatus
    createdAt?: DateTimeWithAggregatesFilter<"SIP"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SIP"> | Date | string
  }

  export type InvestmentWhereInput = {
    AND?: InvestmentWhereInput | InvestmentWhereInput[]
    OR?: InvestmentWhereInput[]
    NOT?: InvestmentWhereInput | InvestmentWhereInput[]
    id?: StringFilter<"Investment"> | string
    userId?: StringFilter<"Investment"> | string
    sipId?: StringNullableFilter<"Investment"> | string | null
    fundName?: StringFilter<"Investment"> | string
    amcCode?: StringFilter<"Investment"> | string
    schemeCode?: StringFilter<"Investment"> | string
    units?: FloatFilter<"Investment"> | number
    navAtPurchase?: FloatFilter<"Investment"> | number
    currentNav?: FloatNullableFilter<"Investment"> | number | null
    type?: EnumInvestmentTypeFilter<"Investment"> | $Enums.InvestmentType
    status?: EnumInvestmentStatusFilter<"Investment"> | $Enums.InvestmentStatus
    purchaseDate?: DateTimeFilter<"Investment"> | Date | string
    createdAt?: DateTimeFilter<"Investment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sip?: XOR<SIPNullableScalarRelationFilter, SIPWhereInput> | null
    Payment?: PaymentListRelationFilter
  }

  export type InvestmentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    sipId?: SortOrderInput | SortOrder
    fundName?: SortOrder
    amcCode?: SortOrder
    schemeCode?: SortOrder
    units?: SortOrder
    navAtPurchase?: SortOrder
    currentNav?: SortOrderInput | SortOrder
    type?: SortOrder
    status?: SortOrder
    purchaseDate?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    sip?: SIPOrderByWithRelationInput
    Payment?: PaymentOrderByRelationAggregateInput
  }

  export type InvestmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvestmentWhereInput | InvestmentWhereInput[]
    OR?: InvestmentWhereInput[]
    NOT?: InvestmentWhereInput | InvestmentWhereInput[]
    userId?: StringFilter<"Investment"> | string
    sipId?: StringNullableFilter<"Investment"> | string | null
    fundName?: StringFilter<"Investment"> | string
    amcCode?: StringFilter<"Investment"> | string
    schemeCode?: StringFilter<"Investment"> | string
    units?: FloatFilter<"Investment"> | number
    navAtPurchase?: FloatFilter<"Investment"> | number
    currentNav?: FloatNullableFilter<"Investment"> | number | null
    type?: EnumInvestmentTypeFilter<"Investment"> | $Enums.InvestmentType
    status?: EnumInvestmentStatusFilter<"Investment"> | $Enums.InvestmentStatus
    purchaseDate?: DateTimeFilter<"Investment"> | Date | string
    createdAt?: DateTimeFilter<"Investment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sip?: XOR<SIPNullableScalarRelationFilter, SIPWhereInput> | null
    Payment?: PaymentListRelationFilter
  }, "id">

  export type InvestmentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    sipId?: SortOrderInput | SortOrder
    fundName?: SortOrder
    amcCode?: SortOrder
    schemeCode?: SortOrder
    units?: SortOrder
    navAtPurchase?: SortOrder
    currentNav?: SortOrderInput | SortOrder
    type?: SortOrder
    status?: SortOrder
    purchaseDate?: SortOrder
    createdAt?: SortOrder
    _count?: InvestmentCountOrderByAggregateInput
    _avg?: InvestmentAvgOrderByAggregateInput
    _max?: InvestmentMaxOrderByAggregateInput
    _min?: InvestmentMinOrderByAggregateInput
    _sum?: InvestmentSumOrderByAggregateInput
  }

  export type InvestmentScalarWhereWithAggregatesInput = {
    AND?: InvestmentScalarWhereWithAggregatesInput | InvestmentScalarWhereWithAggregatesInput[]
    OR?: InvestmentScalarWhereWithAggregatesInput[]
    NOT?: InvestmentScalarWhereWithAggregatesInput | InvestmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Investment"> | string
    userId?: StringWithAggregatesFilter<"Investment"> | string
    sipId?: StringNullableWithAggregatesFilter<"Investment"> | string | null
    fundName?: StringWithAggregatesFilter<"Investment"> | string
    amcCode?: StringWithAggregatesFilter<"Investment"> | string
    schemeCode?: StringWithAggregatesFilter<"Investment"> | string
    units?: FloatWithAggregatesFilter<"Investment"> | number
    navAtPurchase?: FloatWithAggregatesFilter<"Investment"> | number
    currentNav?: FloatNullableWithAggregatesFilter<"Investment"> | number | null
    type?: EnumInvestmentTypeWithAggregatesFilter<"Investment"> | $Enums.InvestmentType
    status?: EnumInvestmentStatusWithAggregatesFilter<"Investment"> | $Enums.InvestmentStatus
    purchaseDate?: DateTimeWithAggregatesFilter<"Investment"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Investment"> | Date | string
  }

  export type WatchlistWhereInput = {
    AND?: WatchlistWhereInput | WatchlistWhereInput[]
    OR?: WatchlistWhereInput[]
    NOT?: WatchlistWhereInput | WatchlistWhereInput[]
    id?: StringFilter<"Watchlist"> | string
    userId?: StringFilter<"Watchlist"> | string
    schemeCode?: StringFilter<"Watchlist"> | string
    amcCode?: StringFilter<"Watchlist"> | string
    fundName?: StringFilter<"Watchlist"> | string
    category?: StringNullableFilter<"Watchlist"> | string | null
    currentNav?: FloatNullableFilter<"Watchlist"> | number | null
    addedAt?: DateTimeFilter<"Watchlist"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WatchlistOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    schemeCode?: SortOrder
    amcCode?: SortOrder
    fundName?: SortOrder
    category?: SortOrderInput | SortOrder
    currentNav?: SortOrderInput | SortOrder
    addedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WatchlistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_schemeCode?: WatchlistUserIdSchemeCodeCompoundUniqueInput
    AND?: WatchlistWhereInput | WatchlistWhereInput[]
    OR?: WatchlistWhereInput[]
    NOT?: WatchlistWhereInput | WatchlistWhereInput[]
    userId?: StringFilter<"Watchlist"> | string
    schemeCode?: StringFilter<"Watchlist"> | string
    amcCode?: StringFilter<"Watchlist"> | string
    fundName?: StringFilter<"Watchlist"> | string
    category?: StringNullableFilter<"Watchlist"> | string | null
    currentNav?: FloatNullableFilter<"Watchlist"> | number | null
    addedAt?: DateTimeFilter<"Watchlist"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_schemeCode">

  export type WatchlistOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    schemeCode?: SortOrder
    amcCode?: SortOrder
    fundName?: SortOrder
    category?: SortOrderInput | SortOrder
    currentNav?: SortOrderInput | SortOrder
    addedAt?: SortOrder
    _count?: WatchlistCountOrderByAggregateInput
    _avg?: WatchlistAvgOrderByAggregateInput
    _max?: WatchlistMaxOrderByAggregateInput
    _min?: WatchlistMinOrderByAggregateInput
    _sum?: WatchlistSumOrderByAggregateInput
  }

  export type WatchlistScalarWhereWithAggregatesInput = {
    AND?: WatchlistScalarWhereWithAggregatesInput | WatchlistScalarWhereWithAggregatesInput[]
    OR?: WatchlistScalarWhereWithAggregatesInput[]
    NOT?: WatchlistScalarWhereWithAggregatesInput | WatchlistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Watchlist"> | string
    userId?: StringWithAggregatesFilter<"Watchlist"> | string
    schemeCode?: StringWithAggregatesFilter<"Watchlist"> | string
    amcCode?: StringWithAggregatesFilter<"Watchlist"> | string
    fundName?: StringWithAggregatesFilter<"Watchlist"> | string
    category?: StringNullableWithAggregatesFilter<"Watchlist"> | string | null
    currentNav?: FloatNullableWithAggregatesFilter<"Watchlist"> | number | null
    addedAt?: DateTimeWithAggregatesFilter<"Watchlist"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    investmentId?: StringNullableFilter<"Payment"> | string | null
    txnRef?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    mode?: EnumPaymentModeFilter<"Payment"> | $Enums.PaymentMode
    razorpayOrderId?: StringNullableFilter<"Payment"> | string | null
    upiRefId?: StringNullableFilter<"Payment"> | string | null
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    investment?: XOR<InvestmentNullableScalarRelationFilter, InvestmentWhereInput> | null
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    investmentId?: SortOrderInput | SortOrder
    txnRef?: SortOrder
    amount?: SortOrder
    mode?: SortOrder
    razorpayOrderId?: SortOrderInput | SortOrder
    upiRefId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    investment?: InvestmentOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    userId?: StringFilter<"Payment"> | string
    investmentId?: StringNullableFilter<"Payment"> | string | null
    txnRef?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    mode?: EnumPaymentModeFilter<"Payment"> | $Enums.PaymentMode
    razorpayOrderId?: StringNullableFilter<"Payment"> | string | null
    upiRefId?: StringNullableFilter<"Payment"> | string | null
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    investment?: XOR<InvestmentNullableScalarRelationFilter, InvestmentWhereInput> | null
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    investmentId?: SortOrderInput | SortOrder
    txnRef?: SortOrder
    amount?: SortOrder
    mode?: SortOrder
    razorpayOrderId?: SortOrderInput | SortOrder
    upiRefId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    userId?: StringWithAggregatesFilter<"Payment"> | string
    investmentId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    txnRef?: StringWithAggregatesFilter<"Payment"> | string
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    mode?: EnumPaymentModeWithAggregatesFilter<"Payment"> | $Enums.PaymentMode
    razorpayOrderId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    upiRefId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    name?: StringFilter<"Admin"> | string
    role?: EnumAdminRoleFilter<"Admin"> | $Enums.AdminRole
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    blogs?: BlogListRelationFilter
    stories?: StoryListRelationFilter
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    blogs?: BlogOrderByRelationAggregateInput
    stories?: StoryOrderByRelationAggregateInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    password?: StringFilter<"Admin"> | string
    name?: StringFilter<"Admin"> | string
    role?: EnumAdminRoleFilter<"Admin"> | $Enums.AdminRole
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    blogs?: BlogListRelationFilter
    stories?: StoryListRelationFilter
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    name?: StringWithAggregatesFilter<"Admin"> | string
    role?: EnumAdminRoleWithAggregatesFilter<"Admin"> | $Enums.AdminRole
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type BlogWhereInput = {
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    id?: StringFilter<"Blog"> | string
    title?: StringFilter<"Blog"> | string
    slug?: StringFilter<"Blog"> | string
    excerpt?: StringNullableFilter<"Blog"> | string | null
    coverImage?: StringNullableFilter<"Blog"> | string | null
    content?: StringFilter<"Blog"> | string
    tags?: StringNullableListFilter<"Blog">
    status?: EnumBlogStatusFilter<"Blog"> | $Enums.BlogStatus
    authorId?: StringFilter<"Blog"> | string
    views?: IntFilter<"Blog"> | number
    publishedAt?: DateTimeNullableFilter<"Blog"> | Date | string | null
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
    author?: XOR<AdminScalarRelationFilter, AdminWhereInput>
  }

  export type BlogOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    content?: SortOrder
    tags?: SortOrder
    status?: SortOrder
    authorId?: SortOrder
    views?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    author?: AdminOrderByWithRelationInput
  }

  export type BlogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    title?: StringFilter<"Blog"> | string
    excerpt?: StringNullableFilter<"Blog"> | string | null
    coverImage?: StringNullableFilter<"Blog"> | string | null
    content?: StringFilter<"Blog"> | string
    tags?: StringNullableListFilter<"Blog">
    status?: EnumBlogStatusFilter<"Blog"> | $Enums.BlogStatus
    authorId?: StringFilter<"Blog"> | string
    views?: IntFilter<"Blog"> | number
    publishedAt?: DateTimeNullableFilter<"Blog"> | Date | string | null
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
    author?: XOR<AdminScalarRelationFilter, AdminWhereInput>
  }, "id" | "slug">

  export type BlogOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    content?: SortOrder
    tags?: SortOrder
    status?: SortOrder
    authorId?: SortOrder
    views?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BlogCountOrderByAggregateInput
    _avg?: BlogAvgOrderByAggregateInput
    _max?: BlogMaxOrderByAggregateInput
    _min?: BlogMinOrderByAggregateInput
    _sum?: BlogSumOrderByAggregateInput
  }

  export type BlogScalarWhereWithAggregatesInput = {
    AND?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    OR?: BlogScalarWhereWithAggregatesInput[]
    NOT?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Blog"> | string
    title?: StringWithAggregatesFilter<"Blog"> | string
    slug?: StringWithAggregatesFilter<"Blog"> | string
    excerpt?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    coverImage?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    content?: StringWithAggregatesFilter<"Blog"> | string
    tags?: StringNullableListFilter<"Blog">
    status?: EnumBlogStatusWithAggregatesFilter<"Blog"> | $Enums.BlogStatus
    authorId?: StringWithAggregatesFilter<"Blog"> | string
    views?: IntWithAggregatesFilter<"Blog"> | number
    publishedAt?: DateTimeNullableWithAggregatesFilter<"Blog"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
  }

  export type StoryWhereInput = {
    AND?: StoryWhereInput | StoryWhereInput[]
    OR?: StoryWhereInput[]
    NOT?: StoryWhereInput | StoryWhereInput[]
    id?: StringFilter<"Story"> | string
    label?: StringFilter<"Story"> | string
    heading?: StringFilter<"Story"> | string
    teaser?: StringFilter<"Story"> | string
    imageUrl?: StringFilter<"Story"> | string
    content?: StringFilter<"Story"> | string
    status?: EnumStoryStatusFilter<"Story"> | $Enums.StoryStatus
    authorId?: StringFilter<"Story"> | string
    views?: IntFilter<"Story"> | number
    publishedAt?: DateTimeNullableFilter<"Story"> | Date | string | null
    createdAt?: DateTimeFilter<"Story"> | Date | string
    updatedAt?: DateTimeFilter<"Story"> | Date | string
    author?: XOR<AdminScalarRelationFilter, AdminWhereInput>
  }

  export type StoryOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    heading?: SortOrder
    teaser?: SortOrder
    imageUrl?: SortOrder
    content?: SortOrder
    status?: SortOrder
    authorId?: SortOrder
    views?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    author?: AdminOrderByWithRelationInput
  }

  export type StoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StoryWhereInput | StoryWhereInput[]
    OR?: StoryWhereInput[]
    NOT?: StoryWhereInput | StoryWhereInput[]
    label?: StringFilter<"Story"> | string
    heading?: StringFilter<"Story"> | string
    teaser?: StringFilter<"Story"> | string
    imageUrl?: StringFilter<"Story"> | string
    content?: StringFilter<"Story"> | string
    status?: EnumStoryStatusFilter<"Story"> | $Enums.StoryStatus
    authorId?: StringFilter<"Story"> | string
    views?: IntFilter<"Story"> | number
    publishedAt?: DateTimeNullableFilter<"Story"> | Date | string | null
    createdAt?: DateTimeFilter<"Story"> | Date | string
    updatedAt?: DateTimeFilter<"Story"> | Date | string
    author?: XOR<AdminScalarRelationFilter, AdminWhereInput>
  }, "id">

  export type StoryOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    heading?: SortOrder
    teaser?: SortOrder
    imageUrl?: SortOrder
    content?: SortOrder
    status?: SortOrder
    authorId?: SortOrder
    views?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StoryCountOrderByAggregateInput
    _avg?: StoryAvgOrderByAggregateInput
    _max?: StoryMaxOrderByAggregateInput
    _min?: StoryMinOrderByAggregateInput
    _sum?: StorySumOrderByAggregateInput
  }

  export type StoryScalarWhereWithAggregatesInput = {
    AND?: StoryScalarWhereWithAggregatesInput | StoryScalarWhereWithAggregatesInput[]
    OR?: StoryScalarWhereWithAggregatesInput[]
    NOT?: StoryScalarWhereWithAggregatesInput | StoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Story"> | string
    label?: StringWithAggregatesFilter<"Story"> | string
    heading?: StringWithAggregatesFilter<"Story"> | string
    teaser?: StringWithAggregatesFilter<"Story"> | string
    imageUrl?: StringWithAggregatesFilter<"Story"> | string
    content?: StringWithAggregatesFilter<"Story"> | string
    status?: EnumStoryStatusWithAggregatesFilter<"Story"> | $Enums.StoryStatus
    authorId?: StringWithAggregatesFilter<"Story"> | string
    views?: IntWithAggregatesFilter<"Story"> | number
    publishedAt?: DateTimeNullableWithAggregatesFilter<"Story"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Story"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Story"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    fullName: string
    email: string
    currentStep?: number
    phone?: string | null
    encryptedPan?: string | null
    encryptedBankAcc?: string | null
    encryptedIfsc?: string | null
    bankAccountType?: string | null
    bankName?: string | null
    bankBranchName?: string | null
    bankAccountHolderName?: string | null
    bankVerified?: boolean
    bankVerifiedAt?: Date | string | null
    bankBeneficiaryName?: string | null
    bankNameMatchScore?: number | null
    upiId?: string | null
    dob?: Date | string | null
    maritalStatus?: $Enums.MaritalStatus | null
    education?: $Enums.EducationLevel | null
    motherName?: string | null
    fatherName?: string | null
    gender?: $Enums.Gender | null
    annualIncome?: $Enums.AnnualIncome | null
    incomeSource?: $Enums.IncomeSource | null
    taxResidency?: $Enums.TaxResidency | null
    residentialStatus?: $Enums.ResidentialStatus | null
    occupationType?: $Enums.OccupationType | null
    countryOfBirth?: string | null
    nationality?: string | null
    signatureUrl?: string | null
    nomineeName?: string | null
    nomineeRelation?: string | null
    nomineeAllocation?: number | null
    nomineeIdType?: string | null
    nomineeIdNumber?: string | null
    nomineeEmail?: string | null
    nomineeMobile?: string | null
    nomineeAddressLine1?: string | null
    nomineeAddressLine2?: string | null
    nomineeCity?: string | null
    nomineePincode?: string | null
    nomineeCountry?: string | null
    nomineeDob?: Date | string | null
    languagePref?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kycStatus?: $Enums.KycStatus
    digilockerKycId?: string | null
    digilockerid?: string | null
    aadhaarLinked?: boolean
    aadhaarLastFour?: string | null
    kycVerifiedAt?: Date | string | null
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    country?: string | null
    commAddressLine1?: string | null
    commAddressLine2?: string | null
    commCity?: string | null
    commState?: string | null
    commPincode?: string | null
    commCountry?: string | null
    useSameAddress?: boolean
    dlAccessToken?: string | null
    dlRefreshToken?: string | null
    dlTokenExpiresAt?: Date | string | null
    ckycRefId?: string | null
    kycType?: $Enums.KycType | null
    kraVerified?: boolean
    kraRefId?: string | null
    kraStatusCode?: string | null
    kraStatusDate?: Date | string | null
    fatcaDeclaration?: NullableJsonNullValueInput | InputJsonValue
    uccCode?: string | null
    fatcaSubmitted?: boolean
    elogAuthenticated?: boolean
    nseStatus?: string | null
    nseLastUpdated?: Date | string | null
    sips?: SIPCreateNestedManyWithoutUserInput
    investments?: InvestmentCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    kycSessions?: KycSessionCreateNestedManyWithoutUserInput
    watchlist?: WatchlistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    fullName: string
    email: string
    currentStep?: number
    phone?: string | null
    encryptedPan?: string | null
    encryptedBankAcc?: string | null
    encryptedIfsc?: string | null
    bankAccountType?: string | null
    bankName?: string | null
    bankBranchName?: string | null
    bankAccountHolderName?: string | null
    bankVerified?: boolean
    bankVerifiedAt?: Date | string | null
    bankBeneficiaryName?: string | null
    bankNameMatchScore?: number | null
    upiId?: string | null
    dob?: Date | string | null
    maritalStatus?: $Enums.MaritalStatus | null
    education?: $Enums.EducationLevel | null
    motherName?: string | null
    fatherName?: string | null
    gender?: $Enums.Gender | null
    annualIncome?: $Enums.AnnualIncome | null
    incomeSource?: $Enums.IncomeSource | null
    taxResidency?: $Enums.TaxResidency | null
    residentialStatus?: $Enums.ResidentialStatus | null
    occupationType?: $Enums.OccupationType | null
    countryOfBirth?: string | null
    nationality?: string | null
    signatureUrl?: string | null
    nomineeName?: string | null
    nomineeRelation?: string | null
    nomineeAllocation?: number | null
    nomineeIdType?: string | null
    nomineeIdNumber?: string | null
    nomineeEmail?: string | null
    nomineeMobile?: string | null
    nomineeAddressLine1?: string | null
    nomineeAddressLine2?: string | null
    nomineeCity?: string | null
    nomineePincode?: string | null
    nomineeCountry?: string | null
    nomineeDob?: Date | string | null
    languagePref?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kycStatus?: $Enums.KycStatus
    digilockerKycId?: string | null
    digilockerid?: string | null
    aadhaarLinked?: boolean
    aadhaarLastFour?: string | null
    kycVerifiedAt?: Date | string | null
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    country?: string | null
    commAddressLine1?: string | null
    commAddressLine2?: string | null
    commCity?: string | null
    commState?: string | null
    commPincode?: string | null
    commCountry?: string | null
    useSameAddress?: boolean
    dlAccessToken?: string | null
    dlRefreshToken?: string | null
    dlTokenExpiresAt?: Date | string | null
    ckycRefId?: string | null
    kycType?: $Enums.KycType | null
    kraVerified?: boolean
    kraRefId?: string | null
    kraStatusCode?: string | null
    kraStatusDate?: Date | string | null
    fatcaDeclaration?: NullableJsonNullValueInput | InputJsonValue
    uccCode?: string | null
    fatcaSubmitted?: boolean
    elogAuthenticated?: boolean
    nseStatus?: string | null
    nseLastUpdated?: Date | string | null
    sips?: SIPUncheckedCreateNestedManyWithoutUserInput
    investments?: InvestmentUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    kycSessions?: KycSessionUncheckedCreateNestedManyWithoutUserInput
    watchlist?: WatchlistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    currentStep?: IntFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedPan?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedBankAcc?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedIfsc?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountType?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranchName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolderName?: NullableStringFieldUpdateOperationsInput | string | null
    bankVerified?: BoolFieldUpdateOperationsInput | boolean
    bankVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bankBeneficiaryName?: NullableStringFieldUpdateOperationsInput | string | null
    bankNameMatchScore?: NullableIntFieldUpdateOperationsInput | number | null
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    education?: NullableEnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    annualIncome?: NullableEnumAnnualIncomeFieldUpdateOperationsInput | $Enums.AnnualIncome | null
    incomeSource?: NullableEnumIncomeSourceFieldUpdateOperationsInput | $Enums.IncomeSource | null
    taxResidency?: NullableEnumTaxResidencyFieldUpdateOperationsInput | $Enums.TaxResidency | null
    residentialStatus?: NullableEnumResidentialStatusFieldUpdateOperationsInput | $Enums.ResidentialStatus | null
    occupationType?: NullableEnumOccupationTypeFieldUpdateOperationsInput | $Enums.OccupationType | null
    countryOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    signatureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeName?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeRelation?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeAllocation?: NullableFloatFieldUpdateOperationsInput | number | null
    nomineeIdType?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeIdNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeMobile?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeAddressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeAddressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeCity?: NullableStringFieldUpdateOperationsInput | string | null
    nomineePincode?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeCountry?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeDob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    languagePref?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    digilockerKycId?: NullableStringFieldUpdateOperationsInput | string | null
    digilockerid?: NullableStringFieldUpdateOperationsInput | string | null
    aadhaarLinked?: BoolFieldUpdateOperationsInput | boolean
    aadhaarLastFour?: NullableStringFieldUpdateOperationsInput | string | null
    kycVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    commAddressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    commAddressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    commCity?: NullableStringFieldUpdateOperationsInput | string | null
    commState?: NullableStringFieldUpdateOperationsInput | string | null
    commPincode?: NullableStringFieldUpdateOperationsInput | string | null
    commCountry?: NullableStringFieldUpdateOperationsInput | string | null
    useSameAddress?: BoolFieldUpdateOperationsInput | boolean
    dlAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    dlRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    dlTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ckycRefId?: NullableStringFieldUpdateOperationsInput | string | null
    kycType?: NullableEnumKycTypeFieldUpdateOperationsInput | $Enums.KycType | null
    kraVerified?: BoolFieldUpdateOperationsInput | boolean
    kraRefId?: NullableStringFieldUpdateOperationsInput | string | null
    kraStatusCode?: NullableStringFieldUpdateOperationsInput | string | null
    kraStatusDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fatcaDeclaration?: NullableJsonNullValueInput | InputJsonValue
    uccCode?: NullableStringFieldUpdateOperationsInput | string | null
    fatcaSubmitted?: BoolFieldUpdateOperationsInput | boolean
    elogAuthenticated?: BoolFieldUpdateOperationsInput | boolean
    nseStatus?: NullableStringFieldUpdateOperationsInput | string | null
    nseLastUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sips?: SIPUpdateManyWithoutUserNestedInput
    investments?: InvestmentUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    kycSessions?: KycSessionUpdateManyWithoutUserNestedInput
    watchlist?: WatchlistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    currentStep?: IntFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedPan?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedBankAcc?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedIfsc?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountType?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranchName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolderName?: NullableStringFieldUpdateOperationsInput | string | null
    bankVerified?: BoolFieldUpdateOperationsInput | boolean
    bankVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bankBeneficiaryName?: NullableStringFieldUpdateOperationsInput | string | null
    bankNameMatchScore?: NullableIntFieldUpdateOperationsInput | number | null
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    education?: NullableEnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    annualIncome?: NullableEnumAnnualIncomeFieldUpdateOperationsInput | $Enums.AnnualIncome | null
    incomeSource?: NullableEnumIncomeSourceFieldUpdateOperationsInput | $Enums.IncomeSource | null
    taxResidency?: NullableEnumTaxResidencyFieldUpdateOperationsInput | $Enums.TaxResidency | null
    residentialStatus?: NullableEnumResidentialStatusFieldUpdateOperationsInput | $Enums.ResidentialStatus | null
    occupationType?: NullableEnumOccupationTypeFieldUpdateOperationsInput | $Enums.OccupationType | null
    countryOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    signatureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeName?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeRelation?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeAllocation?: NullableFloatFieldUpdateOperationsInput | number | null
    nomineeIdType?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeIdNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeMobile?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeAddressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeAddressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeCity?: NullableStringFieldUpdateOperationsInput | string | null
    nomineePincode?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeCountry?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeDob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    languagePref?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    digilockerKycId?: NullableStringFieldUpdateOperationsInput | string | null
    digilockerid?: NullableStringFieldUpdateOperationsInput | string | null
    aadhaarLinked?: BoolFieldUpdateOperationsInput | boolean
    aadhaarLastFour?: NullableStringFieldUpdateOperationsInput | string | null
    kycVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    commAddressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    commAddressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    commCity?: NullableStringFieldUpdateOperationsInput | string | null
    commState?: NullableStringFieldUpdateOperationsInput | string | null
    commPincode?: NullableStringFieldUpdateOperationsInput | string | null
    commCountry?: NullableStringFieldUpdateOperationsInput | string | null
    useSameAddress?: BoolFieldUpdateOperationsInput | boolean
    dlAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    dlRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    dlTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ckycRefId?: NullableStringFieldUpdateOperationsInput | string | null
    kycType?: NullableEnumKycTypeFieldUpdateOperationsInput | $Enums.KycType | null
    kraVerified?: BoolFieldUpdateOperationsInput | boolean
    kraRefId?: NullableStringFieldUpdateOperationsInput | string | null
    kraStatusCode?: NullableStringFieldUpdateOperationsInput | string | null
    kraStatusDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fatcaDeclaration?: NullableJsonNullValueInput | InputJsonValue
    uccCode?: NullableStringFieldUpdateOperationsInput | string | null
    fatcaSubmitted?: BoolFieldUpdateOperationsInput | boolean
    elogAuthenticated?: BoolFieldUpdateOperationsInput | boolean
    nseStatus?: NullableStringFieldUpdateOperationsInput | string | null
    nseLastUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sips?: SIPUncheckedUpdateManyWithoutUserNestedInput
    investments?: InvestmentUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    kycSessions?: KycSessionUncheckedUpdateManyWithoutUserNestedInput
    watchlist?: WatchlistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    fullName: string
    email: string
    currentStep?: number
    phone?: string | null
    encryptedPan?: string | null
    encryptedBankAcc?: string | null
    encryptedIfsc?: string | null
    bankAccountType?: string | null
    bankName?: string | null
    bankBranchName?: string | null
    bankAccountHolderName?: string | null
    bankVerified?: boolean
    bankVerifiedAt?: Date | string | null
    bankBeneficiaryName?: string | null
    bankNameMatchScore?: number | null
    upiId?: string | null
    dob?: Date | string | null
    maritalStatus?: $Enums.MaritalStatus | null
    education?: $Enums.EducationLevel | null
    motherName?: string | null
    fatherName?: string | null
    gender?: $Enums.Gender | null
    annualIncome?: $Enums.AnnualIncome | null
    incomeSource?: $Enums.IncomeSource | null
    taxResidency?: $Enums.TaxResidency | null
    residentialStatus?: $Enums.ResidentialStatus | null
    occupationType?: $Enums.OccupationType | null
    countryOfBirth?: string | null
    nationality?: string | null
    signatureUrl?: string | null
    nomineeName?: string | null
    nomineeRelation?: string | null
    nomineeAllocation?: number | null
    nomineeIdType?: string | null
    nomineeIdNumber?: string | null
    nomineeEmail?: string | null
    nomineeMobile?: string | null
    nomineeAddressLine1?: string | null
    nomineeAddressLine2?: string | null
    nomineeCity?: string | null
    nomineePincode?: string | null
    nomineeCountry?: string | null
    nomineeDob?: Date | string | null
    languagePref?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kycStatus?: $Enums.KycStatus
    digilockerKycId?: string | null
    digilockerid?: string | null
    aadhaarLinked?: boolean
    aadhaarLastFour?: string | null
    kycVerifiedAt?: Date | string | null
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    country?: string | null
    commAddressLine1?: string | null
    commAddressLine2?: string | null
    commCity?: string | null
    commState?: string | null
    commPincode?: string | null
    commCountry?: string | null
    useSameAddress?: boolean
    dlAccessToken?: string | null
    dlRefreshToken?: string | null
    dlTokenExpiresAt?: Date | string | null
    ckycRefId?: string | null
    kycType?: $Enums.KycType | null
    kraVerified?: boolean
    kraRefId?: string | null
    kraStatusCode?: string | null
    kraStatusDate?: Date | string | null
    fatcaDeclaration?: NullableJsonNullValueInput | InputJsonValue
    uccCode?: string | null
    fatcaSubmitted?: boolean
    elogAuthenticated?: boolean
    nseStatus?: string | null
    nseLastUpdated?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    currentStep?: IntFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedPan?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedBankAcc?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedIfsc?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountType?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranchName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolderName?: NullableStringFieldUpdateOperationsInput | string | null
    bankVerified?: BoolFieldUpdateOperationsInput | boolean
    bankVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bankBeneficiaryName?: NullableStringFieldUpdateOperationsInput | string | null
    bankNameMatchScore?: NullableIntFieldUpdateOperationsInput | number | null
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    education?: NullableEnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    annualIncome?: NullableEnumAnnualIncomeFieldUpdateOperationsInput | $Enums.AnnualIncome | null
    incomeSource?: NullableEnumIncomeSourceFieldUpdateOperationsInput | $Enums.IncomeSource | null
    taxResidency?: NullableEnumTaxResidencyFieldUpdateOperationsInput | $Enums.TaxResidency | null
    residentialStatus?: NullableEnumResidentialStatusFieldUpdateOperationsInput | $Enums.ResidentialStatus | null
    occupationType?: NullableEnumOccupationTypeFieldUpdateOperationsInput | $Enums.OccupationType | null
    countryOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    signatureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeName?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeRelation?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeAllocation?: NullableFloatFieldUpdateOperationsInput | number | null
    nomineeIdType?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeIdNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeMobile?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeAddressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeAddressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeCity?: NullableStringFieldUpdateOperationsInput | string | null
    nomineePincode?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeCountry?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeDob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    languagePref?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    digilockerKycId?: NullableStringFieldUpdateOperationsInput | string | null
    digilockerid?: NullableStringFieldUpdateOperationsInput | string | null
    aadhaarLinked?: BoolFieldUpdateOperationsInput | boolean
    aadhaarLastFour?: NullableStringFieldUpdateOperationsInput | string | null
    kycVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    commAddressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    commAddressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    commCity?: NullableStringFieldUpdateOperationsInput | string | null
    commState?: NullableStringFieldUpdateOperationsInput | string | null
    commPincode?: NullableStringFieldUpdateOperationsInput | string | null
    commCountry?: NullableStringFieldUpdateOperationsInput | string | null
    useSameAddress?: BoolFieldUpdateOperationsInput | boolean
    dlAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    dlRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    dlTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ckycRefId?: NullableStringFieldUpdateOperationsInput | string | null
    kycType?: NullableEnumKycTypeFieldUpdateOperationsInput | $Enums.KycType | null
    kraVerified?: BoolFieldUpdateOperationsInput | boolean
    kraRefId?: NullableStringFieldUpdateOperationsInput | string | null
    kraStatusCode?: NullableStringFieldUpdateOperationsInput | string | null
    kraStatusDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fatcaDeclaration?: NullableJsonNullValueInput | InputJsonValue
    uccCode?: NullableStringFieldUpdateOperationsInput | string | null
    fatcaSubmitted?: BoolFieldUpdateOperationsInput | boolean
    elogAuthenticated?: BoolFieldUpdateOperationsInput | boolean
    nseStatus?: NullableStringFieldUpdateOperationsInput | string | null
    nseLastUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    currentStep?: IntFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedPan?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedBankAcc?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedIfsc?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountType?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranchName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolderName?: NullableStringFieldUpdateOperationsInput | string | null
    bankVerified?: BoolFieldUpdateOperationsInput | boolean
    bankVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bankBeneficiaryName?: NullableStringFieldUpdateOperationsInput | string | null
    bankNameMatchScore?: NullableIntFieldUpdateOperationsInput | number | null
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    education?: NullableEnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    annualIncome?: NullableEnumAnnualIncomeFieldUpdateOperationsInput | $Enums.AnnualIncome | null
    incomeSource?: NullableEnumIncomeSourceFieldUpdateOperationsInput | $Enums.IncomeSource | null
    taxResidency?: NullableEnumTaxResidencyFieldUpdateOperationsInput | $Enums.TaxResidency | null
    residentialStatus?: NullableEnumResidentialStatusFieldUpdateOperationsInput | $Enums.ResidentialStatus | null
    occupationType?: NullableEnumOccupationTypeFieldUpdateOperationsInput | $Enums.OccupationType | null
    countryOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    signatureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeName?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeRelation?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeAllocation?: NullableFloatFieldUpdateOperationsInput | number | null
    nomineeIdType?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeIdNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeMobile?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeAddressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeAddressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeCity?: NullableStringFieldUpdateOperationsInput | string | null
    nomineePincode?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeCountry?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeDob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    languagePref?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    digilockerKycId?: NullableStringFieldUpdateOperationsInput | string | null
    digilockerid?: NullableStringFieldUpdateOperationsInput | string | null
    aadhaarLinked?: BoolFieldUpdateOperationsInput | boolean
    aadhaarLastFour?: NullableStringFieldUpdateOperationsInput | string | null
    kycVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    commAddressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    commAddressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    commCity?: NullableStringFieldUpdateOperationsInput | string | null
    commState?: NullableStringFieldUpdateOperationsInput | string | null
    commPincode?: NullableStringFieldUpdateOperationsInput | string | null
    commCountry?: NullableStringFieldUpdateOperationsInput | string | null
    useSameAddress?: BoolFieldUpdateOperationsInput | boolean
    dlAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    dlRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    dlTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ckycRefId?: NullableStringFieldUpdateOperationsInput | string | null
    kycType?: NullableEnumKycTypeFieldUpdateOperationsInput | $Enums.KycType | null
    kraVerified?: BoolFieldUpdateOperationsInput | boolean
    kraRefId?: NullableStringFieldUpdateOperationsInput | string | null
    kraStatusCode?: NullableStringFieldUpdateOperationsInput | string | null
    kraStatusDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fatcaDeclaration?: NullableJsonNullValueInput | InputJsonValue
    uccCode?: NullableStringFieldUpdateOperationsInput | string | null
    fatcaSubmitted?: BoolFieldUpdateOperationsInput | boolean
    elogAuthenticated?: BoolFieldUpdateOperationsInput | boolean
    nseStatus?: NullableStringFieldUpdateOperationsInput | string | null
    nseLastUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type KycSessionCreateInput = {
    id?: string
    state: string
    codeVerifier: string
    status?: $Enums.KycSessionStatus
    errorCode?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
    expiresAt: Date | string
    user: UserCreateNestedOneWithoutKycSessionsInput
  }

  export type KycSessionUncheckedCreateInput = {
    id?: string
    userId: string
    state: string
    codeVerifier: string
    status?: $Enums.KycSessionStatus
    errorCode?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type KycSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    codeVerifier?: StringFieldUpdateOperationsInput | string
    status?: EnumKycSessionStatusFieldUpdateOperationsInput | $Enums.KycSessionStatus
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutKycSessionsNestedInput
  }

  export type KycSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    codeVerifier?: StringFieldUpdateOperationsInput | string
    status?: EnumKycSessionStatusFieldUpdateOperationsInput | $Enums.KycSessionStatus
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KycSessionCreateManyInput = {
    id?: string
    userId: string
    state: string
    codeVerifier: string
    status?: $Enums.KycSessionStatus
    errorCode?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type KycSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    codeVerifier?: StringFieldUpdateOperationsInput | string
    status?: EnumKycSessionStatusFieldUpdateOperationsInput | $Enums.KycSessionStatus
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KycSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    codeVerifier?: StringFieldUpdateOperationsInput | string
    status?: EnumKycSessionStatusFieldUpdateOperationsInput | $Enums.KycSessionStatus
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SIPCreateInput = {
    id?: string
    fundName: string
    amcCode: string
    schemeCode: string
    amountPerInstallment: number
    totalInstallments: number
    frequency: $Enums.SIPFrequency
    startDate: Date | string
    nextInstallment?: Date | string | null
    endDate?: Date | string | null
    status?: $Enums.SIPStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSipsInput
    investments?: InvestmentCreateNestedManyWithoutSipInput
  }

  export type SIPUncheckedCreateInput = {
    id?: string
    userId: string
    fundName: string
    amcCode: string
    schemeCode: string
    amountPerInstallment: number
    totalInstallments: number
    frequency: $Enums.SIPFrequency
    startDate: Date | string
    nextInstallment?: Date | string | null
    endDate?: Date | string | null
    status?: $Enums.SIPStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    investments?: InvestmentUncheckedCreateNestedManyWithoutSipInput
  }

  export type SIPUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fundName?: StringFieldUpdateOperationsInput | string
    amcCode?: StringFieldUpdateOperationsInput | string
    schemeCode?: StringFieldUpdateOperationsInput | string
    amountPerInstallment?: FloatFieldUpdateOperationsInput | number
    totalInstallments?: IntFieldUpdateOperationsInput | number
    frequency?: EnumSIPFrequencyFieldUpdateOperationsInput | $Enums.SIPFrequency
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextInstallment?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSIPStatusFieldUpdateOperationsInput | $Enums.SIPStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSipsNestedInput
    investments?: InvestmentUpdateManyWithoutSipNestedInput
  }

  export type SIPUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fundName?: StringFieldUpdateOperationsInput | string
    amcCode?: StringFieldUpdateOperationsInput | string
    schemeCode?: StringFieldUpdateOperationsInput | string
    amountPerInstallment?: FloatFieldUpdateOperationsInput | number
    totalInstallments?: IntFieldUpdateOperationsInput | number
    frequency?: EnumSIPFrequencyFieldUpdateOperationsInput | $Enums.SIPFrequency
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextInstallment?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSIPStatusFieldUpdateOperationsInput | $Enums.SIPStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUncheckedUpdateManyWithoutSipNestedInput
  }

  export type SIPCreateManyInput = {
    id?: string
    userId: string
    fundName: string
    amcCode: string
    schemeCode: string
    amountPerInstallment: number
    totalInstallments: number
    frequency: $Enums.SIPFrequency
    startDate: Date | string
    nextInstallment?: Date | string | null
    endDate?: Date | string | null
    status?: $Enums.SIPStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SIPUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fundName?: StringFieldUpdateOperationsInput | string
    amcCode?: StringFieldUpdateOperationsInput | string
    schemeCode?: StringFieldUpdateOperationsInput | string
    amountPerInstallment?: FloatFieldUpdateOperationsInput | number
    totalInstallments?: IntFieldUpdateOperationsInput | number
    frequency?: EnumSIPFrequencyFieldUpdateOperationsInput | $Enums.SIPFrequency
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextInstallment?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSIPStatusFieldUpdateOperationsInput | $Enums.SIPStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SIPUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fundName?: StringFieldUpdateOperationsInput | string
    amcCode?: StringFieldUpdateOperationsInput | string
    schemeCode?: StringFieldUpdateOperationsInput | string
    amountPerInstallment?: FloatFieldUpdateOperationsInput | number
    totalInstallments?: IntFieldUpdateOperationsInput | number
    frequency?: EnumSIPFrequencyFieldUpdateOperationsInput | $Enums.SIPFrequency
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextInstallment?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSIPStatusFieldUpdateOperationsInput | $Enums.SIPStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentCreateInput = {
    id?: string
    fundName: string
    amcCode: string
    schemeCode: string
    units: number
    navAtPurchase: number
    currentNav?: number | null
    type: $Enums.InvestmentType
    status: $Enums.InvestmentStatus
    purchaseDate: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutInvestmentsInput
    sip?: SIPCreateNestedOneWithoutInvestmentsInput
    Payment?: PaymentCreateNestedManyWithoutInvestmentInput
  }

  export type InvestmentUncheckedCreateInput = {
    id?: string
    userId: string
    sipId?: string | null
    fundName: string
    amcCode: string
    schemeCode: string
    units: number
    navAtPurchase: number
    currentNav?: number | null
    type: $Enums.InvestmentType
    status: $Enums.InvestmentStatus
    purchaseDate: Date | string
    createdAt?: Date | string
    Payment?: PaymentUncheckedCreateNestedManyWithoutInvestmentInput
  }

  export type InvestmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fundName?: StringFieldUpdateOperationsInput | string
    amcCode?: StringFieldUpdateOperationsInput | string
    schemeCode?: StringFieldUpdateOperationsInput | string
    units?: FloatFieldUpdateOperationsInput | number
    navAtPurchase?: FloatFieldUpdateOperationsInput | number
    currentNav?: NullableFloatFieldUpdateOperationsInput | number | null
    type?: EnumInvestmentTypeFieldUpdateOperationsInput | $Enums.InvestmentType
    status?: EnumInvestmentStatusFieldUpdateOperationsInput | $Enums.InvestmentStatus
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInvestmentsNestedInput
    sip?: SIPUpdateOneWithoutInvestmentsNestedInput
    Payment?: PaymentUpdateManyWithoutInvestmentNestedInput
  }

  export type InvestmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sipId?: NullableStringFieldUpdateOperationsInput | string | null
    fundName?: StringFieldUpdateOperationsInput | string
    amcCode?: StringFieldUpdateOperationsInput | string
    schemeCode?: StringFieldUpdateOperationsInput | string
    units?: FloatFieldUpdateOperationsInput | number
    navAtPurchase?: FloatFieldUpdateOperationsInput | number
    currentNav?: NullableFloatFieldUpdateOperationsInput | number | null
    type?: EnumInvestmentTypeFieldUpdateOperationsInput | $Enums.InvestmentType
    status?: EnumInvestmentStatusFieldUpdateOperationsInput | $Enums.InvestmentStatus
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Payment?: PaymentUncheckedUpdateManyWithoutInvestmentNestedInput
  }

  export type InvestmentCreateManyInput = {
    id?: string
    userId: string
    sipId?: string | null
    fundName: string
    amcCode: string
    schemeCode: string
    units: number
    navAtPurchase: number
    currentNav?: number | null
    type: $Enums.InvestmentType
    status: $Enums.InvestmentStatus
    purchaseDate: Date | string
    createdAt?: Date | string
  }

  export type InvestmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fundName?: StringFieldUpdateOperationsInput | string
    amcCode?: StringFieldUpdateOperationsInput | string
    schemeCode?: StringFieldUpdateOperationsInput | string
    units?: FloatFieldUpdateOperationsInput | number
    navAtPurchase?: FloatFieldUpdateOperationsInput | number
    currentNav?: NullableFloatFieldUpdateOperationsInput | number | null
    type?: EnumInvestmentTypeFieldUpdateOperationsInput | $Enums.InvestmentType
    status?: EnumInvestmentStatusFieldUpdateOperationsInput | $Enums.InvestmentStatus
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sipId?: NullableStringFieldUpdateOperationsInput | string | null
    fundName?: StringFieldUpdateOperationsInput | string
    amcCode?: StringFieldUpdateOperationsInput | string
    schemeCode?: StringFieldUpdateOperationsInput | string
    units?: FloatFieldUpdateOperationsInput | number
    navAtPurchase?: FloatFieldUpdateOperationsInput | number
    currentNav?: NullableFloatFieldUpdateOperationsInput | number | null
    type?: EnumInvestmentTypeFieldUpdateOperationsInput | $Enums.InvestmentType
    status?: EnumInvestmentStatusFieldUpdateOperationsInput | $Enums.InvestmentStatus
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistCreateInput = {
    id?: string
    schemeCode: string
    amcCode: string
    fundName: string
    category?: string | null
    currentNav?: number | null
    addedAt?: Date | string
    user: UserCreateNestedOneWithoutWatchlistInput
  }

  export type WatchlistUncheckedCreateInput = {
    id?: string
    userId: string
    schemeCode: string
    amcCode: string
    fundName: string
    category?: string | null
    currentNav?: number | null
    addedAt?: Date | string
  }

  export type WatchlistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    schemeCode?: StringFieldUpdateOperationsInput | string
    amcCode?: StringFieldUpdateOperationsInput | string
    fundName?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    currentNav?: NullableFloatFieldUpdateOperationsInput | number | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWatchlistNestedInput
  }

  export type WatchlistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    schemeCode?: StringFieldUpdateOperationsInput | string
    amcCode?: StringFieldUpdateOperationsInput | string
    fundName?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    currentNav?: NullableFloatFieldUpdateOperationsInput | number | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistCreateManyInput = {
    id?: string
    userId: string
    schemeCode: string
    amcCode: string
    fundName: string
    category?: string | null
    currentNav?: number | null
    addedAt?: Date | string
  }

  export type WatchlistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    schemeCode?: StringFieldUpdateOperationsInput | string
    amcCode?: StringFieldUpdateOperationsInput | string
    fundName?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    currentNav?: NullableFloatFieldUpdateOperationsInput | number | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    schemeCode?: StringFieldUpdateOperationsInput | string
    amcCode?: StringFieldUpdateOperationsInput | string
    fundName?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    currentNav?: NullableFloatFieldUpdateOperationsInput | number | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    txnRef: string
    amount: number
    mode: $Enums.PaymentMode
    razorpayOrderId?: string | null
    upiRefId?: string | null
    status: $Enums.PaymentStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentsInput
    investment?: InvestmentCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    userId: string
    investmentId?: string | null
    txnRef: string
    amount: number
    mode: $Enums.PaymentMode
    razorpayOrderId?: string | null
    upiRefId?: string | null
    status: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    txnRef?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    mode?: EnumPaymentModeFieldUpdateOperationsInput | $Enums.PaymentMode
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    upiRefId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
    investment?: InvestmentUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    investmentId?: NullableStringFieldUpdateOperationsInput | string | null
    txnRef?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    mode?: EnumPaymentModeFieldUpdateOperationsInput | $Enums.PaymentMode
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    upiRefId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    userId: string
    investmentId?: string | null
    txnRef: string
    amount: number
    mode: $Enums.PaymentMode
    razorpayOrderId?: string | null
    upiRefId?: string | null
    status: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    txnRef?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    mode?: EnumPaymentModeFieldUpdateOperationsInput | $Enums.PaymentMode
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    upiRefId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    investmentId?: NullableStringFieldUpdateOperationsInput | string | null
    txnRef?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    mode?: EnumPaymentModeFieldUpdateOperationsInput | $Enums.PaymentMode
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    upiRefId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.AdminRole
    createdAt?: Date | string
    updatedAt?: Date | string
    blogs?: BlogCreateNestedManyWithoutAuthorInput
    stories?: StoryCreateNestedManyWithoutAuthorInput
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.AdminRole
    createdAt?: Date | string
    updatedAt?: Date | string
    blogs?: BlogUncheckedCreateNestedManyWithoutAuthorInput
    stories?: StoryUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogs?: BlogUpdateManyWithoutAuthorNestedInput
    stories?: StoryUpdateManyWithoutAuthorNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogs?: BlogUncheckedUpdateManyWithoutAuthorNestedInput
    stories?: StoryUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type AdminCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.AdminRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCreateInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    coverImage?: string | null
    content: string
    tags?: BlogCreatetagsInput | string[]
    status?: $Enums.BlogStatus
    views?: number
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    author: AdminCreateNestedOneWithoutBlogsInput
  }

  export type BlogUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    coverImage?: string | null
    content: string
    tags?: BlogCreatetagsInput | string[]
    status?: $Enums.BlogStatus
    authorId: string
    views?: number
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    tags?: BlogUpdatetagsInput | string[]
    status?: EnumBlogStatusFieldUpdateOperationsInput | $Enums.BlogStatus
    views?: IntFieldUpdateOperationsInput | number
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: AdminUpdateOneRequiredWithoutBlogsNestedInput
  }

  export type BlogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    tags?: BlogUpdatetagsInput | string[]
    status?: EnumBlogStatusFieldUpdateOperationsInput | $Enums.BlogStatus
    authorId?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCreateManyInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    coverImage?: string | null
    content: string
    tags?: BlogCreatetagsInput | string[]
    status?: $Enums.BlogStatus
    authorId: string
    views?: number
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    tags?: BlogUpdatetagsInput | string[]
    status?: EnumBlogStatusFieldUpdateOperationsInput | $Enums.BlogStatus
    views?: IntFieldUpdateOperationsInput | number
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    tags?: BlogUpdatetagsInput | string[]
    status?: EnumBlogStatusFieldUpdateOperationsInput | $Enums.BlogStatus
    authorId?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryCreateInput = {
    id?: string
    label: string
    heading: string
    teaser: string
    imageUrl: string
    content: string
    status?: $Enums.StoryStatus
    views?: number
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    author: AdminCreateNestedOneWithoutStoriesInput
  }

  export type StoryUncheckedCreateInput = {
    id?: string
    label: string
    heading: string
    teaser: string
    imageUrl: string
    content: string
    status?: $Enums.StoryStatus
    authorId: string
    views?: number
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    teaser?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumStoryStatusFieldUpdateOperationsInput | $Enums.StoryStatus
    views?: IntFieldUpdateOperationsInput | number
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: AdminUpdateOneRequiredWithoutStoriesNestedInput
  }

  export type StoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    teaser?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumStoryStatusFieldUpdateOperationsInput | $Enums.StoryStatus
    authorId?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryCreateManyInput = {
    id?: string
    label: string
    heading: string
    teaser: string
    imageUrl: string
    content: string
    status?: $Enums.StoryStatus
    authorId: string
    views?: number
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    teaser?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumStoryStatusFieldUpdateOperationsInput | $Enums.StoryStatus
    views?: IntFieldUpdateOperationsInput | number
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    teaser?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumStoryStatusFieldUpdateOperationsInput | $Enums.StoryStatus
    authorId?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumMaritalStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMaritalStatusNullableFilter<$PrismaModel> | $Enums.MaritalStatus | null
  }

  export type EnumEducationLevelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.EducationLevel | EnumEducationLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEducationLevelNullableFilter<$PrismaModel> | $Enums.EducationLevel | null
  }

  export type EnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type EnumAnnualIncomeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AnnualIncome | EnumAnnualIncomeFieldRefInput<$PrismaModel> | null
    in?: $Enums.AnnualIncome[] | ListEnumAnnualIncomeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AnnualIncome[] | ListEnumAnnualIncomeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAnnualIncomeNullableFilter<$PrismaModel> | $Enums.AnnualIncome | null
  }

  export type EnumIncomeSourceNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.IncomeSource | EnumIncomeSourceFieldRefInput<$PrismaModel> | null
    in?: $Enums.IncomeSource[] | ListEnumIncomeSourceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.IncomeSource[] | ListEnumIncomeSourceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumIncomeSourceNullableFilter<$PrismaModel> | $Enums.IncomeSource | null
  }

  export type EnumTaxResidencyNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TaxResidency | EnumTaxResidencyFieldRefInput<$PrismaModel> | null
    in?: $Enums.TaxResidency[] | ListEnumTaxResidencyFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TaxResidency[] | ListEnumTaxResidencyFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTaxResidencyNullableFilter<$PrismaModel> | $Enums.TaxResidency | null
  }

  export type EnumResidentialStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ResidentialStatus | EnumResidentialStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ResidentialStatus[] | ListEnumResidentialStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ResidentialStatus[] | ListEnumResidentialStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumResidentialStatusNullableFilter<$PrismaModel> | $Enums.ResidentialStatus | null
  }

  export type EnumOccupationTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.OccupationType | EnumOccupationTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.OccupationType[] | ListEnumOccupationTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.OccupationType[] | ListEnumOccupationTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumOccupationTypeNullableFilter<$PrismaModel> | $Enums.OccupationType | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumKycStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.KycStatus | EnumKycStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKycStatusFilter<$PrismaModel> | $Enums.KycStatus
  }

  export type EnumKycTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.KycType | EnumKycTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.KycType[] | ListEnumKycTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.KycType[] | ListEnumKycTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumKycTypeNullableFilter<$PrismaModel> | $Enums.KycType | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SIPListRelationFilter = {
    every?: SIPWhereInput
    some?: SIPWhereInput
    none?: SIPWhereInput
  }

  export type InvestmentListRelationFilter = {
    every?: InvestmentWhereInput
    some?: InvestmentWhereInput
    none?: InvestmentWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type KycSessionListRelationFilter = {
    every?: KycSessionWhereInput
    some?: KycSessionWhereInput
    none?: KycSessionWhereInput
  }

  export type WatchlistListRelationFilter = {
    every?: WatchlistWhereInput
    some?: WatchlistWhereInput
    none?: WatchlistWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SIPOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvestmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KycSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WatchlistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    currentStep?: SortOrder
    phone?: SortOrder
    encryptedPan?: SortOrder
    encryptedBankAcc?: SortOrder
    encryptedIfsc?: SortOrder
    bankAccountType?: SortOrder
    bankName?: SortOrder
    bankBranchName?: SortOrder
    bankAccountHolderName?: SortOrder
    bankVerified?: SortOrder
    bankVerifiedAt?: SortOrder
    bankBeneficiaryName?: SortOrder
    bankNameMatchScore?: SortOrder
    upiId?: SortOrder
    dob?: SortOrder
    maritalStatus?: SortOrder
    education?: SortOrder
    motherName?: SortOrder
    fatherName?: SortOrder
    gender?: SortOrder
    annualIncome?: SortOrder
    incomeSource?: SortOrder
    taxResidency?: SortOrder
    residentialStatus?: SortOrder
    occupationType?: SortOrder
    countryOfBirth?: SortOrder
    nationality?: SortOrder
    signatureUrl?: SortOrder
    nomineeName?: SortOrder
    nomineeRelation?: SortOrder
    nomineeAllocation?: SortOrder
    nomineeIdType?: SortOrder
    nomineeIdNumber?: SortOrder
    nomineeEmail?: SortOrder
    nomineeMobile?: SortOrder
    nomineeAddressLine1?: SortOrder
    nomineeAddressLine2?: SortOrder
    nomineeCity?: SortOrder
    nomineePincode?: SortOrder
    nomineeCountry?: SortOrder
    nomineeDob?: SortOrder
    languagePref?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    kycStatus?: SortOrder
    digilockerKycId?: SortOrder
    digilockerid?: SortOrder
    aadhaarLinked?: SortOrder
    aadhaarLastFour?: SortOrder
    kycVerifiedAt?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pincode?: SortOrder
    country?: SortOrder
    commAddressLine1?: SortOrder
    commAddressLine2?: SortOrder
    commCity?: SortOrder
    commState?: SortOrder
    commPincode?: SortOrder
    commCountry?: SortOrder
    useSameAddress?: SortOrder
    dlAccessToken?: SortOrder
    dlRefreshToken?: SortOrder
    dlTokenExpiresAt?: SortOrder
    ckycRefId?: SortOrder
    kycType?: SortOrder
    kraVerified?: SortOrder
    kraRefId?: SortOrder
    kraStatusCode?: SortOrder
    kraStatusDate?: SortOrder
    fatcaDeclaration?: SortOrder
    uccCode?: SortOrder
    fatcaSubmitted?: SortOrder
    elogAuthenticated?: SortOrder
    nseStatus?: SortOrder
    nseLastUpdated?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    currentStep?: SortOrder
    bankNameMatchScore?: SortOrder
    nomineeAllocation?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    currentStep?: SortOrder
    phone?: SortOrder
    encryptedPan?: SortOrder
    encryptedBankAcc?: SortOrder
    encryptedIfsc?: SortOrder
    bankAccountType?: SortOrder
    bankName?: SortOrder
    bankBranchName?: SortOrder
    bankAccountHolderName?: SortOrder
    bankVerified?: SortOrder
    bankVerifiedAt?: SortOrder
    bankBeneficiaryName?: SortOrder
    bankNameMatchScore?: SortOrder
    upiId?: SortOrder
    dob?: SortOrder
    maritalStatus?: SortOrder
    education?: SortOrder
    motherName?: SortOrder
    fatherName?: SortOrder
    gender?: SortOrder
    annualIncome?: SortOrder
    incomeSource?: SortOrder
    taxResidency?: SortOrder
    residentialStatus?: SortOrder
    occupationType?: SortOrder
    countryOfBirth?: SortOrder
    nationality?: SortOrder
    signatureUrl?: SortOrder
    nomineeName?: SortOrder
    nomineeRelation?: SortOrder
    nomineeAllocation?: SortOrder
    nomineeIdType?: SortOrder
    nomineeIdNumber?: SortOrder
    nomineeEmail?: SortOrder
    nomineeMobile?: SortOrder
    nomineeAddressLine1?: SortOrder
    nomineeAddressLine2?: SortOrder
    nomineeCity?: SortOrder
    nomineePincode?: SortOrder
    nomineeCountry?: SortOrder
    nomineeDob?: SortOrder
    languagePref?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    kycStatus?: SortOrder
    digilockerKycId?: SortOrder
    digilockerid?: SortOrder
    aadhaarLinked?: SortOrder
    aadhaarLastFour?: SortOrder
    kycVerifiedAt?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pincode?: SortOrder
    country?: SortOrder
    commAddressLine1?: SortOrder
    commAddressLine2?: SortOrder
    commCity?: SortOrder
    commState?: SortOrder
    commPincode?: SortOrder
    commCountry?: SortOrder
    useSameAddress?: SortOrder
    dlAccessToken?: SortOrder
    dlRefreshToken?: SortOrder
    dlTokenExpiresAt?: SortOrder
    ckycRefId?: SortOrder
    kycType?: SortOrder
    kraVerified?: SortOrder
    kraRefId?: SortOrder
    kraStatusCode?: SortOrder
    kraStatusDate?: SortOrder
    uccCode?: SortOrder
    fatcaSubmitted?: SortOrder
    elogAuthenticated?: SortOrder
    nseStatus?: SortOrder
    nseLastUpdated?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    currentStep?: SortOrder
    phone?: SortOrder
    encryptedPan?: SortOrder
    encryptedBankAcc?: SortOrder
    encryptedIfsc?: SortOrder
    bankAccountType?: SortOrder
    bankName?: SortOrder
    bankBranchName?: SortOrder
    bankAccountHolderName?: SortOrder
    bankVerified?: SortOrder
    bankVerifiedAt?: SortOrder
    bankBeneficiaryName?: SortOrder
    bankNameMatchScore?: SortOrder
    upiId?: SortOrder
    dob?: SortOrder
    maritalStatus?: SortOrder
    education?: SortOrder
    motherName?: SortOrder
    fatherName?: SortOrder
    gender?: SortOrder
    annualIncome?: SortOrder
    incomeSource?: SortOrder
    taxResidency?: SortOrder
    residentialStatus?: SortOrder
    occupationType?: SortOrder
    countryOfBirth?: SortOrder
    nationality?: SortOrder
    signatureUrl?: SortOrder
    nomineeName?: SortOrder
    nomineeRelation?: SortOrder
    nomineeAllocation?: SortOrder
    nomineeIdType?: SortOrder
    nomineeIdNumber?: SortOrder
    nomineeEmail?: SortOrder
    nomineeMobile?: SortOrder
    nomineeAddressLine1?: SortOrder
    nomineeAddressLine2?: SortOrder
    nomineeCity?: SortOrder
    nomineePincode?: SortOrder
    nomineeCountry?: SortOrder
    nomineeDob?: SortOrder
    languagePref?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    kycStatus?: SortOrder
    digilockerKycId?: SortOrder
    digilockerid?: SortOrder
    aadhaarLinked?: SortOrder
    aadhaarLastFour?: SortOrder
    kycVerifiedAt?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pincode?: SortOrder
    country?: SortOrder
    commAddressLine1?: SortOrder
    commAddressLine2?: SortOrder
    commCity?: SortOrder
    commState?: SortOrder
    commPincode?: SortOrder
    commCountry?: SortOrder
    useSameAddress?: SortOrder
    dlAccessToken?: SortOrder
    dlRefreshToken?: SortOrder
    dlTokenExpiresAt?: SortOrder
    ckycRefId?: SortOrder
    kycType?: SortOrder
    kraVerified?: SortOrder
    kraRefId?: SortOrder
    kraStatusCode?: SortOrder
    kraStatusDate?: SortOrder
    uccCode?: SortOrder
    fatcaSubmitted?: SortOrder
    elogAuthenticated?: SortOrder
    nseStatus?: SortOrder
    nseLastUpdated?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    currentStep?: SortOrder
    bankNameMatchScore?: SortOrder
    nomineeAllocation?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type EnumMaritalStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMaritalStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.MaritalStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMaritalStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumMaritalStatusNullableFilter<$PrismaModel>
  }

  export type EnumEducationLevelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EducationLevel | EnumEducationLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEducationLevelNullableWithAggregatesFilter<$PrismaModel> | $Enums.EducationLevel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumEducationLevelNullableFilter<$PrismaModel>
    _max?: NestedEnumEducationLevelNullableFilter<$PrismaModel>
  }

  export type EnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type EnumAnnualIncomeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnnualIncome | EnumAnnualIncomeFieldRefInput<$PrismaModel> | null
    in?: $Enums.AnnualIncome[] | ListEnumAnnualIncomeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AnnualIncome[] | ListEnumAnnualIncomeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAnnualIncomeNullableWithAggregatesFilter<$PrismaModel> | $Enums.AnnualIncome | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAnnualIncomeNullableFilter<$PrismaModel>
    _max?: NestedEnumAnnualIncomeNullableFilter<$PrismaModel>
  }

  export type EnumIncomeSourceNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IncomeSource | EnumIncomeSourceFieldRefInput<$PrismaModel> | null
    in?: $Enums.IncomeSource[] | ListEnumIncomeSourceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.IncomeSource[] | ListEnumIncomeSourceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumIncomeSourceNullableWithAggregatesFilter<$PrismaModel> | $Enums.IncomeSource | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumIncomeSourceNullableFilter<$PrismaModel>
    _max?: NestedEnumIncomeSourceNullableFilter<$PrismaModel>
  }

  export type EnumTaxResidencyNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaxResidency | EnumTaxResidencyFieldRefInput<$PrismaModel> | null
    in?: $Enums.TaxResidency[] | ListEnumTaxResidencyFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TaxResidency[] | ListEnumTaxResidencyFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTaxResidencyNullableWithAggregatesFilter<$PrismaModel> | $Enums.TaxResidency | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTaxResidencyNullableFilter<$PrismaModel>
    _max?: NestedEnumTaxResidencyNullableFilter<$PrismaModel>
  }

  export type EnumResidentialStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResidentialStatus | EnumResidentialStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ResidentialStatus[] | ListEnumResidentialStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ResidentialStatus[] | ListEnumResidentialStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumResidentialStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.ResidentialStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumResidentialStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumResidentialStatusNullableFilter<$PrismaModel>
  }

  export type EnumOccupationTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OccupationType | EnumOccupationTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.OccupationType[] | ListEnumOccupationTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.OccupationType[] | ListEnumOccupationTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumOccupationTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.OccupationType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumOccupationTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumOccupationTypeNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumKycStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KycStatus | EnumKycStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKycStatusWithAggregatesFilter<$PrismaModel> | $Enums.KycStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKycStatusFilter<$PrismaModel>
    _max?: NestedEnumKycStatusFilter<$PrismaModel>
  }

  export type EnumKycTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KycType | EnumKycTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.KycType[] | ListEnumKycTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.KycType[] | ListEnumKycTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumKycTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.KycType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumKycTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumKycTypeNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumKycSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.KycSessionStatus | EnumKycSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KycSessionStatus[] | ListEnumKycSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KycSessionStatus[] | ListEnumKycSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKycSessionStatusFilter<$PrismaModel> | $Enums.KycSessionStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type KycSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    state?: SortOrder
    codeVerifier?: SortOrder
    status?: SortOrder
    errorCode?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type KycSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    state?: SortOrder
    codeVerifier?: SortOrder
    status?: SortOrder
    errorCode?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type KycSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    state?: SortOrder
    codeVerifier?: SortOrder
    status?: SortOrder
    errorCode?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type EnumKycSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KycSessionStatus | EnumKycSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KycSessionStatus[] | ListEnumKycSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KycSessionStatus[] | ListEnumKycSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKycSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.KycSessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKycSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumKycSessionStatusFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumSIPFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.SIPFrequency | EnumSIPFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.SIPFrequency[] | ListEnumSIPFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.SIPFrequency[] | ListEnumSIPFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumSIPFrequencyFilter<$PrismaModel> | $Enums.SIPFrequency
  }

  export type EnumSIPStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SIPStatus | EnumSIPStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SIPStatus[] | ListEnumSIPStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SIPStatus[] | ListEnumSIPStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSIPStatusFilter<$PrismaModel> | $Enums.SIPStatus
  }

  export type SIPCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fundName?: SortOrder
    amcCode?: SortOrder
    schemeCode?: SortOrder
    amountPerInstallment?: SortOrder
    totalInstallments?: SortOrder
    frequency?: SortOrder
    startDate?: SortOrder
    nextInstallment?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SIPAvgOrderByAggregateInput = {
    amountPerInstallment?: SortOrder
    totalInstallments?: SortOrder
  }

  export type SIPMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fundName?: SortOrder
    amcCode?: SortOrder
    schemeCode?: SortOrder
    amountPerInstallment?: SortOrder
    totalInstallments?: SortOrder
    frequency?: SortOrder
    startDate?: SortOrder
    nextInstallment?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SIPMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fundName?: SortOrder
    amcCode?: SortOrder
    schemeCode?: SortOrder
    amountPerInstallment?: SortOrder
    totalInstallments?: SortOrder
    frequency?: SortOrder
    startDate?: SortOrder
    nextInstallment?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SIPSumOrderByAggregateInput = {
    amountPerInstallment?: SortOrder
    totalInstallments?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumSIPFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SIPFrequency | EnumSIPFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.SIPFrequency[] | ListEnumSIPFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.SIPFrequency[] | ListEnumSIPFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumSIPFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.SIPFrequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSIPFrequencyFilter<$PrismaModel>
    _max?: NestedEnumSIPFrequencyFilter<$PrismaModel>
  }

  export type EnumSIPStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SIPStatus | EnumSIPStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SIPStatus[] | ListEnumSIPStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SIPStatus[] | ListEnumSIPStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSIPStatusWithAggregatesFilter<$PrismaModel> | $Enums.SIPStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSIPStatusFilter<$PrismaModel>
    _max?: NestedEnumSIPStatusFilter<$PrismaModel>
  }

  export type EnumInvestmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InvestmentType | EnumInvestmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InvestmentType[] | ListEnumInvestmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvestmentType[] | ListEnumInvestmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInvestmentTypeFilter<$PrismaModel> | $Enums.InvestmentType
  }

  export type EnumInvestmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvestmentStatus | EnumInvestmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvestmentStatus[] | ListEnumInvestmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvestmentStatus[] | ListEnumInvestmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvestmentStatusFilter<$PrismaModel> | $Enums.InvestmentStatus
  }

  export type SIPNullableScalarRelationFilter = {
    is?: SIPWhereInput | null
    isNot?: SIPWhereInput | null
  }

  export type InvestmentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sipId?: SortOrder
    fundName?: SortOrder
    amcCode?: SortOrder
    schemeCode?: SortOrder
    units?: SortOrder
    navAtPurchase?: SortOrder
    currentNav?: SortOrder
    type?: SortOrder
    status?: SortOrder
    purchaseDate?: SortOrder
    createdAt?: SortOrder
  }

  export type InvestmentAvgOrderByAggregateInput = {
    units?: SortOrder
    navAtPurchase?: SortOrder
    currentNav?: SortOrder
  }

  export type InvestmentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sipId?: SortOrder
    fundName?: SortOrder
    amcCode?: SortOrder
    schemeCode?: SortOrder
    units?: SortOrder
    navAtPurchase?: SortOrder
    currentNav?: SortOrder
    type?: SortOrder
    status?: SortOrder
    purchaseDate?: SortOrder
    createdAt?: SortOrder
  }

  export type InvestmentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sipId?: SortOrder
    fundName?: SortOrder
    amcCode?: SortOrder
    schemeCode?: SortOrder
    units?: SortOrder
    navAtPurchase?: SortOrder
    currentNav?: SortOrder
    type?: SortOrder
    status?: SortOrder
    purchaseDate?: SortOrder
    createdAt?: SortOrder
  }

  export type InvestmentSumOrderByAggregateInput = {
    units?: SortOrder
    navAtPurchase?: SortOrder
    currentNav?: SortOrder
  }

  export type EnumInvestmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvestmentType | EnumInvestmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InvestmentType[] | ListEnumInvestmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvestmentType[] | ListEnumInvestmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInvestmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.InvestmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvestmentTypeFilter<$PrismaModel>
    _max?: NestedEnumInvestmentTypeFilter<$PrismaModel>
  }

  export type EnumInvestmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvestmentStatus | EnumInvestmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvestmentStatus[] | ListEnumInvestmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvestmentStatus[] | ListEnumInvestmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvestmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvestmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvestmentStatusFilter<$PrismaModel>
    _max?: NestedEnumInvestmentStatusFilter<$PrismaModel>
  }

  export type WatchlistUserIdSchemeCodeCompoundUniqueInput = {
    userId: string
    schemeCode: string
  }

  export type WatchlistCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    schemeCode?: SortOrder
    amcCode?: SortOrder
    fundName?: SortOrder
    category?: SortOrder
    currentNav?: SortOrder
    addedAt?: SortOrder
  }

  export type WatchlistAvgOrderByAggregateInput = {
    currentNav?: SortOrder
  }

  export type WatchlistMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    schemeCode?: SortOrder
    amcCode?: SortOrder
    fundName?: SortOrder
    category?: SortOrder
    currentNav?: SortOrder
    addedAt?: SortOrder
  }

  export type WatchlistMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    schemeCode?: SortOrder
    amcCode?: SortOrder
    fundName?: SortOrder
    category?: SortOrder
    currentNav?: SortOrder
    addedAt?: SortOrder
  }

  export type WatchlistSumOrderByAggregateInput = {
    currentNav?: SortOrder
  }

  export type EnumPaymentModeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMode | EnumPaymentModeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMode[] | ListEnumPaymentModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMode[] | ListEnumPaymentModeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentModeFilter<$PrismaModel> | $Enums.PaymentMode
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type InvestmentNullableScalarRelationFilter = {
    is?: InvestmentWhereInput | null
    isNot?: InvestmentWhereInput | null
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    investmentId?: SortOrder
    txnRef?: SortOrder
    amount?: SortOrder
    mode?: SortOrder
    razorpayOrderId?: SortOrder
    upiRefId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    investmentId?: SortOrder
    txnRef?: SortOrder
    amount?: SortOrder
    mode?: SortOrder
    razorpayOrderId?: SortOrder
    upiRefId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    investmentId?: SortOrder
    txnRef?: SortOrder
    amount?: SortOrder
    mode?: SortOrder
    razorpayOrderId?: SortOrder
    upiRefId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMode | EnumPaymentModeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMode[] | ListEnumPaymentModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMode[] | ListEnumPaymentModeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentModeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentModeFilter<$PrismaModel>
    _max?: NestedEnumPaymentModeFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type EnumAdminRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminRoleFilter<$PrismaModel> | $Enums.AdminRole
  }

  export type BlogListRelationFilter = {
    every?: BlogWhereInput
    some?: BlogWhereInput
    none?: BlogWhereInput
  }

  export type StoryListRelationFilter = {
    every?: StoryWhereInput
    some?: StoryWhereInput
    none?: StoryWhereInput
  }

  export type BlogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumAdminRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminRoleWithAggregatesFilter<$PrismaModel> | $Enums.AdminRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdminRoleFilter<$PrismaModel>
    _max?: NestedEnumAdminRoleFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumBlogStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BlogStatus | EnumBlogStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BlogStatus[] | ListEnumBlogStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlogStatus[] | ListEnumBlogStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBlogStatusFilter<$PrismaModel> | $Enums.BlogStatus
  }

  export type AdminScalarRelationFilter = {
    is?: AdminWhereInput
    isNot?: AdminWhereInput
  }

  export type BlogCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    coverImage?: SortOrder
    content?: SortOrder
    tags?: SortOrder
    status?: SortOrder
    authorId?: SortOrder
    views?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogAvgOrderByAggregateInput = {
    views?: SortOrder
  }

  export type BlogMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    coverImage?: SortOrder
    content?: SortOrder
    status?: SortOrder
    authorId?: SortOrder
    views?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    coverImage?: SortOrder
    content?: SortOrder
    status?: SortOrder
    authorId?: SortOrder
    views?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogSumOrderByAggregateInput = {
    views?: SortOrder
  }

  export type EnumBlogStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BlogStatus | EnumBlogStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BlogStatus[] | ListEnumBlogStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlogStatus[] | ListEnumBlogStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBlogStatusWithAggregatesFilter<$PrismaModel> | $Enums.BlogStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBlogStatusFilter<$PrismaModel>
    _max?: NestedEnumBlogStatusFilter<$PrismaModel>
  }

  export type EnumStoryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.StoryStatus | EnumStoryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StoryStatus[] | ListEnumStoryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StoryStatus[] | ListEnumStoryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStoryStatusFilter<$PrismaModel> | $Enums.StoryStatus
  }

  export type StoryCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    heading?: SortOrder
    teaser?: SortOrder
    imageUrl?: SortOrder
    content?: SortOrder
    status?: SortOrder
    authorId?: SortOrder
    views?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoryAvgOrderByAggregateInput = {
    views?: SortOrder
  }

  export type StoryMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    heading?: SortOrder
    teaser?: SortOrder
    imageUrl?: SortOrder
    content?: SortOrder
    status?: SortOrder
    authorId?: SortOrder
    views?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoryMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    heading?: SortOrder
    teaser?: SortOrder
    imageUrl?: SortOrder
    content?: SortOrder
    status?: SortOrder
    authorId?: SortOrder
    views?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StorySumOrderByAggregateInput = {
    views?: SortOrder
  }

  export type EnumStoryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StoryStatus | EnumStoryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StoryStatus[] | ListEnumStoryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StoryStatus[] | ListEnumStoryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStoryStatusWithAggregatesFilter<$PrismaModel> | $Enums.StoryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStoryStatusFilter<$PrismaModel>
    _max?: NestedEnumStoryStatusFilter<$PrismaModel>
  }

  export type SIPCreateNestedManyWithoutUserInput = {
    create?: XOR<SIPCreateWithoutUserInput, SIPUncheckedCreateWithoutUserInput> | SIPCreateWithoutUserInput[] | SIPUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SIPCreateOrConnectWithoutUserInput | SIPCreateOrConnectWithoutUserInput[]
    createMany?: SIPCreateManyUserInputEnvelope
    connect?: SIPWhereUniqueInput | SIPWhereUniqueInput[]
  }

  export type InvestmentCreateNestedManyWithoutUserInput = {
    create?: XOR<InvestmentCreateWithoutUserInput, InvestmentUncheckedCreateWithoutUserInput> | InvestmentCreateWithoutUserInput[] | InvestmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutUserInput | InvestmentCreateOrConnectWithoutUserInput[]
    createMany?: InvestmentCreateManyUserInputEnvelope
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type KycSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<KycSessionCreateWithoutUserInput, KycSessionUncheckedCreateWithoutUserInput> | KycSessionCreateWithoutUserInput[] | KycSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KycSessionCreateOrConnectWithoutUserInput | KycSessionCreateOrConnectWithoutUserInput[]
    createMany?: KycSessionCreateManyUserInputEnvelope
    connect?: KycSessionWhereUniqueInput | KycSessionWhereUniqueInput[]
  }

  export type WatchlistCreateNestedManyWithoutUserInput = {
    create?: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput> | WatchlistCreateWithoutUserInput[] | WatchlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchlistCreateOrConnectWithoutUserInput | WatchlistCreateOrConnectWithoutUserInput[]
    createMany?: WatchlistCreateManyUserInputEnvelope
    connect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
  }

  export type SIPUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SIPCreateWithoutUserInput, SIPUncheckedCreateWithoutUserInput> | SIPCreateWithoutUserInput[] | SIPUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SIPCreateOrConnectWithoutUserInput | SIPCreateOrConnectWithoutUserInput[]
    createMany?: SIPCreateManyUserInputEnvelope
    connect?: SIPWhereUniqueInput | SIPWhereUniqueInput[]
  }

  export type InvestmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InvestmentCreateWithoutUserInput, InvestmentUncheckedCreateWithoutUserInput> | InvestmentCreateWithoutUserInput[] | InvestmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutUserInput | InvestmentCreateOrConnectWithoutUserInput[]
    createMany?: InvestmentCreateManyUserInputEnvelope
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type KycSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<KycSessionCreateWithoutUserInput, KycSessionUncheckedCreateWithoutUserInput> | KycSessionCreateWithoutUserInput[] | KycSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KycSessionCreateOrConnectWithoutUserInput | KycSessionCreateOrConnectWithoutUserInput[]
    createMany?: KycSessionCreateManyUserInputEnvelope
    connect?: KycSessionWhereUniqueInput | KycSessionWhereUniqueInput[]
  }

  export type WatchlistUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput> | WatchlistCreateWithoutUserInput[] | WatchlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchlistCreateOrConnectWithoutUserInput | WatchlistCreateOrConnectWithoutUserInput[]
    createMany?: WatchlistCreateManyUserInputEnvelope
    connect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumMaritalStatusFieldUpdateOperationsInput = {
    set?: $Enums.MaritalStatus | null
  }

  export type NullableEnumEducationLevelFieldUpdateOperationsInput = {
    set?: $Enums.EducationLevel | null
  }

  export type NullableEnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender | null
  }

  export type NullableEnumAnnualIncomeFieldUpdateOperationsInput = {
    set?: $Enums.AnnualIncome | null
  }

  export type NullableEnumIncomeSourceFieldUpdateOperationsInput = {
    set?: $Enums.IncomeSource | null
  }

  export type NullableEnumTaxResidencyFieldUpdateOperationsInput = {
    set?: $Enums.TaxResidency | null
  }

  export type NullableEnumResidentialStatusFieldUpdateOperationsInput = {
    set?: $Enums.ResidentialStatus | null
  }

  export type NullableEnumOccupationTypeFieldUpdateOperationsInput = {
    set?: $Enums.OccupationType | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumKycStatusFieldUpdateOperationsInput = {
    set?: $Enums.KycStatus
  }

  export type NullableEnumKycTypeFieldUpdateOperationsInput = {
    set?: $Enums.KycType | null
  }

  export type SIPUpdateManyWithoutUserNestedInput = {
    create?: XOR<SIPCreateWithoutUserInput, SIPUncheckedCreateWithoutUserInput> | SIPCreateWithoutUserInput[] | SIPUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SIPCreateOrConnectWithoutUserInput | SIPCreateOrConnectWithoutUserInput[]
    upsert?: SIPUpsertWithWhereUniqueWithoutUserInput | SIPUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SIPCreateManyUserInputEnvelope
    set?: SIPWhereUniqueInput | SIPWhereUniqueInput[]
    disconnect?: SIPWhereUniqueInput | SIPWhereUniqueInput[]
    delete?: SIPWhereUniqueInput | SIPWhereUniqueInput[]
    connect?: SIPWhereUniqueInput | SIPWhereUniqueInput[]
    update?: SIPUpdateWithWhereUniqueWithoutUserInput | SIPUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SIPUpdateManyWithWhereWithoutUserInput | SIPUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SIPScalarWhereInput | SIPScalarWhereInput[]
  }

  export type InvestmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<InvestmentCreateWithoutUserInput, InvestmentUncheckedCreateWithoutUserInput> | InvestmentCreateWithoutUserInput[] | InvestmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutUserInput | InvestmentCreateOrConnectWithoutUserInput[]
    upsert?: InvestmentUpsertWithWhereUniqueWithoutUserInput | InvestmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InvestmentCreateManyUserInputEnvelope
    set?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    disconnect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    delete?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    update?: InvestmentUpdateWithWhereUniqueWithoutUserInput | InvestmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InvestmentUpdateManyWithWhereWithoutUserInput | InvestmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type KycSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<KycSessionCreateWithoutUserInput, KycSessionUncheckedCreateWithoutUserInput> | KycSessionCreateWithoutUserInput[] | KycSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KycSessionCreateOrConnectWithoutUserInput | KycSessionCreateOrConnectWithoutUserInput[]
    upsert?: KycSessionUpsertWithWhereUniqueWithoutUserInput | KycSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: KycSessionCreateManyUserInputEnvelope
    set?: KycSessionWhereUniqueInput | KycSessionWhereUniqueInput[]
    disconnect?: KycSessionWhereUniqueInput | KycSessionWhereUniqueInput[]
    delete?: KycSessionWhereUniqueInput | KycSessionWhereUniqueInput[]
    connect?: KycSessionWhereUniqueInput | KycSessionWhereUniqueInput[]
    update?: KycSessionUpdateWithWhereUniqueWithoutUserInput | KycSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: KycSessionUpdateManyWithWhereWithoutUserInput | KycSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: KycSessionScalarWhereInput | KycSessionScalarWhereInput[]
  }

  export type WatchlistUpdateManyWithoutUserNestedInput = {
    create?: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput> | WatchlistCreateWithoutUserInput[] | WatchlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchlistCreateOrConnectWithoutUserInput | WatchlistCreateOrConnectWithoutUserInput[]
    upsert?: WatchlistUpsertWithWhereUniqueWithoutUserInput | WatchlistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WatchlistCreateManyUserInputEnvelope
    set?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    disconnect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    delete?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    connect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    update?: WatchlistUpdateWithWhereUniqueWithoutUserInput | WatchlistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WatchlistUpdateManyWithWhereWithoutUserInput | WatchlistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WatchlistScalarWhereInput | WatchlistScalarWhereInput[]
  }

  export type SIPUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SIPCreateWithoutUserInput, SIPUncheckedCreateWithoutUserInput> | SIPCreateWithoutUserInput[] | SIPUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SIPCreateOrConnectWithoutUserInput | SIPCreateOrConnectWithoutUserInput[]
    upsert?: SIPUpsertWithWhereUniqueWithoutUserInput | SIPUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SIPCreateManyUserInputEnvelope
    set?: SIPWhereUniqueInput | SIPWhereUniqueInput[]
    disconnect?: SIPWhereUniqueInput | SIPWhereUniqueInput[]
    delete?: SIPWhereUniqueInput | SIPWhereUniqueInput[]
    connect?: SIPWhereUniqueInput | SIPWhereUniqueInput[]
    update?: SIPUpdateWithWhereUniqueWithoutUserInput | SIPUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SIPUpdateManyWithWhereWithoutUserInput | SIPUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SIPScalarWhereInput | SIPScalarWhereInput[]
  }

  export type InvestmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InvestmentCreateWithoutUserInput, InvestmentUncheckedCreateWithoutUserInput> | InvestmentCreateWithoutUserInput[] | InvestmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutUserInput | InvestmentCreateOrConnectWithoutUserInput[]
    upsert?: InvestmentUpsertWithWhereUniqueWithoutUserInput | InvestmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InvestmentCreateManyUserInputEnvelope
    set?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    disconnect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    delete?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    update?: InvestmentUpdateWithWhereUniqueWithoutUserInput | InvestmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InvestmentUpdateManyWithWhereWithoutUserInput | InvestmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type KycSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<KycSessionCreateWithoutUserInput, KycSessionUncheckedCreateWithoutUserInput> | KycSessionCreateWithoutUserInput[] | KycSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KycSessionCreateOrConnectWithoutUserInput | KycSessionCreateOrConnectWithoutUserInput[]
    upsert?: KycSessionUpsertWithWhereUniqueWithoutUserInput | KycSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: KycSessionCreateManyUserInputEnvelope
    set?: KycSessionWhereUniqueInput | KycSessionWhereUniqueInput[]
    disconnect?: KycSessionWhereUniqueInput | KycSessionWhereUniqueInput[]
    delete?: KycSessionWhereUniqueInput | KycSessionWhereUniqueInput[]
    connect?: KycSessionWhereUniqueInput | KycSessionWhereUniqueInput[]
    update?: KycSessionUpdateWithWhereUniqueWithoutUserInput | KycSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: KycSessionUpdateManyWithWhereWithoutUserInput | KycSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: KycSessionScalarWhereInput | KycSessionScalarWhereInput[]
  }

  export type WatchlistUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput> | WatchlistCreateWithoutUserInput[] | WatchlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchlistCreateOrConnectWithoutUserInput | WatchlistCreateOrConnectWithoutUserInput[]
    upsert?: WatchlistUpsertWithWhereUniqueWithoutUserInput | WatchlistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WatchlistCreateManyUserInputEnvelope
    set?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    disconnect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    delete?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    connect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    update?: WatchlistUpdateWithWhereUniqueWithoutUserInput | WatchlistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WatchlistUpdateManyWithWhereWithoutUserInput | WatchlistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WatchlistScalarWhereInput | WatchlistScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutKycSessionsInput = {
    create?: XOR<UserCreateWithoutKycSessionsInput, UserUncheckedCreateWithoutKycSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutKycSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumKycSessionStatusFieldUpdateOperationsInput = {
    set?: $Enums.KycSessionStatus
  }

  export type UserUpdateOneRequiredWithoutKycSessionsNestedInput = {
    create?: XOR<UserCreateWithoutKycSessionsInput, UserUncheckedCreateWithoutKycSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutKycSessionsInput
    upsert?: UserUpsertWithoutKycSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutKycSessionsInput, UserUpdateWithoutKycSessionsInput>, UserUncheckedUpdateWithoutKycSessionsInput>
  }

  export type UserCreateNestedOneWithoutSipsInput = {
    create?: XOR<UserCreateWithoutSipsInput, UserUncheckedCreateWithoutSipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSipsInput
    connect?: UserWhereUniqueInput
  }

  export type InvestmentCreateNestedManyWithoutSipInput = {
    create?: XOR<InvestmentCreateWithoutSipInput, InvestmentUncheckedCreateWithoutSipInput> | InvestmentCreateWithoutSipInput[] | InvestmentUncheckedCreateWithoutSipInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutSipInput | InvestmentCreateOrConnectWithoutSipInput[]
    createMany?: InvestmentCreateManySipInputEnvelope
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
  }

  export type InvestmentUncheckedCreateNestedManyWithoutSipInput = {
    create?: XOR<InvestmentCreateWithoutSipInput, InvestmentUncheckedCreateWithoutSipInput> | InvestmentCreateWithoutSipInput[] | InvestmentUncheckedCreateWithoutSipInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutSipInput | InvestmentCreateOrConnectWithoutSipInput[]
    createMany?: InvestmentCreateManySipInputEnvelope
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumSIPFrequencyFieldUpdateOperationsInput = {
    set?: $Enums.SIPFrequency
  }

  export type EnumSIPStatusFieldUpdateOperationsInput = {
    set?: $Enums.SIPStatus
  }

  export type UserUpdateOneRequiredWithoutSipsNestedInput = {
    create?: XOR<UserCreateWithoutSipsInput, UserUncheckedCreateWithoutSipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSipsInput
    upsert?: UserUpsertWithoutSipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSipsInput, UserUpdateWithoutSipsInput>, UserUncheckedUpdateWithoutSipsInput>
  }

  export type InvestmentUpdateManyWithoutSipNestedInput = {
    create?: XOR<InvestmentCreateWithoutSipInput, InvestmentUncheckedCreateWithoutSipInput> | InvestmentCreateWithoutSipInput[] | InvestmentUncheckedCreateWithoutSipInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutSipInput | InvestmentCreateOrConnectWithoutSipInput[]
    upsert?: InvestmentUpsertWithWhereUniqueWithoutSipInput | InvestmentUpsertWithWhereUniqueWithoutSipInput[]
    createMany?: InvestmentCreateManySipInputEnvelope
    set?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    disconnect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    delete?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    update?: InvestmentUpdateWithWhereUniqueWithoutSipInput | InvestmentUpdateWithWhereUniqueWithoutSipInput[]
    updateMany?: InvestmentUpdateManyWithWhereWithoutSipInput | InvestmentUpdateManyWithWhereWithoutSipInput[]
    deleteMany?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
  }

  export type InvestmentUncheckedUpdateManyWithoutSipNestedInput = {
    create?: XOR<InvestmentCreateWithoutSipInput, InvestmentUncheckedCreateWithoutSipInput> | InvestmentCreateWithoutSipInput[] | InvestmentUncheckedCreateWithoutSipInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutSipInput | InvestmentCreateOrConnectWithoutSipInput[]
    upsert?: InvestmentUpsertWithWhereUniqueWithoutSipInput | InvestmentUpsertWithWhereUniqueWithoutSipInput[]
    createMany?: InvestmentCreateManySipInputEnvelope
    set?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    disconnect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    delete?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    update?: InvestmentUpdateWithWhereUniqueWithoutSipInput | InvestmentUpdateWithWhereUniqueWithoutSipInput[]
    updateMany?: InvestmentUpdateManyWithWhereWithoutSipInput | InvestmentUpdateManyWithWhereWithoutSipInput[]
    deleteMany?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutInvestmentsInput = {
    create?: XOR<UserCreateWithoutInvestmentsInput, UserUncheckedCreateWithoutInvestmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvestmentsInput
    connect?: UserWhereUniqueInput
  }

  export type SIPCreateNestedOneWithoutInvestmentsInput = {
    create?: XOR<SIPCreateWithoutInvestmentsInput, SIPUncheckedCreateWithoutInvestmentsInput>
    connectOrCreate?: SIPCreateOrConnectWithoutInvestmentsInput
    connect?: SIPWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutInvestmentInput = {
    create?: XOR<PaymentCreateWithoutInvestmentInput, PaymentUncheckedCreateWithoutInvestmentInput> | PaymentCreateWithoutInvestmentInput[] | PaymentUncheckedCreateWithoutInvestmentInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutInvestmentInput | PaymentCreateOrConnectWithoutInvestmentInput[]
    createMany?: PaymentCreateManyInvestmentInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutInvestmentInput = {
    create?: XOR<PaymentCreateWithoutInvestmentInput, PaymentUncheckedCreateWithoutInvestmentInput> | PaymentCreateWithoutInvestmentInput[] | PaymentUncheckedCreateWithoutInvestmentInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutInvestmentInput | PaymentCreateOrConnectWithoutInvestmentInput[]
    createMany?: PaymentCreateManyInvestmentInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type EnumInvestmentTypeFieldUpdateOperationsInput = {
    set?: $Enums.InvestmentType
  }

  export type EnumInvestmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.InvestmentStatus
  }

  export type UserUpdateOneRequiredWithoutInvestmentsNestedInput = {
    create?: XOR<UserCreateWithoutInvestmentsInput, UserUncheckedCreateWithoutInvestmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvestmentsInput
    upsert?: UserUpsertWithoutInvestmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInvestmentsInput, UserUpdateWithoutInvestmentsInput>, UserUncheckedUpdateWithoutInvestmentsInput>
  }

  export type SIPUpdateOneWithoutInvestmentsNestedInput = {
    create?: XOR<SIPCreateWithoutInvestmentsInput, SIPUncheckedCreateWithoutInvestmentsInput>
    connectOrCreate?: SIPCreateOrConnectWithoutInvestmentsInput
    upsert?: SIPUpsertWithoutInvestmentsInput
    disconnect?: SIPWhereInput | boolean
    delete?: SIPWhereInput | boolean
    connect?: SIPWhereUniqueInput
    update?: XOR<XOR<SIPUpdateToOneWithWhereWithoutInvestmentsInput, SIPUpdateWithoutInvestmentsInput>, SIPUncheckedUpdateWithoutInvestmentsInput>
  }

  export type PaymentUpdateManyWithoutInvestmentNestedInput = {
    create?: XOR<PaymentCreateWithoutInvestmentInput, PaymentUncheckedCreateWithoutInvestmentInput> | PaymentCreateWithoutInvestmentInput[] | PaymentUncheckedCreateWithoutInvestmentInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutInvestmentInput | PaymentCreateOrConnectWithoutInvestmentInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutInvestmentInput | PaymentUpsertWithWhereUniqueWithoutInvestmentInput[]
    createMany?: PaymentCreateManyInvestmentInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutInvestmentInput | PaymentUpdateWithWhereUniqueWithoutInvestmentInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutInvestmentInput | PaymentUpdateManyWithWhereWithoutInvestmentInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutInvestmentNestedInput = {
    create?: XOR<PaymentCreateWithoutInvestmentInput, PaymentUncheckedCreateWithoutInvestmentInput> | PaymentCreateWithoutInvestmentInput[] | PaymentUncheckedCreateWithoutInvestmentInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutInvestmentInput | PaymentCreateOrConnectWithoutInvestmentInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutInvestmentInput | PaymentUpsertWithWhereUniqueWithoutInvestmentInput[]
    createMany?: PaymentCreateManyInvestmentInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutInvestmentInput | PaymentUpdateWithWhereUniqueWithoutInvestmentInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutInvestmentInput | PaymentUpdateManyWithWhereWithoutInvestmentInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWatchlistInput = {
    create?: XOR<UserCreateWithoutWatchlistInput, UserUncheckedCreateWithoutWatchlistInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchlistInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWatchlistNestedInput = {
    create?: XOR<UserCreateWithoutWatchlistInput, UserUncheckedCreateWithoutWatchlistInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchlistInput
    upsert?: UserUpsertWithoutWatchlistInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWatchlistInput, UserUpdateWithoutWatchlistInput>, UserUncheckedUpdateWithoutWatchlistInput>
  }

  export type UserCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type InvestmentCreateNestedOneWithoutPaymentInput = {
    create?: XOR<InvestmentCreateWithoutPaymentInput, InvestmentUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: InvestmentCreateOrConnectWithoutPaymentInput
    connect?: InvestmentWhereUniqueInput
  }

  export type EnumPaymentModeFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMode
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type UserUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    upsert?: UserUpsertWithoutPaymentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentsInput, UserUpdateWithoutPaymentsInput>, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type InvestmentUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<InvestmentCreateWithoutPaymentInput, InvestmentUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: InvestmentCreateOrConnectWithoutPaymentInput
    upsert?: InvestmentUpsertWithoutPaymentInput
    disconnect?: InvestmentWhereInput | boolean
    delete?: InvestmentWhereInput | boolean
    connect?: InvestmentWhereUniqueInput
    update?: XOR<XOR<InvestmentUpdateToOneWithWhereWithoutPaymentInput, InvestmentUpdateWithoutPaymentInput>, InvestmentUncheckedUpdateWithoutPaymentInput>
  }

  export type BlogCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BlogCreateWithoutAuthorInput, BlogUncheckedCreateWithoutAuthorInput> | BlogCreateWithoutAuthorInput[] | BlogUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutAuthorInput | BlogCreateOrConnectWithoutAuthorInput[]
    createMany?: BlogCreateManyAuthorInputEnvelope
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
  }

  export type StoryCreateNestedManyWithoutAuthorInput = {
    create?: XOR<StoryCreateWithoutAuthorInput, StoryUncheckedCreateWithoutAuthorInput> | StoryCreateWithoutAuthorInput[] | StoryUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: StoryCreateOrConnectWithoutAuthorInput | StoryCreateOrConnectWithoutAuthorInput[]
    createMany?: StoryCreateManyAuthorInputEnvelope
    connect?: StoryWhereUniqueInput | StoryWhereUniqueInput[]
  }

  export type BlogUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BlogCreateWithoutAuthorInput, BlogUncheckedCreateWithoutAuthorInput> | BlogCreateWithoutAuthorInput[] | BlogUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutAuthorInput | BlogCreateOrConnectWithoutAuthorInput[]
    createMany?: BlogCreateManyAuthorInputEnvelope
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
  }

  export type StoryUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<StoryCreateWithoutAuthorInput, StoryUncheckedCreateWithoutAuthorInput> | StoryCreateWithoutAuthorInput[] | StoryUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: StoryCreateOrConnectWithoutAuthorInput | StoryCreateOrConnectWithoutAuthorInput[]
    createMany?: StoryCreateManyAuthorInputEnvelope
    connect?: StoryWhereUniqueInput | StoryWhereUniqueInput[]
  }

  export type EnumAdminRoleFieldUpdateOperationsInput = {
    set?: $Enums.AdminRole
  }

  export type BlogUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BlogCreateWithoutAuthorInput, BlogUncheckedCreateWithoutAuthorInput> | BlogCreateWithoutAuthorInput[] | BlogUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutAuthorInput | BlogCreateOrConnectWithoutAuthorInput[]
    upsert?: BlogUpsertWithWhereUniqueWithoutAuthorInput | BlogUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BlogCreateManyAuthorInputEnvelope
    set?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    disconnect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    delete?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    update?: BlogUpdateWithWhereUniqueWithoutAuthorInput | BlogUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BlogUpdateManyWithWhereWithoutAuthorInput | BlogUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BlogScalarWhereInput | BlogScalarWhereInput[]
  }

  export type StoryUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<StoryCreateWithoutAuthorInput, StoryUncheckedCreateWithoutAuthorInput> | StoryCreateWithoutAuthorInput[] | StoryUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: StoryCreateOrConnectWithoutAuthorInput | StoryCreateOrConnectWithoutAuthorInput[]
    upsert?: StoryUpsertWithWhereUniqueWithoutAuthorInput | StoryUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: StoryCreateManyAuthorInputEnvelope
    set?: StoryWhereUniqueInput | StoryWhereUniqueInput[]
    disconnect?: StoryWhereUniqueInput | StoryWhereUniqueInput[]
    delete?: StoryWhereUniqueInput | StoryWhereUniqueInput[]
    connect?: StoryWhereUniqueInput | StoryWhereUniqueInput[]
    update?: StoryUpdateWithWhereUniqueWithoutAuthorInput | StoryUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: StoryUpdateManyWithWhereWithoutAuthorInput | StoryUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: StoryScalarWhereInput | StoryScalarWhereInput[]
  }

  export type BlogUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BlogCreateWithoutAuthorInput, BlogUncheckedCreateWithoutAuthorInput> | BlogCreateWithoutAuthorInput[] | BlogUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutAuthorInput | BlogCreateOrConnectWithoutAuthorInput[]
    upsert?: BlogUpsertWithWhereUniqueWithoutAuthorInput | BlogUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BlogCreateManyAuthorInputEnvelope
    set?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    disconnect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    delete?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    update?: BlogUpdateWithWhereUniqueWithoutAuthorInput | BlogUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BlogUpdateManyWithWhereWithoutAuthorInput | BlogUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BlogScalarWhereInput | BlogScalarWhereInput[]
  }

  export type StoryUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<StoryCreateWithoutAuthorInput, StoryUncheckedCreateWithoutAuthorInput> | StoryCreateWithoutAuthorInput[] | StoryUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: StoryCreateOrConnectWithoutAuthorInput | StoryCreateOrConnectWithoutAuthorInput[]
    upsert?: StoryUpsertWithWhereUniqueWithoutAuthorInput | StoryUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: StoryCreateManyAuthorInputEnvelope
    set?: StoryWhereUniqueInput | StoryWhereUniqueInput[]
    disconnect?: StoryWhereUniqueInput | StoryWhereUniqueInput[]
    delete?: StoryWhereUniqueInput | StoryWhereUniqueInput[]
    connect?: StoryWhereUniqueInput | StoryWhereUniqueInput[]
    update?: StoryUpdateWithWhereUniqueWithoutAuthorInput | StoryUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: StoryUpdateManyWithWhereWithoutAuthorInput | StoryUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: StoryScalarWhereInput | StoryScalarWhereInput[]
  }

  export type BlogCreatetagsInput = {
    set: string[]
  }

  export type AdminCreateNestedOneWithoutBlogsInput = {
    create?: XOR<AdminCreateWithoutBlogsInput, AdminUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutBlogsInput
    connect?: AdminWhereUniqueInput
  }

  export type BlogUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumBlogStatusFieldUpdateOperationsInput = {
    set?: $Enums.BlogStatus
  }

  export type AdminUpdateOneRequiredWithoutBlogsNestedInput = {
    create?: XOR<AdminCreateWithoutBlogsInput, AdminUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutBlogsInput
    upsert?: AdminUpsertWithoutBlogsInput
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutBlogsInput, AdminUpdateWithoutBlogsInput>, AdminUncheckedUpdateWithoutBlogsInput>
  }

  export type AdminCreateNestedOneWithoutStoriesInput = {
    create?: XOR<AdminCreateWithoutStoriesInput, AdminUncheckedCreateWithoutStoriesInput>
    connectOrCreate?: AdminCreateOrConnectWithoutStoriesInput
    connect?: AdminWhereUniqueInput
  }

  export type EnumStoryStatusFieldUpdateOperationsInput = {
    set?: $Enums.StoryStatus
  }

  export type AdminUpdateOneRequiredWithoutStoriesNestedInput = {
    create?: XOR<AdminCreateWithoutStoriesInput, AdminUncheckedCreateWithoutStoriesInput>
    connectOrCreate?: AdminCreateOrConnectWithoutStoriesInput
    upsert?: AdminUpsertWithoutStoriesInput
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutStoriesInput, AdminUpdateWithoutStoriesInput>, AdminUncheckedUpdateWithoutStoriesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumMaritalStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMaritalStatusNullableFilter<$PrismaModel> | $Enums.MaritalStatus | null
  }

  export type NestedEnumEducationLevelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.EducationLevel | EnumEducationLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEducationLevelNullableFilter<$PrismaModel> | $Enums.EducationLevel | null
  }

  export type NestedEnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type NestedEnumAnnualIncomeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AnnualIncome | EnumAnnualIncomeFieldRefInput<$PrismaModel> | null
    in?: $Enums.AnnualIncome[] | ListEnumAnnualIncomeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AnnualIncome[] | ListEnumAnnualIncomeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAnnualIncomeNullableFilter<$PrismaModel> | $Enums.AnnualIncome | null
  }

  export type NestedEnumIncomeSourceNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.IncomeSource | EnumIncomeSourceFieldRefInput<$PrismaModel> | null
    in?: $Enums.IncomeSource[] | ListEnumIncomeSourceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.IncomeSource[] | ListEnumIncomeSourceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumIncomeSourceNullableFilter<$PrismaModel> | $Enums.IncomeSource | null
  }

  export type NestedEnumTaxResidencyNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TaxResidency | EnumTaxResidencyFieldRefInput<$PrismaModel> | null
    in?: $Enums.TaxResidency[] | ListEnumTaxResidencyFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TaxResidency[] | ListEnumTaxResidencyFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTaxResidencyNullableFilter<$PrismaModel> | $Enums.TaxResidency | null
  }

  export type NestedEnumResidentialStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ResidentialStatus | EnumResidentialStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ResidentialStatus[] | ListEnumResidentialStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ResidentialStatus[] | ListEnumResidentialStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumResidentialStatusNullableFilter<$PrismaModel> | $Enums.ResidentialStatus | null
  }

  export type NestedEnumOccupationTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.OccupationType | EnumOccupationTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.OccupationType[] | ListEnumOccupationTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.OccupationType[] | ListEnumOccupationTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumOccupationTypeNullableFilter<$PrismaModel> | $Enums.OccupationType | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumKycStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.KycStatus | EnumKycStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKycStatusFilter<$PrismaModel> | $Enums.KycStatus
  }

  export type NestedEnumKycTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.KycType | EnumKycTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.KycType[] | ListEnumKycTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.KycType[] | ListEnumKycTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumKycTypeNullableFilter<$PrismaModel> | $Enums.KycType | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type NestedEnumMaritalStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMaritalStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.MaritalStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMaritalStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumMaritalStatusNullableFilter<$PrismaModel>
  }

  export type NestedEnumEducationLevelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EducationLevel | EnumEducationLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEducationLevelNullableWithAggregatesFilter<$PrismaModel> | $Enums.EducationLevel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumEducationLevelNullableFilter<$PrismaModel>
    _max?: NestedEnumEducationLevelNullableFilter<$PrismaModel>
  }

  export type NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type NestedEnumAnnualIncomeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnnualIncome | EnumAnnualIncomeFieldRefInput<$PrismaModel> | null
    in?: $Enums.AnnualIncome[] | ListEnumAnnualIncomeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AnnualIncome[] | ListEnumAnnualIncomeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAnnualIncomeNullableWithAggregatesFilter<$PrismaModel> | $Enums.AnnualIncome | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAnnualIncomeNullableFilter<$PrismaModel>
    _max?: NestedEnumAnnualIncomeNullableFilter<$PrismaModel>
  }

  export type NestedEnumIncomeSourceNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IncomeSource | EnumIncomeSourceFieldRefInput<$PrismaModel> | null
    in?: $Enums.IncomeSource[] | ListEnumIncomeSourceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.IncomeSource[] | ListEnumIncomeSourceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumIncomeSourceNullableWithAggregatesFilter<$PrismaModel> | $Enums.IncomeSource | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumIncomeSourceNullableFilter<$PrismaModel>
    _max?: NestedEnumIncomeSourceNullableFilter<$PrismaModel>
  }

  export type NestedEnumTaxResidencyNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaxResidency | EnumTaxResidencyFieldRefInput<$PrismaModel> | null
    in?: $Enums.TaxResidency[] | ListEnumTaxResidencyFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TaxResidency[] | ListEnumTaxResidencyFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTaxResidencyNullableWithAggregatesFilter<$PrismaModel> | $Enums.TaxResidency | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTaxResidencyNullableFilter<$PrismaModel>
    _max?: NestedEnumTaxResidencyNullableFilter<$PrismaModel>
  }

  export type NestedEnumResidentialStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResidentialStatus | EnumResidentialStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ResidentialStatus[] | ListEnumResidentialStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ResidentialStatus[] | ListEnumResidentialStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumResidentialStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.ResidentialStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumResidentialStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumResidentialStatusNullableFilter<$PrismaModel>
  }

  export type NestedEnumOccupationTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OccupationType | EnumOccupationTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.OccupationType[] | ListEnumOccupationTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.OccupationType[] | ListEnumOccupationTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumOccupationTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.OccupationType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumOccupationTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumOccupationTypeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumKycStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KycStatus | EnumKycStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKycStatusWithAggregatesFilter<$PrismaModel> | $Enums.KycStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKycStatusFilter<$PrismaModel>
    _max?: NestedEnumKycStatusFilter<$PrismaModel>
  }

  export type NestedEnumKycTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KycType | EnumKycTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.KycType[] | ListEnumKycTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.KycType[] | ListEnumKycTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumKycTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.KycType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumKycTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumKycTypeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumKycSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.KycSessionStatus | EnumKycSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KycSessionStatus[] | ListEnumKycSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KycSessionStatus[] | ListEnumKycSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKycSessionStatusFilter<$PrismaModel> | $Enums.KycSessionStatus
  }

  export type NestedEnumKycSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KycSessionStatus | EnumKycSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KycSessionStatus[] | ListEnumKycSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KycSessionStatus[] | ListEnumKycSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKycSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.KycSessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKycSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumKycSessionStatusFilter<$PrismaModel>
  }

  export type NestedEnumSIPFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.SIPFrequency | EnumSIPFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.SIPFrequency[] | ListEnumSIPFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.SIPFrequency[] | ListEnumSIPFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumSIPFrequencyFilter<$PrismaModel> | $Enums.SIPFrequency
  }

  export type NestedEnumSIPStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SIPStatus | EnumSIPStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SIPStatus[] | ListEnumSIPStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SIPStatus[] | ListEnumSIPStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSIPStatusFilter<$PrismaModel> | $Enums.SIPStatus
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumSIPFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SIPFrequency | EnumSIPFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.SIPFrequency[] | ListEnumSIPFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.SIPFrequency[] | ListEnumSIPFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumSIPFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.SIPFrequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSIPFrequencyFilter<$PrismaModel>
    _max?: NestedEnumSIPFrequencyFilter<$PrismaModel>
  }

  export type NestedEnumSIPStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SIPStatus | EnumSIPStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SIPStatus[] | ListEnumSIPStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SIPStatus[] | ListEnumSIPStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSIPStatusWithAggregatesFilter<$PrismaModel> | $Enums.SIPStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSIPStatusFilter<$PrismaModel>
    _max?: NestedEnumSIPStatusFilter<$PrismaModel>
  }

  export type NestedEnumInvestmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InvestmentType | EnumInvestmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InvestmentType[] | ListEnumInvestmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvestmentType[] | ListEnumInvestmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInvestmentTypeFilter<$PrismaModel> | $Enums.InvestmentType
  }

  export type NestedEnumInvestmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvestmentStatus | EnumInvestmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvestmentStatus[] | ListEnumInvestmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvestmentStatus[] | ListEnumInvestmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvestmentStatusFilter<$PrismaModel> | $Enums.InvestmentStatus
  }

  export type NestedEnumInvestmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvestmentType | EnumInvestmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InvestmentType[] | ListEnumInvestmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvestmentType[] | ListEnumInvestmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInvestmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.InvestmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvestmentTypeFilter<$PrismaModel>
    _max?: NestedEnumInvestmentTypeFilter<$PrismaModel>
  }

  export type NestedEnumInvestmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvestmentStatus | EnumInvestmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvestmentStatus[] | ListEnumInvestmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvestmentStatus[] | ListEnumInvestmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvestmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvestmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvestmentStatusFilter<$PrismaModel>
    _max?: NestedEnumInvestmentStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentModeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMode | EnumPaymentModeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMode[] | ListEnumPaymentModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMode[] | ListEnumPaymentModeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentModeFilter<$PrismaModel> | $Enums.PaymentMode
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMode | EnumPaymentModeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMode[] | ListEnumPaymentModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMode[] | ListEnumPaymentModeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentModeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentModeFilter<$PrismaModel>
    _max?: NestedEnumPaymentModeFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumAdminRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminRoleFilter<$PrismaModel> | $Enums.AdminRole
  }

  export type NestedEnumAdminRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminRoleWithAggregatesFilter<$PrismaModel> | $Enums.AdminRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdminRoleFilter<$PrismaModel>
    _max?: NestedEnumAdminRoleFilter<$PrismaModel>
  }

  export type NestedEnumBlogStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BlogStatus | EnumBlogStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BlogStatus[] | ListEnumBlogStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlogStatus[] | ListEnumBlogStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBlogStatusFilter<$PrismaModel> | $Enums.BlogStatus
  }

  export type NestedEnumBlogStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BlogStatus | EnumBlogStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BlogStatus[] | ListEnumBlogStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlogStatus[] | ListEnumBlogStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBlogStatusWithAggregatesFilter<$PrismaModel> | $Enums.BlogStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBlogStatusFilter<$PrismaModel>
    _max?: NestedEnumBlogStatusFilter<$PrismaModel>
  }

  export type NestedEnumStoryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.StoryStatus | EnumStoryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StoryStatus[] | ListEnumStoryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StoryStatus[] | ListEnumStoryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStoryStatusFilter<$PrismaModel> | $Enums.StoryStatus
  }

  export type NestedEnumStoryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StoryStatus | EnumStoryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StoryStatus[] | ListEnumStoryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StoryStatus[] | ListEnumStoryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStoryStatusWithAggregatesFilter<$PrismaModel> | $Enums.StoryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStoryStatusFilter<$PrismaModel>
    _max?: NestedEnumStoryStatusFilter<$PrismaModel>
  }

  export type SIPCreateWithoutUserInput = {
    id?: string
    fundName: string
    amcCode: string
    schemeCode: string
    amountPerInstallment: number
    totalInstallments: number
    frequency: $Enums.SIPFrequency
    startDate: Date | string
    nextInstallment?: Date | string | null
    endDate?: Date | string | null
    status?: $Enums.SIPStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    investments?: InvestmentCreateNestedManyWithoutSipInput
  }

  export type SIPUncheckedCreateWithoutUserInput = {
    id?: string
    fundName: string
    amcCode: string
    schemeCode: string
    amountPerInstallment: number
    totalInstallments: number
    frequency: $Enums.SIPFrequency
    startDate: Date | string
    nextInstallment?: Date | string | null
    endDate?: Date | string | null
    status?: $Enums.SIPStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    investments?: InvestmentUncheckedCreateNestedManyWithoutSipInput
  }

  export type SIPCreateOrConnectWithoutUserInput = {
    where: SIPWhereUniqueInput
    create: XOR<SIPCreateWithoutUserInput, SIPUncheckedCreateWithoutUserInput>
  }

  export type SIPCreateManyUserInputEnvelope = {
    data: SIPCreateManyUserInput | SIPCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InvestmentCreateWithoutUserInput = {
    id?: string
    fundName: string
    amcCode: string
    schemeCode: string
    units: number
    navAtPurchase: number
    currentNav?: number | null
    type: $Enums.InvestmentType
    status: $Enums.InvestmentStatus
    purchaseDate: Date | string
    createdAt?: Date | string
    sip?: SIPCreateNestedOneWithoutInvestmentsInput
    Payment?: PaymentCreateNestedManyWithoutInvestmentInput
  }

  export type InvestmentUncheckedCreateWithoutUserInput = {
    id?: string
    sipId?: string | null
    fundName: string
    amcCode: string
    schemeCode: string
    units: number
    navAtPurchase: number
    currentNav?: number | null
    type: $Enums.InvestmentType
    status: $Enums.InvestmentStatus
    purchaseDate: Date | string
    createdAt?: Date | string
    Payment?: PaymentUncheckedCreateNestedManyWithoutInvestmentInput
  }

  export type InvestmentCreateOrConnectWithoutUserInput = {
    where: InvestmentWhereUniqueInput
    create: XOR<InvestmentCreateWithoutUserInput, InvestmentUncheckedCreateWithoutUserInput>
  }

  export type InvestmentCreateManyUserInputEnvelope = {
    data: InvestmentCreateManyUserInput | InvestmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutUserInput = {
    id?: string
    txnRef: string
    amount: number
    mode: $Enums.PaymentMode
    razorpayOrderId?: string | null
    upiRefId?: string | null
    status: $Enums.PaymentStatus
    createdAt?: Date | string
    investment?: InvestmentCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutUserInput = {
    id?: string
    investmentId?: string | null
    txnRef: string
    amount: number
    mode: $Enums.PaymentMode
    razorpayOrderId?: string | null
    upiRefId?: string | null
    status: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutUserInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentCreateManyUserInputEnvelope = {
    data: PaymentCreateManyUserInput | PaymentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type KycSessionCreateWithoutUserInput = {
    id?: string
    state: string
    codeVerifier: string
    status?: $Enums.KycSessionStatus
    errorCode?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type KycSessionUncheckedCreateWithoutUserInput = {
    id?: string
    state: string
    codeVerifier: string
    status?: $Enums.KycSessionStatus
    errorCode?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type KycSessionCreateOrConnectWithoutUserInput = {
    where: KycSessionWhereUniqueInput
    create: XOR<KycSessionCreateWithoutUserInput, KycSessionUncheckedCreateWithoutUserInput>
  }

  export type KycSessionCreateManyUserInputEnvelope = {
    data: KycSessionCreateManyUserInput | KycSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WatchlistCreateWithoutUserInput = {
    id?: string
    schemeCode: string
    amcCode: string
    fundName: string
    category?: string | null
    currentNav?: number | null
    addedAt?: Date | string
  }

  export type WatchlistUncheckedCreateWithoutUserInput = {
    id?: string
    schemeCode: string
    amcCode: string
    fundName: string
    category?: string | null
    currentNav?: number | null
    addedAt?: Date | string
  }

  export type WatchlistCreateOrConnectWithoutUserInput = {
    where: WatchlistWhereUniqueInput
    create: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput>
  }

  export type WatchlistCreateManyUserInputEnvelope = {
    data: WatchlistCreateManyUserInput | WatchlistCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SIPUpsertWithWhereUniqueWithoutUserInput = {
    where: SIPWhereUniqueInput
    update: XOR<SIPUpdateWithoutUserInput, SIPUncheckedUpdateWithoutUserInput>
    create: XOR<SIPCreateWithoutUserInput, SIPUncheckedCreateWithoutUserInput>
  }

  export type SIPUpdateWithWhereUniqueWithoutUserInput = {
    where: SIPWhereUniqueInput
    data: XOR<SIPUpdateWithoutUserInput, SIPUncheckedUpdateWithoutUserInput>
  }

  export type SIPUpdateManyWithWhereWithoutUserInput = {
    where: SIPScalarWhereInput
    data: XOR<SIPUpdateManyMutationInput, SIPUncheckedUpdateManyWithoutUserInput>
  }

  export type SIPScalarWhereInput = {
    AND?: SIPScalarWhereInput | SIPScalarWhereInput[]
    OR?: SIPScalarWhereInput[]
    NOT?: SIPScalarWhereInput | SIPScalarWhereInput[]
    id?: StringFilter<"SIP"> | string
    userId?: StringFilter<"SIP"> | string
    fundName?: StringFilter<"SIP"> | string
    amcCode?: StringFilter<"SIP"> | string
    schemeCode?: StringFilter<"SIP"> | string
    amountPerInstallment?: FloatFilter<"SIP"> | number
    totalInstallments?: IntFilter<"SIP"> | number
    frequency?: EnumSIPFrequencyFilter<"SIP"> | $Enums.SIPFrequency
    startDate?: DateTimeFilter<"SIP"> | Date | string
    nextInstallment?: DateTimeNullableFilter<"SIP"> | Date | string | null
    endDate?: DateTimeNullableFilter<"SIP"> | Date | string | null
    status?: EnumSIPStatusFilter<"SIP"> | $Enums.SIPStatus
    createdAt?: DateTimeFilter<"SIP"> | Date | string
    updatedAt?: DateTimeFilter<"SIP"> | Date | string
  }

  export type InvestmentUpsertWithWhereUniqueWithoutUserInput = {
    where: InvestmentWhereUniqueInput
    update: XOR<InvestmentUpdateWithoutUserInput, InvestmentUncheckedUpdateWithoutUserInput>
    create: XOR<InvestmentCreateWithoutUserInput, InvestmentUncheckedCreateWithoutUserInput>
  }

  export type InvestmentUpdateWithWhereUniqueWithoutUserInput = {
    where: InvestmentWhereUniqueInput
    data: XOR<InvestmentUpdateWithoutUserInput, InvestmentUncheckedUpdateWithoutUserInput>
  }

  export type InvestmentUpdateManyWithWhereWithoutUserInput = {
    where: InvestmentScalarWhereInput
    data: XOR<InvestmentUpdateManyMutationInput, InvestmentUncheckedUpdateManyWithoutUserInput>
  }

  export type InvestmentScalarWhereInput = {
    AND?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
    OR?: InvestmentScalarWhereInput[]
    NOT?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
    id?: StringFilter<"Investment"> | string
    userId?: StringFilter<"Investment"> | string
    sipId?: StringNullableFilter<"Investment"> | string | null
    fundName?: StringFilter<"Investment"> | string
    amcCode?: StringFilter<"Investment"> | string
    schemeCode?: StringFilter<"Investment"> | string
    units?: FloatFilter<"Investment"> | number
    navAtPurchase?: FloatFilter<"Investment"> | number
    currentNav?: FloatNullableFilter<"Investment"> | number | null
    type?: EnumInvestmentTypeFilter<"Investment"> | $Enums.InvestmentType
    status?: EnumInvestmentStatusFilter<"Investment"> | $Enums.InvestmentStatus
    purchaseDate?: DateTimeFilter<"Investment"> | Date | string
    createdAt?: DateTimeFilter<"Investment"> | Date | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
  }

  export type PaymentUpdateManyWithWhereWithoutUserInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    investmentId?: StringNullableFilter<"Payment"> | string | null
    txnRef?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    mode?: EnumPaymentModeFilter<"Payment"> | $Enums.PaymentMode
    razorpayOrderId?: StringNullableFilter<"Payment"> | string | null
    upiRefId?: StringNullableFilter<"Payment"> | string | null
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type KycSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: KycSessionWhereUniqueInput
    update: XOR<KycSessionUpdateWithoutUserInput, KycSessionUncheckedUpdateWithoutUserInput>
    create: XOR<KycSessionCreateWithoutUserInput, KycSessionUncheckedCreateWithoutUserInput>
  }

  export type KycSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: KycSessionWhereUniqueInput
    data: XOR<KycSessionUpdateWithoutUserInput, KycSessionUncheckedUpdateWithoutUserInput>
  }

  export type KycSessionUpdateManyWithWhereWithoutUserInput = {
    where: KycSessionScalarWhereInput
    data: XOR<KycSessionUpdateManyMutationInput, KycSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type KycSessionScalarWhereInput = {
    AND?: KycSessionScalarWhereInput | KycSessionScalarWhereInput[]
    OR?: KycSessionScalarWhereInput[]
    NOT?: KycSessionScalarWhereInput | KycSessionScalarWhereInput[]
    id?: StringFilter<"KycSession"> | string
    userId?: StringFilter<"KycSession"> | string
    state?: StringFilter<"KycSession"> | string
    codeVerifier?: StringFilter<"KycSession"> | string
    status?: EnumKycSessionStatusFilter<"KycSession"> | $Enums.KycSessionStatus
    errorCode?: StringNullableFilter<"KycSession"> | string | null
    errorMessage?: StringNullableFilter<"KycSession"> | string | null
    createdAt?: DateTimeFilter<"KycSession"> | Date | string
    expiresAt?: DateTimeFilter<"KycSession"> | Date | string
  }

  export type WatchlistUpsertWithWhereUniqueWithoutUserInput = {
    where: WatchlistWhereUniqueInput
    update: XOR<WatchlistUpdateWithoutUserInput, WatchlistUncheckedUpdateWithoutUserInput>
    create: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput>
  }

  export type WatchlistUpdateWithWhereUniqueWithoutUserInput = {
    where: WatchlistWhereUniqueInput
    data: XOR<WatchlistUpdateWithoutUserInput, WatchlistUncheckedUpdateWithoutUserInput>
  }

  export type WatchlistUpdateManyWithWhereWithoutUserInput = {
    where: WatchlistScalarWhereInput
    data: XOR<WatchlistUpdateManyMutationInput, WatchlistUncheckedUpdateManyWithoutUserInput>
  }

  export type WatchlistScalarWhereInput = {
    AND?: WatchlistScalarWhereInput | WatchlistScalarWhereInput[]
    OR?: WatchlistScalarWhereInput[]
    NOT?: WatchlistScalarWhereInput | WatchlistScalarWhereInput[]
    id?: StringFilter<"Watchlist"> | string
    userId?: StringFilter<"Watchlist"> | string
    schemeCode?: StringFilter<"Watchlist"> | string
    amcCode?: StringFilter<"Watchlist"> | string
    fundName?: StringFilter<"Watchlist"> | string
    category?: StringNullableFilter<"Watchlist"> | string | null
    currentNav?: FloatNullableFilter<"Watchlist"> | number | null
    addedAt?: DateTimeFilter<"Watchlist"> | Date | string
  }

  export type UserCreateWithoutKycSessionsInput = {
    id?: string
    fullName: string
    email: string
    currentStep?: number
    phone?: string | null
    encryptedPan?: string | null
    encryptedBankAcc?: string | null
    encryptedIfsc?: string | null
    bankAccountType?: string | null
    bankName?: string | null
    bankBranchName?: string | null
    bankAccountHolderName?: string | null
    bankVerified?: boolean
    bankVerifiedAt?: Date | string | null
    bankBeneficiaryName?: string | null
    bankNameMatchScore?: number | null
    upiId?: string | null
    dob?: Date | string | null
    maritalStatus?: $Enums.MaritalStatus | null
    education?: $Enums.EducationLevel | null
    motherName?: string | null
    fatherName?: string | null
    gender?: $Enums.Gender | null
    annualIncome?: $Enums.AnnualIncome | null
    incomeSource?: $Enums.IncomeSource | null
    taxResidency?: $Enums.TaxResidency | null
    residentialStatus?: $Enums.ResidentialStatus | null
    occupationType?: $Enums.OccupationType | null
    countryOfBirth?: string | null
    nationality?: string | null
    signatureUrl?: string | null
    nomineeName?: string | null
    nomineeRelation?: string | null
    nomineeAllocation?: number | null
    nomineeIdType?: string | null
    nomineeIdNumber?: string | null
    nomineeEmail?: string | null
    nomineeMobile?: string | null
    nomineeAddressLine1?: string | null
    nomineeAddressLine2?: string | null
    nomineeCity?: string | null
    nomineePincode?: string | null
    nomineeCountry?: string | null
    nomineeDob?: Date | string | null
    languagePref?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kycStatus?: $Enums.KycStatus
    digilockerKycId?: string | null
    digilockerid?: string | null
    aadhaarLinked?: boolean
    aadhaarLastFour?: string | null
    kycVerifiedAt?: Date | string | null
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    country?: string | null
    commAddressLine1?: string | null
    commAddressLine2?: string | null
    commCity?: string | null
    commState?: string | null
    commPincode?: string | null
    commCountry?: string | null
    useSameAddress?: boolean
    dlAccessToken?: string | null
    dlRefreshToken?: string | null
    dlTokenExpiresAt?: Date | string | null
    ckycRefId?: string | null
    kycType?: $Enums.KycType | null
    kraVerified?: boolean
    kraRefId?: string | null
    kraStatusCode?: string | null
    kraStatusDate?: Date | string | null
    fatcaDeclaration?: NullableJsonNullValueInput | InputJsonValue
    uccCode?: string | null
    fatcaSubmitted?: boolean
    elogAuthenticated?: boolean
    nseStatus?: string | null
    nseLastUpdated?: Date | string | null
    sips?: SIPCreateNestedManyWithoutUserInput
    investments?: InvestmentCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    watchlist?: WatchlistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutKycSessionsInput = {
    id?: string
    fullName: string
    email: string
    currentStep?: number
    phone?: string | null
    encryptedPan?: string | null
    encryptedBankAcc?: string | null
    encryptedIfsc?: string | null
    bankAccountType?: string | null
    bankName?: string | null
    bankBranchName?: string | null
    bankAccountHolderName?: string | null
    bankVerified?: boolean
    bankVerifiedAt?: Date | string | null
    bankBeneficiaryName?: string | null
    bankNameMatchScore?: number | null
    upiId?: string | null
    dob?: Date | string | null
    maritalStatus?: $Enums.MaritalStatus | null
    education?: $Enums.EducationLevel | null
    motherName?: string | null
    fatherName?: string | null
    gender?: $Enums.Gender | null
    annualIncome?: $Enums.AnnualIncome | null
    incomeSource?: $Enums.IncomeSource | null
    taxResidency?: $Enums.TaxResidency | null
    residentialStatus?: $Enums.ResidentialStatus | null
    occupationType?: $Enums.OccupationType | null
    countryOfBirth?: string | null
    nationality?: string | null
    signatureUrl?: string | null
    nomineeName?: string | null
    nomineeRelation?: string | null
    nomineeAllocation?: number | null
    nomineeIdType?: string | null
    nomineeIdNumber?: string | null
    nomineeEmail?: string | null
    nomineeMobile?: string | null
    nomineeAddressLine1?: string | null
    nomineeAddressLine2?: string | null
    nomineeCity?: string | null
    nomineePincode?: string | null
    nomineeCountry?: string | null
    nomineeDob?: Date | string | null
    languagePref?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kycStatus?: $Enums.KycStatus
    digilockerKycId?: string | null
    digilockerid?: string | null
    aadhaarLinked?: boolean
    aadhaarLastFour?: string | null
    kycVerifiedAt?: Date | string | null
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    country?: string | null
    commAddressLine1?: string | null
    commAddressLine2?: string | null
    commCity?: string | null
    commState?: string | null
    commPincode?: string | null
    commCountry?: string | null
    useSameAddress?: boolean
    dlAccessToken?: string | null
    dlRefreshToken?: string | null
    dlTokenExpiresAt?: Date | string | null
    ckycRefId?: string | null
    kycType?: $Enums.KycType | null
    kraVerified?: boolean
    kraRefId?: string | null
    kraStatusCode?: string | null
    kraStatusDate?: Date | string | null
    fatcaDeclaration?: NullableJsonNullValueInput | InputJsonValue
    uccCode?: string | null
    fatcaSubmitted?: boolean
    elogAuthenticated?: boolean
    nseStatus?: string | null
    nseLastUpdated?: Date | string | null
    sips?: SIPUncheckedCreateNestedManyWithoutUserInput
    investments?: InvestmentUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    watchlist?: WatchlistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutKycSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutKycSessionsInput, UserUncheckedCreateWithoutKycSessionsInput>
  }

  export type UserUpsertWithoutKycSessionsInput = {
    update: XOR<UserUpdateWithoutKycSessionsInput, UserUncheckedUpdateWithoutKycSessionsInput>
    create: XOR<UserCreateWithoutKycSessionsInput, UserUncheckedCreateWithoutKycSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutKycSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutKycSessionsInput, UserUncheckedUpdateWithoutKycSessionsInput>
  }

  export type UserUpdateWithoutKycSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    currentStep?: IntFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedPan?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedBankAcc?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedIfsc?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountType?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranchName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolderName?: NullableStringFieldUpdateOperationsInput | string | null
    bankVerified?: BoolFieldUpdateOperationsInput | boolean
    bankVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bankBeneficiaryName?: NullableStringFieldUpdateOperationsInput | string | null
    bankNameMatchScore?: NullableIntFieldUpdateOperationsInput | number | null
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    education?: NullableEnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    annualIncome?: NullableEnumAnnualIncomeFieldUpdateOperationsInput | $Enums.AnnualIncome | null
    incomeSource?: NullableEnumIncomeSourceFieldUpdateOperationsInput | $Enums.IncomeSource | null
    taxResidency?: NullableEnumTaxResidencyFieldUpdateOperationsInput | $Enums.TaxResidency | null
    residentialStatus?: NullableEnumResidentialStatusFieldUpdateOperationsInput | $Enums.ResidentialStatus | null
    occupationType?: NullableEnumOccupationTypeFieldUpdateOperationsInput | $Enums.OccupationType | null
    countryOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    signatureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeName?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeRelation?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeAllocation?: NullableFloatFieldUpdateOperationsInput | number | null
    nomineeIdType?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeIdNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeMobile?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeAddressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeAddressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeCity?: NullableStringFieldUpdateOperationsInput | string | null
    nomineePincode?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeCountry?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeDob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    languagePref?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    digilockerKycId?: NullableStringFieldUpdateOperationsInput | string | null
    digilockerid?: NullableStringFieldUpdateOperationsInput | string | null
    aadhaarLinked?: BoolFieldUpdateOperationsInput | boolean
    aadhaarLastFour?: NullableStringFieldUpdateOperationsInput | string | null
    kycVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    commAddressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    commAddressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    commCity?: NullableStringFieldUpdateOperationsInput | string | null
    commState?: NullableStringFieldUpdateOperationsInput | string | null
    commPincode?: NullableStringFieldUpdateOperationsInput | string | null
    commCountry?: NullableStringFieldUpdateOperationsInput | string | null
    useSameAddress?: BoolFieldUpdateOperationsInput | boolean
    dlAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    dlRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    dlTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ckycRefId?: NullableStringFieldUpdateOperationsInput | string | null
    kycType?: NullableEnumKycTypeFieldUpdateOperationsInput | $Enums.KycType | null
    kraVerified?: BoolFieldUpdateOperationsInput | boolean
    kraRefId?: NullableStringFieldUpdateOperationsInput | string | null
    kraStatusCode?: NullableStringFieldUpdateOperationsInput | string | null
    kraStatusDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fatcaDeclaration?: NullableJsonNullValueInput | InputJsonValue
    uccCode?: NullableStringFieldUpdateOperationsInput | string | null
    fatcaSubmitted?: BoolFieldUpdateOperationsInput | boolean
    elogAuthenticated?: BoolFieldUpdateOperationsInput | boolean
    nseStatus?: NullableStringFieldUpdateOperationsInput | string | null
    nseLastUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sips?: SIPUpdateManyWithoutUserNestedInput
    investments?: InvestmentUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    watchlist?: WatchlistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutKycSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    currentStep?: IntFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedPan?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedBankAcc?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedIfsc?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountType?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranchName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolderName?: NullableStringFieldUpdateOperationsInput | string | null
    bankVerified?: BoolFieldUpdateOperationsInput | boolean
    bankVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bankBeneficiaryName?: NullableStringFieldUpdateOperationsInput | string | null
    bankNameMatchScore?: NullableIntFieldUpdateOperationsInput | number | null
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    education?: NullableEnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    annualIncome?: NullableEnumAnnualIncomeFieldUpdateOperationsInput | $Enums.AnnualIncome | null
    incomeSource?: NullableEnumIncomeSourceFieldUpdateOperationsInput | $Enums.IncomeSource | null
    taxResidency?: NullableEnumTaxResidencyFieldUpdateOperationsInput | $Enums.TaxResidency | null
    residentialStatus?: NullableEnumResidentialStatusFieldUpdateOperationsInput | $Enums.ResidentialStatus | null
    occupationType?: NullableEnumOccupationTypeFieldUpdateOperationsInput | $Enums.OccupationType | null
    countryOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    signatureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeName?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeRelation?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeAllocation?: NullableFloatFieldUpdateOperationsInput | number | null
    nomineeIdType?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeIdNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeMobile?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeAddressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeAddressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeCity?: NullableStringFieldUpdateOperationsInput | string | null
    nomineePincode?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeCountry?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeDob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    languagePref?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    digilockerKycId?: NullableStringFieldUpdateOperationsInput | string | null
    digilockerid?: NullableStringFieldUpdateOperationsInput | string | null
    aadhaarLinked?: BoolFieldUpdateOperationsInput | boolean
    aadhaarLastFour?: NullableStringFieldUpdateOperationsInput | string | null
    kycVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    commAddressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    commAddressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    commCity?: NullableStringFieldUpdateOperationsInput | string | null
    commState?: NullableStringFieldUpdateOperationsInput | string | null
    commPincode?: NullableStringFieldUpdateOperationsInput | string | null
    commCountry?: NullableStringFieldUpdateOperationsInput | string | null
    useSameAddress?: BoolFieldUpdateOperationsInput | boolean
    dlAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    dlRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    dlTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ckycRefId?: NullableStringFieldUpdateOperationsInput | string | null
    kycType?: NullableEnumKycTypeFieldUpdateOperationsInput | $Enums.KycType | null
    kraVerified?: BoolFieldUpdateOperationsInput | boolean
    kraRefId?: NullableStringFieldUpdateOperationsInput | string | null
    kraStatusCode?: NullableStringFieldUpdateOperationsInput | string | null
    kraStatusDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fatcaDeclaration?: NullableJsonNullValueInput | InputJsonValue
    uccCode?: NullableStringFieldUpdateOperationsInput | string | null
    fatcaSubmitted?: BoolFieldUpdateOperationsInput | boolean
    elogAuthenticated?: BoolFieldUpdateOperationsInput | boolean
    nseStatus?: NullableStringFieldUpdateOperationsInput | string | null
    nseLastUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sips?: SIPUncheckedUpdateManyWithoutUserNestedInput
    investments?: InvestmentUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    watchlist?: WatchlistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSipsInput = {
    id?: string
    fullName: string
    email: string
    currentStep?: number
    phone?: string | null
    encryptedPan?: string | null
    encryptedBankAcc?: string | null
    encryptedIfsc?: string | null
    bankAccountType?: string | null
    bankName?: string | null
    bankBranchName?: string | null
    bankAccountHolderName?: string | null
    bankVerified?: boolean
    bankVerifiedAt?: Date | string | null
    bankBeneficiaryName?: string | null
    bankNameMatchScore?: number | null
    upiId?: string | null
    dob?: Date | string | null
    maritalStatus?: $Enums.MaritalStatus | null
    education?: $Enums.EducationLevel | null
    motherName?: string | null
    fatherName?: string | null
    gender?: $Enums.Gender | null
    annualIncome?: $Enums.AnnualIncome | null
    incomeSource?: $Enums.IncomeSource | null
    taxResidency?: $Enums.TaxResidency | null
    residentialStatus?: $Enums.ResidentialStatus | null
    occupationType?: $Enums.OccupationType | null
    countryOfBirth?: string | null
    nationality?: string | null
    signatureUrl?: string | null
    nomineeName?: string | null
    nomineeRelation?: string | null
    nomineeAllocation?: number | null
    nomineeIdType?: string | null
    nomineeIdNumber?: string | null
    nomineeEmail?: string | null
    nomineeMobile?: string | null
    nomineeAddressLine1?: string | null
    nomineeAddressLine2?: string | null
    nomineeCity?: string | null
    nomineePincode?: string | null
    nomineeCountry?: string | null
    nomineeDob?: Date | string | null
    languagePref?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kycStatus?: $Enums.KycStatus
    digilockerKycId?: string | null
    digilockerid?: string | null
    aadhaarLinked?: boolean
    aadhaarLastFour?: string | null
    kycVerifiedAt?: Date | string | null
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    country?: string | null
    commAddressLine1?: string | null
    commAddressLine2?: string | null
    commCity?: string | null
    commState?: string | null
    commPincode?: string | null
    commCountry?: string | null
    useSameAddress?: boolean
    dlAccessToken?: string | null
    dlRefreshToken?: string | null
    dlTokenExpiresAt?: Date | string | null
    ckycRefId?: string | null
    kycType?: $Enums.KycType | null
    kraVerified?: boolean
    kraRefId?: string | null
    kraStatusCode?: string | null
    kraStatusDate?: Date | string | null
    fatcaDeclaration?: NullableJsonNullValueInput | InputJsonValue
    uccCode?: string | null
    fatcaSubmitted?: boolean
    elogAuthenticated?: boolean
    nseStatus?: string | null
    nseLastUpdated?: Date | string | null
    investments?: InvestmentCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    kycSessions?: KycSessionCreateNestedManyWithoutUserInput
    watchlist?: WatchlistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSipsInput = {
    id?: string
    fullName: string
    email: string
    currentStep?: number
    phone?: string | null
    encryptedPan?: string | null
    encryptedBankAcc?: string | null
    encryptedIfsc?: string | null
    bankAccountType?: string | null
    bankName?: string | null
    bankBranchName?: string | null
    bankAccountHolderName?: string | null
    bankVerified?: boolean
    bankVerifiedAt?: Date | string | null
    bankBeneficiaryName?: string | null
    bankNameMatchScore?: number | null
    upiId?: string | null
    dob?: Date | string | null
    maritalStatus?: $Enums.MaritalStatus | null
    education?: $Enums.EducationLevel | null
    motherName?: string | null
    fatherName?: string | null
    gender?: $Enums.Gender | null
    annualIncome?: $Enums.AnnualIncome | null
    incomeSource?: $Enums.IncomeSource | null
    taxResidency?: $Enums.TaxResidency | null
    residentialStatus?: $Enums.ResidentialStatus | null
    occupationType?: $Enums.OccupationType | null
    countryOfBirth?: string | null
    nationality?: string | null
    signatureUrl?: string | null
    nomineeName?: string | null
    nomineeRelation?: string | null
    nomineeAllocation?: number | null
    nomineeIdType?: string | null
    nomineeIdNumber?: string | null
    nomineeEmail?: string | null
    nomineeMobile?: string | null
    nomineeAddressLine1?: string | null
    nomineeAddressLine2?: string | null
    nomineeCity?: string | null
    nomineePincode?: string | null
    nomineeCountry?: string | null
    nomineeDob?: Date | string | null
    languagePref?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kycStatus?: $Enums.KycStatus
    digilockerKycId?: string | null
    digilockerid?: string | null
    aadhaarLinked?: boolean
    aadhaarLastFour?: string | null
    kycVerifiedAt?: Date | string | null
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    country?: string | null
    commAddressLine1?: string | null
    commAddressLine2?: string | null
    commCity?: string | null
    commState?: string | null
    commPincode?: string | null
    commCountry?: string | null
    useSameAddress?: boolean
    dlAccessToken?: string | null
    dlRefreshToken?: string | null
    dlTokenExpiresAt?: Date | string | null
    ckycRefId?: string | null
    kycType?: $Enums.KycType | null
    kraVerified?: boolean
    kraRefId?: string | null
    kraStatusCode?: string | null
    kraStatusDate?: Date | string | null
    fatcaDeclaration?: NullableJsonNullValueInput | InputJsonValue
    uccCode?: string | null
    fatcaSubmitted?: boolean
    elogAuthenticated?: boolean
    nseStatus?: string | null
    nseLastUpdated?: Date | string | null
    investments?: InvestmentUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    kycSessions?: KycSessionUncheckedCreateNestedManyWithoutUserInput
    watchlist?: WatchlistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSipsInput, UserUncheckedCreateWithoutSipsInput>
  }

  export type InvestmentCreateWithoutSipInput = {
    id?: string
    fundName: string
    amcCode: string
    schemeCode: string
    units: number
    navAtPurchase: number
    currentNav?: number | null
    type: $Enums.InvestmentType
    status: $Enums.InvestmentStatus
    purchaseDate: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutInvestmentsInput
    Payment?: PaymentCreateNestedManyWithoutInvestmentInput
  }

  export type InvestmentUncheckedCreateWithoutSipInput = {
    id?: string
    userId: string
    fundName: string
    amcCode: string
    schemeCode: string
    units: number
    navAtPurchase: number
    currentNav?: number | null
    type: $Enums.InvestmentType
    status: $Enums.InvestmentStatus
    purchaseDate: Date | string
    createdAt?: Date | string
    Payment?: PaymentUncheckedCreateNestedManyWithoutInvestmentInput
  }

  export type InvestmentCreateOrConnectWithoutSipInput = {
    where: InvestmentWhereUniqueInput
    create: XOR<InvestmentCreateWithoutSipInput, InvestmentUncheckedCreateWithoutSipInput>
  }

  export type InvestmentCreateManySipInputEnvelope = {
    data: InvestmentCreateManySipInput | InvestmentCreateManySipInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSipsInput = {
    update: XOR<UserUpdateWithoutSipsInput, UserUncheckedUpdateWithoutSipsInput>
    create: XOR<UserCreateWithoutSipsInput, UserUncheckedCreateWithoutSipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSipsInput, UserUncheckedUpdateWithoutSipsInput>
  }

  export type UserUpdateWithoutSipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    currentStep?: IntFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedPan?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedBankAcc?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedIfsc?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountType?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranchName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolderName?: NullableStringFieldUpdateOperationsInput | string | null
    bankVerified?: BoolFieldUpdateOperationsInput | boolean
    bankVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bankBeneficiaryName?: NullableStringFieldUpdateOperationsInput | string | null
    bankNameMatchScore?: NullableIntFieldUpdateOperationsInput | number | null
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    education?: NullableEnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    annualIncome?: NullableEnumAnnualIncomeFieldUpdateOperationsInput | $Enums.AnnualIncome | null
    incomeSource?: NullableEnumIncomeSourceFieldUpdateOperationsInput | $Enums.IncomeSource | null
    taxResidency?: NullableEnumTaxResidencyFieldUpdateOperationsInput | $Enums.TaxResidency | null
    residentialStatus?: NullableEnumResidentialStatusFieldUpdateOperationsInput | $Enums.ResidentialStatus | null
    occupationType?: NullableEnumOccupationTypeFieldUpdateOperationsInput | $Enums.OccupationType | null
    countryOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    signatureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeName?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeRelation?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeAllocation?: NullableFloatFieldUpdateOperationsInput | number | null
    nomineeIdType?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeIdNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeMobile?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeAddressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeAddressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeCity?: NullableStringFieldUpdateOperationsInput | string | null
    nomineePincode?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeCountry?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeDob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    languagePref?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    digilockerKycId?: NullableStringFieldUpdateOperationsInput | string | null
    digilockerid?: NullableStringFieldUpdateOperationsInput | string | null
    aadhaarLinked?: BoolFieldUpdateOperationsInput | boolean
    aadhaarLastFour?: NullableStringFieldUpdateOperationsInput | string | null
    kycVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    commAddressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    commAddressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    commCity?: NullableStringFieldUpdateOperationsInput | string | null
    commState?: NullableStringFieldUpdateOperationsInput | string | null
    commPincode?: NullableStringFieldUpdateOperationsInput | string | null
    commCountry?: NullableStringFieldUpdateOperationsInput | string | null
    useSameAddress?: BoolFieldUpdateOperationsInput | boolean
    dlAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    dlRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    dlTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ckycRefId?: NullableStringFieldUpdateOperationsInput | string | null
    kycType?: NullableEnumKycTypeFieldUpdateOperationsInput | $Enums.KycType | null
    kraVerified?: BoolFieldUpdateOperationsInput | boolean
    kraRefId?: NullableStringFieldUpdateOperationsInput | string | null
    kraStatusCode?: NullableStringFieldUpdateOperationsInput | string | null
    kraStatusDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fatcaDeclaration?: NullableJsonNullValueInput | InputJsonValue
    uccCode?: NullableStringFieldUpdateOperationsInput | string | null
    fatcaSubmitted?: BoolFieldUpdateOperationsInput | boolean
    elogAuthenticated?: BoolFieldUpdateOperationsInput | boolean
    nseStatus?: NullableStringFieldUpdateOperationsInput | string | null
    nseLastUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    investments?: InvestmentUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    kycSessions?: KycSessionUpdateManyWithoutUserNestedInput
    watchlist?: WatchlistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    currentStep?: IntFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedPan?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedBankAcc?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedIfsc?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountType?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranchName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolderName?: NullableStringFieldUpdateOperationsInput | string | null
    bankVerified?: BoolFieldUpdateOperationsInput | boolean
    bankVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bankBeneficiaryName?: NullableStringFieldUpdateOperationsInput | string | null
    bankNameMatchScore?: NullableIntFieldUpdateOperationsInput | number | null
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    education?: NullableEnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    annualIncome?: NullableEnumAnnualIncomeFieldUpdateOperationsInput | $Enums.AnnualIncome | null
    incomeSource?: NullableEnumIncomeSourceFieldUpdateOperationsInput | $Enums.IncomeSource | null
    taxResidency?: NullableEnumTaxResidencyFieldUpdateOperationsInput | $Enums.TaxResidency | null
    residentialStatus?: NullableEnumResidentialStatusFieldUpdateOperationsInput | $Enums.ResidentialStatus | null
    occupationType?: NullableEnumOccupationTypeFieldUpdateOperationsInput | $Enums.OccupationType | null
    countryOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    signatureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeName?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeRelation?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeAllocation?: NullableFloatFieldUpdateOperationsInput | number | null
    nomineeIdType?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeIdNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeMobile?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeAddressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeAddressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeCity?: NullableStringFieldUpdateOperationsInput | string | null
    nomineePincode?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeCountry?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeDob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    languagePref?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    digilockerKycId?: NullableStringFieldUpdateOperationsInput | string | null
    digilockerid?: NullableStringFieldUpdateOperationsInput | string | null
    aadhaarLinked?: BoolFieldUpdateOperationsInput | boolean
    aadhaarLastFour?: NullableStringFieldUpdateOperationsInput | string | null
    kycVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    commAddressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    commAddressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    commCity?: NullableStringFieldUpdateOperationsInput | string | null
    commState?: NullableStringFieldUpdateOperationsInput | string | null
    commPincode?: NullableStringFieldUpdateOperationsInput | string | null
    commCountry?: NullableStringFieldUpdateOperationsInput | string | null
    useSameAddress?: BoolFieldUpdateOperationsInput | boolean
    dlAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    dlRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    dlTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ckycRefId?: NullableStringFieldUpdateOperationsInput | string | null
    kycType?: NullableEnumKycTypeFieldUpdateOperationsInput | $Enums.KycType | null
    kraVerified?: BoolFieldUpdateOperationsInput | boolean
    kraRefId?: NullableStringFieldUpdateOperationsInput | string | null
    kraStatusCode?: NullableStringFieldUpdateOperationsInput | string | null
    kraStatusDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fatcaDeclaration?: NullableJsonNullValueInput | InputJsonValue
    uccCode?: NullableStringFieldUpdateOperationsInput | string | null
    fatcaSubmitted?: BoolFieldUpdateOperationsInput | boolean
    elogAuthenticated?: BoolFieldUpdateOperationsInput | boolean
    nseStatus?: NullableStringFieldUpdateOperationsInput | string | null
    nseLastUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    investments?: InvestmentUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    kycSessions?: KycSessionUncheckedUpdateManyWithoutUserNestedInput
    watchlist?: WatchlistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type InvestmentUpsertWithWhereUniqueWithoutSipInput = {
    where: InvestmentWhereUniqueInput
    update: XOR<InvestmentUpdateWithoutSipInput, InvestmentUncheckedUpdateWithoutSipInput>
    create: XOR<InvestmentCreateWithoutSipInput, InvestmentUncheckedCreateWithoutSipInput>
  }

  export type InvestmentUpdateWithWhereUniqueWithoutSipInput = {
    where: InvestmentWhereUniqueInput
    data: XOR<InvestmentUpdateWithoutSipInput, InvestmentUncheckedUpdateWithoutSipInput>
  }

  export type InvestmentUpdateManyWithWhereWithoutSipInput = {
    where: InvestmentScalarWhereInput
    data: XOR<InvestmentUpdateManyMutationInput, InvestmentUncheckedUpdateManyWithoutSipInput>
  }

  export type UserCreateWithoutInvestmentsInput = {
    id?: string
    fullName: string
    email: string
    currentStep?: number
    phone?: string | null
    encryptedPan?: string | null
    encryptedBankAcc?: string | null
    encryptedIfsc?: string | null
    bankAccountType?: string | null
    bankName?: string | null
    bankBranchName?: string | null
    bankAccountHolderName?: string | null
    bankVerified?: boolean
    bankVerifiedAt?: Date | string | null
    bankBeneficiaryName?: string | null
    bankNameMatchScore?: number | null
    upiId?: string | null
    dob?: Date | string | null
    maritalStatus?: $Enums.MaritalStatus | null
    education?: $Enums.EducationLevel | null
    motherName?: string | null
    fatherName?: string | null
    gender?: $Enums.Gender | null
    annualIncome?: $Enums.AnnualIncome | null
    incomeSource?: $Enums.IncomeSource | null
    taxResidency?: $Enums.TaxResidency | null
    residentialStatus?: $Enums.ResidentialStatus | null
    occupationType?: $Enums.OccupationType | null
    countryOfBirth?: string | null
    nationality?: string | null
    signatureUrl?: string | null
    nomineeName?: string | null
    nomineeRelation?: string | null
    nomineeAllocation?: number | null
    nomineeIdType?: string | null
    nomineeIdNumber?: string | null
    nomineeEmail?: string | null
    nomineeMobile?: string | null
    nomineeAddressLine1?: string | null
    nomineeAddressLine2?: string | null
    nomineeCity?: string | null
    nomineePincode?: string | null
    nomineeCountry?: string | null
    nomineeDob?: Date | string | null
    languagePref?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kycStatus?: $Enums.KycStatus
    digilockerKycId?: string | null
    digilockerid?: string | null
    aadhaarLinked?: boolean
    aadhaarLastFour?: string | null
    kycVerifiedAt?: Date | string | null
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    country?: string | null
    commAddressLine1?: string | null
    commAddressLine2?: string | null
    commCity?: string | null
    commState?: string | null
    commPincode?: string | null
    commCountry?: string | null
    useSameAddress?: boolean
    dlAccessToken?: string | null
    dlRefreshToken?: string | null
    dlTokenExpiresAt?: Date | string | null
    ckycRefId?: string | null
    kycType?: $Enums.KycType | null
    kraVerified?: boolean
    kraRefId?: string | null
    kraStatusCode?: string | null
    kraStatusDate?: Date | string | null
    fatcaDeclaration?: NullableJsonNullValueInput | InputJsonValue
    uccCode?: string | null
    fatcaSubmitted?: boolean
    elogAuthenticated?: boolean
    nseStatus?: string | null
    nseLastUpdated?: Date | string | null
    sips?: SIPCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    kycSessions?: KycSessionCreateNestedManyWithoutUserInput
    watchlist?: WatchlistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInvestmentsInput = {
    id?: string
    fullName: string
    email: string
    currentStep?: number
    phone?: string | null
    encryptedPan?: string | null
    encryptedBankAcc?: string | null
    encryptedIfsc?: string | null
    bankAccountType?: string | null
    bankName?: string | null
    bankBranchName?: string | null
    bankAccountHolderName?: string | null
    bankVerified?: boolean
    bankVerifiedAt?: Date | string | null
    bankBeneficiaryName?: string | null
    bankNameMatchScore?: number | null
    upiId?: string | null
    dob?: Date | string | null
    maritalStatus?: $Enums.MaritalStatus | null
    education?: $Enums.EducationLevel | null
    motherName?: string | null
    fatherName?: string | null
    gender?: $Enums.Gender | null
    annualIncome?: $Enums.AnnualIncome | null
    incomeSource?: $Enums.IncomeSource | null
    taxResidency?: $Enums.TaxResidency | null
    residentialStatus?: $Enums.ResidentialStatus | null
    occupationType?: $Enums.OccupationType | null
    countryOfBirth?: string | null
    nationality?: string | null
    signatureUrl?: string | null
    nomineeName?: string | null
    nomineeRelation?: string | null
    nomineeAllocation?: number | null
    nomineeIdType?: string | null
    nomineeIdNumber?: string | null
    nomineeEmail?: string | null
    nomineeMobile?: string | null
    nomineeAddressLine1?: string | null
    nomineeAddressLine2?: string | null
    nomineeCity?: string | null
    nomineePincode?: string | null
    nomineeCountry?: string | null
    nomineeDob?: Date | string | null
    languagePref?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kycStatus?: $Enums.KycStatus
    digilockerKycId?: string | null
    digilockerid?: string | null
    aadhaarLinked?: boolean
    aadhaarLastFour?: string | null
    kycVerifiedAt?: Date | string | null
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    country?: string | null
    commAddressLine1?: string | null
    commAddressLine2?: string | null
    commCity?: string | null
    commState?: string | null
    commPincode?: string | null
    commCountry?: string | null
    useSameAddress?: boolean
    dlAccessToken?: string | null
    dlRefreshToken?: string | null
    dlTokenExpiresAt?: Date | string | null
    ckycRefId?: string | null
    kycType?: $Enums.KycType | null
    kraVerified?: boolean
    kraRefId?: string | null
    kraStatusCode?: string | null
    kraStatusDate?: Date | string | null
    fatcaDeclaration?: NullableJsonNullValueInput | InputJsonValue
    uccCode?: string | null
    fatcaSubmitted?: boolean
    elogAuthenticated?: boolean
    nseStatus?: string | null
    nseLastUpdated?: Date | string | null
    sips?: SIPUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    kycSessions?: KycSessionUncheckedCreateNestedManyWithoutUserInput
    watchlist?: WatchlistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInvestmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvestmentsInput, UserUncheckedCreateWithoutInvestmentsInput>
  }

  export type SIPCreateWithoutInvestmentsInput = {
    id?: string
    fundName: string
    amcCode: string
    schemeCode: string
    amountPerInstallment: number
    totalInstallments: number
    frequency: $Enums.SIPFrequency
    startDate: Date | string
    nextInstallment?: Date | string | null
    endDate?: Date | string | null
    status?: $Enums.SIPStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSipsInput
  }

  export type SIPUncheckedCreateWithoutInvestmentsInput = {
    id?: string
    userId: string
    fundName: string
    amcCode: string
    schemeCode: string
    amountPerInstallment: number
    totalInstallments: number
    frequency: $Enums.SIPFrequency
    startDate: Date | string
    nextInstallment?: Date | string | null
    endDate?: Date | string | null
    status?: $Enums.SIPStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SIPCreateOrConnectWithoutInvestmentsInput = {
    where: SIPWhereUniqueInput
    create: XOR<SIPCreateWithoutInvestmentsInput, SIPUncheckedCreateWithoutInvestmentsInput>
  }

  export type PaymentCreateWithoutInvestmentInput = {
    id?: string
    txnRef: string
    amount: number
    mode: $Enums.PaymentMode
    razorpayOrderId?: string | null
    upiRefId?: string | null
    status: $Enums.PaymentStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutInvestmentInput = {
    id?: string
    userId: string
    txnRef: string
    amount: number
    mode: $Enums.PaymentMode
    razorpayOrderId?: string | null
    upiRefId?: string | null
    status: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutInvestmentInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutInvestmentInput, PaymentUncheckedCreateWithoutInvestmentInput>
  }

  export type PaymentCreateManyInvestmentInputEnvelope = {
    data: PaymentCreateManyInvestmentInput | PaymentCreateManyInvestmentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutInvestmentsInput = {
    update: XOR<UserUpdateWithoutInvestmentsInput, UserUncheckedUpdateWithoutInvestmentsInput>
    create: XOR<UserCreateWithoutInvestmentsInput, UserUncheckedCreateWithoutInvestmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInvestmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInvestmentsInput, UserUncheckedUpdateWithoutInvestmentsInput>
  }

  export type UserUpdateWithoutInvestmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    currentStep?: IntFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedPan?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedBankAcc?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedIfsc?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountType?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranchName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolderName?: NullableStringFieldUpdateOperationsInput | string | null
    bankVerified?: BoolFieldUpdateOperationsInput | boolean
    bankVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bankBeneficiaryName?: NullableStringFieldUpdateOperationsInput | string | null
    bankNameMatchScore?: NullableIntFieldUpdateOperationsInput | number | null
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    education?: NullableEnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    annualIncome?: NullableEnumAnnualIncomeFieldUpdateOperationsInput | $Enums.AnnualIncome | null
    incomeSource?: NullableEnumIncomeSourceFieldUpdateOperationsInput | $Enums.IncomeSource | null
    taxResidency?: NullableEnumTaxResidencyFieldUpdateOperationsInput | $Enums.TaxResidency | null
    residentialStatus?: NullableEnumResidentialStatusFieldUpdateOperationsInput | $Enums.ResidentialStatus | null
    occupationType?: NullableEnumOccupationTypeFieldUpdateOperationsInput | $Enums.OccupationType | null
    countryOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    signatureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeName?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeRelation?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeAllocation?: NullableFloatFieldUpdateOperationsInput | number | null
    nomineeIdType?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeIdNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeMobile?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeAddressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeAddressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeCity?: NullableStringFieldUpdateOperationsInput | string | null
    nomineePincode?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeCountry?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeDob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    languagePref?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    digilockerKycId?: NullableStringFieldUpdateOperationsInput | string | null
    digilockerid?: NullableStringFieldUpdateOperationsInput | string | null
    aadhaarLinked?: BoolFieldUpdateOperationsInput | boolean
    aadhaarLastFour?: NullableStringFieldUpdateOperationsInput | string | null
    kycVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    commAddressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    commAddressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    commCity?: NullableStringFieldUpdateOperationsInput | string | null
    commState?: NullableStringFieldUpdateOperationsInput | string | null
    commPincode?: NullableStringFieldUpdateOperationsInput | string | null
    commCountry?: NullableStringFieldUpdateOperationsInput | string | null
    useSameAddress?: BoolFieldUpdateOperationsInput | boolean
    dlAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    dlRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    dlTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ckycRefId?: NullableStringFieldUpdateOperationsInput | string | null
    kycType?: NullableEnumKycTypeFieldUpdateOperationsInput | $Enums.KycType | null
    kraVerified?: BoolFieldUpdateOperationsInput | boolean
    kraRefId?: NullableStringFieldUpdateOperationsInput | string | null
    kraStatusCode?: NullableStringFieldUpdateOperationsInput | string | null
    kraStatusDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fatcaDeclaration?: NullableJsonNullValueInput | InputJsonValue
    uccCode?: NullableStringFieldUpdateOperationsInput | string | null
    fatcaSubmitted?: BoolFieldUpdateOperationsInput | boolean
    elogAuthenticated?: BoolFieldUpdateOperationsInput | boolean
    nseStatus?: NullableStringFieldUpdateOperationsInput | string | null
    nseLastUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sips?: SIPUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    kycSessions?: KycSessionUpdateManyWithoutUserNestedInput
    watchlist?: WatchlistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInvestmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    currentStep?: IntFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedPan?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedBankAcc?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedIfsc?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountType?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranchName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolderName?: NullableStringFieldUpdateOperationsInput | string | null
    bankVerified?: BoolFieldUpdateOperationsInput | boolean
    bankVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bankBeneficiaryName?: NullableStringFieldUpdateOperationsInput | string | null
    bankNameMatchScore?: NullableIntFieldUpdateOperationsInput | number | null
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    education?: NullableEnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    annualIncome?: NullableEnumAnnualIncomeFieldUpdateOperationsInput | $Enums.AnnualIncome | null
    incomeSource?: NullableEnumIncomeSourceFieldUpdateOperationsInput | $Enums.IncomeSource | null
    taxResidency?: NullableEnumTaxResidencyFieldUpdateOperationsInput | $Enums.TaxResidency | null
    residentialStatus?: NullableEnumResidentialStatusFieldUpdateOperationsInput | $Enums.ResidentialStatus | null
    occupationType?: NullableEnumOccupationTypeFieldUpdateOperationsInput | $Enums.OccupationType | null
    countryOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    signatureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeName?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeRelation?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeAllocation?: NullableFloatFieldUpdateOperationsInput | number | null
    nomineeIdType?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeIdNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeMobile?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeAddressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeAddressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeCity?: NullableStringFieldUpdateOperationsInput | string | null
    nomineePincode?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeCountry?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeDob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    languagePref?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    digilockerKycId?: NullableStringFieldUpdateOperationsInput | string | null
    digilockerid?: NullableStringFieldUpdateOperationsInput | string | null
    aadhaarLinked?: BoolFieldUpdateOperationsInput | boolean
    aadhaarLastFour?: NullableStringFieldUpdateOperationsInput | string | null
    kycVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    commAddressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    commAddressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    commCity?: NullableStringFieldUpdateOperationsInput | string | null
    commState?: NullableStringFieldUpdateOperationsInput | string | null
    commPincode?: NullableStringFieldUpdateOperationsInput | string | null
    commCountry?: NullableStringFieldUpdateOperationsInput | string | null
    useSameAddress?: BoolFieldUpdateOperationsInput | boolean
    dlAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    dlRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    dlTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ckycRefId?: NullableStringFieldUpdateOperationsInput | string | null
    kycType?: NullableEnumKycTypeFieldUpdateOperationsInput | $Enums.KycType | null
    kraVerified?: BoolFieldUpdateOperationsInput | boolean
    kraRefId?: NullableStringFieldUpdateOperationsInput | string | null
    kraStatusCode?: NullableStringFieldUpdateOperationsInput | string | null
    kraStatusDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fatcaDeclaration?: NullableJsonNullValueInput | InputJsonValue
    uccCode?: NullableStringFieldUpdateOperationsInput | string | null
    fatcaSubmitted?: BoolFieldUpdateOperationsInput | boolean
    elogAuthenticated?: BoolFieldUpdateOperationsInput | boolean
    nseStatus?: NullableStringFieldUpdateOperationsInput | string | null
    nseLastUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sips?: SIPUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    kycSessions?: KycSessionUncheckedUpdateManyWithoutUserNestedInput
    watchlist?: WatchlistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SIPUpsertWithoutInvestmentsInput = {
    update: XOR<SIPUpdateWithoutInvestmentsInput, SIPUncheckedUpdateWithoutInvestmentsInput>
    create: XOR<SIPCreateWithoutInvestmentsInput, SIPUncheckedCreateWithoutInvestmentsInput>
    where?: SIPWhereInput
  }

  export type SIPUpdateToOneWithWhereWithoutInvestmentsInput = {
    where?: SIPWhereInput
    data: XOR<SIPUpdateWithoutInvestmentsInput, SIPUncheckedUpdateWithoutInvestmentsInput>
  }

  export type SIPUpdateWithoutInvestmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fundName?: StringFieldUpdateOperationsInput | string
    amcCode?: StringFieldUpdateOperationsInput | string
    schemeCode?: StringFieldUpdateOperationsInput | string
    amountPerInstallment?: FloatFieldUpdateOperationsInput | number
    totalInstallments?: IntFieldUpdateOperationsInput | number
    frequency?: EnumSIPFrequencyFieldUpdateOperationsInput | $Enums.SIPFrequency
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextInstallment?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSIPStatusFieldUpdateOperationsInput | $Enums.SIPStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSipsNestedInput
  }

  export type SIPUncheckedUpdateWithoutInvestmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fundName?: StringFieldUpdateOperationsInput | string
    amcCode?: StringFieldUpdateOperationsInput | string
    schemeCode?: StringFieldUpdateOperationsInput | string
    amountPerInstallment?: FloatFieldUpdateOperationsInput | number
    totalInstallments?: IntFieldUpdateOperationsInput | number
    frequency?: EnumSIPFrequencyFieldUpdateOperationsInput | $Enums.SIPFrequency
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextInstallment?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSIPStatusFieldUpdateOperationsInput | $Enums.SIPStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutInvestmentInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutInvestmentInput, PaymentUncheckedUpdateWithoutInvestmentInput>
    create: XOR<PaymentCreateWithoutInvestmentInput, PaymentUncheckedCreateWithoutInvestmentInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutInvestmentInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutInvestmentInput, PaymentUncheckedUpdateWithoutInvestmentInput>
  }

  export type PaymentUpdateManyWithWhereWithoutInvestmentInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutInvestmentInput>
  }

  export type UserCreateWithoutWatchlistInput = {
    id?: string
    fullName: string
    email: string
    currentStep?: number
    phone?: string | null
    encryptedPan?: string | null
    encryptedBankAcc?: string | null
    encryptedIfsc?: string | null
    bankAccountType?: string | null
    bankName?: string | null
    bankBranchName?: string | null
    bankAccountHolderName?: string | null
    bankVerified?: boolean
    bankVerifiedAt?: Date | string | null
    bankBeneficiaryName?: string | null
    bankNameMatchScore?: number | null
    upiId?: string | null
    dob?: Date | string | null
    maritalStatus?: $Enums.MaritalStatus | null
    education?: $Enums.EducationLevel | null
    motherName?: string | null
    fatherName?: string | null
    gender?: $Enums.Gender | null
    annualIncome?: $Enums.AnnualIncome | null
    incomeSource?: $Enums.IncomeSource | null
    taxResidency?: $Enums.TaxResidency | null
    residentialStatus?: $Enums.ResidentialStatus | null
    occupationType?: $Enums.OccupationType | null
    countryOfBirth?: string | null
    nationality?: string | null
    signatureUrl?: string | null
    nomineeName?: string | null
    nomineeRelation?: string | null
    nomineeAllocation?: number | null
    nomineeIdType?: string | null
    nomineeIdNumber?: string | null
    nomineeEmail?: string | null
    nomineeMobile?: string | null
    nomineeAddressLine1?: string | null
    nomineeAddressLine2?: string | null
    nomineeCity?: string | null
    nomineePincode?: string | null
    nomineeCountry?: string | null
    nomineeDob?: Date | string | null
    languagePref?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kycStatus?: $Enums.KycStatus
    digilockerKycId?: string | null
    digilockerid?: string | null
    aadhaarLinked?: boolean
    aadhaarLastFour?: string | null
    kycVerifiedAt?: Date | string | null
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    country?: string | null
    commAddressLine1?: string | null
    commAddressLine2?: string | null
    commCity?: string | null
    commState?: string | null
    commPincode?: string | null
    commCountry?: string | null
    useSameAddress?: boolean
    dlAccessToken?: string | null
    dlRefreshToken?: string | null
    dlTokenExpiresAt?: Date | string | null
    ckycRefId?: string | null
    kycType?: $Enums.KycType | null
    kraVerified?: boolean
    kraRefId?: string | null
    kraStatusCode?: string | null
    kraStatusDate?: Date | string | null
    fatcaDeclaration?: NullableJsonNullValueInput | InputJsonValue
    uccCode?: string | null
    fatcaSubmitted?: boolean
    elogAuthenticated?: boolean
    nseStatus?: string | null
    nseLastUpdated?: Date | string | null
    sips?: SIPCreateNestedManyWithoutUserInput
    investments?: InvestmentCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    kycSessions?: KycSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWatchlistInput = {
    id?: string
    fullName: string
    email: string
    currentStep?: number
    phone?: string | null
    encryptedPan?: string | null
    encryptedBankAcc?: string | null
    encryptedIfsc?: string | null
    bankAccountType?: string | null
    bankName?: string | null
    bankBranchName?: string | null
    bankAccountHolderName?: string | null
    bankVerified?: boolean
    bankVerifiedAt?: Date | string | null
    bankBeneficiaryName?: string | null
    bankNameMatchScore?: number | null
    upiId?: string | null
    dob?: Date | string | null
    maritalStatus?: $Enums.MaritalStatus | null
    education?: $Enums.EducationLevel | null
    motherName?: string | null
    fatherName?: string | null
    gender?: $Enums.Gender | null
    annualIncome?: $Enums.AnnualIncome | null
    incomeSource?: $Enums.IncomeSource | null
    taxResidency?: $Enums.TaxResidency | null
    residentialStatus?: $Enums.ResidentialStatus | null
    occupationType?: $Enums.OccupationType | null
    countryOfBirth?: string | null
    nationality?: string | null
    signatureUrl?: string | null
    nomineeName?: string | null
    nomineeRelation?: string | null
    nomineeAllocation?: number | null
    nomineeIdType?: string | null
    nomineeIdNumber?: string | null
    nomineeEmail?: string | null
    nomineeMobile?: string | null
    nomineeAddressLine1?: string | null
    nomineeAddressLine2?: string | null
    nomineeCity?: string | null
    nomineePincode?: string | null
    nomineeCountry?: string | null
    nomineeDob?: Date | string | null
    languagePref?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kycStatus?: $Enums.KycStatus
    digilockerKycId?: string | null
    digilockerid?: string | null
    aadhaarLinked?: boolean
    aadhaarLastFour?: string | null
    kycVerifiedAt?: Date | string | null
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    country?: string | null
    commAddressLine1?: string | null
    commAddressLine2?: string | null
    commCity?: string | null
    commState?: string | null
    commPincode?: string | null
    commCountry?: string | null
    useSameAddress?: boolean
    dlAccessToken?: string | null
    dlRefreshToken?: string | null
    dlTokenExpiresAt?: Date | string | null
    ckycRefId?: string | null
    kycType?: $Enums.KycType | null
    kraVerified?: boolean
    kraRefId?: string | null
    kraStatusCode?: string | null
    kraStatusDate?: Date | string | null
    fatcaDeclaration?: NullableJsonNullValueInput | InputJsonValue
    uccCode?: string | null
    fatcaSubmitted?: boolean
    elogAuthenticated?: boolean
    nseStatus?: string | null
    nseLastUpdated?: Date | string | null
    sips?: SIPUncheckedCreateNestedManyWithoutUserInput
    investments?: InvestmentUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    kycSessions?: KycSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWatchlistInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWatchlistInput, UserUncheckedCreateWithoutWatchlistInput>
  }

  export type UserUpsertWithoutWatchlistInput = {
    update: XOR<UserUpdateWithoutWatchlistInput, UserUncheckedUpdateWithoutWatchlistInput>
    create: XOR<UserCreateWithoutWatchlistInput, UserUncheckedCreateWithoutWatchlistInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWatchlistInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWatchlistInput, UserUncheckedUpdateWithoutWatchlistInput>
  }

  export type UserUpdateWithoutWatchlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    currentStep?: IntFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedPan?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedBankAcc?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedIfsc?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountType?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranchName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolderName?: NullableStringFieldUpdateOperationsInput | string | null
    bankVerified?: BoolFieldUpdateOperationsInput | boolean
    bankVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bankBeneficiaryName?: NullableStringFieldUpdateOperationsInput | string | null
    bankNameMatchScore?: NullableIntFieldUpdateOperationsInput | number | null
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    education?: NullableEnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    annualIncome?: NullableEnumAnnualIncomeFieldUpdateOperationsInput | $Enums.AnnualIncome | null
    incomeSource?: NullableEnumIncomeSourceFieldUpdateOperationsInput | $Enums.IncomeSource | null
    taxResidency?: NullableEnumTaxResidencyFieldUpdateOperationsInput | $Enums.TaxResidency | null
    residentialStatus?: NullableEnumResidentialStatusFieldUpdateOperationsInput | $Enums.ResidentialStatus | null
    occupationType?: NullableEnumOccupationTypeFieldUpdateOperationsInput | $Enums.OccupationType | null
    countryOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    signatureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeName?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeRelation?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeAllocation?: NullableFloatFieldUpdateOperationsInput | number | null
    nomineeIdType?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeIdNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeMobile?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeAddressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeAddressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeCity?: NullableStringFieldUpdateOperationsInput | string | null
    nomineePincode?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeCountry?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeDob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    languagePref?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    digilockerKycId?: NullableStringFieldUpdateOperationsInput | string | null
    digilockerid?: NullableStringFieldUpdateOperationsInput | string | null
    aadhaarLinked?: BoolFieldUpdateOperationsInput | boolean
    aadhaarLastFour?: NullableStringFieldUpdateOperationsInput | string | null
    kycVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    commAddressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    commAddressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    commCity?: NullableStringFieldUpdateOperationsInput | string | null
    commState?: NullableStringFieldUpdateOperationsInput | string | null
    commPincode?: NullableStringFieldUpdateOperationsInput | string | null
    commCountry?: NullableStringFieldUpdateOperationsInput | string | null
    useSameAddress?: BoolFieldUpdateOperationsInput | boolean
    dlAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    dlRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    dlTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ckycRefId?: NullableStringFieldUpdateOperationsInput | string | null
    kycType?: NullableEnumKycTypeFieldUpdateOperationsInput | $Enums.KycType | null
    kraVerified?: BoolFieldUpdateOperationsInput | boolean
    kraRefId?: NullableStringFieldUpdateOperationsInput | string | null
    kraStatusCode?: NullableStringFieldUpdateOperationsInput | string | null
    kraStatusDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fatcaDeclaration?: NullableJsonNullValueInput | InputJsonValue
    uccCode?: NullableStringFieldUpdateOperationsInput | string | null
    fatcaSubmitted?: BoolFieldUpdateOperationsInput | boolean
    elogAuthenticated?: BoolFieldUpdateOperationsInput | boolean
    nseStatus?: NullableStringFieldUpdateOperationsInput | string | null
    nseLastUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sips?: SIPUpdateManyWithoutUserNestedInput
    investments?: InvestmentUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    kycSessions?: KycSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWatchlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    currentStep?: IntFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedPan?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedBankAcc?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedIfsc?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountType?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranchName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolderName?: NullableStringFieldUpdateOperationsInput | string | null
    bankVerified?: BoolFieldUpdateOperationsInput | boolean
    bankVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bankBeneficiaryName?: NullableStringFieldUpdateOperationsInput | string | null
    bankNameMatchScore?: NullableIntFieldUpdateOperationsInput | number | null
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    education?: NullableEnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    annualIncome?: NullableEnumAnnualIncomeFieldUpdateOperationsInput | $Enums.AnnualIncome | null
    incomeSource?: NullableEnumIncomeSourceFieldUpdateOperationsInput | $Enums.IncomeSource | null
    taxResidency?: NullableEnumTaxResidencyFieldUpdateOperationsInput | $Enums.TaxResidency | null
    residentialStatus?: NullableEnumResidentialStatusFieldUpdateOperationsInput | $Enums.ResidentialStatus | null
    occupationType?: NullableEnumOccupationTypeFieldUpdateOperationsInput | $Enums.OccupationType | null
    countryOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    signatureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeName?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeRelation?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeAllocation?: NullableFloatFieldUpdateOperationsInput | number | null
    nomineeIdType?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeIdNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeMobile?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeAddressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeAddressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeCity?: NullableStringFieldUpdateOperationsInput | string | null
    nomineePincode?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeCountry?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeDob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    languagePref?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    digilockerKycId?: NullableStringFieldUpdateOperationsInput | string | null
    digilockerid?: NullableStringFieldUpdateOperationsInput | string | null
    aadhaarLinked?: BoolFieldUpdateOperationsInput | boolean
    aadhaarLastFour?: NullableStringFieldUpdateOperationsInput | string | null
    kycVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    commAddressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    commAddressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    commCity?: NullableStringFieldUpdateOperationsInput | string | null
    commState?: NullableStringFieldUpdateOperationsInput | string | null
    commPincode?: NullableStringFieldUpdateOperationsInput | string | null
    commCountry?: NullableStringFieldUpdateOperationsInput | string | null
    useSameAddress?: BoolFieldUpdateOperationsInput | boolean
    dlAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    dlRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    dlTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ckycRefId?: NullableStringFieldUpdateOperationsInput | string | null
    kycType?: NullableEnumKycTypeFieldUpdateOperationsInput | $Enums.KycType | null
    kraVerified?: BoolFieldUpdateOperationsInput | boolean
    kraRefId?: NullableStringFieldUpdateOperationsInput | string | null
    kraStatusCode?: NullableStringFieldUpdateOperationsInput | string | null
    kraStatusDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fatcaDeclaration?: NullableJsonNullValueInput | InputJsonValue
    uccCode?: NullableStringFieldUpdateOperationsInput | string | null
    fatcaSubmitted?: BoolFieldUpdateOperationsInput | boolean
    elogAuthenticated?: BoolFieldUpdateOperationsInput | boolean
    nseStatus?: NullableStringFieldUpdateOperationsInput | string | null
    nseLastUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sips?: SIPUncheckedUpdateManyWithoutUserNestedInput
    investments?: InvestmentUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    kycSessions?: KycSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPaymentsInput = {
    id?: string
    fullName: string
    email: string
    currentStep?: number
    phone?: string | null
    encryptedPan?: string | null
    encryptedBankAcc?: string | null
    encryptedIfsc?: string | null
    bankAccountType?: string | null
    bankName?: string | null
    bankBranchName?: string | null
    bankAccountHolderName?: string | null
    bankVerified?: boolean
    bankVerifiedAt?: Date | string | null
    bankBeneficiaryName?: string | null
    bankNameMatchScore?: number | null
    upiId?: string | null
    dob?: Date | string | null
    maritalStatus?: $Enums.MaritalStatus | null
    education?: $Enums.EducationLevel | null
    motherName?: string | null
    fatherName?: string | null
    gender?: $Enums.Gender | null
    annualIncome?: $Enums.AnnualIncome | null
    incomeSource?: $Enums.IncomeSource | null
    taxResidency?: $Enums.TaxResidency | null
    residentialStatus?: $Enums.ResidentialStatus | null
    occupationType?: $Enums.OccupationType | null
    countryOfBirth?: string | null
    nationality?: string | null
    signatureUrl?: string | null
    nomineeName?: string | null
    nomineeRelation?: string | null
    nomineeAllocation?: number | null
    nomineeIdType?: string | null
    nomineeIdNumber?: string | null
    nomineeEmail?: string | null
    nomineeMobile?: string | null
    nomineeAddressLine1?: string | null
    nomineeAddressLine2?: string | null
    nomineeCity?: string | null
    nomineePincode?: string | null
    nomineeCountry?: string | null
    nomineeDob?: Date | string | null
    languagePref?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kycStatus?: $Enums.KycStatus
    digilockerKycId?: string | null
    digilockerid?: string | null
    aadhaarLinked?: boolean
    aadhaarLastFour?: string | null
    kycVerifiedAt?: Date | string | null
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    country?: string | null
    commAddressLine1?: string | null
    commAddressLine2?: string | null
    commCity?: string | null
    commState?: string | null
    commPincode?: string | null
    commCountry?: string | null
    useSameAddress?: boolean
    dlAccessToken?: string | null
    dlRefreshToken?: string | null
    dlTokenExpiresAt?: Date | string | null
    ckycRefId?: string | null
    kycType?: $Enums.KycType | null
    kraVerified?: boolean
    kraRefId?: string | null
    kraStatusCode?: string | null
    kraStatusDate?: Date | string | null
    fatcaDeclaration?: NullableJsonNullValueInput | InputJsonValue
    uccCode?: string | null
    fatcaSubmitted?: boolean
    elogAuthenticated?: boolean
    nseStatus?: string | null
    nseLastUpdated?: Date | string | null
    sips?: SIPCreateNestedManyWithoutUserInput
    investments?: InvestmentCreateNestedManyWithoutUserInput
    kycSessions?: KycSessionCreateNestedManyWithoutUserInput
    watchlist?: WatchlistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentsInput = {
    id?: string
    fullName: string
    email: string
    currentStep?: number
    phone?: string | null
    encryptedPan?: string | null
    encryptedBankAcc?: string | null
    encryptedIfsc?: string | null
    bankAccountType?: string | null
    bankName?: string | null
    bankBranchName?: string | null
    bankAccountHolderName?: string | null
    bankVerified?: boolean
    bankVerifiedAt?: Date | string | null
    bankBeneficiaryName?: string | null
    bankNameMatchScore?: number | null
    upiId?: string | null
    dob?: Date | string | null
    maritalStatus?: $Enums.MaritalStatus | null
    education?: $Enums.EducationLevel | null
    motherName?: string | null
    fatherName?: string | null
    gender?: $Enums.Gender | null
    annualIncome?: $Enums.AnnualIncome | null
    incomeSource?: $Enums.IncomeSource | null
    taxResidency?: $Enums.TaxResidency | null
    residentialStatus?: $Enums.ResidentialStatus | null
    occupationType?: $Enums.OccupationType | null
    countryOfBirth?: string | null
    nationality?: string | null
    signatureUrl?: string | null
    nomineeName?: string | null
    nomineeRelation?: string | null
    nomineeAllocation?: number | null
    nomineeIdType?: string | null
    nomineeIdNumber?: string | null
    nomineeEmail?: string | null
    nomineeMobile?: string | null
    nomineeAddressLine1?: string | null
    nomineeAddressLine2?: string | null
    nomineeCity?: string | null
    nomineePincode?: string | null
    nomineeCountry?: string | null
    nomineeDob?: Date | string | null
    languagePref?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kycStatus?: $Enums.KycStatus
    digilockerKycId?: string | null
    digilockerid?: string | null
    aadhaarLinked?: boolean
    aadhaarLastFour?: string | null
    kycVerifiedAt?: Date | string | null
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    country?: string | null
    commAddressLine1?: string | null
    commAddressLine2?: string | null
    commCity?: string | null
    commState?: string | null
    commPincode?: string | null
    commCountry?: string | null
    useSameAddress?: boolean
    dlAccessToken?: string | null
    dlRefreshToken?: string | null
    dlTokenExpiresAt?: Date | string | null
    ckycRefId?: string | null
    kycType?: $Enums.KycType | null
    kraVerified?: boolean
    kraRefId?: string | null
    kraStatusCode?: string | null
    kraStatusDate?: Date | string | null
    fatcaDeclaration?: NullableJsonNullValueInput | InputJsonValue
    uccCode?: string | null
    fatcaSubmitted?: boolean
    elogAuthenticated?: boolean
    nseStatus?: string | null
    nseLastUpdated?: Date | string | null
    sips?: SIPUncheckedCreateNestedManyWithoutUserInput
    investments?: InvestmentUncheckedCreateNestedManyWithoutUserInput
    kycSessions?: KycSessionUncheckedCreateNestedManyWithoutUserInput
    watchlist?: WatchlistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
  }

  export type InvestmentCreateWithoutPaymentInput = {
    id?: string
    fundName: string
    amcCode: string
    schemeCode: string
    units: number
    navAtPurchase: number
    currentNav?: number | null
    type: $Enums.InvestmentType
    status: $Enums.InvestmentStatus
    purchaseDate: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutInvestmentsInput
    sip?: SIPCreateNestedOneWithoutInvestmentsInput
  }

  export type InvestmentUncheckedCreateWithoutPaymentInput = {
    id?: string
    userId: string
    sipId?: string | null
    fundName: string
    amcCode: string
    schemeCode: string
    units: number
    navAtPurchase: number
    currentNav?: number | null
    type: $Enums.InvestmentType
    status: $Enums.InvestmentStatus
    purchaseDate: Date | string
    createdAt?: Date | string
  }

  export type InvestmentCreateOrConnectWithoutPaymentInput = {
    where: InvestmentWhereUniqueInput
    create: XOR<InvestmentCreateWithoutPaymentInput, InvestmentUncheckedCreateWithoutPaymentInput>
  }

  export type UserUpsertWithoutPaymentsInput = {
    update: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    currentStep?: IntFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedPan?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedBankAcc?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedIfsc?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountType?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranchName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolderName?: NullableStringFieldUpdateOperationsInput | string | null
    bankVerified?: BoolFieldUpdateOperationsInput | boolean
    bankVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bankBeneficiaryName?: NullableStringFieldUpdateOperationsInput | string | null
    bankNameMatchScore?: NullableIntFieldUpdateOperationsInput | number | null
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    education?: NullableEnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    annualIncome?: NullableEnumAnnualIncomeFieldUpdateOperationsInput | $Enums.AnnualIncome | null
    incomeSource?: NullableEnumIncomeSourceFieldUpdateOperationsInput | $Enums.IncomeSource | null
    taxResidency?: NullableEnumTaxResidencyFieldUpdateOperationsInput | $Enums.TaxResidency | null
    residentialStatus?: NullableEnumResidentialStatusFieldUpdateOperationsInput | $Enums.ResidentialStatus | null
    occupationType?: NullableEnumOccupationTypeFieldUpdateOperationsInput | $Enums.OccupationType | null
    countryOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    signatureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeName?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeRelation?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeAllocation?: NullableFloatFieldUpdateOperationsInput | number | null
    nomineeIdType?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeIdNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeMobile?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeAddressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeAddressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeCity?: NullableStringFieldUpdateOperationsInput | string | null
    nomineePincode?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeCountry?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeDob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    languagePref?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    digilockerKycId?: NullableStringFieldUpdateOperationsInput | string | null
    digilockerid?: NullableStringFieldUpdateOperationsInput | string | null
    aadhaarLinked?: BoolFieldUpdateOperationsInput | boolean
    aadhaarLastFour?: NullableStringFieldUpdateOperationsInput | string | null
    kycVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    commAddressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    commAddressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    commCity?: NullableStringFieldUpdateOperationsInput | string | null
    commState?: NullableStringFieldUpdateOperationsInput | string | null
    commPincode?: NullableStringFieldUpdateOperationsInput | string | null
    commCountry?: NullableStringFieldUpdateOperationsInput | string | null
    useSameAddress?: BoolFieldUpdateOperationsInput | boolean
    dlAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    dlRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    dlTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ckycRefId?: NullableStringFieldUpdateOperationsInput | string | null
    kycType?: NullableEnumKycTypeFieldUpdateOperationsInput | $Enums.KycType | null
    kraVerified?: BoolFieldUpdateOperationsInput | boolean
    kraRefId?: NullableStringFieldUpdateOperationsInput | string | null
    kraStatusCode?: NullableStringFieldUpdateOperationsInput | string | null
    kraStatusDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fatcaDeclaration?: NullableJsonNullValueInput | InputJsonValue
    uccCode?: NullableStringFieldUpdateOperationsInput | string | null
    fatcaSubmitted?: BoolFieldUpdateOperationsInput | boolean
    elogAuthenticated?: BoolFieldUpdateOperationsInput | boolean
    nseStatus?: NullableStringFieldUpdateOperationsInput | string | null
    nseLastUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sips?: SIPUpdateManyWithoutUserNestedInput
    investments?: InvestmentUpdateManyWithoutUserNestedInput
    kycSessions?: KycSessionUpdateManyWithoutUserNestedInput
    watchlist?: WatchlistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    currentStep?: IntFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedPan?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedBankAcc?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedIfsc?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountType?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranchName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolderName?: NullableStringFieldUpdateOperationsInput | string | null
    bankVerified?: BoolFieldUpdateOperationsInput | boolean
    bankVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bankBeneficiaryName?: NullableStringFieldUpdateOperationsInput | string | null
    bankNameMatchScore?: NullableIntFieldUpdateOperationsInput | number | null
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    education?: NullableEnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    annualIncome?: NullableEnumAnnualIncomeFieldUpdateOperationsInput | $Enums.AnnualIncome | null
    incomeSource?: NullableEnumIncomeSourceFieldUpdateOperationsInput | $Enums.IncomeSource | null
    taxResidency?: NullableEnumTaxResidencyFieldUpdateOperationsInput | $Enums.TaxResidency | null
    residentialStatus?: NullableEnumResidentialStatusFieldUpdateOperationsInput | $Enums.ResidentialStatus | null
    occupationType?: NullableEnumOccupationTypeFieldUpdateOperationsInput | $Enums.OccupationType | null
    countryOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    signatureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeName?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeRelation?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeAllocation?: NullableFloatFieldUpdateOperationsInput | number | null
    nomineeIdType?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeIdNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeMobile?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeAddressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeAddressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeCity?: NullableStringFieldUpdateOperationsInput | string | null
    nomineePincode?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeCountry?: NullableStringFieldUpdateOperationsInput | string | null
    nomineeDob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    languagePref?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    digilockerKycId?: NullableStringFieldUpdateOperationsInput | string | null
    digilockerid?: NullableStringFieldUpdateOperationsInput | string | null
    aadhaarLinked?: BoolFieldUpdateOperationsInput | boolean
    aadhaarLastFour?: NullableStringFieldUpdateOperationsInput | string | null
    kycVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    commAddressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    commAddressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    commCity?: NullableStringFieldUpdateOperationsInput | string | null
    commState?: NullableStringFieldUpdateOperationsInput | string | null
    commPincode?: NullableStringFieldUpdateOperationsInput | string | null
    commCountry?: NullableStringFieldUpdateOperationsInput | string | null
    useSameAddress?: BoolFieldUpdateOperationsInput | boolean
    dlAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    dlRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    dlTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ckycRefId?: NullableStringFieldUpdateOperationsInput | string | null
    kycType?: NullableEnumKycTypeFieldUpdateOperationsInput | $Enums.KycType | null
    kraVerified?: BoolFieldUpdateOperationsInput | boolean
    kraRefId?: NullableStringFieldUpdateOperationsInput | string | null
    kraStatusCode?: NullableStringFieldUpdateOperationsInput | string | null
    kraStatusDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fatcaDeclaration?: NullableJsonNullValueInput | InputJsonValue
    uccCode?: NullableStringFieldUpdateOperationsInput | string | null
    fatcaSubmitted?: BoolFieldUpdateOperationsInput | boolean
    elogAuthenticated?: BoolFieldUpdateOperationsInput | boolean
    nseStatus?: NullableStringFieldUpdateOperationsInput | string | null
    nseLastUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sips?: SIPUncheckedUpdateManyWithoutUserNestedInput
    investments?: InvestmentUncheckedUpdateManyWithoutUserNestedInput
    kycSessions?: KycSessionUncheckedUpdateManyWithoutUserNestedInput
    watchlist?: WatchlistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type InvestmentUpsertWithoutPaymentInput = {
    update: XOR<InvestmentUpdateWithoutPaymentInput, InvestmentUncheckedUpdateWithoutPaymentInput>
    create: XOR<InvestmentCreateWithoutPaymentInput, InvestmentUncheckedCreateWithoutPaymentInput>
    where?: InvestmentWhereInput
  }

  export type InvestmentUpdateToOneWithWhereWithoutPaymentInput = {
    where?: InvestmentWhereInput
    data: XOR<InvestmentUpdateWithoutPaymentInput, InvestmentUncheckedUpdateWithoutPaymentInput>
  }

  export type InvestmentUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    fundName?: StringFieldUpdateOperationsInput | string
    amcCode?: StringFieldUpdateOperationsInput | string
    schemeCode?: StringFieldUpdateOperationsInput | string
    units?: FloatFieldUpdateOperationsInput | number
    navAtPurchase?: FloatFieldUpdateOperationsInput | number
    currentNav?: NullableFloatFieldUpdateOperationsInput | number | null
    type?: EnumInvestmentTypeFieldUpdateOperationsInput | $Enums.InvestmentType
    status?: EnumInvestmentStatusFieldUpdateOperationsInput | $Enums.InvestmentStatus
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInvestmentsNestedInput
    sip?: SIPUpdateOneWithoutInvestmentsNestedInput
  }

  export type InvestmentUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sipId?: NullableStringFieldUpdateOperationsInput | string | null
    fundName?: StringFieldUpdateOperationsInput | string
    amcCode?: StringFieldUpdateOperationsInput | string
    schemeCode?: StringFieldUpdateOperationsInput | string
    units?: FloatFieldUpdateOperationsInput | number
    navAtPurchase?: FloatFieldUpdateOperationsInput | number
    currentNav?: NullableFloatFieldUpdateOperationsInput | number | null
    type?: EnumInvestmentTypeFieldUpdateOperationsInput | $Enums.InvestmentType
    status?: EnumInvestmentStatusFieldUpdateOperationsInput | $Enums.InvestmentStatus
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCreateWithoutAuthorInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    coverImage?: string | null
    content: string
    tags?: BlogCreatetagsInput | string[]
    status?: $Enums.BlogStatus
    views?: number
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    coverImage?: string | null
    content: string
    tags?: BlogCreatetagsInput | string[]
    status?: $Enums.BlogStatus
    views?: number
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogCreateOrConnectWithoutAuthorInput = {
    where: BlogWhereUniqueInput
    create: XOR<BlogCreateWithoutAuthorInput, BlogUncheckedCreateWithoutAuthorInput>
  }

  export type BlogCreateManyAuthorInputEnvelope = {
    data: BlogCreateManyAuthorInput | BlogCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type StoryCreateWithoutAuthorInput = {
    id?: string
    label: string
    heading: string
    teaser: string
    imageUrl: string
    content: string
    status?: $Enums.StoryStatus
    views?: number
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoryUncheckedCreateWithoutAuthorInput = {
    id?: string
    label: string
    heading: string
    teaser: string
    imageUrl: string
    content: string
    status?: $Enums.StoryStatus
    views?: number
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoryCreateOrConnectWithoutAuthorInput = {
    where: StoryWhereUniqueInput
    create: XOR<StoryCreateWithoutAuthorInput, StoryUncheckedCreateWithoutAuthorInput>
  }

  export type StoryCreateManyAuthorInputEnvelope = {
    data: StoryCreateManyAuthorInput | StoryCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type BlogUpsertWithWhereUniqueWithoutAuthorInput = {
    where: BlogWhereUniqueInput
    update: XOR<BlogUpdateWithoutAuthorInput, BlogUncheckedUpdateWithoutAuthorInput>
    create: XOR<BlogCreateWithoutAuthorInput, BlogUncheckedCreateWithoutAuthorInput>
  }

  export type BlogUpdateWithWhereUniqueWithoutAuthorInput = {
    where: BlogWhereUniqueInput
    data: XOR<BlogUpdateWithoutAuthorInput, BlogUncheckedUpdateWithoutAuthorInput>
  }

  export type BlogUpdateManyWithWhereWithoutAuthorInput = {
    where: BlogScalarWhereInput
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyWithoutAuthorInput>
  }

  export type BlogScalarWhereInput = {
    AND?: BlogScalarWhereInput | BlogScalarWhereInput[]
    OR?: BlogScalarWhereInput[]
    NOT?: BlogScalarWhereInput | BlogScalarWhereInput[]
    id?: StringFilter<"Blog"> | string
    title?: StringFilter<"Blog"> | string
    slug?: StringFilter<"Blog"> | string
    excerpt?: StringNullableFilter<"Blog"> | string | null
    coverImage?: StringNullableFilter<"Blog"> | string | null
    content?: StringFilter<"Blog"> | string
    tags?: StringNullableListFilter<"Blog">
    status?: EnumBlogStatusFilter<"Blog"> | $Enums.BlogStatus
    authorId?: StringFilter<"Blog"> | string
    views?: IntFilter<"Blog"> | number
    publishedAt?: DateTimeNullableFilter<"Blog"> | Date | string | null
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
  }

  export type StoryUpsertWithWhereUniqueWithoutAuthorInput = {
    where: StoryWhereUniqueInput
    update: XOR<StoryUpdateWithoutAuthorInput, StoryUncheckedUpdateWithoutAuthorInput>
    create: XOR<StoryCreateWithoutAuthorInput, StoryUncheckedCreateWithoutAuthorInput>
  }

  export type StoryUpdateWithWhereUniqueWithoutAuthorInput = {
    where: StoryWhereUniqueInput
    data: XOR<StoryUpdateWithoutAuthorInput, StoryUncheckedUpdateWithoutAuthorInput>
  }

  export type StoryUpdateManyWithWhereWithoutAuthorInput = {
    where: StoryScalarWhereInput
    data: XOR<StoryUpdateManyMutationInput, StoryUncheckedUpdateManyWithoutAuthorInput>
  }

  export type StoryScalarWhereInput = {
    AND?: StoryScalarWhereInput | StoryScalarWhereInput[]
    OR?: StoryScalarWhereInput[]
    NOT?: StoryScalarWhereInput | StoryScalarWhereInput[]
    id?: StringFilter<"Story"> | string
    label?: StringFilter<"Story"> | string
    heading?: StringFilter<"Story"> | string
    teaser?: StringFilter<"Story"> | string
    imageUrl?: StringFilter<"Story"> | string
    content?: StringFilter<"Story"> | string
    status?: EnumStoryStatusFilter<"Story"> | $Enums.StoryStatus
    authorId?: StringFilter<"Story"> | string
    views?: IntFilter<"Story"> | number
    publishedAt?: DateTimeNullableFilter<"Story"> | Date | string | null
    createdAt?: DateTimeFilter<"Story"> | Date | string
    updatedAt?: DateTimeFilter<"Story"> | Date | string
  }

  export type AdminCreateWithoutBlogsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.AdminRole
    createdAt?: Date | string
    updatedAt?: Date | string
    stories?: StoryCreateNestedManyWithoutAuthorInput
  }

  export type AdminUncheckedCreateWithoutBlogsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.AdminRole
    createdAt?: Date | string
    updatedAt?: Date | string
    stories?: StoryUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AdminCreateOrConnectWithoutBlogsInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutBlogsInput, AdminUncheckedCreateWithoutBlogsInput>
  }

  export type AdminUpsertWithoutBlogsInput = {
    update: XOR<AdminUpdateWithoutBlogsInput, AdminUncheckedUpdateWithoutBlogsInput>
    create: XOR<AdminCreateWithoutBlogsInput, AdminUncheckedCreateWithoutBlogsInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutBlogsInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutBlogsInput, AdminUncheckedUpdateWithoutBlogsInput>
  }

  export type AdminUpdateWithoutBlogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stories?: StoryUpdateManyWithoutAuthorNestedInput
  }

  export type AdminUncheckedUpdateWithoutBlogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stories?: StoryUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type AdminCreateWithoutStoriesInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.AdminRole
    createdAt?: Date | string
    updatedAt?: Date | string
    blogs?: BlogCreateNestedManyWithoutAuthorInput
  }

  export type AdminUncheckedCreateWithoutStoriesInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.AdminRole
    createdAt?: Date | string
    updatedAt?: Date | string
    blogs?: BlogUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AdminCreateOrConnectWithoutStoriesInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutStoriesInput, AdminUncheckedCreateWithoutStoriesInput>
  }

  export type AdminUpsertWithoutStoriesInput = {
    update: XOR<AdminUpdateWithoutStoriesInput, AdminUncheckedUpdateWithoutStoriesInput>
    create: XOR<AdminCreateWithoutStoriesInput, AdminUncheckedCreateWithoutStoriesInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutStoriesInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutStoriesInput, AdminUncheckedUpdateWithoutStoriesInput>
  }

  export type AdminUpdateWithoutStoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogs?: BlogUpdateManyWithoutAuthorNestedInput
  }

  export type AdminUncheckedUpdateWithoutStoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogs?: BlogUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type SIPCreateManyUserInput = {
    id?: string
    fundName: string
    amcCode: string
    schemeCode: string
    amountPerInstallment: number
    totalInstallments: number
    frequency: $Enums.SIPFrequency
    startDate: Date | string
    nextInstallment?: Date | string | null
    endDate?: Date | string | null
    status?: $Enums.SIPStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvestmentCreateManyUserInput = {
    id?: string
    sipId?: string | null
    fundName: string
    amcCode: string
    schemeCode: string
    units: number
    navAtPurchase: number
    currentNav?: number | null
    type: $Enums.InvestmentType
    status: $Enums.InvestmentStatus
    purchaseDate: Date | string
    createdAt?: Date | string
  }

  export type PaymentCreateManyUserInput = {
    id?: string
    investmentId?: string | null
    txnRef: string
    amount: number
    mode: $Enums.PaymentMode
    razorpayOrderId?: string | null
    upiRefId?: string | null
    status: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type KycSessionCreateManyUserInput = {
    id?: string
    state: string
    codeVerifier: string
    status?: $Enums.KycSessionStatus
    errorCode?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type WatchlistCreateManyUserInput = {
    id?: string
    schemeCode: string
    amcCode: string
    fundName: string
    category?: string | null
    currentNav?: number | null
    addedAt?: Date | string
  }

  export type SIPUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fundName?: StringFieldUpdateOperationsInput | string
    amcCode?: StringFieldUpdateOperationsInput | string
    schemeCode?: StringFieldUpdateOperationsInput | string
    amountPerInstallment?: FloatFieldUpdateOperationsInput | number
    totalInstallments?: IntFieldUpdateOperationsInput | number
    frequency?: EnumSIPFrequencyFieldUpdateOperationsInput | $Enums.SIPFrequency
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextInstallment?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSIPStatusFieldUpdateOperationsInput | $Enums.SIPStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUpdateManyWithoutSipNestedInput
  }

  export type SIPUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fundName?: StringFieldUpdateOperationsInput | string
    amcCode?: StringFieldUpdateOperationsInput | string
    schemeCode?: StringFieldUpdateOperationsInput | string
    amountPerInstallment?: FloatFieldUpdateOperationsInput | number
    totalInstallments?: IntFieldUpdateOperationsInput | number
    frequency?: EnumSIPFrequencyFieldUpdateOperationsInput | $Enums.SIPFrequency
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextInstallment?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSIPStatusFieldUpdateOperationsInput | $Enums.SIPStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUncheckedUpdateManyWithoutSipNestedInput
  }

  export type SIPUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fundName?: StringFieldUpdateOperationsInput | string
    amcCode?: StringFieldUpdateOperationsInput | string
    schemeCode?: StringFieldUpdateOperationsInput | string
    amountPerInstallment?: FloatFieldUpdateOperationsInput | number
    totalInstallments?: IntFieldUpdateOperationsInput | number
    frequency?: EnumSIPFrequencyFieldUpdateOperationsInput | $Enums.SIPFrequency
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextInstallment?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSIPStatusFieldUpdateOperationsInput | $Enums.SIPStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fundName?: StringFieldUpdateOperationsInput | string
    amcCode?: StringFieldUpdateOperationsInput | string
    schemeCode?: StringFieldUpdateOperationsInput | string
    units?: FloatFieldUpdateOperationsInput | number
    navAtPurchase?: FloatFieldUpdateOperationsInput | number
    currentNav?: NullableFloatFieldUpdateOperationsInput | number | null
    type?: EnumInvestmentTypeFieldUpdateOperationsInput | $Enums.InvestmentType
    status?: EnumInvestmentStatusFieldUpdateOperationsInput | $Enums.InvestmentStatus
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sip?: SIPUpdateOneWithoutInvestmentsNestedInput
    Payment?: PaymentUpdateManyWithoutInvestmentNestedInput
  }

  export type InvestmentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sipId?: NullableStringFieldUpdateOperationsInput | string | null
    fundName?: StringFieldUpdateOperationsInput | string
    amcCode?: StringFieldUpdateOperationsInput | string
    schemeCode?: StringFieldUpdateOperationsInput | string
    units?: FloatFieldUpdateOperationsInput | number
    navAtPurchase?: FloatFieldUpdateOperationsInput | number
    currentNav?: NullableFloatFieldUpdateOperationsInput | number | null
    type?: EnumInvestmentTypeFieldUpdateOperationsInput | $Enums.InvestmentType
    status?: EnumInvestmentStatusFieldUpdateOperationsInput | $Enums.InvestmentStatus
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Payment?: PaymentUncheckedUpdateManyWithoutInvestmentNestedInput
  }

  export type InvestmentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sipId?: NullableStringFieldUpdateOperationsInput | string | null
    fundName?: StringFieldUpdateOperationsInput | string
    amcCode?: StringFieldUpdateOperationsInput | string
    schemeCode?: StringFieldUpdateOperationsInput | string
    units?: FloatFieldUpdateOperationsInput | number
    navAtPurchase?: FloatFieldUpdateOperationsInput | number
    currentNav?: NullableFloatFieldUpdateOperationsInput | number | null
    type?: EnumInvestmentTypeFieldUpdateOperationsInput | $Enums.InvestmentType
    status?: EnumInvestmentStatusFieldUpdateOperationsInput | $Enums.InvestmentStatus
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    txnRef?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    mode?: EnumPaymentModeFieldUpdateOperationsInput | $Enums.PaymentMode
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    upiRefId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investment?: InvestmentUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    investmentId?: NullableStringFieldUpdateOperationsInput | string | null
    txnRef?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    mode?: EnumPaymentModeFieldUpdateOperationsInput | $Enums.PaymentMode
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    upiRefId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    investmentId?: NullableStringFieldUpdateOperationsInput | string | null
    txnRef?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    mode?: EnumPaymentModeFieldUpdateOperationsInput | $Enums.PaymentMode
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    upiRefId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KycSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    codeVerifier?: StringFieldUpdateOperationsInput | string
    status?: EnumKycSessionStatusFieldUpdateOperationsInput | $Enums.KycSessionStatus
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KycSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    codeVerifier?: StringFieldUpdateOperationsInput | string
    status?: EnumKycSessionStatusFieldUpdateOperationsInput | $Enums.KycSessionStatus
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KycSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    codeVerifier?: StringFieldUpdateOperationsInput | string
    status?: EnumKycSessionStatusFieldUpdateOperationsInput | $Enums.KycSessionStatus
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    schemeCode?: StringFieldUpdateOperationsInput | string
    amcCode?: StringFieldUpdateOperationsInput | string
    fundName?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    currentNav?: NullableFloatFieldUpdateOperationsInput | number | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    schemeCode?: StringFieldUpdateOperationsInput | string
    amcCode?: StringFieldUpdateOperationsInput | string
    fundName?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    currentNav?: NullableFloatFieldUpdateOperationsInput | number | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    schemeCode?: StringFieldUpdateOperationsInput | string
    amcCode?: StringFieldUpdateOperationsInput | string
    fundName?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    currentNav?: NullableFloatFieldUpdateOperationsInput | number | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentCreateManySipInput = {
    id?: string
    userId: string
    fundName: string
    amcCode: string
    schemeCode: string
    units: number
    navAtPurchase: number
    currentNav?: number | null
    type: $Enums.InvestmentType
    status: $Enums.InvestmentStatus
    purchaseDate: Date | string
    createdAt?: Date | string
  }

  export type InvestmentUpdateWithoutSipInput = {
    id?: StringFieldUpdateOperationsInput | string
    fundName?: StringFieldUpdateOperationsInput | string
    amcCode?: StringFieldUpdateOperationsInput | string
    schemeCode?: StringFieldUpdateOperationsInput | string
    units?: FloatFieldUpdateOperationsInput | number
    navAtPurchase?: FloatFieldUpdateOperationsInput | number
    currentNav?: NullableFloatFieldUpdateOperationsInput | number | null
    type?: EnumInvestmentTypeFieldUpdateOperationsInput | $Enums.InvestmentType
    status?: EnumInvestmentStatusFieldUpdateOperationsInput | $Enums.InvestmentStatus
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInvestmentsNestedInput
    Payment?: PaymentUpdateManyWithoutInvestmentNestedInput
  }

  export type InvestmentUncheckedUpdateWithoutSipInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fundName?: StringFieldUpdateOperationsInput | string
    amcCode?: StringFieldUpdateOperationsInput | string
    schemeCode?: StringFieldUpdateOperationsInput | string
    units?: FloatFieldUpdateOperationsInput | number
    navAtPurchase?: FloatFieldUpdateOperationsInput | number
    currentNav?: NullableFloatFieldUpdateOperationsInput | number | null
    type?: EnumInvestmentTypeFieldUpdateOperationsInput | $Enums.InvestmentType
    status?: EnumInvestmentStatusFieldUpdateOperationsInput | $Enums.InvestmentStatus
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Payment?: PaymentUncheckedUpdateManyWithoutInvestmentNestedInput
  }

  export type InvestmentUncheckedUpdateManyWithoutSipInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fundName?: StringFieldUpdateOperationsInput | string
    amcCode?: StringFieldUpdateOperationsInput | string
    schemeCode?: StringFieldUpdateOperationsInput | string
    units?: FloatFieldUpdateOperationsInput | number
    navAtPurchase?: FloatFieldUpdateOperationsInput | number
    currentNav?: NullableFloatFieldUpdateOperationsInput | number | null
    type?: EnumInvestmentTypeFieldUpdateOperationsInput | $Enums.InvestmentType
    status?: EnumInvestmentStatusFieldUpdateOperationsInput | $Enums.InvestmentStatus
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInvestmentInput = {
    id?: string
    userId: string
    txnRef: string
    amount: number
    mode: $Enums.PaymentMode
    razorpayOrderId?: string | null
    upiRefId?: string | null
    status: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type PaymentUpdateWithoutInvestmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    txnRef?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    mode?: EnumPaymentModeFieldUpdateOperationsInput | $Enums.PaymentMode
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    upiRefId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutInvestmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    txnRef?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    mode?: EnumPaymentModeFieldUpdateOperationsInput | $Enums.PaymentMode
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    upiRefId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutInvestmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    txnRef?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    mode?: EnumPaymentModeFieldUpdateOperationsInput | $Enums.PaymentMode
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    upiRefId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCreateManyAuthorInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    coverImage?: string | null
    content: string
    tags?: BlogCreatetagsInput | string[]
    status?: $Enums.BlogStatus
    views?: number
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoryCreateManyAuthorInput = {
    id?: string
    label: string
    heading: string
    teaser: string
    imageUrl: string
    content: string
    status?: $Enums.StoryStatus
    views?: number
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    tags?: BlogUpdatetagsInput | string[]
    status?: EnumBlogStatusFieldUpdateOperationsInput | $Enums.BlogStatus
    views?: IntFieldUpdateOperationsInput | number
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    tags?: BlogUpdatetagsInput | string[]
    status?: EnumBlogStatusFieldUpdateOperationsInput | $Enums.BlogStatus
    views?: IntFieldUpdateOperationsInput | number
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    tags?: BlogUpdatetagsInput | string[]
    status?: EnumBlogStatusFieldUpdateOperationsInput | $Enums.BlogStatus
    views?: IntFieldUpdateOperationsInput | number
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    teaser?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumStoryStatusFieldUpdateOperationsInput | $Enums.StoryStatus
    views?: IntFieldUpdateOperationsInput | number
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    teaser?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumStoryStatusFieldUpdateOperationsInput | $Enums.StoryStatus
    views?: IntFieldUpdateOperationsInput | number
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    teaser?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumStoryStatusFieldUpdateOperationsInput | $Enums.StoryStatus
    views?: IntFieldUpdateOperationsInput | number
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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