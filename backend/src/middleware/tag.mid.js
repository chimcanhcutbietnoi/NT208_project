const express = require('express');

const urlDecodeMiddleware = (req, res, next) => {
  try {
    
    if (req.query.tag) {
      // Sử dụng decodeURIComponent để giải mã chuỗi
      req.query.tag = decodeURIComponent(req.query.tag);
    }
    // Chuyển điều khiển đến middleware hoặc route tiếp theo
    next();
  } catch (error) {
    // Xử lý lỗi nếu có
    console.error('Error decoding URL:', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = urlDecodeMiddleware;