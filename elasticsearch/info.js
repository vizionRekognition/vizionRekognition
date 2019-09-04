var client = require('./connection');

client.cluster.health({},function(err,resp,status) {  
  console.log("-- Client Health --",resp);
});

client.count({index: 'rekognition',type: 'image'},function(err,resp,status) {  
  console.log("image",resp);
});