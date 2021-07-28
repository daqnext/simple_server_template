import {assert} from 'chai';
import {args,ROOTDIR,app,redis,sqlpool} from "../src/global.js";


describe('Args', function() {
  it('show all args', function() {
      assert.notEqual(args,null);
  });
});



describe('Redis', function() {

    it('key-value', async function() {
      let result= await redis.set("testkey","value",'ex',10);
      assert.equal(result,"OK"); 
    });


    it('increase', async function() {
      // Test implementation goes here
      let result_set= await redis.set("test-increase",0,'ex',30);
      let result_inr= await redis.incr("test-increase");
      assert.notEqual(result_inr,null);
    });


    it('hashset', async function() {
      // Test implementation goes here
      let result=await redis.hset('testhashset',1,"dasd","xx","fasdf");
      assert.notEqual(result,null);
      redis.expire('testhashset',50);
    });
 
});




describe('sqldb', function() {

  it('pool-query', async function() {
    
        var err, rows, fields = await sqlpool.query("SELECT field FROM atable");
        console.log(err);
        console.log(rows);
        console.log(fields);

  });
 

});

