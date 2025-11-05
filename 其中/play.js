<script>
  // 播放按鈕點擊效果
  document.querySelectorAll('.play-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      const page = this.getAttribute('data-page');
      if (page) {
        location.href = page;
      } else {
        alert('播放功能開發中!');
      }
    });
  });

  // 點擊歌曲列表效果
  document.querySelectorAll('.song-item').forEach(item => {
    item.addEventListener('click', function() {
      alert('歌曲詳情頁面開發中!');
    });
  });
</script>