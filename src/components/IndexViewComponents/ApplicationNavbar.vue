<template>
  <div class="application__navbar">

    <div class="application__navbar__logo">
      <a :href="logo.url">
        <img
          class="application__navbar__logo-image"
          src="../../assets/header__logo.png">
      </a>
    </div>

    <div class="application__navbar__brand">
      <div class="application__navbar__brand-title">
        {{ logo.title }}
      </div>
    </div>

    <nav class="application__navbar__nav">
      <ul class="application__navbar__nav__items">
        <li
          class="application__navbar__nav__item"
          v-for="(item, index) in navbarItems"
          :key="index">
            <a
              :href="item.link"
              class="application__navbar__nav__item-link">
              {{ item.name.toUpperCase() }}
            </a>
        </li>
      </ul>
    </nav>

    <div class="application__navbar__actions">
      <div class="application__navbar__action application__navbar__action--login">
        <a class="application__navbar__action-link">
          {{ headerButtons.login }}
        </a>
      </div>
      <div class="application__navbar__action application__navbar__action--register">
        <a class="application__navbar__action-link">
          {{ headerButtons.register }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ApplicationNavbar',
    data () {
      return {
        logo: {
          url: 'https://yandex.ru/',
          title: 'Knight Group'
        },
        headerButtons: {
          login: 'Login',
          register: 'Register'
        },
        navbarItems: [
          {
            name: "Home",
            link:  "#"
          },
          {
            name: "Projects",
            link:  "https://www.google.ru/"
          },
          {
            name: "Blog",
            link: "#",
          },
          {
            name: "About",
            link: "#",
          }
        ],
      }
    }
  }
</script>

<style lang="scss">
  .application__navbar {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    padding: 0 4rem;
    background:#0D131C;
    height: 66px;

    &__logo {
      display: flex;
      align-items: stretch;

      &-image {
        width: 60px;
        height: auto;
        object-fit: contain;
        padding: .75rem 0;
      }
    }

    &__brand {
      display: flex;
      align-items: stretch;
      justify-content: center;
      margin-left: .75rem;

      &-title{
        font-size: 1.35rem;
        color: #fff;
        text-transform: uppercase;
        font-weight: 600;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    &__nav {
      display: flex;
      flex-direction: row;
      flex: 1;
      padding: 0 3rem;
      align-items: stretch;

      &__items {
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: stretch;
        flex: 1;
        padding: 0;
        margin: 0;
      }

      &__item {
        display: flex;
        align-items: stretch;
        position: relative;

        &::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 5px;
          background: #963136;
          left: 0;
          bottom: 0;
        }

        &-link {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          width: 10rem;
          padding-bottom: 1.175rem;
          text-decoration: none;
          color: #fff;
          font-size: .9rem;
          font-weight: 300;
          transition: all 0.1s ease-in;

          &:hover{
            font-size: 1rem;
            font-weight: 500;
            background: #963136;
            text-decoration: none;
            color: #fff;
          }
        }
      }
    }

    &__actions{
      display: flex;
      flex-shrink: 1;
      justify-content: flex-end;
      align-items: stretch;
    }

    &__action {
      display: flex;
      align-items: stretch;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 5px;
        background: #263244;
        left: 0;
        bottom: 0;
      }

      &-link {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        width: 8rem;
        padding-bottom: 1.175rem;
        text-decoration: none;
        color: #fff;
        font-size: .9rem;
        font-weight: 300;
        text-transform: uppercase;
        transition: all 0.1s ease-in;
        cursor: pointer;

        &:hover{
          background: #263244;
          font-size: 1rem;
          font-weight: 500;
          color: #fff;
          text-decoration: none;
        }
      }
    }
  }
</style>
