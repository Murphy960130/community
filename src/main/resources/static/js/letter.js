$(function(){
	$("#sendBtn").click(send_letter);
	$("#deleteBtn").click(delete_letter);
	$(".close").click(delete_msg);
});

function send_letter() {
	$("#sendModal").modal("hide");

	var toName = $("#recipient-name").val();
	var content = $("#message-text").val();

	$.post(
	    CONTEXT_PATH + "/letter/send",
	    {"toName":toName,"content":content},
	    function(data) {
	        data = $.parseJSON(data);
	        // 成功
	        if(data.code == 0) {
	            $("#hintBody").text("发送成功！");
	        } else {
	            $("#hintBody").text(data.msg);
	        }

	        $("#hintModal").modal("show");
            setTimeout(function(){
            	$("#hintModal").modal("hide");
            	location.reload();
            }, 2000);
	    }
    );
}

function delete_letter() {
    var letterId = $("#letter-id").val();
	$.post(
	    CONTEXT_PATH + "/letter/delete",
	    {"id":letterId},
	    function(data) {
	        data = $.parseJSON(data);
	        // 成功
	        if(data.code == 0) {
	           location.reload();
	        }
	    }
    );
}


function delete_msg() {
	// TODO 删除数据
	$(this).parents(".media").remove();
}