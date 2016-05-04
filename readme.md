Learning the ELK stack and rocking some exoplanetary data.

## To Run Locally

### Elasticsearch
`$ docker run -d -p 9200:9200 -p 9300:9300 --name xo-elasticsearch elasticsearch`

### Logstash
`$ docker run -it --name xo-logstash -p 8080:8080 -p 5000:5000 --link xo-elasticsearch:elasticsearch xo-logstash`

### Kibana 
`$ docker run -d -p 5601:5601 --link xo-elasticsearch:elasticsearch --name xo-kibana kibana`