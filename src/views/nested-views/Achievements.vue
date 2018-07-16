<template>
	<div class="achievements">
		<div id="progressContainer">
			<p id="achievementCounter">Points : {{ character.achievementPoints }} / 29220</p>
			<progress class="progress is-success has-background-primary" :value="achiPoints" max="29220"></progress>
		</div>
	</div>
</template>


<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      achiPoints: 0
    };
  },

  methods: {
    ...mapMutations(["enableLoading", "disableLoading"]),
    fillProgressBar() {
      if (this.achiPoints < this.character.achievementPoints) {
        this.achiPoints += this.character.achievementPoints / 100;
        setTimeout(this.fillProgressBar, 7);
      }
    }
  },
  mounted() {
    this.fillProgressBar();
  },
  computed: {
    ...mapGetters(["character"])
  }
};
</script>

<style scoped lang="scss">
#progressContainer {
  margin: 0 10% 0 10%;
}
#achievementCounter {
	margin: 8px 5px;
	font-size: 20px;
}
</style>

