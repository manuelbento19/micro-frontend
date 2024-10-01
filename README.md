# Micro Frontend - Module Federation

![Preview Image](./preview.png)

Este projeto demonstra uma aplicação de micro frontends onde temos três aplicativos independentes: **`product-components`** e **`product-app`**. 

- **`product-components`**: Fornece os componentes React reutilizáveis para exibição de produtos.
- **`product-app`**: Utiliza os componentes do `product-components` para mostrar uma lista de produtos na tela.
- **`product-app-footer`**: footer desenvolvido com Vue

## Estrutura do Projeto

```
/micro-frontend-app
  ├── /product-components
  ├── /product-app        
  ├── /product-app-app        
  ├── package.json        
  └── README.md 
```

## Instalação

### Clonar o Repositório
```bash
git clone https://github.com/manuelbento19/micro-frontend.git
cd micro-frontend
```

### Instalar Dependências

Navegue até o diretório de **`product-components`** e instale as dependências:
```bash
cd product-components
npm install
```

Navegue até o diretório de **`product-app`** e instale as dependências:
```bash
cd ../product-app
npm install
```
Navegue até o diretório de **`product-app-footer`** e instale as dependências:
```bash
cd ../product-app-footer
npm install
```
## Excecutar

Para iniciar o ambiente, você precisa rodar o **`product-components`**, o **`product-app`** e o **`product-app-footer`** em paralelo.

**`product-components`**:
   ```bash
   cd product-components
   npm run preview
   ```

Em um novo terminal, **`product-app`**:
   ```bash
   cd product-app
   npm run dev
   ```
Em um novo terminal, **`product-app-footer`**:
   ```bash
   cd product-app-footer
   npm run dev
   ```
### Acessar a Aplicação

- **`product-app`** estará disponível em [http://localhost:3000](http://localhost:3000) 
- **`product-components`** estará disponível em [http://localhost:3001](http://localhost:3001)
- **`product-components-footer`** estará disponível em [http://localhost:30021](http://localhost:3002)

## Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/nome-da-feature`).
3. Faça commit das suas mudanças (`git commit -am 'Adiciona nova feature'`).
4. Faça push para a branch (`git push origin feature/nome-da-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).