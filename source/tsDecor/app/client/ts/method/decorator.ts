
export default function safe(
    target: object,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<any>,
): TypedPropertyDescriptor<any> {
    // Запоминаем исходную функцию
    const originalMethod = descriptor.value;
    // Подменяем ее на нашу обертку
    // eslint-disable-next-line no-param-reassign
    descriptor.value = function SafeWrapper(...a: any) {
        try {
        // Вызываем исходный метод
            return originalMethod.apply(this, a);
        } catch (e) {
        // Просто выводим в консоль, исполнение кода будет продолжено
            console.error('safe: ', e);
            return false;
        }
    };
    // Обновляем дескриптор
    return descriptor;
}
