<template>
  <div class="project">
    <div class="project__title">
      <slot name="title"/>
    </div>

    <div class="project__content">
      <slot name="content"/>
    </div>

    <div class="project__actions">
      <div class="project__action">
        Read more
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Project"
  }
</script>

<style lang="scss">
  .project {
    width: calc(50% - 2rem);
    margin: 1rem;
    background: #f6f6f6;
    border-radius: 3px;

    &__title {
      padding: 1rem;
      background: #892f35;
      font-size: 1.125rem;
      text-transform: uppercase;
      font-weight: 500;
      color: #fff;
      border-bottom: 3px solid #380508;
      border-radius: 3px;
      overflow: hidden;
    }

    &__content {
      padding: 2rem 1rem;
      font-size: .9rem;
      line-height: .95rem;
      color: #505050;
      font-weight: 400;
    }

    &__actions {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
    }

    &__action {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: .5rem;
      width: 9rem;
      height: 2.5rem;
      background: #e1e7ef;
      border-radius: 3px 0 3px 0;
      font-size: .8rem;
      text-transform: uppercase;
      color: #8d96a2;
      font-weight: 500;
      border-left: 1px solid #c0c7ce;
      border-top: 1px solid #c0c7ce;
      cursor: pointer;
      transition: all .1s ease-in;

      &:hover {
        background: #c0c7ce;
        color: #636c75;
      }
    }
  }
</style>
