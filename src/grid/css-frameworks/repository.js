import bootstrapCssFramework from "./bootstrap";
import defaultCssFramework from "./default";
import semanticCssFramework from "./semantic";
import configuration from "../grid-configuration";

export class GridCssFrameworkRepository{

    constructor(){
        this.globalDefaultFramework = {};
        this.frameworks = [
            bootstrapCssFramework,
            semanticCssFramework
        ];
    }

    import(framework, setAsDefault){
        this.frameworks.push(framework);

        if(setAsDefault === true){
            configuration.defaultCssFramework = framework.name;
        }
    }

    get(frameworkName){
        let framework;

        if(frameworkName){
            framework = this.frameworks.find(item =>{
                return item.name.toLowerCase() === frameworkName.toLowerCase();
            });
        } else if (typeof(configuration.defaultCssFramework) === 'string') {
            framework = this.get(configuration.defaultCssFramework);
        } else {
            framework = configuration.defaultCssFramework;
        }

        return Object.assign({}, defaultCssFramework, framework);
    }
}