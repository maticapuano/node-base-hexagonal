import env from 'env-var';

export class AppConfig {
  public static get port(): number {
    return env.get('PORT').required().default(3000).asPortNumber();
  }

  public static get defaultApiVersion(): string {
    return env.get('DEFAULT_API_VERSION').default('1').asString();
  }

  public static get corsAllowedOrigins(): string[] {
    return env.get('CORS_ALLOWED_ORIGINS').default('*').asArray();
  }

  public static get swaggerEnabled(): boolean {
    return env.get('SWAGGER_ENABLED').default('true').asBool();
  }
}
