radio('new_scene_graph').subscribe(render);

// get the scene graph
var latest_scene_graph =
  get('scene-graph-1').and_trigger('new_scene_graph');

// show the root for now

// render