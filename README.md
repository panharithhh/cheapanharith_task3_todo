# Todo Router

```bash
npm install
npm run dev
```

Routes: `/todos`, `/users`, `/users/:id`, anything else shows the 404 page.

## What each effect's cleanup prevents

- `WindowWidth` (resize listener): removing the listener stops it from leaking and calling `setWidth` on an unmounted component, and stops duplicate listeners piling up on every remount.
- `UserDirectory` (fetch on `query`): setting `cancelled = true` stops a slow, outdated response from overwriting the results of a newer search, or from setting state after the page is left.
- `UserDetail` (fetch on `id`): setting `cancelled = true` stops the previous user's late response from replacing the user for the `/users/:id` you just navigated to.
# cheapanharith_task3_todo
