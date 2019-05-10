import { LayaGL } from "../layagl/LayaGL"
	import { Stat } from "../utils/Stat"
	import { Buffer } from "./utils/Buffer"
	
	/**
	 * ...
	 * @author ...
	 */
	export class BufferStateBase {
		/**@private [只读]*/
		 static _curBindedBufferState:BufferStateBase;
		
		/**@private [只读]*/
		private _nativeVertexArrayObject:any;
		
		/**@private [只读]*/
		 _bindedIndexBuffer:Buffer;
		
		constructor(){
			this._nativeVertexArrayObject = LayaGL.instance.createVertexArray();
		}
		
		/**
		 * @private
		 */
		 bind():void {
			if (BufferStateBase._curBindedBufferState !== this) {
				LayaGL.instance.bindVertexArray(this._nativeVertexArrayObject);
				BufferStateBase._curBindedBufferState = this;
			}
		}
		
		/**
		 * @private
		 */
		 unBind():void {
			if (BufferStateBase._curBindedBufferState === this) {
				LayaGL.instance.bindVertexArray(null);
				BufferStateBase._curBindedBufferState = null;
			} else {
				throw "BufferState: must call bind() function first.";
			}
		}
		
		/**
		 * @private
		 */
		 bindForNative():void {
			LayaGL.instance.bindVertexArray(this._nativeVertexArrayObject);
			BufferStateBase._curBindedBufferState = this;
		}
		
		/**
		 * @private
		 */
		 unBindForNative():void {
				LayaGL.instance.bindVertexArray(null);
				BufferStateBase._curBindedBufferState = null;
		}
		
		/**
		 * @private
		 */
		 destroy():void {
			LayaGL.instance.deleteVertexArray(this._nativeVertexArrayObject);
		}
	
	}

