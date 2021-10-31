import * as yup from "yup";

interface FieldInterface {
    validations: ValidationConfigInterface[];
    validationType: 'mixed' | 'string' | 'number' | 'boolean' | 'date';
    id: string;
    fieldType: 'input' | 'select' | 'text' | 'checkbox';
}

interface ValidationConfigInterface {
    type: string,
    errorMessage: string,
    customCheck: any
}

class Validator {
    private fields: FieldInterface[];
    private schema = {};
    constructor(fields: FieldInterface[]) {
        this.fields = fields;
    }

    generateFieldSchema() {
        this.schema = this.fields?.reduce(this.generateValidator, {});
        return this;
    }

    validateInitialValue(trigger: Function) {
        trigger();
        return this;
    }

    generateSchema() {
        return yup.object().shape(this.schema);
    }


    private generateValidator(schema: any, field: FieldInterface) {
        const { id, validationType, validations = [], fieldType } = field;
        if (fieldType === 'text') return schema;
        
        if (!yup[validationType]) {
            return schema;
        }
        
        let validator = yup[validationType]() as any;
        validations.forEach((validation: ValidationConfigInterface) => {
            const { errorMessage, type, customCheck = undefined } = validation;
            if (!validator[type]) {
                return;
            }
            if (type === 'test') {
                validator = validator[type](`test-${errorMessage}`, errorMessage, function test<T>(this: T) { return customCheck(this) });
            } else {
                validator = validator[type](errorMessage, customCheck);
            }
        });
        schema[id] = validator;
        return schema;
    }
}

export default Validator;