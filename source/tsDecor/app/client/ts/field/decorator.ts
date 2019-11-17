/** декоратор привязывет ф-цию callbackName
 * к изменению свойства
 *
 */
export default function OnChange<T>(callbackName: string): any {
    return (target: object, propertyKey: string | symbol) => {
        // Необходимо задействовать существующий дескриптор, если он есть.
        // Это позволит объявять несколько декораторов на одном свойстве.
        const descriptor = Object.getOwnPropertyDescriptor(target, propertyKey)
            || { configurable: true, enumerable: true };

        // Подменяем или объявляем get и set

        const originalGet = descriptor.get || (function () { return this.value; });
        const originalSet = descriptor.set || (function (val: T) { this.value = val; });

        descriptor.get = originalGet;
        descriptor.set = function (newVal: T) {
        // Внимание, если определяем set через function,
        // то this - текущий экземпляр класса,
        // если через лямбду, то this - Window!!!
            const currentVal = originalGet.call(this);
            if (newVal !== currentVal) {
                this[callbackName].call(this, this, currentVal, newVal);
            }
            originalSet.call(this, newVal);
        };
        // Объявляем новое свойство, либо обновляем дескриптор
        Object.defineProperty(target, propertyKey, descriptor);
    };
}
