import React, { useState } from "react";
import { FaInfo } from "react-icons/fa";
import { SettingsConfiguration } from "../Settings/types";

interface InfoComponentProps {
  settingConfig: SettingsConfiguration;
  tooltip_text: string;
  display_text: string;
  isAdmin: boolean;
  toggleAdmin: (key: string) => void;  // Añade esto
}

const InfoComponent: React.FC<InfoComponentProps> = ({
  settingConfig,
  tooltip_text,
  display_text,
  isAdmin,
  toggleAdmin
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [adminKey, setAdminKey] = useState("");

  const handleToggleAdmin = () => {
    toggleAdmin(adminKey);
    setShowMenu(false);  // Cerrar el menú después de cambiar el modo
    setAdminKey("");     // Opcionalmente, limpiar la clave después de usar
  };

  return (
    <div className={`relative items-center gap-2 ${settingConfig.Chat.settings.info_button.checked ? "flex" : "hidden"}`}>
      <button onClick={() => setShowMenu(!showMenu)} className="btn btn-circle btn-sm border-none bg-bg-verba hover:bg-secondary-verba text-text-verba">
        <FaInfo />
      </button>
      {showMenu && (
        <div className="absolute top-0 left-full translate-x-[-100%] ml-2 p-2 bg-white shadow-md rounded flex items-center" style={{ minWidth: '400px', right: 0 }}>
          <input
            type="password"
            value={adminKey}
            onChange={(e) => setAdminKey(e.target.value)}
            className="input input-bordered input-sm flex-grow mr-1"
            placeholder="Ingrese clave admin"
          />
          <button className="btn btn-sm btn-primary ml-2" onClick={handleToggleAdmin}>
            Cambiar Modo
          </button>
        </div>
      )}
      <div className="tooltip tooltip-right text-xs" data-tip={tooltip_text}>
        <p className="text-sm text-text-alt-verba">{display_text}</p>
      </div>
    </div>
  );
  
  
};

export default InfoComponent;
