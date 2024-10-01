<template>
  <footer :class="$style.footer">
    <p>Copyright © 2024 MicroFrontend - Made with Vue</p>
    <a href="https://github.com/manuelbento19/micro-frontend" target="_blank">Github</a>
  </footer>
</template>

<style module>
.footer{
  width: 100%;
  font-size: 1rem;
  padding: 10px 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #555;
  border: 0;
  border-top: 2px solid #e0e0e0;

  a{
    color: #c26540;
    text-decoration: none;
    font-weight: bold;
  }
}
</style>
