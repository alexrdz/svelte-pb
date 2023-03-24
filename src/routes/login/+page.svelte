<script lang="ts">
  import { applyAction, enhance } from '$app/forms';
  import { pb } from '$lib/pocketbase';
</script>

<svelte:head>
  <title>Login to your Account</title>
</svelte:head>

<form
  method="POST"
  use:enhance={() => {
    return async ({ result }) => {
      pb.authStore.loadFromCookie(document.cookie);
      await applyAction(result);
    };
  }}
>
  <h1>Login</h1>

  <div>
    <input type="email" name="email" placeholder="Email" id="email" />
  </div>

  <div>
    <input type="password" name="password" placeholder="Password" id="password" />
  </div>

  

  <div>
    <button>Login</button>
  </div>
</form>
