import type { Handle } from '@sveltejs/kit'

export const handle: Handle = async ({request, resolve }) => {
  // Intercept request and overwrite the method based on query params
  if (request.query.has("_method")) {
    request.method = request.query.get("_method").toUpperCase();
  }

  const response = await resolve(request);
  return response
}