# la Gestion des state

## Le state

Un state est un concept fondamental dans React Native qui permet de stocker des informations locales sur le composant. Il est mutable, et lorsqu'il est modifié, le composant est re-rendu pour refléter ces changements.

**Comment déclarer un state avec useState**

```
import { useState } from 'react';

const MonComposant = () => {
    const [maVariable, setMaVariable] = useState('valeur initiale');
}
```

**Comment modifier la valeur du state** :

```
setMaVariable('nouvelle valeur');

```
