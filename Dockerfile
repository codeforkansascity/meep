FROM python:3.6.8-slim-stretch
EXPOSE 5000
COPY . /meep
WORKDIR /meep
RUN pip install -r requirements.txt
ENTRYPOINT ["flask"]
CMD ["run", "--host=0.0.0.0"]
