<template>
  <div class="home">
    <div class="mdl-grid">
       <div class="mdl-cell mdl-cell--6-col">


         <div class="hackblock-card mdl-card mdl-shadow--2dp">
           <div class="mdl-card__title mdl-card--expand">
             <h4>
               Featured event:<br>
               May 24, 2016<br>
               7-11pm
             </h4>
           </div>
           <div class="mdl-card__actions mdl-card--border">
             <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
               Add to Calendar
             </a>
             <div class="mdl-layout-spacer"></div>
             <i class="material-icons">event</i>
           </div>
         </div>

       </div>
       <div class="mdl-cell mdl-cell--3-col">

       </div>
    </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home'
};
</script>

<style lang="scss">
.hackblock-card.mdl-card {
  width: 512px;
  height: 256px;
  background: #3E4EB8;
}
.hackblock-card > .mdl-card__actions {
  border-color: rgba(255, 255, 255, 0.2);
}
.hackblock-card > .mdl-card__title {
  align-items: flex-start;
}
.hackblock-card > .mdl-card__title > h4 {
  margin-top: 0;
}
.hackblock-card > .mdl-card__actions {
  display: flex;
  box-sizing:border-box;
  align-items: center;
}
.hackblock-card > .mdl-card__actions > .material-icons {
  padding-right: 10px;
}
.hackblock-card > .mdl-card__title,
.hackblock-card > .mdl-card__actions,
.hackblock-card > .mdl-card__actions > .mdl-button {
  color: #fff;
}

</style>
