import GameObject, { objects } from 'spirus/src/classes/object';
import setup from 'spirus/src/index';
import { ObjectType } from 'spirus/src/types';
import { isVectorOOB } from 'spirus/src/utils'
setup();

class Faller extends GameObject {
	public override update(_delta: number, _objects: GameObject[], _canvas: HTMLCanvasElement): void {
		if (!isVectorOOB(this.transform.position.y)) this.transform.position.y--;
	}
}

objects.push(
	new Faller({
		position: {
			x: 0,
			y: 0,
		},
		rotation: {
			x: 0,
		},
		scale: {
			x: 15,
			y: 15
		}
	}, ObjectType.square, {})
);