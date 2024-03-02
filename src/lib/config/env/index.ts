export const CONVEX_URL = String(process.env.NEXT_PUBLIC_CONVEX_URL);
if (!CONVEX_URL) {
  throw new Error('🔴 Cannot find convex url');
}



// export const STRIPE_KEY = String(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
// if (!STRIPE_KEY) {
//   throw new Error('🔴 Cannot find STRIPE_KEY');
// }
// export const STRIPE_SECRET = String(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
// if (!STRIPE_SECRET) {
//   throw new Error('🔴 Cannot find STRIPE_SECRET');
// }
// export const STRIPE_WEBHOOK = String(process.env.NEXT_PUBLIC_STRIPE_WEBHOOK_SECRET);
// if (!STRIPE_WEBHOOK) {
//   throw new Error('🔴 Cannot find STRIPE_WEBHOOK');
// }
// export const STRIPE_CLIENT_ID = String(process.env.NEXT_PUBLIC_STRIPE_CLIENT_ID);
// if (!STRIPE_CLIENT_ID) {
//   throw new Error('🔴 Cannot find STRIPE_CLIENT_ID');
// }