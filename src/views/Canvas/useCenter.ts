import useCanvas from "./useCanvas"
import { WorkSpaceDrawType } from "@/configs/canvas"
import { CanvasElement } from "@/types/canvas"

export default () => {
  const [ canvas ] = useCanvas()
  const workSpaceDraw = canvas.getObjects().filter(item => (item as CanvasElement).id === WorkSpaceDrawType)[0] as CanvasElement
  const centerPoint = workSpaceDraw.getCenterPoint()
  const originPoint = workSpaceDraw.getPointByOrigin('left', 'top')
  return {
    workSpaceDraw,
    centerPoint,
    originPoint
  }
}