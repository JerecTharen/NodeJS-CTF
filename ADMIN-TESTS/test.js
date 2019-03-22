// const jasmine = require('jasmine');
const express = require('express');
const http = require('http');
const app = express();

describe('Connection checkers', ()=>{
  let nodeGet;

  beforeEach(()=>{
    // nodeGet = htt.get
  });

  it('should be running at 10.0.105.17:3050', ()=>{
    http.request('http://10.0.105.17:3050', (req, resp)=>{
      expect(resp.statusCode).toBe(200);
    });
  });
});
