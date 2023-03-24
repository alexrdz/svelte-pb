<script lang="ts">
  import { applyAction, enhance } from '$app/forms';
  import { pb } from '$lib/pocketbase';
</script>

<svelte:head>
  <title>Register for an Account</title>
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
  <h1>Register</h1>

  <div>
    <input type="email" name="email" placeholder="Email" id="email" />
  </div>

  <div>
    <input type="password" name="password" placeholder="Password" id="password" />
  </div>

  <div>
    <input
      type="password"
      name="passwordConfirm"
      placeholder="Confirm Password"
      id="passwordConfirm"
    />
  </div>

  <div>
    <button>Register</button>
  </div>
</form>
