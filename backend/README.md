# Github Repository Explorer Backend 

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Github%20Explorer%20Api&uri=https%3A%2F%2Fgithub.com%2Fmatpandino%2Fgithub-repository-explorer%2Ftree%2Fmaster%2Fbackend%2F.github%2FInsomnia_github-repository-explorer.json)

<br>

O objetivo dessa API é consumir a api do GitHub para o frontend consumir.

Atualmente a API do GitHub possui limitações para usuários não autenticados. Para mais informações ver em https://docs.github.com/en/rest.

### Instalação Padrão

Para rodar em modo de desenvolvimento:

```
// Clone o repositório
git clone https://github.com/matpandino/github-repository-explorer.git


// Abra o backend na IDE de sua escolha (IntelliJ, Eclipse, etc.) 
repositório: github-repository-explorer/backend/


// Execute o projeto
```

### Criando imagem e rodando com Docker

Para prosseguir será necessário Docker instalado na sua máquina.

#### Via Imagem no DockerHub já existente

```
// Clone o repositório
git clone https://github.com/matpandino/github-repository-explorer.git


// Vá para o diretório do back-end
cd github-repository-explorer/backend/


// Baixe a imagem do repositório
docker pull matpandino/github-explorer-api:latest


// Rode a imagem do Projeto
docker run -d -p 8080:8080 -t matpandino/github-explorer-api:latest
```

#### Localmente

```

// Gere o JAR do projeto
./mvnw clean package

// Crie a imagem Docker
docker build -t github-explorer-api:latest .

// Rode a imagem
docker run -d -p 8080:8080 -t github-explorer-api:latest
```
