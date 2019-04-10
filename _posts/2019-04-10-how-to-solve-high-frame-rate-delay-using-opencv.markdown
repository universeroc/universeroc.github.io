---
title: How to solve high frame rate delay using OpenCV
date: 2019-04-10T19:05:16+08:00
layout: post
---

I've been trapped into this problem by several hours even if I found it's been GPU render problem and recompiled it using specific version of OpenCV.

[capture.open(CV_CAP_DSHOW)](https://stackoverflow.com/questions/16092802/capturing-1080p-at-30fps-from-logitech-c920-with-opencv-2-4-3)

this last answer help me out!

I find after I set the width and height of the VideoCapture it'll delay to render.

Here is the right code:

```C++
VideoCapture capture(0 + CV_CAP_DSHOW);
capture.open(0 + CV_CAP_DSHOW);

capture.set(CV_CAP_PROP_FOURCC, CV_FOURCC('M', 'J', 'P', 'G'));
capture.set(CV_CAP_PROP_FRAME_WIDTH, 1920);
capture.set(CV_CAP_PROP_FRAME_HEIGHT, 1080);

cv::Mat frame;
capture >> frame;
while (1) {
	cv::namedWindow("demo", cv::WINDOW_OPENGL);
	cv::setWindowProperty("demo", CV_WND_PROP_FULLSCREEN,
	                    CV_WINDOW_FULLSCREEN);
	// ATTENTION
	//
	// WITHOUT this line, the window show with a border on the
	// left randomly
	cv::setWindowProperty("demo", CV_WND_PROP_AUTOSIZE,
	                      CV_WINDOW_AUTOSIZE);

	cv::imshow("demo", frame);
	cv::waitKey(1);
}
```