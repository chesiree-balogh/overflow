docker build -t overflow-image .

docker tag overflow-image registry.heroku.com/overflow/web


docker push registry.heroku.com/overflow/web

heroku container:release web -a overflow