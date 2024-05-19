// ChatComponent.tsx
import React, { useState } from "react";
import ChatInterfaceComponent from "./ChatInterface";
import { SettingsConfiguration } from "../Settings/types";
import { DocumentChunk } from "../Document/types";
import ChunksComponent from "../Document/ChunksComponent";
import DocumentComponent from "../Document/DocumentComponent";
import { RAGConfig } from "../RAG/types";
import InfoComponent from "../Navigation/InfoComponent";
import { document_interface_info, chunk_interface_info, chat_interface_info } from "@/app/info";


interface ChatComponentProps {
  settingConfig: SettingsConfiguration;
  APIHost: string | null;
  setCurrentPage: (p: any) => void;
  RAGConfig: RAGConfig | null;
  production: boolean;
  isAdmin: boolean;
  toggleAdmin: (key: string) => void; 

}

const ChatComponent: React.FC<ChatComponentProps> = ({
  APIHost,
  settingConfig,
  setCurrentPage,
  RAGConfig,
  production,
  isAdmin,
  toggleAdmin
}) => {
  const [chunks, setChunks] = useState<DocumentChunk[]>([]);
  const [context, setContext] = useState("");
  const [chunkTime, setChunkTime] = useState(0);
  const [selectedChunk, setSelectedChunk] = useState<DocumentChunk | null>(null);


  // Estilos para el modal
  const modalStyles = "fixed right-0 top-0 w-full md:w-1/3 h-full bg-white shadow-2xl z-100";
  const defaultStyles = "flex sm:flex-col md:flex-row justify-between items-start md:gap-3";

  return (
    <div className={isAdmin ? defaultStyles : modalStyles}>
      {/* Chat Interface */}
      <div className={isAdmin ?"sm:w-full md:w-1/2 lg:w-2/6 flex flex-col gap-2" : "w-full flex flex-col gap-2 p-4"}>
        <InfoComponent
          settingConfig={settingConfig}
          tooltip_text={chat_interface_info}
          display_text="Interfaz de chat"
          isAdmin={isAdmin}
          toggleAdmin={toggleAdmin} 
        />
        <ChatInterfaceComponent
          setContext={setContext}
          production={production}
          RAGConfig={RAGConfig}
          settingConfig={settingConfig}
          APIHost={APIHost}
          setChunks={setChunks}
          setChunkTime={setChunkTime}
          setCurrentPage={setCurrentPage}
          isAdmin={isAdmin}
          toggleAdmin={toggleAdmin} 
        />
      </div>
      {isAdmin && (
      <div className="flex lg:flex-row sm:flex-col justify-between items-start sm:w-full md:w-1/2 lg:w-4/6 gap-3">
        {/* Sección visible solo para admin */}
        <div className="sm:w-full lg:w-1/4 flex flex-col gap-2">
          <InfoComponent
            settingConfig={settingConfig}
            tooltip_text={chunk_interface_info}
            display_text="Contexto relevante"
            isAdmin={isAdmin}
            toggleAdmin={toggleAdmin}
          />
          {isAdmin && (
          <ChunksComponent
            context={context}
            production={production}
            chunks={chunks}
            RAGConfig={RAGConfig}
            selectedChunk={selectedChunk}
            setSelectedChunk={setSelectedChunk}
            chunkTime={chunkTime}
            setCurrentPage={setCurrentPage}
          />
        )}
        </div>
     
        {/* Document Viewer */}
        <div className="sm:w-full lg:w-3/4 flex flex-col gap-2">
          <InfoComponent
            settingConfig={settingConfig}
            tooltip_text={document_interface_info}
            display_text="Visor de documentos"
            isAdmin={isAdmin}
            toggleAdmin={toggleAdmin}
          />
          <DocumentComponent
            production={production}
            setSelectedChunk={setSelectedChunk}
            selectedChunk={selectedChunk}
            APIhost={APIHost}
            settingConfig={settingConfig}
            deletable={false}
            selectedDocument={null}
          />
        </div>
      </div>
      )}
    </div>
  );
};

export default ChatComponent;
