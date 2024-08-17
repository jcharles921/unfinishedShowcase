export async function POST(req: any) {
  const body = await req.json();
  const { something } = body;
  const isAuthenticated = req.headers.get('x-user-authenticated') === 'true';

  console.log(`User is logged in: ${isAuthenticated}`);

  return new Response(
    JSON.stringify({
      status: 200,
      data: `Hello World! ${something} from ${isAuthenticated ? "logged in" : "logged out"} user!`,
    }),
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );
}
