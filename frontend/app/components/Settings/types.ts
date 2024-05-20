export interface SettingsPayload {
  selectedTheme: string;
  themes: Settings;
}

interface MetaInformation {
  title: string;
  description: string;
}

export interface Settings {
  [key: string]: SettingsConfiguration;
}

export interface SettingsConfiguration {
  Customization: CustomizationSettings;
  Chat: ChatSettings;
}

// Setting Options

export interface CustomizationSettings extends MetaInformation {
  settings: {
    title: TextFieldSetting;
    subtitle: TextFieldSetting;
    intro_message: TextFieldSetting;
    placeholder_message: TextFieldSetting;
    image: ImageFieldSetting;
    primary_color: ColorSetting;
    secondary_color: ColorSetting;
    warning_color: ColorSetting;
    bg_color: ColorSetting;
    bg_alt_color: ColorSetting;
    text_color: ColorSetting;
    text_alt_color: ColorSetting;
    button_color: ColorSetting;
    button_hover_color: ColorSetting;
    bg_console: ColorSetting;
    text_console: ColorSetting;
    font: SelectSetting;
    theme: "light" | "dark";
  };
}

export interface ChatSettings extends MetaInformation {
  settings: {
    caching: CheckboxSetting;
    suggestion: CheckboxSetting;
    info_button: CheckboxSetting;
    max_document_size: NumberFieldSetting;
  };
}

// Setting Fields

export interface TextFieldSetting {
  type: "text";
  text: string;
  description: string;
}

export interface NumberFieldSetting {
  type: "number";
  value: number;
  description: string;
}

export interface ImageFieldSetting {
  type: "image";
  src: string;
  description: string;
}

export interface CheckboxSetting {
  type: "check";
  checked: boolean;
  description: string;
}

export interface ColorSetting {
  type: "color";
  color: string;
  description: string;
}

export interface SelectSetting {
  type: "select";
  options: string[];
  value: string;
  description: string;
}

// Base Settings

const AvailableFonts: string[] = [
  "Inter",
  "Plus_Jakarta_Sans",
  "Open_Sans",
  "PT_Mono",
];

const BaseFonts: SelectSetting = {
  value: "Plus_Jakarta_Sans",
  type: "select",
  options: AvailableFonts,
  description: "Text Font",
};

const BaseCustomization: CustomizationSettings = {
  title: "Customization",
  description:
    "Personaliza el diseño de tu Bernabo Bot cambiando el título, subtítulo, logotipo y colores de la aplicación.",
  settings: {
    title: { text: "Bernabo", type: "text", description: "Título de la página" },
    subtitle: {
      text: "Laboratorio Bernabo",
      type: "text",
      description: "Subtítulo de la página",
    },
    intro_message: {
      text: "Bienvenido al asistente AI de Laboratorios Bernabó",
      type: "text",
      description: "Mensaje de introducción",
    },
    placeholder_message: {
      text: "¡Pregúntale cualquier cosa a Bernabo Bot!",
      type: "text",
      description: "Marcador de posición de entrada",
    },
    image: {
      src: "https://github.com/raulgonzalezdev/bot-caltion-rga/tree/main/img/icon.png?raw=true",
      type: "image",
      description: "Logotipo de la Página",
    },
    primary_color: {
      color: "#91d4ff",
      type: "color",
      description: "Primary Color",
    },
    secondary_color: {
      color: "#90FFA8",
      type: "color",
      description: "Secondary Color",
    },
    warning_color: {
      color: "#FF8399",
      type: "color",
      description: "Accent Color",
    },
    bg_color: {
      color: "#FEF7F7",
      type: "color",
      description: "Background Color",
    },
    bg_alt_color: {
      color: "#FFFFFF",
      type: "color",
      description: "Alternative Background Color",
    },
    text_color: { color: "#161616", type: "color", description: "Text Color" },
    text_alt_color: {
      color: "#8E8E8E",
      type: "color",
      description: "Alternative Text Color",
    },
    button_color: {
      color: "#EFEFEF",
      type: "color",
      description: "Button Color",
    },
    button_hover_color: {
      color: "#DCDCDC",
      type: "color",
      description: "Button Hover Color",
    },
    bg_console: {
      color: "#3F3E40",
      type: "color",
      description: "Console Background",
    },
    text_console: {
      color: "#FFFFFF",
      type: "color",
      description: "Console Text",
    },
    font: BaseFonts,
    theme: "light",
  },
};

