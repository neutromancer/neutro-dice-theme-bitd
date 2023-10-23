Hooks.once('diceSoNiceReady', dice3d => {
    dice3d.addSystem({
        id: "bitd", name: "Blades in the Dark",
    }, "preferred");

    dice3d.addColorset({
        name: 'bitd-base',
        category: 'Blades in the Dark',
        description: 'Blades in the Dark Base Die',
        foreground: '#fff',
        background: '#2c2c2c',
        outline: 'none',
        texture: 'none',
        material: 'metal',
        font: 'Kirsty, sans-serif',
    }, 'preferred');

    dice3d.addDicePreset({
        type: 'd6',
        labels: [
            'modules/foundryvtt-mydice/textures/bitd/1.webp',
            'modules/foundryvtt-mydice/textures/bitd/2.webp',
            'modules/foundryvtt-mydice/textures/bitd/3.webp',
            'modules/foundryvtt-mydice/textures/bitd/4.webp',
            'modules/foundryvtt-mydice/textures/bitd/5.webp',
            'modules/foundryvtt-mydice/textures/bitd/6.webp',
        ],
        system: 'bitd',
        colorset: 'bitd-base',
    });
});
