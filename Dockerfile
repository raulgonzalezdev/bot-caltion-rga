FROM python:3.10
WORKDIR /Verba

# Copy the application code
COPY . /Verba

# Install dependencies
RUN pip install -e '.'

RUN rm -rf /root/.local/share/weaviate/verba_cache_minilm \
           /root/.local/share/weaviate/verba_cache_ollama \
           /root/.local/share/weaviate/verba_cache_text2vec_cohere \
           /root/.local/share/weaviate/verba_cache_text2vec_openai \
           /root/.local/share/weaviate/verba_chunk_minilm \
           /root/.local/share/weaviate/verba_chunk_ollama \
           /root/.local/share/weaviate/verba_chunk_text2vec_cohere \
           /root/.local/share/weaviate/verba_chunk_text2vec_openai \
           /root/.local/share/weaviate/verba_config \
           /root/.local/share/weaviate/verba_document_minilm \
           /root/.local/share/weaviate/verba_document_ollama \
           /root/.local/share/weaviate/verba_document_text2vec_cohere \
           /root/.local/share/weaviate/verba_document_text2vec_openai \
           /root/.local.share/weaviate/verba_suggestion

# Copy local data to the appropriate directory in the container
COPY data/weaviate_data /root/.local/share/weaviate

EXPOSE 8001
CMD ["verba", "start", "--port", "8000", "--host", "0.0.0.0"]
