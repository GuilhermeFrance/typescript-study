// Record 

type Feature = "autoSave" | "autoUpdate" | "compileOnSave"

type Features = Record<Feature, boolean>

const config: Features = {
    autoSave: true,
    autoUpdate: false,
    compileOnSave: true
}