Learning the ELK stack and rocking some exoplanetary data.

## To Run Locally

### Elasticsearch
`$ docker run -d -p 9200:9200 -p 9300:9300 --name xo-elasticsearch elasticsearch`

### Logstash
`$ docker run -it --name xo-logstash -p 5001:5001/udp --link xo-elasticsearch:elasticsearch ckellydesign/my-logstash`

### Kibana 
`$ docker run -d -p 5601:5601 --link xo-elasticsearch:elasticsearch --name xo-kibana kibana`

### NodeJS
`$ node /path/to/index.js` (make sure index.js is configured to your dockerIP)

### Browser
Navigate to `http://localhost:9000` to use the basic interface. Navigate to `http://[dockerIP]:5601` to view imported data in Kibana.
