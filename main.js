const app = new PIXI.Application(800, 800, {backgroundColor:0x000000});

document.body.appendChild(app.view);

const loader = new PIXI.Loader();

const orbContainer = new PIXI.Container();

loader.add('orbDark', 'assets/Dark.png')
    .add('orbLight', 'assets/Light.png')
    .add('orbNature', 'assets/Nature.png')
    .load(build);

function build()
{
    const orbDark = app.loader.orbDark;
    const orbLight = app.loader.orbLight;
    const orbNature = app.loader.orbNature;

    const orb1 = new PIXI.Sprite(orbDark);
    const orb2 = new PIXI.Sprite(orbLight);
    const orb3 = new PIXI.Sprite(orbNature);

    orbContainer.addChild(orb1);
    orb1.x = 0;
    orbContainer.addChild(orb2);
    orb2.x = 100;
    orbContainer.addChild(orb3);
    orb3.x = 200;
}


app.stage.addChild(orbContainer);
