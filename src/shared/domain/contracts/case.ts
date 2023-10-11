export interface Case<Request, Response> {
  execute(request: Request): Promise<Response>;
}
