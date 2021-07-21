import { Break } from "components/Break";
import React from "react";

export const Despedime: React.FunctionComponent = () => {
    return (
        <div className="flex h-screen">
            <div className="m-auto w-96 max-w-1/4 align-center">
                <img src="camoes.png" className="w-3/4" />
                <h1 className="text-center text-xl">Aprende portugues Caralho!</h1>
                <p>
                    Se o teu chefe se chegou ao pe de ti e disse:<Break />
                    <i>Poe-te no caralho, antes que o caralho se ponha em ti!</i><Break />
                    Foste <b>despedido</b>.<Break />

                    Se acordaste demanha e decidiste mandar tudo po caralho, <b><a href="/" className="text-yellow-600">demitiste-te</a></b>
                </p>
            </div>
        </div>
    );
}

export default Despedime;