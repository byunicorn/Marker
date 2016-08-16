$(document).ready(function() {
	var image = $("#target");
	var canvas = convertImageToCanvas(image[0]);
	var markerButton = $("#markerBtn");

	var editor = {
		template: "#editor",
		cut: cut,
		leftRotate: leftRotate,
		rightRotate: rightRotate,
		zoom: zoom,
		init: initEditor,
		unbind: unbindEditor,
		reset: resetEditor
	};

	var marker = {
		mark: mark,
		init: initMarker,
		unbind: unbindMarker,
		reset: resetMarker
	};

	markerButton.click(showDialog);

	function convertImageToCanvas(image) {
		var canvas = document.createElement("canvas");
		canvas.width = image.width;
		canvas.height = image.height;
		canvas.getContext("2d").drawImage(image, 0, 0);
		return canvas;
	}

	function cut() {
	}

	function leftRotate() {
	}

	function rightRotate() {
	}

	function zoom() {
	}

	function initEditor() {
	}

	function unbindEditor() {
	}

	function resetEditor() {
	}

	function mark() {
	}

	function initMarker() {
	}

	function unbindMarker() {
	}

	function resetMarker() {
	}

	function showDialog() {
	}
});