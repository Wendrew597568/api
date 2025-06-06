import { exec, spawn } from "child_process";
import find from "find-process";

const EXECUTAVEL = "bedrock_server.exe"; // Nome do executável
const CAMINHO = "C:\\Users\\Coneg\\OneDrive\\Documentos\\minecraft\\bedrock_server\\bedrock_server.exe"; // Caminho completo, se necessário

export async function restartServer() {
  console.log("Verificando se o processo está rodando...");

  // Encontra o processo pelo nome
  const processos = await find("name", EXECUTAVEL);

  if (processos.length > 0) {
    console.log(`Processo encontrado. Matando PID: ${processos[0].pid}...`);

    // Mata o processo
    process.kill(processos[0].pid);
  } else {
    console.log("O processo não estava rodando.");
  }

  console.log("Iniciando o processo novamente...");

  // Reinicia o processo
  const processo = spawn("cmd", ["/k", `${CAMINHO}`], {
    detached: true, // Permite que o processo continue rodando após o script Node fechar
    stdio: "ignore", // Não herda a saída no Node
    shell: true, // Garante compatibilidade com comandos do Windows
  });

  processo.unref(); // Faz o processo rodar independente do script Node.js
  console.log(`Processo reiniciado com PID: ${processo.pid}`);
}

