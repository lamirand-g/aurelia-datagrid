import configuration from "./grid/grid-configuration";

export function configure(aurelia, config) {
    aurelia.globalResources(
        "./grid/grid"
        ,"./grid/grid-column"
        ,"./grid/grid-column-button"
        ,"./grid/grid-column-checkbox"
        ,"./grid/grid-column-edit"
        ,"./grid/grid-column-template"
        );

    if(config){
    	config(configuration);
    }
} 