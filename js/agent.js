$(document).ready(function() {
  // .more_btn 버튼 클릭 시 실행되는 함수
  $('.more_btn').click(function() {
    // .hoverbox.none 요소들을 찾아서 none 클래스를 제거하고 보이게 처리
    $('.hoverbox.none').removeClass('none').fadeIn();
    
    // .more_btn 버튼을 숨기기 (옵션, 필요 없다면 이 부분은 제거 가능)
    $(this).hide();
  });
  
  $('.agent_category li a').click(function(e) {
        e.preventDefault();  // 기본 링크 동작 방지

        var category = $(this).data('category');  // 클릭한 카테고리의 data-category 값 가져오기

        // 모든 agent_box 숨기기
        $('.hoverbox').hide();

        // 선택한 카테고리에 해당하는 agent_box만 보이기
        if (category === 'all') {
            $('.hoverbox').show();  // '모두' 카테고리 클릭 시 모든 항목을 보여줌
        } else {
            $('.hoverbox[data-category="' + category + '"]').show();
        }
    });
});