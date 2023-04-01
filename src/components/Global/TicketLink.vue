<script>
export default {};
</script>

<template>
  <div class="ticketLink" id="TicketTop">
    <a href="https://www.kkday.com/zh-tw" target="_blank">
      <img src="@/assets/images/fixed_ticket.png" alt="網路購票" />
    </a>
  </div>
</template>

<style lang="scss">
.ticketLink {
  position: fixed;
  right: 0;
  bottom: 50px;
  z-index: 100;
  transition: all 0.3s;

  @include desktop {
    display: none;
  }

  &:hover {
    opacity: 0.9;
  }

  > a > img {
    width: 100px;
    height: 172px;
  }
}
</style>
