# cloudformation-brownbag

Este repositorio hace parte del Workshop *[Cloudformation desde las bases](https://slides.com/cucutajs/cloudformation)* y contiene los pasos basicos y un ejemplo descriptivo de como usar Cloudformation para crear y actualizar una pila de recursos (Stack) de **AWS**.

## Prerequisitos
Para seguir paso a paso este repositorio el principal prerequisito es tener una cuenta de AWS con los permisos necesarios para crear recursos y roles de acceso. 

Tambien se recomienda tener GIT y NodeJS instalado.

## Como usar
Este repositorio cuenta con una serie de etiquetas (tags) que corresponden a los pasos descritos en las diapositivas de la charla. Para moverse entre las diferentes etiquetas debes ejecutar en tu terminal/consola/shell preferida:

```
git checkout [tag]
```

donde `tag` es el identificador del paso al que te quieres mover. Los tags disponibles son:

* **step1:** Contiene una plantilla de Cloudformation simple que permite construir un stack con un bucket de s3 privado.
* **step2:** Actualiza la plantilla para añadir reglas de control de acceso al contenido del bucket descrito previamente. En este paso se ilustra el uso de funciones y referencias.
* **step3:** Actualiza la plantilla para añadir la especificacion de parametros para nuestro stack y adicionalmente se crea una funcion Lambda en AWS basica un grupo de logs y roles de ejecucion que autorizan acceso a la funcion a los recursos que necesitamos. En este paso se ilustra el uso de parametros en Cloudformation.
* **step4:** En este paso se actualiza la funcion lambda y se añade una tabla de DynamoDB, al mismo tiempo se añade todo lo necesario para crear los recursos relacionados a API Gateway. Tambien se añade el codigo referente al frontend en react. En este paso se ilustra el uso de Outputs en los stacks de Cloudformation.

Teniendo en cuenta las diferentes etiquetas del repositorio, el Workshop iniciara haciendo

```
git checkout step1
```