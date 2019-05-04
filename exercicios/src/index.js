import React from 'react'
import ReactDom from 'react-dom'

// import Primeiro from './componentes/Primeiro'

// import BomDia from './componentes/BomDia'

// import Multi, { BoaNoite } from './componentes/Multiplos'

// import Saudacao from './componentes/Saudacao'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDom.render(
	// <div>
	// 	<Multi.BoaTarde nome="Ana" />
	// 	<BoaNoite nome="Bia" />
	// </div>
	// <Saudacao tipo="Bom dia" nome="João" />
	<Pai nome="Paulo" sobrenome="Silva">
		{/* Como passo os componentes filhos aqui? */}
		<Filho nome="Pedro" />
		<Filho nome="Ana" />
		<Filho nome="Bia" />
	</Pai>,
	document.getElementById('root')
)
