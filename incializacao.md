### Verifica versão do node

```bash
node -v
```

### Inicializa o projeto Node.js

```bash
npm init -y
```

### Instala o TypeScript como uma dependência de desenvolvimento

```bash
npm install --save-dev typescript
```

### Gera o arquivo de configuração tsconfig.json

```bash
npx tsc --init
```

### Roda o TypeScript no Windows - (compila/build)

```bash
npx tsc <nome-do-arquivo>
# ou
npx tsc
```

### Roda o TypeScript em modo de observação (watch mode) no Windows

```bash
npx tsc -w
```

### Instala o pacote "ts-node" para rodar o typescript no terminal do node sem precisar dar o build

```bash
npm install -D ts-node
```

### Roda um Script TypeScript no Terminal sem compilar o arquivo

```bash
npx ts-node script.ts
```

---

### Mudanças no arquivo `tsconfig.json`

```json
{
	"compilerOptions": {
		"target": "ES6",
		// "module": "ES6",
		"module": "CommonJS",
		// ativa o diretório raiz
		"rootDir": "./src",
		// ativa o diretório de saída
		"outDir": "./public",
		// proibe a tipagem "any"
		"noImplicitAny": true
	},
	"include": ["./src/**/*.ts"],
	"exclude": ["./test/**/*.ts", "node_modules"]
}
```

### Mudanças no arquivo `tsconfig.json`, recomendadas pela Microsoft de acordo com a versão 20 do node

```json
{
	"compilerOptions": {
		"lib": ["ES2023"],
		"target": "ES2022",
		"module": "node16"
	}
}
```
