<script>
  import { applyAction, enhance } from '$app/forms';
  import { currentUser, pb } from '$lib/pocketbase';
  import '../app.postcss';
</script>

{#if $currentUser}
<p>{$currentUser.email}</p>
  <form
    method="POST"
    action="/logout"
    use:enhance={() => {
      return async ({ result }) => {
        pb.authStore.clear();
        await applyAction(result);
      };
    }}
  >
    <button>logout</button>
  </form>
{:else}
  <a href="/login">login</a> |
  <a href="/register">register</a>
{/if}

<slot />
