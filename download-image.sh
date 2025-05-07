#!/bin/bash

# 确保图片目录存在
mkdir -p public/images

# 下载示例狗狗图片并保存
curl -o public/images/dogs.jpg https://example.com/path/to/dog/image.jpg

echo "狗狗图片已下载到 public/images/dogs.jpg"
echo "如果下载失败，请手动将狗狗图片保存到此位置" 