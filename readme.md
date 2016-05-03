Learning the ELK stack and rocking some exoplanetary data.

## To Run Locally

### Elasticsearch
`$ docker run -d -p 9200:9200 -p 9300:9300 --name xo-elasticsearch elasticsearch`

### Logstash
Navigate to logstash config directory and run:
`$ docker run -it --rm -p 8080:8080 --link xo-elasticsearch:elasticsearch --name xo-logstash -v "$PWD":/config-dir logstash logstash -f /config-dir/logstash.conf`
	
### Kibana 
`$ docker run -d -p 5601:5601 --link xo-elasticsearch:elasticsearch --name xo-kibana kibana`