<template>
  <div class="youtube-embed">
    <iframe
      :src="embedUrl"
      :title="title"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="youtube-iframe"
    ></iframe>
  </div>
</template>

<script setup>
  const props = defineProps({
    videoId: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: 'YouTube video player'
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    startAt: {
      type: Number,
      default: 0
    }
  })

  const embedUrl = computed(() => {
    let url = `https://www.youtube.com/embed/${props.videoId}?rel=0`

    if (props.autoplay) {
      url += '&autoplay=1'
    }

    if (props.startAt > 0) {
      url += `&start=${props.startAt}`
    }

    return url
  })
</script>

<style scoped>
  .youtube-embed {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
    height: 0;
    overflow: hidden;
    border-radius: 8px;
  }

  .youtube-iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
</style>
