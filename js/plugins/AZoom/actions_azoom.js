export const ZOOM_ADD_POINT = 'ZOOM_ADD_POINT';

/**
 * zoom to a specific point
 * @memberof actions.search
 * @param {object} pos as array [x, y] or object {x: ..., y:...}
 * @param {number} zoom level to zoom to
 * @param {string} crs of the point
*/
export function zoomAndAddPoint(pos, zoom, crs) {
    return {
        type: ZOOM_ADD_POINT,
        pos,
        zoom,
        crs
    };
}