const CustomCustomization: CustomizationSettings = {
  title: "Customization",
  description:
    "Personaliza el diseño de tu Bernabo Bot cambiando el título, subtítulo, logotipo y colores de la aplicación.",
  settings: {
    title: { text: "My RAG", type: "text", description: "Título de la página" },
    subtitle: {
      text: "Powered by Caltion",
      type: "text",
      description: "Subtítulo de la página",
    },
    intro_message: {
      text: "Bienvenido al asistente AI de Laboratorios Bernabó",
      type: "text",
      description: "Mensaje de introducción",
    },
    placeholder_message: {
      text: "¡Pregúntale cualquier cosa a Bernabo Bot!",
      type: "text",
      description: "Marcador de posición de entrada",
    },
    image: {
      src: "https://github.com/raulgonzalezdev/bot-caltion-rga/tree/main/img/icon.png?raw=true",
      type: "image",
      description: "Logotipo de la Página",
    },
    primary_color: {
      color: "#91d4ff",
      type: "color",
      description: "Primary Color",
    },
    secondary_color: {
      color: "#90FFA8",
      type: "color",
      description: "Secondary Color",
    },
    warning_color: {
      color: "#FF8399",
      type: "color",
      description: "Accent Color",
    },
    bg_color: {
      color: "#FEF7F7",
      type: "color",
      description: "Background Color",
    },
    bg_alt_color: {
      color: "#FFFFFF",
      type: "color",
      description: "Alternative Background Color",
    },
    text_color: { color: "#161616", type: "color", description: "Text Color" },
    text_alt_color: {
      color: "#8E8E8E",
      type: "color",
      description: "Alternative Text Color",
    },
    button_color: {
      color: "#EFEFEF",
      type: "color",
      description: "Button Color",
    },
    button_hover_color: {
      color: "#DCDCDC",
      type: "color",
      description: "Button Hover Color",
    },
    bg_console: {
      color: "#3F3E40",
      type: "color",
      description: "Console Background",
    },
    text_console: {
      color: "#FFFFFF",
      type: "color",
      description: "Console Text",
    },
    font: BaseFonts,
    theme: "light",
  },
};

const DarkModeCustomization: CustomizationSettings = {
  title: "Customization",
  description:
    "Personaliza el diseño de tu Bernabo Bot cambiando el título, subtítulo, logotipo y colores de la aplicación.",
  settings: {
    title: { text: "Bernabo", type: "text", description: "Título de la página" },
    subtitle: {
      text: "Laboratorio Bernabo",
      type: "text",
      description: "Subtítulo de la página",
    },
    intro_message: {
      text: "Bienvenido al asistente AI de Laboratorios Bernabó",
      type: "text",
      description: "Mensaje de introducción",
    },
    placeholder_message: {
      text: "¡Pregúntale cualquier cosa a Bernabo Bot!",
      type: "text",
      description: "Marcador de posición de entrada",
    },
    image: {
      src: "https://github.com/raulgonzalezdev/bot-caltion-rga/tree/main/img/icon.png?raw=true",
      type: "image",
      description: "Logotipo de la Página",
    },
    primary_color: {
      color: "#BB86FC",
      type: "color",
      description: "Primary Color",
    },
    secondary_color: {
      color: "#008F82",
      type: "color",
      description: "Secondary Color",
    },
    warning_color: {
      color: "#FF8399",
      type: "color",
      description: "Accent Color",
    },
    bg_color: {
      color: "#202020",
      type: "color",
      description: "Background Color",
    },
    bg_alt_color: {
      color: "#2F2929",
      type: "color",
      description: "Alternative Background Color",
    },
    text_color: { color: "#ffffff", type: "color", description: "Text Color" },
    text_alt_color: {
      color: "#999999",
      type: "color",
      description: "Alternative Text Color",
    },
    button_color: {
      color: "#3C3C3C",
      type: "color",
      description: "Button Color",
    },
    button_hover_color: {
      color: "#2C2C2C",
      type: "color",
      description: "Button Hover Color",
    },
    bg_console: {
      color: "#2F2929",
      type: "color",
      description: "Console Background",
    },
    text_console: {
      color: "#FFFFFF",
      type: "color",
      description: "Console Text",
    },
    font: {
      value: "Open_Sans",
      type: "select",
      options: AvailableFonts,
      description: "Text Font",
    },
    theme: "dark",
  },
};

