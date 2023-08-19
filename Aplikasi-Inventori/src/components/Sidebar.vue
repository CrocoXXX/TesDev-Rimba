<template>
  <aside :class="`${isExpanded && 'isExpanded'}`">
    <div class="logo">
      <img src="../assets/logo.svg" alt="Logo Vue">
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle">
        <span class="material-icons" @click="ToggleMenu">
          keyboard_double_arrow_right
        </span>
      </button>
    </div>

    <h3> Menu </h3>
    <div class="menu">
      <RouterLink class="button" to="/item">
        <span class="material-icons"> category </span>
        <span class="text"> Items </span>
      </RouterLink>
      <RouterLink class="button" to="/about">
        <span class="material-icons"> people </span>
        <span class="text"> Customer </span>
      </RouterLink>
      <RouterLink class="button" to="/">
        <span class="material-icons"> paid </span>
        <span class="text"> Sales </span>
      </RouterLink>
    </div>
  </aside>
</template>

<script setup>
  import {ref} from 'vue'

  const isExpanded = ref(localStorage.getItem('isExpended') === "true")
  const ToggleMenu = () => {
    isExpanded.value = !isExpanded.value

    localStorage.setItem('isExpended', isExpanded.value)
  }
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  width: calc(2rem + 32px);
  min-height: 100vh;
  overflow: hidden;
  padding: 1rem;

  background-color: var(--dark);
  color: var(--light);

  transition: 0.2s ease-out;

  .logo {
    margin-bottom: 1rem;
    img {
      width: 2rem;
    }
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;

    position: relative;
    top: 0;
    transition: .2s ease-out;

    .menu-toggle {
      transition: .2s ease-out;

      .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: .2s ease-out;
      }

      &:hover {
        .material-icons {
          color: var(--primary);
          transform: translateX(0.5rem);
        }
      }
    }
  }

  h3, .button .text {
    opacity: 0;
    transition: .3s ease-out;
  }

  h3 {
    color: var(--grey);
    font-size: .875rem;
    margin-bottom: .5rem;
    text-transform: uppercase ;
  }

  .menu {
    margin: 0 -1rem;

    .button {
      display: flex;
      align-items: center;
      text-decoration: none;

      padding: .5rem 1rem;
      transition: .2s ease-out;

      .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: .2s ease-out;
      }

      .text {
        color: var(--light);
        transition: .2s ease-out;
      }

      &:hover, &.router-link-exact-active {
        background-color: var(--dark-alt);

        .material-icons, .text {
          color: var(--primary);
        }
      }

      &.router-link-exact-active {
        border-right: 5px solid var(--primary);
      }
    }
  }

  &.isExpanded {
    width: var(--sidebar-width);

    .menu-toggle-wrap {
      top: -3rem;
      .menu-toggle {
        transform: rotate(-180deg);
      }
    }

    h3, .button, .text  {
      opacity: 1;
    }
    
    .button {
      .material-icons {
        margin-right: 1rem;
      }
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    z-index: 99;
  }
}
</style>