const GoogleHackathonCustomization: CustomizationSettings = {
  title: "Customization",
  description:
    "Personaliza el diseño de tu Bernabo Bot cambiando el título, subtítulo, logotipo y colores de la aplicación.",
  settings: {
    title: {
      text: "Prinses Maxima Centrum",
      type: "text",
      description: "Título de la página",
    },
    subtitle: {
      text: "Medical RAG",
      type: "text",
      description: "Subtítulo de la página",
    },
    intro_message: {
      text: "Welcome to Medical Retrieval Augmented Generation! We ingested medical data, like clinical reports, research and more to improve access to healthcare. Try it out by asking questions related to diseases, symptoms and medical conditions.",
      type: "text",
      description: "Mensaje de introducción",
    },
    placeholder_message: {
      text: "Ask a medical question",
      type: "text",
      description: "Marcador de posición de entrada",
    },
    image: {
      src: "https://www.prinsesmaximacentrum.nl/img/logo/prinses-maxima-centrum-logo-en.svg",
      type: "image",
      description: "Logotipo de la Página",
    },
    primary_color: {
      color: "#FF963F",
      type: "color",
      description: "Primary Color",
    },
    secondary_color: {
      color: "#53E797",
      type: "color",
      description: "Secondary Color",
    },
    warning_color: {
      color: "#F11F78",
      type: "color",
      description: "Accent Color",
    },
    bg_color: {
      color: "#F1F1F1",
      type: "color",
      description: "Background Color",
    },
    bg_alt_color: {
      color: "#FFFFFF",
      type: "color",
      description: "Alternative Background Color",
    },
    text_color: { color: "#000F1D", type: "color", description: "Text Color" },
    text_alt_color: {
      color: "#818181",
      type: "color",
      description: "Alternative Text Color",
    },
    button_color: {
      color: "#E4E4E4",
      type: "color",
      description: "Button Color",
    },
    button_hover_color: {
      color: "#CCCCCC",
      type: "color",
      description: "Button Hover Color",
    },
    bg_console: {
      color: "#3F3E40",
      type: "color",
      description: "Console Background",
    },
    text_console: {
      color: "#FFFFFF",
      type: "color",
      description: "Console Text",
    },
    font: {
      value: "Open_Sans",
      type: "select",
      options: AvailableFonts,
      description: "Text Font",
    },
    theme: "light",
  },
};

const WeaviateCustomization: CustomizationSettings = {
  title: "Customization",
  description:
    "Personaliza el diseño de tu Bernabo Bot cambiando el título, subtítulo, logotipo y colores de la aplicación.",
  settings: {
    title: {
      text: "Weaviate Verba",
      type: "text",
      description: "Título de la página",
    },
    subtitle: {
      text: "Chatbot for Weaviate",
      type: "text",
      description: "Subtítulo de la página",
    },
    intro_message: {
      text: "Welcome to Weaviate, your AI-Native vector database. How can I help you with Weaviate today?",
      type: "text",
      description: "Mensaje de introducción",
    },
    placeholder_message: {
      text: "Ask all questions related to Weaviate",
      type: "text",
      description: "Marcador de posición de entrada",
    },
    image: {
      src: "https://github.com/weaviate/Verba/blob/1.0.0/frontend/public/weaviate.png?raw=true",
      type: "image",
      description: "Logotipo de la Página",
    },
    primary_color: {
      color: "#6BDF4A",
      type: "color",
      description: "Primary Color",
    },
    secondary_color: {
      color: "#7AD6EB",
      type: "color",
      description: "Secondary Color",
    },
    warning_color: {
      color: "#F4404E",
      type: "color",
      description: "Accent Color",
    },
    bg_color: {
      color: "#EDEDED",
      type: "color",
      description: "Background Color",
    },
    bg_alt_color: {
      color: "#ffffff",
      type: "color",
      description: "Alternative Background Color",
    },
    text_color: { color: "#130C49", type: "color", description: "Text Color" },
    text_alt_color: {
      color: "#8196A6",
      type: "color",
      description: "Alternative Text Color",
    },
    button_color: {
      color: "#E6E3E3",
      type: "color",
      description: "Button Color",
    },
    button_hover_color: {
      color: "#FFFFFF",
      type: "color",
      description: "Button Hover Color",
    },
    bg_console: {
      color: "#3F3E40",
      type: "color",
      description: "Console Background",
    },
    text_console: {
      color: "#FFFFFF",
      type: "color",
      description: "Console Text",
    },
    font: {
      value: "Inter",
      type: "select",
      options: AvailableFonts,
      description: "Text Font",
    },
    theme: "light",
  },
};

const BaseChat: ChatSettings = {
  title: "Configuraciones de chat",
  description:
    "Personalice la configuración del chat, como almacenar en caché las respuestas generadas, o permita que le brinde sugerencias de autocompletar",
  settings: {
    caching: { checked: true, type: "check", description: "Habilitar almacenamiento en caché" },
    suggestion: {
      checked: true,
      type: "check",
      description: "Habilitar autocompletado",
    },
    info_button: {
      checked: true,
      type: "check",
      description: "Habilitar información de ayuda",
    },
    max_document_size: {
      value: 10000,
      type: "number",
      description: "Máximo de caracteres para mostrar documentos",
    },
  },
};

export const BaseSettings: Settings = {
  Default: {
    Customization: BaseCustomization,
    Chat: BaseChat,
  },
  DarkMode: {
    Customization: DarkModeCustomization,
    Chat: BaseChat,
  },
  Weaviate: {
    Customization: WeaviateCustomization,
    Chat: BaseChat,
  },
  SanaMaxima: {
    Customization: GoogleHackathonCustomization,
    Chat: BaseChat,
  },
  Custom: {
    Customization: CustomCustomization,
    Chat: BaseChat,
  },
};
